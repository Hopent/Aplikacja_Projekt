import { useMemo } from "react";
import "./GrnyPasekNawigacyjny1.css";

const GrnyPasekNawigacyjny1 = ({
  grnyPasekNawigacyjnyPosition,
  grnyPasekNawigacyjnyTop,
  grnyPasekNawigacyjnyLeft,
  onIkonaPowiadomieIconClick,
  onIkonaMenuIconClick,
}) => {
  const grnyPasekNawigacyjnyStyle = useMemo(() => {
    return {
      position: grnyPasekNawigacyjnyPosition,
      top: grnyPasekNawigacyjnyTop,
      left: grnyPasekNawigacyjnyLeft,
    };
  }, [
    grnyPasekNawigacyjnyPosition,
    grnyPasekNawigacyjnyTop,
    grnyPasekNawigacyjnyLeft,
  ]);

  return (
    <div className="grny-pasek-nawigacyjny5" style={grnyPasekNawigacyjnyStyle}>
      <b className="menu2">Menu</b>
      <img
        className="ikona-powiadomie-icon3"
        alt=""
        src="/ikona-powiadomie.svg"
        onClick={onIkonaPowiadomieIconClick}
      />
      <img
        className="ikona-menu-icon1"
        alt=""
        src="/ikona-menu.svg"
        onClick={onIkonaMenuIconClick}
      />
      <img
        className="ikona-wyszukiwarki-icon3"
        alt=""
        src="/ikona-wyszukiwarki.svg"
      />
    </div>
  );
};

export default GrnyPasekNawigacyjny1;
