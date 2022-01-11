// import React from "react";
import { Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import ResetPasswordFrom from "./ResetPasswordFrom";
import { resetPassword } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./style.module.scss";

const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const Location = useLocation();
  let params = new URLSearchParams(Location.hash);
  let token = params.get("#access_token");
  // if (token == null) {
  //   history.push("/signin");
  // }

  const forgetSchema = Yup.object().shape({
    password: Yup.string()
      .required("Please enter new password")
      .matches(
        /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "You have entered a weak Password. Password must be minimum of 8 characters long and contain at least one UPPERCASE character, 1 number and one $pec!al char@cter"
      ),
    confirm_password: Yup.string()
      .required("Please enter confirm password")
      .oneOf([Yup.ref("password"), null], "Password does not match"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      token: token,
    },
    validationSchema: forgetSchema,
    onSubmit: (values) => {
      dispatch(
        resetPassword({
          new_password: values.password,
          access_token: values.token,
          history:history,
          resetForm: formik.resetForm
        })
      );
      history.push('/signin');
    },
  });

  return (
    <div className="d-flex">
      <Col lg={8} md={6} sm={6} xs={12}  className={ `d-none d-sm-block  ${styles.imageBackground}`} />
      <Col lg={4} md={6} sm={6} className={`my-5 ${styles.alignCenter}`}>
        <ResetPasswordFrom formik={formik} />
      </Col>
    </div>
  );
};

export default ResetPassword;
