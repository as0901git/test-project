import React from "react";

interface Props extends React.ComponentPropsWithRef<"div"> {}

const Typography = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className = "", children, ...restProps } = props;
    return (
      <div className={`tracking-wide  ${className}`} {...restProps} ref={ref}>
        {children}
      </div>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
