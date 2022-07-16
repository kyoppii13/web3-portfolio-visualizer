import {
  Container,
  Flex,
  Heading,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { MenuDrawer } from "./MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW="container.lg">
      <Flex as="nav" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex>
          <Heading as="h1" fontSize={{ base: "md", md: "xl" }} mr={8}>
            W3PV
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={1}
          display={{ base: "none", md: "flex" }}
        >
          <Link>Home</Link>
        </Flex>
        <Flex display={{ base: "flex", md: "none" }}>
          <HamburgerMenu onOpen={onOpen} />
        </Flex>
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </Container>
  );
});
