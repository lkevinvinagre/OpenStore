import prismaClient from '../db/connection';
import { User, userModel } from '../models/UserModel';

class CreateUserService{
    async execute( user: User){
        
        const { name, email } = userModel.parse(user)

        if(!name || !email){
            throw new Error("Preencha os campos obrigatorios")
        }
        const add = await prismaClient.user.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return add
    }
}

export { CreateUserService }