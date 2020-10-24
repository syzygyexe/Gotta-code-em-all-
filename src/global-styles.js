import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #3ab473;
    background: -webkit-linear-gradient(to right, #232423, #3ab473, #232423);
    background: linear-gradient(to right, #232423, #3ab473, #232423);
    color: #333333;
    font-size: 16px;
    // font-family: "Pokemon Hollow";
    font-family: "Pokemon";
    overflow-X: hidden;
}`;
