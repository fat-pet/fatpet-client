import { create } from 'zustand';

interface TokenStore {
    token: string;
    setToken: (token: string) => void;
}

interface DupStore {
    dupId: boolean | string;
    dupName: boolean | string;
    setId: (data: boolean | string) => void;
    setName: (data: boolean | string) => void;
}

export const useTokenStore = create<TokenStore>()((set) => ({
    token: '',
    setToken: (tokenData) => set(() => ({ token: tokenData })),
}));

export const useDupStore = create<DupStore>()((set) => ({
    dupId: 'null',
    dupName: 'null',
    setId: (data) => set(() => ({ dupId: data })),
    setName: (data) => set(() => ({ dupName: data })),
}));
