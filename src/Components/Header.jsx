import { FaMapMarkerAlt } from 'react-icons/fa'; 
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

function Header(){
    return(
        <>
        <section className='bg-black text-white flex justify-between'>
            <div className='flex items-center ml-6'>
                <span className='flex gap-1 items-center text-sm'> <FaMapMarkerAlt/> shp to </span>
                <select name="" id="">
                    <option value="">KSA</option>
                </select>
            </div>
            <div className='flex items-center gap-10 mr-6 text-sm'>
                <span>
                    Trusted Shipping
                </span>
                <span>
                    Easy RETURNS
                </span>
                <span>
                    Secure Shopping
                </span>
            </div>

        </section>

        <section>
            <span className='text-blue-400 flex gap-1 items-center'>
                <b className='text-3xl font-bold'>S</b>
                <strong className='font-bold text-2xl'>Stella</strong>
            </span>
            <div className='flex items-center gap-2 rounded-full border border-gray-300 w-96 p-2 '>
                <span className='text-gray-400'> <FaSearch/></span>
                <input className='rounded-full text-sm border-none w-96' type="text" placeholder='What are you looking for?' />
            </div>

            <div>
                <div>
                    <span> <FaBell/></span>
                    <span> <FaHeart/></span>
                    
                </div>
            </div>
        </section>


        </>
    )
}

export default Header;