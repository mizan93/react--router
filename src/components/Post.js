import Axios from 'axios'
import React,{useState, useEffect} from 'react'

function Post({match}) {
    const [post, setpost] = useState({
        id:'',
        title:'',
        body:'',
       
    })
    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
        .then(res=>{
            setpost({
                id:res.data.id,
                title:res.data.title,
                body:res.data.body,
            })
            // console.log('id:'+match.params.id)
        })
        .catch(err=>{
            console.log(err.message)
        })
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            <h1> Single Post details</h1>
           <p>ID: {post.id}</p>
           <p>TITLE: {post.title}</p>
           <p>BODY: {post.body}</p>
        </div>
    )
}

export default Post
