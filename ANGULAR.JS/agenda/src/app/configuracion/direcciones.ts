import { OpaqueToken, Provider } from '@angular/core';

export const Direcciones: OpaqueToken = new OpaqueToken('Direcciones');

export const ProveedorDirecciones: Provider = {
    provide: Direcciones,
    useValue: {
        servidor: 'http://localhost:3004',
        faker: 'http://faker.hook.io/?property=image.avatar'
    }
}