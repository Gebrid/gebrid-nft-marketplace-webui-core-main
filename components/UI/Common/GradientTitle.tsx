import styled from 'styled-components';

type TitleProps = {
  text: string;
  fontSize: string;
  theme: string;
};

const Text = styled.div<{
  theme: string;
  fontSize: string;
}>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '52px')};
  font-weight: 800;
  background: linear-gradient(274.54deg, #b364e2 0%, #57a5f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 320px) {
    font-size: 24px;
  }
`;

const GradientTitle = (props: TitleProps) => {
  const { text, fontSize, theme } = props;
  return (
    <Text theme={theme} fontSize={fontSize}>
      {text}
    </Text>
  );
};

export default GradientTitle;
