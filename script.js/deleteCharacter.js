const base_url = 'https://character-database.becode.xyz/characters/';

export const deleteCharacter = async (characterId) => {
	try {
		await fetch(`${base_url}${characterId}`, {
			method: 'DELETE',
		});
		Swal.fire(`Deleted`, 'The character was deleted', 'success');
	} catch (error) {
		console.log(error);
		Swal.fire('Oh no!', 'there was an error, please try later', 'error');
	}
};
