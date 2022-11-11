import { Command, serve } from '../deps.ts';
import {
	Checkbox,
	Confirm,
	Input,
	Number,
	prompt,
} from 'https://deno.land/x/cliffy@v0.25.4/prompt/mod.ts';

const result = await prompt([{
	name: 'name',
	message: 'What\'s your name?',
	type: Input,
}, {
	name: 'age',
	message: 'How old are you?',
	type: Number,
}, {
	name: 'like',
	message: 'Do you like animals?',
	type: Confirm,
}, {
	name: 'animals',
	message: 'Select some animals',
	type: Checkbox,
	options: ['dog', 'cat', 'snake'],
}]);

console.log(result);