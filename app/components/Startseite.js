import Image from "next/image";
import React from "react";

const Startseite = () => {
  return (
    <>
    <section className="sec bg-[url(/images/hero-bg-mobile.webp)] sm:bg-[url(/images/hero-bg.webp)] py-20 md:py-24 lg:py-[167px] text-white">
        <div className="container">
          <div className="sm:w-8/12 lg:w-6/12">
            <h1>Z management consulting (ZMC) in Stuttgart</h1>
            <ul className="list space-y-4 my-6 sm:mt-8 sm:mb-11">
              <li>Unternehmensberatung</li>
              <li>Interims-Management</li>
              <li>Restrukturierung</li>
              <li>Sanierung & Transformation</li>
            </ul>
            <button className="flex items-center gap-4 bg-white text-primary shadow-btn_shadow py-2 px-6 hover:bg-primary hover:text-white transition-all duration-300">
              <span>Mehr erfahren</span>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4239 7.86205C19.22 7.95078 19.125 8.10683 19.125 8.35292V8.56213L20.6582 10.1L22.1915 11.6378L11.2608 11.6499L0.330204 11.6619L0.210532 11.7816C-0.0255772 12.0177 0.0141728 12.4065 0.291767 12.5758C0.444017 12.6686 0.533876 12.6694 11.3193 12.6695L22.1934 12.6697L20.6592 14.2065L19.125 15.7433V15.958C19.125 16.3453 19.4592 16.5932 19.7889 16.4503C19.8814 16.4102 20.764 15.5614 21.9492 14.3725L23.9531 12.3625V12.1541V11.9457L21.9492 9.93561C20.1838 8.16482 19.7715 7.78827 19.6069 7.79652C19.5868 7.79755 19.5044 7.82703 19.4239 7.86205Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
       
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="container">
          <h2 className="title text-center mb-7 sm:mb-20 text-primary relative after:absolute after:left-2/4 after:-translate-x-2/4 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
            Z management consulting (ZMC) in Stuttgart
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 2xl:gap-20">
            <div className="lg:w-4/12">
              <div className="aspect-video lg:aspect-[.93/1] relative">
                <Image
                  src="/images/image-1.webp"
                  alt="Image 1"
                  className="object-cover object-top"
                  layout="fill"
                   loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-8/12">
              <div className="space-y-4 lg:space-y-6">
                <p>
                  Die Z management consulting (ZMC) ist eine herausragende,
                  umsetzungsstarke und ergebnisorientierte Unternehmensberatung
                  für schwierigste Projekte im Bereich Krisenbewältigung,
                  Restrukturierung, Sanierung und Transformation.
                </p>
                <p>
                  Hierbei stellen wir als Interims-Manager zumeist auf Top-Level
                  ein Vorstandsmitglied, wie z.B. Chief Executive Officer (CEO),
                  Chief Financial Officer (CFO) oder Chief Restructuring Officer
                  (CRO) oder übernehmen die Funktion des Geschäftsführers oder
                  Generalbevollmächtigten.
                </p>
                <p>
                  Wir bringen für den Kunden die an uns gestellten Aufgaben und
                  Projekte — auch als Teil der Kundenorganisation — mit
                  Übernahme von unternehmerischer Verantwortung zum gewünschten
                  Ergebnis.
                </p>
                <p>
                  Die Umsetzung herausfordernder Projekte gelingt nur mit einem
                  reibungslos funktionierenden, handverlesenen und
                  krisenerprobten Netzwerk an internationalen, jeweils
                  branchenspezifischen Partnern, Dienstleistern und Experten,
                  die wir fallspezifisch, zielgerichtet und exakt hinsichtlich
                  des Kosten-/ Nutzen-Verhältnisses dosiert zum Einsatz bringen.
                </p>
                <p>
                  Gerne offerieren wir Ihnen auf Wunsch auch eine leistungs- und
                  ergebnisorientierte Vergütung unserer Leistungen. Sprechen Sie
                  uns hierzu gerne an.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Startseite;
