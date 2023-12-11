import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant5 from "../components/Property1Variant5";
import ContainerMenu from "../components/ContainerMenu";
import "./Mapa.css";

const Mapa = () => {
  const navigate = useNavigate();

  const onIkonkaStronyGwnejClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onIkonkaKataloguClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  const onIkonkaGaleriiClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="mapa3">
      <img
        className="constellations-map-equ1110112-icon"
        alt=""
        src="/constellations-map-equ1110112-1@2x.png"
      />
      <div className="dolny-pasek-nawigacyjny7">
        <Property1Variant5
          dimensions="/ikonka-strony-gwnej.svg"
          productDimensions="/ikonka-katalogu.svg"
          productDimensionsText="/ikonka-galerii.svg"
          productDimensionsCode="/ikonka-mapy2.svg"
          propTop="unset"
          propLeft="unset"
          propWidth="20.46rem"
          propHeight="2.94rem"
          propRight="unset"
          propBottom="unset"
          propPosition="relative"
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
          onIkonkaStronyGwnej4Click={onIkonkaStronyGwnejClick}
          onIkonkaKataloguIcon4Click={onIkonkaKataloguClick}
          onIkonkaMapyIcon4Click={onIkonkaGaleriiClick}
        />
      </div>
      <div className="mapa4">Mapa</div>
      <ContainerMenu />
    </div>
  );
};

export default Mapa;
