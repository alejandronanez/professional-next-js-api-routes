function handler(req, res) {
  const {slugs} = req.query

  res.json({slugs})
}

export default handler
