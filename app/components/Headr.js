"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // State to track the active link
  const lenisRef = useRef(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rafState;

    function raf(time) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    rafState = requestAnimationFrame(raf);
    lenisRef.current = scroller;

    return () => {
      cancelAnimationFrame(rafState);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      // Update active link based on scroll position
      const sections = ["#services", "#about", "#downloads"];
      let currentLink = "/";

      for (let section of sections) {
        const element = document.querySelector(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentLink = section;
        }
      }

      setActiveLink(currentLink); // Update the active link
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const offcanvasRef = useRef(null);
  const offcanvasBackdropRef = useRef(null);

  const openOffcanvas = () => {
    setIsOpen(true);
  };

  const closeOffcanvas = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const menuButton = menuButtonRef.current;
    const closeButton = closeButtonRef.current;

    menuButton.addEventListener("click", openOffcanvas);
    closeButton.addEventListener("click", closeOffcanvas);

    return () => {
      menuButton.removeEventListener("click", openOffcanvas);
      closeButton.removeEventListener("click", closeOffcanvas);
    };
  }, []);

  const SidebarFun = () => {
    setIsOpen(false);
  };

  const handleSubmenuClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
console.log('targetElement', targetElement)
    if (targetElement) {
      lenisRef.current.scrollTo(targetElement, { duration: 1.5 });
    } else {
      console.warn(`Target section with id #${targetId} not found.`);
    }
  };

  return (
    <header className={`py-4 bg-white z-50 w-full top-0 left-0 sticky`}>
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="Home" className="inline-block cursor-pointer">
            <Image
              src={Logo}
              alt="ZMC Management Consulting"
              width={150}
              height={50}
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-12">
              <li>
                <Link
                  href="#Startseite"
                  aria-label="Startseite"
                  className={`link ${activeLink === "/" ? "active" : ""}`}
                  onClick={(e) => handleSubmenuClick(e , "#Startseite")}
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  aria-label="Dienstleistungen"
                  className={`link ${
                    activeLink === "#services" ? "active" : ""
                  }`}
                  onClick={(e) => handleSubmenuClick(e , "#services")}
                >
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  aria-label="Über uns"
                  className={`link ${activeLink === "#about" ? "active" : ""}`}
                  onClick={(e) => handleSubmenuClick(e , "#about")}
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="#downloads"
                  aria-label="Herunterladen"
                  className={`link ${
                    activeLink === "#downloads" ? "active" : ""
                  }`}
                  onClick={(e) => handleSubmenuClick(e , "#downloads")}
                >
                  Akteulles
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="#contact"
              aria-label="Contact"
              className={`link ${activeLink === "#contact" ? "active" : ""} bg-primary text-white flex gap-4 p-2 sm:py-2 sm:px-6 shadow-btn_shadow hover:bg-white hover:text-primary transition-all duration-300`}
              onClick={(e) => handleSubmenuClick(e ,"#contact")}
            >
              <span className="hidden xl:block">Kontakt</span>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden xl:block"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.424 8.2849C19.22 8.37364 19.125 8.52968 19.125 8.77578V8.98498L20.6583 10.5229L22.1915 12.0607L11.2609 12.0727L0.330265 12.0847L0.210593 12.2044C-0.0255161 12.4406 0.0142339 12.8293 0.291828 12.9986C0.444078 13.0914 0.533937 13.0922 11.3194 13.0924L22.1934 13.0925L20.6593 14.6293L19.125 16.1661V16.3808C19.125 16.7682 19.4593 17.016 19.789 16.8732C19.8815 16.8331 20.764 15.9842 21.9492 14.7954L23.9532 12.7853V12.5769V12.3685L21.9492 10.3585C20.1838 8.58767 19.7716 8.21112 19.607 8.21937C19.5868 8.2204 19.5045 8.24989 19.424 8.2849Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="xl:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>
            </Link>
            <button
              className="bg-primary text-white p-2 sm:py-2 sm:px-6 shadow-btn_shadow lg:hidden hover:bg-white hover:text-primary transition-all duration-300"
              id="menuButton"
              ref={menuButtonRef}
              aria-label="Open menu" // Add this
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-3"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6h10" />
                <path d="M4 12h16" />
                <path d="M7 12h13" />
                <path d="M4 18h10" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="offcanvasBackdrop"
          ref={offcanvasBackdropRef}
          onClick={SidebarFun}
          className="fixed inset-0 bg-black opacity-50 transition-transform duration-300 z-50"
        ></div>
      )}

      <div
        ref={offcanvasRef}
        id="offcanvas"
        className={`fixed top-0 left-0 w-64 h-full transform transition-transform duration-300 bg-white shadow p-4 z-50 ${
          isOpen ? "" : "-translate-x-full"
        }`}
      >
        <div className="text-end">
          <button
            id="closeButton"
            ref={closeButtonRef}
            aria-label="Close menu" // Add this
            className="close-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                aria-label="Startseite"
                className={`link ${activeLink === "/" ? "active" : ""}`}
                onClick={SidebarFun}
              >
                Startseite
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                aria-label="Dienstleistungen"
                className={`link ${activeLink === "#services" ? "active" : ""}`}
                onClick={SidebarFun}
              >
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                aria-label="Über uns"
                className={`link ${activeLink === "#about" ? "active" : ""}`}
                onClick={SidebarFun}
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link
                href="#downloads"
                aria-label="Akteulles"
                className={`link ${
                  activeLink === "#downloads" ? "active" : ""
                }`}
                onClick={SidebarFun}
              >
                Akteulles
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
