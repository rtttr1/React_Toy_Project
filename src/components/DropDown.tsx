import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import styled from 'styled-components';

interface DropDownprops {
  dropDownText: string;
  handleDropDownClick: string;
}

const DropDown = (props: DropDownprops) => {
  const { dropDownText, handleDropDownClick } = props;

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <button onClick={handleDropDownClick} value={'최근 생성순'}>
          최근 생성순
        </button>
      ),
    },
    {
      key: '2',
      label: (
        <button onClick={handleDropDownClick} value={'최근 수정순'}>
          최근 수정순
        </button>
      ),
    },
    {
      key: '3',
      label: (
        <button onClick={handleDropDownClick} value={'북마크'}>
          북마크
        </button>
      ),
    },
  ];
  return (
    <DropDownBtn menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
      <Button>
        {dropDownText}
        <DownOutlined />
      </Button>
    </DropDownBtn>
  );
};

export default DropDown;

const DropDownBtn = styled(Dropdown)`
  width: 12rem;
  padding: 1.77rem;

  color: ${({ theme }) => theme.text_color};

  background-color: ${({ theme }) => theme.content_color};
  box-shadow: none;
  border: none;
  border-radius: 10px;
  ${({ theme }) => theme.fonts.body01_middle};
`;
