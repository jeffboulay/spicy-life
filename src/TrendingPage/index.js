import React from 'react';
import { Link } from 'react-router-dom';
export default class Trending extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            sauces:[],
        }
    }

    componentDidMount() {
        const sauces = [
            {
                "id": 1,
                "name": "Awesome Sauce",
                "rating": 5
            }
        ]
        this.setState({ sauces })
    }
    render() {
        return(
            <div>
                <h1>Trending Hot Sauces</h1>
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