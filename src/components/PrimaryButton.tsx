import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { useWallet } from "../hooks/useWallet";

type Props = {
  children: ReactNode;
  onClick: () => void;
};
export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <Button variant="outline" onClick={onClick}>
      {children}
    </Button>
  );
};
