import { writable } from 'svelte/store';

//TODO settare i risultati della ricerca in base alla pagina in cui viene effetuata
export const searchBarResult = writable(0);
