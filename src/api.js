export const getTodos = async () => {
  const mockData = [
    {
      id: '1',
      name: 'Taylor Waelchi',
      avatar:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/30.jpg',
      createdAt: '2026-02-10T13:35:06.718Z',
    },
    {
      id: '2',
      name: 'Alex Johnson',
      avatar:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/12.jpg',
      createdAt: '2026-02-10T13:40:12.421Z',
    },
    {
      id: '3',
      name: 'Maria Lopez',
      avatar:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/45.jpg',
      createdAt: '2026-02-10T13:45:55.102Z',
    },
    {
      id: '4',
      name: 'Daniel Smith',
      avatar:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/22.jpg',
      createdAt: '2026-02-10T13:50:31.888Z',
    },
    {
      id: '5',
      name: 'Olivia Brown',
      avatar:
        'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/67.jpg',
      createdAt: '2026-02-10T13:55:09.604Z',
    },
  ]

  await new Promise((resolve) => setTimeout(resolve, 300))

  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
