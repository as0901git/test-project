import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Typography from "../../components/Typography";
import { usePayment } from "../../hooks/usePayment";
import { CardInfo, PaymentStep } from "../../types";
import { cardNumberFormatter, expirationDateFormatter } from "../../utils";
import { schema } from "../schemas";

const PaymentForm = () => {
  const { step, setStep, setCardInfo } = usePayment();

  const {
    watch,
    register,
    formState: { errors, touchedFields },
    handleSubmit,
    setValue,
  } = useForm<CardInfo>({
    resolver: yupResolver(schema),
    shouldUseNativeValidation: true,
    defaultValues: {
      cardNumber: "",
      expiration: "",
      cvv: "",
      zipCode: "",
      cardholderName: "",
    },
  });

  const cardNumber = watch("cardNumber");
  const expirationDate = watch("expiration");

  const onSubmit = (data: CardInfo) => {
    setCardInfo(data);
    setStep(PaymentStep.REVIEW);
  };

  return (
    <div className="px-12 border-b-[1px] border-b-gray">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center py-5">
          <div
            className={`w-6 h-6 rounded-[50%] flex justify-center items-center font-bold text-base ${
              step === PaymentStep.INPUT
                ? "bg-btn text-white"
                : "bg-gray text-sub opacity-50"
            }`}
          >
            1
          </div>
          <Typography
            data-test="payment-information"
            className={`text-xl font-bold font-arial ${
              step === PaymentStep.INPUT ? "text-main" : "text-sub opacity-50"
            }`}
          >
            Payment Information
          </Typography>
        </div>
        {step === PaymentStep.REVIEW && (
          <button
            className="text-btn text-base tracking-wide font-bold font-arial"
            onClick={() => setStep(PaymentStep.INPUT)}
          >
            Edit
          </button>
        )}
      </div>

      {step === PaymentStep.INPUT && (
        <form
          className="flex flex-col gap-6 pb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <Input
              label="Card number"
              placeholder="e.g. 1234 5678 9123 0000"
              error={errors.cardNumber?.message}
              autoComplete="cardNumber"
              maxLength={19}
              inputMode="numeric"
              isValid={touchedFields?.cardNumber && !errors.cardNumber}
              {...register("cardNumber", {
                onChange: async (e) => {
                  const parsed = cardNumberFormatter(
                    cardNumber,
                    e.target.value
                  );
                  await setValue("cardNumber", parsed);
                },
              })}
            />
            <div className="flex gap-4 items-baseline">
              <Input
                label="Expires (MM/YY)"
                inputMode="numeric"
                error={errors.expiration?.message}
                isValid={touchedFields?.expiration && !errors.expiration}
                {...register("expiration", {
                  onChange: async (e) => {
                    const parsed = expirationDateFormatter(
                      expirationDate,
                      e.target.value
                    );
                    await setValue("expiration", parsed);
                  },
                })}
              />
              <Input
                label="Security code (CVV)"
                inputMode="numeric"
                maxLength={3}
                error={errors.cvv?.message}
                isValid={touchedFields?.cvv && !errors.cvv}
                {...register("cvv")}
              />
            </div>
            <Input
              label="Name on card"
              error={errors.cardholderName?.message}
              isValid={touchedFields?.cardholderName && !errors.cardholderName}
              {...register("cardholderName")}
            />
            <Input
              label="ZIP code"
              error={errors.zipCode?.message}
              isValid={touchedFields?.zipCode && !errors.zipCode}
              {...register("zipCode")}
            />
          </div>
          <Button data-test="continue-btn">Continue</Button>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
