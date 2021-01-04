// @ts-nocheck
import {
	statuses,
	$modalAddTask
} from './constants.js';

export function addTask(_task) {
	$('<li>')
		.appendTo(`[data-status="${_task.status}"]`)
		.addClass('list-group-item')
		.text(_task.title);
}

export function handleFormAddTask(event) {
	event.preventDefault();

	const newTask = {
		title: $('[name="title"]', this).val(),
		status: statuses.TODO, // 1 - todo, 2 - inprogress, 3 - done
		id: new Date().getTime()
	};

	addTask(newTask);
	localStorage.setItem(newTask.id, JSON.stringify(newTask));
	$modalAddTask.modal('hide');
	this.reset();
}