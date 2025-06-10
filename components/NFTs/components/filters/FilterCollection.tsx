import { useEffect, useState } from 'react';
import FilterButton from '../../../UI/Buttons/FilterButton';
import GradientButton, {
  ColorDirection,
} from '../../../UI/Buttons/GradientButton';
import SecondaryButton from '../../../UI/Buttons/SecondaryButton';
import SelectButton from '../../../UI/Buttons/SelectButton';
import FilterSearchBox from '../../../UI/SearchBoxes/FilterSearchBox';
import styles from '../../styles/Filters.module.scss';

type FilterCollectionProps = {
  theme: string | 'theme-light' | 'theme-dark';
  selectedCollectionId: any;
  setSelectedCollectionId: (collectionId: any) => void;
};

type Collections = {
  collection1?: boolean;
  collection2?: boolean;
  collection3?: boolean;
};

const FilterCollection = (props: FilterCollectionProps) => {
  const { theme, selectedCollectionId, setSelectedCollectionId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [collections, setCollections] = useState<Collections>({});

  useEffect(() => {
    setCollections(selectedCollectionId);
  }, [selectedCollectionId, isOpen]);

  return (
    <FilterButton
      theme={theme}
      filterName={'Collections'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <FilterSearchBox theme={theme} />

      <SelectButton
        image="/images/collections-img-mini.png"
        title={'Collection 1'}
        isSelected={collections.collection1}
        onClick={() =>
          setCollections({
            ...collections,
            collection1: !collections.collection1,
          })
        }
        isDisabled={false}
      />

      <SelectButton
        image="/images/collections-img-mini.png"
        title={'Collection 2'}
        isSelected={collections.collection2}
        onClick={() =>
          setCollections({
            ...collections,
            collection2: !collections.collection2,
          })
        }
        isDisabled={false}
      />

      <SelectButton
        image="/images/collections-img-mini.png"
        title={'Collection 3'}
        isSelected={collections.collection3}
        onClick={() =>
          setCollections({
            ...collections,
            collection3: !collections.collection3,
          })
        }
        isDisabled={false}
      />

      <div className={styles.buttons}>
        <SecondaryButton
          content={'Clear'}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedCollectionId({
              collection1: false,
              collection2: false,
              collection3: false,
            });
            setIsOpen(false);
          }}
        />
        <GradientButton
          content={'Apply'}
          colorDirection={ColorDirection.Reverse}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedCollectionId(collections);
            setIsOpen(false);
          }}
        />
      </div>
    </FilterButton>
  );
};

export default FilterCollection;
