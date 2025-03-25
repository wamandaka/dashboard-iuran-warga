import { atom } from "jotai";

// State untuk username & password
export const emailAtom = atom("");
export const passwordAtom = atom("");

// State untuk error message
export const errorAtom = atom("");

// State untuk mengontrol tampilan form (Login / Lupa Password)
export const isLupaPasswordAtom = atom(false);
