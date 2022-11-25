import styled from "styled-components";

const MatchesClientStyle = styled.div`
  #matches {
    h2 {
      margin: 10px 0px 25px 15px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.08em;
    }
    .criterias {
      .criteria {
        margin-bottom: 15px;
      }
      input {
        outline: none;
        padding: 6px 12px;
        background-color: transparent;
        color: #606060;
        border: 1px solid rgba(204, 204, 204, 0.25);
        border-radius: 6px;
        height: 25px;
      }
      .searches-by-estates {
        div {
          margin: 15px;
          .inputs {
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
          label,
          input {
            margin-left: 15px;
          }
          display: flex;
          flex-direction: column;
        }
      }
      .searches-by-type {
        margin: 30px 0px 0px 30px;
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
      .confirm-searches {
        display: flex;
        .btn-filter,
        .btn-reset {
          margin: 25px 0px 0px 15px;
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
        margin: 15px;
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

export default MatchesClientStyle;
