import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { SEARCH_PEOPLE } from '../graphql/queries';
import Loader from './Loader';

function Search ({searchEvent, searchClearedEvent}: any) {

    const [ searchInput, setQuery] = useState(() => '')
    const [ gqlQuery, setGqlQuery] = useState<string | undefined>(() => undefined)


    const { error, loading, data } = useQuery(SEARCH_PEOPLE, {
        variables: {
            query: gqlQuery
        }
    })

    useEffect(() => {
        if (data) {
            if (searchInput.length >= 3) {
                searchEvent({
                    people: {
                        count: data.search.count,
                        next: null,
                        previous: null,
                        results: data.search.results
                    }
                })
            }
        }
    }, [data])

    useEffect(() => {
        if (searchInput.length === 0) {
            console.log('input', searchInput)
            searchClearedEvent('home')
        }


    }, [searchInput])


    /**
     *
     *
     */
    const handleSearchSubmit= (e: any) => {
        setGqlQuery(searchInput)
        e.preventDefault();
    }

    return (
        <div className="container mb-4">
            <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                    <input 
                        className="search_input"
                        name='searchInput'
                        type="text" 
                        placeholder="Search for a SW character"
                        value={searchInput}
                        onChange={e => setQuery(e.target.value)}>
                    </input>
                    <a onClick={e => handleSearchSubmit(e)} className="search_icon">
                        <i className="fas fa-search"></i>
                    </a>
                </div>
            </div>
            {loading &&
                <div className="mb-5 pb-3">
                    <Loader />
                </div>
            }
        </div>
    )
}

export default Search;