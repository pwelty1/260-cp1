const getStuff = async () => {
	const result = await fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.catch(response => console.error(response))

	const box = document.querySelector('#box')

	box.innerHTML = JSON.stringify(result)
}

const button = document.querySelector('button#button')
button.addEventListener('onclick', getStuff())