"use client";

import { useEffect } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { modeLightAtom, useLightMode } from "@/jotai/common";

type Props = {
  theme?: string;
};

export default function AsyncState({ theme }: Props) {
  const [isLight] = useLightMode();
  useHydrateAtoms([[modeLightAtom, theme === "light"]]);
  useEffect(() => {
    document.body.classList[isLight ? "remove" : "add"]("dark");
  }, [isLight]);

  return null;
}
