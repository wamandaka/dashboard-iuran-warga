import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { Warga } from "../types/warga";
import { Transaksi } from "../types/transaksi";
import { DataChart } from "../types/dashboard";
import logger from "../utils/logger";

// Atom untuk menyimpan data warga
const wargaAtom = atom<Warga[]>([]);
const transaksiAtom = atom<Transaksi[]>([]);
const dataChartDashboardAtom = atom<DataChart[]>([]);

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

// loadable atom
const loadableWargaAtom = loadable(fetchWargaAtom);
const loadableTransaksiAtom = loadable(fetchTransaksiAtom);
const loadableDataChartDashboardAtom = loadable(fetchDataChartAtom);

export {
  wargaAtom,
  loadableWargaAtom,
  transaksiAtom,
  loadableTransaksiAtom,
  dataChartDashboardAtom,
  loadableDataChartDashboardAtom,
};
