import style from "./Styles/footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  const logo1 = "https://i.ibb.co/B2v3Q1hh/footerlogo1.png";
  const logo2 = "https://i.ibb.co/CK9TNvqL/footerlogo2.png";
  return (
    <footer className={style.footersection}>
      <div className={` text-center ${style.footercontainer}`}>
        <div className={style.footertop}>
          <h1 className={`text-white  ${style.footerheading}`}>Join Us?</h1>
          <p className={`text-white ${style.footerpara}`}>
            Join our email list and be the first one to know about new products,
            material innovations, and latest updates.
          </p>
        </div>
        <div className={style.footerinputcontent}>
          <div className={style.footerinputsection}>
            <input
              type="text"
              placeholder="Type your email address here"
              className={`bg-white text-center ${style.footerinput}`}
            />
            <button className={style.footerbtn}>Send</button>
          </div>
        </div>
        <p className={`text-white ${style.footerbottom}`}>
          Note: You can opt out at any time. See our
          <span className={style.footerprivacy}> Privacy Policy </span> &
          <span className={style.footerterm}> Terms</span>.
        </p>
        {/* <hr /> */}
      </div>
      <div className={style.footermain}>
        <div className={`row p-0 m-0 ${style.footerrow}`}>
          <div className={`col-sm-4 col-md-3 ${style.footerlogo}`}>
            <div className={style.logoimg}>
              <img src={logo1} className={`img-fluid ${style.imgfluid}`} />
              <img src={logo2} className={`img-fluid ${style.imgfluid}`} />
            </div>
          </div>
          <div className={`col-sm-4 col-md-3 ${style.footerabout}`}>
            <h3 className={style.footermenu}>About GIPL</h3>
            <ul>
              <li>
                <a href="">Godawari Power & ISPAT Limited</a>
              </li>
              <li>
                <a href="">Boards of Directors and Coomitees</a>
              </li>
              <li>
                <a href="">Subsidiary and JVs</a>
              </li>
              <li>
                <a href="">Research & Development</a>
              </li>
              <li>
                <a href="">Business Excellence</a>
              </li>

              <li>
                <a href="">Awards & Certification</a>
              </li>
            </ul>
          </div>
          <div className={`col-sm-4  col-md-2 ${style.footerabout}`}>
            <h3 className={style.footermenu}>Products</h3>
            <ul>
              <li>
                <a href="">Pellets</a>
              </li>
            </ul>
            <h3 className={` ${style.footersubmenu}`}>DRI</h3>
            <ul>
              <li>
                <a href="">Billets</a>
              </li>
              <li>
                <a href="">Wire Rod</a>
              </li>
              <li>
                <a href="">HB Wires</a>
              </li>
              <li>
                <a href="">Silico Manganese</a>
              </li>
              <li>
                <a href="">Energy</a>
              </li>
              <li>
                <a href="">HRA Pipes</a>
              </li>
              <li>
                <a href="">HRA Poles</a>
              </li>
              <li>
                <a href="">HRA Structure</a>
              </li>
            </ul>
          </div>

          <div className={`col-sm-4 col-md-2 ${style.footerabout}`}>
            <h3 className={style.footermenu}>CSR</h3>
            <ul>
              <li>
                <a href="">Community Welfare</a>
              </li>
              <li>
                <a href="">Health & Nutrition</a>
              </li>
              <li>
                <a href="">Education And Skill Development</a>
              </li>
              <li>
                <a href="">Environment Conversation</a>
              </li>
              <li>
                <a href="">Rural Infrastructure</a>
              </li>
              <li>
                <a href="">Sports</a>
              </li>
            </ul>
          </div>
          <div className={`col-sm-4 col-md-2 ${style.footerabout}`}>
            <h3 className={style.footermenu}>Other Information</h3>
            <ul>
              <li>
                <a href="">Anual Report</a>
              </li>
              <li>
                <a href="">Shareholder</a>
              </li>
              <li>
                <a href="">Career With Us </a>
              </li>
              <li>
                <a href="">Media </a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.footersocailicon}>
          <ul>
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="">
                <BiLogoInstagramAlt />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className={` ${style.footerallright}`}>
          <p>© 2022. Mineral Circles Bearings. All Rights Reserved.</p>
          <p className={style.footerpolicy}>
            Terms of Use Privacy Policy Reach Us
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
