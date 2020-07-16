export default function isFieldEmpty(field) {
	return typeof field == 'undefined' || field.length == 0;
}