import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';

type FilterSearchBoxProps = {
  theme: string;
};

const Form = styled.form`
  display: flex;
  flex: 1 1 258px;
  align-items: center;
  align-content: center;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.theme === 'theme-light' ? '#333333' : '#ffffff')};
  padding: 12px 19px;
  background: transparent;
  max-width: 277px;
  margin-bottom: 3px;
`;

const SearchIcon = styled.div`
  width: 18px;
  height: 18px;
  color: #c4c4c4;
  opacity: 0.5;
  margin-right: 4px;
`;

const SearchInput = styled.input`
  flex: 1 1 0%;
  background: transparent;
  outline: none;
  font-size: 14px;
`;

const FilterSearchBox = (props: FilterSearchBoxProps) => {
  const { theme } = props;
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Form theme={theme}>
      <SearchIcon>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchIcon>
      <SearchInput type="text" placeholder="Search" />
      <button type="submit" hidden></button>
    </Form>
  );
};

export default FilterSearchBox;
