import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Pablo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    if (this.name === 'Pablo') {
      this.name = 'Ana';
      this.gender = 'female';
    } else {
      this.name = 'Pablo';
      this.gender = 'male';
    }
  }

  // i18nPlural
  public clients: string [] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Otawa, Canada'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout (() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Nombre actualizado tras cumplirse la promesa';
    }, 3500);
  })
}
