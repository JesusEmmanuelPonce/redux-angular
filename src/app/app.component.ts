import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementar, incrementar } from './contador/contador.actions';

interface AppState{
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  contador: number;
  
  constructor(private store: Store<AppState>){
    this.store.select("contador")
    .subscribe(contador => this.contador = contador);
  }

  incrementar():void{
    this.store.dispatch( incrementar() );
  }

  decrementar():void{
    this.store.dispatch( decrementar() );
  }

}
