import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant5 from "./Property1Variant5";
import "./DolnyPasekNawigacyjny.css";

const DolnyPasekNawigacyjny = () => {
  const navigate = useNavigate();

  const onIkonkaStronyGwnejClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onIkonkaMapyIconClick = useCallback(() => {
    navigate("/mapa");
  }, [navigate]);

  const onIkonkaKataloguIconClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  return (
    <div className="dolny-pasek-nawigacyjny2">
      <Property1Variant5
        dimensions="/ikonka-strony-gwnej.svg"
        productDimensions="/ikonka-katalogu1.svg"
        productDimensionsText="/ikonka-galerii.svg"
        productDimensionsCode="/ikonka-mapy.svg"
        propTop="20px"
        propLeft="calc(50% - 163.7px)"
        propWidth="327.4px"
        propHeight="47px"
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
        propCursor1="unset"
        propWidth3="9.19%"
        propRight2="57.21%"
        propRight3="4.67%"
        propLeft4="86.13%"
        propCursor2="unset"
        propWidth4="9.19%"
        propTop1="0%"
        propRight4="30.94%"
        propBottom1="37.87%"
        propLeft5="59.87%"
        propCursor3="pointer"
        propWidth5="9.19%"
        onIkonkaStronyGwnej4Click={onIkonkaStronyGwnejClick}
        onIkonkaMapyIconClick={onIkonkaMapyIconClick}
      />
      <Property1Variant5
        dimensions="/dolny-pasek-nawigacyjnyvariant5.svg"
        productDimensions="/ikonka-katalogu.svg"
        productDimensionsText="/ikonka-galerii.svg"
        productDimensionsCode="/ikonka-mapy.svg"
        propTop="87px"
        propLeft="calc(50% - 163.7px)"
        propWidth="327.4px"
        propHeight="47px"
        propRight="unset"
        propBottom="unset"
        propPosition="absolute"
        propAlignSelf="unset"
        propWidth1="24.43%"
        propLeft1="28.71%"
        propLeft2="54.98%"
        propCursor="unset"
        propWidth2="9.19%"
        propRight1="83.17%"
        propLeft3="7.64%"
        propCursor1="pointer"
        propWidth3="9.19%"
        propRight2="57.21%"
        propRight3="4.67%"
        propLeft4="86.13%"
        propCursor2="unset"
        propWidth4="9.19%"
        propTop1="0%"
        propRight4="30.94%"
        propBottom1="37.87%"
        propLeft5="59.87%"
        propCursor3="pointer"
        propWidth5="9.19%"
        onIkonkaKataloguIcon4Click={onIkonkaKataloguIconClick}
        onIkonkaMapyIconClick={onIkonkaMapyIconClick}
      />
      <Property1Variant5
        dimensions="/ikonka-strony-gwnej.svg"
        productDimensions="/ikonka-katalogu.svg"
        productDimensionsText="/ikonka-galerii.svg"
        productDimensionsCode="/ikonka-mapy2.svg"
        propTop="154px"
        propLeft="calc(50% - 163.7px)"
        propWidth="327.4px"
        propHeight="47px"
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
        propRight3="4.67%"
        propLeft4="86.13%"
        propCursor2="unset"
        propWidth4="9.19%"
        propTop1="0%"
        propRight4="30.94%"
        propBottom1="37.87%"
        propLeft5="59.87%"
        propCursor3="unset"
        propWidth5="9.19%"
        onIkonkaStronyGwnej4Click={onIkonkaStronyGwnejClick}
        onIkonkaKataloguIcon4Click={onIkonkaKataloguIconClick}
      />
      <Property1Variant5
        dimensions="/ikonka-strony-gwnej.svg"
        productDimensions="/ikonka-katalogu.svg"
        productDimensionsText="/ikonka-galerii1.svg"
        productDimensionsCode="/ikonka-mapy.svg"
        propTop="221px"
        propLeft="calc(50% - 163.7px)"
        propWidth="327.4px"
        propHeight="47px"
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
        propRight3="4.09%"
        propLeft4="85.83%"
        propCursor2="unset"
        propWidth4="10.08%"
        propTop1="0%"
        propRight4="30.94%"
        propBottom1="37.87%"
        propLeft5="59.87%"
        propCursor3="pointer"
        propWidth5="9.19%"
        onIkonkaStronyGwnej4Click={onIkonkaStronyGwnejClick}
        onIkonkaKataloguIcon4Click={onIkonkaKataloguIconClick}
        onIkonkaMapyIconClick={onIkonkaMapyIconClick}
      />
      <div className="property-1variant5">
        <b className="home2">Home</b>
        <b className="katalog2">Katalog</b>
        <b className="galeria6">Galeria</b>
        <b className="mapa2">Mapa</b>
        <img
          className="ikonka-strony-gwnej2"
          alt=""
          src="/ikonka-strony-gwnej.svg"
          onClick={onIkonkaStronyGwnejClick}
        />
        <img
          className="ikonka-katalogu-icon1"
          alt=""
          src="/ikonka-katalogu.svg"
          onClick={onIkonkaKataloguIconClick}
        />
        <img
          className="ikonka-mapy-icon2"
          alt=""
          src="/ikonka-mapy.svg"
          onClick={onIkonkaMapyIconClick}
        />
        <img
          className="ikonka-galerii-icon1"
          alt=""
          src="/ikonka-galerii.svg"
        />
      </div>
    </div>
  );
};

export default DolnyPasekNawigacyjny;
