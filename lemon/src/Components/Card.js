import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, imageSrc, description }) => {
  return (
    <VStack
      color="black"
      backgroundColor="#f0e5b2"
      cursor="pointer"
      borderRadius="xl"
      margin={0}
    >
      <VStack spacing={.1} p={.1} >
      <Image src={imageSrc} padding="4px" />
        <HStack >
          <Heading as="h4" size="sm" margin="2px">
            {title}
          </Heading>
        </HStack>
        <Text color="black" fontSize="1em" padding="7px">
          {description}
        </Text>
      </VStack>
    </VStack>
  )
};

export default Card;
