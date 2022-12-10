import React, { useState, useEffect } from "react";
import Axios from "axios";

function User() {
    const [query, setQuery] = useState("")
    const [posts, setPost] = useState([]);
    const fetchProducts = async () => {
        const { data } = await Axios.get("https://jsonplaceholder.typicode.com/posts");
        const products = data;
        setPost(products);
        console.log(products);
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);


    return (
    <div id="user">
            <br />
            <center>
            <h1>Specific User</h1>
            <input placeholder="Enter" onChange={event => setQuery(event.target.value)}/><br/>
            {posts &&
                posts.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <div className="box" key={index}>
                        <p>{post.title}</p>
                        <p>{post.userId}</p>
                        <p>{post.body}</p>
                    </div>
                ))
            }
            </center>
    </div >
    );
}



export default User;