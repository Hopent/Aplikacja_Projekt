import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Galeria1.css";

const Galeria1 = () => {
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

  const onIkonaPowiadomieClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="galeria2">
      <div className="dolny-pasek-nawigacyjny">
        <div className="dolny-pasek-nawigacyjny1">
          <b className="home1">Home</b>
          <b className="katalog1">Katalog</b>
          <b className="galeria3">Galeria</b>
          <b className="mapa1">Mapa</b>
          <button
            className="ikonka-strony-gwnej1"
            onClick={onIkonkaStronyGwnejClick}
          >
            <img
              className="ikonka-strony-gwnej-child"
              alt=""
              src="/rectangle-11.svg"
            />
            <img
              className="ikonka-strony-gwnej-item"
              alt=""
              src="/vector-3.svg"
            />
          </button>
          <button className="ikonka-katalogu" onClick={onIkonkaKataloguClick}>
            <img
              className="ikonka-katalogu-child"
              alt=""
              src="/vector-58.svg"
            />
            <img className="ikonka-katalogu-item" alt="" src="/vector-59.svg" />
          </button>
          <button className="ikonka-galerii">
            <img
              className="ikonka-galerii-child"
              alt=""
              src="/rectangle-4017.svg"
            />
            <img
              className="ikonka-galerii-item"
              alt=""
              src="/rectangle-4018.svg"
            />
            <img
              className="ikonka-galerii-inner"
              alt=""
              src="/rectangle-4019.svg"
            />
          </button>
          <button className="ikonka-mapy" onClick={onIkonkaMapyClick}>
            <img className="ikonka-mapy-child" alt="" src="/vector-326.svg" />
            <img className="ikonka-mapy-item" alt="" src="/vector-327.svg" />
            <img className="ikonka-mapy-inner" alt="" src="/vector-328.svg" />
          </button>
        </div>
      </div>
      <div className="galeria4">Galeria</div>
      <div className="galeria5">
        <div className="zdjcie">
          <img className="gwne-icon" alt="" src="/gwne@2x.png" />
          <div className="przyciski-wyboru4">
            <button className="gwiazdy">
              <div className="gwiazdy-child" />
              <img
                className="arrow-alt-lright-icon"
                alt=""
                src="/arrow-alt-lright.svg"
              />
            </button>
            <button className="planety">
              <div className="gwiazdy-child" />
              <img
                className="arrow-alt-left-icon"
                alt=""
                src="/arrow-alt-left.svg"
              />
            </button>
          </div>
        </div>
        <div className="newsy5">
          <div className="kafelek5" />
          <div className="na-zdjciu-moemy5">
            Na zdjęciu możemy podziwiać spiralną galaktykę znaną jako NGC 1232.
            Znajduje się w gwiazdozbiorze Erydanu, około 65 milionów lat
            świetlnych od naszej Ziemi. Jej wirujące ramiona składają się z
            setek miliardów gwiazd, a w centrum widoczne jest jasne jądro, gdzie
            gromadzą się gęste skupiska gwiazd.
          </div>
          <b className="o-zdjciu5">O zdjęciu</b>
          <div className="fot-nasacom5">Fot: NASA.com</div>
          <div className="lis-20235">08 lis 2023</div>
        </div>
      </div>
      <div className="grny-pasek-nawigacyjny4">
        <b className="menu1">Menu</b>
        <button className="ikona-powiadomie3" onClick={onIkonaPowiadomieClick}>
          <img
            className="ikona-powiadomie-child2"
            alt=""
            src="/rectangle-1.svg"
          />
          <div className="ikona-powiadomie-child3" />
        </button>
        <button className="ikona-menu" onClick={onIkonaMenuClick}>
          <img className="ikona-menu-child" alt="" src="/vector-7.svg" />
          <img className="ikona-menu-item" alt="" src="/vector-8.svg" />
          <img className="ikona-menu-inner" alt="" src="/vector-91.svg" />
        </button>
        <button className="ikona-wyszukiwarki3">
          <div className="ikona-wyszukiwarki-child7" />
          <div className="ikona-wyszukiwarki-child8" />
          <img
            className="ikona-wyszukiwarki-child9"
            alt=""
            src="/vector-109.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default Galeria1;
