import { Address } from 'wagmi';

export interface IUserSession {
  id: string;
  domain: string;
  chainId: number;
  address: string;
  uri: string;
  version: string;
  nonce: string;
  profileId: string;
}

export interface ITheme {
  theme: string | 'theme-light' | 'theme-dark';
}

type Price = {
  Token: Address;
  Price: string;
};

export interface NFT {
  Collection: Address;
  Description: string;
  Id: number;
  File: string;
  IsListed: boolean;
  Name: string;
  Type: string;
  Prices: Price[];
  Owner: Address;
  OwnerAvatar: Address | null;
}

export interface IFile {
  file: string;
}

export interface IArtist {
  id: string;
  name: string;
  address: string;
  avatar: string;
  followers: number;
  following: number;
  // TODO: get the correct data structure
}

//Example
// {
//   "user": {
//     "id": "G7FozGLfHnKO9Qyzm",
//     "domain": "
//     "chainId": 1,
//     "address": "0x424891f22628F3848cd6a81D68898cC73059E490",
//     "uri": "http://localhost:3000",
//     "version": "1",
//     "nonce": "5SJd8ExEYIzXNW8Zu",
//     "profileId": "0x73dc7f94d8742cda5da2f926631607ffb74a1f9fcf77b47b9a11ddba9d58a321"
//   },
//   "expires": "2023-02-12T09:48:57.310Z"
// }
