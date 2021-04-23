import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import PersonCard from '../components/PersonCard';
import Search from '../components/Search';

import { GET_PEOPLE } from '../graphql/queries';
import { GqlResponse} from '../models/gql.response.model';


function Home() {

    const [url, setUrl] = useState<string | undefined>(() => '')
    const [response, setData] = useState<GqlResponse | undefined>(() => undefined)

    const { error, loading, data } = useQuery(GET_PEOPLE, {
        variables: {
            url
        }
    })

    useEffect(() => {
        if (data) {
            setData(data)
            // window.scroll(0,0)
        }
        if (error) {
            console.log('HomePage >> failed to fetch people', error)
        }
    }, [data])


    /**
     *
     *
     */
    function nextPage () {
        if (data) {
            setUrl(response?.people?.next);
        }
    }


    /**
     *
     *
     */
    function PrevPage () {
        if (data) {
            const url = response?.people?.previous;
            setUrl(url ? url : "");
        }
    }

    return (
        <div className="container mb-5">

            <Search/>
            
            {response?.people?.results.map((person, i) => {
                return <div key={i}>
                    <PersonCard 
                        name={person.name}
                        height={person.height}
                        mass={person.mass}
                        gender={person.gender}
                        homeworld={person.homeworld}
                    />
                </div>
            })}

            {loading &&
                <Loader />
            }

            <div className="mt-3">
                { response?.people?.next !== null &&
                    <button className="btn btn-primary mr-3" onClick={nextPage}>Next</button>            
                }
                { response?.people?.previous !== null &&
                    <button className="btn btn-primary" onClick={PrevPage}>Previous</button>
                }
            </div>
        </div>
    );
}

export default Home;