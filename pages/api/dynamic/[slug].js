function handler(req, res) {
  const {slug} = req.query

  res.json({slug})
}

export default handler
