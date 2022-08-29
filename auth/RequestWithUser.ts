import { User } from "../models/Auth";

export interface RequestWithUser extends Request {
    User: User
  }

