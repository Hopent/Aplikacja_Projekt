import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SettingsForm from "../components/SettingsForm";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onZamknijIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="menu3">
      <div className="grny-pasek-nawigacyjny6">
        <button className="ikona-powiadomie4" onClick={onIkonaPowiadomieClick}>
          <img
            className="ikona-powiadomie-child4"
            alt=""
            src="/rectangle-1.svg"
          />
          <div className="ikona-powiadomie-child5" />
        </button>
        <img
          className="ikona-wyszukiwarki-icon4"
          alt=""
          src="/ikona-wyszukiwarki.svg"
        />
      </div>
      <img className="menu-child" alt="" src="/ellipse-212@2x.png" />
      <div className="danka122">@danka12</div>
      <b className="danuta2">Danuta</b>
      <div className="menu4">Menu</div>
      <SettingsForm />
      <img
        className="zamknij-icon1"
        alt=""
        src="/zamknij.svg"
        onClick={onZamknijIconClick}
      />
    </div>
  );
};

export default Menu;
