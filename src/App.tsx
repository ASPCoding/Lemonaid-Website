import { useState } from 'react'
import lemonBanner from './assets/fresh lemonaid.avif'
import instalogo from './assets/insta.png'
import twitterlogo from './assets/twitterlogo.png'
import shark from './assets/bday decals blahaj.avif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <div id="name">
          <p>Lemonaid |</p>
        </div>

        <div id="socials">
          <a href="https://www.instagram.com/lem0na1d_">
            <img src={instalogo} id="instalogo"/>
          </a>

          <a href="https://x.com/lem0na1d_">
            <img src={twitterlogo} id="twitlogo"/>
          </a>
        </div>
      </div>

      <div className="welcome">
        <div id="grad_background">
            <img src={lemonBanner} id="banner"/>
        </div>

        <div id="links">
          <h1>LemonAid</h1>
          <p>welcome :3c</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSedhZLyFn9VVGTj0m6f5EOSFUnoWwc8gEopbOyNZ1yutWtnBw/closedform" target="_blank" rel="noopener noreferrer">
            <button id="commision">Commission Form</button>
          </a>
          <a href="google.com" target="_blank" rel="noopener noreferrer">
            <button id="example">Example</button>
          </a>
          <a href="https://docs.google.com/document/d/11xHLcwYBXGbOAwcrt1eCRpIIYF6pdFbsNhYw0bDZcx0/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
            <button id="tos">Terms of Service</button>
          </a>
          <a href="https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/" target="_blank" rel="noopener noreferrer">
            <img src={shark}/>
          </a>
        </div>
      </div>

      <div className="aboutme">
        
      </div>

      <div className="artworks">

      </div>
    </>
  )
}

export default App
