import {FETCH_POST,NEW_POST} from './types';

export const fetch_post = () => dispacher =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data=>dispacher({
        type:FETCH_POST,
        payload:data,
    }));
}

/*
export const create_post = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    })
    .then(data=>data.json())
    .then(resp=>{
        console.log(resp);
    });
}*/