import React from 'react'

function Search () {
    return (
        <div className="container mb-4">
            <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                <input className="search_input" type="text" name="" placeholder="Search for a trooper"></input>
                <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Search;