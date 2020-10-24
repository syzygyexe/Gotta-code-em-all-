import React from "react";
import { LockBody, ReleaseBody, Runner } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Runner {...restProps}>
      <LockBody />
    </Runner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
