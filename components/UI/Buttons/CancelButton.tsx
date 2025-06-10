import styled from 'styled-components';

export const StyledButtonNoBorder = styled.button``;

export const CancelButton = () => {
  return (
    <button className="rounded-[27px] p-[2rem_4rem] border border-[1px_solid_#3333334D]">
      <span className="font-bold text-xs">Cancel</span>
    </button>
  );
};
