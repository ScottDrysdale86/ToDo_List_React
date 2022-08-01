import "./App.css";
import { useState } from "react";

function App() {
	// Sets up pre defined tasks
	const [tasks, setTasks] = useState([
		{ name: "Buy Shopping", priority: "high" },
		{ name: "Clean Bathroom", priority: "low" },
		{ name: "Clean Bathroom", priority: "high" },
	]);

	// destructuring the useState hook to give the variable and function
	// for task name and priority
	const [newTaskName, setNewTaskName] = useState("");
	const [newTaskPriority, setNewTaskPriority] = useState("");

	// creates the list elements using the map function and displays each task name
	// uses the index key to prevent errors and assigns the css classname to the priority value
	const taskNodes = tasks.map((task, index) => {
		return (
			<li key={index} className={task.priority}>
				<span>{task.name}</span>
			</li>
		);
	});

	// sets the new task name to the event value
	const handleTaskNameInput = (event) => {
		setNewTaskName(event.target.value);
	};
	// sets the new task priority to the event value
	const handleTaskPriorityInput = (event) => {
		setNewTaskPriority(event.target.value);
	};

	// prevents html making a post request so data is kept
	// saves the new task by creating a copy of the tasks array
	// checks that a new task has been entered and priority selected
	// adds the new task to the array and sets the new array to tasks array
	// makes both the input fireld and radio buttons blank
	const saveNewTask = (event) => {
		event.preventDefault();
		const copyTasks = [...tasks];
		if (newTaskName !== "" && newTaskPriority !== "") {
			copyTasks.push({ name: newTaskName, priority: newTaskPriority });
			setTasks(copyTasks);
			setNewTaskName("");
			setNewTaskPriority("");
		}
	};

	// JSX code for the layout of the page
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
