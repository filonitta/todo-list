// @ts-nocheck
const $formAddTask = $('#formAddTask');
const $modalAddTask = $('#modalAddTask');
const $modalEditTask = $('#modalEditTask');
const $formEditTask = $('#formEditTask');

const statuses = {
	'TODO': 1,
	'IN_PROGRESS': 2,
	'DONE': 3
};

export {
	$formAddTask,
	$modalAddTask,
	statuses,
	$modalEditTask,
	$formEditTask
}
