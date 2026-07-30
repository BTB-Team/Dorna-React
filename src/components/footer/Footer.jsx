import Logo from "./Logo";
import In from "./assets/in.png";
import FaceBook from "./assets/facebook.png";
import X from "./assets/x.png";
import Email from "./assets/email.png";
import Instagram from "./assets/instagram.png";
import {Link} from "react-router-dom";
export function Footer() {
  return (
    <footer className="w-full bg-white  font-primary">
      {/* Footer */}
      <div className="  max-w-[1200px]  w-[90%]  mx-auto  py-20  ">
        <div className="w-[317px] max-w-full">
          <Logo />
          <p className=" mt-5 w-[330px] text-xl font-extrabold leading-[34px] font-heading text-black max-md:text-base max-md:font-medium  ">
            Helping brands grow throught creatifity and strategy
          </p>
        </div>
        {/* Navigation */}
        <nav className="  w-1/2 flex justify-start mt-8 mb-5 max-md:w-full gap-4 md:gap-6">
          <Link to="/" className="text-[#00514B]  text-[15px] md:text-base">
            Home Page
          </Link>
          <Link
            to="/about"
            className="text-[#00514B]  text-[15px] md:text-base"
          >
            About Page
          </Link>
          <Link
            to="/services"
            className="text-[#00514B]   text-[15px] md:text-base"
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="text-[#00514B] ttext-[15px] md:ext-base"
          >
            Contact Us
          </Link>
        </nav>

        <div className="h-[57px]  ">
          <div className="  flex justify-between border-y-2 border-accent h-full  max-md:flex-col  max-md:items-start gap-5 ">
            <p className="  flex items-center   text-base  h-full mt-4 md:mt-0  text-black ">
              © 2026 Dorna Media. All rights reserved.{" "}
            </p>
            <div className=" flex gap-5 mt-5 md:mt-0 text-black items-center text-xl ">
              <a
                target="_blank"
                href="https://www.instagram.com/dornamediaa?igsh=bDN1Mng5aHA0Y3Vp"
                className="w-6 h-6"
              >
                <img src={Instagram} alt="Instagram" />
              </a>

              <a target="_blank" className="w-6 h-6">
                <img src={FaceBook} alt="Facebook" />
              </a>

              <a target="_blank" className="w-6 h-6">
                <img src={X} alt="X" />
              </a>

              <a target="_blank" className="w-6 h-6">
                <img src={In} alt="LinkedIn" />
              </a>

              <a target="_blank" className="w-6 h-6">
                <img src={Email} alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
