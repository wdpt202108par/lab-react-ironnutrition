import React from 'react';

class Searchbox extends React.Component {
    // state = {
    //     search: ""
    // }

    // handleChange = (event) => {
    //     const val = event.target.value;
    //     this.setState({
    //       search: val
    //     })

    //     this.props.searchResults(val);
    // }

    render() {
        return (
            <div>
                <input className="input is-info" type="text" placeholder="Search" 
                value={this.props.query}
                onChange={(event) => {this.props.setQuery(event.target.value)}}
                />
            </div>
        )
    }
}

export default Searchbox;
