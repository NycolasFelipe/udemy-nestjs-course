import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString({ message: 'Texto deve ser uma string.' })
  @IsNotEmpty({ message: 'Texto é obrigatório.' })
  @MinLength(5, { message: 'Texto deve ter pelo menos 5 caracteres.' })
  @MaxLength(200, { message: 'Texto não pode ter mais de 200 caracteres.' })
  readonly texto: string;

  @IsString({ message: 'De deve ser uma string.' })
  @IsNotEmpty({ message: 'De é obrigatório.' })
  readonly de: string;

  @IsString({ message: 'Para deve ser uma string.' })
  @IsNotEmpty({ message: 'Para é obrigatório.' })
  readonly para: string;
}
