import Card from "./Card";
import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const review = [
    {
      title: "customer1",
      description:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text.",
      getImageSrc: () => require("./image"),
    },
];

const Testimonials = () => {
    return (
        <>
            <Heading as="h1" id="">Testimonials </Heading>
            <Box display="grid" gridTemplateColumns="repeat(2,minmax(0,1fr))" gridGap={8}>
            {review.map((review) => (
                <Card
                key={review.title}
                title={review.title}
                description={review.description}
                imageSrc={review.getImageSrc()}
                />
            ))}
            </Box>
        </>
    );
  };

  export default Testimonials;
