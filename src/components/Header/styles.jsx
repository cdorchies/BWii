import styled from "styled-components";

const HeaderStyle = styled.div`
  header {
    padding: 10px 15px;
    background-color: #2d2d2d;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    border-bottom: 1px solid #c1c1c1;
    .profile-container {
      display: flex;
      text-align: center;
      align-items: center;
      .profile {
        color: rgba(203, 203, 203, 0.85);
        font-size: 45px;
      }
      .login-links {
        padding-left: 15px;
        a {
          text-decoration: none;
          color: rgba(203, 203, 203, 0.85);
        }
        a:hover {
          color: rgba(255, 255, 255, 0.85);
          transition: 0.5s;
        }
      }
    }
    .notification-container {
      color: #f5f5f5;
      font-size: 45px;
    }
  }
`;

export default HeaderStyle;
