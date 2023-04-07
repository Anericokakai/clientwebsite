import React from "react";
import "./styles/home.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footerholder">
      <h1 className="footerheading">Contact us </h1>
      <div className="footercontainer">
        <div className="footer">
          <h1 className="footerh1"> Kingstreet foundation</h1>
          <p>c/o DayWheel ,Inc KSF management company</p>
          <p>1750 Powder Springs Rd,PMB 294,Suite 190 </p>
          <p>Marietta ,GA 3000-4861</p>
          <p>
            <span className="bold">Phone</span>
            <a href="tel:(678)508-4861"></a>
          </p>
          <p>
            <span className="bold">
              Email</span><a> info@kingstreets.com</a>
            
          </p>
          <p>
            <span className="bold">in Persin</span> 634 Martin Luther King
            ,Jr.Blvd,N.W{" "}
          </p>
        </div>
        <div className="footer">
          <h1 className="footerh1"> Quick Links</h1>
          <p>
            <Link>About us</Link>
          </p>
          <p>
            <Link>Contact us</Link>
          </p>
          <p>
            <Link>Kings tv</Link>
          </p>
          <p>
            <Link> Programs</Link>
          </p>
          <p>
            <Link> Services</Link>
          </p>
          <p>
            <Link>I need help</Link>
          </p>
          <p>
            <Link> I can help</Link>
          </p>
        </div>
        <div className="footer">
          <h1 className="footerh1">Our socials</h1>
         <a href=""> <p><i class="fa-brands fa-linkedin"></i>Linkedin</p></a>
         <a href=""> <p><i class="fa-brands fa-facebook"></i> Facebbok</p></a>
         <a href=""> <p><i class="fa-brands fa-twitter"></i> twitter</p></a>
         <a href=""> <p><i class="fa-brands fa-linkedin"></i>Linkedin</p></a>
        </div>
        <div className="footer">
          <h1 className="footerh1"> Kingstreet foundation</h1>
          <p>c/o DayWheel ,Inc KSF management company</p>
          <p>1750 Powder Springs Rd,PMB 294,Suite 190 </p>
          <p>Marietta ,GA 3000-4861</p>
          <p>
            <span className="bold">Phone</span>
            <a href="tel:(678)508-4861"></a>
          </p>
          <p>
            <span className="bold">
              Email</span> <a> info@kingstreets.com</a>
            
          </p>
          <p>
            <span className="bold">in Persin</span> 634 Martin Luther King
            ,Jr.Blvd,N.W{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
