import { useQuery } from '@apollo/client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Loader from '../components/Loader';
import { GET_ONE } from '../graphql/queries';
import { GqlPersonResponse } from '../models/gql.response.model';

function Character(props: any) {

    window.scroll(0,0)

    const history = useHistory();


    const [response, setResponse] = useState<GqlPersonResponse | null>(() => null);
    const { error, loading, data } = useQuery(GET_ONE, {
        variables: {
            url: props.location.state.url
        }
    })

    useEffect(() => {
        if (data) {
            setResponse(data)
        }
        if(error) {
            console.log('CharacterPage >> error fetching character', error)
        }
    }, [data])


    const goBack = (e: any) => {
        e.preventDefault();
        history.goBack()
    }


    return(
        <div className="container">
            {loading &&
                <Loader/>
            }
            {!loading  && 
                <div className="jumbotron">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-outline-primary" onClick={(e) => goBack(e)}>
                                <i className="fas fa-arrow-left mr-2"></i>
                                Back
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="mb-4">{response?.person.name}</h3>
                            <hr/>
                            <p>
                                <i className="fas fa-venus-mars mr-2"></i>                                
                                {response?.person.gender} 
                            </p>
                            <p>
                                <i className="fas fa-tree mr-2"></i>
                                {response?.person.height} m tall
                            </p>
                            <p>
                                <i className="fas fa-weight mr-2"></i>                                
                                {response?.person.mass} kg heavy
                            </p>
                            <p>
                                <i className="fas fa-globe-americas mr-2"></i>                                
                                {response?.person.homeworld_name} is home
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Character;