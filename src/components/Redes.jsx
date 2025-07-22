import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Redes(){
    return(
        <>
            <div className="text-center">
                <h1 className="font-aoboshi text-[27px] bg-clip-text text-transparent inline-block animate-fade-right" style={{
                backgroundImage: "linear-gradient(to right, #F9E400 7%, #BBA400 72%, #787800 100%)"
                }}>
                Minhas redes
                </h1>
            </div>
            <div className=' lg:ml-2 ml-14 mt-5 flex flex-row gap-5 animate-fade-up'>
                <a href="https://www.linkedin.com/in/andr%C3%A9-lucca-gaem-05a200343/">
                    <FaLinkedin size={40} color="red" />
                </a>
                <a href="https://github.com/andre55z">
                    <FaGithub size={40} color="orange" />
                </a>
                <a href="https://www.instagram.com/dev.andrelg/">
                    <FaInstagram size={40} color="yellow" />
                </a>
            </div>
        </>
    )
}

export default Redes;