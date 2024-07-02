import PaymentWrapper from "./components/PaymentWrapper";
import PaymentInfo from "./components/PaymentInfo";
import PaymentForm from "./components/PaymentForm";
import PaymentReview from "./components/PaymentReview";
import PaymentSuccess from "./components/PaymentSuccess";

import { usePayment } from "../hooks/usePayment";
import { PaymentStep } from "../types";

const PaymentPage = () => {
  const { step } = usePayment();
  return (
    <>
      {step === PaymentStep.INFO ? (
        <PaymentInfo />
      ) : step === PaymentStep.SUCCESS ? (
        <PaymentSuccess />
      ) : (
        <PaymentWrapper>
          <PaymentForm />
          <PaymentReview />
        </PaymentWrapper>
      )}
    </>
  );
};

export default PaymentPage;
