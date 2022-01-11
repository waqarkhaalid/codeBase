import React, { FC } from "react";
import { Col } from "react-bootstrap";
import { loginRequest } from "../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./style.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import SignFrom from "./SignFrom";
import { useHistory } from "react-router";
import { setLoader } from "../redux/actions";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const SignIn: FC = () => {
  const captchaRef = React.createRef<HCaptcha>();
  const dispatch = useDispatch();
  const history = useHistory();
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
    captcha: Yup.string().required("Captcha is a required field"),
  });
  const siteKey = "d6af562f-e9cd-4ae8-83f5-2954ea2af004";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      captcha: "",
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,
    onSubmit: async (values) => {
      captchaRef.current && captchaRef.current.resetCaptcha();
      dispatch(setLoader(true));
      await dispatch(
        loginRequest({
          email: values.email,
          password: values.password,
          captcha: values.captcha,
          history: history,
        })
      );
    },
  });
  return (
    <div className="d-flex">
      <Col md={8} sm={6} className={styles.imageBackground} />
      <Col md={4} sm={6} className={styles.alignCenter}>
        <SignFrom formik={formik} loader ref={captchaRef} siteKey={siteKey} />
      </Col>
    </div>
  );
};

export default SignIn;
