import React, { FC } from "react";
import { Link } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import InputField from "../../../components/InputField/InputField";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import Images from "../../../constants/AssetsConstants";
import { strings } from "../../../constants/AppConstants";
import { Form, FormikProvider } from "formik";
import InputGroup from "../../../components/InputGroup";
import { Image } from "react-bootstrap";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import styles from "./style.module.scss";
import { useLocation } from "react-router-dom";
interface FuncProp {
  formik?: any;
}
const ResetPasswordFrom: FC<FuncProp> = ({ formik }) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [confimValues, setConfirmValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowConfirmPassword = () => {
    setConfirmValues({
      ...confimValues,
      showPassword: !confimValues.showPassword,
    });
  };
  return (
    <>
      <div className="text-justify">
        <Link to="/signin">Back to signin</Link>
      </div>
      <Heading
        headingPink
        className="mt-5 float-left responsive_text font-weight-bold"
      >
        {strings.RESET_PASSWORD}
      </Heading>
      <Text className=" my-3 float-left text-justify" smallText>
        Please enter your new password and then click on Submit.
      </Text>
      <FormikProvider value={formik}>
        <Form
          className={styles.reset_password_details}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <InputGroup
            type={values.showPassword ? "text" : "password"}
            placeholder="Password"
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
          <InputGroup
            type={confimValues.showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirm_password"
            value={formik.values && formik.values.confirm_password}
            onChange={formik.handleChange}
            error={Boolean(
              formik.touched.confirm_password && formik.errors.confirm_password
            )}
            helpertext={formik.errors.confirm_password}
            iconImg={
              confimValues.showPassword ? (
                <BsEyeFill onClick={handleClickShowConfirmPassword} />
              ) : (
                <BsEyeSlashFill onClick={handleClickShowConfirmPassword} />
              )
            }
          />
          <Button
            className={`my-5 btn-md btn-block font-weight-bold ${styles.submitButton}`}
            handleClick={formik.handleSubmit}
            type="submit"
          >
            {strings.SUBMIT}
          </Button>
        </Form>
      </FormikProvider>
    </>
  );
};

export default ResetPasswordFrom;
