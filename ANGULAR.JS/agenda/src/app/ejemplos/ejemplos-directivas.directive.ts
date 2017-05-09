import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({ selector: '[EjemplosDirectivasAtributo]' })

export class EjemplosDirectivasAtributoDirective {
    
    // Con Renderer establecemos los atributos del elemento
    // en el cual esta situada la directiva
    // El elemento en cuestion lo obtenemos con:
    // ElementRef.nativeElement

    constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

    @HostListener('mouseenter')
    ponerEstilo() {
        this.cambiarEstilo(true);
    }

    @HostListener('mouseleave')
    quitarEstilo() {
        this.cambiarEstilo(false);
    }

    //@HostListener('mouseenter')
    cambiarEstilo(activo: boolean) {
        console.log('Estoy encima');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 
            'font-weight', activo ? 'bold': 'normal');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 
            'background-color', activo  ? 'red': 'white');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 
            'color', activo ? 'white': 'black');

    }
}