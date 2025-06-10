import { NFT } from 'types/types';

export const generateMockNFT = (fill: boolean = false, length: number = 1) => {
  const template: NFT = {
    Id: 1,
    Collection: '0x6409b6412B85aad2727A4c88cA3DC67C33c0eC55',
    Description: 'This is a description',
    Name: 'some collection',
    File: '',
    IsListed: true,
    Type: 'image/png',
    Prices: [
      {
        Token: '0x',
        Price: '1000000000000000000000000',
      },
    ],
    Owner: '0x6409b6412B85aad2727A4c88cA3DC67C33c0eC55',
  };

  const fillData = Array(length)
    .fill(0)
    .map((_, i) => ({ ...template, Id: i + 1 }));

  const data: NFT[] = [
    {
      Id: 1,
      Collection: '0x6409b6412B85aad2727A4c88cA3DC67C33c0eC55',
      Description: 'This is a description',
      Name: 'some collection',
      File: '',
      IsListed: true,
      Type: 'image/png',
      Prices: [
        {
          Token: '0x',
          Price: '1000000000000000000000',
        },
      ],
      Owner: '0x6409b6412B85aad2727A4c88cA3DC67C33c0eC55',
    },
  ];

  if (fill) {
    return fillData;
  }
  return data;
};
