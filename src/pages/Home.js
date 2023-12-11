import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormPanel from "../components/FormPanel";
import ContainerNewsy from "../components/ContainerNewsy";
import NewsyContainer from "../components/NewsyContainer";
import NewsyCard from "../components/NewsyCard";
import MapaContainer from "../components/MapaContainer";
import GrnyPasekNawigacyjny1 from "../components/GrnyPasekNawigacyjny1";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="home3">
      <FormPanel />
      <h1 className="witaj-user">Witaj, user</h1>
      <main className="newsy6">
        <ContainerNewsy />
        <NewsyContainer />
        <NewsyCard />
      </main>
      <MapaContainer />
      <GrnyPasekNawigacyjny1
        grnyPasekNawigacyjnyPosition="absolute"
        grnyPasekNawigacyjnyTop="3.81rem"
        grnyPasekNawigacyjnyLeft="1.63rem"
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
    </div>
  );
};

export default Home;
