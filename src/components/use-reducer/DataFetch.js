import React, { useReducer, useEffect } from 'react';
import Axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: '',
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: '',
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong',
            }
        default:
            return state;            
    }
}

// demonstrate http call and dispatch with reducer
export default function DataFetch(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        Axios.get(`https://my-json-server.typicode.com/typicode/demo/posts/1`,)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: 'FETCH_ERROR',
            })
        })
    }, [])
    return (
        <div>
            {state.loading ? <div>Loading....</div> : null}
            {state.post ? <div>{state.post.title}</div> : null}
            {state.error ? <div>{state.error}</div> : null}
        </div>
    );
}
