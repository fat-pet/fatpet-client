import { create } from 'zustand';

interface TokenStore {
  token: string;
  setToken: (token: string) => void;
}

interface DupStore {
  dupId: boolean | undefined | 'error';
  dupName: boolean | undefined | 'error';
  setId: (data: boolean | undefined | 'error') => void;
  setName: (data: boolean | undefined | 'error') => void;
}

export const useTokenStore = create<TokenStore>()((set) => ({
  token: '',
  setToken: (tokenData) => set(() => ({ token: tokenData })),
}));

export const useDupStore = create<DupStore>()((set) => ({
  dupId: undefined,
  dupName: undefined,
  setId: (data) => set(() => ({ dupId: data })),
  setName: (data) => set(() => ({ dupName: data })),
}));
