import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/LeftNavBar";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import AllAnnouncements from "./components/AllAnnouncements";
import AnnouncementByID from "./components/AnnouncementById";
import GalleryByID from "./components/GalleryByID";
import Estates from "./components/Estates";
// import Client from "./components/Clients";
import CreateClient from "./components/CreateClient";
import ProfilClient from "./components/ProfilClient";
import MatchesClient from "./components/MatchesClient";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppStyles = styled.div`
  @font-face {
    font-family: "Roboto";
    src: local("Roboto-Regular"),
      url("assets/fonts/Roboto-Regular.ttf") format("truetype");
  }
  .App {
    font-family: "Roboto";
    #Application-Bwii {
      background-color: #121212;
      display: flex;
      #nav {
        background-color: #1c1c1c;
      }
      #main {
        padding: 25px 0px 0px 5px;

        width: 100%;
        color: rgba(203, 203, 203, 0.85);
      }
    }
  }
`;

export default function App() {
  return (
    <AppStyles>
      <main className="App">
        <Router>
          <Header />
          <div id="Application-Bwii">
            <div id="nav">
              <NavBar />
            </div>
            <div id="main">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/all-announcements"
                  element={<AllAnnouncements />}
                />
                <Route
                  path="/announcement/:id"
                  element={<AnnouncementByID />}
                />
                <Route path="/gallery/:id" element={<GalleryByID />} />
                <Route path="/estates" element={<Estates />} />
                {/* <Route path="/clients" element={<Client />} /> */}
                <Route
                  path="/creation-client"
                  element={
                    <CreateClient
                      config={[
                        { header: "PROFIL", component: <ProfilClient /> },
                        { header: "MATCHES", component: <MatchesClient /> },
                      ]}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      </main>
    </AppStyles>
  );
}
