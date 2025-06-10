import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SearchBox = styled.form`
  display: flex;
  align-items: center;
  align-content: center;
  flex: 0 1 585px;
  border-radius: 42px;
  padding: 14px 32px;
  margin: 0 24px 0 0;
  background: transparent;
  border: 1px solid #c4c4c4;

  @media screen and (max-width: 320px) {
  }

  & > svg {
    width: 12.52px;
    height: 12.84px;
    color: #c4c4c4;
    margin-right: 4px;
  }

  span {
    display: block;
    overflow: hidden;
    padding: 0 5px 0 0;

    input {
      background: transparent;
      outline: none;
      font-size: 14px;
    }
  }
`;

const SearchInput = () => {
  return (
    <SearchBox>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <span>
        <input type="text" placeholder="Search" />
      </span>
      <button type="submit" hidden></button>
    </SearchBox>
  );
};

export default SearchInput;
