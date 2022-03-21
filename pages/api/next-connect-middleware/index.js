import nextConnect from 'next-connect'

const withAuthentication = (req, res, next) => {
  if (!req.headers.authentication) {
    return res.status(401).json({message: 'error'})
  }

  return next()
}

const handler = nextConnect()
  .use(withAuthentication)
  .get(withAuthentication , (req, res) => res.json({message: 'get'}))

export default handler
