import React from "react";


const Search = props => {
    return (
        <form onSubmit={props.handleSubmit} style={{marginBottom:30}}>
            <input type="text" name="search"  onInput={props.handleInput}/>
            <input type="submit" value="Search"/>
        </form>     
    )
}

export default Search;