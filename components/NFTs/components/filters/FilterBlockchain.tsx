import { useEffect, useState } from 'react';
import FilterButton from '../../../UI/Buttons/FilterButton';
import GradientButton, {
  ColorDirection,
} from '../../../UI/Buttons/GradientButton';
import SecondaryButton from '../../../UI/Buttons/SecondaryButton';
import SelectButton from '../../../UI/Buttons/SelectButton';
import styles from '../../styles/Filters.module.scss';

type FilterBlockchainProps = {
  theme: string | 'theme-light' | 'theme-dark';
  selectedBlockchainId: any;
  setSelectedBlockchainId: (blockchainId: any) => void;
};

type Blockchains = {
  ethereum?: boolean;
  polygon?: boolean;
  solana?: boolean;
  tezos?: boolean;
};

const FilterBlockchain = (props: FilterBlockchainProps) => {
  const { theme, selectedBlockchainId, setSelectedBlockchainId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [blockchains, setBlockchains] = useState<Blockchains>({});

  useEffect(() => {
    setBlockchains(selectedBlockchainId);
  }, [selectedBlockchainId, isOpen]);

  return (
    <FilterButton
      theme={theme}
      filterName={'Blockchain'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <SelectButton
        image="/images/Ethereum.png"
        title={'Ethereum'}
        isSelected={blockchains.ethereum}
        onClick={() =>
          setBlockchains({ ...blockchains, ethereum: !blockchains.ethereum })
        }
        isDisabled={false}
      />

      <SelectButton
        image="/images/Polygon.png"
        title={'Polygon'}
        isSelected={blockchains.polygon}
        onClick={() =>
          setBlockchains({ ...blockchains, polygon: !blockchains.polygon })
        }
        isDisabled={true}
      />

      <SelectButton
        image="/images/Solana.png"
        title={'Solana'}
        isSelected={blockchains.solana}
        onClick={() =>
          setBlockchains({ ...blockchains, solana: !blockchains.solana })
        }
        isDisabled={true}
      />

      <SelectButton
        image="/images/Tezos.png"
        title={'Tezos'}
        isSelected={blockchains.tezos}
        onClick={() =>
          setBlockchains({ ...blockchains, tezos: !blockchains.tezos })
        }
        isDisabled={true}
      />

      <div className={styles.buttons}>
        <SecondaryButton
          content={'Clear'}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedBlockchainId({
              ethereum: false,
              polygon: true,
              solana: false,
              tezos: false,
            });
            setIsOpen(false);
          }}
        />
        <GradientButton
          content={'Apply'}
          colorDirection={ColorDirection.Reverse}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedBlockchainId(blockchains);
            setIsOpen(false);
          }}
        />
      </div>
    </FilterButton>
  );
};

export default FilterBlockchain;
