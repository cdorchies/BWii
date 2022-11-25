import styled from "styled-components";

const CreateClientStyle = styled.div`
  .navigation-new-client {
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
  
  #create-new-client {
    margin-left: 15px;
    h1 {
      font-size: 36px;
      line-height: 42px;
    }
    color: #f5f5f5;
    .tab {
      padding: 50px 0px 50px 0px;
      width: 95%;

      .tab-headers {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #f5f5f5;
      }

      .tab-header {
        color: #9e9e9e;
        position: relative;
        padding: 0px 20px;
        height: 60px;
        line-height: 50px;
        z-index: 2;
        font-size: 24px;
        letter-spacing: 0.05em;
        cursor: pointer;
      }

      .tab-header:before {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 20px;
        width: 25px;
        height: 4px;
        border-radius: 10px;
      }

      .tab-header.active {
        color: #f5f5f5;
        border-bottom: 2px solid #f5f5f5;
      }

      .tab-body {
        padding: 30px 20px;
      }

      .tab-body > h2 {
        margin-bottom: 15px;
      }
    }
  }
`;

export default CreateClientStyle;
