import Wallpp from "../assets/Wallpaper.png"
import Degrade from "../assets/degrade.png"
import Bigwpp from "../assets/Wppbig.png"
import degradebig from "../assets/degradebig.png"
function Papel(){
    return(
        <>
            <div className="">
                <img src={Wallpp} className="lg:hidden absolute z-10 top-0"/>
                <img src={Degrade} className=" absolute lg:hidden z-20 top[10px] w-full max-w-full"/>
                <img src={degradebig} className="hidden lg:block w-full  h-300% absolute z-10 top-0"/>
            </div>
        </>
    )
}

export default Papel;