import { AppDataSource } from '../config/database';
import { User } from '../entities/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Repository } from 'typeorm';

dotenv.config();

export class AuthService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async login(email: string, plainPassword: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Credenciales incorrectas');
    }

    if (!user.active) {
      throw new Error('Usuario desactivado. Contacte al administrador');
    }

    const isValid = await user.comparePassword(plainPassword);
    if (!isValid) {
      throw new Error('Credenciales incorrectas');
    }

    user.lastLogin = new Date();
    await this.userRepository.save(user);

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET || 'default-secret',
      { expiresIn: 60 }
    );

    const { password, ...userWithoutPassword } = user as User & { password: string };

    return {
      user: userWithoutPassword,
      token
    };
  }
}
