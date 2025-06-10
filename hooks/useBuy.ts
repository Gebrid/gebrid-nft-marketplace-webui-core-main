import { tokens } from 'consts/consts';
import { BigNumber } from 'ethers';
import {
  Address,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi';
import collectionAbi from '../abis/addObjectsAbi.json';
import erc20Abi from '../abis/erc20.json';

interface Props {
  tokenId: number;
  collectionAddress: Address;
  tokenAddress: Address;
  tokenPrice: string;
  isOwnerSee: boolean;
}

export const useBuy = ({
  tokenId,
  tokenAddress,
  collectionAddress,
  tokenPrice,
  isOwnerSee,
}: Props) => {
  const { address } = useAccount();

  const {
    isFetching,
    isRefetching,
    data: allowance,
    status,
    error,
    refetch,
  } = useContractRead({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    enabled: tokenAddress === tokens[0] && !isOwnerSee,
    args: [address, collectionAddress],
  });

  const { config: approveConfig } = usePrepareContractWrite({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'approve',
    args: [collectionAddress, tokenPrice],
  });

  const { writeAsync: approve } = useContractWrite(approveConfig as any);

  const { config: buyConfig, error: buyError } = usePrepareContractWrite({
    address: collectionAddress,
    abi: collectionAbi,
    functionName: 'buy',
    args: [tokenId, tokenAddress],
    overrides: {
      gasLimit: BigNumber.from(1000000),
    },
  });

  const { writeAsync: buy } = useContractWrite(buyConfig as any);

  const onBuyClick = async () => {
    try {
      //@ts-ignore
      let isApproved = allowance?.gte(BigNumber.from(tokenPrice));

      if (isApproved) {
        console.log('user approved');
        const buyTx = await buy?.();
      }

      if (!isApproved) {
        console.log("user didn't approve");
        const approveTx = await approve?.();

        await approveTx?.wait();

        if (approveTx?.hash) {
          console.log('tx approve success');
          const { data } = await refetch?.();

          //@ts-ignore
          isApproved = data?.gte(BigNumber.from(tokenPrice));

          console.log('isApproved', isApproved);

          if (isApproved) {
            const buyTx = await buy?.();
            await buyTx?.wait();
          }
        }
      }
    } catch (error) {
      console.error(`buy token: ${error}`);
    }
  };

  return {
    onBuyClick,
    allowance,
    isFetching,
    isRefetching,
    status,
    error,
    refetch,
  };
};
