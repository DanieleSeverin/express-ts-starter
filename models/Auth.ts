export interface LoginResponse{
    User: User
    AccessToken: string
    RefreshToken: string
}

export interface User{
    id?: string
    name?: string
    email: string
    password?: string
}