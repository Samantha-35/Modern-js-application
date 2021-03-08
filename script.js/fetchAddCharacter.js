//Function that makes the fetch request
export const fetchAddCharacter = async (character) => {
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
