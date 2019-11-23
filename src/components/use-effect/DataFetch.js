import React, { useState, useEffect } from 'react';
import Axios from 'axios';
export default function DataFetch(props) {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idBySubmitButton, setIdBySubmitButton] = useState(1);

    useEffect(() => {
        Axios.get(`https://my-json-server.typicode.com/typicode/demo/posts/${idBySubmitButton}`,)
        .then(res => {
            console.log(res.data);
            setPost(res.data);
        }).catch(err => {

        })
    }, [idBySubmitButton]);

    return (
        <div>
            <input value={id} onChange={(e) => setId(e.target.value)}></input>
        <button onClick={() => setIdBySubmitButton(id)}>Submit</button>
        <div>
            {post.title}
        </div>
        </div>
        
    );
}
