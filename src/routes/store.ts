import { writable } from 'svelte/store';

interface Email {
	//prendere utente sender con id casuale
	//sender: await getSender(Math.floor(Math.random() * 10) + 1).email,
	recipient: string;
	subject: string;
	body: string;
	//attachments: data.get('attachments'),
	special: boolean;
	deleted: boolean;
}

export const emails = writable<Email>(JSON.parse(localStorage.getItem('emails')));

emails.subscribe((value) => (localStorage.emails = JSON.stringify(value)));
