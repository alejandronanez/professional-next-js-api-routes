function handler(req, res) {
  const {method} = req

  if (method === 'GET') {
    res.status(200).json({message: 'GET!'})
  }

  if (method === 'POST') {
    res.status(200).json({message: 'POST!'})
  }

  if (method === 'PATCH') {
    res.status(200).json({message: 'PATCH!'})
  }

  if (method === 'PUT') {
    res.status(200).json({message: 'PUT!'})
  }

  if (method === 'DELETE') {
    res.status(200).json({message: 'DELETE!'})
  }

  res.status(404).json({message: 'not found'})
}

export default handler
