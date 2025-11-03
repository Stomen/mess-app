
export const getTodos = (filter) => {
  return fetch(`https://6909033a2d902d0651b26d63.mockapi.io/api/v1/todo`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Test-filter': JSON.stringify(filter)
    }
  })
}