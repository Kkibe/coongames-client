import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import Loader from '../components/Loader';
import Post from '../components/Post';

function Blogs() {
    const [posts, setPosts] = useState(null);
    const [fetching, setFetching] = useState(false);
    const url = 'https://newsdata.io/api/1/news?apikey=pub_1237237f365d7ff387104765b2874bb6ca618&q=gaming'
    useEffect(() => {
        setFetching(true);
        axios.request(url).then(function (response) {
          setPosts(response.data.results.filter(item => {return item.image_url != null}));
          setFetching(false);
        }).catch(function (error) {
          console.error(error); 
          setFetching(false);
        });
      }, []);
  return (
    <div className="blogs">
      <Helmet>
        <meta charSet="utf-8" />
        <title>COONGAMES|BLOGS</title>
        <meta name="description" content="Browse and play games in your browser"/>
        <link rel="coongames" href="/blogs" />
      </Helmet>
      <div className="wrapper">
        {
          posts &&  posts.map((post) => {
            return <Post key={post.url} post={post}/>
          }) 
        }
      </div>
      {
        fetching && (<div className="wrapper">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>)
      }
    </div>
  )
}
export default Blogs;
