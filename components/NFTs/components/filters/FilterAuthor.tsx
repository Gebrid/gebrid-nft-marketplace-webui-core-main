import { useEffect, useState } from 'react';
import FilterButton from '../../../UI/Buttons/FilterButton';
import GradientButton, {
  ColorDirection,
} from '../../../UI/Buttons/GradientButton';
import SecondaryButton from '../../../UI/Buttons/SecondaryButton';
import SelectButton from '../../../UI/Buttons/SelectButton';
import FilterSearchBox from '../../../UI/SearchBoxes/FilterSearchBox';
import styles from '../../styles/Filters.module.scss';

type FilterAuthorProps = {
  theme: string | 'theme-light' | 'theme-dark';
  selectedAuthorId: any;
  setSelectedAuthorId: (authorId: any) => void;
};

type Authors = {
  author1?: boolean;
  author2?: boolean;
  author3?: boolean;
};

const FilterAuthor = (props: FilterAuthorProps) => {
  const { theme, selectedAuthorId, setSelectedAuthorId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [authors, setAuthors] = useState<Authors>({});

  useEffect(() => {
    setAuthors(selectedAuthorId);
  }, [selectedAuthorId, isOpen]);

  return (
    <FilterButton
      theme={theme}
      filterName={'Author'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <FilterSearchBox theme={theme} />

      <SelectButton
        image="/images/collections-img-mini.png"
        title={'Author 1'}
        isSelected={authors.author1}
        onClick={() =>
          setAuthors({
            ...authors,
            author1: !authors.author1,
          })
        }
        isDisabled={false}
      />

      <SelectButton
        image="/images/collections-img-mini.png"
        title={'Author 2'}
        isSelected={authors.author2}
        onClick={() =>
          setAuthors({
            ...authors,
            author2: !authors.author2,
          })
        }
        isDisabled={false}
      />

      <SelectButton
        image="/images/collections-img-mini.png"
        title={'Author 3'}
        isSelected={authors.author3}
        onClick={() =>
          setAuthors({
            ...authors,
            author3: !authors.author3,
          })
        }
        isDisabled={false}
      />

      <div className={styles.buttons}>
        <SecondaryButton
          content={'Clear'}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedAuthorId({
              author1: false,
              author2: false,
              author3: false,
            });
            setIsOpen(false);
          }}
        />
        <GradientButton
          content={'Apply'}
          colorDirection={ColorDirection.Reverse}
          padding={'12px 32px'}
          onClick={() => {
            setSelectedAuthorId(authors);
            setIsOpen(false);
          }}
        />
      </div>
    </FilterButton>
  );
};

export default FilterAuthor;
