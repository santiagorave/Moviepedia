import { useRef, useState } from "react";
// classes 
import User from '/src/classes/User.js'

function SignUpModal(props) {
    const [notValid, setNotValid] = useState({
        valid: false,
        message: ""
    });
    const closeModal = function () {
        props.modalSignUpState(false)
    }

    // references by default are null
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const genre = useRef(null);


    const formHandler = function (e) {
        e.preventDefault();
        let user = username.current.value;
        let Useremail = email.current.value;
        let Userpassword = password.current.value;
        let UserGenre = genre.current.value;
        let repeatedEmail = props.allUsers.find(user => user.email == Useremail)
        // console.log(`Repeated Email ${repeatedEmail.id}`)

        if (!user || !Useremail || !Userpassword || !UserGenre) {
            setNotValid({ valid: true, message: "You need to complete all the fields" });

        } else if (repeatedEmail) {
            setNotValid({ valid: true, message: "The entered email already exists" });

        }

        else {
            let newUser = new User(Useremail, user, Useremail, Userpassword, UserGenre);
            props.userCallback(newUser)
            props.changeUsers(allUsers => [...allUsers, newUser])
            props.modalSignUpState(false)
        }
        // gets the function (userHandler) and pass a new User

    }

    return (
        <section id="SignUpModal" className="SignUpModal">

            <section id="SignUpContainer" className="SignUpContainer">

                {/* calls the function to close the modal */}
                <span onClick={closeModal} className="close">&times;</span>

                <h4> Create User </h4>

                <form>
                    {/* ref={x} x is like the id */}
                    <input ref={username} type="text" name="Username" id="Username" placeholder="username" />
                    <input ref={email} type="email" name="email" id="email" placeholder="your email" />
                    <input ref={password} type="password" name="password" id="password" placeholder="password" />
                    <select name="genre" id="genre" ref={genre}>
                        <option value="horror">horror</option>
                        <option value="comedy">comedy</option>
                        <option value="romance">romance</option>
                        <option value="thriller">thriller</option>
                    </select>
                    <p className='warning' hidden={!notValid.valid}><i className="fa-solid fa-triangle-exclamation"></i>{notValid.message}</p>
                    <article>
                        <button onClick={formHandler} type="submit" id="createUserBtn">
                            Create User and login
                        </button>
                    </article>
                </form>
            </section>





        </section>
    );
}
export default SignUpModal