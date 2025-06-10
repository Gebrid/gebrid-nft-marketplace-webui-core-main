import { connect } from 'react-redux';
import styles from '../styles/Filters.module.scss';
import FilterAuthor from './filters/FilterAuthor';
import FilterBlockchain from './filters/FilterBlockchain';
import FilterCategory from './filters/FilterCategory';
import FilterCollection from './filters/FilterCollection';
import FilterPrice from './filters/FilterPrice';
import FilterSaleType from './filters/FilterSaleType';
import SortButton from './filters/SortButton';

type FiltersProps = {
  theme: string | 'theme-light' | 'theme-dark';
  selectedBlockchainId: any | null;
  setSelectedBlockchainId: any;
  selectedPriceRange: any | null;
  setSelectedPriceRange: any;
  selectedCoinId: any | null;
  setSelectedCoinId: any;
  selectedCollectionId: any | null;
  setSelectedCollectionId: any;
  selectedCategoryId: any | null;
  setSelectedCategoryId: any;
  selectedAuthorId: any | null;
  setSelectedAuthorId: any;
  selectedSaleTypeId: any | null;
  setSelectedSaleTypeId: any;
  selectedSortOption: any | null;
  setSelectedSortOption: any;
};

function Filters(props: FiltersProps) {
  const { theme } = props;
  const { selectedBlockchainId, setSelectedBlockchainId } = props;
  const {
    selectedPriceRange,
    setSelectedPriceRange,
    selectedCoinId,
    setSelectedCoinId,
  } = props;
  const { selectedCollectionId, setSelectedCollectionId } = props;
  const { selectedCategoryId, setSelectedCategoryId } = props;
  const { selectedAuthorId, setSelectedAuthorId } = props;
  const { selectedSaleTypeId, setSelectedSaleTypeId } = props;
  const { selectedSortOption, setSelectedSortOption } = props;

  return (
    <div className={styles.filters}>
      <FilterBlockchain
        selectedBlockchainId={selectedBlockchainId}
        setSelectedBlockchainId={setSelectedBlockchainId}
        theme={theme}
      />
      <FilterPrice
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
        selectedCoinId={selectedCoinId}
        setSelectedCoinId={setSelectedCoinId}
        theme={theme}
      />
      <FilterCollection
        selectedCollectionId={selectedCollectionId}
        setSelectedCollectionId={setSelectedCollectionId}
        theme={theme}
      />
      <FilterCategory
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
        theme={theme}
      />
      <FilterAuthor
        selectedAuthorId={selectedAuthorId}
        setSelectedAuthorId={setSelectedAuthorId}
        theme={theme}
      />
      <FilterSaleType
        selectedSaleTypeId={selectedSaleTypeId}
        setSelectedSaleTypeId={setSelectedSaleTypeId}
        theme={theme}
      />
      <SortButton
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
        theme={theme}
      />
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(Filters);
