import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts]=useState([])

    useEffect(() => {
        db.collection('Posts').orderBy('timeStamp', 'desc').onSnapshot(snapShot =>(
            setPosts(snapShot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])
    return (
        <div className="feed">
            <StoryReel  />
            <MessageSender />
            {posts.map((post) => {
                return <Post
                    key ={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timeStamp}
                    username={post.data.userName}
                    image={post.data.image}
                    />
            })}
        </div>
    )
}

export default Feed
