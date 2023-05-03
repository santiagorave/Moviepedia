import { useState,useRef } from 'react'


function LoginModal(props) {
    const email = useRef(null);
    const password = useRef(null);
    // const that will have this function to close the modal 
    const closeModal = function () {
        props.modalLoginState(false)
    }
    const loginHandler = function(e){
        e.preventDefault();
        props.authUsers.forEach(user=>{
            if((user.email==email.current.value)&& (user.password==password.current.value)) {
                props.modalLoginState(false);
                props.userCallback(user)

            }
        })
    }

    return (
        <>
            <section id="loginModal" className="loginModal">

                <article id='LoginContainer' className='LoginContainer'>
                    {/* calls the function to close the modal */}
                    <span onClick={closeModal} className="close">&times;</span>

                    <h4> Login </h4>

                    <form action="GET">
                        <input ref={email} type="email" name="email" id="email" placeholder='your email' />
                        <input ref={password} type="password" name="password" id="password" placeholder='enter your password'/>

                        <article className='loginBtn'>
                            <button onClick={loginHandler}>
                                Login
                            </button>
                        </article>

                    </form>


                    <aside>
                        <section>
                            <h5>
                                Do not have an account? Create one
                            </h5>
                        </section>

                        <section>
                            <button onClick={() => {
                                // when clicked: SignUp appers and Login hides
                                props.modalSignUpState(true);
                                props.modalLoginState(false);

                            }}>
                                Create User
                            </button>
                        </section>
                    </aside>
                </article>

            </section>

        </>
    );
}

export default LoginModal;