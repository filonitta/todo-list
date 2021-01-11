// @ts-nocheck
import {
	statuses,
	$modalAddTask,
	$modalEditTask,
	$formEditTask
} from './constants.js';

export function addTask(_task) {
	const $btnDelete = $('<button>').addClass('btn btn-danger btn-xs btn-delete pull-right').html('<i class="glyphicon glyphicon-trash"></i>');
	const $btnEdit = $('<button>').addClass('btn btn-warning btn-xs btn-edit pull-right').html('<i class="glyphicon glyphicon-pencil"></i>');

	$('<li>')
		.appendTo(`[data-status="${_task.status}"]`)
		.addClass('list-group-item')
		.text(_task.title)
		.append($btnDelete)
		.append($btnEdit)
		.attr('data-id', _task.id);
}

export function handleFormAddTask(event) {
	event.preventDefault();

	const newTask = {
		title: $('[name="title"]', this).val(),
		status: statuses.TODO, // 1 - todo, 2 - inprogress, 3 - done
		id: new Date().getTime()
	};

	if (newTask.title === '') {
		alert('Title is required');
		return;
	}

	addTask(newTask);
	localStorage.setItem(newTask.id, JSON.stringify(newTask));
	$modalAddTask.modal('hide');
	this.reset();
}

export function handleBtnDelete(event) {
	const $parent = $(this).parents('[data-id]');
	const id = $parent.attr('data-id');

	$parent.remove();
	localStorage.removeItem(id);
}

export function handleBtnEdit(event) {
	const $parent = $(this).parents('[data-id]');
	const id = $parent.attr('data-id');

	const task = JSON.parse(localStorage.getItem(id));
	$modalEditTask.modal('show');

	for (let key in task) {
		const $element = $formEditTask.find(`[name="${key}"]`);
		
		if (!$element.length) continue;

		$element.val(task[key]);
	}
}

export function handleFormEditTask(event) {
	event.preventDefault();

	const newTask = {
		title: $(this).find('[name="title"]').val(),
		status: +$(this).find('[name="status"]').val(),
		id: $(this).find('[name="id"]').val(),
	};

	localStorage.setItem(newTask.id, JSON.stringify(newTask));

	$('[data-status]').find(`[data-id="${newTask.id}"]`).remove();

	addTask(newTask);
	
	$modalEditTask.modal('hide');
}