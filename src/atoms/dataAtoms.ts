import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { Warga } from "../types/warga";
import { Transaksi } from "../types/transaksi";
import { DataChart } from "../types/dashboard";
import logger from "../utils/logger";
import { ListUser } from "../types/listUser";

// Atom untuk menyimpan data warga
const wargaAtom = atom<Warga[]>([]);
const transaksiAtom = atom<Transaksi[]>([]);
const dataChartDashboardAtom = atom<DataChart[]>([]);
const listUsersAtom = atom<ListUser[]>([]);

// Atom untuk memuat data dari API
const fetchWargaAtom = atom(async () => {
  try {
    const resp = await fetch("/dataWarga.json");
    return resp.json();
  } catch (error) {
    logger.error("Error fetching warga data", error);
  }
});
const fetchTransaksiAtom = atom(async () => {
  try {
    const resp = await fetch("/dataTransaksi.json");
    return resp.json();
  } catch (error) {
    logger.error("Error fetching transaksi data", error);
  }
});
const fetchDataChartAtom = atom(async () => {
  try {
    const resp = await fetch("/chartDashboard.json");
    return resp.json();
  } catch (error) {
    logger.error("Error fetching chart data", error);
  }
});
const fetchListUsersAtom = atom(async () => {
  try {
    const resp = await fetch("/dataListUser.json");
    return resp.json();
  } catch (error) {
    logger.error("Error fetching list users data", error);
  }
});

// loadable atom
const loadableWargaAtom = loadable(fetchWargaAtom);
const loadableTransaksiAtom = loadable(fetchTransaksiAtom);
const loadableDataChartDashboardAtom = loadable(fetchDataChartAtom);
const loadableListUsersAtom = loadable(fetchListUsersAtom);

export {
  wargaAtom,
  loadableWargaAtom,
  transaksiAtom,
  loadableTransaksiAtom,
  dataChartDashboardAtom,
  loadableDataChartDashboardAtom,
  listUsersAtom,
  loadableListUsersAtom,
};
