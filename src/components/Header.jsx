import { useEffect, useState } from "react";

function Header(){

    const [traco, setTraco] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setTraco(prev => !prev); 
        }, 500);

        return () => clearInterval(interval); 
    }, []);
    return(
        <>
            <div className="">
                <h1 className="font-aoboshi text-[35px] lg:text-[700%] bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(to right, #FF0000 7%, #FF4A4a 50%, #FF9292 100%)",}}>André Lucca</h1>
                <div className="flex flex-row">    
                    <h1 className="font-aoboshi text-[19px] lg:text-[400%] bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(to right, #F4F4F4 0%, #565656 100%)",}}>Fullstack Developer</h1>
                    { traco && <h1 className="font-aoboshi text-[19px] lg:text-[400%] bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient( #F9E400 7%, #BBA400 72%, #787800 100%)",}}>|</h1>}
                </div>
            </div>
        </>
    )
}

export default Header;