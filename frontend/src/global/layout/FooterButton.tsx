import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterButton: React.FC = () => {
  return (
    <footer>
      <FooterButtonWrapper>
        <div>
          <Link to="/user_list">유저</Link>
        </div>
        <div>
          <Link to="/room_list">채팅방</Link>
        </div>
        <div>
          <Link to="/chat">채팅</Link>
        </div>
      </FooterButtonWrapper>
    </footer>
  );
};

const FooterButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  border: 1px solid red;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
