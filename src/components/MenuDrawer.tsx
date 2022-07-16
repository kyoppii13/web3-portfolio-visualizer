import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export const MenuDrawer: FC<Props> = (props) => {
  const { isOpen, onClose } = props;
  const onClickHome = () => {};
  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      colorScheme="gray.800"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Button w="100%" onClick={onClickHome}>
            Home
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
