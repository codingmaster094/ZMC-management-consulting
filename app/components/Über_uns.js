"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

const Über_uns = () => {
  const slides = [
    {
      quote:
        "Sie verstehen als klassischer Unternehmer die Beweggründe der Finanzierer und deren Wirkungsmechanismen nur bedingt….",
      image: "/images/about-1.webp",
      name: "Bernard Sitar",
      role: "Geschäftsführender Gesellschaft Sitzler Werbeagentur",
    },
    {
      quote:
        "Es gibt viele Beratungsfirmen, aber diese hebt sich durch ihre tiefgehende Marktkenntnis und ihre individuelle Betreuung hervor. Sie verstehen es, die spezifischen Bedürfnisse eines Unternehmens zu erfassen und maßgeschneiderte Lösungen zu entwickeln. Besonders beeindruckt hat mich die direkte und klare Kommunikation. Ich habe mich in jedem Schritt gut begleitet gefühlt und die Ergebnisse sprechen für sich.",
      image: "/images/about-2.webp",
      name: "Bernard Sitar",
      role: "Geschäftsführender Gesellschaft Sitzler Werbeagentur",
    },
    {
      quote:
        "ZMC hat wie alle anderen Beratungsgesellschaft einen entsprechenden Baukasten….Entscheidend ist aber ….",
      image: "/images/about-1.webp",
      name: "Bernard Sitar",
      role: "Geschäftsführender Gesellschaft Sitzler Werbeagentur",
    },
  ];
  const duplicatedSlides = slides.concat(slides);
  return (
    <>
      <section className="sec py-24 lg:py-28 bg-white" id="about">
        <div className="container space-y-16">
          <h2 className="title text-center mb-7 sm:mb-20 text-primary relative after:absolute after:left-2/4 after:-translate-x-2/4 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
            Über Uns
          </h2>

          {/* First Block */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 2xl:gap-12">
            <div className="lg:w-6/12">
              <div className="aspect-video lg:aspect-[1.27/1] relative">
                <Image
                  src="/images/about-1.webp"
                  alt="Image 1"
                  className="object-cover object-top"
                  layout="fill"
                />
              </div>
            </div>
            <div className="lg:w-6/12">
              <div className="space-y-4 lg:space-y-6">
                <p>
                  Erfolgreiches Interimsmanagement setzt in Organisationen ein
                  zuvor definiertes Zielbündel im Unternehmen in Zusammenarbeit
                  mit den im Unternehmen vorhandenen Mitarbeitern im Management
                  und auf Sachbearbeiter- / Arbeitsebene um.
                </p>
                <p>
                  Im Kern geht es meist um eine oder mehrere Aufgabenstellungen
                  im Kontext von Restrukturierung, Sanierung, Finanzierung und
                  (distressed) Mergers & Acquisitions (M&A). Häufig kommen
                  Spannungen und Konflikte im Gesellschafter- oder im
                  Kapitalgeberumfeld hinzu.
                </p>
                <p>
                  Volker P. Zimmerer startete seine Karriere in der
                  Unternehmensberatung und war jahrelang für etablierte
                  Beratungsgesellschaften, unter anderem für Volkswagen
                  Consulting GmbH, Volkswagen Coaching GmbH, Ernst & Young AG
                  und Helbling Corporate Finance GmbH tätig.
                </p>
                <p>
                  Ab 2011 wurden dann — unter der Marke „ZMC“ — vorwiegend
                  Restrukturierung- und Sanierungsprojekte umgesetzt und seither
                  diverse Interims-Funktionen als CEO, CFO, CHRO,
                  Arbeitsdirektor und Chief Restructuring Officer (CRO)
                  wahrgenommen.
                </p>
              </div>
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-6 2xl:gap-12">
            <div className="lg:w-6/12">
              <div className="aspect-video lg:aspect-[1.27/1] relative">
                <Image
                  src="/images/about-2.webp"
                  alt="Image 1"
                  className="object-cover object-top"
                  layout="fill"
                />
              </div>
            </div>
            <div className="lg:w-6/12">
              <div className="space-y-4 lg:space-y-6">
                <p>
                  In Summe sind somit mittlerweile in 20 Jahren als
                  Unternehmensberater über 40 Projekte in unzähligen
                  Mandantenbeziehungen zumeist erfolgreich umgesetzt worden und
                  es ist ein breites, internationales und bewährtes ZMC Netzwerk
                  entstanden.
                </p>
                <p>
                  Heute ist Volker P. Zimmerer oft als Interims-Vorstand,
                  -Geschäftsführer oder Generalbevollmächtigter in der Funktion
                  als Chief Restructuring Officer (CRO) tätig und steht dem
                  Unternehmen als erfahrener Lotse zur Seite; vorwiegend auf
                  Top-Management- / C-Level; zunehmend aber auf
                  Gesellschafterebene oder als Vermittler zwischen verschiedenen
                  Stakeholdern und den jeweiligen Teams.
                </p>
                <p>
                  Die Projekte der ZMC werden mit eigenen Fachkräften und
                  mithilfe eines großen, langjährig etablierten Netzwerkes an
                  Partnern und „Freelancern“ mit unterschiedlichen, jeweils
                  erforderlichen Schwerpunkten umgesetzt.
                </p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 xl:gap-12">
            <div>
              <div className="aspect-video sm:aspect-square">
                <Image
                  src="/images/about-3.webp"
                  alt="About gallery image 1"
                  width={1344}
                  height={448}
                />
              </div>
            </div>
            <div>
              <div className="aspect-video sm:aspect-square">
                <Image
                  src="/images/about-4.webp"
                  alt="About gallery image 2"
                  width={1344}
                  height={448}
                />
              </div>
            </div>
            <div>
              <div className="aspect-video sm:aspect-square">
                <Image
                  src="/images/about-5.webp"
                  alt="About gallery image 3"
                  width={1344}
                  height={448}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="container-fluid space-y-16">
          <h2 className="title text-center mb-7 sm:mb-20 text-primary relative after:absolute after:left-2/4 after:-translate-x-2/4 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
            Über Uns
          </h2>
          <div className="relative">
            <div className="container">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="reviewsSwiper"
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                breakpoints={{
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
              >
                {duplicatedSlides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white p-4 2xl:py-[30px] 2xl:px-[34px]">
                      <Image
                        src="/images/qoute.svg"
                        alt="quote"
                        width={24}
                        height={24}
                      />
                      <p className="mt-6 mb-8">{slide.quote}</p>
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-5">
                        <Image
                          src={slide.image}
                          alt="About Image"
                          width={56}
                          height={56}
                          className="size-14 object-cover rounded-full shrink-0"
                        />
                        <div>
                          <h3 className="text-h4">{slide.name}</h3>
                          <p>{slide.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Über_uns;
