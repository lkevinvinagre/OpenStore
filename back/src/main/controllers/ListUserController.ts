import { FastifyRequest, FastifyReply } from 'fastify'
import { ListUserService } from '../services/ListUserService'

class ListUserController{
    
    async handle(request: FastifyRequest, reply: FastifyReply){

        const listUserService = new ListUserService();

        const userlist = await listUserService.execute();

        reply.send(userlist);

    }

}

export { ListUserController }