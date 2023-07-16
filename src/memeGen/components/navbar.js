import "./navbar.css"
import troll from "./images/troll.png"
function NavBar()
{
    return(
        <div className="containerNav">
            <div className="head"> 
                <img className="troll"src={troll} alt="logo"></img>
                <h2>Meme Generator</h2>
            </div>
        </div>
    )
}

export default NavBar;