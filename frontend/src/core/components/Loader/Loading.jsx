import React, { useContext } from "react";
import { LoadingContext } from "./context/LoadingContext";
import "./Loader.scss";

export function Loading() {
  const { isLoading } = useContext(LoadingContext);

  return (
    isLoading && (
      <div class="loader">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
      </div>
    )
  );
}
