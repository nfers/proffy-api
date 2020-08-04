import { Router, Request, Response } from 'express'
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';


interface ScheduleItem {
 week_day: number;
 from: string;
 to: string
}

const routes = Router();
const user = [{ name: 'Teste', age: 0 }]

routes.post('/classes', async (req, res) => {
 const {
  name,
  avatar,
  whatsapp,
  bio,
  subject,
  cost,
  schedule
 } = req.body;

 const insertedUsersIds = await db('users').insert({
  name,
  avatar,
  whatsapp,
  bio
 });

 const user_id = insertedUsersIds[0];

 const insertedClassesId = await db('classes').insert({
  user_id,
  subject,
  cost,
 });

 const class_id = insertedClassesId[0];

 const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
  return {
   class_id,
   week_day: scheduleItem.week_day,
   from: convertHourToMinutes(scheduleItem.from),
   to: convertHourToMinutes(scheduleItem.to)
  }
 })

 await db('class_schedule').insert(classSchedule);



 res.json({ message: 'sucess', name, classSchedule })
})



routes.get('/users', (req: Request, res: Response) => {
 console.log('chamou users');

 const users = [{
  name: 'Nayara'
 }, { name: 'Dayane' }]
 res.json({ message: 'ok', usuarios: users })
});

routes.post('/users', (req, res) => {
 let { name, age } = req.body;

 user.push({ name, age })

 res.json({ message: 'sucess', user })
})


routes.get('/users/q', (req: Request, res: Response) => {
 console.log('chamou users q');

 const { name } = req.query;
 console.log(req.query)


 res.json({ message: 'ok', usuarios: [{ name }] })
});

routes.delete('/users/:id', (req: Request, res: Response) => {
 console.log(req.params)
 let { id, name } = req.params

 res.send({ name, id })
});

export default routes;