import { create } from 'zustand'

type Store = {
  token: string
  setToken: (token:string) => void
}

const useStore = create<Store>()((set) => ({
  token: '',
  setToken: (token) => set(() => ({token: token})),
}))

export function TokenState(data : string) : void {
  const { setToken } = useStore()
  setToken(data);
}

export function Token() : string {
    const { token } = useStore()
    return(token)
  }