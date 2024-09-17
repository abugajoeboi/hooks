import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountDown from './Components/CountDown.jsx'
import Toggle from './Components/Toggle.jsx'
import ChangeColor from './Components/ChangeColor.jsx'
import ChangeText from './Components/ChangeText.jsx'
import UseEffect from './Components/UseEffect.jsx'
import User from './Components/User.jsx'
import Usertable from './Components/Usertable.jsx'
import Userwithbutton from './Components/Userwithbutton.jsx'
import Post from './Components/Post.jsx'
import Posts from './Components/Posts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <CountDown/>
    <Toggle/>
    <ChangeColor/>
    <ChangeText/> */}
    {/* <UseEffect/> */}
    {/* <User/> */}
    {/* <Usertable/> */}
    <Userwithbutton/>
    {/* <Post/> */}
    {/* <Posts/> */}
  </StrictMode>,
)
