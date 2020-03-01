const stae1 = {
	data : {}
}
export default function users(state = stae1, action) {
	switch (action.type) {
		case 'LOGIN':
			return { ...action.payload }
		default:
			return state
	}
}