import { Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Home: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Heading>home</Heading>
    </Flex>
  );
});
