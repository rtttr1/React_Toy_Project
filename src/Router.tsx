import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreateNotePage from './pages/CreateNotePage';
import EditNotePage from './pages/EditNotePage';
import MainPage from './pages/MainPage';
import NoteList from './pages/NoteList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<NoteList />} />
          <Route path="/NewNote" element={<CreateNotePage />} />
          <Route path="/:id" element={<EditNotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
