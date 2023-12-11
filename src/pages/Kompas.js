import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GrnyPasekNawigacyjny1 from "../components/GrnyPasekNawigacyjny1";
import Property1Variant5 from "../components/Property1Variant5";
import "./Kompas.css";

const Kompas = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onIkonkaStronyGwnejClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onIkonkaKataloguClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  const onIkonkaMapyClick = useCallback(() => {
    navigate("/mapa");
  }, [navigate]);

  const onIkonkaGaleriiClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <div className="kompas">
      <div className="kompas1">Kompas</div>
      <div className="maska-z-cieniem11" />
      <GrnyPasekNawigacyjny1
        grnyPasekNawigacyjnyPosition="absolute"
        grnyPasekNawigacyjnyTop="3.81rem"
        grnyPasekNawigacyjnyLeft="1.63rem"
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
      <Property1Variant5
        dimensions="/ikonka-strony-gwnej.svg"
        productDimensions="/ikonka-katalogu.svg"
        productDimensionsText="/ikonka-mapy.svg"
        productDimensionsCode="/ikonka-galerii.svg"
        propTop="43.75rem"
        propLeft="calc(50% - 169px)"
        propWidth="20.46rem"
        propHeight="2.94rem"
        propRight="unset"
        propBottom="unset"
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
        onIkonkaStronyGwnej4Click={onIkonkaStronyGwnejClick}
        onIkonkaKataloguIcon4Click={onIkonkaKataloguClick}
        onIkonkaMapyIcon4Click={onIkonkaMapyClick}
        onIkonkaMapyIconClick={onIkonkaGaleriiClick}
      />
    </div>
  );
};

export default Kompas;
