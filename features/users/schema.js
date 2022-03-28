export const user = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    username: { type: 'string' },
    password: { type: 'string' },
  },
};

export const usersList = {
  type: 'array',
  item: user,
}