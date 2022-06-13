const drawCard = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1';

axios.get(drawCard).then((res) => console.log(`You drew a ${res.data.cards[0].value} of ${res.data.cards[0].suit}`));

axios
	.get(drawCard)
	.then((res) => {
		console.log(`You drew a ${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
		return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`);
	})
	.then((res) => console.log(`You drew a ${res.data.cards[0].value} of ${res.data.cards[0].suit}`));

const $baseUrl = 'http://deckofcardsapi.com/api/deck';
const $btn = $('button');
let deckId = null;

$.getJSON(`${$baseUrl}/new/draw`).then((res) => {
	deckId = res.deck_id;
	console.log(deckId, 'this is deckId');
});

$btn.on('click', function() {
	axios.get(`${$baseUrl}/${deckId}/draw`).then((res) => {
		let cardImage = res.data.cards[0].image;
		$('#card-container').append($(`<img>`, { src: cardImage }));
	});
});
