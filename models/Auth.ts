export interface LoginResponse{
    user: User
    accessToken: string
    refreshToken: string
}

export interface User{
    id?: string
    name?: string
    email: string
    password?: string
}