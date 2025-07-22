import Wallpp from "../assets/Wallpaper.png"
import Degrade from "../assets/degrade.png"
import Bigwpp from "../assets/Wppbig.png"
function Papel(){
    return(
        <>
            <div className="">
                <img src={Wallpp} className="lg:hidden absolute z-10 top-0"/>
                <img src={Degrade} className="absolute lg:hidden z-20 top-[-10px] lg:top-0 w-full max-w-full"/>
                <img src={Bigwpp} className="hidden lg:block w-full  absolute z-10 top-0"/>
            </div>
        </>
    )
}

export default Papel;