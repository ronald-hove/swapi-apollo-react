import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import PersonCard from '../components/PersonCard';
import Search from '../components/Search';
import { GET_PEOPLE } from '../graphql/queries';
import { GqlResponse } from '../models/gql.response.model';


function Home() {
    const history = useHistory();

    const [url, setUrl] = useState<string | undefined>(() => '')
    const [view, setView] = useState(() => 'home') // home | search
    const [response, setData] = useState<GqlResponse | undefined>(() => undefined)


    const { error, loading, data } = useQuery(GET_PEOPLE, {
        variables: {
            url
        }
    })


    useEffect(() => {
        if (data) {
            setData(data)
        }
        if (error) {
            console.log('HomePage >> failed to fetch people', error)
        }
    }, [data])


    /**
     * Paginate forward 
     *
     */
    const nextPage = (nextUrl: string) => {
        setUrl(nextUrl);
    }

    /**
     * paginate backwards
     * 
     */
    const PrevPage = (prevUrl: string) => {
        setUrl(prevUrl);
    }



    /**
     * Paginate to a specific page
     *
     * @param {number} pageNumber
     */
    const paginate = (pageNumber: number) => {
        setUrl(`http://swapi.dev/api/people/?page=${pageNumber}`)
    }

    /**
     *
     *
     */
    const navigateToDetails = (url: string) => {
        history.push('/character', {url});
    } 

    /**
     *
     *
     * @param {GqlResponse} searchResults
     */
    const handleSearchEvent = (searchResults: GqlResponse) => {
        if (searchResults?.people?.results?.length > 0) {
            setView('search')
            setData(searchResults)
        }else {
            setUrl('')
        }

    }

    const handleSearchCleared = (view: string) => {
        setView(view)
    }

    return (
        <div className="container mb-5">
            {!loading &&
                <Search 
                    searchEvent={handleSearchEvent}
                    searchClearedEvent={handleSearchCleared}
                />
            }

            {response?.people?.results.map((person, i) => {
                return <div key={i}>
                    <PersonCard 
                        cardClicked={navigateToDetails}
                        name={person.name}
                        height={person.height}
                        mass={person.mass}
                        gender={person.gender}
                        homeworld={person.homeworld_name}
                        url={person.url}
                    />
                </div>
            })}

            {loading &&
                <Loader />
            }

            {!loading && view === 'home' &&
                <div className="mt-3">
                    <Pagination
                        troopersPerPage={response?.people.results.length}
                        totalTroopers={response?.people.count}
                        response={data}
                        paginate={paginate}
                        nextPage={nextPage}
                        PrevPage={PrevPage}
                    />
                </div>
            }
        </div>
    );
}

export default Home;