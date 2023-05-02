import { useState } from 'react'


function LoginModal(props) {






    // const that will have this function to close the modal 
    const closeModal = function () {
        props.modalLoginState(false)
    }

    return (
        <>
            <section id="loginModal" className="loginModal">

                {/* calls the function to close the modal */}
                <span onClick={closeModal} className="close">&times;</span>

                <h4> Login </h4>

                <form action="POST">
                    <input type="email" name="email" id="email" />
                    <input type="password" name="password" id="password" />
                </form>

                <article>
                    <button type="submit">
                        Login
                    </button>
                </article>

                <aside>
                    <h6>
                        Do not have an account? Create one
                    </h6>

                    <button onClick={() => {
                        // when clicked: SignUp appers and Login hides
                        props.modalSignUpState(true);
                        props.modalLoginState(false);

                    }}>
                        Create User
                    </button>
                </aside>

            </section>

        </>
    );
}

export default LoginModal;