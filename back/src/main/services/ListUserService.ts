import prismaClient from "../db/connection";

class ListUserService{

    async execute(){

        const userlist = await prismaClient.user.findMany();

        return userlist;

    }

}

export { ListUserService }