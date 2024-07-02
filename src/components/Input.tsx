import React from "react";
import Label from "./Label";
import infoImg from "../assets/info.svg";
import checkSvg from "../assets/check.svg";

interface Props extends React.ComponentPropsWithRef<"input"> {
  isValid?: boolean;
  label: string;
  error?: string;
}

const Input = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { label, error, className = "", isValid, ...restProps } = props;

    return (
      <div className="flex flex-col gap-2 flex-1">
        <Label className="text-sm text-sub">{label}</Label>
        <div className="relative flex items-center">
          <input
            ref={ref}
            className={`w-full input h-12 border-[1px] border-border rounded-lg p-4 focus-visible:outline-none ${
              error ? "border-error" : "border-border"
            } ${isValid ? "pr-10" : ""}${className}`}
            {...restProps}
          />
          {error ? (
            <div className="absolute right-2">
              <img src={infoImg} alt="error info" />
            </div>
          ) : isValid ? (
            <div className="absolute right-2">
              <img src={checkSvg} alt="check info" />
            </div>
          ) : null}
        </div>
        {error && error?.length > 0 && (
          <p
            className="text-sm text-error font-arial tracking-wide"
            data-test="error-label"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
