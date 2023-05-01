import { useRef } from "react";

function SignUpModal (props){

    const closeModal = function() {
        props.modalSignUpState(false)
    }


    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const genre = useRef(null);


    const formHandler = function(e){
        e.preventDefault();
        let user = username.current.value;
        let Useremail = email.current.value;
        let Userpassword = password.current.value;
        let UserGenre = genre.current.value;
        console.log(user,Useremail,Userpassword,UserGenre)
    
    }

    return(
        <section id="SignUpModal" className="SignUpModal">

            {/* calls the function to close the modal */}
            <span onClick={closeModal} className="close">&times;</span>

            <h4> Create User </h4>

            <form>
                <input ref={username} type="text" name="Username" id="Username" placeholder="username"/>
                <input ref={email} type="email" name="email" id="email" placeholder="your email" />
                <input ref={password} type="password" name="password"id="password" placeholder="password"/>
                <select name="genre" id="genre" ref={genre}>
                    <option value="horror">horror</option>
                    <option value="comedy">comedy</option>
                    <option value="romance">romance</option>
                    <option value="thriller">thriller</option>
                </select>
                <article>
                <button onClick={formHandler} type="submit" id="createUserBtn">
                    Create User
                </button>
            </article>
            </form>

          


        </section>
    );
}
export default SignUpModal