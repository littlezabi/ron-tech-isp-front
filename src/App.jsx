import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Header from './components/Headers'
import Services from './pages/Services/Services'
import Packages from './pages/Packages'
import About from './pages/About'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
        <Header/>
        <Home/>
        <Services/>
        <Packages/>
        <About/>
    </div>
  )
}

export default App
