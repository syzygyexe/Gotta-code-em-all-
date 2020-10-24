import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: url("../images/misc/main.jpg") center / cover no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1100px;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e50914;
  width: 475px;
  height: 90px;
  color: white;
  border: 0;
  font-size: 40px;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: 100;
  &:hover {
    background: #f40612;
  }
  @media (min-width: 2561px) {
    width: 450px;
    height: 100px;
    font-size: 25px;
`;
