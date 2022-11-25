import React from "react";
import LoaderStyle from "./styles";

export default function Loader() {
  return (
    <LoaderStyle>
      <section id="loader">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Chargement des données en cours...</p>
      </section>
    </LoaderStyle>
  );
}
