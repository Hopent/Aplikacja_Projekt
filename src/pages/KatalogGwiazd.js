import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant5 from "../components/Property1Variant5";
import GrnyPasekNawigacyjny1 from "../components/GrnyPasekNawigacyjny1";
import "./KatalogGwiazd.css";

const KatalogGwiazd = () => {
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

  const onPrzyciskWyboruPlanetyClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  return (
    <div className="katalog-gwiazd">
      <div className="katalog-gwiazd1">Katalog gwiazd</div>
      <img className="maski-dla-ta3" alt="" src="/maski-dla-ta1.svg" />
      <div className="przyciski-wyboru8">
        <div className="planety3">
          <div
            className="przycisk-wyboru-planety"
            onClick={onPrzyciskWyboruPlanetyClick}
          />
          <b className="planety4">Planety</b>
        </div>
        <div className="gwiazdy3">
          <b className="gwiazdy4">Gwiazdy</b>
        </div>
      </div>
      <div className="kafelki1">
        <div className="faza-ksiyca4">
          <div className="gwiazdozbir-agla">Gwiazdozbiór Żagla</div>
          <b className="delta-velorum">Delta Velorum</b>
          <div className="ly-od-soca">81 ly od Słońca</div>
          <img className="giphy-1-icon1" alt="" src="/giphy-11@2x.png" />
        </div>
        <div className="faza-ksiyca4">
          <div className="gwiazdozbir-agla">Gwiazdozbiór Żagla</div>
          <b className="suhail">Suhail</b>
          <div className="ly-od-soca1">454 ly od Słońca</div>
          <img className="giphy-2-icon1" alt="" src="/giphy-21@2x.png" />
        </div>
        <div className="faza-ksiyca4">
          <div className="gwiazdozbir-psa">Gwiazdozbiór Psa</div>
          <b className="syriusz">Syriusz</b>
          <div className="ly-od-soca2">8,6 ly od Słońca</div>
          <img className="giphy-3-icon1" alt="" src="/giphy-32@2x.png" />
        </div>
        <div className="faza-ksiyca4">
          <div className="gwiazdozbir-wolarza">Gwiazdozbiór Wolarza</div>
          <b className="akrtur">Akrtur</b>
          <div className="ly-od-od">37 ly od od Słońca</div>
          <img className="giphy-4-icon1" alt="" src="/giphy-41@2x.png" />
        </div>
      </div>
      <div className="dolny-pasek-nawigacyjny6">
        <div className="maska-z-cieniem7" />
        <div className="maska-z-cieniem7" />
        <div className="maska-z-cieniem7" />
        <div className="maska-z-cieniem10" />
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

export default KatalogGwiazd;
