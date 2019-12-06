import React from "react";
import './Search.css'

const Search = props => {
    return (
        <form onSubmit={props.handleSubmit} >
            <input type="text" name="search" id="searchBar" onInput={props.handleInput}/>
            <input type="submit" value="Search"/>
        </form>     
    )
}

export default Search;