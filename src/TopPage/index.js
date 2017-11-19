import React from 'react';
import { Link } from 'react-router-dom';

export default class TopHotSauce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sauce: '',
            rating:'',
            sauces: []
        };
        this.addSauce = this.addSauce.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const sauces = [
            {
                'id': 1,
                'name': 'Awesome Sauce',
                'rating': 5
            },
            {
                'id': 2,
                'name': 'Bad Ass Sauce',
                'rating': 4
            }
        ];

        this.setState({ sauces });
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
        const sauce = { 
            name: this.state.sauce,
            rating: this.state.rating
        }
        this.setState({
            sauces: this.state.sauces.concat(sauce)
        })
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
                        <li key={sauce.id}>{sauce.name} <strong>{sauce.rating}</strong></li>
                    )}
                </ol>
                <Link to='/'>Back</Link>
            </div>
        )
    }
};