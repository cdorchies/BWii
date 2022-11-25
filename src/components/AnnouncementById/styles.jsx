import styled from "styled-components";

const AnnouncementStyle = styled.div`
  main {
    padding-top: 50px;
    background-color: #121212;
    color: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #announcementById {
      h1 {
        padding: 10px 0px 10px 0px;
        font-size: 2em;
      }
      /* FIRST BLOC */
      .bloc-image {
        position: relative;
        .image {
          width: 800px;
          .imgImmo {
            width: 100%;
          }
        }
        .seemore {
          width: 100%;
          display: flex;
          justify-content: space-around;
          top: 80%;
          position: absolute;

          .seeonmap,
          .seephotos {
            background-color: #e2e2e2;
            border: none;
            padding: 10px 25px;
            border-radius: 10px;
            cursor: pointer;
          }
        }
      }

      /* SECOND BLOC */
      .details {
        .carre {
          position: relative;
          top: -1em;
          font-size: 0.5em;
        }
      }

      /* THIRD BLOC */
      .description {
        margin-top: 50px;
        h2 {
          padding: 0px 0px 25px 0px;
        }
        p {
          text-align: justify;
          width: 750px;
        }
      }
    }
    .return {
      margin-top: 25px;
      margin-bottom: 50px;
      a {
        text-decoration: none;
        color: red;
      }
    }
  }
`;

export default AnnouncementStyle;
