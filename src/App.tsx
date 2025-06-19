import { useState } from 'react'
import lemonBanner from './assets/fresh lemonaid.avif'
import instalogo from './assets/insta.png'
import twitterlogo from './assets/twitterlogo.png'
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
          <p>welcome :3c</p>
        </div>
      </div>

      <div className="artworks">

      </div>
    </>
  )
}

export default App
