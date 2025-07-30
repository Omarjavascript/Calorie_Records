import "./CalorieRecords.css";
import CalorieRecordsDate from "./CalorieRecordsDate";
import StyledRecordCell from "./StyledRecordCell";

function CalorieRecords(props) {
  return (
    <ul className="record-item">
      <li>
        <CalorieRecordsDate date={props.date}></CalorieRecordsDate>
      </li>
      <li className="record-meal">{props.meal}</li>
      <li className="record-content">{props.content}</li>
      <StyledRecordCell>
        <li className="record-calorie">{props.recordCalorie} kcal</li>
      </StyledRecordCell>
    </ul>
  );
}
export default CalorieRecords;
