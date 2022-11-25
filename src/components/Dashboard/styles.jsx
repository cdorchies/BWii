import styled from "styled-components";

const Dashboard = styled.div`
  #dashboard {
    width: 1400px;
    color: #f5f5f5;
    margin-bottom: 25px;
    margin-left: 15px;
    .titles-dashboard {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;
      h1 {
        font-size: 36px;
        line-height: 42px;
      }
    }

    h2 {
      font-size: 25px;
      line-height: 28px;
      letter-spacing: 0.05em;
    }

    .announcements {
      width: 400px;
      background-color: #1c1c1c;
      color: #f5f5f5;
      margin-top: 50px;
      margin-bottom: 50px;
      a {
        text-decoration: none;
        color: rgba(203, 203, 203, 0.85);
      }
      .photo {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      .details {
        padding: 15px 25px;
        div {
          display: flex;
        }
        .carre {
          position: relative;
          top: -1em;
          font-size: 0.5em;
        }
        .disponibility {
          margin-left: 10px;
          background-color: #4db6ac;
          border-radius: 50%;
          width: 12px;
          height: 12px;
        }
      }
      .seemore {
        background-color: #1c1c1c;
        padding: 15px 25px;
        display: flex;
        justify-content: space-around;
      }
    }
    .btn-dashboard {
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
`;

export default Dashboard;
