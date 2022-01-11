import React, { FC } from "react";
import Button from "../../../components/Button/Button";
import Heading from "../../../components/Heading/Heading";
import Text from "../../../components/Text/Text";
import { Link } from "react-router-dom";
import { strings } from "../../../constants/AppConstants";
import { BsPersonFill, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Form, FormikProvider } from "formik";
import styles from "./style.module.scss";
import InputGroup from "../../../components/InputGroup";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
interface FuncProp {
  formik?: any;
  loader?: any;
  ref?: any;
  siteKey?: any;
}

const SignFrom: FC<FuncProp> = ({ formik, loader, siteKey, ref }) => {
  const loading = useSelector((state: any) => state.Auth.pending);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleVerification = (token: any) => {
    formik.values.captcha = token;
    formik.errors.captcha = "";
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <>
      <Heading headingPink className="my-5 font-weight-bold">
        {strings.WELCOME_BACK_TEXT}
      </Heading>

      <Text className="my-5" smallText>
        <Link to="/home" className={styles.myQuteText}>
          {strings.QUTE_PAGE}
        </Link>{" "}
        {strings.QUTE_PAGE_TEXT}
      </Text>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <InputGroup
            type="text"
            className="form-control"
            name="email"
            value={formik.values && formik.values.email}
            onChange={formik.handleChange}
            placeholder={strings.EMAIL}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helpertext={formik.errors.email}
            iconImg={<BsPersonFill />}
          />
          <InputGroup
            type={values.showPassword ? "text" : "password"}
            placeholder={strings.PASSWORD}
            name="password"
            value={formik.values && formik.values.password}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.password && formik.errors.password)}
            helpertext={formik.errors.password}
            iconImg={
              values.showPassword ? (
                <BsEyeFill onClick={handleClickShowPassword} />
              ) : (
                <BsEyeSlashFill onClick={handleClickShowPassword} />
              )
            }
          />
          <div className="d-flex mb-2">
            <Text extraSmallTextBlack className="ml-auto">
              <Link
                to="/forgot_password"
                className={`text-dark font-weight-bold ${styles.textDecoration}`}
              >
                {" "}
                {strings.FORGET_PASSWORD}
              </Link>
            </Text>
          </div>
          {loading ? (
            <>
              {formik.errors.captcha && formik.touched.captcha && (
                <p className={styles.captchaErrors}>{formik.errors.captcha}</p>
              )}
              <Button
                className={` my-4 btn-md btn-block font-weight-bold ${styles.signInButton}`}
                handleClick={formik.handleSubmit}
                type="submit"
                disabled
              >
                <Spinner animation="border" className={styles.loadingSpinner} />
              </Button>
            </>
          ) : (
            <>
              <HCaptcha
                ref={ref}
                sitekey={siteKey}
                onVerify={(token: any) => handleVerification(token)}
                onExpire={() =>
                  toast.error("Verification expire please verify again")
                }
              />
              <Button
                className={` my-4 btn-md btn-block font-weight-bold ${styles.signInButton}`}
                handleClick={formik.handleSubmit}
                type="submit"
              >
                {strings.SIGNIN}
              </Button>
            </>
          )}
        </Form>
      </FormikProvider>
      <Text className="mb-2" smallText>
        <Link
          to="/home"
          className="text-dark font-weight-bold text-decoration-none"
        >
          {strings.WELCOME_EXPLORE} {strings.SIGN_UP_SMALL}{" "}
          {strings.WELCOME_LATER}
        </Link>
      </Text>
      <Text smallText>
        {strings.NOT_HAVE_ACCOUNT}
        <Link
          to="/signup"
          className="ml-auto text-dark font-weight-bold text-decoration-none"
        >
          {" "}
          {strings.SIGNUP}
        </Link>
      </Text>
    </>
  );
};

export default SignFrom;
