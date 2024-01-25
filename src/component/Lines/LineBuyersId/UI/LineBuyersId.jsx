import s from "./LineBuyersId.module.scss";

const LineBuyersId = (props) => {
  return (
    <div className={s.LineBuyersId}>
      <span>{props.number}</span>
      <p className={s.data}>1200р</p>
      <form>
        <select className={s.form1}>
          <option value="">Посмотреть</option>
          <option value="">Потрогать</option>
        </select>
      </form>
      <p className={s.name1}>Choize Coffee м. Курская...</p>
      <p className={s.data}>18.12.1999 18:43:02</p>
      <p className={s.name}> Александр Администратор</p>
      <form>
        <select className={s.form1}>
          <option value="">Посмотреть</option>
          <option value="">Потрогать</option>
        </select>
      </form>
    </div>
  );
};

export default LineBuyersId;
