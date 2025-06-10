import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styled from 'styled-components';

type SelectButtonProps = {
  image?: string;
  title: string | any;
  isSelected?: boolean;
  onClick: Function;
  isDisabled?: boolean;
};

const FilterButtonNotSelected = styled.div`
  padding: 13px 14px;
  display: flex;
  width: 238px;

  &:hover {
    background: linear-gradient(89.97deg, #57a5f8 0.03%, #b364e2 99.97%),
      #ffffff;
    border-radius: 8px;
  }
`;

const FilterButtonSelected = styled(FilterButtonNotSelected)`
  background: linear-gradient(89.97deg, #57a5f8 0.03%, #b364e2 99.97%), #ffffff;
  border-radius: 8px;
`;

const Soon = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(274.54deg, #B364E2 0%, #57A5F8 100%)',
        borderRadius: '4px',
        marginLeft: 'auto',
        fontSize: '12px',
        fontWeight: '500',
      }}
    >
      <div style={{ padding: '4px 12px' }}>Soon</div>
    </div>
  );
};

const SelectButton = (props: SelectButtonProps) => {
  const { image, title, isSelected, onClick, isDisabled } = props;
  const Wrapper = isSelected ? FilterButtonSelected : FilterButtonNotSelected;

  return (
    <Wrapper onClick={() => !isDisabled && onClick()}>
      {image ? (
        <div
          style={{
            width: '20px',
            height: '20px',
            marginRight: '4px',
            opacity: isDisabled ? '0.5' : '1',
          }}
        >
          <Image src={image} width={'20px'} height={'20px'} alt={title} />
        </div>
      ) : null}
      <div style={{ fontWeight: '400', opacity: isDisabled ? '0.5' : '1' }}>
        {title}
      </div>
      {isSelected ? (
        <FontAwesomeIcon icon={faCheck} style={{ marginLeft: 'auto' }} />
      ) : (
        ''
      )}
      {isDisabled ? <Soon /> : ''}
    </Wrapper>
  );
};

export default SelectButton;
