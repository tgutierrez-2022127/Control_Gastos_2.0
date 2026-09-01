import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  });
});

// Login temporal
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';

  // Admin
  if (email === 'admin@kinal.org' && password === 'Admin123!') {
    const token = jwt.sign(
      { id: 1, email: 'admin@kinal.org', role: 'ADMIN' },
      JWT_SECRET,
      { expiresIn: 120 }
    );
    return res.json({
      success: true,
      message: 'Login exitoso',
      data: {
        user: {
          id: 1,
          email: 'admin@kinal.org',
          role: 'ADMIN',
          fullName: 'Administrador Kinal'
        },
        token
      }
    });
  }
  
  // Usuario normal
  if (email === 'usuario@kinal.org' && password === 'User123!') {
    const token = jwt.sign(
      { id: 2, email: 'usuario@kinal.org', role: 'USER' },
      JWT_SECRET,
      { expiresIn: 120 }
    );
    return res.json({
      success: true,
      message: 'Login exitoso',
      data: {
        user: {
          id: 2,
          email: 'usuario@kinal.org',
          role: 'USER',
          fullName: 'Usuario Kinal'
        },
        token
      }
    });
  }
  
  // Credenciales incorrectas
  return res.status(401).json({
    success: false,
    message: 'Credenciales incorrectas'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📝 Health check: http://localhost:${PORT}/health`);
});