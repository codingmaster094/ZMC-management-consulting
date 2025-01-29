import Link from "next/link";
import Image from "next/image";
import FLogo from "../../public/images/f-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-[200px] font-light">
      <div className="container">
        <div className="mb-12 gap-x-9 gap-y-14 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          <div>
            <Link aria-label="" href="/">
              <Image src={FLogo} alt="logo" />
            </Link>
          </div>
          <div>
            <h2 className="text-h4 font-medium mb-4">Seiten</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  aria-label=""
                  className="flex items-center gap-3"
                >
                  <svg
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.6739 0.862537C19.47 0.951272 19.375 1.10732 19.375 1.35341V1.56262L20.9082 3.10049L22.4415 4.63832L11.5108 4.65037L0.580204 4.66237L0.460532 4.78208C0.224423 5.01819 0.264173 5.40698 0.541767 5.57624C0.694017 5.66905 0.783876 5.66985 11.5693 5.66999L22.4434 5.67018L20.9092 7.20698L19.375 8.74377V8.95846C19.375 9.34579 19.7092 9.59366 20.0389 9.45079C20.1314 9.41071 21.014 8.56185 22.1992 7.37301L24.2031 5.36296V5.15455V4.94615L22.1992 2.9361C20.4338 1.1653 20.0215 0.788756 19.8569 0.797006C19.8368 0.798038 19.7544 0.827522 19.6739 0.862537Z"
                      fill="white"
                    />
                  </svg>
                  <span>Startseite</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  aria-label=""
                  className="flex items-center gap-3"
                >
                  <svg
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.6739 0.862537C19.47 0.951272 19.375 1.10732 19.375 1.35341V1.56262L20.9082 3.10049L22.4415 4.63832L11.5108 4.65037L0.580204 4.66237L0.460532 4.78208C0.224423 5.01819 0.264173 5.40698 0.541767 5.57624C0.694017 5.66905 0.783876 5.66985 11.5693 5.66999L22.4434 5.67018L20.9092 7.20698L19.375 8.74377V8.95846C19.375 9.34579 19.7092 9.59366 20.0389 9.45079C20.1314 9.41071 21.014 8.56185 22.1992 7.37301L24.2031 5.36296V5.15455V4.94615L22.1992 2.9361C20.4338 1.1653 20.0215 0.788756 19.8569 0.797006C19.8368 0.798038 19.7544 0.827522 19.6739 0.862537Z"
                      fill="white"
                    />
                  </svg>
                  <span>Dienstleistungen</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  aria-label=""
                  className="flex items-center gap-3"
                >
                  <svg
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.6739 0.862537C19.47 0.951272 19.375 1.10732 19.375 1.35341V1.56262L20.9082 3.10049L22.4415 4.63832L11.5108 4.65037L0.580204 4.66237L0.460532 4.78208C0.224423 5.01819 0.264173 5.40698 0.541767 5.57624C0.694017 5.66905 0.783876 5.66985 11.5693 5.66999L22.4434 5.67018L20.9092 7.20698L19.375 8.74377V8.95846C19.375 9.34579 19.7092 9.59366 20.0389 9.45079C20.1314 9.41071 21.014 8.56185 22.1992 7.37301L24.2031 5.36296V5.15455V4.94615L22.1992 2.9361C20.4338 1.1653 20.0215 0.788756 19.8569 0.797006C19.8368 0.798038 19.7544 0.827522 19.6739 0.862537Z"
                      fill="white"
                    />
                  </svg>
                  <span>Über uns</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#downloads"
                  aria-label=""
                  className="flex items-center gap-3"
                >
                  <svg
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.6739 0.862537C19.47 0.951272 19.375 1.10732 19.375 1.35341V1.56262L20.9082 3.10049L22.4415 4.63832L11.5108 4.65037L0.580204 4.66237L0.460532 4.78208C0.224423 5.01819 0.264173 5.40698 0.541767 5.57624C0.694017 5.66905 0.783876 5.66985 11.5693 5.66999L22.4434 5.67018L20.9092 7.20698L19.375 8.74377V8.95846C19.375 9.34579 19.7092 9.59366 20.0389 9.45079C20.1314 9.41071 21.014 8.56185 22.1992 7.37301L24.2031 5.36296V5.15455V4.94615L22.1992 2.9361C20.4338 1.1653 20.0215 0.788756 19.8569 0.797006C19.8368 0.798038 19.7544 0.827522 19.6739 0.862537Z"
                      fill="white"
                    />
                  </svg>
                  <span>Herunterladen</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-h4 font-medium mb-4">Rechtliches</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/Impressum"
                  aria-label="Impressum"
                  className="flex items-center gap-3"
                >
                  <svg
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.6739 0.862537C19.47 0.951272 19.375 1.10732 19.375 1.35341V1.56262L20.9082 3.10049L22.4415 4.63832L11.5108 4.65037L0.580204 4.66237L0.460532 4.78208C0.224423 5.01819 0.264173 5.40698 0.541767 5.57624C0.694017 5.66905 0.783876 5.66985 11.5693 5.66999L22.4434 5.67018L20.9092 7.20698L19.375 8.74377V8.95846C19.375 9.34579 19.7092 9.59366 20.0389 9.45079C20.1314 9.41071 21.014 8.56185 22.1992 7.37301L24.2031 5.36296V5.15455V4.94615L22.1992 2.9361C20.4338 1.1653 20.0215 0.788756 19.8569 0.797006C19.8368 0.798038 19.7544 0.827522 19.6739 0.862537Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>Impressum</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/Datenschutz"
                  aria-label="Datenschutz"
                  className="flex items-center gap-3"
                >
                  <svg
                    width="25"
                    height="10"
                    viewBox="0 0 25 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.6739 0.862537C19.47 0.951272 19.375 1.10732 19.375 1.35341V1.56262L20.9082 3.10049L22.4415 4.63832L11.5108 4.65037L0.580204 4.66237L0.460532 4.78208C0.224423 5.01819 0.264173 5.40698 0.541767 5.57624C0.694017 5.66905 0.783876 5.66985 11.5693 5.66999L22.4434 5.67018L20.9092 7.20698L19.375 8.74377V8.95846C19.375 9.34579 19.7092 9.59366 20.0389 9.45079C20.1314 9.41071 21.014 8.56185 22.1992 7.37301L24.2031 5.36296V5.15455V4.94615L22.1992 2.9361C20.4338 1.1653 20.0215 0.788756 19.8569 0.797006C19.8368 0.798038 19.7544 0.827522 19.6739 0.862537Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>Datenschutz</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-h4 font-medium mb-4">Kontakt</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:contact@eas-corporation.com"
                  aria-label="Email"
                  className="flex gap-3"
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5096 11.8121L18.6401 9.01172C19.2827 8.57722 19.6668 7.85214 19.6668 7.07664V7.07664C19.6668 5.78414 18.62 4.7373 17.3284 4.7373H5.51896C4.22738 4.7373 3.18054 5.78414 3.18054 7.07572V7.07572C3.18054 7.85122 3.56463 8.57631 4.20721 9.01172L8.33771 11.8121C10.2013 13.0753 12.646 13.0753 14.5096 11.8121V11.8121Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3.16675 7.07617V15.7378C3.16675 17.2567 4.39783 18.4878 5.91675 18.4878H16.9167C18.4357 18.4878 19.6667 17.2567 19.6667 15.7378V7.07709"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>contact@eas-corporation.com</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-h4 font-medium mb-4">Quick Location</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="javascript:viod(0)"
                  aria-label="Location"
                  className="flex gap-3"
                >
                  <svg
                    className="shrink-0"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3333 12.0713L15.3424 6.57129"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.6326 3.45882C17.3446 4.17085 17.3446 5.32527 16.6326 6.03729C15.9206 6.74931 14.7662 6.74931 14.0542 6.03729C13.3421 5.32526 13.3421 4.17084 14.0542 3.45882C14.7662 2.7468 15.9206 2.7468 16.6326 3.45882"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.4784 16.2582L18.3784 10.7582C18.207 9.9011 17.4544 9.28418 16.5808 9.28418H6.75326C5.87968 9.28418 5.12709 9.9011 4.95568 10.7582L3.85568 16.2582C3.62834 17.393 4.49643 18.4508 5.65326 18.4508H17.6799C18.8368 18.4518 19.7048 17.393 19.4784 16.2582Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4.37915 17.9191L12.1525 13.6016"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M5.745 9.5957L19 17.8732"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>
                    Enterprise Analytics Software GmbH Königstrasse 27 70173
                    Stuttgart / Germany
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 mt-10 border-t border-darkGray text-center text-lightGray">
          <p>&copy; {new Date().getFullYear()} Turing, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
