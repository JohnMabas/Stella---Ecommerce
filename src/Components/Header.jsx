import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

function Header() {
  return (
    <>
      <section className="bg-black text-white flex justify-between">
        <div className="flex items-center ml-6">
          <span className="flex gap-1 items-center text-sm">
            {" "}
            <FaMapMarkerAlt /> shp to{" "}
          </span>
          <select name="" id="">
            <option value="">KSA</option>
          </select>
        </div>
        <div className="flex items-center gap-10 mr-6 text-sm">
          <span>Trusted Shipping</span>
          <span>Easy RETURNS</span>
          <span>Secure Shopping</span>
        </div>
      </section>

      <section className="flex justify-between items-center m-5">
        <span className="text-blue-400 flex gap-1 items-center">
          <b className="text-3xl font-bold">S</b>
          <strong className="font-bold text-2xl">Stella</strong>
        </span>
        <div className="flex items-center gap-2 rounded-lg border border-gray-300 w-175 p-2 ">
          <span className="text-gray-400">
            {" "}
            <FaSearch />
          </span>
          <input
            className="rounded-lg text-sm border-none w-175"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <span className="text-gray-400">
              {" "}
              <FaBell />
            </span>
            <span className="text-gray-400">
              {" "}
              <FaHeart />
            </span>
            <div>
                <div>
                    <span>
                {" "}
                <ReactCountryFlag countryCode="US" />
              </span>

              <select name="" id="">
                <option value="">English</option>
              </select>

                </div>
              
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="rounded-full p-1 bg-gray-300 text-black font-bold">AP</span>
            <div>
                <p className="text-sm text-gray-400">Welcome back</p>
                <select name="" id="">
                    <option value="">Abdel Rahaman</option>
                </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
