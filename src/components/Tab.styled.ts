import styled from "styled-components";

interface IProps {
  $activeColor: string;
  $color: string;
  $active: boolean;
}

const Label = styled.label<IProps>`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: ${({ $active, $activeColor, $color }) =>
    $active ? $activeColor : $color};
`;

const Input = styled.input`
  display: none;
`;

export { Label, Input };
