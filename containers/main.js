import React from "react";
import { Main } from "../components";
// import * as ROUTES from "../constants/routes";

export function MainPage({ children }) {
  return (
    <Main>
      <Main.Frame>
        <Main.ButtonLink to={"/browse"}>
          Explore Pokemon Encyclopedia
        </Main.ButtonLink>
      </Main.Frame>
    </Main>
  );
}
