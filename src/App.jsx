import { useState } from 'react'
import Nav from './components/navComponent'
import GetData from './components/getTop250'
import MainCarrousel from './components/Carrouselv2'
// import MainCarrousel from './components/Carrousel'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <Nav/>
    <MainCarrousel/>
    <GetData/>
    </>
  )
}

export default App
