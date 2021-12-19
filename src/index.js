import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.scss';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navigation,
  Home,
  Standings,
  Contact,
  Blog,
  Posts,
  Post
} from './components';

// const options = {
//   method: 'GET',
//   url: 'https://free-nba.p.rapidapi.com/games?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&dates[]=2021-11-27'
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

ReactDOM.render(

  <Router>
    <Navigation />
    <div className='bg-wrapper'>
      <div className="video-background">
        <iframe title="nba video bg" src="https://player.vimeo.com/video/119920294?autoplay=1&loop=1&autopause=0&background=1" width="1920" height="100%" frameBorder="0" allow="autoplay;" allowFullScreen></iframe>
      </div>        
      <div className="content">
        <div className="container">
          <div className="content-box">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/standings" element={<Standings />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    
          </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}  
  </Router>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
