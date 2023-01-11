import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val  = parseInt(value);
    if(isNaN(val)){
      throw new BadRequestException(`${value} it not a number`);
    }
    return value;
  }
}
