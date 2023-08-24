// GET https://icanhazdadjoke.com/


const next = () => {
	const setHeader = {
		headers: {
			Accept: "application/json"
		}
	}

	jokee.innerHTML = "Loading..."
	fetch('https://icanhazdadjoke.com/', setHeader)
		.then((res) => {
			// return res.json()
			// console.log(res.json())
			return res.json();
		})
		.then((data) => {
			console.log(data)
			jokee.innerHTML = data.joke
		})
		.catch((rej) => {
			jokee.innerHTML = rej
		})

}


next();