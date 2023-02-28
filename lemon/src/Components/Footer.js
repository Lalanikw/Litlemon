import React from "react";
import {Box, Flex, Hstack} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
         <image href=""></image>
         <Hstack>
         <ul>
            <h3> Doormat Navigation</h3>
            <li href="/Home"> Home</li>
            <li href="/About"> About</li>
            <li href="/Menu"> Menu</li>
            <li href="/Reservation"> Reservation</li>
            <li href="/Order Online"> Order Online</li>
            <li href="/Login"> Login</li>
         </ul>
         <ul>
            <h3> Constact</h3>
            <li> Address</li>
            <li> Phone Number</li>
            <li> Email</li>
         </ul>
         <ul>
            <h3> Social Media Links</h3>
            <li> Facebook</li>
            <li> Instegram</li>
            <li> Youtube</li>
         </ul>
         </Hstack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;