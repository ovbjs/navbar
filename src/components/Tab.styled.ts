import styled from "styled-components";

interface IProps {
  $activeColor: string;
  $activeEffect?: string;
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
  box-shadow: ${({ $active, $activeEffect }) => $active && $activeEffect};
`;

const Input = styled.input`
  display: none;
`;

export { Label, Input };
