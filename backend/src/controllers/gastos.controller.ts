import { Request, Response } from 'express';
import { GastosService } from '../services/gastos.service';
import { CategoriaGasto, CategoriaGastoType } from '../entities/Gasto';

const service = new GastosService();

function getUserId(req: Request): number {
  const user = (req as any).user;
  return user?.id;
}

export const GastosController = {
  async crear(req: Request, res: Response) {
    try {
      const userId = getUserId(req);
      const { descripcion, monto, categoria, fecha } = req.body;

      if (!descripcion || monto === undefined || !fecha) {
        return res.status(400).json({
          success: false,
          message: 'descripcion, monto y fecha son requeridos',
        });
      }

      if (monto <= 0) {
        return res.status(400).json({
          success: false,
          message: 'El monto debe ser mayor a 0',
        });
      }

      const catValidas = Object.values(CategoriaGasto) as string[];
      if (categoria && !catValidas.includes(categoria)) {
        return res.status(400).json({
          success: false,
          message: `Categoria invalida. Opciones: ${catValidas.join(', ')}`,
        });
      }

      const gasto = await service.crear({
        descripcion,
        monto,
        categoria: (categoria as CategoriaGastoType) || CategoriaGasto.OTROS,
        fecha,
        userId,
      });

      return res.status(201).json({
        success: true,
        message: 'Gasto registrado exitosamente',
        data: gasto,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al crear gasto';
      return res.status(500).json({ success: false, message });
    }
  },

  async listar(req: Request, res: Response) {
    try {
      const userId = getUserId(req);
      const mes = req.query.mes ? Number(req.query.mes) : undefined;
      const anio = req.query.anio ? Number(req.query.anio) : undefined;

      const gastos = await service.listar(userId, mes, anio);
      return res.json({ success: true, data: gastos });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al listar gastos';
      return res.status(500).json({ success: false, message });
    }
  },

  async obtener(req: Request, res: Response) {
    try {
      const userId = getUserId(req);
      const id = Number(req.params.id);
      const gasto = await service.obtenerPorId(id, userId);

      if (!gasto) {
        return res.status(404).json({ success: false, message: 'Gasto no encontrado' });
      }

      return res.json({ success: true, data: gasto });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al obtener gasto';
      return res.status(500).json({ success: false, message });
    }
  },

  async actualizar(req: Request, res: Response) {
    try {
      const userId = getUserId(req);
      const id = Number(req.params.id);
      const { descripcion, monto, categoria, fecha } = req.body;

      if (categoria) {
        const catValidas = Object.values(CategoriaGasto) as string[];
        if (!catValidas.includes(categoria)) {
          return res.status(400).json({
            success: false,
            message: `Categoria invalida. Opciones: ${catValidas.join(', ')}`,
          });
        }
      }

      const gasto = await service.actualizar(id, userId, {
        descripcion,
        monto,
        categoria,
        fecha,
      });

      if (!gasto) {
        return res.status(404).json({ success: false, message: 'Gasto no encontrado' });
      }

      return res.json({
        success: true,
        message: 'Gasto actualizado',
        data: gasto,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al actualizar';
      return res.status(500).json({ success: false, message });
    }
  },

  async eliminar(req: Request, res: Response) {
    try {
      const userId = getUserId(req);
      const id = Number(req.params.id);
      const ok = await service.eliminar(id, userId);

      if (!ok) {
        return res.status(404).json({ success: false, message: 'Gasto no encontrado' });
      }

      return res.json({ success: true, message: 'Gasto eliminado' });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al eliminar';
      return res.status(500).json({ success: false, message });
    }
  },

  async resumen(req: Request, res: Response) {
    try {
      const userId = getUserId(req);
      const data = await service.resumen(userId);
      return res.json({ success: true, data });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Error al obtener resumen';
      return res.status(500).json({ success: false, message });
    }
  },
};
