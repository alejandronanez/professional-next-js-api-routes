function handler(req, res) {
  res.status(200).json({message: 'OK!'})
}

const withAuthentication = (handlerFn) => (req, res) => {
  if (!req.headers.authentication) {
    return res.status(401).json({message: 'error'})
  }

  return handlerFn(req, res)
}

export default withAuthentication(handler)
