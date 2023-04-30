import { useState } from 'react'
import Nav from './components/navComponent'
import GetData from './components/GetData'
import LoginModal from './components/loginModal';
import SignUpModal from './components/SignUpModal';


function App() {

  const GET_250_DATA="/src/data/Top250.json";
  const GET_POPULAR="/src/data/Popular.json";
  const GET_TV="/src/data/Popular-TV.json";
  const GET_SOON="/src/data/ComingSoon.json";

  // but default the methods are hidden: useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [signUp, setModalsignUp] = useState(false);


  return (
    <>
    {/* if modalLogin is true : <LoginModal modalSignUpState={setModalsignUp} modalLoginState={setModalLogin} /> happens */}
    {modalLogin && <LoginModal modalSignUpState={setModalsignUp} modalLoginState={setModalLogin} />}
    {/* if signUp is true : <SignUpModal modalSignUpState={setModalsignUp}/>}
    <Nav modalLoginState={setModalLogin}/> happens */}
    {signUp && <SignUpModal modalSignUpState={setModalsignUp}/>}
    {/* at the nav the method setModalLogin is true*/}
    <Nav modalLoginState={setModalLogin}/>
    <GetData title={"Most Popular"} data={GET_POPULAR}/>
    <GetData title={"Popular TV Shows"} data={GET_TV}/>
    <GetData title={"Top 250 Movies of All Time"} data={GET_250_DATA}/>
    <GetData title={"Coming Soon"} data={GET_SOON}/>
    </>
  )
}

export default App
