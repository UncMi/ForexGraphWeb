/* eslint-disable no-unused-vars */
import './App.css'
import axios from "axios";
import {useEffect, useState} from 'react';
import Navbar from './Components/Navbar';
import Forex from './Components/Forex';
function App() {

  const [listOfPosts, setListOfPosts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <>
        <Forex></Forex>
        <div className="App">
          {listOfPosts.map((value, key) => {
          return <div >{value.title}</div>;
          })}
        </div>
    </>
  )
}

export default App
