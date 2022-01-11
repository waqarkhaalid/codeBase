import { FC } from "react";
import Button from "../../components/Button/Button";
import { Col, Row } from "react-bootstrap";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Images from "../../constants/AssetsConstants";
import { useHistory } from "react-router-dom";

const InvalidRoute: FC = () => {
  let history = useHistory();
  return (
    <div className="mt-5">
      <Row className="justify-content-center text-center">
        <Col md="6">
          <img src={Images.PAGE_NOT_FOUND} alt={""} />
          <Heading headingPink className="mt-5 mb-3 font-weight-bold">
            We can't find that page
          </Heading>
          <Text mediumTextPink>
            We're fairly sure that page used to be here, but seems to have gone
            missing. We do apologise on it's behalf.
          </Text>
          <Button
            className="mt-4"
            btnOutline
            handleClick={() => history.push("/home")}
          >
            Home
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default InvalidRoute;
