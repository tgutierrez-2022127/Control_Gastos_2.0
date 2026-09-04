import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export const AuthController = {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Email y contraseña son requeridos'
        });
      }

      const result = await authService.login(email, password);

      res.status(200).json({
        success: true,
        message: 'Inicio de sesión exitoso',
        data: result
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al iniciar sesión';
      res.status(401).json({
        success: false,
        message
      });
    }
  }
};
