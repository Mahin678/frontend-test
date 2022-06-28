import './App.css';
import DeviceDashboard from './Component/DeviceDashboard/DeviceDashboard';
import LoginForm from './Component/LoginForm/LoginForm';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<LoginForm />} />
        <Route path="/device" element={<DeviceDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
