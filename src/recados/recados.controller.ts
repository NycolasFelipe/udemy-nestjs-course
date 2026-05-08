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

// DTOs
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  /** Retorna todos os recados */
  @Get()
  findAll() {
    return this.recadosService.findAll();
  }

  /** Retorna um recado pelo ID */
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.recadosService.findById(id);
  }

  /** Cria um novo recado */
  @Post()
  create(@Body() createDto: CreateRecadoDto) {
    return this.recadosService.create(createDto);
  }

  /** Atualiza um recado pelo ID */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateRecadoDto) {
    return this.recadosService.update(id, updateDto);
  }

  /** Remove um recado pelo ID */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}
