import React, { FC } from "react";
import Heading from "../../../components/Heading/Heading";
import styles from "./style.module.scss";
import Text from "../../../components/Text/Text";
import { Link } from "react-router-dom";
import InputGroup from "../../../components/InputGroup";
import { strings } from "../../../constants/AppConstants";
import { Form, FormikProvider } from "formik";
import { Spinner } from "react-bootstrap";
import Button from "../../../components/Button";
import { useSelector } from "react-redux";
import {
  BsPersonFill,
  BsFillEnvelopeFill,
  BsEyeFill,
  BsEyeSlashFill,
} from "react-icons/bs";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface FuncProp {
  formik?: any;
  loader?: any;
  ref?: any;
  siteKey?: any;
}
const SignupCard: FC<FuncProp> = ({ formik, siteKey, ref }) => {
  const loading = useSelector((state: any) => state.Auth.loader);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <>
      <Heading headingPink className="my-5 font-weight-bold">
        {strings.SIGNUP_NEW_ACCOUNT}
      </Heading>
      <Text className="mx-auto my-5" smallText>
        <Link to="/home" className={styles.myQuteText}>
          {strings.QUTE_PAGE}
        </Link>{" "}
        {strings.QUTE_PAGE_TEXT}
      </Text>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <InputGroup
            type="text"
            placeholder={strings.USER_NAME}
            className={styles.inputPadding}
            name="username"
            value={formik.values && formik.values.username}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.username && formik.errors.username)}
            helpertext={formik.errors.username}
            iconImg={<BsPersonFill />}
          />
          <InputGroup
            type="email"
            placeholder={strings.EMAIL}
            className={styles.inputPadding}
            name="email"
            value={formik.values && formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helpertext={formik.errors.email}
            iconImg={<BsFillEnvelopeFill />}
          />
          <InputGroup
            type={values.showPassword ? "text" : "password"}
            placeholder={strings.PASSWORD}
            className={styles.inputPadding}
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
          <div className="d-flex">
            {/* <input
              type="checkbox"
              className={`mt-1 ${styles.termsCondition}`}
            /> */}
            <Text extraSmallText className="ml-1">
              {" "}
              {strings.CONTINUE_AGREE}{" "}
              <a
                href="#"
                onClick={() => window.open("/termsAndConditions", "_blank")}
                className={`text-decoration-none ${styles.myQuteText}`}
              >
                {" "}
                {strings.TERM_AND_CONDITION}{" "}
              </a>
              {/* <Link to="/termsAndConditions" className={styles.myQuteText}>
                {strings.TERM_AND_CONDITION}
              </Link>{" "} */}
              {strings.AND}{" "}
              <a
                href="#"
                onClick={() => window.open("/privacyPolicy", "_blank")}
                className={`text-decoration-none ${styles.myQuteText}`}
              >
                Privacy Policy
              </a>
              {/* <Link
                to="/privacyPolicy"
                className={`text-decoration-none ${styles.myQuteText}`}
              >
                {strings.TERM_AND_PRIVACY_POLICY}
              </Link> */}
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
                onVerify={(token: any) => (formik.values.captcha = token)}
              />
              <Button
                className={` my-4 btn-md btn-block font-weight-bold ${styles.signInButton}`}
                handleClick={formik.handleSubmit}
                type="submit"
              >
                {strings.SIGNUP}
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
        </Link>{" "}
      </Text>
      <Text smallText>
        {strings.ALREADY_HAVE_ACCOUNT}
        <Link
          to="/signin"
          className="text-dark font-weight-bold text-decoration-none"
        >
          {" "}
          {strings.SIGNIN}
        </Link>
      </Text>
    </>
  );
};

export default SignupCard;
