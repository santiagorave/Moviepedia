import { useState } from 'react'
import Nav from './components/navComponent'
import GetData from './components/getTop250'
function App() {

  return (
    <>
    <Nav/>
    <GetData/>
    </>
  )
}

export default App
