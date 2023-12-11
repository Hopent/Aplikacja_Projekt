import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant5 from "../components/Property1Variant5";
import GrnyPasekNawigacyjny1 from "../components/GrnyPasekNawigacyjny1";
import "./Quiz.css";

const Quiz = () => {
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

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="quiz1">
      <div className="maska-z-cieniem14" />
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
      <img className="maski-dla-ta5" alt="" src="/maski-dla-ta2.svg" />
      <div className="przyciski-wyboru10">
        <div className="zagraj">Zagraj</div>
      </div>
      <div className="maska-z-cieniem14" />
      <div className="nasz-quiz-o">
        Nasz quiz o kosmosie to doskonała okazja, aby sprawdzić swoją wiedzę na
        temat gwiazd, planet, galaktyk i innych fascynujących fenomenów
        kosmicznych. Czy znasz nazwy największych planet naszego Układu
        Słonecznego? Czy potrafisz rozpoznać gwiazdozbiory na nocnym niebie?
        Przygotuj się na pytania z zakresu astronomii, kosmicznych odkryć i
        fascynujących faktów związanych z nieskończoną przestrzenią.
      </div>
      <div className="kafelki3">
        <div className="opis">Opis:</div>
        <div className="pyta-3-minuty">10 pytań 3 minuty</div>
        <div className="podstawowa-wiedza-na">
          Podstawowa wiedza na temat kosmosu
        </div>
      </div>
      <div className="quiz2">Quiz</div>
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

export default Quiz;
