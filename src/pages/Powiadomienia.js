import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant5 from "../components/Property1Variant5";
import "./Powiadomienia.css";

const Powiadomienia = () => {
  const navigate = useNavigate();

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

  const onZamknijIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="powiadomienia1">
      <div className="content">
        <div className="logowanie-z-nieznanego">
          Logowanie z nieznanego urządzenia
        </div>
        <div className="content-child" />
        <div className="logowanie-zakoczone-powodzeni">
          Logowanie zakończone powodzeniem
        </div>
        <div className="content-item" />
        <div className="content-inner" />
        <div className="kto-prbuje-zalogowa">
          Ktoś próbuje zalogować się do Twojego konta z...
        </div>
        <div className="udao-ci-si">
          Udało Ci się poprawnie zalogować do konta z u...
        </div>
        <div className="logowanie-zakoczone-powodzeni1">
          Logowanie zakończone powodzeniem
        </div>
        <div className="udao-ci-si1">
          Udało Ci się poprawnie zalogować do konta z u...
        </div>
        <img className="content-child1" alt="" src="/vector-14.svg" />
        <img className="content-child2" alt="" src="/vector-15.svg" />
        <img className="content-child3" alt="" src="/vector-16.svg" />
        <div className="filter" />
      </div>
      <div className="powiadomienia2">Powiadomienia</div>
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
      <img
        className="grny-pasek-nawigacyjny7"
        alt=""
        src="/grny-pasek-nawigacyjny.svg"
      />
      <img
        className="zamknij-icon2"
        alt=""
        src="/zamknij.svg"
        onClick={onZamknijIconClick}
      />
    </div>
  );
};

export default Powiadomienia;
