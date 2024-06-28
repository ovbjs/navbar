import { FC } from "react";
import { ITabType } from "./Navbar";
import * as S from "./Tab.styled";

interface IProps extends ITabType {
  key: number;
  active: boolean;
  setActive: (value: string) => void;
  className?: string;
  activeColor: string;
  color: string;
}

const Tab: FC<IProps> = ({
  value,
  label,
  active,
  setActive,
  className,
  activeColor,
  color,
}) => {
  const handleSelect = () => {
    setActive(value);
  };

  return (
    <>
      <S.Input
        type="radio"
        name={value}
        id={value}
        checked={active}
        onChange={handleSelect}
      />
      <S.Label
        htmlFor={value}
        onClick={handleSelect}
        className={className}
        $active={active}
        $activeColor={activeColor}
        $color={color}
      >
        {label}
      </S.Label>
    </>
  );
};

export default Tab;
