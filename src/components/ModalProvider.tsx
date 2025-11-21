import * as React from "react";
import { ModalContext } from "@/hooks/use-modal";

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isEnquiryOpen, setEnquiryOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({ isEnquiryOpen, setEnquiryOpen }),
    [isEnquiryOpen]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
