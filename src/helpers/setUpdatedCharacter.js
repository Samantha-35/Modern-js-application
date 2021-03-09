export const setUpdatedCharacter = (
	character,
	{ inputNameModal, inputShortDescriptionModal, inputLongDescriptionModal }
) => {
	const name = inputNameModal.value;
	const shortDescription = inputShortDescriptionModal.value;
	const description = inputLongDescriptionModal.value;

	const updatedCharacter = {
		...character,
		name,
		shortDescription,
		description,
	};

	return updatedCharacter;
};
