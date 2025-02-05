
import { auth } from "@clerk/nextjs/server";


const { userId, sessionClaims } = await auth();
export const role = (sessionClaims?.metadata as {role?:string})

export const currentUserId = userId