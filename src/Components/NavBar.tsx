
import "../Styles/StylesCss.css"
import NavBarIcon from "./SubComponents/CartWidget"

export default function NavBar (){
    return(
    <div className="topnav">
    <a className="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="#Test"><NavBarIcon label="Bienvenido Gabriel"/>  </a>
       
    </div>

 )}