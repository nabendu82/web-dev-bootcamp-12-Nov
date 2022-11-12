import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const res = await fetch(url)
            const posts = await res.json()
            setPosts(posts)
        }
        fetchPosts()
    },[])

    return posts.map(post => <PostItem key={post.id} post={post} />)

}

export default PostList