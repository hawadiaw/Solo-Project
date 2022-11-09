import { Link } from "react-router-dom"
const Nav=()=>{
    return(
        <div className="nav">
            <nav>
                <h1>Travel Blog</h1>
                <div>
                    <ul>
                        <Link to='/'className="lnk">Home</Link>
                        
                        <button>Login</button>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Nav