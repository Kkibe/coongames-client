import React from 'react';
const Post = ({post}) => {
    return (
        <a href={post.url} className='post' title='post'>
            <div className="image-container">
                <img src={post.urlToImage} alt="" />
            </div>
            <h2>{post.title}</h2>
            <div className="content">
                {post.description}
            </div>
            <div className="info">
                <span>{post.author ? post.author : post.source.name}</span>
                <span>{new Date().toDateString(post.publishedAt)}</span>
            </div>
        </a>
    );
}
export default Post;