import Ball from "../assets/Ball.png"
import Perfil from "../assets/Perfil.png"


function Photo(){
    return(
        <div className="flex flex-col items-center animate-fade-up">
            <img src={Ball} className="w-41.5 mt-30  lg:w-138.5"/>
            <img src={Perfil} className="w-40.5 ml-7 lg:ml-6 sm:ml-2 lg:w-124 lg:mt-7 absolute mt-17.5 z-10"/>
        </div>
    )
}

export default Photo;