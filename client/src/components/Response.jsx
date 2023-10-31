import { Box, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Response = ({ data }) => {
  return (
    <Box
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      overflow={"scroll"}
      h={"100%"}
      bg={"#8c48af"}
      //   border={"1px solid teal"}
      p={"14px"}
    >
      <Box
        h={"100%"}
        color={"#f5f8fb"}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
      >
        {data.map((response) => (
          <GridItem>
            <Heading size={"sm"}>Q : {response.question} ?</Heading>
            <Text>Ans - {response.answer}</Text>
          </GridItem>
        ))}
      </Box>
    </Box>
  );
};

export default Response;
