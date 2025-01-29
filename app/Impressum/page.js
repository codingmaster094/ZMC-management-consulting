import React from 'react'

const page = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
    <div className="container">
      <h1 className="title mb-20 text-primary relative after:absolute after:left-0 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
        Impressum
      </h1>
      <div className="space-y-12 font-medium">
        {/* Kontakt aufnehmen */}
        <div className="space-y-4">
          <h2 className="text-h4">Kontakt aufnehmen</h2>
          <div className="flex flex-col gap-3">
            <a href="#" aria-label="">
              Z management consulting (ZMC) <br />
              Königstrasse 27 <br />
              70173 Stuttgart
            </a>
            <a href="tel:+4971149050391" aria-label="">
              Tel: +49 711 490 50 391
            </a>
            <a href="tel:+497114905025" aria-label="">
              Fax: +49 711 490 50 25
            </a>
            <a
              href="mailto:v.zimmerer@z-management-consulting.com"
              aria-label=""
            >
              E-Mail: v.zimmerer@z-management-consulting.com
            </a>
            <a
              href="https://www.z-management-consulting.com"
              aria-label=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Web: www.z-management-consulting.com
            </a>
          </div>
        </div>

        {/* Vertretungsberechtigte */}
        <div className="space-y-4">
          <h2 className="text-h4">
            Vertretungsberechtigte Geschäftsführer und inhaltlich
            Verantwortliche gemäß § 10 Absatz 3 MDStV:
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              Dipl.-Betrw. (FH), MBA (univ.) <br />
              Volker P. Zimmerer
            </p>
            <p>
              Umsatzsteueridentifikationsnummer (USt.-ID): DE 291 955 364;{" "}
              <br />
              Steuer-Nummer / Tax-ID: 97492/26110
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page