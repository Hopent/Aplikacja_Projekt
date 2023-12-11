import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant5 from "../components/Property1Variant5";
import GrnyPasekNawigacyjny1 from "../components/GrnyPasekNawigacyjny1";
import "./KatalogPlanet.css";

const KatalogPlanet = () => {
  const navigate = useNavigate();

  const onIkonkaStronyGwnejClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onIkonkaGaleriiClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  const onIkonkaMapyClick = useCallback(() => {
    navigate("/mapa");
  }, [navigate]);

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onPrzyciskWyboruGwiazdyClick = useCallback(() => {
    navigate("/katalog-gwiazd");
  }, [navigate]);

  return (
    <div className="katalog-planet">
      <div className="katalog-planet1">Katalog planet</div>
      <img className="maski-dla-ta2" alt="" src="/maski-dla-ta1.svg" />
      <div className="przyciski-wyboru7">
        <div className="planety1">
          <b className="planety2">Planety</b>
        </div>
        <div className="gwiazdy1">
          <div
            className="przycisk-wyboru-gwiazdy"
            onClick={onPrzyciskWyboruGwiazdyClick}
          />
          <b className="gwiazdy2">Gwiazdy</b>
        </div>
      </div>
      <div className="kafelki">
        <div className="faza-ksiyca">
          <div className="ukad-soneczny2">Układ słoneczny</div>
          <b className="wenus">Wenus</b>
          <div className="mln-km-od">108 mln km od Słońca</div>
          <img className="giphy-1-icon" alt="" src="/giphy-1@2x.png" />
        </div>
        <div className="faza-ksiyca">
          <img className="giphy-2-icon" alt="" src="/giphy-2@2x.png" />
          <div className="ukad-soneczny2">Układ słoneczny</div>
          <b className="mars">Mars</b>
          <div className="mln-km-od1">170 mln km od Słońca</div>
        </div>
        <div className="faza-ksiyca">
          <img className="giphy-4-icon" alt="" src="/giphy-4@2x.png" />
          <div className="ukad-soneczny4">Układ słoneczny</div>
          <b className="ziemia">Ziemia</b>
          <div className="mln-km-od2">150 mln km od Słońca</div>
        </div>
        <div className="faza-ksiyca">
          <img className="giphy-3-icon" alt="" src="/giphy-31@2x.png" />
          <div className="ukad-soneczny4">Układ słoneczny</div>
          <b className="merkury">Merkury</b>
          <div className="mln-km-od3">58 mln km od Słońca</div>
        </div>
      </div>
      <div className="dolny-pasek-nawigacyjny5">
        <div className="maska-z-cieniem3" />
        <div className="maska-z-cieniem3" />
        <div className="maska-z-cieniem3" />
        <div className="maska-z-cieniem6" />
        <Property1Variant5
          dimensions="/ikonka-strony-gwnej.svg"
          productDimensions="/ikonka-katalogu1.svg"
          productDimensionsText="/ikonka-galerii.svg"
          productDimensionsCode="/ikonka-mapy.svg"
          propTop="56.72%"
          propLeft="10.29%"
          propWidth="78.33%"
          propHeight="11.49%"
          propRight="11.39%"
          propBottom="31.78%"
          propPosition="absolute"
          propAlignSelf="unset"
          propWidth1="24.43%"
          propLeft1="28.71%"
          propLeft2="54.98%"
          propCursor="pointer"
          propWidth2="9.19%"
          propRight1="83.17%"
          propLeft3="7.64%"
          propCursor1="pointer"
          propWidth3="9.19%"
          propRight2="57.21%"
          propRight3="4.67%"
          propLeft4="86.13%"
          propCursor2="unset"
          propTop1="0%"
          propRight4="30.94%"
          propBottom1="37.87%"
          propLeft5="59.87%"
          propCursor3="pointer"
          onIkonkaStronyGwnej4Click={onIkonkaStronyGwnejClick}
          onIkonkaMapyIcon4Click={onIkonkaGaleriiClick}
          onIkonkaMapyIconClick={onIkonkaMapyClick}
        />
      </div>
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

export default KatalogPlanet;
