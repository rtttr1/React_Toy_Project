import styled from 'styled-components';

import { BookMarkBlankIcon, BookMarkFillIcon } from '../assets';
import usePageNavigate from '../hooks/usePageNavigate';

export interface NoteItemListProps {
  title: string;
  index: number;
  handleBookMark: (index: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  bookMark: boolean;
  fixTime: Date;
}

const NoteListItem = (props: NoteItemListProps) => {
  const { title, index, bookMark, handleBookMark, fixTime } = props;
  const fixedTime = new Date(fixTime);
  console.log(fixedTime.getHours());

  const today = new Date();

  const { goEditNotePage } = usePageNavigate();
  return (
    <NoteItemWrapper onClick={() => goEditNotePage(index)}>
      <InfoSection>
        <NoteItemTitle>{title}</NoteItemTitle>
        <NoteItemDescription>{today.getHours() - fixedTime.getHours()}시간 전 수정했어요</NoteItemDescription>
      </InfoSection>
      <BookMark onClick={(event) => handleBookMark(index, event)}>
        {bookMark ? <BookMarkFillIcon /> : <BookMarkBlankIcon />}
      </BookMark>
    </NoteItemWrapper>
  );
};

export default NoteListItem;

const NoteItemWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.7rem;

  color: ${({ theme }) => theme.text_color};

  background-color: ${({ theme }) => theme.content_color};
  border-radius: 10px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoteItemTitle = styled.h3`
  ${({ theme }) => theme.fonts.heading04};
`;

const NoteItemDescription = styled.p`
  ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.body02_middle};
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.colors.lightgray};
`;

const BookMark = styled.button`
  z-index: 100;
`;
