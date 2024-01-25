import ButtonLogin from "../../ButtonLogin/UI/ButtonLogin";
import ButtonLogin2 from "../../ButtonLogin2/UI/ButtonLogin2";
import InputReg from "../../InputReg/UI/InputReg";
import Star from "./icon/star.svg";
import s from "./RegAdmin.module.scss";

const RegAdmin = () => {
  return (
    <div className={s.RegAdmin}>
      <p className={s.tittle}>Регистрация (Только для админов)</p>
      <div className={s.input_style}>
        <InputReg>Имя</InputReg>
        <InputReg>Email</InputReg>
      </div>
      <div className={s.input_style}>
        <InputReg>Фамилия</InputReg>
        <InputReg>Пароль</InputReg>
      </div>
      <div className={s.checkbox_style}>
        <input type="checkbox" className={s.checkbox} />
        <p className={s.checkbox_text}>
          Я даю согласие на обработку своих персональных данных и подтверждаю,
          что ознакомился и принимаю <br /> условия
          <a className={s.client_agreement} href="">
            Клиентское соглашение
          </a>
          и всех Регламентирующих документов, являющихся его неотъемлемой <br />
          частью.
        </p>
      </div>
      <div className={s.button_style}>
        <div className={s.button_style_box}>
          <ButtonLogin>Зарегистрироватся</ButtonLogin>
        </div>
        <div className={s.button_style_box}>
          <ButtonLogin2>Отмена</ButtonLogin2>
        </div>
      </div>
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
export default RegAdmin;
