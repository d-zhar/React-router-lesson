import s from "./ConfirmEmailPage.module.scss";
import HeaderLogo from "../../../component/HeaderLogo/UI/HeaderLogo";
import EmailConfirm from "../../../component/EmailConfirm/UI/EmailConfirm";

const ConfirmEmailPage = () => {
  return (
    <div className={s.ConfirmEmailPage}>
      <HeaderLogo />
      <div className={s.style}>
        <EmailConfirm />
      </div>
    </div>
  );
};

export default ConfirmEmailPage;
