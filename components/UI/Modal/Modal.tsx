import { useEffect } from 'react';
import styled from 'styled-components';
import ReactPortal from '../ReactPortal';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  canClose?: boolean;
  handleClose?: () => void;
}

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  z-index: 1;

  border-radius: 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 420px;

  //background-color: white;
  //padding: 2rem;
  //inset: 0;
  //top: 74px;
  //max-height: 300px;
  //width: calc(100% - 40px);
  //height: calc(100% - 40px);
  //margin: auto;
  //overflow-y: auto;

  .modalContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalOverlay = styled.div`
  background: #333333;
  opacity: 0.2;
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
`;

export default function Modal({
  children,
  isOpen,
  canClose = false,
  handleClose,
}: Props) {
  if (!isOpen) return null;

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' && canClose ? handleClose?.() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
  }, [handleClose]);

  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   console.log(body);
  //   body.style.overflow = isOpen ? 'hidden' : 'initial';
  //   return () => {
  //     body.style.overflow = 'initial';
  //   };
  // }, [isOpen]);

  return (
    <ReactPortal selector="react-portal-modal">
      <ModalOverlay onClick={() => handleClose?.()} />
      <StyledModal>
        {/* {canClose && (
          <button className="modalButton" onClick={handleClose}>
            x
          </button>
        )} */}

        <div className="modalContent">{children}</div>
      </StyledModal>
    </ReactPortal>
  );
}
