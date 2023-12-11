import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GrnyPasekNawigacyjny1 from "../components/GrnyPasekNawigacyjny1";
import Property1Variant5 from "../components/Property1Variant5";
import "./Quiz1.css";

const Quiz1 = () => {
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
    <div className="quiz-1">
      <div className="maska-z-cieniem12" />
      <img className="maski-dla-ta4" alt="" src="/maski-dla-ta2.svg" />
      <div className="maska-z-cieniem12" />
      <div className="kafelki2">
        <div className="pytanie-810">Pytanie 8/10</div>
        <div className="jak-nazywa-si">
          Jak nazywa się najjaśniejsza gwiazda na nocnym niebie?
        </div>
      </div>
      <button className="przyciski-wyboru9">
        <div className="nastpne-pytanie">Następne pytanie</div>
      </button>
      <div className="odpowiedzi">
        <div className="odpowiedz-1">
          <div className="betelgeza">Betelgeza</div>
        </div>
        <div className="odpowiedz-2">
          <div className="betelgeza">Syriusz</div>
        </div>
        <div className="odpowiedz-3">
          <div className="betelgeza">Wega</div>
        </div>
      </div>
      <div className="czas">
        <div className="czas-child" />
        <img className="czas-item" alt="" src="/ellipse-6.svg" />
        <div className="czas-inner" />
        <b className="b">23</b>
      </div>
      <div className="liczba-odpowiedzi">
        <b className="b1">04</b>
        <b className="b2">03</b>
        <div className="liczba-odpowiedzi-child" />
        <div className="liczba-odpowiedzi-item" />
      </div>
      <div className="quiz">Quiz</div>
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

export default Quiz1;
