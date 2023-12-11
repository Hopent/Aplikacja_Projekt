import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PlanetCard1 from "../components/PlanetCard1";
import Property1Variant5 from "../components/Property1Variant5";
import GrnyPasekNawigacyjny1 from "../components/GrnyPasekNawigacyjny1";
import "./Wenus.css";

const Wenus = () => {
  const navigate = useNavigate();

  const onIkonkaStronyGwnejClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onIkonkaKataloguClick = useCallback(() => {
    navigate("/katalog-gwiazd");
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

  const onPrzyciskiWyboruContainerClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  return (
    <div className="wenus1">
      <div className="wenus2">Wenus</div>
      <img className="maski-dla-ta6" alt="" src="/maski-dla-ta3.svg" />
      <PlanetCard1 />
      <div
        className="przyciski-wyboru11"
        onClick={onPrzyciskiWyboruContainerClick}
      >
        <img
          className="sign-out-squre-fill-icon4"
          alt=""
          src="/sign-out-squre-fill2.svg"
        />
        <b className="powrt">Powrót</b>
      </div>
      <div className="dolny-pasek-nawigacyjny8">
        <Property1Variant5
          dimensions="30.11x29.16x903780701"
          productDimensions="30.11x29.16x-868759621"
          productDimensionsText="30.11x29.16x296294542"
          productDimensionsCode="30.11x29.16x1602215463"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propHeight="2.94rem"
          propRight="unset"
          propBottom="unset"
          propPosition="relative"
          propAlignSelf="stretch"
          propWidth1="24.42%"
          propLeft1="28.72%"
          propLeft2="54.97%"
          propCursor="pointer"
          propWidth2="9.18%"
          propRight1="83.2%"
          propLeft3="7.62%"
          propCursor1="pointer"
          propWidth3="9.18%"
          propRight2="57.23%"
          propRight3="4.7%"
          propLeft4="86.13%"
          propCursor2="unset"
          propWidth4="9.18%"
          propTop1="0%"
          propRight4="30.98%"
          propBottom1="37.87%"
          propLeft5="59.85%"
          propCursor3="pointer"
          propWidth5="9.18%"
          onIkonkaStronyGwnej4Click={onIkonkaStronyGwnejClick}
          onIkonkaKataloguIcon4Click={onIkonkaKataloguClick}
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

export default Wenus;
