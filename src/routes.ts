import { Router } from 'express'
import { RoomController } from './controllers/RoomController'
import { SubjetcController } from './controllers/SubjectController'

const routes = Router()

routes.post('/subject', new SubjetcController().create)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
routes.get('/room', new RoomController().list)

export default routes