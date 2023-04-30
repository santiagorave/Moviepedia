import { useState } from 'react'
import Nav from './components/navComponent'
import GetData from './components/GetData'
function App() {

  const GET_250_DATA="/src/data/Top250.json";
  const GET_POPULAR="/src/data/Popular.json";
  const GET_TV="/src/data/Popular-TV.json";
  const GET_SOON="/src/data/ComingSoon.json";


  return (
    <>
    <Nav/>
    <GetData title={"Most Popular"} data={GET_POPULAR}/>
    <GetData title={"Popular TV Shows"} data={GET_TV}/>
    <GetData title={"Top 250 Movies of All Time"} data={GET_250_DATA}/>
    <GetData title={"Coming Soon"} data={GET_SOON}/>
    </>
  )
}

export default App
