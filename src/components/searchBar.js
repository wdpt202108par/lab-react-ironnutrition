// Brainstorming with Cleiton//

import React, {Component} from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name: ""
        }
    }
    handleChange = (e) => {
        const { name, value } = e.currentTarget
        this.setState({
            [name]: value,
        })
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.getSearchBar(this.state)
    }
    render() {
        return(
            <form>
            <label htmlFor="header-search">
                <span className="visually-hidden">Search food</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search food"
                name={this.handleChange}
            />
            <button type="submit">Search</button>
        </form>
        )
    }
}
export default SearchBar;