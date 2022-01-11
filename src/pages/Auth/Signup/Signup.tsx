import React,{ FC } from "react";
import { Col } from "react-bootstrap";
import SignupForm from "./SignupForm";
import { registerRequest } from "../redux/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styles from "./style.module.scss";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Signup: FC = () => {
  const captchaRef = React.createRef<HCaptcha>();
  const dispatch = useDispatch();
  const history = useHistory();
  const registerUserSchema = Yup.object().shape({
    username: Yup.string()
      .max(16, "Username should not exceed 16 characters")
      .required("Please enter username")
      .matches(
        /^[A-Za-z0-9_-]+$/,
        "Invalid username. Only A-Z lower/upper characters, numbers and -_ are allowed in the username."
      ),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter email address"),
      
    password: Yup.string()
      .required("Please enter password")
      .matches(
        /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "You have entered a weak Password. Password must be minimum of 8 characters long and contain at least one UPPERCASE character, 1 number and one $pec!al char@cter"
      ),
      captcha: Yup.string().required('Captcha is a required field'),
  });
  const siteKey="d6af562f-e9cd-4ae8-83f5-2954ea2af004"
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      captcha: "",
    },
    validationSchema: registerUserSchema,
    onSubmit: async (values) => {
      await dispatch(
        registerRequest({
          username: values.username,
          email: values.email,
          password: values.password,
          captcha:values.captcha,
          history: history,
          resetForm: formik.resetForm,
        })
      );
    },
  });

  return (
    <div className="d-flex">
      <Col md={8} sm={6} className={styles.imageBackground} />
      <Col md={4} sm={6} className={styles.alignCenter}>
        <SignupForm formik={formik} loader ref={captchaRef}
          siteKey={siteKey}/>
      </Col>
    </div>
  );
};

export default Signup;
