const base_url = 'https://character-database.becode.xyz/characters/';

export const fetchUpdateCharacter = async (character, characterID) => {
	try {
		await fetch(`${base_url}${characterID}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(character),
		});
		Swal.fire('Nice!', 'Character updated', 'success');
	} catch (error) {
		Swal.fire(
			'Oh no!!',
			'Something when wrong, please try again later',
			'error'
		);
		console.log(error);
	}
};
