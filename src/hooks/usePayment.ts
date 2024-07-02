import { useContext } from "react";
import { IPaymentContext } from "../types";
import { PaymentContext } from "../context/payment";

export const usePayment = (): IPaymentContext => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};
