import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Branches from "./pages/Branches";
import AddBranch from './pages/AddBranch';
import UpdateBranch from './pages/UpdateBranch';
import "./App.css";
function App() {
  return (
    <>
      <div className="App">    
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/manage-branches" element={<Branches/>}></Route>
          <Route path="/add-branch" element={<AddBranch/>}></Route>
          <Route path='update-branch' element={<UpdateBranch/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
