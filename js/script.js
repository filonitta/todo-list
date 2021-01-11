// @ts-nocheck
import {
	addTask,
	handleFormAddTask,
	handleBtnDelete,
	handleBtnEdit,
	handleFormEditTask
} from './functions.js';
import { $formAddTask, $formEditTask } from './constants.js';

$formAddTask.on('submit', handleFormAddTask);
$formEditTask.on('submit', handleFormEditTask);
$('body').on('click', '.btn-delete', handleBtnDelete);
$('body').on('click', '.btn-edit', handleBtnEdit);

for (let key in localStorage) {
	if (localStorage.hasOwnProperty(key)) {
		const task = JSON.parse(localStorage[key]);
		task && addTask(task);
	}
}
