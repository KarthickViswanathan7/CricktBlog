// /*
import React from "react";
import CricketBlog from "./cricket/cricket.js";
import NavScrollExample from "./nav.js";
import "./blog.css";
import List from "./list/list.js";
import ReactDOM from "react-dom/client";
import "./blog.css";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from './login&signup/login.js';
import LandingPage from "./content.js";
import SignUp from "./login&signup/SignUp.js";
import AuthorPage from "./authour.js";
import YoutubeEmbed from "./yv.js";
import land from "./lading/land.js";
import List1 from "./test.js";
import PostPage from "./test.js";
import Final from './landd.js'
export default function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<CricketBlog />} />
          <Route path="/" Component={CricketBlog} />
          <Route path='cricket' Component={CricketBlog} />
          <Route path='list' Component={List} />
          <Route path='login' Component={Login} />
          <Route path='landing' Component={LandingPage} />
          <Route path='signup' Component={SignUp} />
          <Route path='land' Component={land} />
          <Route path='final' Component={Final} />
        </Routes>
       
      </BrowserRouter>
     
    
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />

);
