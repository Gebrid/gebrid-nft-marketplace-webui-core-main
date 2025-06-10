import { useEffect, useState } from 'react';
import FilterButton from '../../../UI/Buttons/FilterButton';
import GradientButton, {
  ColorDirection,
} from '../../../UI/Buttons/GradientButton';
import SecondaryButton from '../../../UI/Buttons/SecondaryButton';
import SelectButton from '../../../UI/Buttons/SelectButton';
import styles from '../../styles/Filters.module.scss';

type FilterCategoryProps = {
  theme: string | 'theme-light' | 'theme-dark';
  selectedSaleTypeId: any;
  setSelectedSaleTypeId: (catrgoryId: any) => void;
};

type SaleType = {
  buyNow?: boolean;
  auction?: boolean;
};

const FilterSaleType = (props: FilterCategoryProps) => {
  const { theme, selectedSaleTypeId, setSelectedSaleTypeId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [saleType, setSaleType] = useState<SaleType>({});

  useEffect(() => {
    setSaleType(selectedSaleTypeId);
  }, [selectedSaleTypeId, isOpen]);

  return (
    <FilterButton
      theme={theme}
      filterName={'Sale Type'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <SelectButton
        title={'Buy Now'}
        isSelected={saleType.buyNow}
        onClick={() => setSaleType({ ...saleType, buyNow: !saleType.buyNow })}
        isDisabled={false}
      />

      <SelectButton
        title={'Auction'}
        isSelected={saleType.auction}
        onClick={() => setSaleType({ ...saleType, auction: !saleType.auction })}
        isDisabled={false}
      />

      <div className={styles.buttons}>
        <SecondaryButton
          content={'Clear'}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedSaleTypeId({
              saleType: false,
              auction: false,
            });
            setIsOpen(false);
          }}
        />
        <GradientButton
          content={'Apply'}
          colorDirection={ColorDirection.Reverse}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedSaleTypeId(saleType);
            setIsOpen(false);
          }}
        />
      </div>
    </FilterButton>
  );
};

export default FilterSaleType;
