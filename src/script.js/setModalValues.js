export const setModalValues = (name, shortDescription, description) => {
	let inputNameModal = document.getElementById('name-modal');
	inputNameModal.value = name;

	let inputShortDescriptionModal = document.getElementById(
		'short-description-modal'
	);

	inputShortDescriptionModal.value = shortDescription;

	let inputLongDescriptionModal = document.getElementById(
		'long-description-modal'
	);
	inputLongDescriptionModal.value = description;

	return {
		inputNameModal,
		inputShortDescriptionModal,
		inputLongDescriptionModal,
	};
};
