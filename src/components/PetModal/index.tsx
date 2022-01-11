import React, { FC } from "react";
import { Modal, Row } from "react-bootstrap";
import Images from "../../constants/AssetsConstants";
import Heading from "../Heading/Heading";
import "./style.scss";

interface FuncProp {
  className?: string;
  show?: boolean;
  size?: any;
  header?: boolean;
  closeBtn?: boolean;
  onHide: () => void;
}
const PetModal: FC<FuncProp> = ({
  show,
  onHide,
  children,
  className,
  size,
  header,
  closeBtn = true,
}) => {
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size={size}
        show={show}
        onHide={onHide}
        dialogClassName={`border-radius-2 petModal ${className}`}
      >
        <Modal.Header closeButton={closeBtn} className="text-center p-0">
          <div className="pet-Image position-absolute w-100">
            <img alt="logo" src="" className="pet-logo" />
          </div>
        </Modal.Header>
        <div className={`modal-body ${className}`}>{children}</div>
      </Modal>
    </>
  );
};

export default PetModal;
