import { Component } from 'react';
import './search-bar.style.css'

export class SearchBox extends Component {

    render() {
        return (
            <input className='search-box' type='search' onChange={(event) => this.props.changeHandler(event)}></input>
        )
    }
}