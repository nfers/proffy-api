import { Request, Response, response } from 'express'
import db from '../database/connection';

export default class ConnectionsController {

 async create(req: Request, res: Response) {
  const { user_id } = req.body;
  try {
   await db('connections').insert({
    user_id
   })

   return res.status(201).json({ message: 'sucess' })
  } catch (err) {
   return res.status(400).json({ error: err })
  }
 }

 async index(req: Request, res: Response) {
  try {
   const totalConnections = await db('connections').count('* as total');

   const { total } = totalConnections[0];

   return res.status(201).json({ total })

  } catch (err) {
   return res.status(400).json({ error: err })
  }
 }
}