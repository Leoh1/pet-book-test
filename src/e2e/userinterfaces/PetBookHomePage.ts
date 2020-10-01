import { by, protractor, browser } from 'protractor';
import { Target } from '@serenity-js/protractor';
export class PetBookHomePage {
    static PRIMERA_IMAGEN = Target.the('Contenedor de las imagenes').located(by.css('.img'));
}