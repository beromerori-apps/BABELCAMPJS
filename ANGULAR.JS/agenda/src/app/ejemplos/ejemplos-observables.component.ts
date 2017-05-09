import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { URLSearchParams, Response, RequestOptions, Jsonp } from "@angular/http";

@Component({
    selector: 'ejemplos-observables',
    template: '!!'
})

export class EjemplosObservablesComponent {
    
    private _miObservable$: Observable<any> = 
        Observable.create((observador: Observer<any>) => {
            // Con el observador puedo emitir valores, errores o decir que he terminado
            console.log('Voy a emitir');
            observador.next('Buenos dias'); 
            observador.next('1234'); 
            observador.next(true); 

            // Emitimos un error
            //observador.error('Se ha roto la trocola');
            observador.next('Otro mensaje de error tras el error');

            // Indicamos que he terminado
            observador.complete(); 
        }); 

    constructor() {
        this._miObservable$.subscribe(
            dato => {
                console.log(`Dato recibido desde el observable (next) ${dato}`);
            },
            error => {
                console.error(`Dato de error: ${error}`);
            },
            () => {
                console.log('He terminado');
            }
        );
     }
}

// Ejemplo de observables con operadores

@Component({
    selector: 'ejemplos-observables-wikipedia',
    template: `
        <div>
            <input (input)="buscarWikipedia($event)"/>
            <ul>
                <li *ngFor="let resultado of _suscripcionCajaTexto | async">
                    {{ resultado }}
                </li>
            </ul>
        </div>
    `
})

export class EjemplosObservablesWikipediaComponent implements OnDestroy {
    
    private _flujoDeDatosCajaTexto: Subject<string> = new Subject();

    resultados: string[];
    _suscripcionCajaTexto: any;

    constructor(private _jsonp: Jsonp) {
        this._suscripcionCajaTexto = 
            this._flujoDeDatosCajaTexto
                .debounceTime(300)
                .distinctUntilChanged()
                .switchMap((palabra: string) => {
                    console.log('Voy a buscar: ', palabra);
                    return this.peticionBusqueda(palabra);
                })
                // .subscribe(resultados => {
                //     this.resultados = resultados;
                // });
     }

    buscarWikipedia(evento: KeyboardEvent) {
        // Hacemos emision de evento
        const datoAEmitir = (evento.target as HTMLInputElement).value;
        this._flujoDeDatosCajaTexto.next(datoAEmitir);
    }

    peticionBusqueda(palabra: string): Observable<any> {
        const parametros: URLSearchParams = new URLSearchParams();
        parametros.set('search', palabra);
        parametros.set('action', 'opensearch');
        parametros.set('format', 'json');
        parametros.set('callback', 'JSONP_CALLBACK');

        let opciones: RequestOptions = new RequestOptions();
        opciones.search = parametros;

        // http://asdasd/?search=pepe&action=opensearch...

        return this._jsonp
                   .get('http://en.wikipedia.org/w/api.php', opciones)
                   .map((respuesta: Response ) => {
                       console.info(respuesta.json());
                       return respuesta.json()[1];
                   });
    }

    ngOnDestroy(): void {
        // Nos desuscribimos del observable
        this._suscripcionCajaTexto.unsubscribe();
    }

}