import styled from "styled-components";

const EstatesStyle = styled.div`
/* NAVIGATION */
  .navigation-estates {
    margin-left: 15px;
    font-size: 16px;
    line-height: 25px;
    padding: 0px 0px 30px 5px;
    color: #f5f5f5;
    p {
      .chevron {
        font-size: 20px;
        position: relative;
        top: 0.2em;
      }
      span:nth-child(3) {
        font-weight: 700;
      }
      a {
        text-decoration: none;
        color: #9e9e9e;
      }
    }
  }

  /* CREATION DU BIEN - PAGE  */

  #create-estate {
    width: 95%;
    margin-left: 15px;
    color: #f5f5f5;
    h1 {
      font-size: 36px;
      line-height: 42px;
    }


    .criterias {
      input {
        outline: none;
        padding: 6px 12px;
        background-color: transparent;
        color: #606060;
        border: 1px solid rgba(204, 204, 204, 0.25);
        border-radius: 6px;
        height: 25px;
      }

      /* RECHERCHE PAR BIENS */
      .searches-by-estates {
        div {
          .criteria {
            margin-top: 30px;
            margin-bottom: 15px;
          }
          .bloc-input {
            width: 600px;
          }
        }
        div:nth-child(-n + 2) {
          display: flex;
          justify-content: space-between;
          div {
            display: flex;
            flex-direction: column;
            input {
              width: 100%;
            }
          }
        }

        .input-city {
          input {
            width: 100%;
          }
          display: flex;
          flex-direction: column;
        }
      }

      /* RECHERCHE PAR TYPE */
      .searches-by-type {
        margin-top: 30px;
        display: flex;
        div {
          fieldset {
            legend {
              margin-bottom: 10px;
            }
            div {
              margin-bottom: 15px;
              display: flex;
              align-items: center;
              .input-checkbox {
                height: 18px;
                width: 18px;
                margin-right: 10px;
              }
              input[type="checkbox"] {
                background-color: transparent;
              }
            }
          }
          .fieldset-type {
            margin-left: 50px;
          }
        }
      }

      /* BOUTONS CONFIRMATION */
      .confirm-searches {
        display: flex;
        .btn-filter,
        .btn-reset {
          margin: 25px 25px 0px 0px;
          background-color: #4db6ac;
          font-size: 14px;
          letter-spacing: 0.1em;
          padding: 10px 15px;
          border: none;
          border-radius: 18px;
          a {
            color: #1c1c1c;
            text-decoration: none;
          }
        }
      }
    }
    .matches-according-criterias {
      margin-top: 70px;
      .results {
        margin-top: 30px;
        margin-bottom: 50px;
        p {
          margin-bottom: 50px;
        }
        ul {
          li:first-child {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
          }
          li:last-child {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
          }
          li {
            align-items: center;
            display: flex;
            justify-content: space-between;
            img {
              width: 48px;
              height: 48px;
              border-radius: 6px;
            }
            padding: 12px 15px;
            margin-bottom: 2px;
            background-color: #1c1c1c;
            width: 100%;
          }
        }
      }
    }
  }
`;

export default EstatesStyle;
