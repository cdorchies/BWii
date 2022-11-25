import styled from "styled-components";

const ProfilClientStyle = styled.div`
  #profile-form {
    form {
      .agency {
        div {
          margin: 15px;
          display: flex;
          flex-direction: column;
          label {
            margin-bottom: 15px;
          }
          input {
            width: 100%;
          }
        }
      }
      .contact-agency {
        h3 {
          margin: 50px 0px 25px 15px;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.08em;
        }
        .name-contact,
        .contacts {
          display: flex;
          justify-content: space-between;
          div {
            margin: 15px;
            display: flex;
            flex-direction: column;
            width: 600px;
            label {
              margin-bottom: 15px;
            }
            input {
              width: 100%;
            }
          }
        }
      }

      .input-files {
        .input-file-new-client {
          border: none;
        }
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
      .btn-create-client {
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
`;

export default ProfilClientStyle;
