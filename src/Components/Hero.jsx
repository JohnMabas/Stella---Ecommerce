// import Stella from "./assets/stella.jpg"

function Hero(){
    return(
        <>
        <section className="bg-gray-400 w-full h-64">
            <div className="flex ">
                <div className="space-y-10">
                    <h1 className="text-6xl font-bold text-white m-5">Simple </h1>
                    <span className=" text-6xl font-bold text-white m-5 pl-9">is More</span>
                    
                </div>
            
            <img className="h-52 w-65 object-cover relative left-100 top-12" src="https://media.istockphoto.com/id/147683545/photo/vogue.jpg?s=1024x1024&w=is&k=20&c=LwdFAqfsNTWElJcIbGHdyyMokkWJ2b6Yo6ZM_7jhgVM=" alt="" />


            </div>

        </section>
        </>
    )

}

export default Hero;