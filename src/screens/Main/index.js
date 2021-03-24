import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import constants from "atoms/constants";
import { Wrapper, Header, Body } from "./styles";

function Main() {
  const [theme] = useRecoilState(constants.theme);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const reqImages = require.context("../../images", true, /\.svg$/);

    const allPaths = reqImages.keys();
    const imagePath = allPaths[0];
    console.log("imag", imagePath);
    const image = reqImages(imagePath);

    setImages(image);
  }, []);

  const { githubIcon } = theme.images;

  return (
    <Wrapper>
      <img src={images.default} />
      <Header>header</Header>
      <Body>body</Body>
    </Wrapper>
  );
}

export default Main;
