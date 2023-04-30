import { useState } from 'react'
import Nav from './components/navComponent'
import GetData from './components/getTop250'
function App() {

  const GET_250_DATA="/src/data/Top250.json";
  const GET_POPULAR="/src/data/Popular.json";

  return (
    <>
    <Nav/>
    <GetData title={"Most Popular"} data={GET_POPULAR}/>
    <GetData title={"Top 250 Movies of All Time"} data={GET_250_DATA}/>
    </>
  )
}

export default App
