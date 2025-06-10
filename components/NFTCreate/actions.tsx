import {
  CLEAR_NFT_CREATE_ALL,
  CLEAR_NFT_CREATE_AUCTION_END,
  CLEAR_NFT_CREATE_AUCTION_START,
  CLEAR_NFT_CREATE_BLOCKCHAIN,
  CLEAR_NFT_CREATE_CATEGORY,
  CLEAR_NFT_CREATE_CHARITY,
  CLEAR_NFT_CREATE_CHARITY_WALLET,
  CLEAR_NFT_CREATE_COLLECTION,
  CLEAR_NFT_CREATE_COPIES,
  CLEAR_NFT_CREATE_DESCRIPTION,
  CLEAR_NFT_CREATE_EXTERNAL_LINK,
  CLEAR_NFT_CREATE_FILE,
  CLEAR_NFT_CREATE_LICENCE_TYPE,
  CLEAR_NFT_CREATE_NAME,
  CLEAR_NFT_CREATE_PREVIEW,
  CLEAR_NFT_CREATE_PRICE,
  CLEAR_NFT_CREATE_ROYALTY,
  CLEAR_NFT_CREATE_SALE_TYPE,
  SET_NFT_CREATE_AUCTION_END,
  SET_NFT_CREATE_AUCTION_START,
  SET_NFT_CREATE_BLOCKCHAIN,
  SET_NFT_CREATE_CATEGORY,
  SET_NFT_CREATE_CHARITY,
  SET_NFT_CREATE_CHARITY_WALLET,
  SET_NFT_CREATE_COLLECTION,
  SET_NFT_CREATE_COPIES,
  SET_NFT_CREATE_DESCRIPTION,
  SET_NFT_CREATE_EXTERNAL_LINK,
  SET_NFT_CREATE_FILE,
  SET_NFT_CREATE_LICENCE_TYPE,
  SET_NFT_CREATE_NAME,
  SET_NFT_CREATE_PREVIEW,
  SET_NFT_CREATE_PRICE,
  SET_NFT_CREATE_ROYALTY,
  SET_NFT_CREATE_SALE_TYPE,
} from './actionTypes';
import { Preview } from './functions';

export const setNFTCreatePreview = (preview: Preview) => ({
  type: SET_NFT_CREATE_PREVIEW,
  preview: preview,
});

export const clearNFTCreatePreview = () => ({
  type: CLEAR_NFT_CREATE_PREVIEW,
});

export const setNFTCreateName = (name: string) => ({
  type: SET_NFT_CREATE_NAME,
  name: name,
});

export const clearNFTCreateName = () => ({
  type: CLEAR_NFT_CREATE_NAME,
});

export const setNFTCreateExternalLink = (externalLink: string) => ({
  type: SET_NFT_CREATE_EXTERNAL_LINK,
  externalLink: externalLink,
});

export const clearNFTCreateExternalLink = () => ({
  type: CLEAR_NFT_CREATE_EXTERNAL_LINK,
});

export const setNFTCreateLicenceType = (
  licenceType: string | 'single' | 'multiple'
) => ({
  type: SET_NFT_CREATE_LICENCE_TYPE,
  licenceType: licenceType,
});

export const clearNFTCreateLicenceType = () => ({
  type: CLEAR_NFT_CREATE_LICENCE_TYPE,
});

export const setNFTCreateCopies = (copies: number) => ({
  type: SET_NFT_CREATE_COPIES,
  copies: copies,
});

export const clearNFTCreateCopies = () => ({
  type: CLEAR_NFT_CREATE_COPIES,
});

export const setNFTCreateFile = (file: string) => ({
  type: SET_NFT_CREATE_FILE,
  file: file,
});

export const clearNFTCreateFile = () => ({
  type: CLEAR_NFT_CREATE_FILE,
});

export const setNFTCreateCategory = (category: string) => ({
  type: SET_NFT_CREATE_CATEGORY,
  category: category,
});

export const clearNFTCreateCategory = () => ({
  type: CLEAR_NFT_CREATE_CATEGORY,
});

export const setNFTCreateDescription = (description: string) => ({
  type: SET_NFT_CREATE_DESCRIPTION,
  description: description,
});

export const clearNFTCreateDescription = () => ({
  type: CLEAR_NFT_CREATE_DESCRIPTION,
});

export const setNFTCreateCollection = (collection: string) => ({
  type: SET_NFT_CREATE_COLLECTION,
  collection: collection,
});

export const clearNFTCreateCollection = () => ({
  type: CLEAR_NFT_CREATE_COLLECTION,
});

export const setNFTCreateBlockchain = (blockchain: string) => ({
  type: SET_NFT_CREATE_BLOCKCHAIN,
  blockchain: blockchain,
});

export const clearNFTCreateBlockchain = () => ({
  type: CLEAR_NFT_CREATE_BLOCKCHAIN,
});

export const setNFTCreateSaleType = (saleType: string) => ({
  type: SET_NFT_CREATE_SALE_TYPE,
  saleType: saleType,
});

export const clearNFTCreateSaleType = () => ({
  type: CLEAR_NFT_CREATE_SALE_TYPE,
});

export const setNFTCreatePrice = (price: number) => ({
  type: SET_NFT_CREATE_PRICE,
  price: price,
});

export const clearNFTCreatePrice = () => ({
  type: CLEAR_NFT_CREATE_PRICE,
});

export const setNFTCreateAuctionStart = (auctionStart: string) => ({
  type: SET_NFT_CREATE_AUCTION_START,
  auctionStart: auctionStart,
});

export const clearNFTCreateAuctionStart = () => ({
  type: CLEAR_NFT_CREATE_AUCTION_START,
});

export const setNFTCreateAuctionEnd = (auctionEnd: string) => ({
  type: SET_NFT_CREATE_AUCTION_END,
  auctionEnd: auctionEnd,
});

export const clearNFTCreateAuctionEnd = () => ({
  type: CLEAR_NFT_CREATE_AUCTION_END,
});

export const setNFTCreateCharity = (charity: boolean) => ({
  type: SET_NFT_CREATE_CHARITY,
  charity: charity,
});

export const clearNFTCreateCharity = () => ({
  type: CLEAR_NFT_CREATE_CHARITY,
});

export const setNFTCreateCharityWallet = (charityWallet: string) => ({
  type: SET_NFT_CREATE_CHARITY_WALLET,
  charityWallet: charityWallet,
});

export const clearNFTCreateCharityWallet = () => ({
  type: CLEAR_NFT_CREATE_CHARITY_WALLET,
});

export const setNFTCreateRoyalty = (royalty: number) => ({
  type: SET_NFT_CREATE_ROYALTY,
  royalty: royalty,
});

export const clearNFTCreateRoyalty = () => ({
  type: CLEAR_NFT_CREATE_ROYALTY,
});

export const clearNFTCreateAll = () => ({
  type: CLEAR_NFT_CREATE_ALL,
});
