import React from "react";
import "./task.css";

interface Itask {
  task: { id: number; title: string; state: string };
  onArchiveTask: () => void;
  onPinTask: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
  onChange,
}: Itask) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox" htmlFor={`archiveTask-${id}`}>
        <input
          type="checkbox"
          checked={state === "TASK_ARCHIVED"!!}
          name="checked"
          id={`archiveTask-${id}`}
          onChange={onArchiveTask}
        />
        <span className="checkbox-custom" aria-label={`archiveTask-${id}`} />
      </label>
      <div className={`title ${state === "TASK_ARCHIVED" && "archived"}`}>
        <input
          type="text"
          value={title}
          // readOnly={state === "TASK_ARCHIVED"}
          disabled={state === "TASK_ARCHIVED"}
          placeholder="Input title"
          onChange={onChange}
        />
      </div>

      <div className="actions" onClick={onPinTask}>
        {state !== "TASK_ARCHIVED" && (
          <button
            style={{
              backgroundColor:
                state === "TASK_PINNED" ? "tomato" : "rgba(0,0,0,0)",
            }}
          >
            <span
              className={`icon-star`}
              id={`pinTask-${id}`}
              aria-label={`pinTask-${id}`}
            >
              pin
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
