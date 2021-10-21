# Programación de servicios y procesos: Angular II

Durante este tema (Tema 2 del aula virtual) comenzamos a dar los primeros pasos con Angular.

## Comandos utilizados (Angular CLI)

| Comando | Utilidad | Ejemplo / Usos |
| ------------- | ------------- |------------- |
|`ng new`  |Genera un proyecto Angular  |`ng new cursoAngular`| 
|`ng serve`  |Inicia un servidor de desarrollo  |`ng serve`| 
|`ng generate`  |Genera un componente  |<ul><li>`ng generate component`</li><li>`ng generate directive`</li><li>`ng generate pipe`</li><li>`ng generate service`</li><li>`ng generate class`</li><li>`ng generate interface`</li><li>`ng generate enum`</li><li>`ng generate module`</li></ul> | 
|`ng build`  | Construye el proyecto  | `ng build` | 
|`ng test`  | Ejecuta los test del proyecto, usando [Karma](https://karma-runner.github.io)  | `ng build` |

## Conceptos clave

* **IoC**: Inversión de control. En angular se lleva a cabo mediante inyección de depencias (DI), que no es más que permitir a Angular que instancie los objetos (bueno, si, es más, pero para nuestro nivel nos vale así)
* **Proveedores**: En Angular, [Un proveedor](https://angular.io/guide/providers) es una instrucción para el sistema de DI que indica cómo obtener un valor para una dependencia. La mayoría de las veces, estas dependencias son servicios.
* **Singleton**: Clase que, por definición, sólo existe una única vez.

## Otras cosas útiles

* Instalación de librerías adicionales:

  *  [Bootstrap](https://getbootstrap.com/)
    ```shell
    $ npm install boostrap --save
    ```
  
  *  [jQuery](https://jquery.com/)
    ```shell
    $ npm install jquery --save
    ```

  *  [Popper JS](https://popper.js.org/)
    ```shell
    $ npm install popper.js --save
    ```
