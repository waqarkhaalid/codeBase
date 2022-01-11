import { Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import ForgetPasswordForm from "./ForgetPasswordForm";
import { forgotPassword } from "../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./style.module.scss";

const ForgetPassword = () => {
  const dispatch = useDispatch();

  const forgetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Please enter email address"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetSchema,
    onSubmit: (values) => {
      dispatch(
        forgotPassword({
          email: values.email,
          resetForm: formik.resetForm,
        })
      );
    },
  });

  return (
    <div className="d-flex">
      <Col md={8} sm={6} className={styles.imageBackground}></Col>
      <Col md={4} sm={6} className={`my-5 ${styles.alignCenter}`}>
        <ForgetPasswordForm formik={formik} />
      </Col>
    </div>
  );
};

export default ForgetPassword;
