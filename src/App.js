import "./App.css";
import { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([
		{ name: "Buy Shopping", isPriority: "high" },
		{ name: "Clean Bathroom", isPriority: "low" },
		{ name: "Clean Bathroom", isPriority: "high" },
	]);

	const [newTaskName, setNewTaskName] = useState("");
	const [newTaskPriority, setNewTaskPriority] = useState("");

	const taskNodes = tasks.map((task, index) => {
		return (
			<li key={index} className={task.isPriority}>
				<span>{task.name}</span>
			</li>
		);
	});

	const handleTaskNameInput = (event) => {
		setNewTaskName(event.target.value);
	};

	const handleTaskPriorityInput = (event) => {
		setNewTaskPriority(event.target.value);
	};

	const saveNewTask = (event) => {
		event.preventDefault();
		const copyTasks = [...tasks];
		copyTasks.push({ name: newTaskName, isPriority: newTaskPriority });
		setTasks(copyTasks);
		setNewTaskName("");
		setNewTaskPriority("");
	};

	return (
		<>
			<h1> To Do List</h1>
			<hr></hr>
			<form onSubmit={saveNewTask}>
				<label id="new-task" htmlFor="new-task">
					Enter Task:
				</label>
				<input
					id="new-task"
					type="text"
					value={newTaskName}
					onChange={handleTaskNameInput}
				/>
				<label id="radio-label-high" htmlFor="priority-high">
					High
				</label>
				<input
					name="priority"
					id="priority-high"
					type="radio"
					value="high"
					onChange={handleTaskPriorityInput}
				/>
				<label id="radio-label-low" htmlFor="priority-low">
					Low
				</label>
				<input
					name="priority"
					id="priority-low"
					type="radio"
					value="low"
					onChange={handleTaskPriorityInput}
				/>
				<button type="submit">Submit</button>
			</form>
			<ul>{taskNodes}</ul>
		</>
	);
}

export default App;
