import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Profile from "./pages/Profile/Profile";
import Library from "./pages/Library/Library";
import Links from "./pages/Links/Links";
import Sale from "./pages/Sales/Sale";
import Home from "./pages/Home/Home";
import Groum from "./pages/Groups/Groum";
import Auth from "./pages/auth/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lib" element={<Library />} />
        <Route path="/links" element={<Links />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/groupcontrol" element={<Groum />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default App
