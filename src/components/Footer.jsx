// TODO: answer here
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box className="footer">
        <Flex justifyContent="center" gap="3rem" p="1rem" bg="blue.600" mt="10%">
          <p className="studentName" color="white" fontWeight="bold">Fauzan Pradana</p>
          <p className="studentId" color="white" fontWeight="bold">FE4575681</p>
        </Flex>
      </Box>
    </>
    // TODO: answer here
  );
};

export default Footer;
