import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TopHotSauce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sauce: '',
            rating: '',
            sauces: []
        };
        this.addSauce = this.addSauce.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8000/top-sauces')
            .then(res => this.setState(res.data));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    addSauce(event) {
        event.preventDefault();
        const sauce = { "name": this.state.sauce, "rating": this.state.rating }
        axios.post('http://localhost:8000/top-sauces', sauce)
            .then(response => this.setState(
                { sauces: this.state.sauces.concat(sauce) }
            ))
    }
    deleteSauce(sauce) {
        const newSauces = this.state.sauces;
        if (newSauces.indexOf(sauce) > -1) {
        newSauces.splice(newSauces.indexOf(sauce), 1);
        this.setState({sauces: newSauces})
        }
    }
    render() {
        return (
            <div>
                <h1>Top Hot Sauces</h1>
                <form onSubmit={this.addSauce}>
                    <input
                        name="sauce"
                        type="text"
                        value={this.state.sauce}
                        onChange={this.handleChange}
                        placeholder="Name that Sauce"
                    />
                    <input
                        name="rating"
                        type="number"
                        value={this.state.rating}
                        onChange={this.handleChange}
                        placeholder="Rate the Sauce"
                    />
                    <input type="submit" value="submit" />
                </form>
                <ol>
                    {this.state.sauces.map(sauce =>
                        <li key={sauce._id}>{sauce.name} <strong>{sauce.rating}</strong> <button onClick={this.deleteSauce.bind(this, sauce)}>Delete</button></li>
                    )}
                </ol>
                <Link to='/'>Back</Link>
            </div>
        )
    }
};