import { create } from 'zustand'

export const useNavStore = create((set) => ({
  current: 1,
}))
