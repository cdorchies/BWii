import styled from "styled-components";

const SearchBarStyle = styled.div`
  .search-bar-bwii {
    border: 1px solid #9e9e9e;
    border-radius: 24px;
    font-size: 16px;
    display: flex;
    input {
      outline: none;
      width: 700px;
      opacity: 0.5;
      padding: 12px;
      color: #9e9e9e;
      border: none;
      background-color: transparent;
    }
    button {
      padding-right: 20px;
      font-size: 20px;
      color: #9e9e9e;
      border: none;
      background-color: transparent;
    }
  }
`;

export default SearchBarStyle;
