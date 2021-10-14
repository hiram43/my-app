

import "../Styles/StylesCss.css"

export default function Header (){
   return(
   <header>
<div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
   
	<div className="overlay">
  

   
   <div className="space"></div>
   <h1 hidden>Mortum Producciones</h1>
   <h3>Empresa enfocada a la realización de espectáculos de terror, obras de teatro, recorridos, contenido audiovisual e investigación paranormal. </h3>
   <p>Y en la profunda oscuridad permanací largo tiempo atónito, temeroso...soñando sueños que ningún mortal se haya atrevido a soñar jamás --Edgar Allan Poe</p>
	<br/>
	</div>
		</div>
</header>)

}