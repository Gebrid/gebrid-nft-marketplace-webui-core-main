import { PersistenceRegistry, ReducerRegistry } from '../../state';
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
import { clearAll, clearStateItem, setStateItem } from './functions';

const DEFAULT_STATE = {
  preview: undefined,
  name: undefined,
  externalLink: undefined,
  licenceType: 'single',
  copies: undefined,
  file: undefined,
  category: undefined,
  description: undefined,
  collection: undefined,
  blockchain: undefined,
  saleType: 'fixed',
  price: undefined,
  auctionStart: undefined,
  auctionEnd: undefined,
  charity: false,
  charityWallet: undefined,
  royalty: undefined,
};

const STORE_NAME = 'feature/create-nft';

PersistenceRegistry.register(
  STORE_NAME,
  {
    preview: false,
    name: true,
    externalLink: true,
    licenceType: true,
    copies: true,
    file: false,
    category: true,
    description: true,
    collection: true,
    blockchain: true,
    saleType: true,
    price: true,
    auctionStart: true,
    auctionEnd: true,
    charity: true,
    charityWallet: true,
    royalty: true,
  },
  DEFAULT_STATE
);

ReducerRegistry.register(STORE_NAME, (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_NFT_CREATE_PREVIEW:
      return setStateItem(state, action, 'preview');
    case CLEAR_NFT_CREATE_PREVIEW:
      return clearStateItem(state, 'preview');

    case SET_NFT_CREATE_NAME:
      return setStateItem(state, action, 'name');
    case CLEAR_NFT_CREATE_NAME:
      return clearStateItem(state, 'name');

    case SET_NFT_CREATE_EXTERNAL_LINK:
      return setStateItem(state, action, 'externalLink');
    case CLEAR_NFT_CREATE_EXTERNAL_LINK:
      return clearStateItem(state, 'externalLink');

    case SET_NFT_CREATE_LICENCE_TYPE:
      return setStateItem(state, action, 'licenceType');
    case CLEAR_NFT_CREATE_LICENCE_TYPE:
      return clearStateItem(state, 'licenceType');

    case SET_NFT_CREATE_COPIES:
      return setStateItem(state, action, 'copies');
    case CLEAR_NFT_CREATE_COPIES:
      return clearStateItem(state, 'copies');

    case SET_NFT_CREATE_FILE:
      return setStateItem(state, action, 'file');
    case CLEAR_NFT_CREATE_FILE:
      return clearStateItem(state, 'file');

    case SET_NFT_CREATE_CATEGORY:
      return setStateItem(state, action, 'category');
    case CLEAR_NFT_CREATE_CATEGORY:
      return clearStateItem(state, 'category');

    case SET_NFT_CREATE_DESCRIPTION:
      return setStateItem(state, action, 'description');
    case CLEAR_NFT_CREATE_DESCRIPTION:
      return clearStateItem(state, 'description');

    case SET_NFT_CREATE_COLLECTION:
      return setStateItem(state, action, 'collection');
    case CLEAR_NFT_CREATE_COLLECTION:
      return clearStateItem(state, 'collection');

    case SET_NFT_CREATE_BLOCKCHAIN:
      return setStateItem(state, action, 'blockchain');
    case CLEAR_NFT_CREATE_BLOCKCHAIN:
      return clearStateItem(state, 'blockchain');

    case SET_NFT_CREATE_SALE_TYPE:
      return setStateItem(state, action, 'saleType');
    case CLEAR_NFT_CREATE_SALE_TYPE:
      return clearStateItem(state, 'saleType');

    case SET_NFT_CREATE_PRICE:
      return setStateItem(state, action, 'price');
    case CLEAR_NFT_CREATE_PRICE:
      return clearStateItem(state, 'price');

    case SET_NFT_CREATE_AUCTION_START:
      return setStateItem(state, action, 'auctionStart');
    case CLEAR_NFT_CREATE_AUCTION_START:
      return clearStateItem(state, 'auctionStart');

    case SET_NFT_CREATE_AUCTION_END:
      return setStateItem(state, action, 'auctionEnd');
    case CLEAR_NFT_CREATE_AUCTION_END:
      return clearStateItem(state, 'auctionEnd');

    case SET_NFT_CREATE_CHARITY:
      return setStateItem(state, action, 'charity');
    case CLEAR_NFT_CREATE_CHARITY:
      return clearStateItem(state, 'charity');

    case SET_NFT_CREATE_CHARITY_WALLET:
      return setStateItem(state, action, 'charityWallet');
    case CLEAR_NFT_CREATE_CHARITY_WALLET:
      return clearStateItem(state, 'charityWallet');

    case SET_NFT_CREATE_ROYALTY:
      return setStateItem(state, action, 'royalty');
    case CLEAR_NFT_CREATE_ROYALTY:
      return clearStateItem(state, 'royalty');

    case CLEAR_NFT_CREATE_ALL:
      return clearAll(state, DEFAULT_STATE);

    default:
      return state;
  }
});
