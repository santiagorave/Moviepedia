import { useState } from 'react'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <nav>
        <h4> Logo </h4>

        <form action="#">
            <section>
                <input type="text" placeholder="" name="search"></input>
                <button type="submit" id="searchBtn">
                    <i className="fa-solid fa-magnifying-glass"></i>            
                </button>
            </section>
        </form>
        <aside>
            <h4>Log in</h4>
            <a href="">Profile</a> 
        </aside>
    </nav>
    </>
  )
}

export default App
