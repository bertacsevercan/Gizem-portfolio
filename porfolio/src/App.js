import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./containers/MainContent";
import SideNav from "./components/SideNav";
import RightSider from "./components/RightSider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
// import Footer from "./components/Footer";
// import ReactGA from "react-ga";
// import { useEffect } from "react";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Router>
          <SideNav />
          <MainContent />
          <RightSider />
          {/*    <Footer /> */}
        </Router>
      </div>
    </I18nextProvider>
  );
}

export default App;
