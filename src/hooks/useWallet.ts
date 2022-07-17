import { InjectedConnector } from "wagmi/connectors/injected";
import { useConnect, useEnsName, useAccount } from "wagmi";

export const useWallet = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return { address, isConnected, ensName, connect };
};
