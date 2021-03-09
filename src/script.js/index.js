import { fetchDeleteCharacter } from '../helpers/fetchDeleteCharacter.js';
import { fetchGetCharacters } from '../helpers/fetchGetCharacters.js';
import { fetchUpdateCharacter } from '../helpers/fetchUpdateCharacter.js';
import { setUpdatedCharacter } from '../helpers/setUpdatedCharacter.js';
import { setModalValues } from './setModalValues.js';

const target = document.getElementById('target');
const template = document.querySelector('template');

const init = async () => {
	try {
		const characters = await fetchGetCharacters();

		characters.forEach((hero, i) => {
			const clone = template.cloneNode(true).content;
			const image = clone.querySelector('img');

			image.src = `data:image/*;base64,${hero.image}`;

			const h4 = clone.querySelector('h4');
			h4.innerHTML = hero.name;

			const h5 = clone.querySelector('h5');
			h5.innerHTML = hero.shortDescription;

			const pEl = clone.querySelector('p');
			pEl.innerHTML = hero.description;

			const button = clone.querySelector('button');
			button.setAttribute('id', `button-${i}`);

			const heroId = hero.id;

			//button to open the modal
			button.addEventListener('click', () => {
				const inputsModal = setModalValues(
					hero.name,
					hero.shortDescription,
					hero.description
				);

				const modalButton = document.getElementById('button-modal');

				//Listener inside the modal for save button
				modalButton.addEventListener('click', () => {
					const updatedCharacter = setUpdatedCharacter(hero, inputsModal);

					fetchUpdateCharacter(updatedCharacter, heroId);
				});

				const deleteButton = document.getElementById('delete-button');

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
