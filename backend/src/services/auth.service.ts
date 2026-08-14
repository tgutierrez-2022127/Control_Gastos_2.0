const { AppDataSource } = require('../config/database');
const { User, UserRole } = require('../entities/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

class AuthService {
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async login(email, plainPassword) {
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
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    const { password, ...userWithoutPassword } = user;
    
    return {
      user: userWithoutPassword,
      token
    };
  }
}

module.exports = { AuthService };