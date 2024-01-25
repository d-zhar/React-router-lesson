import s from "./LineOutletId.module.scss";

const LineOutletId = (props) => {
  return (
    <div className={s.LineOutletId}>
      <span>{props.number}</span>
      <p>1200р</p>
      <form>
        <select className={s.form1}>
          <option value="">Посмотреть</option>
          <option value="">Потрогать</option>
        </select>
      </form>
      <span className={s.name}>{props.name}</span>
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

export default LineOutletId;
