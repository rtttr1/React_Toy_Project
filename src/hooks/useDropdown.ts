import { useEffect, useState } from 'react';

import { memoDataType } from '../types';

const useDropdown = () => {
  const initialData = JSON.parse(localStorage.getItem('dataList')!);
  const [memoList, setMemoList] = useState(initialData);
  const [dropDownText, setDropDownText] = useState('최근 생성순');

  // 드랍다운 함수
  useEffect(() => {
    switch (dropDownText) {
      case '북마크':
        setMemoList(memoList.filter((memo: memoDataType) => memo.bookMark));
        break;
      case '최근 생성순':
        setMemoList(initialData.reverse());
        break;
      case '최근 수정순':
        setMemoList(initialData.sort());
        console.log(memoList);
        break;
    }
  }, [dropDownText]);

  return { memoList, setMemoList, dropDownText, setDropDownText };
};

export default useDropdown;
