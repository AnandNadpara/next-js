import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import pets from '../../../src/data/pets'

const getPet = (id: any) => pets.find(pet => pet.id == parseInt(id))

const handlers = nc()
  .get((req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.query.id,(pets[0].id + ''))

    const pet = getPet(req.query.id)
    res.json({data: pet})
  })
  .delete((req: NextApiRequest, res: NextApiResponse) => {
    const pet = getPet(req.query.id)
    if(!pet){
      res.status(404)
      res.end()
      return
    }
    const i = pets.findIndex(n => n.id === parseInt(req.query.id as any))
    
    pets.splice(i, 1)
    res.json({data: req.query.id})
  })

export default handlers