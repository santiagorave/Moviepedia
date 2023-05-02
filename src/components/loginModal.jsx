import { useState } from 'react'


function LoginModal(props) {






    // const that will have this function to close the modal 
    const closeModal = function () {
        props.modalLoginState(false)
    }

    return (
        <>
            <section id="loginModal" className="loginModal">

                <article id='LoginContainer' className='LoginContainer'>
                    {/* calls the function to close the modal */}
                    <span onClick={closeModal} className="close">&times;</span>

                    <h4> Login </h4>

                    <form action="POST">
                        <input type="email" name="email" id="email" placeholder='your email' />
                        <input type="password" name="password" id="password" placeholder='enter your password'/>

                        <article className='loginBtn'>
                            <button type="submit">
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