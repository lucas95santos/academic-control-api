import { Request, Response } from 'express';
// models
import User from '../models/User';
// services
import UserService from '../services/UserService';

class UserController {
  public async store(
    request: Request,
    response: Response,
  ): Promise<Response<User>> {
    const {
      name,
      email,
      password,
      college,
      course,
      country,
      state,
      city,
    } = request.body;
    const userService = new UserService();

    const user = await userService.createUser({
      name,
      email,
      password,
      college,
      course,
      country,
      state,
      city,
    });

    return response.status(201).json(user);
  }
}

export default UserController;
