import React from "react";
import './Search.css'

const Search = props => {
    return (
        <form onSubmit={props.handleSubmit} id="searchContainer" >
            <input type="text" name="search" id="searchBar" onInput={props.handleInput} placeholder="e.g. manChester UnIted"/>
            <input type="submit" value="Search" id="searchbtn"/>
        </form>     
    )
}

export default Search;