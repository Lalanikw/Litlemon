import React from "react";
import {Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const title = "chef1";
const name = "Chicago";
const Details = "Lorem ipsum, or lipsum as it is sometimes known is dummy text used in laying out print, graphic or web design.";

const About = () => {
  return (
    <div>
      <FullScreenSection justifyContent="left" alignItems="left" isDarkBackground
        backgroundColor="495E57">
        <VStack spacing={4} alignItems="right">
          <Avatar src="./restauranfood.jpg " size="2xl" name="Food"></Avatar>
          <Heading as="h4" size="md" onOfLines={1}>{title}</Heading>
        </VStack>
        <VStack spacing={4} alignItems="center">
          <Heading as="h4" size="md" onOfLines={1}>{name}</Heading>
          <Heading as="h4" size="md" onOfLines={1}>{Details}</Heading>
        </VStack>
      </FullScreenSection>
    </div>
  );
}

export default About;