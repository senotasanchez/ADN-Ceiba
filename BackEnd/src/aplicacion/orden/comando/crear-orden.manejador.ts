import { Injectable } from '@nestjs/common';
import { ServicioCrearOrden } from 'src/dominio/orden/servicio/servicio-crear-orden';
import { ComandoCrearOrden } from './crear-orden.comando';
import { Orden } from 'src/dominio/orden/modelo/orden';

@Injectable()
export class ManejadorCrearOrden {
  constructor(private servicioCrearOrden: ServicioCrearOrden) { }

  async ejecutar(comandoCrearOrden: ComandoCrearOrden) {
    await this.servicioCrearOrden.ejecutar(
      new Orden(
        comandoCrearOrden.idCoordinador,
        comandoCrearOrden.idRepartidor,
        comandoCrearOrden.fechaCreacion,
        comandoCrearOrden.fechaEntrega,
        comandoCrearOrden.horaEntrega,
      ),
    );
  }
}
