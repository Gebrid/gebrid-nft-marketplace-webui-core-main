import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import FilterButton from '../../../UI/Buttons/FilterButton';
import GradientButton, {
  ColorDirection,
} from '../../../UI/Buttons/GradientButton';
import SecondaryButton from '../../../UI/Buttons/SecondaryButton';
import SelectButton from '../../../UI/Buttons/SelectButton';
import styles from '../../styles/Filters.module.scss';

type FilterPriceProps = {
  theme: string | 'theme-light' | 'theme-dark';
  selectedPriceRange: any;
  setSelectedPriceRange: any;
  selectedCoinId: any;
  setSelectedCoinId: (coinId: any) => void;
};

enum CoinName {
  ethereum = 'ETH',
  polygon = 'MATIC',
  solana = 'SOL',
  tezos = 'XTZ',
}

type CoinData = {
  [key in CoinName]: {
    symbol: string;
    icon: string;
  };
};

const Coins: CoinData = {
  [CoinName.ethereum]: {
    symbol: 'ETH',
    icon: '/images/Ethereum.png',
  },
  [CoinName.polygon]: {
    symbol: 'MATIC',
    icon: '/images/Polygon.png',
  },
  [CoinName.solana]: {
    symbol: 'SOL',
    icon: '/images/Solana.png',
  },
  [CoinName.tezos]: {
    symbol: 'XTZ',
    icon: '/images/Tezos.png',
  },
};

type PriceInputProps = {
  text: string;
  value: string; //number;
  onChange: Function;
};

const PriceInput = React.forwardRef((props: PriceInputProps) => {
  const { text, value, onChange } = props;
  return (
    <div
      style={{
        borderRadius: '8px',
        padding: '16px 12px',
        border: '1px solid #DFE1E6',
        width: '105px',
      }}
    >
      <input
        type={'text'}
        placeholder={text}
        style={{
          background: 'transparent',
          outline: 'none',
          fontSize: '14px',
        }}
        value={value}
        onChange={(event) => onChange(event)}
      ></input>
    </div>
  );
});

const FilterPrice = (props: FilterPriceProps) => {
  const { theme, setSelectedPriceRange, setSelectedCoinId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isCoinSelectorOpen, setIsCoinSelectorOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(Coins[CoinName.ethereum]);
  const [priceRange, setPriceRange] = useState({ from: '0', to: '0' });

  const onClick = () => {
    setIsCoinSelectorOpen(!isCoinSelectorOpen);
  };

  const clickOnSelectCoin = (coin: CoinName) => {
    setSelectedCoin(Coins[coin]);
    setIsCoinSelectorOpen(false);
  };

  useEffect(() => {
    setIsCoinSelectorOpen(false);
  }, [isOpen]);

  useEffect(() => {
    setSelectedCoin(selectedCoin);
  }, [selectedCoin, isOpen]);

  return (
    <FilterButton
      theme={theme}
      filterName={'Price Range'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={styles.coinSelector}>
        <div className={styles.coinSelectButtonWrapper} onClick={onClick}>
          <SelectButton
            image={selectedCoin.icon}
            title={selectedCoin.symbol}
            onClick={() => {}}
            isDisabled={false}
          />
          <div className={styles.arrow}>
            <FontAwesomeIcon
              icon={isCoinSelectorOpen ? faAngleDown : faAngleRight}
            />
          </div>
        </div>
        <div
          className={styles.coinSelectDropdown}
          style={{ display: isCoinSelectorOpen ? 'block' : 'none' }}
        >
          {selectedCoin.symbol !== Coins[CoinName.ethereum].symbol && (
            <SelectButton
              image="/images/Ethereum.png"
              title={Coins[CoinName.ethereum].symbol}
              onClick={() => clickOnSelectCoin(CoinName.ethereum)}
              isDisabled={false}
            />
          )}
          {selectedCoin.symbol !== Coins[CoinName.polygon].symbol && (
            <SelectButton
              image="/images/Polygon.png"
              title={Coins[CoinName.polygon].symbol}
              onClick={() => clickOnSelectCoin(CoinName.polygon)}
              isDisabled={false}
            />
          )}
          {selectedCoin.symbol !== Coins[CoinName.solana].symbol && (
            <SelectButton
              image="/images/Solana.png"
              title={Coins[CoinName.solana].symbol}
              onClick={() => clickOnSelectCoin(CoinName.solana)}
              isDisabled={false}
            />
          )}
          {selectedCoin.symbol !== Coins[CoinName.tezos].symbol && (
            <SelectButton
              image="/images/Tezos.png"
              title={Coins[CoinName.tezos].symbol}
              onClick={() => clickOnSelectCoin(CoinName.tezos)}
              isDisabled={false}
            />
          )}
        </div>
      </div>
      <div className={styles.priceRange}>
        <PriceInput
          text={'From'}
          value={priceRange.from}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPriceRange({ ...priceRange, from: event.target.value })
          }
        />
        <PriceInput
          text={'To'}
          value={priceRange.to}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPriceRange({ ...priceRange, to: event.target.value })
          }
        />
      </div>
      <div className={styles.buttons}>
        <SecondaryButton
          content={'Clear'}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedCoin(Coins[CoinName.ethereum]);
            setIsOpen(false);
          }}
        />
        <GradientButton
          content={'Apply'}
          colorDirection={ColorDirection.Reverse}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedCoin(selectedCoin);
            setSelectedCoinId(selectedCoin);
            setIsOpen(false);
            setSelectedPriceRange({
              from: +priceRange.from,
              to: +priceRange.to,
            });
          }}
        />
      </div>
    </FilterButton>
  );
};

export default FilterPrice;
