import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Form_style.css";

const nameRegex = /^[A-Za-z]+$/;
const siteLocationRegex = /^[A-Za-z\d,]+$/;

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(nameRegex, "Only English letters")
      .required("Required *"),
    company: yup
      .string()
      .matches(nameRegex, "Only English letters")
      .required("Required *"),
    // siteLocation: yup
    //   .string()
    //   .matches(siteLocationRegex, "Only English letters")
    //   .required("Required")
    //   .max(600),
    // siteSize: yup
    //   .number()
    //   .typeError("Please enter a valid number")
    //   .transform((value, originalValue) => {
    //     // Convert empty string to undefined or null
    //     return originalValue === "" ? undefined : value;
    //   })
    //   .positive("Please enter a positive number")
    //   .integer("Please enter an integer")
    //   .min(50, "Number must be in the range of 50-1000")
    //   .max(1000, "Number must be in the range of 50-1000")
    //   .required("Please provide a value"),
    email: yup.string().email("must be a valid email").required(),
    phoneNumber: yup
      .number()
      .typeError("Please enter a valid number")
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .positive("Please enter a positive number")
      .integer("Please enter an integer"),
  })
  .required();

interface IFormInput {
  fullName: string;
  company: string;
  siteLocation: string;
  // siteSize: number;
  email: string;
  phoneNumber: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="lets-contact-container">
      <h3>Enter the details below to upload a new site</h3>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields">
          <input
            placeholder="Full Name"
            {...register("fullName", { required: true, maxLength: 20 })}
          />
          <p>{errors.fullName?.message}</p>
          <input
            placeholder="Company"
            {...register("company", { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.company?.message}</p>

          {/* <input
            placeholder="Site Location"
            {...register("siteLocation", { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.siteLocation?.message}</p> */}

          {/* <input
            placeholder="Site Size (kWp)"
            type="number"
            {...register("siteSize", { min: 50, max: 1000 })}
          />
          <p>{errors.siteSize?.message}</p> */}

          <input
            placeholder="Email Address"
            {...register("email", { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.email?.message}</p>

          <input
            placeholder="Phone Number"
            {...register("phoneNumber", { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
