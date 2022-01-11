import { FC } from "react";
import { Link } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import Images from "../../../constants/AssetsConstants";
import { strings } from "../../../constants/AppConstants";
import { Form, FormikProvider } from "formik";
import styles from "./style.module.scss";
import InputGroup from "../../../components/InputGroup";
import { BsFillEnvelopeFill } from "react-icons/bs";

interface FuncProp {
  formik?: any;
}
const ForgetPasswordForm: FC<FuncProp> = ({ formik }) => {
  return (
    <>
      <div className="text-justify">
        <Link to="/signin">Back to Signin</Link>
      </div>
      <Heading headingPink className="mt-5 float-left font-weight-bold">
        Forgot Password
      </Heading>
      <Text className=" my-3 float-left text-justify" smallText>
        {strings.RESET_PASSWORD_TEXT}
      </Text>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <div className="">
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
          </div>
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

export default ForgetPasswordForm;
