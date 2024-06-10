import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { BtnColor } from '../constants';
import { currentModeState } from '../recoil/modeAtom';

const Header = () => {
  const setCurrentMode = useSetRecoilState(currentModeState);

  const handleThemeChange = () => {
    setCurrentMode((prevState) => (prevState === 'LIGHT' ? 'DARK' : 'LIGHT'));
  };

  return (
    <HeaderWrapper>
      <HeaderButtonWrapper>
        <ColorBtnList>
          {BtnColor.map((color, index) => {
            return <ColorBtn key={index} color={color}></ColorBtn>;
          })}
        </ColorBtnList>
        <ThemeBtn type="button" onClick={handleThemeChange}>
          모드
        </ThemeBtn>
      </HeaderButtonWrapper>
      <HeaderTitle>홍 노트</HeaderTitle>
      <HeaderDescription>리액트 스터디 모각공 언제 열어주세요?</HeaderDescription>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const HeaderButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColorBtnList = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

const ColorBtn = styled.button<{ color: string }>`
  width: 1rem;
  height: 1rem;

  background-color: ${(props) => props.theme.colors[props.color]};
  cursor: pointer;
  border-radius: 5px;
`;

const ThemeBtn = styled.button``;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading00};
  margin-top: 2rem;
`;

const HeaderDescription = styled.p`
  ${({ theme }) => theme.fonts.title01};
  margin-top: 0.6rem;
`;
