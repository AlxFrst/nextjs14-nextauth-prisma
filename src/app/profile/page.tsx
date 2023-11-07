import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function page() {
    const session = await getServerSession(authOptions);
    // check if a session existe
    if (!session){
        // if not send it to homepage
        redirect('/')
    }

    return (
        <div>
            <p>{session?.user.id}</p>
        </div>
    )
}
