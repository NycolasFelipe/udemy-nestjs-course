import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';

// DTOs
import { CreateRecadoDto } from './create-recado.dto';

export class UpdateRecadoDto extends PartialType(CreateRecadoDto) {
  @IsBoolean({ message: 'O campo lido deve ser um valor booleano' })
  @IsOptional()
  readonly lido?: boolean;
}
