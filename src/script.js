let data

document.body.onload = async () => {
	data = await fetch('data.json')
		.then(res => res.json())
}
