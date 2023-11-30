import { Pipe, PipeTransform, Sanitizer, SecurityContext } from "@angular/core";

@Pipe ({
  name: 'italicName'
})

export class NamePipe implements PipeTransform {

  transform(value: string): any {
    return '<i>' + value + '</i>';
}

}
