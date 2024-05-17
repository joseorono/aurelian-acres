
import { create } from 'zustand'

import { unstable_batchedUpdates } from 'react-dom' 

type Store = {
  count: number
  inc: () => void
}

export const increaseFromOutsideReact = () => {
    unstable_batchedUpdates(() => {
        useStore.getState().inc()
    })
}


export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))


