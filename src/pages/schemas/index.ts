import * as yup from "yup";

export const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("This field is required.")
    .min(19, "Card number is not valid")
    .matches(/^(?=.*\d)[\d ]+$/, "Wrong format, numbers only"),
  expiration: yup
    .string()
    .required("This field is required.")
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Wrong format"),
  cvv: yup
    .string()
    .required("This field is required")
    .min(3, "CVV is not valid")
    .matches(/^\d{3}$/, "Wrong format, numbers only"),
  zipCode: yup
    .string()
    .required("This field is required")
    .min(3, "ZipCode is not valid"),
  cardholderName: yup
    .string()
    .required("This field is required")
    .min(1, "Name is not valid"),
});
