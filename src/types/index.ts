import { ReactNode } from "react";

export enum PaymentStep {
  INFO = "INFO",
  INPUT = "INPUT",
  REVIEW = "REVIEW",
  SUCCESS = "SUCCESS",
}

export type CardInfo = {
  cardNumber: string;
  expiration: string;
  cvv: string;
  cardholderName: string;
  zipCode: string;
};

export type IPaymentContext = {
  step: PaymentStep;
  setStep: (step: PaymentStep) => void;
  price: number;
  setPrice: (price: number) => void;
  cardInfo: CardInfo;
  setCardInfo: (cardInfo: CardInfo) => void;
};

export type IPaymentProviderProps = {
  children: ReactNode;
};
