import "./App.css";
import { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([
		"Buy Shopping",
		"Clean Bathroom",
		"Car's MOT",
	]);

	const [newTask, setNewTask] = useState("");

	const taskNodes = tasks.map((task, index) => {
		return (
			<li key={index}>
				<span>{task}</span>
			</li>
		);
	});

	const handleTaskInput = (event) => {
		setNewTask(event.target.value);
	};

	const saveNewTask = (event) => {
		event.preventDefault();
		const copyTasks = [...tasks];
		copyTasks.push(newTask);
		setTasks(copyTasks);
		setNewTask("");
	};

	return (
		<>
			<h1> To Do List</h1>
			<hr></hr>
			<form onSubmit={saveNewTask}>
				<label htmlFor="new-task">Enter Task:</label>
				<input
					id="new-task"
					type="text"
					// value={newTask}
					onChange={handleTaskInput}
				/>
				<button type="submit">Submit</button>
			</form>
			<ul>{taskNodes}</ul>
		</>
	);
}

export default App;
