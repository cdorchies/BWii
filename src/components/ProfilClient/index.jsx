import React from "react";
import { Link } from "react-router-dom";
import ProfilClientStyle from "./styles";

export default function ProfilClient() {
  return (
    <ProfilClientStyle>
      <article id="profile-form">
        <form action="">
          <section className="agency">
            <div>
              <label>Réseau</label>
              <input type="text" />
            </div>
            <div>
              <label>Agence</label>
              <input type="text" />
            </div>
            <div className="input-files">
              <label>Logo </label>
              <input type="file" className="input-file-new-client" />
            </div>
          </section>

          <section className="contact-agency">
            <h3>CONTACT</h3>
            <div className="name-contact">
              <div className="contact">
                <label>Prénom</label>
                <input type="text" />
              </div>
              <div className="contact">
                <label>Nom</label>
                <input type="text" />
              </div>
            </div>
            <div className="contacts">
              <div className="contact">
                <label>Téléphone</label>
                <input type="text" />
              </div>
              <div className="contact">
                <label>Email</label>
                <input type="mail" />
              </div>
            </div>
          </section>
          <button className="btn-create-client">
            <Link>ENREGISTRER ET CONTINUER</Link>
          </button>
        </form>
      </article>
    </ProfilClientStyle>
  );
}
