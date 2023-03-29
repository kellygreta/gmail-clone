import { stringify } from 'postcss';
import { writable } from 'svelte/store';

let createSearchStore = function (data) {
	let _a = (0, store_1.writable)({
			data: data,
			filtered: data,
			search: ''
		}),
		subscribe = _a.subscribe,
		set = _a.set,
		update = _a.update;
	return {
		subscribe: subscribe,
		set: set,
		update: update
	};
};
exports.createSearchStore = createSearchStore;
var searchHandler = function (store) {
	var searchTerm = store.search.toLowerCase() || '';
	store.filtered = store.data.filter(function (item) {
		return item.searchTerms.toLowerCase().includes(searchTerm);
	});
};
exports.searchHandler = searchHandler;

//TODO settare i risultati della ricerca in base alla pagina in cui viene effetuata
export const searchBarResult = writable('');
let emails = {
	sender: stringify,
	recipient: string,
	subject: string,
	body: string,
	attachments: string,
	special: boolean,
	deleted: boolean
};

export const emails = writable < Email > JSON.parse(localStorage.getItem('emails'));

emails.subscribe((value) => (localStorage.emails = JSON.stringify(value)));
