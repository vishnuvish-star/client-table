import * as yup from "yup";

const phone =
  /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;

const schema = yup.object().shape({
  firstName: yup.string().required("Name is mandatory"),
  lastName: yup.string(),
  email: yup.string().email("Enter valid email").required("Email is mandatory"),
  contact: yup
    .string()
    .matches(phone, "Phone number is not valid")
    .required("This is required field"),
  dob: yup.string().required("DOB is mandatory"),
  employer: yup.string().required("Employer is mandatory"),
  joining: yup.string().required(" Joining Date is mandatory"),
  role: yup
    .string()
    .max(15, "Maximum 15 character")
    .required("Role is mandatory"),
  active: yup.string().required("Active is mandatory"),
});
export default schema;
