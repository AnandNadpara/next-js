import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import pets from '../../../src/data/pets'

const handlers = nc()
  .get((req: NextApiRequest, res: NextApiResponse) => {
    console.log(pets)
    res.json({data: pets})
  })

  .post((req: NextApiRequest, res: NextApiResponse) => {
    const pet = {
      id: Date.now(),
      ...req.body,
    }
    pets.push(pet)
    console.log(pets)
    res.json({data: pet})
  })

export default handlers