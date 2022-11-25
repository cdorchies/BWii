import MainPageStyle from "./styles";
import Dashboard from "../Dashboard";
import NewClient from "../NewClient";
import ActiveClient from "../ActiveClient";

export default function MainPage() {
  return (
    <MainPageStyle>
      <Dashboard />
      <NewClient />
      <ActiveClient />
    </MainPageStyle>
  );
}
