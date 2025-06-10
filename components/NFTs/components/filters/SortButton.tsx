import { useEffect, useState } from 'react';
import FilterButton from '../../../UI/Buttons/FilterButton';
import SelectButton from '../../../UI/Buttons/SelectButton';

type SortButtonProps = {
  theme: string | 'theme-light' | 'theme-dark';
  selectedSortOption: any;
  setSelectedSortOption: (sortOption: any) => void;
};

type SortOptions = {
  recentlyAdded?: boolean;
  lowToHigh?: boolean;
  highToLow?: boolean;
  auctionEndingSoon?: boolean;
};

const SortButton = (props: SortButtonProps) => {
  const { theme, selectedSortOption, setSelectedSortOption } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState<SortOptions>({});

  useEffect(() => {
    setSortOption(selectedSortOption);
    setSelectedSortOption(sortOption);
  }, [setSelectedSortOption, isOpen]);

  return (
    <FilterButton
      theme={theme}
      filterName={'Sort'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isSortButton={true}
    >
      <SelectButton
        title={'Recently added'}
        isSelected={sortOption.recentlyAdded}
        onClick={() => {
          setSortOption({ recentlyAdded: !sortOption.recentlyAdded });
          setIsOpen(false);
        }}
        isDisabled={false}
      />

      <SelectButton
        title={'Price: Low to High'}
        isSelected={sortOption.lowToHigh}
        onClick={() => {
          setSortOption({ lowToHigh: !sortOption.lowToHigh });
          setIsOpen(false);
        }}
        isDisabled={false}
      />

      <SelectButton
        title={'Price: High to Low'}
        isSelected={sortOption.highToLow}
        onClick={() => {
          setSortOption({ highToLow: !sortOption.highToLow });
          setIsOpen(false);
        }}
        isDisabled={false}
      />
      <SelectButton
        title={'Auction ending soon'}
        isSelected={sortOption.auctionEndingSoon}
        onClick={() => {
          setSortOption({ auctionEndingSoon: !sortOption.auctionEndingSoon });
          setIsOpen(false);
        }}
        isDisabled={false}
      />
    </FilterButton>
  );
};

export default SortButton;
