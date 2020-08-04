import { Router, Request, Response } from 'express'
import ClassesController from '../controllers/ClassesController';


const routes = Router();
const user = [{ name: 'Teste', age: 0 }]
const classesController = new ClassesController;

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

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