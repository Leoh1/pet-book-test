import { AnswersQuestions, PerformsActivities, Task, UsesAbilities } from '@serenity-js/core';
import { actorCalled, AssertionError, Duration } from '@serenity-js/core';
import {Click, isClickable, isVisible, Wait} from '@serenity-js/protractor';
import { PetBookHomePage } from '../userinterfaces';
export const EntrarPaginaPrincipal = {
    esperar: () =>
        Task.where(`#actor selecciona un producto`,
            Wait.for(Duration.ofMilliseconds(2000)),
        ),

    clickPrimeraFoto: () =>
        Task.where(`#actor selecciona un producto`,
            Wait.for(Duration.ofMilliseconds(2000)),
            Click.on(PetBookHomePage.PRIMERA_IMAGEN),
            Wait.for(Duration.ofMilliseconds(2000)),
        )
};