import ButtonLogin from "../../ButtonLogin/UI/ButtonLogin";
import ButtonLogin2 from "../../ButtonLogin2/UI/ButtonLogin2";
import s from "./EmailConfirm.module.scss";

const EmailConfirm = () => {
  return (
    <div className={s.EmailConfirm}>
      <p className={s.tittle}>Подтверждение Email</p>
      <p className={s.text}>
        Вы успешно зарегистрированы! <br />
        Подтвердите Ваш email. Код отправлен Вам на почту. Если письмо не
        приходит, проверьте папку спам и вкладку промоакции.
      </p>
      <p className={s.email_pass_style}>Email</p>
      <input
        type="email"
        placeholder="ololo12@mail.com"
        className={s.email_input}
      />
      <p className={s.pass_style}>Код из письма</p>
      <input type="password" placeholder="- - - -" className={s.email_input} />
      <ButtonLogin>Подтвердить</ButtonLogin>
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
export default EmailConfirm;
