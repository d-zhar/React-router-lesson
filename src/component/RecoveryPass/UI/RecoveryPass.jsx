import ButtonLogin from "../../ButtonLogin/UI/ButtonLogin";
import ButtonLogin2 from "../../ButtonLogin2/UI/ButtonLogin2";
import s from "./RecoveryPass.module.scss";

const RecoveryPass = () => {
  return (
    <div className={s.RecoveryPass}>
      <p className={s.tittle}>Восстановление пароля</p>
      <p className={s.text}>
        Для восстановления пароля, пожалуйста, введите email, который Вы
        указывали при регистрации.
      </p>
      <p className={s.email_pass_style}>Email</p>
      <input type="text" className={s.email_input} />
      <ButtonLogin>Выслать письмо</ButtonLogin>
      <ButtonLogin2>Отмена</ButtonLogin2>
      <div className={s.support}>
        <p className={s.support_text_style}>
          Если у Вас возникли проблемы обратитесь
        </p>
        <div className={s.support_line2}>
          <p className={s.support_text_style}>в службу поддержки клиентов</p>
          <a className={s.support_link} href="">
            gvegass@yandex.ru
          </a>
        </div>
      </div>
    </div>
  );
};
export default RecoveryPass;
