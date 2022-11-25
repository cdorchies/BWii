import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import GalleryStyle from "./styles";

export default function GalleryByID() {
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
      })
      .catch(() => {
        setError("Une erreur est survenue...");
      });
  }, [id]);

  if (error) {
    return <p>Une erreur est survenue... réessayez plus tard !</p>;
  }
  return (
    <GalleryStyle>
      {boolean ? (
        <div>
          <h1>Gallerie photos : {tests.announcement.title}</h1>
          <div>{tests.announcement.id}</div>
          <p>
            <Link
              to={`/announcement/${tests.announcement.id}&${tests.announcement.reference}`}
            >
              Retour
            </Link>
          </p>
        </div>
      ) : (
        <p>Chargement des données</p>
      )}
    </GalleryStyle>
  );
}
