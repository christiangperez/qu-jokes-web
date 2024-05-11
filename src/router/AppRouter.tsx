import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../features/Home';
import { JokesScreen } from '../features/Jokes/JokesScreen';
import AboutScreen from '../features/About';
import { NotFoundScreen } from '../features/Navbar/pages/NotFound';
import Navbar from '../features/Navbar/components/Navbar';
import { TopTenScreen } from '../features/TopTen';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/jokes" element={<JokesScreen />} />
        <Route path="/top-ten" element={<TopTenScreen />} />
        <Route path="/about" element={<AboutScreen />} />

        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
