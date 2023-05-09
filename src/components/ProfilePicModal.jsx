import { useRef, useState } from "react";

function ProfilePicModal(props) {
    const [selectedImg,setSelected] = useState('');
    const images=[{
        'src': '/src/data/coverUser01.jpeg',
        'alt': 'User 1'
    },
    {
        'src': '/src/data/coverUser02.jpeg',
        'alt': 'User 2'
    },
    {
        'src': '/src/data/coverUser03.jpeg',
        'alt': 'User 3'
    },
    {
        'src': '/src/data/coverUser04.jpeg',
        'alt': 'User 4'
    },
    {
        'src': '/src/data/coverUser05.jpeg',
        'alt': 'User 5'
    },
    {
        'src': '/src/data/coverUser06.jpeg',
        'alt': 'User 6'
    },

    ];
    const closeModal = function () {
        props.handler(false)
    }
    const pictureFunction = function () {
        console.log(selectedImg)
        // userPicture is userPicture={state.state} on Profile
        props.userPicture.picture=selectedImg;
        props.handler(false)
    }
    
    const imgHandler = function (src) {
        console.log(src)
        setSelected(src)
    }
    console.log()

    return (
        <article className="profilePic" id="profilePic">

            <section className="profilePWrap" id="profilePWrap">

                <aside>
                    <div>
                        <h4>Select your profile picture</h4>
                        <span onClick={closeModal} className="close">&times;</span>
                    </div>

                    <figure>
                        {/* map to populate the figure  */}
                        {/* pass a condition in the className - if the link of the selected one is true pass the className 'slected' */}
                        {/*  ()=> is a reference for this function: imgHandler(img.src)*/}
                        {images.map(img => <img className={selectedImg == img.src ? 'selected': '' } onClick={()=> imgHandler(img.src) } key={img.alt} src={img.src} alt={img.alt}/>)}
                    </figure>

                    <article>
                        <button onClick={pictureFunction}>
                            Select
                        </button>
                    </article>
                </aside>

            </section>

        </article>
    );

}
export default ProfilePicModal;