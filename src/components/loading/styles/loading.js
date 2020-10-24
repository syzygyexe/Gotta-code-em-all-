import styled, { createGlobalStyle } from 'styled-components';

export const LockBody = createGlobalStyle`
  body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Runner = styled.div`
  z-index: 999;
  background: url("images/misc/final.png");
  background-color: orange;
  width: 58px;
  height: 32px;
  animation: walk 1s steps(4) infinite,
                    forward 5s linear infinite;
  @keyframes walk {
  0% {
    background-position: 0px;
  }
  100% {
    background-position: 302px;
    }
  }

  @keyframes forward {
  0% {
    transform: translateX(-200px);
    }
  100% {
    transform: translateX(480px);
    }
  }
`