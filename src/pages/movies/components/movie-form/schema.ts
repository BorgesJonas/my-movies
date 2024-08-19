import * as yup from "yup";

export const schema = yup.object({
  title: yup
    .string()
    .required("Field required")
    .max(100, "Maximum 100 characters"),
  director: yup
    .string()
    .required("Field required")
    .max(50, "Maximum 50 characters"),
  genre: yup.string().required("Field required"),
  releaseDate: yup.string().required("Field required"),
  description: yup.string().required("Field required"),
  rating: yup
    .number()
    .transform((value) => (value === "" ? undefined : Number(value)))
    .typeError("The value must be numeric")
    .required("Field required")
    .min(0, "The value must be greater or equal to 0")
    .max(10, "The value must be less or equal to 10"),
});
