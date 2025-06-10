import styled from 'styled-components';

type TitleProps = {
  text: string;
  fontSize: string;
  fontWeight: string;
  theme: string;
};

const Text = styled.div<{
  theme: string;
  fontSize: string;
  fontWeight: string;
}>`
  color: ${(props) => (props.theme === 'theme-light' ? '#333333' : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '52px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  @media (max-width: 320px) {
    font-size: 24px;
  }
`;

const PrimaryColorTitle = (props: TitleProps) => {
  const { text, fontSize, fontWeight, theme } = props;
  return (
    <Text fontSize={fontSize} fontWeight={fontWeight} theme={theme}>
      {text}
    </Text>
  );
};

export default PrimaryColorTitle;
