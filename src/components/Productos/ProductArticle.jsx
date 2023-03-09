import React, { useState } from 'react';
import styled from 'styled-components';
import { maxDeviceWidth } from '../../styles/media_queries/mediaQueries';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
} from '@chakra-ui/react';

const ProductArticleShadow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5vw 2vw;
  background: #3c1d2fb0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
`;

const ProductArticleContainer = styled.div`
  width: 68%;
  height: 80%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: var(--snow);
  padding: 3vw 2vw;
  position: absolute;
  top: 30px;
  z-index: 5;
  @media ${maxDeviceWidth.mobileL} {
    width: 95%;
  } ;
`;

const ArticleImage = styled.img`
  width: 18%;
  margin: 0vw 0vw 2vw;
  border-radius: 6px;
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  color: var(--opera-mauve);
`;

const ArticleH3 = styled.h3`
  font-size: var(--step-0);
  text-align: center;
`;

const ArticleP = styled.p`
  font-size: var(--step--1);
`;

const ArticleUl = styled.ul`
  list-style: decimal !important;
  font-size: var(--step--1);
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const BtnCerrar = styled.div`
  border-radius: 25px;
  border: var(--snow) 1px solid;
  padding: 15px 20px;
  color: var(--snow);
  position: fixed;
  margin-top: 10px;
  right: 30px;
  z-index: 3;
  cursor: pointer;
`;

const ProductArticle = ({ articleContent, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale"
      scrollBehavior="outside"
      size="2xl">
      <ModalOverlay />
      <ModalContent color="var(--twilight-lavender)">
        <ModalHeader textAlign="center">
          <ModalCloseButton />
          {articleContent.title}
        </ModalHeader>
        <ModalBody>
          <Flex direction="column" alignItems="center">
            <ArticleImage src={articleContent.img} />
            <Text as="h3" fontSize="2xl" marginBottom="0.7rem">
              {articleContent.sub_title}
            </Text>
            <Flex direction="column">
              {articleContent.content.map((item) => (
                <Text key={item.slice(10, 25)}>{item}</Text>
              ))}
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const ProductArticle1 = ({ articleContent }) => {
  const [hidden, setHidden] = useState(false);
  return (
    !hidden && (
      <>
        <ProductArticleShadow onClick={() => setHidden(true)} />
        <BtnCerrar>X</BtnCerrar>
        <ProductArticleContainer>
          <ArticleImage
            src={process.env.PUBLIC_URL + articleContent.img}
            alt={articleContent.alt_img_txt}
          />
          <ArticleContent>
            <h2>{articleContent.title}</h2>
            <ArticleH3>{articleContent.sub_title}</ArticleH3>
            {articleContent.content.map((p) => (
              <ArticleP key={p.slice(15, 25)}>{p}</ArticleP>
            ))}
            {articleContent.list_content && (
              <ArticleUl>
                {articleContent.list_content.map((li) => (
                  <li key={li.slice(0, 10)}>{li}</li>
                ))}
              </ArticleUl>
            )}
          </ArticleContent>
        </ProductArticleContainer>
      </>
    )
  );
};

export default ProductArticle;
