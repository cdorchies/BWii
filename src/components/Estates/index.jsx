import React from "react";
import EstatesStyle from "./styles";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { BsFillEyeFill } from "react-icons/bs";

export default function Estates() {
  return (
    <EstatesStyle>
      <nav className="navigation-estates">
        <p>
          <span>
            <Link to="/">Accueil</Link>
          </span>{" "}
          <span className="chevron">
            <HiChevronRight />
          </span>{" "}
          <span>Biens</span>
        </p>
      </nav>

      <article id="create-estate">
        <h1>BIENS</h1>

        <section className="criterias">
          <div className="searches-by-estates">
            <div>
              <div className="bloc-input">
                <label className="criteria">Prix minimum</label>
                <input type="text" />
              </div>
              <div className="bloc-input">
                <label className="criteria">Prix maximum</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <div className="bloc-input">
                <label className="criteria">Surface minimum</label>
                <input type="text" />
              </div>
              <div className="bloc-input">
                <label className="criteria">Surface maximum</label>
                <input type="text" />
              </div>
            </div>

            <div className="input-city">
              <label className="criteria">Communes</label>
              <input type="text" />
            </div>
          </div>

          <div className="searches-by-type">
            <div>
              <fieldset className="fieldset-estate">
                <legend>Type de bien</legend>
                <div>
                  <input
                    type="checkbox"
                    id=""
                    name=""
                    className="input-checkbox"
                  />
                  <label>Maison</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id=""
                    name=""
                    className="input-checkbox"
                  />
                  <label>Appartement</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id=""
                    name=""
                    className="input-checkbox"
                  />
                  <label>Local professionnel</label>
                </div>
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset-type">
                <legend>Location - Vente</legend>
                <div>
                  <input
                    type="checkbox"
                    id=""
                    name=""
                    className="input-checkbox"
                  />
                  <label>Location</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id=""
                    name=""
                    className="input-checkbox"
                  />
                  <label>Vente</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="confirm-searches">
            <button className="btn-filter">
              <Link>FILTRER</Link>
            </button>
            <button className="btn-reset">
              <Link>RÉINITIALISER LES FILTRES</Link>
            </button>
          </div>
        </section>

        <section className="matches-according-criterias">
          <div className="results">
            <p>72 biens correspondent à votre recherche</p>
            <ul>
              <li>
                <img src="https://via.placeholder.com/48" alt="" />
                <span>T2 59290 Wasquehal 42 m²</span>
                <span>Apartement</span>
                <span>Location</span>
                <span>Wasquehal</span>
                <span>42m²</span>
                <span>555€/mois</span>
                <span>
                  <BsFillEyeFill />
                </span>
              </li>
              <li>
                {" "}
                <img src="https://via.placeholder.com/48" alt="" />
                <span>T2 59290 Wasquehal 42 m²</span>
                <span>Apartement</span>
                <span>Location</span>
                <span>Wasquehal</span>
                <span>42m²</span>
                <span>555€/mois</span>
                <span>
                  <BsFillEyeFill />
                </span>
              </li>
              <li>
                {" "}
                <img src="https://via.placeholder.com/48" alt="" />
                <span>T2 59290 Wasquehal 42 m²</span>
                <span>Apartement</span>
                <span>Location</span>
                <span>Wasquehal</span>
                <span>42m²</span>
                <span>555€/mois</span>
                <span>
                  <BsFillEyeFill />
                </span>
              </li>
              <li>
                {" "}
                <img src="https://via.placeholder.com/48" alt="" />
                <span>T2 59290 Wasquehal 42 m²</span>
                <span>Apartement</span>
                <span>Location</span>
                <span>Wasquehal</span>
                <span>42m²</span>
                <span>555€/mois</span>
                <span>
                  <BsFillEyeFill />
                </span>
              </li>
              <li>
                {" "}
                <img src="https://via.placeholder.com/48" alt="" />
                <span>T2 59290 Wasquehal 42 m²</span>
                <span>Apartement</span>
                <span>Location</span>
                <span>Wasquehal</span>
                <span>42m²</span>
                <span>555€/mois</span>
                <span>
                  <BsFillEyeFill />
                </span>
              </li>
              <li>
                {" "}
                <img src="https://via.placeholder.com/48" alt="" />
                <span>T2 59290 Wasquehal 42 m²</span>
                <span>Apartement</span>
                <span>Location</span>
                <span>Wasquehal</span>
                <span>42m²</span>
                <span>555€/mois</span>
                <span>
                  <BsFillEyeFill />
                </span>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </EstatesStyle>
  );
}
