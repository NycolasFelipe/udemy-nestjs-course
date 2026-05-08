import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

// Services
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  /** Retorna todos os recados */
  @Get()
  findAll(): any[] {
    return this.recadosService.findAll();
  }

  /** Retorna um recado pelo ID */
  @Get(':id')
  findById(@Param('id') id: string): any {
    return this.recadosService.findById(id);
  }

  /** Cria um novo recado */
  @Post()
  create(@Body() createDto: any): any {
    return this.recadosService.create(createDto);
  }

  /** Atualiza um recado pelo ID */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any): any {
    return this.recadosService.update(id, updateDto);
  }

  /** Remove um recado pelo ID */
  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.recadosService.remove(id);
  }
}
