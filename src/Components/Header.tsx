import "../Styles/StylesCss.css"
import NavBar from "./NavBar"; 



type HeaderProps  ={
   label:string,
   id :number
}

export default function Header ({label,id}:HeaderProps){
   return(
   <header>
<div >
      <NavBar/>
   
	<div className="overlay">
  

   
   <div className="space"></div>
   <h1 hidden>Mortum Producciones {label}</h1>
   <h3>Empresa enfocada a la realización de espectáculos de terror, obras de teatro, recorridos, contenido audiovisual e investigación paranormal. {id} </h3>
   <p>Y en la profunda oscuridad permanací largo tiempo atónito, temeroso...soñando sueños que ningún mortal se haya atrevido a soñar jamás --Edgar Allan Poe</p>
	<br/>
	</div>
		</div>
</header>)

}