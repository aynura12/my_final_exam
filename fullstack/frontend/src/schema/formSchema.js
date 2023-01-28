import * as yup from 'yup';

export const formSchema = yup
  .object()
  .shape({
    image: yup.string("pls string").required("dont required"),
    name: yup.string("pls string").required("dont required"),
    comment: yup.string("pls string").required("dont required"),
    price: yup.number("pls number").required("dont required"),
  })
  .required();