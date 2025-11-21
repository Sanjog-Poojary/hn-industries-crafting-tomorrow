import * as React from "react"

type ModalContextValue = {
  isEnquiryOpen: boolean
  setEnquiryOpen: (open: boolean) => void
}

export const ModalContext = React.createContext<ModalContextValue | null>(null)

export function useModal() {
  const ctx = React.useContext(ModalContext)
  if (!ctx) throw new Error("useModal must be used within ModalProvider")
  return ctx
}

export default useModal
