import Loader from "../Loader";
import { Link } from "react-router-dom";
import AllAnnouncementsByPageStyle from "./styles";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AnnouncementsByPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    axios
      .get("http://sergic-api.re7itroom.fr/api/announcements/page/1")
      .then(({ data }) => {
        setAnnouncements(data);
      })
      .catch(() => {
        setError("Une erreur est survenue...");
      });
  }, []);

  if (error) {
    return (
      <div>
        <p>Une erreur est survenue... réessayez plus tard !</p>
      </div>
    );
  }
  return loader ? (
    <Loader />
  ) : (
    <AllAnnouncementsByPageStyle>
      <article id="allAnnouncements">
        {announcements.map((announcement, index) => {
          return (
            <section className="announcements" key={index}>
              <Link
                to={`/announcement/${announcement.announcement.id}&${announcement.announcement.reference}`}
              >
                <img
                  src={
                    announcement.extrafield.photo &&
                    typeof announcement.extrafield.photo !== "string"
                      ? "http://sergic-api.re7itroom.fr/images/" +
                        announcement.extrafield.photo[0]
                      : "https://via.placeholder.com/400x200"
                  }
                  alt=""
                  className="photo"
                />
                <div className="details">
                  <div>
                    <p>
                      {announcement.announcement.title}{" "}
                      {announcement.announcement.zipCode}{" "}
                      {announcement.announcement.city.toUpperCase()}{" "}
                      {announcement.announcement.squareMeter} M
                      <span className="carre">2</span>
                    </p>
                    <p className="disponibility"></p>
                  </div>
                  <div>
                    <p>{announcement.announcement.price}€ / mois</p>
                  </div>
                </div>
              </Link>
            </section>
          );
        })}
      </article>
    </AllAnnouncementsByPageStyle>
  );
}
