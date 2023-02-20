
import {PipeTransform,Pipe} from '@angular/core'

@Pipe({
    name:'mydescription'
})

export class DescriptionPipe implements PipeTransform
 {
    transform(value: any) {
        let description:string = value+'';

        let formattedDescription:string = '';

        formattedDescription = description.slice(0,9)+'.....';

       console.log('pipe method '+formattedDescription);
        return formattedDescription;
    }
}
