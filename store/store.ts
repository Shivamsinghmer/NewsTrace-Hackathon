import { create } from "zustand";

interface OutletQuery {
  query: string;
  setQuery: (q: string) => void;
  getQuery: () => string;
}

export const useQueryStore = create<OutletQuery>((set, get) => ({
  query: "",
  setQuery: (q: string) => set({ query: q }),
  getQuery: () => get().query,
}));

interface Journalist {
  "Full Name"?: string;
  Designation?: string;
  "Primary Beat"?: string;
  "Secondary Beat"?: string;
  "Twitter Handle"?: string;
  "Follower Count"?: string;
  "Geographic Coverage"?: string;
  "Contact Status"?: string;
  "Key Credentials Summary"?: string;
  "Notable Previous Organizations"?: string;
  Awards?: string;
}

interface DataState {
  data: Journalist[];
  setData: (newData: Journalist[]) => void;
  getData: () => Journalist[];
}

export const useDataStore = create<DataState>((set, get) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  getData: () => get().data,
}));
