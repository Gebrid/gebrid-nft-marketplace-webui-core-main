import {
  faAngleRight,
  faArrowRightArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import styled from 'styled-components';

type FilterButtonProps = {
  filterName: string;
  theme: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isSortButton?: boolean;
};

const FilterButtonStyle = styled.div`
  color: ${(props) => (props.theme === 'theme-light' ? '#333333' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 19px;
  gap: 8px;
  border: 1px solid lightgray;
  border-radius: 24px;
  font-weight: 600;
  position: relative;
`;

const DropDownDiv = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background: ${(props) =>
    props.theme === 'theme-light' ? '#ffffff' : '#333333'};
  border: 1px solid lightgray;
  border-radius: 16px;
  z-index: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const FilterButton = (props: FilterButtonProps) => {
  const { filterName, children, theme, isOpen, setIsOpen, isSortButton } =
    props;
  const id = `filterButton_${filterName.replace(' ', '_')}`;

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event: any) => {
    if (!event.target.closest(`#${id}`)) {
      setIsOpen(false);
    }
    console.log(!!event.target.closest(`#${id}`));
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return (
    <FilterButtonStyle theme={theme} id={id}>
      <div style={{ display: 'flex', columnGap: '8px' }} onClick={onClick}>
        {isSortButton && (
          <div style={{ transform: 'rotate(90deg)' }}>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
          </div>
        )}
        {filterName}
        {!isSortButton && (
          <div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        )}
      </div>
      <DropDownDiv theme={theme} style={{ display: isOpen ? 'block' : 'none' }}>
        {children}
      </DropDownDiv>
    </FilterButtonStyle>
  );
};

export default FilterButton;
