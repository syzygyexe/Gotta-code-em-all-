import React, { useState, useEffect } from "react";
import { Loading } from "../components";

export function BrowseContainer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {/* Run Loading */}
      {loading ? (
        <Loading text="Loading Your Pokemon" />
      ) : (
        <h1>NEW PAGE NEW PAGE NEW PAGE</h1>
      )}
    </>
  );
}
