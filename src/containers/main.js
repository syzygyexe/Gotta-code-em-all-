import React from "react";
import { Main } from "../components";

export function MainPage({ children }) {
  return (
    <Main>
      <Main.Frame>
        <Main.ButtonLink to={"/browse"}>EXPLORE POKEPEDIA</Main.ButtonLink>
      </Main.Frame>
    </Main>
  );
}
