import { useState, useEffect,useNavigate} from 'react'
import Nav from './components/navComponent'
import GetData from './components/GetData'
import LoginModal from './components/loginModal';
import SignUpModal from './components/SignUpModal';
import { useLocation } from "react-router-dom";
import MainCarrousel from './components/Carrouselv2'
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
      // console.log(`User Login In ${userLogged.name}`)
  const [users,setUsers]=useState([
    new User("test@gmail.com","santiagorave","test@gmail.com","test123","Drama"),
    new User("matos@gmail.com","matos","matos@gmail.com","test123","Drama")
    
  ]);
  let {state} = useLocation();

  useEffect(() => {
    window.history.replaceState({}, document.title);
    // console.log(state?.state)

    console.log(state)
    if(state){
      setUserLogged(state.state);
      setUsers(state.users)
    }
    
  }, [])
  

  // fuction to pass to the son so it ill be executed
  const userHandler = function(userObject) {
    setUserLogged(userObject)

  }


  console.log(users)


  {/* sons */}
  return (
    <>
    {/* if modalLogin is true : <LoginModal modalSignUpState={setModalsignUp} modalLoginState={setModalLogin} /> happens */}
    <Nav allUsers={users} userState={userLogged} userMethod={setUserLogged} modalLoginState={setModalLogin}/>
    {modalLogin && <LoginModal userCallback={userHandler} authUsers={users} modalSignUpState={setModalsignUp} modalLoginState={setModalLogin} />}
    {/* if signUp is true : <SignUpModal modalSignUpState={setModalsignUp}/>}
    <Nav modalLoginState={setModalLogin}/> happens */}
    <MainCarrousel/>
    {/* give the function userHandler to the son */}
    {signUp && <SignUpModal allUsers={users} changeUsers={setUsers} userCallback={userHandler} modalSignUpState={setModalsignUp}/>}
    {/* at the nav the method setModalLogin is true*/}
    <GetData user={userLogged} title={"Most Popular"} data={GET_POPULAR}/>
    <GetData user={userLogged} title={"Popular TV Shows"} data={GET_TV}/>
    <GetData user={userLogged} title={"Top 250 Movies of All Time"} data={GET_250_DATA}/>
    <GetData user={userLogged} title={"Coming Soon"} data={GET_SOON}/>
    </>
  )
}

export default App
