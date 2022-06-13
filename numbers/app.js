let favNumApi = 'http://numbersapi.com/7?json';

axios.get(favNumApi).then((response) => console.log(response.data)).catch((err) => console.log(err));

const baseUrl = 'http://numbersapi.com';

axios
	.get(`${baseUrl}/12?json`)
	.then((response) => {
		console.log('first promise resolved', response.data);
		return axios.get(`${baseUrl}/24?json`);
	})
	.then((response) => {
		console.log('second promise resolved', response.data);
	})
	.catch((err) => console.log(err));

const ul = document.querySelector('ul');
let favNumArr = [];

for (let i = 0; i < 4; i++) {
	favNumArr.push(axios.get(favNumApi));
}

Promise.all(favNumArr)
	.then((arr) => {
		for (res of arr) {
			console.log(res.data);
			let li = document.createElement('li');
			li.innerText = res.data.text;
			ul.appendChild(li);
		}
	})
	.catch((err) => console.log(err));
