import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {

    const INVALID_STATUS:boolean = status === undefined || status === null;
    
    if (INVALID_STATUS === true){
      return 'Status indisponível ou inválido'
    }
    
    if (status === true){
      return 'Ativo';
    }
    return 'Inativo';
  }

}
