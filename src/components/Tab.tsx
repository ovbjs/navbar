import { Dispatch, FC, SetStateAction } from "react";
import { ITabType } from "./Navbar";
import * as S from "./Tab.styled";

interface IProps extends ITabType {
  key: number;
  active: boolean;
  setActive: Dispatch<SetStateAction<string>>;
}

const Tab: FC<IProps> = ({ value, label, active, setActive }) => {
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
      <S.Label htmlFor={value} onClick={handleSelect}>
        {label}
      </S.Label>
    </>
  );
};

export default Tab;
