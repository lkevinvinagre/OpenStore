import { z } from 'zod'

const userModel = z.object({
    name: z.string().min(3,{message: 'o nome deve ter mais de 3 letras'}),
    email: z.string().min(3,{message: 'o nome deve ter mais de 3 letras'})
})

type User = z.infer<typeof userModel>

export { User, userModel }