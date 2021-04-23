import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { GET_PEOPLE } from '../graphql/queries';
import { GqlResponse, Person } from '../models/gql.response.model';


function HomePage() {

    const [url, setUrl] = useState(() => '')
    const [people, setPeople] = useState<Person[]>(() => [])

    const { error, loading, data } = useQuery(GET_PEOPLE, {
        variables: {
            url
        }
    })

    const response: GqlResponse = data; 

    useEffect(() => {
        if (data) {
            setPeople(response.people.results)
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
        if (response) {
            setUrl(response.people.next);
        }
    }


    /**
     *
     *
     */
    function PrevPage () {
        if (response) {
            const url = response.people.previous;
            setUrl(url ? url : "");
        }
    }

    return (
        <div className="container my-5">
            {people.map((person, i) => {
                return <p key={i}> {person.name}</p>
            })}
            
            { response.people.next !== null &&
                <button className="btn btn-primary mr-3" onClick={nextPage}>Next</button>            
            }
            { response.people.previous !== null &&
                <button className="btn btn-primary" onClick={PrevPage}>Previous</button>
            }
        </div>
    );
}

export default HomePage;