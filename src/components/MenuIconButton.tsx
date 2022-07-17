import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  onOpen: () => void;
};
export const HamburgerMenu: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="hamberger-menu-button"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      onClick={onOpen}
    />
  );
});
