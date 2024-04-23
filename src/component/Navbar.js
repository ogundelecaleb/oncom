import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {});

  // const handleMouseLeave = () => {
  //   setIsDropdownOpen(false);
  //   console.log("mouse leave");
  // };

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };

  return (
    <div className=" w-full bg-white z-[99999999] sticky shadow  top-0">
      <div className="flex flex-row items-center   justify-between relative px-[30px] md:px-[50px] lg:px-[60px] py-[12px]">
        <Link to="/">
          <img
            src="./asset/oncologyLogo.svg"
            alt=""
            className="lg:h-[45px] h-[38px] mr-5"
          />
        </Link>
        <nav className="hidden  lg:inline-block">
          <ul className="flex flex-row space-x-3 items-center text-[#124072]  gap-[30px]  ">
            <Link to="/">
              <li
                // onClick={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                // onMouseEnter={toggleModal}
                // onMouseLeave={toggleModal}
                className={`cursor-pointer hover:text-[#ff5b00]  ${
                  location.pathname === "/" ? "text-[#ff5b00]" : ""
                }  py-3`}
              >
                Home
              </li>
            </Link>
            <Link to="/stories">
              <li
                className={`cursor-pointer hover:text-[#ff5b00]  ${
                  location.pathname === "/stories" ? "text-[#ff5b00]" : ""
                }  py-3`}
              >
                Our Cancer Stories
              </li>
            </Link>
            <Link to="/event">
              <li
                className={`cursor-pointer hover:text-[#ff5b00]  ${
                  location.pathname === "/event" ? "text-[#ff5b00]" : ""
                }  py-3`}
              >
                Events
              </li>
            </Link>
            <Link to="/donate">
              <li
                className={`cursor-pointer hover:text-[#ff5b00]  ${
                  location.pathname === "/donate" ? "text-[#ff5b00]" : ""
                }  py-3`}
              >
                Donate
              </li>
            </Link>
            <Link to="/team">
              <li
                className={`cursor-pointer hover:text-[#ff5b00]  ${
                  location.pathname === "/team" ? "text-[#ff5b00]" : ""
                }  py-3`}
              >
                The Team
              </li>
            </Link>
            <Link to="/allblog">
              <li
                className={`cursor-pointer hover:text-[#ff5b00]  ${
                  location.pathname === "/allblog" ? "text-[#ff5b00]" : ""
                }  py-3`}
              >
                Blog
              </li>
            </Link>
            <Link to="/support">
              <li
                className={`cursor-pointer hover:text-[#ff5b00]  ${
                  location.pathname === "/support" ? "text-[#ff5b00]" : ""
                }  py-3`}
              >
                Contact
              </li>
            </Link>
            <Link to="/support">
              <li>
                <button className=" py-[8px] px-[24px] bg-red-500 text-white rounded-lg hidden lg:inline-block">
                  Donate
                </button>
              </li>
            </Link>
          </ul>
        </nav>

        <button onClick={handleToggle} className="lg:hidden md:inline-block">
          {toggle ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </button>
      </div>
      {showMenu && (
        <div className="  right-1 rounded-md shadow -bottom-[320px] lg:hidden w-full py-5 px-3 z-10">
          <ul className="flex flex-col space-y-2 mb-2 ">
            <Link to="/">
              <li className="cursor-pointer  text-black hover:text-red-500">
                Home
              </li>
            </Link>

            <Link to="/stories">
              <li className="cursor-pointer  text-black hover:text-red-500">
                Our Cancer Stories
              </li>
            </Link>
            <Link to="/event">
              <li className="cursor-pointer  text-black hover:text-red-500">
                Events
              </li>
            </Link>
            <Link to="/donate">
              <li className="cursor-pointer  text-black hover:text-red-500">
                Donate
              </li>
            </Link>
            <Link to="/team">
              <li className="cursor-pointer  text-black hover:text-red-500">
                The Team
              </li>
            </Link>
            <Link to="/allblog">
              <li className="cursor-pointer  text-black hover:text-red-500">
                Blog
              </li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer  text-black hover:text-red-500">
                Contact
              </li>
            </Link>
            {/* <Link to="/event" target="_blank">
            <li className="cursor-pointer  text-black hover:text-red-500">
                Event
              </li>
            </Link> */}
          </ul>
          <button className=" py-[8px] px-[24px] bg-red-500 mt-4 text-white font-bold rounded-md">
            <a
              href="https://pgmerchants.paylodeservices.com/"
              target="_blank"
              rel="noreferrer"
            >
              Donate
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
