import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Posts() {
    const [posts, setposts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            // console.log(res.data)
            setposts(res.data)
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
        <h1>This is posts component</h1>
        {
            posts.map(post=>{
                return <div key={post.id}>
                <h4>{post.title}</h4>
                <Link to={`post/${post.id}`}>Post {post.id}</Link>
                </div>
            })
        }
            
        </div>
    )
}

export default Posts
