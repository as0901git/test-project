import React from "react";

interface Props extends React.ComponentPropsWithRef<"button"> {
  loading?: boolean;
}

const Button = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { className = "", children, loading, onClick, ...restProps } = props;

    const onButtonClick: typeof onClick = (...args) => {
      // Don't trigger click if loading or disabled
      if (loading || props.disabled) {
        return;
      }
      onClick?.(...args);
    };

    return (
      <button
        ref={ref}
        className={`bg-btn h-12 text-base text-white rounded-xl font-arial font-bold tracking-wide ${className}`}
        onClick={onButtonClick}
        {...restProps}
      >
        {loading ? <>Loading....</> : <>{children}</>}
      </button>
    );
  }
);

export default Button;
