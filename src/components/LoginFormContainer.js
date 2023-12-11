import PasswordFormContainer from "./PasswordFormContainer";
import "./LoginFormContainer.css";

const LoginFormContainer = () => {
  return (
    <div className="panel-logowania1">
      <div className="zapomniae-hasa">Zapomniałeś hasła?</div>
      <PasswordFormContainer
        credentialsInput="Hasło"
        inputLabel="Wprowadź swoje hasło"
      />
      <PasswordFormContainer
        credentialsInput="Login"
        inputLabel="Wprowadź swój login"
        propTop="0rem"
      />
    </div>
  );
};

export default LoginFormContainer;
