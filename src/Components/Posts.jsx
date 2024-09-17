import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

export default function Post() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function postHandler() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/posts');
            const result = await apiResponse.json();
            console.log(result);

            // Adjust according to the API response structure
            if (result.posts) {
                setPosts(result.posts); // Use `result.posts` instead of `result.post`
            } else {
                setPosts([]);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        postHandler();
    }, []);

    if (isLoading) return <h1>Getting posts, please wait...</h1>;

    return (
        <div className={styles.postcontainer}>
            <h1>Posts</h1>
            <div className={styles.card}>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className={styles.cardbody}>
                            <h1>POST ID: {post.id}</h1>
                            <h3>USER ID: {post.userId}</h3>
                            <h5>POST TITLE: {post.title.toUpperCase()}.</h5>
                            <p>{post.body}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts found</p>
                )}
            </div>
        </div>
    );
}
