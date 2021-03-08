const base_url = 'https://character-database.becode.xyz/characters';

export const getCharacters = async () => {
	try {
		const res = await fetch(base_url);
		const characters = await res.json();

		const filteredCharacters = characters.slice(0, 4);
		console.log(filteredCharacters);

		return characters;
	} catch (error) {
		console.log(error);
	}
};
