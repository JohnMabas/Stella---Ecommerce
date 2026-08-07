import { FaSearch } from "react-icons/fa";
import Nike from "/src/assets/Nike.png"
import Adidas from "/src/assets/adidas.png"
import Apple from "/src/assets/Apple.png"
import newBalance from "/src/assets/newBalance.jpg"
import Puma from "/src/assets/puma.jpg"
import Uniqlo from "/src/assets/uniqlo.png"



function Sidebar(){
    return(
        <>
        <section className="border border-gray-400 w-60 h-full ml-5 mt-4">
            <div className="flex justify-between items-center p-2">
                <span>Filter</span>
                <span className="text-blue-400">Advanced</span>
            </div>
            <div>
                <span>Brand</span>
                <span>=</span>
            </div>
            <div className="rounded-lg flex items-center gap-2 p-2 border border-gray-400 w-48">
                <span>
                 <FaSearch />
                </span>
                <input className="w-36" type="text" placeholder="Search brand..." />
            </div>

            <div>
                <span className="flex items-center gap-2">
                    <img className="w-10" src={Nike} alt="" />
                    <p className="text-lg">Nike</p>
                    
                </span>
                <span className="flex items-center gap-2">
                    <img className="w-10" src={Adidas} alt="" />
                    <p className="text-lg">Adidas</p>
                    
                </span>
                <span className="flex items-center gap-2">
                    <img className="w-10" src={Apple} alt="" />
                    <p className="text-lg">Apple</p>
                    
                </span>
                <span className="flex items-center gap-2">
                    <img className="w-10" src={newBalance} alt="" />
                    <p className="text-lg">New Balance</p>
                    
                </span>
                <span className="flex items-center gap-2">
                    <img className="w-10" src={Puma} alt="" />
                    <b className="text-lg">Puma</b>
                    
                </span>
                <span className="flex items-center gap-2">
                    <img className="w-10" src={Uniqlo} alt="" />
                    <b className="text-lg">Uniqlo</b>
                    
                </span>
            </div>
        </section>

        </>
    )
}


export default Sidebar;