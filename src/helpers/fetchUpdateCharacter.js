const base_url = 'https://character-database.becode.xyz/characters/';

export const fetchUpdateCharacter = async (character, characterID) => {
	try {
		const res = await fetch(`${base_url}${characterID}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(character),
		});
	} catch (error) {
		console.log(error);
	}
};
