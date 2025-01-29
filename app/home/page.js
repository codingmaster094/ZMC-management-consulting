"use client";
import React from "react";
import Startseite from "../components/Startseite";
import Dienstleistungen from "../components/Dienstleistungen";
import Über_uns from "../components/Über_uns";
import Herunterladen from "../components/Herunterladen";
import Kontakt from "../components/Kontakt";


const page = () => {
  return(
    <>
       <Startseite/>
       <Dienstleistungen/>
       <Über_uns/>
       <Herunterladen/>
       <Kontakt/> 
    </>
  );
};

export default page;
