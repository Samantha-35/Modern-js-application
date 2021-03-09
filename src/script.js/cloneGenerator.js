export const cloneGenerator = (
	template,
	{ image: heroImage, name, shortDescription, description },
	index
) => {
	const clone = template.cloneNode(true).content;
	const image = clone.querySelector('img');

	image.src = `data:image/*;base64,${heroImage}`;

	const h4 = clone.querySelector('h4');
	h4.innerHTML = name;

	const h5 = clone.querySelector('h5');
	h5.innerHTML = shortDescription;

	const pEl = clone.querySelector('p');
	pEl.innerHTML = description;

	const button = clone.querySelector('button');
	button.setAttribute('id', `button-${index}`);

	return { clone, button };
};
