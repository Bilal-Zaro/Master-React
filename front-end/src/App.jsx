import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
// import QuranPage from "./pages/Quran";
// import Calling from "./pages/Calling"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/log" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/pro" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/calling" element={<Calling />} /> */}
          {/* <Route path="/quran" element={<QuranPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
