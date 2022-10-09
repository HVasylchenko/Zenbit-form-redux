import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
