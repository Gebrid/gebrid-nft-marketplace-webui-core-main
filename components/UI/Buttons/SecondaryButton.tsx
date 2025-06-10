import styled from 'styled-components';

export enum ColorMode {
  Light,
  Dark,
}

type SecondaryButtonProps = {
  onClick?: () => any;
  content: string;
  padding?: string;
  theme?: string;
  width?: string;
};

const Button = styled.button<{
  theme: string;
  width: string;
}>`
  color: ${(props) => (props.theme === 'theme-light' ? '#333333' : '#ffffff')};
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  background: transparent;
  border: 1px solid #c4c4c4;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  text-align: center;
  width: ${(props) => (props.width ? props.width : '100%')};
`;

function SecondaryButton(props: SecondaryButtonProps) {
  const { theme, padding, onClick, content, width } = props;

  return (
    <Button
      theme={theme}
      style={{ padding: padding }}
      onClick={onClick}
      width={width || ''}
    >
      {content}
    </Button>
  );
}

export default SecondaryButton;
