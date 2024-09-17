import React, { useEffect, useState } from 'react'

export default function Post() {
    const [posts,setposts]=useState([]);
    const [isloading, setloading]=useState(true);

   async function postHandler(){
        try {
            setloading(true)
            const apiResponse = await fetch('https://dummyjson.com/posts/1');
            const result = await apiResponse.json();
            // console.log(result);

            if(result){
                setposts(result);
                setloading(false);
            }else{
                setposts([]);
                setloading(false);
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
    
    useEffect(()=>{
        postHandler();
    }, []);

    if(isloading) return <h1>getting posts please wait........</h1>
  return (
    <div>
        <h1>posts</h1>
            {posts ? (
        <ul>
            
            <li key={posts.id}>
                <h1>POST ID: {posts.id}</h1>
                <h3>USER ID: {posts.userId}</h3>
                <h5>POST TITLE: {posts.title.toUpperCase()}.</h5>
                <p>{posts.body} </p>
            </li>            
        </ul>
            ):(
                <li>no post foun</li>
            )
            }
    </div>
  )
}



