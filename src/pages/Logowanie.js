import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant3 from "../components/Property1Variant3";
import LoginFormContainer from "../components/LoginFormContainer";
import Property1GoogleButton from "../components/Property1GoogleButton";
import "./Logowanie.css";

const Logowanie = () => {
  const navigate = useNavigate();

  const onPrzyciskClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onZamknijClick = useCallback(() => {
    navigate("/ekran-powitalny");
  }, [navigate]);

  const onRejestracjaClick = useCallback(() => {
    navigate("/rejestracja");
  }, [navigate]);

  return (
    <div className="logowanie">
      <button className="zamknij3" autoFocus={true} onClick={onZamknijClick}>
        <img className="vector-icon8" alt="" src="/vector.svg" />
        <img className="vector-icon8" alt="" src="/vector1.svg" />
        <img className="vector-icon10" alt="" src="/vector2.svg" />
      </button>
      <div className="frame2" />
      <div className="frame2">
        <img className="maski-dla-ta" alt="" src="/maski-dla-ta.svg" />
        <div className="przyciski-wyboru5">
          <button className="zaloguj-si">
            <b className="zaloguj-si1">Zaloguj się</b>
          </button>
          <button className="rejestracja" onClick={onRejestracjaClick}>
            <b className="rejestracja1">Rejestracja</b>
          </button>
        </div>
        <div className="maska-z-cieniem2" />
        <Property1Variant3
          buttonText="Zaloguj się"
          property1Variant3Cursor="pointer"
          property1Variant3Border="none"
          property1Variant3Padding="0"
          property1Variant3BackgroundColor="transparent"
          property1Variant3Position="absolute"
          property1Variant3BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          property1Variant3Height="8.17%"
          property1Variant3Top="65.36%"
          property1Variant3Bottom="26.48%"
          property1Variant3Left="calc(50% - 90.45px)"
          rectangleDivBackgroundColor="2px solid #ffcb74"
          rectangleDivBoxShadow="0px 20px 60px rgba(255, 203, 116, 0.2)"
          rectangleDivCursor="pointer"
          rectangleDivBorder="none"
          rectangleDivPadding="0"
          nextLeft="23.89%"
          nextFontFamily="Montserrat"
          nextColor="#fdfdfd"
          nextDisplay="inline-block"
          nextFontWeight="600"
          nextFontSize="16px"
          onPrzyciskClick={onPrzyciskClick}
        />
        <div className="zaloguj-si2">Zaloguj się</div>
        <LoginFormContainer />
        <div className="lub-zaloguj-si-za-pomoc-parent">
          <div className="lub-zaloguj-si">lub zaloguj się za pomocą</div>
          <Property1GoogleButton
            dimensionCode="/2659939281579738432-11.svg"
            property1GoogleButtonPosition="relative"
            groupDivWidth="55.53%"
            groupDivRight="21.95%"
            groupDivLeft="22.53%"
            googleLeft="36.49%"
            googleFontFamily="Montserrat"
            iconWidth="27.11%"
            iconRight="72.89%"
          />
        </div>
      </div>
    </div>
  );
};

export default Logowanie;
