import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import constants from "atoms/constants";
import {
  Wrapper,
  Header,
  Body,
  Image,
  Title,
  ModalImage,
  InnerModal,
  Info,
  Close,
  Top,
  Heading,
  SiteDescription,
  Icon,
} from "./styles";
import { articles } from "articles";
import Modal from "components/Modal";

function Main() {
  const [theme] = useRecoilState(constants.theme);
  const [images, setImages] = useState([]);

  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const reqImages = require.context("../../images", true, /\.jpg$/);
    const allPaths = reqImages.keys();

    const listOfImages = [];

    allPaths.map((k, index) => {
      const imagePath = allPaths[index];
      const image = reqImages(imagePath);

      let regexIndex = new RegExp(/\d{1,2}/gm);
      const imageIndex = regexIndex.exec(image.default);

      listOfImages.push({ id: parseInt(imageIndex[0]), image: image.default });
    });

    setImages(listOfImages.sort((a, b) => a.id - b.id));
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [open]);

  const handleSelectImage = (post) => {
    const attrs = articles[post.id - 1];
    console.log(attrs);
    const d = { ...post, ...attrs };
    setSelected(d);
    setOpen(true);
  };

  const { githubIcon } = theme.images;

  return (
    <Wrapper>
      <Top>
        <Heading>My Mom's Beatles</Heading>
        <SiteDescription>
          My mom collected just about every Beatles article she could get her
          hands on in the 1960s. Below are some highlights from the collection.
        </SiteDescription>
        <Icon src={theme.images.githubIcon} />
        <Icon src={theme.images.codepenIcon} />
        <Icon src={theme.images.linkedinIcon} />
      </Top>
      <Body>
        {images.map((i) => (
          <Image
            key={i.image}
            src={i.image}
            onClick={() => handleSelectImage(i)}
          />
        ))}
      </Body>
      <Modal open={open} setOpen={setOpen}>
        <InnerModal>
          <Header>
            <div>
              <Title>{selected && selected.newspaper}</Title>
              <Info>
                {selected && `${selected.description} (${selected.date})`}
              </Info>
            </div>
            <Close onClick={() => setOpen(false)}>close</Close>
          </Header>
          <ModalImage src={selected && selected.image} />
        </InnerModal>
      </Modal>
    </Wrapper>
  );
}

export default Main;
