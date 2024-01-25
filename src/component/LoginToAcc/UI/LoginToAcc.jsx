import ButtonLogin from "../../ButtonLogin/UI/ButtonLogin";
import ButtonLogin2 from "../../ButtonLogin2/UI/ButtonLogin2";
import s from "./LoginToAcc.module.scss";

const LoginToAcc = () => {
  return (
    <div className={s.LoginToAcc}>
      <p className={s.tittle}>Вход в личный кабинет</p>
      <p className={s.email_pass_style}>Email</p>
      <input type="text" className={s.email_input} />
      <div className={s.pass_block_style}>
        <p className={s.email_pass_style}>Пароль</p>
        <a className={s.password_recovery} href="">
          Забыли пароль?
        </a>
      </div>
      <input type="text" className={s.pass_input} />
      <div className={s.checkbox_style}>
        <input type="checkbox" className={s.checkbox} />
        <p className={s.checkbox_text}>Запомнить данные для повторного входа</p>
      </div>
      <ButtonLogin>Войти</ButtonLogin>
      <ButtonLogin2>Регистрация</ButtonLogin2>
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
export default LoginToAcc;
