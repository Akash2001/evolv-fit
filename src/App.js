import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/container';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Container />} />
        </Routes>
      </Router>
  );
}

export default App;
