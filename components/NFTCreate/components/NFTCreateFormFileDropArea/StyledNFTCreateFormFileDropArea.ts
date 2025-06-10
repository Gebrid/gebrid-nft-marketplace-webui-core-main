import styled from 'styled-components';

interface Props {
  isPreview?: boolean;
}

export const StyledNFTCreateFormFileDropArea = styled.section<Props>`
  position: relative;
  width: ${({ isPreview }) => (isPreview ? '310px' : '100%')};

  .fileDropArea {
    background: ${({ theme, isPreview }) =>
      isPreview && theme === 'theme-light'
        ? 'url("/images/create-nft/drop-area-border-light.svg") top left no-repeat'
        : isPreview && theme === 'theme-dark'
        ? 'url("/images/create-nft/drop-area-border-dark.svg") top left no-repeat'
        : ''};

    width: ${({ isPreview }) => (isPreview ? '310px' : '100%')};
    height: ${({ isPreview }) => (isPreview ? '310px' : '100%')};
    min-height: 125px;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ isPreview }) => (isPreview ? '37px 61px' : '0 61px;')};
    border: ${({ isPreview }) => (isPreview ? '' : '1px dashed #dfe1e6')};
    .fileDropAreaContent {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .fileDropAreaDescription {
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
      align-items: center;
      margin-top: 24px;
      padding-bottom: 8px;
      self-align: center;
      opacity: 0.5;
    }

    .fileDropAreaPreview {
      display: inline-block;
      margin: 32px 0;
    }

    .dropAreaRemove {
      width: 32px;
      height: 32px;
      position: absolute;
      top: 16px;
      right: 16px;
      border-radius: 16px;
      cursor: pointer;
    }

    .dropAreaContent {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
  .previewDropAreaDescription {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  .previewDropAreaFileTypes {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    margin-top: 8px;
    opacity: 0.5;
  }
`;
