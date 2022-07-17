import {
  Container,
  Flex,
  Heading,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { HamburgerMenu } from "./MenuIconButton";
import { MenuDrawer } from "./MenuDrawer";
import { PrimaryButton } from "./PrimaryButton";
import { useWallet } from "../hooks/useWallet";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isConnected, connect, address, ensName } = useWallet();
  return (
    <Container maxW="container.lg">
      <Flex as="nav" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center">
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
        <Flex>
          <Flex>
            {!isConnected ? (
              <PrimaryButton onClick={connect}>Connect Wallet</PrimaryButton>
            ) : (
              <Text>{ensName ? ensName : address}</Text>
            )}
          </Flex>
          <Flex display={{ base: "flex", md: "none" }}>
            <HamburgerMenu onOpen={onOpen} />
          </Flex>
        </Flex>
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </Container>
  );
});
