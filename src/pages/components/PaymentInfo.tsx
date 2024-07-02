import Button from "../../components/Button";
import Label from "../../components/Label";
import Typography from "../../components/Typography";
import { usePayment } from "../../hooks/usePayment";
import { PaymentStep } from "../../types";
import { getUsdCurrency } from "../../utils";

const defaultPrice = 600;

const PaymentInfo = () => {
  const { setStep, setPrice } = usePayment();
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <div className="pt-24 pb-11 px-4 w-full flex flex-col gap-4 md:pb-12 md:px-0 md:w-[376px]">
        <Typography
          className="text-[28px] text-primary leading-9 font-bold text-center font-georgia"
          data-test="dashboard-name"
        >
          Hi, Taylor
        </Typography>
        <Typography className="text-main text-center text-base">
          You have 6 medical bills ready from ABC Health System. You can pay
          your bills here or verify your identity to view full bill details.
        </Typography>
      </div>
      <div className="w-full bg-white rounded-t-[32px] flex-1 flex flex-col items-center p-8">
        <div className="w-full md:w-[376px] flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Label className="text-base text-sub">Total due</Label>
            <Typography className="text-[28px] text-primary leading-9 font-bold font-georgia">
              {getUsdCurrency(defaultPrice)}
            </Typography>
          </div>
          <Button
            data-test="pay-total-btn"
            onClick={() => {
              setPrice(defaultPrice);
              setStep(PaymentStep.INPUT);
            }}
          >
            Pay total
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
