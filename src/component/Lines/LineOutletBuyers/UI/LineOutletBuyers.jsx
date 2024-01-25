import s from "./LineOutletBuyers.module.scss";

const LineOutletBuyers = (props) => {
  return (
    <div className={s.LineOutletBuyers}>
      <p className={s.name}> {props.name}</p>
      <p>{props.name2}</p>
      <span className={s.telephone}>89999999992</span>
      <p className={s.data}>{props.present}</p>
      <p className={s.data}>{props.present}</p>
      <p className={s.data}>{props.present}</p>
    </div>
  );
};

export default LineOutletBuyers;
