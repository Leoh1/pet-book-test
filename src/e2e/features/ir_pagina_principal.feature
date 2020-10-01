Feature: Ir a la pagina principal
  Como usuario
  Quiero entrar a la pagina principal
  Para ver todas las imagenes

  Scenario: Entrar a la pagina principal y ver todas las fotos
    Given Entro a la pagina principal
    When No hago nada
    Then debe ver cinco(5) imagenes