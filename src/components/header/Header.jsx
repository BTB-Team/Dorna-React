import {useState} from "react";
import {NavLink, Link} from "react-router-dom";
import Star from "./assets/octicon_north-star.png";
import Email from "./assets/email.png";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/instagram.png";
import Linkdin from "./assets/linkedin.png";
import Twitter from "./assets/twitter.png";
import MenuIcon from "./assets/icon_menu.png";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const menuItems = [
    {title: "About", mobileTitle: "About us ", path: "/about"},
    {title: "Services", mobileTitle: "Our Services", path: "/services"},
    {title: "Portfolio", mobileTitle: "Our Portfolio", path: "/portfolio"},
  ];

  return (
    <header
      className={`font-heading  absolute top-6 left-1/2 -translate-x-1/2 transition-all duration-500 z-50 flex flex-col py-3  md:py-2 justify-between md:flex-row font-accent md:h-[66px] md:rounded-[35px] md:w-[900px]  px-3 md:px-3
        ${
          open
            ? "w-[90%] h-[calc(100vh-50px)] rounded-[30px] bg-[linear-gradient(180deg,#00514B_0%,#006964_32%,#008E88_68%,#0DB8B1_100%)] md:bg-[#00514B] md:h-[66px] md:rounded-[35px]"
            : "w-[90%] md:w-[900px] h-[70px] md:h-[66px] bg-[#00514B] rounded-[35px] px-6 md:px-3 py-3 md:py-0 items-center flex-row mx-auto "
        }`}
    >
      {/* "logo" */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="w-[130px] md:w-[167px]" onClick={closeMenu}>
          {" "}
          <Logo />
        </Link>
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/contact"
            onClick={closeMenu}
            className="bg-white  font-heading  text-black  text-[12px] font-medium px-3 py-2 rounded-[40.5px]  transition-all duration-300"
          >
            Contact Us
          </Link>
          <button
            onClick={toggleMenu}
            className="bg-white text-black border-none outline-none duration-300 w-[40px] h-[40px] rounded-full flex items-center justify-center transition-transform active:scale-95"
            aria-label="Toggle Menu"
          >
            {/* {open ? <p>C</p> : <p>O</p>} */}
            <img src={MenuIcon} alt="MenuIcon" />
          </button>
        </div>
      </div>
      {/* Menu from Desktap*/}
      <nav className="hidden md:flex gap-10 items-center  text-[16px] leading-6 font-semibold tracking-normal  font-heading  ">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({isActive}) =>
              ` transition-colors duration-300 ${isActive ? " text-accent" : "text-white  hover:text-accent"}`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
      {/*Button contact desktap*/}
      <div className="hidden md:flex items-center ">
        <NavLink
          to="/contact"
          className={({isActive}) =>
            ` outline-none transition-all duration-300 w-[128px] h-[49px] rounded-full flex items-center justify-center  font-heading    bg-white ${isActive ? "text-accent bg-white  " : " text-black hover:bg-accent hover:scale-105 "}`
          }
        >
          Contact Us
        </NavLink>
      </div>
      {/* menu moilbe */}
      {open && (
        <div className="flex-1 flex flex-col justify-between w-full mt-16 md:hidden md:h-[90px] animate-fadeIn">
          <nav className="flex flex-col items-center justify-center flex-1">
            <div className="  flex flex-col   justify-center gap-10 flex- ">
              {menuItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  onClick={closeMenu}
                  className={({isActive}) =>
                    ` text-[18px] font-heading  tracking-wide flex items-start gap-3 hover:scale-105 transition-transform uppercase  duration-300 ${isActive ? "text-accent" : "text-white"}`
                  }
                >
                  <img
                    src={Star}
                    alt="Star "
                    className={({isActive}) =>
                      `${isActive ? "text-accent" : "text-white"} font-heading mt-1 text-[22px] tracking-wider`
                    }
                  />
                  {item.mobileTitle}
                </NavLink>
              ))}
            </div>
          </nav>
          {/* social media*/}
          <div className="border-t border-white border-opacity-20 pt-6 pb-2 w-full">
            <div className="flex items-center justify-center gap-6 text-white text-[22px]">
              <a
                target="_blank"
                href="https://www.instagram.com/dornamediaa?igsh=bDN1Mng5aHA0Y3Vp"
                className="hover:opacity-80 transition-opacity text-white"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
              <a
                target="_blank"
                href="#"
                className="hover:opacity-80 transition-opacity text-white"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                target="_blank"
                href="#"
                className="hover:opacity-80 transition-opacity text-white"
              >
                {" "}
                <img src={Twitter} alt="Twitter" />
              </a>
              <a
                target="_blank"
                href="#"
                className="hover:opacity-80 transition-opacity text-white"
              >
                <img src={Linkdin} alt="Linkdin" />
              </a>
              <a
                target="_blank"
                href="#"
                className="hover:opacity-80  transition-opacity text-white"
              >
                <img src={Email} alt="Email" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
