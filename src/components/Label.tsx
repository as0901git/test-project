import React from "react";

interface Props extends React.ComponentPropsWithRef<"p"> {}

const Label = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLParagraphElement>) => {
    const { className = "", children, ...restProps } = props;
    return (
      <p
        className={`label font-bold font-arial tracking-wide ${className}`}
        {...restProps}
        ref={ref}
      >
        {children}
      </p>
    );
  }
);

export default Label;
