import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { BsArrowReturnLeft } from "react-icons/bs";
import AnnouncementStyle from "./styles";
import { useParams, Link } from "react-router-dom";

export default function Announcement() {
  const [tests, setTestById] = useState({});
  const [error, setError] = useState(null);
  const [boolean, setBoolean] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setBoolean(false);
    axios
      .get(`http://sergic-api.re7itroom.fr/api/announcement/${id}`)
      .then(({ data }) => {
        setTestById(data);
        setBoolean(true);
        console.log(data);
      })
      .catch(() => {
        setError("Une erreur est survenue...");
      });
  }, [id]);

  if (error) {
    return <p>Une erreur est survenue... réessayez plus tard !</p>;
  }

  return (
    <AnnouncementStyle>
      <main>
        <article id="announcementById">
          {boolean ? (
            <>
              <p>{}</p>
              <section className="bloc-image">
                <div className="image">
                  <img
                    src={
                      tests.extrafield.photo
                        ? "http://sergic-api.re7itroom.fr/images/" +
                          tests.extrafield.photo[0]
                        : "https://via.placeholder.com/400x200"
                    }
                    alt=""
                    className="imgImmo"
                  />
                </div>
                <div className="seemore">
                  <button className="seeonmap">
                    <HiOutlineLocationMarker /> Voir sur la carte
                  </button>
                  {tests.extrafield.photo ? (
                    <button className="seephotos">
                      <Link
                        to={`/gallery/${tests.announcement.id}&${tests.announcement.reference}`}
                      >
                        Voir les {tests.extrafield.photo.length} photos
                      </Link>
                    </button>
                  ) : (
                    <button disabled className="seephotos">
                      Aucune photo disponible
                    </button>
                  )}
                </div>
              </section>

              <section className="details">
                <h1>
                  Appartement à loué {tests.extrafield.nb_pieces} pièces -{" "}
                  {tests.announcement.price} € / mois -{" "}
                  {tests.announcement.squareMeter} m
                  <span className="carre">2</span>
                </h1>
                <p>
                  <HiLocationMarker /> {tests.announcement.city}
                </p>
                <p>Réf. BWii : {tests.announcement.reference}</p>
              </section>

              <section className="description">
                <h2>Description du bien :</h2>
                <p>{tests.extrafield.description}</p>
              </section>
            </>
          ) : (
            <p>Chargement des données...</p>
          )}
          <div className="return">
            <Link to="/">
              <BsArrowReturnLeft /> Retour
            </Link>
          </div>
        </article>
      </main>
    </AnnouncementStyle>
  );
}
