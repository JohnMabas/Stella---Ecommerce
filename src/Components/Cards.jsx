import man1 from "/src/assets/man1.png"
import man2 from "/src/assets/man3.png"
import { FaHeart } from "react-icons/fa";

function Cards(){
    return(
        <>
        <section className="w-full m-2 p-5">
            <div className="flex justify-between items-center">
                <div>
                <span>=</span>
                <span>=</span>
                </div>

                <div>
                    <span>Sort by: <strong>Popula</strong></span>
                </div>
            </div>

            <div>

                <div className="w-64 space-y-2">
                    <div className="bg-red-200 rounded-2xl">
                    <img src={man1} alt="" />
                    <span className=" relative bottom-64 p-1 text-sm bg-blue-400 ">New Arrival</span>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-sm">Uniqio</p>
                        <span className="text-gray-400 "><FaHeart/></span>
                    </div>
                    <h4 className="font-bold">Shirt Soft Cotton</h4>
                    <div className="flex justify-between">
                    <p className="text-blue-400">SAR 40.00</p>
                    <p className="text-red-400 text-sm">12 Items left</p>

                    </div>
                </div>

                 <div className="w-64 space-y-2">
                    <div className="bg-red-200 rounded-2xl">
                    <img src={man2} alt="" />
                    <span className=" relative bottom-64 p-1 text-sm bg-blue-400 ">New Arrival</span>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-sm">Uniqio</p>
                        <span className="text-gray-400 "><FaHeart/></span>
                    </div>
                    <h4 className="font-bold">Zip Up Neck Shirk</h4>
                    <div className="flex justify-between">
                    <p className="text-blue-400">SAR 40.00</p>
                    <p className="text-red-400 text-sm">12 Items left</p>

                    </div>
                </div>
            </div>


        </section>

        </>
    )
}

export default Cards;