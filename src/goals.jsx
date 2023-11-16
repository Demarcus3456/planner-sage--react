import "./index.css";

export default function Goals() {
  function set() {
    document.querySelector(".settings").classList.remove("hidden");
  }
  return (
    <div className="container">
      <h1>Goals</h1>
      <GoalList />
      <GoalsSettings />
      <button onClick={set}>Add</button>
    </div>
  );
}

function GoalList() {
  return (
    <div className="goal-container">
      <h1>Name</h1>
      <img src="https://c.tenor.com/uhSAIyB-C2QAAAAC/tenor.gif" alt="#" />
      <button className="goal-btn">Tasks</button>
      <span className="progress">0%</span>
      <button className="goal-btn">Delete</button>
    </div>
  );
}

function GoalsSettings() {
  return (
    <div className="setting goal-container hidden">
      <input type="text"></input>
      <input type="file"></input>
      <button>Add</button>
    </div>
  );
}
