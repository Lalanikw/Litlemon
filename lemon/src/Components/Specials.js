import Card from "./Card";
import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const food = [
    {
      title: "Greek Salad",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text.",
      getImageSrc: () => require("./images/greek salad.jpg"),
    },
];

const Specials = () => {
    return (
        <>
            <Heading as="h1" id="">Testimonials </Heading>
            <Box display="grid" gridTemplateColumns="repeat(2,minmax(0,1fr))" gridGap={8}>
            {food.map((food) => (
                <Card
                key={food.title}
                title={food.title}
                description={food.description}
                imageSrc={food.getImageSrc()}
                />
            ))}
            </Box>
        </>
    );
  };

  export default Specials;
