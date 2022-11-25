import Loader from "../Loader";
import NewClientStyle from "./styles";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function NewClient() {
  const [tests, setTest] = useState([]);
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
        setTest(data);
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
  return (
    <NewClientStyle>
      <article id="newClient">
        <h2>NOUVEAUX CLIENTS</h2>

        {loader ? (
          <Loader />
        ) : (
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {tests.slice(0, 20).map((test, index) => {
              return (
                <section className="new-clients-list" key={index}>
                  <Link
                    to={`/announcement/${test.announcement.id}&${test.announcement.reference}`}
                  >
                    <img
                      src={
                        test.extrafield.photo
                          ? "http://sergic-api.re7itroom.fr/images/" +
                            test.extrafield.photo[0]
                          : "https://via.placeholder.com/400x200"
                      }
                      alt=""
                      className="photo"
                    />
                    <div className="details">
                      <div>
                        <p>
                          {test.announcement.title} {test.announcement.zipCode}{" "}
                          {test.announcement.city.toUpperCase()}{" "}
                          {test.announcement.squareMeter} M
                          <span className="carre">2</span>
                        </p>
                        <p className="disponibility"></p>
                      </div>
                      <div>
                        <p>{test.announcement.price}€ / mois</p>
                      </div>
                    </div>
                  </Link>
                </section>
              );
            })}
          </Carousel>
        )}

        <section>
          <button className="btn-active">
            <Link to="/all-announcements">TOUS LES CLIENTS</Link>
          </button>
        </section>
      </article>
    </NewClientStyle>
  );
}
