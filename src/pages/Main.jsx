import "../App.css"
import Papel from "../components/Papel";
import Header from "../components/Header"
import Photo from "../components/Photo";
import Curriculo from "../components/Curriculo";
import Who from "../components/Who";
import Redes from "../components/Redes";


function Main(){
    return(
        <>
            <div className="lg:flex lg:flex-row ">
                <div className=" z-10">
                    <Papel/>
                </div>
                <div className=" mt-5 absolute z-20 ml-10">
                    <Header/>
                        
                </div>
                <div className="flex flex-col items-center lg:items-start ">

                    <div className="relative z-30 mt-8 lg:mt-90">
                        <div className="lg:hidden animate-fade">
                            <Photo/>
                        </div>
                        <div className=" mt-10 lg:ml-0">
                            <Who/>
                        </div>
                        <div className=" lg:hidden mt-10 ">
                            <Curriculo/>
                        </div>
                        <div className=" lg:hidden mt-10 ">
                            <Redes/>
                        </div>
                    </div>
                </div>
                <div className="relative z-30 hidden lg:block ml-120">
                    <Photo/>
                </div>
            </div>
            <div className="hidden lg:block  relative z-30 ">
                <div className="flex flex-col items-center">
                    <div className=" lg:block hidden lg:mt-40 ">
                        <Curriculo/>
                    </div>
                    <div className=" lg:block hidden lg:mt-10 ">
                        <Redes/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Main;