export interface RequestWithUser extends Request {
    User: User
  }

  export interface User{
    id?: number
    name?: string
    email: string
    password?: string
}