import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GrnyPasekNawigacyjny1 from "./GrnyPasekNawigacyjny1";
import "./ContainerMenu.css";

const ContainerMenu = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="grny-pasek-nawigacyjny8">
      <div className="maska-z-cieniem18" />
      <b className="menu5">Menu</b>
      <GrnyPasekNawigacyjny1
        grnyPasekNawigacyjnyPosition="absolute"
        grnyPasekNawigacyjnyTop="4rem"
        grnyPasekNawigacyjnyLeft="3.44rem"
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
    </div>
  );
};

export default ContainerMenu;
