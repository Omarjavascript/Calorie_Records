import "./StyledRecordCell.css";

function CalorieRecordsDate(props) {
  const day = props.date.getDate();
  const month = props.date.toLocaleString("en-US", { month: "long" }); // e.g. "July"
  const year = props.date.getFullYear();
  return (
    <div className="main-date">
      <ul>
        <li>
          <div>{day}</div>
          <div>{month}</div>
          <div>{year}</div>
        </li>
      </ul>
    </div>
  );
}

export default CalorieRecordsDate;
