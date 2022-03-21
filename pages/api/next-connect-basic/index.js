import nextConnect from "next-connect"

const handler = nextConnect({
  onNoMatch: (req, res) => res.status(404).json({message: 'not found'})
})
  .get((req, res) => res.status(200).json({message: 'GET!'}))
  .post((req, res) => res.status(200).json({message: 'POST!'}))
  .patch((req, res) => res.status(200).json({message: 'PATCH!'}))
  .put((req, res) => res.status(200).json({message: 'PUT!'}))
  .delete((req, res) => res.status(200).json({message: 'DELETE!'}))

export default handler
