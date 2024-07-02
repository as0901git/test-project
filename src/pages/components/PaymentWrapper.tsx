import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const PaymentWrapper = ({ children }: Props) => {
  return (
    <div className="flex md:py-8 justify-center">
      <div className="w-full md:w-[576px] py-4 bg-white md:rounded-2xl">{children}</div>
    </div>
  );
};

export default PaymentWrapper;
