import { FC, useEffect, useRef, useState } from "react";
import * as S from "./Navbar.styled";
import Tab from "./Tab";

export interface ITabType {
  value: string;
  label: string;
}

interface IProps {
  fullWidth: boolean;
  width?: number;
  height: number;
  bgColor?: string;
  root?: string;
  mask?: string;
  dataLists: ITabType[];
}

const Navbar: FC<IProps> = ({
  fullWidth,
  width,
  height,
  root,
  bgColor,
  dataLists,
  mask,
}) => {
  const [maskWidth, setMaskWidth] = useState<string>("");
  const [selectTab, setSelectTab] = useState<string>(dataLists[0].value);

  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMaskWidth(`${100 / dataLists.length}%`);
  }, [dataLists]);

  useEffect(() => {
    const index = dataLists.findIndex((data) => data.value === selectTab);

    if (maskRef.current) {
      maskRef.current.style.transform = `translate3d(${index * 100}%, 0, 0)`;
    }
  }, [selectTab]);

  return (
    <S.Container
      $width={fullWidth ? "100%" : `${width}px`}
      $height={`${height}px`}
      $bgColor={bgColor || "#eee"}
      className={root}
    >
      <div className="wrapper">
        <S.Mask
          $width={maskWidth}
          $height="100%"
          ref={maskRef}
          className={mask}
        />
        {dataLists.map((data, index) => (
          <Tab
            key={index}
            label={data.label}
            value={data.value}
            active={selectTab === data.value}
            setActive={setSelectTab}
          />
        ))}
      </div>
    </S.Container>
  );
};

export default Navbar;