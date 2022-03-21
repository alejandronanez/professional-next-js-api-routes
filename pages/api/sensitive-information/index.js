async function getSuperSecretData() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    headers: {
      authorization: 'SUPER SECRET VALUE'
    }
  }).then(res => res.json())

  return result
}

async function handler(req, res) {
  const secretTodo = await getSuperSecretData()

  res.json({todo: secretTodo})
}

export default handler
