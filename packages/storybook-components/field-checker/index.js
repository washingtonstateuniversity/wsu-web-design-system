export default function empty(field) {
	return typeof field == 'undefined' || field.length == 0 || Object.keys(field) == 0;
}