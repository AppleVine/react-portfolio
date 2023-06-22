import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
