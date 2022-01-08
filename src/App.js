import './App.css';
import Adduser from './components/pageLayouts/Adduser';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/pageLayouts/Home'
import PageNotfound from './components/pageLayouts/PageNotfound';
import Edituser from './components/pageLayouts/Edituser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="adduser" element={<Adduser />} />
        <Route path="edituser/:id" element={<Edituser />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </div>
  );
}

export default App;
