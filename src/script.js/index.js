import { fetchDeleteCharacter } from '../helpers/fetchDeleteCharacter.js';
import { fetchGetCharacters } from '../helpers/fetchGetCharacters.js';
import { fetchUpdateCharacter } from '../helpers/fetchUpdateCharacter.js';
import { setUpdatedCharacter } from '../helpers/setUpdatedCharacter.js';
import { cloneGenerator } from './cloneGenerator.js';
import { setModalValues } from './setModalValues.js';

const target = document.getElementById('target');
const template = document.querySelector('template');

const init = async () => {
	try {
		const characters = await fetchGetCharacters();

		characters.forEach((hero, index) => {
			const { clone, button } = cloneGenerator(template, hero, index);

			const heroId = hero.id;

			//button to open the modal
			button.addEventListener('click', () => {
				const { name, shortDescription, description } = hero;
				const deleteButton = document.getElementById('delete-button');
				const modalSaveButton = document.getElementById('button-modal');

				//prettier-ignore
				const inputsModal = setModalValues(name,shortDescription,description);

				//Listener inside the modal for save button
				modalSaveButton.addEventListener('click', () => {
					const updatedCharacter = setUpdatedCharacter(hero, inputsModal);

					fetchUpdateCharacter(updatedCharacter, heroId);
				});

				deleteButton.addEventListener('click', () => {
					fetchDeleteCharacter(heroId);
				});
			});

			target.appendChild(clone);
		});
	} catch (error) {
		console.log(error);
	}
};

init();
