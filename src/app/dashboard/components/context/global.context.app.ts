import { create } from 'zustand'

interface ToastState {
  showToast: boolean
  toastMessage: string
  bgToast: string
  setToast: (message: string, bg?: string) => void
  hideToast: () => void
}

export const useToastStore = create<ToastState>((set) => ({
  showToast: false,
  toastMessage: '',
  bgToast: 'toast-success',
  setToast: (message, bg = 'toast-success') =>
    set({ showToast: true, toastMessage: message, bgToast: bg }),
  hideToast: () => set({ showToast: false }),
}))
