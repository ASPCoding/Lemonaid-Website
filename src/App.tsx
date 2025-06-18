import { useState } from 'react'
import lemonBanner from './assets/gang_eyes_2.png'
import instalogo from './assets/insta.png'
import twitterlogo from './assets/twitterlogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <p>Lemonaid |</p>
        <a href="https://www.instagram.com/lem0na1d_">
          <img src={instalogo} id="instalogo"/>
        </a>
        <a href="https://x.com/lem0na1d_">
          <img src={twitterlogo} id="twitlogo"/>
        </a>
      </div>
      <div>
        <img src={lemonBanner} id="banner"/>
      </div>
    </>
  )
}

export default App
