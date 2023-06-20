import React, { useState } from "react";

import "./App.css";
import Task from "./components/task.component";
import NewButton from "./components/newButton";
import taskStore from "./store/taskStore";

function App() {
  const { task, onArchiveTask, onPinTask, onChange } = taskStore();

  return (
    <div className="App">
      <NewButton label="버튼" size="large" onClick={() => alert("clicked")} />
      <Task
        key={task.id}
        task={{ id: task.id, title: task.title, state: task.state }}
        onArchiveTask={onArchiveTask}
        onPinTask={onPinTask}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
