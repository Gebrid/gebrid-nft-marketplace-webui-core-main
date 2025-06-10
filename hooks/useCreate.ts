import { createCollectionContractConfig } from 'abis/createCollectionContractConfig';
import { createToken } from 'api';
import { tokens } from 'consts/consts';
import { parseEther } from 'ethers/lib/utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  useAccount,
  useContractEvent,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useTransaction,
  useWaitForTransaction,
} from 'wagmi';
import addObjectsAbi from '../abis/addObjectsAbi.json';

interface CreateNFTProps {
  file: FileList;
  name: string;
  description: string | undefined;
  numberOfCopies: number | undefined;
  price: number;
  closeModal: () => void;
  resetForm: () => void;
}

export const useCreate = ({
  file,
  name,
  description,
  numberOfCopies,
  price,
  resetForm,
  closeModal,
}: CreateNFTProps) => {
  const router = useRouter();

  const [collectionAddress, setCollectionAddress] = useState<string>('');

  const tokenPrice =
    price != undefined && price > 0 ? parseEther(price.toString()) : 0;

  const { chain } = useNetwork();
  const { address } = useAccount();

  const { config: createCollectionConfig } = usePrepareContractWrite({
    ...createCollectionContractConfig,
    functionName: 'createNewCollection',
    args: [name, chain?.nativeCurrency?.symbol, address],
  });

  const {
    data: createData,
    writeAsync: createCollection,
    status: createStatus,
    error: createError,
  } = useContractWrite(createCollectionConfig as any);

  const {
    data: createTxData,
    status: createTxStatus,
    error: createTxError,
  } = useWaitForTransaction({
    hash: createData?.hash,
    onSuccess: async () => {
      try {
        await createToken({
          file,
          collectionId: collectionAddress,
          name,
          //@ts-ignore
          description,
          //@ts-ignore
        })
          //@ts-ignore
          .then(async ({ Data: fileLink }) => {
            console.log('token sent to server');
            await addObjectsWrite?.({
              recklesslySetUnpreparedArgs: [
                numberOfCopies,
                fileLink,
                tokens,
                [tokenPrice],
              ],
            });
          });
      } catch (err) {
        console.error(err);
        setTimeout(() => {
          closeModal();
        }, 3000);
      }
    },
  });

  useContractEvent({
    ...createCollectionContractConfig,
    eventName: 'CollectionCreated',
    listener(collectionAddress: any) {
      setCollectionAddress(collectionAddress);
      console.log('new collection address from logs', collectionAddress);
    },
    once: true,
  });

  const {
    data: addObjectsData,
    status: addObjectsStatus,
    error: addObjectsError,
    writeAsync: addObjectsWrite,
  } = useContractWrite({
    mode: 'recklesslyUnprepared',
    address: collectionAddress,
    abi: addObjectsAbi,
    chainId: chain?.id,
    functionName: 'addObjects',
  });

  const {
    data: addObjectsTxData,
    status: addObjectsTxStatus,
    error: addObjectsTxError,
  } = useTransaction({
    hash: addObjectsData?.hash,
    onSuccess: () => {
      console.log('nft created!');
      resetForm();
      router.push('/profile');
    },
  });

  return {
    createCollection,
    createData,
    createStatus,
    createError,
    createTxData,
    createTxStatus,
    createTxError,
    addObjectsData,
    addObjectsStatus,
    addObjectsTxData,
    addObjectsTxStatus,
    addObjectsTxError,
  };
};
