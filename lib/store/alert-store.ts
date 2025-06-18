import { create } from "zustand"

interface AlertState {
  isAlertVisible: boolean
  hideAlert: () => void
  showAlert: () => void
}

export const useAlertStore = create<AlertState>((set) => ({
  isAlertVisible: true,
  hideAlert: () => set({ isAlertVisible: false }),
  showAlert: () => set({ isAlertVisible: true }),
}))
