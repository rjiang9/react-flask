import { useState } from 'react'
import axios from "axios"
import logo from './logo.svg';
import './App.css';

function App() {

  const [profileData, setProfileData] = useState({})

  function getData () {
    axios(
      {
        method: "GET",
        url: "/profile"
      }
    ).then((response) => {
      const res = response.data
      setProfileData(
        ({
          profile_name: res.name,
          about: res.about
        })
      )
    }).catch((error) => {
      if (error.response) {
        console.log(error.responsea)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <p>Click to get the profile</p>

      <button onClick={getData}>Click</button>
      {profileData && <div>
        <p>profile name: {profileData.profile_name}</p>
        <p> about: {profileData.about}</p>
        </div>
      }
      </header>
    </div>
  );
}

export default App;
