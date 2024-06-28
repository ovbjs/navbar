import styled from "styled-components";

interface IProps {
  $width: string;
  $height: string;
  $bgColor?: string;
}

const Container = styled.div<IProps>`
  border-radius: 8px;
  background-color: ${({ $bgColor }) => $bgColor};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 6px;
  box-sizing: border-box;
  overflow: hidden;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const Mask = styled.div<IProps>`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: yellow;
  z-index: 0;
  border-radius: 8px;
  transition: transform 0.4s ease-in-out;
`;

export { Container, Mask };
