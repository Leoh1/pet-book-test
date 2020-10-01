import { EntrarPaginaPrincipal } from "../tasks";
//import * as epp from "./EntrarPaginaPrincipal";
//import {EntrarPaginaPrincipal} from "./EntrarPaginaPrincipal";
//import EntrarPaginaPrincipal from "./EntrarPaginaPrincipal";
//import asd = require("./EntrarPaginaPrincipal");
import { actorCalled } from '@serenity-js/core';
import { Click, Website } from '@serenity-js/protractor';
//import {BrowseTheWeb} from '@serenity-js/protractor/lib/screenplay/abilities'
import { Actor } from '@serenity-js/core';
import { BrowseTheWeb, Navigate, Target } from '@serenity-js/protractor'
import { Ensure, equals } from '@serenity-js/assertions';
import { by, protractor, browser } from 'protractor';

describe('Pagina principal', () => {
  
    const actor = actorCalled('jasmine').whoCan(BrowseTheWeb.using(protractor.browser));
    
    beforeEach(() => {
        browser.get(browser.baseUrl);
    });
    
    it('Entrar a la pagina principal y ver todas las fotos', () =>
        actor.attemptsTo(EntrarPaginaPrincipal.esperar()),
    );

    it('Entrar a la pagina principal para ver la primera foto que es un perro', () =>
        actor.attemptsTo(EntrarPaginaPrincipal.clickPrimeraFoto())
    );

});