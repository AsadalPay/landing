"use client";

import { useContext } from "react";
import { AppContext } from "./index";

function useAppContext() {
  return useContext(AppContext);
}

export default useAppContext;
