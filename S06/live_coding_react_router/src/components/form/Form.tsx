import { useState } from "react";
import "./form.css";

interface IFormData {
  firstName: string | null;
  lastName: string;
  email: string;
  password: string;
}
export default function Form() {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = (
    e: React.SubmitEvent<HTMLFormElement | HTMLInputElement>,
  ) => {
    e.preventDefault();
    console.log("e :>> ", e);
    console.log("e.target :>> ", typeof e.target);
    console.log("e.target :>> ", e.target);
    console.log("e.target :>> ", e.target.firstname.value);
    console.log("e.target :>> ", e.target.lastname);
    setFormData({
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };
  console.log("formData :>> ", formData);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="lastname">Last Name</label>
      <input type="text" id="lastname" name="lastname" />
      <label htmlFor="firstname">First Name</label>
      <input type="text" id="firstname" name="firstname" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" name="confirm-password" />
      <button type="submit">Send</button>
      {/* <input type="button" value="Submit" /> */}
    </form>
  );
}
