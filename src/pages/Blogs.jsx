import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import Loader from '../components/Loader';
import Post from '../components/Post';

function Blogs() {
    const [posts, setPosts] = useState(null);
    const [fetching, setFetching] = useState(false);
    const url = 'https://newsapi.org/v2/everything?q=gaming&from=2023-01-07&sortBy=publishedAt&apiKey=2be3aed283704f5a8e1997f82722b394'
    useEffect(() => {
        setFetching(true);
        axios.request(url).then(function (response) {
          setPosts(response.data.articles.filter(item => item.urlToImage != null));
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