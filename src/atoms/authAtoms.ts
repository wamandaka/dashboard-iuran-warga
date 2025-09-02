import { atom } from "jotai";

// State untuk username & password
export const emailAtom = atom("");
export const passwordAtom = atom("123123");

// State untuk error message
export const errorAtom = atom("");

// State untuk mengontrol tampilan form (Login / Lupa Password)
export const isLupaPasswordAtom = atom(false);

// Ambil role dari localStorage
const user = localStorage.getItem("user");
let role: "admin" | "finance" | "operator" = "operator"; // Default role

if (user) {
  try {
    const userData = JSON.parse(user);
    if (userData && userData.role) {
      role = userData.role; // Ambil role dari userData
    }
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }
}
export const userRoleAtom = atom<"admin" | "finance" | "operator">(role);
