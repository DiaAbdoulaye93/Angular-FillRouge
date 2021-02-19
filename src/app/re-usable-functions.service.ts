import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReUsableFunctionsService {

  constructor() { }

  click(OneData: any, tableData: Array<any> = [], isCLicked: boolean= false): any{
    let i = 0;
    isCLicked = !isCLicked;
    if (OneData)
     {
      tableData.forEach((element: any) => {
      if ( OneData === element)
      {
        i = i + 1;
      }
    });
      if(i === 0 ){
      tableData.push(OneData);
    }
      console.log(tableData);
  }}
  remove(OneData: any, tableData: Array<any> = []): void {
    const index = tableData.indexOf(OneData);

    if (index >= 0) {
      tableData.splice(index, 1);
    }
  }
}
