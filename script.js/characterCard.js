import { deleteCharacter } from './deleteCharacter.js';
import { getCharacters } from './getCharacters.js';
import { updateCharacter } from './updateCharacter.js';

const target = document.getElementById('target');
const template = document.querySelector('template');

const init = async () => {
	try {
		const characters = await getCharacters();

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

			// const heroImage = hero.img;

			//button to open the modal
			button.addEventListener('click', () => {
				let inputNameModal = document.getElementById('name-modal');
				inputNameModal.value = hero.name;

				let inputShortDescriptionModal = document.getElementById(
					'short-description-modal'
				);

				inputShortDescriptionModal.value = hero.shortDescription;

				let inputLongDescriptionModal = document.getElementById(
					'long-description-modal'
				);
				inputLongDescriptionModal.value = hero.description;

				const modalButton = document.getElementById('button-modal');

				//Listener inside the modal for save button
				modalButton.addEventListener('click', () => {
					const name = inputNameModal.value;
					const shortDescription = inputShortDescriptionModal.value;
					const description = inputLongDescriptionModal.value;

					const updatedCharacter = {
						...hero,
						name,
						shortDescription,
						description,
					};

					updateCharacter(updatedCharacter, heroId);
				});

				const deleteButton = document.getElementById('delete-button');

				deleteButton.addEventListener('click', () => {
					deleteCharacter(heroId);
				});
			});

			target.appendChild(clone);
		});
	} catch (error) {
		console.log(error);
	}
};

init();
