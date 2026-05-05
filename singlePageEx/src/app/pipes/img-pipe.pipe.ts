import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPipe'
})
export class ImgPipePipe implements PipeTransform {

  transform(path: string, size: string): string {
    if(size === 'M')
      return ('https://image.tmdb.org/t/p/w300' + path)
    return ('https://image.tmdb.org/t/p/w500' + path)
  }

}
