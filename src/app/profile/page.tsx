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
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-50 dark:bg-zinc-900">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 to-transparent pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    See more about this page on&nbsp;
                    <code className="font-mono font-bold">src/profile/page.tsx</code>
                </p>
            </div>

            <div className="flex-grow w-full max-w-4xl mt-3">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-800">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50 mb-4">Your Profile</h1>
                    <div className="flex flex-col items-center">
                        <img className="mb-4 w-32 h-32 bg-gray-300 rounded-full dark:bg-gray-700" src={session.user.image} />
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">{session.user.name}</h2>
                        <p className="text-gray-600 dark:text-gray-300">{session.user.email}</p>
                        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mt-3">
                            Passionate about creating beautiful and user-friendly interfaces. With 2+ years of experience in web design and development, I bring a wealth of knowledge and creativity to every project.
                        </p>
                    </div>
                    <div className="mt-6">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            <footer className="text-center mt-10">
                <p className="text-sm opacity-50">This is a demo project for educational purposes only, you can see this page in /src/app/profile/page.tsx</p>
            </footer>
        </main>
    )
}
