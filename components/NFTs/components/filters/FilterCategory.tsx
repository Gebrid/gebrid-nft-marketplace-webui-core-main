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
  selectedCategoryId: any;
  setSelectedCategoryId: (catrgoryId: any) => void;
};

type Categories = {
  exclusive?: boolean;
  music?: boolean;
  art?: boolean;
  metaverse?: boolean;
  defi?: boolean;
  gamefi?: boolean;
};

const FilterCategory = (props: FilterCategoryProps) => {
  const { theme, selectedCategoryId, setSelectedCategoryId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Categories>({});

  useEffect(() => {
    setCategories(selectedCategoryId);
  }, [selectedCategoryId, isOpen]);

  return (
    <FilterButton
      theme={theme}
      filterName={'Categories'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <SelectButton
        image="/images/mini-exclusive.png"
        title={'Exclusive'}
        isSelected={categories.exclusive}
        onClick={() =>
          setCategories({ ...categories, exclusive: !categories.exclusive })
        }
        isDisabled={false}
      />

      <SelectButton
        image="/images/mini-music.png"
        title={'Music'}
        isSelected={categories.music}
        onClick={() =>
          setCategories({ ...categories, music: !categories.music })
        }
        isDisabled={false}
      />

      <SelectButton
        image="/images/mini-art.png"
        title={'Art'}
        isSelected={categories.art}
        onClick={() => setCategories({ ...categories, art: !categories.art })}
        isDisabled={false}
      />

      <SelectButton
        image="/images/mini-metaverse.png"
        title={'Metaverse'}
        isSelected={categories.metaverse}
        onClick={() =>
          setCategories({ ...categories, metaverse: !categories.metaverse })
        }
        isDisabled={false}
      />

      <SelectButton
        image="/images/mini-DeFi.png"
        title={'DeFi'}
        isSelected={categories.defi}
        onClick={() => setCategories({ ...categories, defi: !categories.defi })}
        isDisabled={false}
      />

      <SelectButton
        image="/images/mini-gameFi.png"
        title={'GameFi'}
        isSelected={categories.gamefi}
        onClick={() =>
          setCategories({ ...categories, gamefi: !categories.gamefi })
        }
        isDisabled={false}
      />

      <div className={styles.buttons}>
        <SecondaryButton
          content={'Clear'}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedCategoryId({
              exclusive: true,
            });
            setIsOpen(false);
          }}
        />
        <GradientButton
          content={'Apply'}
          colorDirection={ColorDirection.Reverse}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedCategoryId(categories);
            setIsOpen(false);
          }}
        />
      </div>
    </FilterButton>
  );
};

export default FilterCategory;
