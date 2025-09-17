import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FloatingContact from "../components/floating/FloatingContact";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <FloatingContact />
      <Footer />
    </>
  );
}
