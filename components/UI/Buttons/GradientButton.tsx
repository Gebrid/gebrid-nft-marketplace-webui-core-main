import styled from 'styled-components';

export enum ColorDirection {
  Straight,
  Reverse,
}

type GradientButtonProps = {
  onClick?: () => any;
  content: string;
  padding: string;
  colorDirection: ColorDirection;
  width?: string;
};

const StraightColorButton = styled.button<{
  width: string;
}>`
  color: #ffffff !important;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  background: linear-gradient(89.97deg, #b364e2 0.03%, #57a5f8 99.97%), #ffffff;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  text-align: center;
  width: ${(props) => (props.width ? props.width : '100%')};
`;

const ReversedColorButton = styled(StraightColorButton)`
  background: linear-gradient(89.97deg, #57a5f8 0.03%, #b364e2 99.97%), #ffffff;
`;

function GradientButton(props: GradientButtonProps) {
  const { width, content, onClick, padding } = props;
  const Button =
    props.colorDirection === ColorDirection.Straight
      ? StraightColorButton
      : ReversedColorButton;

  return (
    <Button style={{ padding: padding }} onClick={onClick} width={width || ''}>
      {content}
    </Button>
  );
}

export default GradientButton;
