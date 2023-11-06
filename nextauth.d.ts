import type { DefaultSession, DefaultUser } from "next-auth";

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        };
    }
}