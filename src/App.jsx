import CalorieRecords from "./component/calorieRecords";

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Welcome To React with Almadrasa!</h1>
      <CalorieRecords
        date={new Date(2025, 4, 1)}
        meal="Breakfast"
        content="Eggs + Beens"
        recordCalorie="350"
      ></CalorieRecords>
      <CalorieRecords
        date={new Date(2025, 4, 2)}
        meal="Lunch"
        content="Rice + checkein"
        recordCalorie="600"
      ></CalorieRecords>
      <CalorieRecords
        date={new Date(2025, 4, 3)}
        meal="Lunch"
        content="Meat"
        recordCalorie="650"
      ></CalorieRecords>
    </div>
  );
}

export default App;
