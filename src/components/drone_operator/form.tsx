import {useRef} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from '@emailjs/browser';

import "./form.css";

const nameRegex = /^[A-Za-z]+$/;
const locationRegex = /^[A-Za-z\d,]+$/;

const schema = yup
  .object({
    fullName: yup
      .string()
      .matches(nameRegex, "Only English letters")
      .required("Required *"),
      email: yup.string().email("must be a valid email").required(),
      phoneNumber: yup
      .number()
      .typeError("Please enter a valid number")
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .positive("Please enter a positive number")
      .integer("Please enter an integer"),
      organization: yup
      .string()
      .matches(nameRegex, "Only English letters")
      .required("Required *"),
      locationCoverage: yup
      .string()
      .matches(locationRegex, "Only English letters")
      .required("Required")
      .max(600),
  })
  .required();

interface IFormInput {
  fullName: string;
  email: string;
  phoneNumber: number;
  organization: string;
  locationCoverage: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const form = useRef();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(JSON.stringify(data))
    // console.log(JSON.stringify(form.current))
    emailjs.sendForm('service_gw0czkj', 'template_7ni5e8y', form.current,'XFrV1RCTxGzAjWYVJ')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  };

  return (
    <div className="lets-contact-container">
      <h3>Enter the details below to upload a new site</h3>
      <form ref={form} className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields">
          <input
            placeholder="Full Name"
            {...register("fullName", { required: true, maxLength: 20 })}
          />
          <p>{errors.fullName?.message}</p>
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
          <input
            placeholder="Organization"
            {...register("organization", { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.organization?.message}</p>

          <input
            placeholder="Location Coverage"
            {...register("locationCoverage", { pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.locationCoverage?.message}</p>
        <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
