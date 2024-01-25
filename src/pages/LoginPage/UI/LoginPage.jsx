import s from "./LoginPage.module.scss";
import HeaderLogo from "../../../component/HeaderLogo/UI/HeaderLogo";
import LoginToAcc from "../../../component/LoginToAcc/UI/LoginToAcc";

const LoginPage = () => {
  return (
    <div className={s.LoginPage}>
      <HeaderLogo />
      <div className={s.style}>
        <LoginToAcc />
      </div>
    </div>
  );
};

export default LoginPage;
