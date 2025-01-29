import Image from "next/image";
import React from "react";

const Dienstleistungen = () => {
  return (
    <>
      <section className="sec py-24 lg:py-28" id="services">
        <div className="container space-y-[70px]">
          <div>
            <h2 className="title text-center mb-7 sm:mb-20 text-primary relative after:absolute after:left-2/4 after:-translate-x-2/4 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
              Dienstleistungen
            </h2>
            <div className="space-y-4 lg:space-y-8">
              <p>
                ZMC bietet - zusammen mit einem breiten Netzwerk - ein
                übergreifendes Leistungsportfolio, um die Herausforderungen
                Ihrer Organisation wirkungsvoll und leistungsstark begegnen zu
                können und um die Ziele der Projekte erfolgreich erreichen zu
                können. Das Ergebnis steht im Vordergrund unseres Wirkens.
              </p>
              <p>
                Ausgangspunkt für die Erstellung unserer Angebote ist eine
                präzise Erarbeitung der Strategie, damit sich Auftraggeber und
                Auftragnehmer vollständig darüber im Klaren sind, was dies für
                beide Seiten bedeutet. Meist stellen die Beteiligten im Zuge der
                ersten Gespräche fest, dass es sinnvoll ist, zuerst ein
                Strategieprojekt vorzuschalten.
              </p>
            </div>
          </div>

          {/* M&A Section */}
          <div className="space-y-[34px]">
            <h2 className="title mb-5 text-primary relative after:absolute after:left-0 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
              Fusionen und Übernahmen (M&A)
            </h2>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Grundsätzlich lässt sich der M&A Prozess in fünf übergeordnete
                Phasen unterteilen, die wir im Zuge einer Beauftragung für Sie
                realisieren:
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 2xl:gap-12 bg-white p-4 sm:p-12">
              <div className="lg:w-6/12">
                <div className="aspect-video lg:aspect-[1.44/1] img-wrapper relative">
                  <Image
                    src="/images/image-2.webp"
                    alt="Image 1"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-6/12">
                <ul className="list-2 space-y-4 my-6 sm:mt-8 sm:mb-11">
                  <li>Vorbereitungs- und Vertragsanbahnungsphase</li>
                  <li>
                    Phase der Unternehmensprüfung nach Schwerpunkten (Due
                    Diligences)
                  </li>
                  <li>Phase der Vertragsverhandlung</li>
                  <li>Vollzugs- bzw. Durchführungsphase</li>
                  <li>Integration und Post-Merger-Maßnahmen (PMI)</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Jede dieser Phase unterteilt sich wiederum in einzelne
                Arbeitsschritte, die unter größter Sorgfalt ausgeführt werden
                sollten. Der Umfang der Phasen richtet sich stets nach dem
                individuellen Anwendungsfall und den existierenden
                Rahmenbedingungen.
              </p>
            </div>
          </div>

          {/* Finance Section */}
          <div className="space-y-[34px]">
            <h2 className="title mb-5 text-primary relative after:absolute after:left-0 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
              Finance
            </h2>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Häufig werden zur Umsetzung der Projekte Finanzierungslösungen
                benötigt. Oder der Finanzierungsbedarf ist selbst Initiator des
                Projektes.
              </p>
            </div>
            <div className="bg-white p-6 space-y-4 border-l-4 border-primary">
              <p>
                Zentrale Herausforderung ist, schnell und präzise zu ermitteln,
                welche Lösungen überhaupt - aufgrund der gegebenen
                Rahmenbedingungen und dem bestehenden Kontext - möglich sind
                (schlechte Ratings, fehlende Jahresabschlüsse etc.) . Dann gilt
                es die richtigen Finanzierungsbausteine zu finden und diese
                schnell und zielgerichtet zu orchestrieren. Hier verlaufen sich
                die meisten unerfahrenen Akteure, da in den wenigsten Fällen bei
                sich in Sondersituationen befindenden Unternehmen, Lösungen „von
                der Stange“ zum Ziel führen.
              </p>
            </div>
            <div className="space-y-4 lg:space-y-8">
              <p>
                ZMC hat in der Vergangenheit umfassende Finanzierungslösungen
                konzeptionell entworfen und erfolgreich für die Mandanten
                umgesetzt, z.B.:
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-12 bg-white p-4 sm:p-12">
              <div>
                <div className="aspect-[3/1] img-wrapper relative">
                  <Image
                    src="/images/image-3.webp"
                    alt="Image 1"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3 lg:gap-8">
                <ul className="list-2 space-y-4 lg:space-y-4">
                  <li>Akquisitionsfinanzierungen</li>
                  <li>Leasing</li>
                  <li>
                    Sonderlösungen und Mischfinanzierungen wie Sale- &
                    Lease-Back- oder Sale-& Rent-Back-Lösungen
                  </li>
                  <li>Öffentliche Fördermittel</li>
                  <li>
                    Nachfolge-Finanzierungen und
                    Existenzgründungs-Finanzierungen
                  </li>
                  <li>
                    Gesellschafter- / Beteiligungsfinanzierungen /
                    Investorenlösungen
                  </li>
                  <li>Debt to Equity Programme</li>
                  <li>Schuldenschnitte und Refinanzierungen</li>
                </ul>
                <ul className="list-2 space-y-4 lg:space-y-4">
                  <li>Investitionsfinanzierungen</li>
                  <li>Betriebsmittelfinanzierungen</li>
                  <li>Projektfinanzierungen</li>
                  <li>Kapitalmarktnahe Finanzierungen</li>
                  <li>Forderungsbasierte oder Materialbasierte Finanzierung</li>
                  <li>Eigenkapitalfinanzierungen</li>
                  <li>Export- und Importfinanzierungen</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Jede dieser Phase unterteilt sich wiederum in einzelne
                Arbeitsschritte, die unter größter Sorgfalt ausgeführt werden
                sollten. Der Umfang der Phasen richtet sich stets nach dem
                individuellen Anwendungsfall und den existierenden
                Rahmenbedingungen.
              </p>
            </div>
          </div>

          {/* Restructuring & Transformation Section */}
          <div className="space-y-[34px]">
            <h2 className="title mb-5 text-primary relative after:absolute after:left-0 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
              Restrukturierung & Transformation
            </h2>
            <div className="space-y-4 lg:space-y-8">
              <p>
                bezieht sich auf die Neugestaltung und Umorganisation eines
                Unternehmens, um seine Effizienz und Wettbewerbsfähigkeit zu
                verbessern. Dies kann verschiedene Maßnahmen umfassen, wie z.B.:
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 2xl:gap-12 bg-white p-4 sm:p-12">
              <div className="space-y-4 lg:space-y-4">
                <ul className="list-2 space-y-4 lg:space-y-4">
                  <li>
                    <span className="font-semibold">Kostenreduktion: </span>
                    Identifizierung und Eliminierung unnötiger Ausgaben.
                  </li>
                  <li>
                    <span className="font-semibold">Prozessoptimierung: </span>
                    Verbesserung interner Abläufe, um schneller und effizienter
                    zu arbeiten.
                  </li>
                  <li>
                    <span className="font-semibold">Personalmaßnahmen: </span>
                    Umstrukturierung der Belegschaft, was Entlassungen oder
                    Neueinstellungen beinhalten kann.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Finanzielle Anpassungen:{" "}
                    </span>
                    Refinanzierung von Schulden oder Anpassung der
                    Kapitalstruktur.
                  </li>
                  <li>
                    <b>Transformation :</b>Geht über die Restrukturierung hinaus
                    und bezieht sich auf tiefgreifende Veränderungen, die das
                    gesamte Geschäftsmodell eines Unternehmens betreffen können.
                    Hierbei handelt es sich oft um langfristige Strategien, die
                    darauf abzielen, das Unternehmen an neue Marktbedingungen
                    anzupassen oder sogar neu zu erfinden. Wichtige Aspekte sind
                  </li>
                </ul>
                <ul className="space-y-4 lg:space-y-4 list-disc list-inside ml-4 sm:ml-10">
                  <li>
                    Digitale Transformation: Integration neuer Technologien, um
                    Geschäftsprozesse zu verbessern und neue Geschäftsfelder zu
                    erschließen.
                  </li>

                  <li>
                    Kulturelle Transformation: Veränderung der
                    Unternehmenskultur, um mehr Innovation und Agilität zu
                    fördern.
                  </li>

                  <li>
                    Strategische Neuausrichtung: Entwicklung neuer
                    Geschäftsstrategien, um auf veränderte Marktbedingungen zu
                    reagieren.
                  </li>
                </ul>
                <p>
                  Während die <b>Restrukturierung</b> oft kurzfristige Maßnahmen
                  zur Verbesserung der Effizienz umfasst, zielt die{" "}
                  <b>Transformation</b> auf langfristige, tiefgreifende
                  Veränderungen ab, die das Unternehmen zukunftssicher machen
                  sollen. Beide Prozesse sind entscheidend für den Erfolg und
                  die Anpassungsfähigkeit eines Unternehmens in einem sich
                  ständig wandelnden Marktumfeld.
                </p>
              </div>
              <div>
                <div className="aspect-[3/1] img-wrapper relative">
                  <Image
                    src="/images/image-4.webp"
                    alt="Image"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-28 bg-secondary text-white">
        <div className="container">
          <div className="space-y-8">
            <h2 className="title pb-1">Interims-Management</h2>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Interimsmanagement oder Management auf Zeit ist häufig ein
                probates und zielorientiertes Mittel, um notwendige
                Transformationen in Gesellschaften nicht nur aufzuzeigen,
                sondern aktiv mit der bestehenden Organisation und den Akteuren
                selbst umzusetzen und um Projekte im Bereich Restrukturierung
                und Transformation auch tatsächlich in einer Organisation
                umsetzen zu können.
              </p>
              <p>ZMC kümmert sich um die Besetzung folgender Funktionen:</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 2xl:gap-12 bg-white p-4 sm:p-12 text-text">
              <div className="lg:w-6/12">
                <ul className="list-2 space-y-4 my-6 sm:mt-8 sm:mb-11">
                  <li>Chief Restructuring Officer (CRO)</li>
                  <li>Chief Financial Officer (CFO)</li>
                  <li>Chief of Staff (CoS)</li>
                  <li>Chief Executive Officer (CEO)</li>
                  <li>Beirats- / Aufsichtsrats-Mandate</li>
                  <li>Weitere Linien- / Stabs- oder Projekt-Funktionen</li>
                </ul>
              </div>
              <div className="lg:w-6/12">
                <div className="aspect-video lg:aspect-[1.44/1] img-wrapper relative">
                  <Image
                    src="/images/image-5.webp"
                    alt="Image 1"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Darüber hinaus besteht die Möglichkeit für den Mandanten weitere
                Funktion wie z.B. Tätigkeit als Organe, Liquidatoren,
                Generalbevollmächtigte uvm. darzustellen.
              </p>
              <p>
                ZMC offeriert Ihnen die Besetzung nur, wenn wir der Überzeugung
                sind, die entsprechenden Wertbeiträge leisten zu können. Das
                gilt im Übrigen für Alles, was wir anbieten und tun.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-28">
        <div className="container space-y-[70px]">
          <div className="space-y-[34px]">
            <h2 className="title mb-7 sm:mb-14 text-primary relative after:absolute after:left-0 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
              Coaching und Mediation
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 2xl:gap-12 bg-white p-4 sm:p-12">
              <div className="lg:w-6/12">
                <div className="aspect-video lg:aspect-[1.44/1] img-wrapper relative">
                  <Image
                    src="/images/image-6.webp"
                    alt="Image 1"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="lg:w-6/12 space-y-4">
                <p>
                  Zumeist treten die entscheidenden Konflikte im
                  Gesellschafterumfeld, vorwiegend als Generationenkonflikte auf
                  oder es handelt sich um Spannungsfelder zwischen den
                  Eigentümer (-Familien) und dem bestehenden Management des
                  Unternehmens. Als weitere Variante sind es Brandherde
                  innerhalb der höchsten Leitungsgremien, die zu einem akuten
                  Handlungsbedarf führen:
                </p>
                <ul className="list-2 space-y-4 my-6 sm:mt-8 sm:mb-11">
                  <li>
                    Aufdecken und Klärung ungeklärter, nicht adressierter oder
                    ungelöster Konflikte mit systematischen Methoden des
                    (systemischen) Coachings, des Konfliktmanagements und der
                    Mediation
                  </li>
                  <li>Entschärfung von Spannungsfeldern</li>
                  <li>
                    Aufsetzen und Begleitung eines systematischen
                    Change-Managements zur erfolgreichen und bestandsfähigen
                    Transformation
                  </li>
                  <li>Zielerreichungscontrolling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-[34px]">
            <h2 className="title mb-7 sm:mb-14 text-primary relative after:absolute after:left-0 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
              ZMC & ZMC Netwerk als Investoren
            </h2>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Die ZMC verfügt über ein großes Unternehmer- und
                Investoren-Netzwerk an Eigen- und Fremdkapitalgebern, welches
                sich in Form von Mehrheits- oder Minderheitsbeteiligungen an
                Unternehmen - besonders auch in schwierigen Unternehmensphasen -
                beteiligt. Kern der Überlegung ist nicht nur die Übernahme von
                Anteilen selbst, sondern die aktive Gestaltung der
                Unternehmensentwicklung durch das Einbringen entsprechender
                Management-Kapazitäten der neuen Gesellschafter.
              </p>
              <p>
                “Beteiligungsansatz von ZMC und des Netzwerks: „Combining
                Forces“ — interdisziplinär und gemeinsam durch Bündelung von
                Kräften und gleichgerichteten Interessen mehr erreichen”
              </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 2xl:gap-12 bg-white p-4 sm:p-12">
              <div className="lg:w-6/12">
                <ul className="list-2 space-y-4 my-6 sm:mt-8 sm:mb-11">
                  <li>
                    Dienstleister Konstruktion / Engineering / Projektmanagement
                    / Grundlagenentwicklung / Forschung i.w.S. / Montage /
                    Service
                  </li>
                  <li>
                    Software - Industrie 4.0 - Unternehmens- bzw.
                    gruppenübergreifende Einbindung und Modernisierung der
                    Targets / (interne) Vernetzung / maximal technologisch
                    gestütztes und voll integriertes Arbeiten / ERP-Software &
                    Systeme / Modernisierung Infrastruktur und Anwendungen /
                    mobile Lösungen / Enabling der Organisationen und der
                    Anwender / KI Lösungen
                  </li>
                  <li>
                    “Verlängerte Werkbank” - Lohnfertigungs- bzw.
                    Lohndienstleistungs-unternehmen (Beschichtung /
                    Oberflächenbehandlung / Engineering / Zukaufteile / sonstige
                    Wertschöpfungsdienstleistung)
                  </li>
                </ul>
              </div>
              <div className="lg:w-6/12">
                <div className="aspect-video lg:aspect-[1.44/1] img-wrapper relative">
                  <Image
                    layout="fill"
                    src="/images/image-7.webp"
                    alt="Image 1"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Sprechen Sie uns hier gerne an. Sowohl im Falle eines
                gewünschten Verkaufes oder im Falle eines gewünschten Zukaufs.
              </p>
            </div>
          </div>

          <div className="space-y-[34px]">
            <h2 className="title mb-7 sm:mb-14 text-primary relative after:absolute after:left-0 after:-bottom-4 after:w-40 after:h-[5px] after:bg-secondary">
              Industrielle Dienstleistungen
            </h2>
            <div className="space-y-4 lg:space-y-8">
              <p>
                Herausfordernde Unternehmenssituation gehen oft einher mit einem
                Mangel an qualifiziertem und ausreichend quantitativ vorhandenem
                Personal, oder haben diese mittlerweile als Auslöser. ZMC
                ermöglicht über das eigene, internationale Netzwerk Zugang zu
                diversen Dienstleistungslösungen.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 2xl:gap-12 bg-white p-4 sm:p-12">
              <div className="lg:w-6/12">
                <div className="aspect-video lg:aspect-[1.44/1] img-wrapper relative">
                  <Image
                    layout="fill"
                    src="/images/image-8.webp"
                    alt="Image 1"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-6/12 space-y-4">
                <div className="space-y-4 lg:space-y-4">
                  <p>
                    Herausfordernde Unternehmenssituation gehen oft einher mit
                    einem Mangel an qualifiziertem und ausreichend quantitativ
                    vorhandenem Personal, oder haben diese mittlerweile als
                    Auslöser. ZMC ermöglicht über das eigene, internationale
                    Netzwerk Zugang zu diversen Dienstleistungslösungen.
                  </p>
                </div>
                <ul className="list-2 space-y-4 my-6 sm:mt-8 sm:mb-11">
                  <li>Finanzbuchhaltung und Controlling</li>
                  <li>
                    Personalmanagement & Personaldatenmanagement, Verwaltung und
                    Lohnabrechnung
                  </li>
                  <li>
                    Experten für indirekte Bereiche (Vertrieb, Finanzen,
                    Buchhaltung, Controlling)
                  </li>
                  <li>
                    Fertigungs-, Montage - & Serviceteams vor allem im Bereich
                    Stahlbau, Blechverarbeitung, Industriemontagen, Elektrik,
                    Photovoltaik uvm.
                  </li>
                  <li>
                    Umsetzung von Projekten (Projektmanagement, Engineering,
                    E-Plan, Arbeitsvorbereitung, Fertigungssteuerung, Logistik &
                    Transport, Montage, Inbetriebnahme, Service).
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-4">
              <p>
                Hier kann ZMC folgende Lösungen im ZMC-Unternehmensverbund
                anbieten:
              </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 2xl:gap-12 bg-white p-4 sm:p-12">
              <div className="lg:w-6/12">
                <ul className="list-2 space-y-4 my-6 sm:mt-8 sm:mb-11">
                  <li>(Internationale) Werkverträge / Gewerke / Projekte</li>
                  <li>Arbeitnehmerüberlassung</li>
                  <li>Umsetzung als Projekt</li>
                  <li>Mitarbeitervermittlung / “Executive Search“</li>
                </ul>
              </div>
              <div className="lg:w-6/12">
                <div className="aspect-video lg:aspect-[1.44/1] img-wrapper relative">
                  <Image
                    layout="fill"
                    src="/images/image-9.webp"
                    alt="Image 1"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Dienstleistungen;
