import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController{
    async handle( request: FastifyRequest, reply: FastifyReply){
        
        const { name , email}= request.body as {name:string, email: string};

        const createuserservice = new CreateUserService()

        const user = await createuserservice.execute({name, email});

        reply.send(user)

    }
}

export { CreateUserController }