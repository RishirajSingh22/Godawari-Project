import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../Layout/Styles/navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


function Navbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navItems = [
    {
      label: "About Us",
      // link: "/aboutUs",
      dropdown: [
        { label: "Overview", link: "/aboutUs" },
        { label: "Our Leadership", link: "/leadershipBdo" },
        { label: "Our Ecosystem", link: "/Ecosystem" },
      ],
    },
    {
      label: "Businesses", link: "#",
      dropdown: [
        { label: "Overview", link: "businessoverview" },
        { label: "Steel", link: "steel" },
        { label: "Energy", link: "energy" },
        { label: "Mining", link: "mining" },
        { label: "Ferro Alloys", link: "ferroalloys" },
        { label: "Our Offerings", link: "" },
        // { label: "Fabrication", link: "" },
        // { label: "Pipes", link: "" },
        // { label: "DRI", link: "spongeiron" },
        // { label: "Pellets", link: "pellets" },
        // { label: "Structure & Strips", link: "" },

      ]
    },
    {
      label: "People",

      dropdown: [
        { label: "Overview", link: "/peopleoverview" },
        { label: "Careers", link: "/peopleCarrer" },
      ],
    },
    {
      label: "Investor & Media",
      dropdown: [
        { label: "Overview", link: "/financialoverview" },
        {
          label: "Media",
          link: "#",
        },
        // {
        //   label: "Investor & Media Financial",
        //   link: "/investormediafinancial",
        // },
        { label: "Financials", link: "/investormediareports" },
      ],
    },
    {
      label: "Community",
      dropdown: [
        { label: "Overview", link: "/communityoverview" },
        { label: "Education", link: "/communityeducation" },
        { label: "Healthcare", link: "/healthcare" },
        { label: "Infrastructure", link: "/infrastructure" },
        { label: "Community Welfare", link: "/welfare" },
        { label: "Environment", link: "comunityEnviroment" },
        { label: "Sports", link: "/sports" },
        { label: "Women Empowerment", link: "/womenempowerment" },
      ],
    },
    {
      label: "ESG", link: "#", dropdown: [
        { label: "Overview", link: "" },
        { label: "Envionmental", link: "/oursustainability" },
        { label: "Social", link: "/social" },
        { label: "Governance", link: "" },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <nav
          className={`navbar p-3 navbar-expand-md  ${style.navSection} ${scrolling ? style.fixed : ""
            }`}
        >
          <div className={style.logo}>
            <Link className="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/1Gx89ff9/Layer-2-1-2.png"
                alt="logo"
                className={style.godawariLogo}
              />
            </Link>
          </div>

          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span>
              <RiMenuLine className={style.hambergerIcons} />
            </span>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ height: "auto", background: "#191a1c" }}
          >
            <div class="offcanvas-header ">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://i.ibb.co/1Gx89ff9/Layer-2-1-2.png"
                  alt="logo"
                  className={style.godawariLogo}
                />
              </Link>
              <button
                type="button"
                class="btn text-white fs-3 ms-auto "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                {" "}
                <RxCross2 className="text-end" />
              </button>
            </div>
            <div class="offcanvas-body m-0 p-0">
              <nav className={style.navbar2}>
                <ul className={style.navItems2}>
                  {navItems.map((item, index) => (
                    <li key={index} className={style.navItem2}>
                      {item.dropdown.length > 0 ? (
                        <div className={style.dropdown2}>
                          <Link className={style.navLink2} to={item.link}>
                            {item.label}
                          </Link>
                          <ul className={style.dropdownMenu2}>
                            {item.dropdown.map((subItem, subIndex) => (
                              <li key={subIndex} className={style.dropdownItemContainer2}>
                                <Link to={subItem.link} className={style.dropdownItem2}>
                                  {subItem.label}
                                </Link>

                                {/* Nested Dropdown for "Our Offerings" */}
                                {subItem.label === "Our Offerings" && (
                                  <ul className={style.nestedDropdown2}>
                                    <li>
                                      <Link to="/structurebussiness" className={style.nestedDropdownItem2}>
                                        Structures
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/bussinesspoles" className={style.nestedDropdownItem2}>
                                        Poles
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/pipes" className={style.nestedDropdownItem2}>
                                        Pipes
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/Pellets" className={style.nestedDropdownItem2}>
                                        Pellets
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/spongeiron" className={style.nestedDropdownItem2}>
                                        Direct Reduced
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/wirerods" className={style.nestedDropdownItem2}>
                                        Wire Rods
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/hbwires" className={style.nestedDropdownItem2}>
                                        HB Wire
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/bussinessbillets" className={style.nestedDropdownItem2}>
                                        Billets
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                                {subItem.label === "Media" && (
                                  <ul className={style.nestedDropdown2}>
                                    <li>
                                      <Link to="/mediapublication" className={style.nestedDropdownItem2}>
                                        Publication
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/investormediafinancial" className={style.nestedDropdownItem2}>
                                        Press Releases
                                      </Link>
                                    </li>
                                  </ul>
                                )}

                                {/* Nested Dropdown for "Social"  */}
                                {subItem.label === "Social" && (
                                  <ul className={`${style.nestedDropdownSocial} dropdown-menu dropdown-menu-start`}>
                                    <li>
                                      <Link to="/ohs" className={style.dropdownItem2}>
                                        Occupational Health & Safety
                                      </Link>
                                    </li>
                                  </ul>
                                )}

                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link className={style.navLink2} to={item.link}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}

                  {/* Search Icon */}
                  <li className="nav-item ps-2 pe-2" data-bs-dismiss="offcanvas" aria-label="Close">
                    <CiSearch className={style.searchIcons} />
                  </li>
                </ul>
              </nav>


              <ul
                className={`navbar-nav ms-auto ${style.navItems}`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <li className="nav-item ps-2 pe-2">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ps-2 pe-2">
                  <Link className="nav-link" to="/companies">
                    Companies
                  </Link>
                </li>
                <li className="nav-item ps-2 pe-2">
                  <Link className="nav-link" to="/sustainability">
                    Sustainability
                  </Link>
                </li>
                <li className="nav-item ps-2 pe-2">
                  <Link className="nav-link" to="/weOffer">
                    WeOffer
                  </Link>
                </li>
                <li className="nav-item ps-2 pe-2">
                  <Link className="nav-link" to="/investerPortfolio">
                    Invester Portfolio
                  </Link>
                </li>
                <li
                  className="nav-item ps-2  pe-2"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <CiSearch className={style.searchIcons} />
                </li>
                <li className="nav-item ps-2 pe-2 ">
                  <button
                    className={`${style.menuHamberger}`}
                    onClick={() => setShowOffcanvas(!showOffcanvas)}
                  >
                    <RxHamburgerMenu className={style.navbarIcons} />
                  </button>
                </li>
                {/* -----------sub navlinks------------- */}
                <ul
                  className={`navbar-nav ${style.offcanvasNavItems1}`}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <li className="nav-item">
                    <Link to="/aboutUs" className="nav-link">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/leadershipBdo" className="nav-link">
                      Leadership Directer's
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Ecosystem" className="nav-link">
                      Ecosysytem
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/peopleCarrer" className="nav-link">
                      Careers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/peopleoverview" className="nav-link">
                      People Overview
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/leadershipcommitties" className="nav-link">
                      Leadership Committee
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/mediapublication" className="nav-link">
                      Media Publication & Press Releases{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/financialoverview" className="nav-link">
                      Finanacial Overview{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/investormediareports" className="nav-link">
                      Investor & Media Reports{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/investormediafinancial" className="nav-link">
                      Investor & Media Finanacial{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/communityeducation" className="nav-link">
                      Community Education{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/welfare" className="nav-link">
                      Community Welfare{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/infrastructure" className="nav-link">
                      Community Infrastructure{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/healthcare" className="nav-link">
                      Community Healthcare{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/bussinessbillets" className="nav-link">
                      Billtes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/hbwires" className="nav-link">
                      Hb Wires
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/spongeiron" className="nav-link">
                      Sponge Iron{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/wirerods" className="nav-link">
                      Wire Rods{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/pellets" className="nav-link">
                      Pellets
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/energy" className="nav-link">
                      Energy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ferroalloys" className="nav-link">
                      Ferro Alloys
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/mining" className="nav-link">
                      Mining
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className={`offcanvas offcanvas-end overflow-scroll ${showOffcanvas ? "show d-block" : "d-none"
            }`}
          style={{
            height: "auto",
            background: "#191a1c",
            transition: "0.6s ease-in-out",
          }}
        >
          <div className="offcanvas-header">
            <h5 style={{ color: "white" }}>GODAWARI POWER & ISPAT</h5>
            <button
              type="button"
              class=" btn ms-auto"
              onClick={() => setShowOffcanvas(false)}
            >
              {" "}
              <RxCross2 className={style.crosButton} />
            </button>
          </div>
          <div className="offcanvas-body m-0 p-0  ">
            <ul
              className={`navbar-nav ${style.offcanvasNavItems}`}
              onClick={() => setShowOffcanvas(false)}
            >
              <li className="nav-item">
                <Link to="/aboutUs" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leadershipBdo" className="nav-link">
                  Leadership Directer's
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Ecosystem" className="nav-link">
                  Ecosysytem
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/peopleCarrer" className="nav-link">
                  Career 2
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/peopleoverview" className="nav-link">
                  People Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leadershipcommitties" className="nav-link">
                  Leadership Committee
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mediapublication" className="nav-link">
                  Media Pubcation & Press Releases{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/financialoverview" className="nav-link">
                  Finanacial Overview{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/investormediareports" className="nav-link">
                  Investor & Media Reports{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/investormediafinancial" className="nav-link">
                  Investor & Media Finanacial{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/communityeducation" className="nav-link">
                  Community Education{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/welfare" className="nav-link">
                  Community Welfare{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/infrastructure" className="nav-link">
                  Community Infrastructure{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/healthcare" className="nav-link">
                  Community Healthcare{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bussinessbillets" className="nav-link">
                  Billtes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hbwires" className="nav-link">
                  Hb Wires{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/spongeiron" className="nav-link">
                  Sponge Iron{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/wirerods" className="nav-link">
                  Wire Rods{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pellets" className="nav-link">
                  Pellets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/energy" className="nav-link">
                  Energy
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ferroalloys" className="nav-link">
                  Ferro Alloys
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mining" className="nav-link">
                  Mining
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
