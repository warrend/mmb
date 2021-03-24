import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import constants from "atoms/constants";
import { Wrapper, Container, Background } from "./styles";

const Modal = ({ open, children }) => {
  const [theme] = useRecoilState(constants.theme);

  return (
    <>
      {open && (
        <Background>
          <Container>
            <Wrapper>{children}</Wrapper>
          </Container>
        </Background>
      )}
    </>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};

Modal.defaultProps = {
  open: false,
};

export default BasicModal;
