const base_url = 'https://character-database.becode.xyz/characters';

const inputName = document.getElementById('name');
const inputShortDescription = document.getElementById('short-description');
const inputLongDescription = document.getElementById('long-description');
const inputImage = document.getElementById('image-input');
const button = document.querySelector('button');

let image = '';

inputImage.addEventListener('change', (e) => {
	const file = e.target.files[0];
	const reader = new FileReader();
	reader.onloadend = () => {
		image = reader.result.replace('data:', '').replace(/^.+,/, '');
	};
	reader.readAsDataURL(file);
});

button.addEventListener('click', () => {
	const name = inputName.value;
	const shortDescription = inputShortDescription.value;

	const longDescription = inputLongDescription.value;

	const character = {
		name,
		shortDescription,
		description: longDescription,
		image,
	};

	addCharacter(character);
});

//Function that makes the fetch request
const addCharacter = async (character) => {
	try {
		await fetch(base_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(character),
		});
		Swal.fire('Nice!', 'Character added', 'success');
	} catch (error) {
		Swal.fire(
			'Oh no!!',
			'Something when wrong, please try again later',
			'error'
		);

		console.log(error);
	}
};
