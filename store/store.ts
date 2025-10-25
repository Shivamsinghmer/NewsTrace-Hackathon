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
  rank?: number;
  fullName?: string;
  designation?: string;
  primaryBeat?: string;
  secondaryBeat?: string;
  twitterHandle?: string;
  followerCount?: string;
  keyCredentialsSummary?: string;
  notablePreviousOrganizations?: string;
  awards?: string;
  geographicCoverage?: string;
  contactStatus?: string;
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
