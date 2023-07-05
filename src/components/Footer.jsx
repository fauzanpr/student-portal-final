// TODO: answer here
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = ({ absolute = true, hidden = false }) => {
  if (hidden) {
    return (
      <Box
        className="footer"
        bg="blue.600"
        position="absolute"
        width="100%"
        bottom="0"
        hidden
      >
        <Flex
          justifyContent="center"
          gap="2rem"
          p="1rem"
          color="white"
          fontWeight="bold"
        >
          <Text className="studentName">Fauzan Pradana</Text>
          <Text className="studentId">FE4575681</Text>
        </Flex>
      </Box>
      // TODO: answer here
    );
  }
  if (absolute) {
    return (
      <Box
        className="footer"
        bg="blue.600"
        position="absolute"
        width="100%"
        bottom="0"
      >
        <Flex
          justifyContent="center"
          gap="2rem"
          p="1rem"
          color="white"
          fontWeight="bold"
        >
          <Text className="studentName">Fauzan Pradana</Text>
          <Text className="studentId">FE4575681</Text>
        </Flex>
      </Box>
      // TODO: answer here
    );
  } else {
    return (
      <Box className="footer" bg="blue.600" width="100%" marginTop="20">
        <Flex
          justifyContent="center"
          gap="2rem"
          p="1rem"
          color="white"
          fontWeight="bold"
        >
          <Text className="studentName">Fauzan Pradana</Text>
          <Text className="studentId">FE4575681</Text>
        </Flex>
      </Box>
    );
  }
};

export default Footer;
