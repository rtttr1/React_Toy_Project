import { useNavigate } from 'react-router-dom';

const usePageNavigate = () => {
  const navigate = useNavigate();

  const goCreateNotePage = () => navigate('/NewNote');
  const goEditNotePage = (index: number) => navigate(`/${index}`);
  const goNoteList = () => navigate('/');
  const goMainPage = () => navigate('/');

  return { goCreateNotePage, goEditNotePage, goNoteList, goMainPage };
};

export default usePageNavigate;
