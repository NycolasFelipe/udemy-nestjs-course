import { Injectable, NotFoundException } from '@nestjs/common';

// Entities
import { Recado } from './entities/recado.entity';

// DTOs
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Injectable()
export class RecadosService {
  /** Último ID atribuído a um recado */
  private lastId = 1;

  /** Lista de recados */
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Olá, como você está?',
      de: 'Alice',
      para: 'Bob',
      lido: false,
      data: new Date(),
    },
  ];

  /** Retorna todos os recados */
  findAll() {
    return this.recados;
  }

  /** Retorna um recado pelo ID */
  findById(id: string) {
    const recado = this.recados.find((r) => r.id === +id);
    if (!recado) {
      throw new NotFoundException('Recado não encontrado');
    }
    return recado;
  }

  /** Cria um novo recado */
  create(createDto: CreateRecadoDto): Recado {
    const newRecado: Recado = {
      id: this.lastId++,
      lido: false,
      data: new Date(),
      ...createDto,
    };
    this.recados.push(newRecado);
    return newRecado;
  }

  /** Atualiza um recado existente */
  update(id: string, updateDto: UpdateRecadoDto): Recado {
    const recadoIndex = this.recados.findIndex((r) => r.id === +id);
    if (recadoIndex === -1) {
      throw new NotFoundException('Recado não encontrado');
    }
    this.recados[recadoIndex] = { ...this.recados[recadoIndex], ...updateDto };
    return this.recados[recadoIndex];
  }

  /** Remove um recado existente */
  remove(id: string): Recado {
    const recadoIndex = this.recados.findIndex((r) => r.id === +id);
    if (recadoIndex === -1) {
      throw new NotFoundException('Recado não encontrado');
    }
    return this.recados.splice(recadoIndex, 1)[0];
  }
}
