import Typography from "../../components/Typography";
import Label from "../../components/Label";
import visaImg from "../../assets/visa.svg";
import { usePayment } from "../../hooks/usePayment";
import { PaymentStep } from "../../types";
import Button from "../../components/Button";
import { getUsdCurrency } from "../../utils";

const PaymentReview = () => {
  const { step, setStep, price, cardInfo } = usePayment();
  return (
    <div className="px-12">
      <div className="flex gap-4 items-center py-5">
        <div
          className={`w-6 h-6 rounded-[50%] flex justify-center items-center font-bold text-base ${
            step === PaymentStep.INPUT
              ? "bg-gray text-sub opacity-50"
              : "bg-btn text-white"
          }`}
        >
          2
        </div>
        <Typography
          className={`text-xl font-bold font-arial ${
            step === PaymentStep.INPUT ? "text-sub opacity-50" : "text-main"
          }`}
        >
          Review and pay
        </Typography>
      </div>
      {step === PaymentStep.REVIEW && (
        <div className="flex flex-col">
          <Typography className="text-xl font-arial" data-test="payment-overview">
            You&apos;re about to make a payment of{" "}
            <span className="font-bold">{getUsdCurrency(price)}</span>
          </Typography>
          <div className="mt-[13px] flex flex-col gap-1 py-4">
            <Label className="text-sm text-sub">Payment method</Label>
            <div className="flex gap-3 items-center">
              <img src={visaImg} alt="visa svg" />
              <Typography className="text-sm font-arial">
                Card ending in ••••{cardInfo.cardNumber.slice(-5)}
              </Typography>
            </div>
          </div>
          <Button className="mt-6" onClick={() => setStep(PaymentStep.SUCCESS)}>
            Pay {getUsdCurrency(price)}
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaymentReview;
