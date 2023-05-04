import { useState } from 'react'
import Nav from './components/navComponent'
import GetData from './components/GetData'
import LoginModal from './components/loginModal';
import SignUpModal from './components/SignUpModal';
import User from './classes/User';

// father 
function App() {

  const GET_250_DATA="/src/data/Top250.json";
  const GET_POPULAR="/src/data/Popular.json";
  const GET_TV="/src/data/Popular-TV.json";
  const GET_SOON="/src/data/ComingSoon.json";

  // by default the methods are hidden: useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [signUp, setModalsignUp] = useState(false);
  //by the fault the the variable is an object
  const [userLogged, setUserLogged] = useState({});
  const [users,setUsers]=useState([
    new User("test@gmail.com","santiagorave","test@gmail.com","test123","Drama"),
    new User("matos@gmail.com","matos","matos@gmail.com","test123","Drama")
    
  ]);

  // fuction to pass to the son so it ill be executed
  const userHandler = function(userObject) {
    setUserLogged(userObject)

  }

   console.log(users)


  {/* sons */}
  return (
    <>
    {/* if modalLogin is true : <LoginModal modalSignUpState={setModalsignUp} modalLoginState={setModalLogin} /> happens */}
    <Nav userState={userLogged} userMethod={setUserLogged} modalLoginState={setModalLogin}/>
    {modalLogin && <LoginModal userCallback={userHandler} authUsers={users} modalSignUpState={setModalsignUp} modalLoginState={setModalLogin} />}
    {/* if signUp is true : <SignUpModal modalSignUpState={setModalsignUp}/>}
    <Nav modalLoginState={setModalLogin}/> happens */}
    {/* give the function userHandler to the son */}
    {signUp && <SignUpModal allUsers={users} changeUsers={setUsers} userCallback={userHandler} modalSignUpState={setModalsignUp}/>}
    {/* at the nav the method setModalLogin is true*/}
    <GetData title={"Most Popular"} data={GET_POPULAR}/>
    <GetData title={"Popular TV Shows"} data={GET_TV}/>
    <GetData title={"Top 250 Movies of All Time"} data={GET_250_DATA}/>
    <GetData title={"Coming Soon"} data={GET_SOON}/>
    </>
  )
}

export default App
