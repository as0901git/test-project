import { createContext, useState } from "react";
import {
  CardInfo,
  IPaymentContext,
  IPaymentProviderProps,
  PaymentStep,
} from "../types";

const PaymentContext = createContext<IPaymentContext | undefined>(undefined);

const PaymentProvider = ({ children }: IPaymentProviderProps) => {
  const [step, setStep] = useState(PaymentStep.INFO);
  const [price, setPrice] = useState(0);
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumber: "",
    expiration: "",
    cvv: "",
    zipCode: "",
    cardholderName: "",
  });

  return (
    <PaymentContext.Provider
      value={{
        step,
        setStep,
        price,
        setPrice,
        cardInfo,
        setCardInfo,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProvider };
