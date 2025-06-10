import styled from 'styled-components';

export const StyledAudioPlayer = styled.div`
  width: 230px;
  height: 54px;
  position: absolute;
  top: 50%;
  margin-top: -27px;
  left: 50%;
  margin-left: -115px;
  background: linear-gradient(
      267.32deg,
      rgba(179, 100, 226, 0.4) -34.2%,
      rgba(87, 165, 248, 0.4) 85.42%
    ),
    #ffffff;
  backdrop-filter: blur(35px);
  border-radius: 54px;
  display: flex;
  flex-direction: row;
  justify-content: left;

  .fileDropAreaAudioControl {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: white;
    margin-top: 12px;
    margin-left: 12px;
    padding: 3px;
    color: #57a5f8 !important;
  }

  .fileDropAreaAudioWavesHolder {
    width: 160px;
    height: 30px;
    overflow: hidden;
    margin-top: 12px;
    margin-left: 6px;

    .fileDropAreaAudioWaves {
      margin: 0;
      padding: 0;
      width: 100%;
    }
  }
`;
