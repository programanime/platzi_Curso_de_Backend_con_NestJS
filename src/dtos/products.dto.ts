import { IsString, IsNumber, IsUrl, IsPositive, IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsPositive()
  readonly price?: number;

  @IsNumber()
  readonly stock?: number;

  @IsString()
  readonly description?: string;

  @IsUrl()
  readonly image?: string;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO){}
