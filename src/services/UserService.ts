import { getRepository, Repository } from 'typeorm';
// models
import User from '../models/User';

interface CreateData {
  name: string;
  email: string;
  password: string;
  college: string;
  course: string;
  country: string;
  state: string;
  city: string;
}

class UserService {
  private readonly userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async createUser({
    name,
    email,
    password,
    college,
    course,
    country,
    state,
    city,
  }: CreateData): Promise<User> {
    const userExists = await this.userRepository.findOne({
      where: { email },
    });

    if (userExists) {
      throw new Error('O endereço de e-mail já existe');
    }

    const user = this.userRepository.create({
      name,
      email,
      password,
      college,
      course,
      country,
      state,
      city,
    });

    await this.userRepository.save(user);

    return user;
  }
}

export default UserService;
