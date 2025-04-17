export type LoginPayload = {
    email: string;
    password: string;
}

export type SignupPayload = {
    email: string;
    password: string;
    userName:string;
}

export type User = {
    email: string;
    emailVerified: boolean;
    id: string;
    userName: string;
}