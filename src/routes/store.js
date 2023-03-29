import { writable } from 'svelte/store';

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
	data: T[]
	filtered: T[]
	search: string
}

export const createSearchStore = <T extends Record<PropertyKey, any>>(
	data: T[],
) => {
	const { subscribe, set, update } = writable<SearchStoreModel<T>>({
		data: data,
		filtered: data,
		search: "",
	})

	return {
		subscribe,
		set,
		update,
	}
}

export const searchHandler = <T extends Record<PropertyKey, any>>(
	store: SearchStoreModel<T>,
) => {
	const searchTerm = store.search.toLowerCase() || ""
	store.filtered = store.data.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm)
	})
}

//TODO settare i risultati della ricerca in base alla pagina in cui viene effetuata
export const searchBarResult = writable(0);
let emails = {
	//prendere utente sender con id casuale
	//sender: await getSender(Math.floor(Math.random() * 10) + 1).email,
	recipient: string,
	subject: string,
	body: string,
	//attachments: data.get('attachments'),
	special: boolean,
	deleted: boolean
};

export const emails = writable < Email > JSON.parse(localStorage.getItem('emails'));

emails.subscribe((value) => (localStorage.emails = JSON.stringify(value)));
