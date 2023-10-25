import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

export const NavBar = () => {
  // const navigate = useNavigate()
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy="true" smooth="true" to="home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy="true" smooth="true" to="shippingships">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Ships
            </li>
          </Link>
          <Link spy="true" smooth="true" to="haulingships">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Haulers
            </li>
          </Link>
          <Link spy="true" smooth="true" to="docks">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Docks
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="bg-slate-900">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Shipping Ships</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy="true" smooth="true" to="home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy="true" smooth="true" to="shippingships">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Ships
                </li>
              </Link>
              <Link spy="true" smooth="true" to="haulingships">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Haulers
                </li>
              </Link>
              <Link spy="true" smooth="true" to="docks">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Docks
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

// return (
//     <ul className="text-4xl text-red-500 bg-gray-700 text-center display: flex flex-wrap: nowrap ">
//         <li className="navbar-item">
//             <Link to="/home">Home</Link>
//         </li>
//         <li className="navbar-item">
//             <Link to="/shippingships">Ships</Link>
//         </li>
//         <li className="navbar-item">
//             <Link to="/haulingships">Haulers</Link>
//         </li>
//         <li className="navbar-item">
//             <Link to="/docks">Docks</Link>
//         </li>
//     </ul>
// )
