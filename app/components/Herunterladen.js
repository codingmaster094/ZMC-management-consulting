import React from "react";
import Link from "next/link";

const Herunterladen = () => {
  const HerunterladenData = [
    {
      title: "Artikel zum Thema Unternehmensfinanzierung Magazin Maturus aktuell",
      href: "/MaturusMagazinHerbstWinter2023.pdf",
      download: "PDF 1"
    },
    {
      title: "Leistungs-Portfolio Restrukturierung Automotive; Kooperation KL-Gates, TAS und ZMC", 
      href: "/pdf2.pdf",
      download: "PDF 2"
    },
    {
      title: "Leistungs-Portfolio Restrukturierung Automotive; Kooperation KL-Gates, TAS und ZMC",
      href: "/pdf3.pdf", 
      download: "PDF 3"
    }
  ]
  return (
    <section className="sec py-24 lg:py-28 bg-white" id="downloads">
      <div className="container">
        <h2 className="title text-center mb-20 text-primary relative after:absolute after:left-2/4 after:-translate-x-2/4 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
          Herunterladen
        </h2>
        <div className="flex flex-col gap-12 md:flex-row flex-wrap">
          {HerunterladenData.map((item, index) => (
            <div key={index} className="space-y-4 w-full md:w-[calc(50%-24px)]">
              <div className="border p-4 sm:p-8 border-secondary space-y-6">
                <h3 className="text-primary break-words">
                  {item.title}
                </h3>
              </div>
              <Link
                aria-label=""
                target="_blank"
                href={item.href}
                download={item.download}
                className="flex items-center gap-4 text-primary"
              >
                <span>HERUNTERLADEN</span>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.99998 14.321V2.6543"
                    stroke="#A58C65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 14.3208C17.5 16.1616 16.0075 17.6541 14.1667 17.6541H5.83333C3.9925 17.6541 2.5 16.1616 2.5 14.3208"
                    stroke="#A58C65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.1667 10.1543L9.99919 14.3218L5.83252 10.1543"
                    stroke="#A58C65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herunterladen;
