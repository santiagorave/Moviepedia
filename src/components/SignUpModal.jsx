function SignUpModal (props){

    const closeModal = function() {
        props.modalSignUpState(false)
    }

    return(
        <section id="SignUpModal" className="SignUpModal">

            {/* calls the function to close the modal */}
            <span onClick={closeModal} className="close">&times;</span>

            <h4> Create User </h4>

            <form action="POST">
                <input type="text" name="Username" id="Username" />
                <input type="email" name="email" id="email" />
                <input type="password" name="password"id="password" />
                <select name="genre" id="genre">
                    <option value="horror">horror</option>
                    <option value="comedy">comedy</option>
                    <option value="romance">romance</option>
                    <option value="thriller">thriller</option>
                </select>
            </form>

            <article>
                <button type="submit" id="createUserBtn">
                    Create User
                </button>
            </article>


        </section>
    );
}
export default SignUpModal