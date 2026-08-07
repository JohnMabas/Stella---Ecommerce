import Stella from "/src/assets/heroImg.png"

function Hero(){
    return(
        <>
        <section className="bg-gray-400 w-full h-64">
            <div className=" flex">
                <div className="space-y-10 ml-20 ">
                    <h1 className="text-6xl font-bold text-white m-5 pt-20">Simple </h1>
                    <span className=" text-6xl font-bold text-white m-5 pl-9 ">is More</span>
                    
                </div>
            
            <img className="h-52 w-72 object-cover relative left-100 top-12" src={Stella} alt="" />

            </div>

        </section>
        </>
    )

}

export default Hero;