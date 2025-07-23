import Ball from "../assets/Ball.png"
import Perfil from "../assets/Perfil.png"


function Photo(){
    return(
        <div className="flex flex-col items-center animate-fade-up">
            <img src={Ball} className="w-43.5 lg:mt-[165%] mt-[40%]  lg:w-100% lg:ml-[-245%]"/>
            <img src={Perfil} className="w-40.5 ml-2 lg:ml-[-240%] sm:ml-2 lg:w-[90%] lg:mt-[140%] absolute mt-17.5 z-10"/>
        </div>
    )
}

export default Photo;