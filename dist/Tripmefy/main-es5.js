function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page1_page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page1/page1.component */
    "./src/app/page1/page1.component.ts");
    /* harmony import */


    var _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio-sesion/inicio-sesion.component */
    "./src/app/inicio-sesion/inicio-sesion.component.ts");
    /* harmony import */


    var _registro_registro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./registro/registro.component */
    "./src/app/registro/registro.component.ts");
    /* harmony import */


    var _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./perfiles/perfil-organizador/perfil-organizador.component */
    "./src/app/perfiles/perfil-organizador/perfil-organizador.component.ts");
    /* harmony import */


    var _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./perfiles/perfil-viajero/perfil-viajero.component */
    "./src/app/perfiles/perfil-viajero/perfil-viajero.component.ts");
    /* harmony import */


    var _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./viajes/crear-viaje/crear-viaje.component */
    "./src/app/viajes/crear-viaje/crear-viaje.component.ts");
    /* harmony import */


    var _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./viajes/mis-viajes/mis-viajes.component */
    "./src/app/viajes/mis-viajes/mis-viajes.component.ts");
    /* harmony import */


    var _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./viajes/unirse-ciudad/unirse-ciudad.component */
    "./src/app/viajes/unirse-ciudad/unirse-ciudad.component.ts");
    /* harmony import */


    var _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./viajes/unirse-pais/unirse-pais.component */
    "./src/app/viajes/unirse-pais/unirse-pais.component.ts");
    /* harmony import */


    var _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./viajes/unirse-continente/unirse-continente.component */
    "./src/app/viajes/unirse-continente/unirse-continente.component.ts");
    /* harmony import */


    var _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./viajes/viaje/viaje.component */
    "./src/app/viajes/viaje/viaje.component.ts");
    /* harmony import */


    var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./not-found404/not-found404.component */
    "./src/app/not-found404/not-found404.component.ts");
    /* harmony import */


    var _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./privacidad/privacidad.component */
    "./src/app/privacidad/privacidad.component.ts");
    /* harmony import */


    var _logros_logros_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./logros/logros.component */
    "./src/app/logros/logros.component.ts");
    /* harmony import */


    var _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./bienvenida/bienvenida.component */
    "./src/app/bienvenida/bienvenida.component.ts");
    /* harmony import */


    var _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/pedir-imagen/pedir-imagen.component */
    "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");
    /* harmony import */


    var _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pruebas/pruebas.component */
    "./src/app/pruebas/pruebas.component.ts");

    var routes = [{
      path: 'page1',
      component: _page1_page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"]
    }, {
      path: 'inicio-sesion',
      component: _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_3__["InicioSesionComponent"]
    }, {
      path: 'registro',
      component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_4__["RegistroComponent"]
    }, {
      path: 'perfil-organizador/:id',
      component: _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_5__["PerfilOrganizadorComponent"]
    }, {
      path: 'perfil-viajero/:id',
      component: _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_6__["PerfilViajeroComponent"]
    }, {
      path: 'crear-viaje',
      component: _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_7__["CrearViajeComponent"]
    }, {
      path: 'mis-viajes',
      component: _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_8__["MisViajesComponent"]
    }, {
      path: 'unirse-ciudad/:id',
      component: _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_9__["UnirseCiudadComponent"]
    }, {
      path: 'unirse-pais',
      component: _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_10__["UnirsePaisComponent"]
    }, {
      path: 'unirse-continente',
      component: _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_11__["UnirseContinenteComponent"]
    }, {
      path: 'viaje/:id',
      component: _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_12__["ViajeComponent"]
    }, {
      path: 'privacidad',
      component: _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_14__["PrivacidadComponent"]
    }, {
      path: 'not-found404',
      component: _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_13__["NotFound404Component"]
    }, {
      path: 'logros',
      component: _logros_logros_component__WEBPACK_IMPORTED_MODULE_15__["LogrosComponent"]
    }, {
      path: 'bienvenida',
      component: _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_16__["BienvenidaComponent"]
    }, {
      path: 'pedir-imagen',
      component: _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_17__["PedirImagenComponent"]
    }, {
      path: 'pruebas',
      component: _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_18__["PruebasComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'page1'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Tripmefy';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "general-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./inicio-sesion/inicio-sesion.component */
    "./src/app/inicio-sesion/inicio-sesion.component.ts");
    /* harmony import */


    var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./not-found404/not-found404.component */
    "./src/app/not-found404/not-found404.component.ts");
    /* harmony import */


    var _page1_page1_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./page1/page1.component */
    "./src/app/page1/page1.component.ts");
    /* harmony import */


    var _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./privacidad/privacidad.component */
    "./src/app/privacidad/privacidad.component.ts");
    /* harmony import */


    var _registro_registro_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./registro/registro.component */
    "./src/app/registro/registro.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./perfiles/perfil-organizador/perfil-organizador.component */
    "./src/app/perfiles/perfil-organizador/perfil-organizador.component.ts");
    /* harmony import */


    var _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./perfiles/perfil-viajero/perfil-viajero.component */
    "./src/app/perfiles/perfil-viajero/perfil-viajero.component.ts");
    /* harmony import */


    var _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./viajes/crear-viaje/crear-viaje.component */
    "./src/app/viajes/crear-viaje/crear-viaje.component.ts");
    /* harmony import */


    var _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./viajes/mis-viajes/mis-viajes.component */
    "./src/app/viajes/mis-viajes/mis-viajes.component.ts");
    /* harmony import */


    var _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./viajes/unirse-ciudad/unirse-ciudad.component */
    "./src/app/viajes/unirse-ciudad/unirse-ciudad.component.ts");
    /* harmony import */


    var _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./viajes/unirse-continente/unirse-continente.component */
    "./src/app/viajes/unirse-continente/unirse-continente.component.ts");
    /* harmony import */


    var _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./viajes/unirse-pais/unirse-pais.component */
    "./src/app/viajes/unirse-pais/unirse-pais.component.ts");
    /* harmony import */


    var _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./viajes/viaje/viaje.component */
    "./src/app/viajes/viaje/viaje.component.ts");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _logros_logros_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./logros/logros.component */
    "./src/app/logros/logros.component.ts");
    /* harmony import */


    var _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./bienvenida/bienvenida.component */
    "./src/app/bienvenida/bienvenida.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./shared/volver/volver.component */
    "./src/app/shared/volver/volver.component.ts");
    /* harmony import */


    var _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./shared/boton/boton.component */
    "./src/app/shared/boton/boton.component.ts");
    /* harmony import */


    var _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./shared/scroll-top/scroll-top.component */
    "./src/app/shared/scroll-top/scroll-top.component.ts");
    /* harmony import */


    var _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./shared/pedir-imagen/pedir-imagen.component */
    "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");
    /* harmony import */


    var _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./pruebas/pruebas.component */
    "./src/app/pruebas/pruebas.component.ts");
    /* harmony import */


    var _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./shared/puntuacion-pu/puntuacion-pu.component */
    "./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts");
    /* harmony import */


    var _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./shared/comentario-pu/comentario-pu.component */
    "./src/app/shared/comentario-pu/comentario-pu.component.ts");
    /* harmony import */


    var _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./shared/edicion-pu/edicion-pu.component */
    "./src/app/shared/edicion-pu/edicion-pu.component.ts");
    /* harmony import */


    var _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./shared/mensaje/mensaje.component */
    "./src/app/shared/mensaje/mensaje.component.ts"); // ELEMENTOS UI ESPECÍFICOS:


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase), _angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__["AngularFireStorageModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_28__["BsDropdownModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__["ModalModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"], _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_34__["InicioSesionComponent"], _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_35__["NotFound404Component"], _page1_page1_component__WEBPACK_IMPORTED_MODULE_36__["Page1Component"], _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_37__["PrivacidadComponent"], _registro_registro_component__WEBPACK_IMPORTED_MODULE_38__["RegistroComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__["FooterComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_40__["HeaderComponent"], _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_41__["PerfilOrganizadorComponent"], _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_42__["PerfilViajeroComponent"], _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_43__["CrearViajeComponent"], _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_44__["MisViajesComponent"], _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_45__["UnirseCiudadComponent"], _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_46__["UnirseContinenteComponent"], _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_47__["UnirsePaisComponent"], _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_48__["ViajeComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_49__["CarouselComponent"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__["VolverComponent"], _logros_logros_component__WEBPACK_IMPORTED_MODULE_50__["LogrosComponent"], _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_51__["BienvenidaComponent"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__["VolverComponent"], _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_55__["ScrollTopComponent"], _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_54__["BotonComponent"], _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_56__["PedirImagenComponent"], _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_57__["PruebasComponent"], _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_58__["PuntuacionPuComponent"], _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_59__["ComentarioPuComponent"], _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_60__["EdicionPuComponent"], _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__["MensajeComponent"]],
        imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__["AngularFireStorageModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_28__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__["ModalModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"], _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_34__["InicioSesionComponent"], _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_35__["NotFound404Component"], _page1_page1_component__WEBPACK_IMPORTED_MODULE_36__["Page1Component"], _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_37__["PrivacidadComponent"], _registro_registro_component__WEBPACK_IMPORTED_MODULE_38__["RegistroComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__["FooterComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_40__["HeaderComponent"], _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_41__["PerfilOrganizadorComponent"], _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_42__["PerfilViajeroComponent"], _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_43__["CrearViajeComponent"], _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_44__["MisViajesComponent"], _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_45__["UnirseCiudadComponent"], _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_46__["UnirseContinenteComponent"], _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_47__["UnirsePaisComponent"], _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_48__["ViajeComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_49__["CarouselComponent"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__["VolverComponent"], _logros_logros_component__WEBPACK_IMPORTED_MODULE_50__["LogrosComponent"], _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_51__["BienvenidaComponent"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__["VolverComponent"], _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_55__["ScrollTopComponent"], _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_54__["BotonComponent"], _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_56__["PedirImagenComponent"], _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_57__["PruebasComponent"], _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_58__["PuntuacionPuComponent"], _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_59__["ComentarioPuComponent"], _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_60__["EdicionPuComponent"], _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__["MensajeComponent"]],
          imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase), _angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__["AngularFireStorageModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_28__["BsDropdownModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__["ModalModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bienvenida/bienvenida.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/bienvenida/bienvenida.component.ts ***!
    \****************************************************/

  /*! exports provided: BienvenidaComponent */

  /***/
  function srcAppBienvenidaBienvenidaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BienvenidaComponent", function () {
      return BienvenidaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/boton/boton.component */
    "./src/app/shared/boton/boton.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BienvenidaComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BienvenidaComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/mis-viajes"];
    };

    var BienvenidaComponent =
    /*#__PURE__*/
    function () {
      function BienvenidaComponent() {
        _classCallCheck(this, BienvenidaComponent);

        this.textoMotivacion = "";
        this.textoAccion = "";
        this.textoViajero = [{
          'motivacion': '¡Hola viajero! ¿Estás cansado del mismo rollo de siempre? Organizar un viaje durante meses para que acabe saliendo mal, o peor, que ni siquiera acabe llevándose a cabo. Las agencias de viajes son costosas y las ofertas no suelen adaptarse a lo buscado. Pues estás de suerte, porque has llegado a la página que satisface todas tus necesidades. Busca ofertas de agencias, únete y vete de viaje con gente como tú. ¿A qué esperas? ¡Y no olvides rellenar tu perfil! será la forma de conocerte para los demás viajeros. ¿A qué esperas? Dale al botón y comienza a vivir aventuras inolvidables con gente diferente y al mejor precio.',
          'accion': 'Busca tu primera aventura'
        }];
        this.textoOrganizador = [{
          'motivacion': '¡Hola organizador! Atraer a la gente cada vez es más complicado. Internet ha puesto al alcance de cualquiera organizar un viaje, y los jóvenes no quieren destinar una parte del dinero a las comisiones de las agencias. Con Tripmefy tendrás la oportunidad de acercar tu negocio a un público joven, subiendo ofertas de baja demanda, permitiras unirse a millones de usuarios que querrán llevar a cabo ese viaje. Los pagos se realizan de forma totalmente segura através de paypal, además, podrás aceptar o rechazar a los solicitantes basándote en su perfil, comentarios y puntuaciones. Consigue visibilidad entre el público joven, vende más y lleva tu negocio al siguiente nivel. ¿A qué esperas? Haz click en crear y sube tu primera oferta ',
          'accion': 'Sube tu primera oferta'
        }];
      }

      _createClass(BienvenidaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /**Obtener variable global tipo y meterla en usuario (falta) */

          /**ESTO SIRVE PARA PRUEBAS DE TIPO DE USUARIO */
          // localStorage.setItem('usuario', 'viajero');
          //localStorage.setItem('usuario', 'organizador');

          /*SI SE INTENTA ACCEDER A ESTA PAGINA SIN HABER INICIADO SESION RETORNAREMOS
          A LA PAGINA PRINCIPAL */
          if (localStorage.getItem('usuario') == null) {
            localStorage.clear();
            console.log("Any user is logged");
            var pagInicio = window.location.origin + '/page1';
            window.location.assign(pagInicio);
          }

          var usuario = localStorage.getItem('tipo');
          /**Este switch evalua la variable usuario y decide qué texto mostrar */

          switch (usuario) {
            case 'viajero':
              this.textoMotivacion = this.textoViajero[0]["motivacion"];
              this.textoAccion = this.textoViajero[0]["accion"];
              this.organizador = false;
              break;

            case 'organizador':
              this.textoMotivacion = this.textoOrganizador[0]["motivacion"];
              this.textoAccion = this.textoOrganizador[0]["accion"];
              this.organizador = true;
              break;

            default:
              this.textoMotivacion = this.textoViajero[0]["motivacion"];
              this.textoAccion = this.textoViajero[0]["accion"];
              break;
          }
        }
      }]);

      return BienvenidaComponent;
    }();

    BienvenidaComponent.ɵfac = function BienvenidaComponent_Factory(t) {
      return new (t || BienvenidaComponent)();
    };

    BienvenidaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BienvenidaComponent,
      selectors: [["app-bienvenida"]],
      decls: 14,
      vars: 6,
      consts: [["titulo", "Aqu\xED empieza todo"], [1, "contenido"], [1, "tarjeta"], [1, "principal"], ["class", "videoViajero", 4, "ngIf"], ["class", "videoOrganizador", 4, "ngIf"], [1, "inferior"], ["texto", "COMENZAR", 3, "routerLink"], [1, "videoViajero"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/nWrR_AraVUE", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "videoOrganizador"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/QHfSASXi-nA", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]],
      template: function BienvenidaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA1 Bienvenido !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BienvenidaComponent_div_6_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BienvenidaComponent_div_7_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-boton", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.organizador == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.organizador == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textoMotivacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textoAccion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_3__["BotonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".contenido[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.tarjeta[_ngcontent-%COMP%] {\n  height: 40%;\n  width: 90%;\n  margin-top: 50px;\n}\n.tarjeta[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  text-align: center;\n  font-weight: bolder;\n  color: #009788;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.tarjeta[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-between;\n}\n.principal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 50%;\n  font-weight: lighter;\n  text-align: justify;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.principal[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 200px;\n}\n.tarjeta[_ngcontent-%COMP%]   .inferior[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  text-align: center;\n}\n.inferior[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.inferior[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #009788;\n  color: #ffffff;\n  font-weight: bolder;\n}\n.inferior[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 2px 0px #cfd8dc;\n}\n@media screen and (max-device-width: 480px) {\n  .tarjeta[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .principal[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .principal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .tarjeta[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n\n  .tarjeta[_ngcontent-%COMP%]   .inferior[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL2JpZW52ZW5pZGEvYmllbnZlbmlkYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmllbnZlbmlkYS9iaWVudmVuaWRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFPekI7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEYUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDVko7QURZQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBbEJXO0VBbUJYLHdJQUFBO0FDVEo7QURXQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDUko7QURVQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0lBQUE7QUNQSjtBRFNBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNOSjtBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ05KO0FEUUE7RUFDSSxnQkFBQTtFQUNBLHdJQUFBO0FDTEo7QURPQTtFQUNJLGtCQUFBO0VBQ0EseUJBL0NXO0VBZ0RYLGNBekRLO0VBMERMLG1CQUFBO0FDSko7QURNQTtFQUdJLG1DQUFBO0FDSEo7QURNQTtFQUVBO0lBQ0ksZUFBQTtFQ0pGOztFRE9GO0lBQ0ksV0FBQTtFQ0pGOztFRE1GO0lBQ0ksV0FBQTtFQ0hGOztFREtGO0lBQ0ksZUFBQTtFQ0ZGOztFRElGO0lBQ0ksZUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iaWVudmVuaWRhL2JpZW52ZW5pZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcbiRsZXR0ZXJzOiAjMDNhOWY0O1xyXG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xyXG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xyXG5cclxuXHJcbi5jb250ZW5pZG97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGFyamV0YXtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnRhcmpldGEgaDF7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG4udGFyamV0YSAucHJpbmNpcGFse1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnByaW5jaXBhbCBwe1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnByaW5jaXBhbCAjdmlkZW97XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnRhcmpldGEgLmluZmVyaW9ye1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5mZXJpb3IgaDJ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG4uaW5mZXJpb3IgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtdmVyZG9zbztcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uaW5mZXJpb3IgYnV0dG9uOmhvdmVye1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG5cclxuLnRhcmpldGEgLnByaW5jaXBhbHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnByaW5jaXBhbCAjdmlkZW97XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucHJpbmNpcGFsIHB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGFyamV0YXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4udGFyamV0YSAuaW5mZXJpb3J7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbn0iLCIvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLmNvbnRlbmlkbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFyamV0YSB7XG4gIGhlaWdodDogNDAlO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udGFyamV0YSBoMSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICMwMDk3ODg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50YXJqZXRhIC5wcmluY2lwYWwge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcmluY2lwYWwgcCB7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJpbmNpcGFsICN2aWRlbyB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi50YXJqZXRhIC5pbmZlcmlvciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZmVyaW9yIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmluZmVyaW9yIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTc4ODtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5pbmZlcmlvciBidXR0b246aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCAjY2ZkOGRjO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCAjY2ZkOGRjO1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggI2NmZDhkYztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC50YXJqZXRhIC5wcmluY2lwYWwge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC5wcmluY2lwYWwgI3ZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcmluY2lwYWwgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGFyamV0YSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLnRhcmpldGEgLmluZmVyaW9yIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BienvenidaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bienvenida',
          templateUrl: './bienvenida.component.html',
          styleUrls: ['./bienvenida.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/carousel/carousel.component.ts":
  /*!************************************************!*\
    !*** ./src/app/carousel/carousel.component.ts ***!
    \************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CarouselComponent_ng_container_1_img_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_1_img_1_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133);

          var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r132.onClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r128.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("@carouselAnimation", undefined);
      }
    }

    function CarouselComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_img_1_Template, 1, 2, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r129 = ctx.index;

        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r129 === ctx_r127.currentSlide);
      }
    }

    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent(_activatedRoute, route) {
        _classCallCheck(this, CarouselComponent);

        this._activatedRoute = _activatedRoute;
        this.route = route;
        this.currentSlide = 0;
        /**misLinks se emplea para pasar por parametro los links correspodientes a las imágenes, en el mismo orden.
         * Debe tener la siguiente estructura:
         * [
         *  [parte1, id1],
         *  [parte2, id2],
         *      ...
         *  [parte3, id3]
         * ]
         */

        this.primero = "";
        this.segundo = "";
      }

      _createClass(CarouselComponent, [{
        key: "onPreviousClick",
        value: function onPreviousClick() {
          var previous = this.currentSlide - 1;
          this.currentSlide = previous < 0 ? this.slides.length - 1 : previous; //console.log("previous clicked, new current slide is: ", this.currentSlide);
        }
      }, {
        key: "onNextClick",
        value: function onNextClick() {
          var next = this.currentSlide + 1;
          this.currentSlide = next === this.slides.length ? 0 : next; //console.log("next clicked, new current slide is: ", this.currentSlide);
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.links == undefined || this.links.length <= 0) {
            //si no tenemos links devolvemos un cero y ya, no hacemos nada
            return 0;
          } else {
            //si tenemos links hacemos lo siguiente
            var origin = window.location.origin + '/'; //obtenemos la parte de la izquierda de la url
            //var datos = window.location.pathname;
            //var routerLink = datos.split('/');

            var primero = '/' + this.links[this.currentSlide][0] + '/'; //primero corresponde a la primera posicion del slide donde estemos

            var segundo = this.links[this.currentSlide][1]; //var segundo = 'yhySIyMyRGwIqtwEeuZV';

            this.primero = primero;
            this.segundo = segundo;
            var destino = primero + segundo;
            this.route.navigate([destino]);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["carousel"]],
      inputs: {
        slides: "slides",
        links: "links"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "carousel"], [4, "ngFor", "ngForOf"], [1, "control", "prev", 3, "click"], [1, "arrow", "left"], [1, "control", "next", 3, "click"], [1, "arrow", "right"], ["class", "slide", 3, "src", "click", 4, "ngIf"], [1, "slide", 3, "src", "click"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_2_listener() {
            return ctx.onPreviousClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_4_listener() {
            return ctx.onNextClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides)("ngForOf", ctx.misLinks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.5em;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  border-radius: 0.5em;\n}\n\n.slide[_ngcontent-%COMP%]:hover {\n  transform: scale(1.025);\n}\n\n.control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 3em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  \n}\n\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n}\n\n.control.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.control.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n\n\n.arrow[_ngcontent-%COMP%] {\n  display: block;\n  border-left: 0.1em solid white;\n  border-bottom: 0.1em solid white;\n  width: 0.5em;\n  height: 0.5em;\n}\n\n.arrow.left[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.arrow.right[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLE9BQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBRUEsZ0VBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRE9FO0VBQ0UsdUJBQUE7QUNKSjs7QURVRTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLDhEQUFBO0VBTUEseUJBQUE7QUNiSjs7QURTSTtFQUNFLFVBQUE7QUNQTjs7QURXSTtFQUNFLFFBQUE7QUNUTjs7QURXSTtFQUNFLE9BQUE7QUNUTjs7QURhRSxxQkFBQTs7QUFDQTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNWSjs7QURZSTtFQUNFLHdCQUFBO0FDVk47O0FEWUk7RUFDRSx5QkFBQTtBQ1ZOIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENhcm91c2VsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbjpob3N0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgLy8gem9vbSBlZmZlY3Qgb24gaG92ZXJcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xyXG4gIH1cclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gTmV4dCBhbmQgUHJldiBidXR0b25zXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC5jb250cm9sIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogMDsgLy8gcmVtb3ZlIGJsdWUgb3V0bGluZSBib3JkZXIsIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmUgc3RpbGwgZm9jdXNzYWJsZSBmb3IgYWNjZXNzaWJpbGl0eVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG4gICAgLy8gb3BhY2l0eSBlZmZlY3Qgb24gaG92ZXJcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xyXG4gIFxyXG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgYnV0dG9ucyAqL1xyXG4gICAgJi5uZXh0IHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmLnByZXYge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBzdHlsZSB0aGUgYXJyb3dzICovXHJcbiAgLmFycm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuMWVtIHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgd2hpdGU7XHJcbiAgICB3aWR0aDogMC41ZW07XHJcbiAgICBoZWlnaHQ6IDAuNWVtO1xyXG4gIFxyXG4gICAgJi5sZWZ0IHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgJi5yaWdodCB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuIiwiOmhvc3Qge1xuICBmbGV4OiAxO1xufVxuXG4uY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG4uc2xpZGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbn1cblxuLmNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDNlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogODAlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcbiAgLyogUG9zaXRpb24gdGhlIGJ1dHRvbnMgKi9cbn1cbi5jb250cm9sOmhvdmVyLCAuY29udHJvbDpmb2N1cyB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29udHJvbC5uZXh0IHtcbiAgcmlnaHQ6IDA7XG59XG4uY29udHJvbC5wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuLyogc3R5bGUgdGhlIGFycm93cyAqL1xuLmFycm93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiAwLjFlbSBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgd2hpdGU7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbn1cbi5hcnJvdy5sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmFycm93LnJpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('carouselAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "carousel",
          templateUrl: "./carousel.component.html",
          styleUrls: ["./carousel.component.scss"],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('carouselAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        links: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/inicio-sesion/inicio-sesion.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/inicio-sesion/inicio-sesion.component.ts ***!
    \**********************************************************/

  /*! exports provided: InicioSesionComponent */

  /***/
  function srcAppInicioSesionInicioSesionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioSesionComponent", function () {
      return InicioSesionComponent;
    });
    /* harmony import */


    var src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/interfaces/usuario */
    "./src/app/interfaces/usuario.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/volver/volver.component */
    "./src/app/shared/volver/volver.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var InicioSesionComponent =
    /*#__PURE__*/
    function () {
      function InicioSesionComponent(route, authSvc, userService) {
        _classCallCheck(this, InicioSesionComponent);

        this.route = route;
        this.authSvc = authSvc;
        this.userService = userService;
        this.hide = true;
      }

      _createClass(InicioSesionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.route.navigate(['/page1']);
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var form = new src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]();
          form.email = this.email;
          form.password = this.password;
          this.authSvc.loginByEmail(form);
          this.userService.getUsuariosByEmail(this.email).subscribe(function (res) {
            var i;

            for (i = 0; i < res.length; i++) {
              //nunca va a haber más de un usuario con ese email
              localStorage.setItem("usuario", res[i].id);
              localStorage.setItem("tipo", res[i].tipo);
            }
          });
        }
      }, {
        key: "checkFields",
        value: function checkFields() {
          if (this.password === '' || this.email === '' || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.email)) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return InicioSesionComponent;
    }();

    InicioSesionComponent.ɵfac = function InicioSesionComponent_Factory(t) {
      return new (t || InicioSesionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"]));
    };

    InicioSesionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InicioSesionComponent,
      selectors: [["app-inicio-sesion"]],
      decls: 30,
      vars: 7,
      consts: [[1, "contenedor"], [1, "lateral-izq"], ["src", "./assets/tripmefy.png"], [1, "lateral-drch"], [1, "volver", 3, "click"], [3, "ngSubmit"], [1, "inicio_datos"], [1, "input"], ["matInput", "", "placeholder", "Ej. pat@example.com", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "input"], ["matInput", "", "name", "password", "required", "", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "boton_inicio"], ["type", "submit", "mat-raised-button", "", 1, "boton", 2, "width", "200px", 3, "disabled"], ["href", "/registro"]],
      template: function InicioSesionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-volver", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InicioSesionComponent_Template_app_volver_click_4_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "INICIO DE SESI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function InicioSesionComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InicioSesionComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Introduce tu contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InicioSesionComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InicioSesionComponent_Template_button_click_18_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " INICIAR SESI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\xBFA\xFAn no est\xE1s registrado? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Reg\xEDstrate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.checkFields());
        }
      },
      directives: [_shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_5__["VolverComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.contenedor[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.lateral-izq[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 50%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n\n.lateral-drch[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#004cbe, #0da8de);\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n  background-attachment: fixed;\n  overflow: scroll;\n  padding-top: 15%;\n  padding-left: 20px;\n  color: white;\n}\n.lateral-drch[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: none;\n}\n.lateral-drch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #004cbe;\n}\n.volver[_ngcontent-%COMP%] {\n  color: white;\n}\n.inicio_datos[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n.input[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.boton_inicio[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2%;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: white !important;\n}\n .mat-form-field-underline {\n  \n  background-color: white !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: white !important;\n}\n\n  input.mat-input-element {\n  color: white;\n}\n\n@media screen and (max-device-width: 700px) {\n  \n  .contenedor[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    display: inline-block;\n    background-color: #ffffff;\n    height: 620px;\n  }\n\n  \n  .lateral-izq[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: auto;\n    height: 70%;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70%;\n  }\n\n  \n  .lateral-drch[_ngcontent-%COMP%] {\n    background-image: none;\n    background-color: #ffffff;\n    width: auto;\n    height: 30%;\n    padding-bottom: 20px;\n  }\n\n  .lateral-drch[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    font-weight: bold;\n    color: #03a9f4;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  }\n\n  .inicio_datos[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 0%;\n  }\n\n  .input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .boton_inicio[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 0%;\n    margin-bottom: 5%;\n  }\n\n    .mat-focused .mat-form-field-label {\n    \n    color: #004cbe !important;\n  }\n\n   .mat-form-field-underline {\n    \n    background-color: #004cbe !important;\n  }\n\n   .mat-form-field-ripple {\n    \n    background-color: #004cbe !important;\n  }\n\n  \n    input.mat-input-element {\n    color: #004cbe;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvLXNlc2lvbi9pbmljaW8tc2VzaW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hcmlvbG96YW5vY29ydGVzL1VuaXZlcnNpZGFkX0xvY2FsL1RyaXBtZWZ5L3NyYy9hcHAvaW5pY2lvLXNlc2lvbi9pbmljaW8tc2VzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0lPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQUl6Qix1Q0FBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHdJQUFBO0FEUEo7QUNZQSwyQ0FBQTtBQUNBO0VBQ0kseUJBeEJLO0VBeUJMLFVBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURWSjtBQ2FBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtBRFhKO0FDZUEsNkNBQUE7QUFDQTtFQUNFLG1EQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURaRjtBQ2dCQTtFQUNFLGFBQUE7QURiRjtBQ2dCQTtFQUNFLHFCQUFBO0VBQ0EsY0FwRVc7QUR1RGI7QUNnQkE7RUFDRSxZQUFBO0FEYkY7QUNnQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FEYkY7QUNnQkE7RUFDRSxVQUFBO0FEYkY7QUNnQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QURiSjtBQ2lCQTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7QURkRjtBQ2lCQztFQUNDLDRCQUFBO0VBQ0Esa0NBQUE7QURkRjtBQ2lCQTtFQUNDLHlDQUFBO0VBQ0Esa0NBQUE7QURkRDtBQ2lCQSxzQkFBQTtBQUNBO0VBQ0UsWUFBQTtBRGRGO0FDK0VBLGVBQUE7QUFDQTtFQUVFLHVDQUFBO0VBQ0U7SUFDSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EseUJBbkxDO0lBb0xELGFBQUE7RUQ3RU47O0VDZ0ZBLDJDQUFBO0VBQ0U7SUFDSSx5QkF6TEM7SUEwTEQsV0FBQTtJQUNBLFdBQUE7RUQ3RU47O0VDZ0ZFO0lBQ0ksV0FBQTtFRDdFTjs7RUNnRkUsNkNBQUE7RUFDQTtJQUNJLHNCQUFBO0lBQ0EseUJBck1DO0lBc01ELFdBQUE7SUFDQSxXQUFBO0lBRUEsb0JBQUE7RUQ5RU47O0VDa0ZFO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBcE5JO0lBcU5KLHdJQUFBO0VEL0VKOztFQ2tGRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtFRC9FSjs7RUNrRkU7SUFDRSxVQUFBO0VEL0VKOztFQ2tGRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VEL0VKOztFQ21GRTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7RURoRko7O0VDbUZHO0lBQ0MsNEJBQUE7SUFDQSxvQ0FBQTtFRGhGSjs7RUNtRkU7SUFDQyx5Q0FBQTtJQUNBLG9DQUFBO0VEaEZIOztFQ21GRSxzQkFBQTtFQUNBO0lBQ0UsY0F4UE87RUR3S1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby1zZXNpb24vaW5pY2lvLXNlc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4vKiotLS0tLUNPTlRFTkVET1IgWSBGVUVOVEUgQ09Nw5pOLS0tLSoqL1xuLmNvbnRlbmVkb3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLyoqLS0tLUxBVEVSQUwgSVpRVUlFUkRPIERFIExBIFDDgUdJTkEtLS0tKiovXG4ubGF0ZXJhbC1penEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubGF0ZXJhbC1penEgaW1nIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLyoqLS0tLS0tTEFURVJBTCBERVJFQ0hPIERFIExBIFDDgUdJTkEtLS0tLS0qKi9cbi5sYXRlcmFsLWRyY2gge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwNGNiZSwgIzBkYThkZSk7XG4gIHdpZHRoOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nLXRvcDogMTUlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxhdGVyYWwtZHJjaCBoMSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYXRlcmFsLWRyY2ggYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDRjYmU7XG59XG5cbi52b2x2ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbmljaW9fZGF0b3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5ib3Rvbl9pbmljaW8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi8qIGlucHV0IGNvbG9yIGNsYXNzICovXG46Om5nLWRlZXAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNzAwcHgpIHtcbiAgLyoqLS0tLS1DT05URU5FRE9SIFkgRlVFTlRFIENPTcOaTi0tLS0qKi9cbiAgLmNvbnRlbmVkb3Ige1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDYyMHB4O1xuICB9XG5cbiAgLyoqLS0tLUxBVEVSQUwgSVpRVUlFUkRPIERFIExBIFDDgUdJTkEtLS0tKiovXG4gIC5sYXRlcmFsLWl6cSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxuXG4gIC5sYXRlcmFsLWl6cSBpbWcge1xuICAgIGhlaWdodDogNzAlO1xuICB9XG5cbiAgLyoqLS0tLS0tTEFURVJBTCBERVJFQ0hPIERFIExBIFDDgUdJTkEtLS0tLS0qKi9cbiAgLmxhdGVyYWwtZHJjaCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMzAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmxhdGVyYWwtZHJjaCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwM2E5ZjQ7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5pbmljaW9fZGF0b3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgfVxuXG4gIC5pbnB1dCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuXG4gIC5ib3Rvbl9pbmljaW8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gICAgY29sb3I6ICMwMDRjYmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGNiZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGNiZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogaW5wdXQgY29sb3IgY2xhc3MgKi9cbiAgOjpuZy1kZWVwIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjb2xvcjogIzAwNGNiZTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcblxyXG5cclxuLyoqLS0tLS1DT05URU5FRE9SIFkgRlVFTlRFIENPTcOaTi0tLS0qKi9cclxuLmNvbnRlbmVkb3J7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxufVxyXG5cclxuLyoqLS0tLUxBVEVSQUwgSVpRVUlFUkRPIERFIExBIFDDgUdJTkEtLS0tKiovXHJcbi5sYXRlcmFsLWl6cXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubGF0ZXJhbC1penEgaW1ne1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5cclxuLyoqLS0tLS0tTEFURVJBTCBERVJFQ0hPIERFIExBIFDDgUdJTkEtLS0tLS0qKi9cclxuLmxhdGVyYWwtZHJjaHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGF6dWwtcm95YWwsICRhenVsLWNsYXJvKTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgICAgXHJcbn1cclxuXHJcblxyXG4ubGF0ZXJhbC1kcmNoIGgxe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5sYXRlcmFsLWRyY2ggYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6JGF6dWwtcm95YWw7XHJcbn1cclxuXHJcbi52b2x2ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5pY2lvX2RhdG9ze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmJvdG9uX2luaWNpb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogaW5wdXQgY29sb3IgY2xhc3MgKi9cclxuOjpuZy1kZWVwIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLy8gLyoqUEFSQSBUQUJMRVQqKi8gLy9OTyBUSUVORSBTRU5USURPIFRFTkVSIEVTVE8gU0kgTk8gU0UgSU1QTEVNRU5UQSBFTiBOSU5HVU4gU0lUSU8gTcOBU1xyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkge1xyXG5cclxuLy8gICAuY29udGVuZWRvcntcclxuLy8gICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4vLyAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xyXG4vLyAgICAgICBoZWlnaHQ6IDYyMHB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAubGF0ZXJhbC1penF7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbi8vICAgICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgICAgICBoZWlnaHQ6IDcwJTtcclxuXHJcbiAgICAgXHJcbiAgXHJcbi8vICAgfVxyXG4vLyAgIC5sYXRlcmFsLWl6cSBpbWd7XHJcbi8vICAgICAgIGhlaWdodDogNzAlO1xyXG4vLyAgIH1cclxuLy8gICAubGF0ZXJhbC1kcmNoe1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xyXG4vLyAgICAgICB3aWR0aDogYXV0bztcclxuLy8gICAgICAgaGVpZ2h0OiAzMCU7XHJcblxyXG4vLyAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICBcclxuLy8gICB9XHJcblxyXG4vLyAgIC5ib3Rvbl9pbmljaW97XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW4tdG9wOjAlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmZvcm11bGFyaW97XHJcbi8vICAgICB3aWR0aDogNzAlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4vLyAgICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4vLyAgICAgY29sb3I6ICRhenVsLXJveWFsICFpbXBvcnRhbnQ7XHJcbi8vICAgIH1cclxuICBcclxuLy8gICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbi8vICAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDtcclxuLy8gICB9IFxyXG4gIFxyXG4vLyAgIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4vLyAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuLy8gICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLyogaW5wdXQgY29sb3IgY2xhc3MgKi9cclxuLy8gICA6Om5nLWRlZXAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG4vLyAgICAgY29sb3I6JGF6dWwtcm95YWw7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vKipQQVJBIE3Dk1ZJTCoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDcwMHB4KSB7XHJcblxyXG4gIC8qKi0tLS0tQ09OVEVORURPUiBZIEZVRU5URSBDT03Dmk4tLS0tKiovXHJcbiAgICAuY29udGVuZWRvcntcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgaGVpZ2h0OiA2MjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gIC8qKi0tLS1MQVRFUkFMIElaUVVJRVJETyBERSBMQSBQw4FHSU5BLS0tLSoqL1xyXG4gICAgLmxhdGVyYWwtaXpxe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdGVyYWwtaXpxIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuXHJcbiAgICAvKiotLS0tLS1MQVRFUkFMIERFUkVDSE8gREUgTEEgUMOBR0lOQS0tLS0tLSoqL1xyXG4gICAgLmxhdGVyYWwtZHJjaHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcblxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmxhdGVyYWwtZHJjaCBoMXtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAkbGV0dGVycztcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5pY2lvX2RhdG9ze1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0e1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3Rvbl9pbmljaW97XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDowJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gICAgICBjb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICBcclxuICAgICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXJveWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIGlucHV0IGNvbG9yIGNsYXNzICovXHJcbiAgICA6Om5nLWRlZXAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgICBjb2xvcjokYXp1bC1yb3lhbDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InicioSesionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-inicio-sesion',
          templateUrl: './inicio-sesion.component.html',
          styleUrls: ['./inicio-sesion.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interfaces/opiniones.ts":
  /*!*****************************************!*\
    !*** ./src/app/interfaces/opiniones.ts ***!
    \*****************************************/

  /*! exports provided: Puntuacion, Comentario */

  /***/
  function srcAppInterfacesOpinionesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Puntuacion", function () {
      return Puntuacion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comentario", function () {
      return Comentario;
    });

    var Puntuacion = function Puntuacion(o) {
      _classCallCheck(this, Puntuacion);

      //this.id='';
      if (o !== undefined) Object.assign(this, o);
    };

    var Comentario = function Comentario(o) {
      _classCallCheck(this, Comentario);

      //this.id='';
      if (o !== undefined) Object.assign(this, o);
    };
    /***/

  },

  /***/
  "./src/app/interfaces/solicitud.ts":
  /*!*****************************************!*\
    !*** ./src/app/interfaces/solicitud.ts ***!
    \*****************************************/

  /*! exports provided: Solicitud */

  /***/
  function srcAppInterfacesSolicitudTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Solicitud", function () {
      return Solicitud;
    });

    var Solicitud = function Solicitud(o) {
      _classCallCheck(this, Solicitud);

      if (o !== undefined) Object.assign(this, o);
    };

    ;
    /***/
  },

  /***/
  "./src/app/interfaces/usuario.ts":
  /*!***************************************!*\
    !*** ./src/app/interfaces/usuario.ts ***!
    \***************************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppInterfacesUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });

    var Usuario = //los comentarios se buscarán con el id del comentado
    function Usuario(o) {
      _classCallCheck(this, Usuario);

      //this.id='';
      if (o !== undefined) Object.assign(this, o);
    };
    /***/

  },

  /***/
  "./src/app/interfaces/viaje.ts":
  /*!*************************************!*\
    !*** ./src/app/interfaces/viaje.ts ***!
    \*************************************/

  /*! exports provided: Viaje, Slides */

  /***/
  function srcAppInterfacesViajeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Viaje", function () {
      return Viaje;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Slides", function () {
      return Slides;
    });

    ;

    var Viaje = function Viaje(o) {
      _classCallCheck(this, Viaje);

      //this.id='';
      if (o !== undefined) Object.assign(this, o);
    };

    ;

    var Slides = function Slides(o) {
      _classCallCheck(this, Slides);

      //this.id='';
      if (o !== undefined) Object.assign(this, o);
    };
    /***/

  },

  /***/
  "./src/app/logros/logros.component.ts":
  /*!********************************************!*\
    !*** ./src/app/logros/logros.component.ts ***!
    \********************************************/

  /*! exports provided: LogrosComponent */

  /***/
  function srcAppLogrosLogrosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogrosComponent", function () {
      return LogrosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LogrosComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var logro_r84 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/", logro_r84["img"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](logro_r84["nombre"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](logro_r84["descripcion"]);
      }
    }

    var LogrosComponent =
    /*#__PURE__*/
    function () {
      function LogrosComponent() {
        _classCallCheck(this, LogrosComponent);

        this.logros = [{
          'nombre': 'Súper viajero',
          'descripcion': 'Has estado en todos los continentes',
          'img': 'logros/logro1.png',
          'activado': 'no'
        }, {
          'nombre': 'Viajero amigo',
          'descripcion': 'Has hecho un viaje con más de seis personas',
          'img': 'logros/logro2.png',
          'activado': 'no'
        }, {
          'nombre': 'Europa',
          'descripcion': 'Has estado en Europa',
          'img': 'logros/logro3.png',
          'activado': 'no'
        }, {
          'nombre': 'Asia',
          'descripcion': 'Has estado en Asia',
          'img': 'logros/logro4.png',
          'activado': 'no'
        }, {
          'nombre': 'África',
          'descripcion': 'Has estado en África',
          'img': 'logros/logro5.png',
          'activado': 'no'
        }, {
          'nombre': 'Oceanía',
          'descripcion': 'Has estado en Oceanía',
          'img': 'logros/logro6.png',
          'activado': 'no'
        }, {
          'nombre': 'América del Norte',
          'descripcion': 'Has estado en América del Norte',
          'img': 'logros/logro7.png',
          'activado': 'no'
        }, {
          'nombre': 'América del Sur',
          'descripcion': 'Has estado en América del Sur',
          'img': 'logros/logro8.png',
          'activado': 'no'
        }, {
          'nombre': 'América Central',
          'descripcion': 'Has estado en América Central',
          'img': 'logros/logro9.png',
          'activado': 'no'
        }];
      }

      _createClass(LogrosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogrosComponent;
    }();

    LogrosComponent.ɵfac = function LogrosComponent_Factory(t) {
      return new (t || LogrosComponent)();
    };

    LogrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogrosComponent,
      selectors: [["app-logros"]],
      decls: 3,
      vars: 1,
      consts: [["titulo", "Tus logros"], [1, "contenido"], ["class", "logro", 4, "ngFor", "ngForOf"], [1, "logro"], [1, "activa"], [3, "src"], ["id", "titulo"], ["id", "descripci\xF3n"]],
      template: function LogrosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogrosComponent_div_2_Template, 7, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logros);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n.contenido[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.contenido[_ngcontent-%COMP%]   .logro[_ngcontent-%COMP%] {\n  height: 258px;\n  width: 155px;\n  margin: 20px;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n}\n.contenido[_ngcontent-%COMP%]   .logro[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\nimg[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  width: 150px;\n}\n.activa[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.inactiva[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.logro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.logro[_ngcontent-%COMP%]   #titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #009788;\n}\n\n@media screen and (max-device-width: 480px) {\n  .logro[_ngcontent-%COMP%] {\n    margin-left: 40%;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncm9zL2xvZ3Jvcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL2xvZ3Jvcy9sb2dyb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBTXpCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEUko7QUNXQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFHQSxtQ0FBQTtBRFRKO0FDWUE7RUFHSSwrQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURUSjtBQ2FBO0VBQ0ksWUFBQTtBRFZKO0FDWUE7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FEVEo7QUNZQTtFQUNJLHdJQUFBO0FEVEo7QUNhQTtFQUNJLGlCQUFBO0VBQ0EsY0FoRFc7QURzQ2Y7QUNhQSxlQUFBO0FBQ0E7RUFFSTtJQUNJLGdCQUFBO0lBRUEsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFRFpOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dyb3MvbG9ncm9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jb250ZW5pZG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29udGVuaWRvIC5sb2dybyB7XG4gIGhlaWdodDogMjU4cHg7XG4gIHdpZHRoOiAxNTVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xufVxuXG4uY29udGVuaWRvIC5sb2dybzpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG5pbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5hY3RpdmEgaW1nIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uaW5hY3RpdmEgaW1nIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG5cbi5sb2dybyBwIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ3JvICN0aXR1bG8ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDk3ODg7XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgLmxvZ3JvIHtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xyXG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcclxuJGJsYW5jbzogI2ZmZmZmZjtcclxuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXHJcbiRncmlzOiAjY2ZkOGRjO1xyXG4kbmFyYW5qYTogI2Y0YTUwMDtcclxuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXHJcbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xyXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcclxuJGxldHRlcnM6ICMwM2E5ZjQ7XHJcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XHJcbiRhenVsLXZlcmRvc286ICMwMDk3ODg7XHJcblxyXG4uY29udGVuaWRve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbnRlbmlkbyAubG9ncm97XHJcbiAgICBoZWlnaHQ6IDI1OHB4O1xyXG4gICAgd2lkdGg6IDE1NXB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG59XHJcblxyXG4uY29udGVuaWRvIC5sb2dybzpob3ZlcntcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgLy9vcGFjaXR5OiAwLjQ7XHJcbiAgICAvL2ZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG59XHJcbi5hY3RpdmEgaW1ne1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcbi5pbmFjdGl2YSBpbWd7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxufVxyXG5cclxuLmxvZ3JvIHB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmxvZ3JvICN0aXR1bG97XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xyXG59XHJcblxyXG4vKipQQVJBIE3Dk1ZJTCoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XHJcbiAgICBcclxuICAgIC5sb2dyb3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG5cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB9XHJcblxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logros',
          templateUrl: './logros.component.html',
          styleUrls: ['./logros.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found404/not-found404.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/not-found404/not-found404.component.ts ***!
    \********************************************************/

  /*! exports provided: NotFound404Component */

  /***/
  function srcAppNotFound404NotFound404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFound404Component", function () {
      return NotFound404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFound404Component =
    /*#__PURE__*/
    function () {
      function NotFound404Component() {
        _classCallCheck(this, NotFound404Component);

        this.titulo = "Parece que no hay nada por aquí";
      }

      _createClass(NotFound404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFound404Component;
    }();

    NotFound404Component.ɵfac = function NotFound404Component_Factory(t) {
      return new (t || NotFound404Component)();
    };

    NotFound404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFound404Component,
      selectors: [["app-not-found404"]],
      inputs: {
        titulo: "titulo"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "mensaje"], ["src", "./assets/warning.png"]],
      template: function NotFound404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        }
      },
      styles: ["@charset \"UTF-8\";\n\n\n\n.mensaje[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  margin-top: 150px;\n  margin-left: 210px;\n  color: #009788;\n  text-align: left;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 750px;\n  font-size: xxx-large;\n  line-height: 1.5;\n  margin-left: 50px;\n}\n.mensaje[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13%;\n  height: 13%;\n}\n\n@media screen and (max-device-width: 480px) {\n  .mensaje[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-left: 40px;\n  }\n\n  .mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 300px;\n    font-size: medium;\n    margin-top: 10px;\n    margin-left: 10px;\n  }\n\n  .mensaje[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15%;\n    height: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kNDA0L25vdC1mb3VuZDQwNC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL25vdC1mb3VuZDQwNC9ub3QtZm91bmQ0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBTXpCO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBUFc7RUFRWCxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0lBQUE7QURSSjtBQ1VBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRFBKO0FDU0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBRE5KO0FDU0EsZUFBQTtBQUNBO0VBRUk7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VEUE47O0VDU0U7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VETk47O0VDUUU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFRExOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQ0MDQvbm90LWZvdW5kNDA0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5tZW5zYWplIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMTBweDtcbiAgY29sb3I6ICMwMDk3ODg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWVuc2FqZSBwIHtcbiAgd2lkdGg6IDc1MHB4O1xuICBmb250LXNpemU6IHh4eC1sYXJnZTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5tZW5zYWplIGltZyB7XG4gIHdpZHRoOiAxMyU7XG4gIGhlaWdodDogMTMlO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC5tZW5zYWplIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG5cbiAgLm1lbnNhamUgcCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAubWVuc2FqZSBpbWcge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAxNSU7XG4gIH1cbn0iLCIkYXp1bC1jbGFybzogIzBkYThkZTtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcbiRsZXR0ZXJzOiAjMDNhOWY0O1xyXG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xyXG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xyXG5cclxuLm1lbnNhamV7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xyXG4gICAgY29sb3I6ICRhenVsLXZlcmRvc287XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tZW5zYWplIHB7XHJcbiAgICB3aWR0aDogNzUwcHg7XHJcbiAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG4ubWVuc2FqZSBpbWd7XHJcbiAgICB3aWR0aDogMTMlO1xyXG4gICAgaGVpZ2h0OiAxMyU7XHJcbn1cclxuXHJcbi8qKlBBUkEgTcOTVklMKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIHtcclxuXHJcbiAgICAubWVuc2FqZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnNhamUgcHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5tZW5zYWplIGltZ3tcclxuICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFound404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found404',
          templateUrl: './not-found404.component.html',
          styleUrls: ['./not-found404.component.scss']
        }]
      }], function () {
        return [];
      }, {
        titulo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/page1/page1.component.ts":
  /*!******************************************!*\
    !*** ./src/app/page1/page1.component.ts ***!
    \******************************************/

  /*! exports provided: Page1Component */

  /***/
  function srcAppPage1Page1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page1Component", function () {
      return Page1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/inicio-sesion"];
    };

    var _c1 = function _c1() {
      return ["/registro"];
    };

    var Page1Component =
    /*#__PURE__*/
    function () {
      function Page1Component() {
        _classCallCheck(this, Page1Component);
      }

      _createClass(Page1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page1Component;
    }();

    Page1Component.ɵfac = function Page1Component_Factory(t) {
      return new (t || Page1Component)();
    };

    Page1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page1Component,
      selectors: [["app-page1"]],
      decls: 12,
      vars: 4,
      consts: [[1, "contenedor"], [1, "lateral-izq"], ["src", "./assets/tripmefy.png"], [1, "lateral-drch"], [1, "boton_inicio"], ["mat-raised-button", "", 1, "boton", 2, "width", "200px", 3, "routerLink"], [1, "boton_registro"]],
      template: function Page1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "INICIAR SESI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "REGISTRO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.contenedor[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.contenedor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.lateral-izq[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 50%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n\n.lateral-drch[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#004cbe, #0da8de);\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n  background-attachment: fixed;\n  overflow: scroll;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #004cbe;\n}\n.boton_inicio[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50%;\n}\n.boton_registro[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2%;\n}\n\n@media screen and (max-device-width: 700px) {\n  .contenedor[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    display: inline-block;\n    background-color: #ffffff;\n    height: 350px;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: auto;\n    height: 100%;\n    margin-top: 20%;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    height: 70%;\n  }\n\n  .lateral-drch[_ngcontent-%COMP%] {\n    background-image: none;\n    background-color: #ffffff;\n    width: auto;\n    height: 20%;\n    background-attachment: fixed;\n    overflow: unset;\n  }\n\n  .boton_inicio[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTEvcGFnZTEuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWFyaW9sb3phbm9jb3J0ZXMvVW5pdmVyc2lkYWRfTG9jYWwvVHJpcG1lZnkvc3JjL2FwcC9wYWdlMS9wYWdlMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHTyxxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFJekIsOEJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUROSjtBQ1lBO0VBQ0ksd0lBQUE7QURUSjtBQ1lBO0VBQ0kscUJBQUE7QURUSjtBQ1lBLG1DQUFBO0FBQ0E7RUFDSSx5QkFoQ0s7RUFpQ0wsVUFBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRFZKO0FDYUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0FEWEo7QUNpQkEsaUNBQUE7QUFDQTtFQUNJLG1EQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FEZEo7QUNrQkE7RUFDSSxxQkFBQTtFQUNBLGNBdkVTO0FEd0RiO0FDa0JBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FEZko7QUNpQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QURkSjtBQ21CQSxlQUFBO0FBQ0E7RUFHSTtJQUNJLGVBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkE1RkM7SUE2RkQsYUFBQTtFRGxCTjs7RUNxQkU7SUFDSSx5QkFqR0M7SUFrR0QsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VEbEJOOztFQ3FCRTtJQUNJLGdCQUFBO0lBQ0EsV0FBQTtFRGxCTjs7RUNxQkU7SUFDSSxzQkFBQTtJQUNBLHlCQTlHQztJQStHRCxXQUFBO0lBQ0EsV0FBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtFRGxCTjs7RUNvQkU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RURqQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UxL3BhZ2UxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi8qKkNPTlRFTkVET1IgWSBGVUVOVEUgQ09Nw5pOKiovXG4uY29udGVuZWRvciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uY29udGVuZWRvciBwIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyoqTEFURVJBTCBJWlFVSUVSRE8gREUgTEEgUMOBR0lOQSoqL1xuLmxhdGVyYWwtaXpxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxhdGVyYWwtaXpxIGltZyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8qKkxBVEVSQUwgREVSRUNITyBERSBMQSBQw4FHSU5BKiovXG4ubGF0ZXJhbC1kcmNoIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDRjYmUsICMwZGE4ZGUpO1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDRjYmU7XG59XG5cbi5ib3Rvbl9pbmljaW8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cblxuLmJvdG9uX3JlZ2lzdHJvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MDBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogMzUwcHg7XG4gIH1cblxuICAubGF0ZXJhbC1penEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgfVxuXG4gIC5sYXRlcmFsLWl6cSBpbWcge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cblxuICAubGF0ZXJhbC1kcmNoIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBvdmVyZmxvdzogdW5zZXQ7XG4gIH1cblxuICAuYm90b25faW5pY2lvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG59IiwiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG5cclxuXHJcbi8qKkNPTlRFTkVET1IgWSBGVUVOVEUgQ09Nw5pOKiovXHJcbi5jb250ZW5lZG9ye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgXHJcblxyXG59XHJcblxyXG4uY29udGVuZWRvciBwe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyoqTEFURVJBTCBJWlFVSUVSRE8gREUgTEEgUMOBR0lOQSoqL1xyXG4ubGF0ZXJhbC1penF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmxhdGVyYWwtaXpxIGltZ3tcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbi8qKkxBVEVSQUwgREVSRUNITyBERSBMQSBQw4FHSU5BKiovXHJcbi5sYXRlcmFsLWRyY2h7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGF6dWwtcm95YWwsICRhenVsLWNsYXJvKTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgXHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjokYXp1bC1yb3lhbDtcclxufVxyXG5cclxuLmJvdG9uX2luaWNpb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG4uYm90b25fcmVnaXN0cm97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuXHJcblxyXG4vKipQQVJBIE3Dk1ZJTCoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDcwMHB4KSB7XHJcblxyXG5cclxuICAgIC5jb250ZW5lZG9ye1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXRlcmFsLWl6cXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdGVyYWwtaXpxIGltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDo3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdGVyYWwtZHJjaHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBvdmVyZmxvdzogdW5zZXQ7ICBcclxuICAgIH1cclxuICAgIC5ib3Rvbl9pbmljaW97XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page1',
          templateUrl: './page1.component.html',
          styleUrls: ['./page1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/perfiles/perfil-organizador/perfil-organizador.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/perfiles/perfil-organizador/perfil-organizador.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PerfilOrganizadorComponent */

  /***/
  function srcAppPerfilesPerfilOrganizadorPerfilOrganizadorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilOrganizadorComponent", function () {
      return PerfilOrganizadorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/interfaces/usuario */
    "./src/app/interfaces/usuario.ts");
    /* harmony import */


    var _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../interfaces/opiniones */
    "./src/app/interfaces/opiniones.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/firestore/opiniones-firestore.service */
    "./src/app/services/firestore/opiniones-firestore.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/puntuacion-pu/puntuacion-pu.component */
    "./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts");
    /* harmony import */


    var _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/comentario-pu/comentario-pu.component */
    "./src/app/shared/comentario-pu/comentario-pu.component.ts");
    /* harmony import */


    var _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/edicion-pu/edicion-pu.component */
    "./src/app/shared/edicion-pu/edicion-pu.component.ts");
    /* harmony import */


    var _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/mensaje/mensaje.component */
    "./src/app/shared/mensaje/mensaje.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared/boton/boton.component */
    "./src/app/shared/boton/boton.component.ts");

    var _c0 = ["descripcion"];
    var _c1 = ["imageUser"];

    function PerfilOrganizadorComponent_img_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilOrganizadorComponent_img_15_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.editar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilOrganizadorComponent_img_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.usuario.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PerfilOrganizadorComponent_img_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
      }
    }

    function PerfilOrganizadorComponent_p_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Este usuario no tiene valoraciones a\xFAn ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilOrganizadorComponent_span_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilOrganizadorComponent_span_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilOrganizadorComponent_app_boton_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-boton", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilOrganizadorComponent_app_boton_37_Template_app_boton_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.puntuar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilOrganizadorComponent_img_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilOrganizadorComponent_img_41_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.comentar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a0, a1) {
      return [a0, a1];
    };

    function PerfilOrganizadorComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", comment_r17["photo"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, comment_r17["tipo-url"], comment_r17["id"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r17["person"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r17["comment"]);
      }
    }

    var PerfilOrganizadorComponent =
    /*#__PURE__*/
    function () {
      function PerfilOrganizadorComponent(_route, _router, storage, firestoreServiceUser, firestoreServiceViaje, firestoreServiceOpiniones, _activatedRoute, zone) {
        _classCallCheck(this, PerfilOrganizadorComponent);

        this._route = _route;
        this._router = _router;
        this.storage = storage;
        this.firestoreServiceUser = firestoreServiceUser;
        this.firestoreServiceViaje = firestoreServiceViaje;
        this.firestoreServiceOpiniones = firestoreServiceOpiniones;
        this._activatedRoute = _activatedRoute;
        this.zone = zone;
        this.myUrl = "";
        this.descripcion = "";
        this.titulo = "ORGANIZADOR";
        this.susViajes = []; //almacena los id

        this.slides = [{
          src: "../../../assets/noViajes.png"
        }]; //almacena las imagenes en el formato del carrusel

        /****estrellas****/
        //es necesario recargar para ver la actualización de las estrellas porque hay que hacer la media con el resto

        this.stars = 4; //Stars of the user

        this.Arr = Array; //Array to print elements

        this.maxStars = 5; //Maximum of stars

        this.emptystars = this.maxStars - this.stars;
        /****comentarios****/
        //no es necesario recargar para ver la actualización porque solo hay que añadir

        this.comentarios = []; //se rellena como un diccionario con los datos de un comentario:
        //id comentador, comentario, foto comentador, nombre comentador

        this.tuplasComentario = []; //0:id del comentador, 1:comentario, 3: true si añadir, false si añadido

        /****ediciones ****/

        this.nuevaFoto = "";
        this.nuevaDescripcion = ""; //****permisos****/

        this.permisoOpinar = false; //si el usuario tiene permiso para opinar es true

        this.permisoEditar = false; //si el usuario tiene permiso para editar es true

        this.usuarios = [];
        this.usuario = new src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
      }

      _createClass(PerfilOrganizadorComponent, [{
        key: "reload",
        value: function reload() {
          window.location.reload();
          window.scrollTo(0, 0);
        } //es necesario activar las opiniones si se quiere comentar y puntuar

      }, {
        key: "activarOpiniones",
        value: function activarOpiniones() {
          this.permisoOpinar = true;
        } //es necesario activar la edición si se quiere editar la descripción o la foto de perfil

      }, {
        key: "activarEdicion",
        value: function activarEdicion(visitanteId) {
          this.permisoEditar = true;
        } //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
        //que accede

      }, {
        key: "puntuar",
        value: function puntuar() {
          document.getElementById("puntuar").style.display = "block";
        } //resultante del evento cerrar de los componentes pu

      }, {
        key: "cerrar",
        value: function cerrar(cerrado, id) {
          if (cerrado == true) {
            document.getElementById(id).style.display = "none";
          }
        } //resultante del evento puntuacion del componente hijo puntuacion-pu

      }, {
        key: "newPuntuacion",
        value: function newPuntuacion(puntos) {
          if (puntos > -1) {
            var puntuacion = new _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__["Puntuacion"]();
            puntuacion.puntuacion = puntos.toString();
            puntuacion.puntuador = localStorage.getItem('usuario');
            puntuacion.puntuado = this._route.snapshot.paramMap.get('id');
            this.firestoreServiceOpiniones.createPuntuacion(puntuacion);
            document.getElementById("graciasP").style.display = "block";
          }

          document.getElementById("puntuar").style.display = "none";
        } //resultante del evento puntuacion del comentario hijo comentario-pu

      }, {
        key: "newComentario",
        value: function newComentario(comment) {
          if (comment != "") {
            var comentario = new _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__["Comentario"]();
            comentario.comentario = comment;
            comentario.comentador = localStorage.getItem('usuario');
            comentario.comentado = this._route.snapshot.paramMap.get('id');
            this.firestoreServiceOpiniones.createComentario(comentario);
            document.getElementById("graciasC").style.display = "block";
          }

          document.getElementById("comentar").style.display = "none";
        } //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
        //que accede

      }, {
        key: "comentar",
        value: function comentar() {
          document.getElementById("comentar").style.display = "block";
        } //activa el botón de comentarios, es llamada cuando el usuario propietario es el mismo que el usuario
        //que accede

      }, {
        key: "editar",
        value: function editar() {
          document.getElementById("editar").style.display = "block";
        } //resultante del evento foto del componente edicion-p

      }, {
        key: "setFoto",
        value: function setFoto(foto) {
          this.nuevaFoto = foto;

          if (this.nuevaFoto != "" && this.nuevaFoto != undefined) {
            this.usuario.image = foto;
          }
        } //resultante del evento newDescripcion del componente edicion-p

      }, {
        key: "setDescripcion",
        value: function setDescripcion(desc) {
          this.nuevaDescripcion = desc;

          if (this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined) {
            this.usuario.descripcion = desc;
          }
        } //resultante del evento signal del componente edicion-pu

      }, {
        key: "uploadUser",
        value: function uploadUser(signal) {
          if (this.nuevaFoto != "" && this.nuevaFoto != undefined) {
            //alert(this.nuevaFoto);
            this.usuario.image = this.nuevaFoto;
          }

          if (this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined) {
            //alert(this.nuevaDescripcion);
            this.usuario.descripcion = this.nuevaDescripcion;
          } //es necesario crear un objeto para que el set funcione


          var actualizar = {
            "id": this.usuario.id,
            "email": this.usuario.email,
            "ubicacion": this.usuario.ubicacion,
            "descripcion": this.usuario.descripcion,
            "tipo": this.usuario.tipo,
            "nombre": this.usuario.nombre,
            "apellidos": this.usuario.apellidos,
            "password": this.usuario.password,
            "estrellas": this.usuario.estrellas,
            "image": this.usuario.image
          };
          this.firestoreServiceUser.updateUsuario(actualizar);
          document.getElementById("editOk").style.display = "block";
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var visitanteId = localStorage.getItem('usuario'); //hace referencia al usuario que está navegando 

          var userId = this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil


          if (visitanteId == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
          } //utilizo la subscripción a activatedRoute para que se actualice el pefil de haber cambios en la ruta


          this._activatedRoute.paramMap.subscribe(function (params) {
            userId = params['id']; //this.reload();

            if (userId == undefined) {
              userId = _this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil;
            }

            window.scrollTo(0, 0);

            var usuarioAux = _this.firestoreServiceUser.getUsuario(userId).then(function (elem) {
              /**Se obtiene el usuario propietario del perfil con su id (userId) y se pone el atributo usuario
               * con los valores correspondientes.
               * Para eso nos apoyamos de una variable auxiliar usuarioAux, definida como Usuario. Elem será el
               * valor devuelto por la función getUsuario del servicio firestoreServiceUser
               */
              var usuarioAux = new src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
              usuarioAux.id = elem.id;
              usuarioAux.email = elem.email;
              usuarioAux.ubicacion = elem.ubicacion;
              usuarioAux.descripcion = elem.descripcion;
              _this.descripcion = elem.descripcion;
              usuarioAux.tipo = elem.tipo;
              usuarioAux.nombre = elem.nombre;
              usuarioAux.apellidos = elem.apellidos;
              usuarioAux.password = elem.password;
              usuarioAux.estrellas = elem.estrellas;
              usuarioAux.image = elem.image;
              _this.usuario = usuarioAux;

              _this.firestoreServiceOpiniones.getPuntuacionesFiltered(_this.usuario.id).subscribe(function (res) {
                /**Se realiza el proceso de obtención de puntuaciones. Para ello se buscan todas aquellas
                 * puntuaciones que tengan como valor "puntuado" el id del usuario obtenido anteriormente.
                 * Esto se hace mediante el  método getPuntuacionesFiltered del servicio firestoreServiceOpiniones,
                 * que filtra opiniones por el id del usuario puntuado.
                 *
                 * La variable res será un array que contendrá todas las puntuaciones que tengan como
                 * puntuado al usuario propietario del perfil.
                 *
                 * Si no hay puntuaciones, el número de estrellas llenas (stars) será cero, y el de vacías el
                 * máximo. Como no se modifica el parámetro 'estrellas' del usuario propietario del perfil (queda
                 * a -1) se escribirá un mensaje "este usuario no tiene puntuaciones aún"
                 *
                 * Si hay puntuaciones se recorre el array res con un for, se acumulan los valores de dichas
                 * puntuaciones (atributo puntuación). Finalmente se divide entre el número de puntuaciones
                 * (el size de res) para obtener la media. Esta media será el número de estrellas a rellenar,
                 * mientras que las estrellas vacías serán la resta del máximo de estrellas (se ha establecido 5)
                 * y las estrellas llenas. Es importante notar que el atributo "estrellas" del usuario propietario
                 * del perfil cambia a 0, por lo que ya no aparecerá el mensaje de "este usuario no tiene
                 * puntuaciones"
                 *
                 * Para finalizar, se realiza un update del atributo usuario, de forma que la vista muestre los
                 * resultados obtenidos
                 */
                if (res.length <= 0) {
                  _this.stars = 0;
                  _this.emptystars = _this.maxStars;
                } else {
                  var i;
                  var media = 0;

                  for (i = 0; i < res.length; i++) {
                    media = media + parseInt(res[i].puntuacion);
                  }

                  media = Math.round(media / res.length); //es necesario redondear, no podemos rellenar media estrella

                  _this.stars = media;
                  _this.emptystars = _this.maxStars - media; //de esta forma, en el html ya no aparecerá el comentario de 'no hay puntuaciones'

                  _this.usuario.estrellas = "0"; //se requiere una variable auxiliar para que no salte el error DocumentReference.set() al llamar
                  //a updateUsuario

                  var actualizar = {
                    "id": _this.usuario.id,
                    "email": _this.usuario.email,
                    "ubicacion": _this.usuario.ubicacion,
                    "descripcion": _this.usuario.descripcion,
                    "tipo": _this.usuario.tipo,
                    "nombre": _this.usuario.nombre,
                    "apellidos": _this.usuario.apellidos,
                    "password": _this.usuario.password,
                    "estrellas": _this.usuario.estrellas,
                    "image": _this.usuario.image
                  };

                  _this.firestoreServiceUser.updateUsuario(actualizar);
                }
              });

              _this.firestoreServiceOpiniones.getComentariosFiltered(_this.usuario.id).subscribe(function (res) {
                /**Se obtienen los comentarios que tienen como atributo "comentado" al usuario propietario
                 * del perfil. Para ello se emplea el método getComentariosFiltered del servicio
                 * firestoreServiceOpiniones, que filtra los comentarios por el id del comentado.
                 *
                 * Guardamos los comentarios en un diccionario, definido arriba como atributo,
                 * que tendrá los siguientes parámetros:
                 * id del comentador, foto del comentador (photo), nombre del comentador (person) y comentario
                 * (comment)
                 *
                 * Una vez tenemos el comentario, habiendo usado la función getComentariosFiltered, podemos usar
                 * el id del comentador para obtener sus datos desde la tabla Usuario. Para ello empleamos
                 * el método getUsuario del servicio firestoreServiceUser, donde elem será el usuario coincidente
                 * con el id del comentador
                 *
                 * Es importante notar que la obtención del comentario y la obtención del usuario se hacen en
                 * espacios temporales diferentes. Es por ello que los comentarios se almacenan junto con el id
                 * del comentador en un array auxiliar de tuplas <comentario, idComentador>. Cuando se han metido
                 * todos los comentadores en el diccionario, se emplea la información del array auxiliar para
                 * meter también los comentarios.
                 *
                 * Las comprobaciones hechas al meter un comentario en el diccionario permiten que:
                 *  -Un usuario pueda hacer varios comentarios
                 *  -Todas las entradas del diccionario tengan un comentario
                 */
                _this.comentarios = [];
                var i;

                for (i = 0; i < res.length; i++) {
                  _this.comentarios.push({
                    "id": "",
                    "photo": "",
                    "person": "",
                    "comment": "",
                    "tipo-url": ""
                  });
                }

                var comment;
                var img;
                var nombre;
                var idUser;
                var tipo;

                for (i = 0; i < res.length; i++) {
                  comment = res[i].comentario;

                  _this.tuplasComentario.push([comment, res[i].comentador, true]);

                  var contador = 0;

                  var usuarioAux = _this.firestoreServiceUser.getUsuario(res[i].comentador).then(function (elem) {
                    img = elem.image;
                    _this.comentarios[contador]["photo"] = img;
                    nombre = elem.nombre;
                    _this.comentarios[contador]["person"] = nombre;
                    idUser = elem.id;
                    _this.comentarios[contador]["id"] = idUser;
                    tipo = elem.tipo;

                    if (tipo == 'organizador') {
                      _this.comentarios[contador]["tipo-url"] = '/perfil-organizador/';
                    } else {
                      _this.comentarios[contador]["tipo-url"] = '/perfil-viajero/';
                    }

                    var n;

                    for (n = 0; n < _this.tuplasComentario.length; n++) {
                      if (_this.tuplasComentario[n][1] == _this.comentarios[contador]["id"] && _this.comentarios[contador]["comment"] == "" && _this.tuplasComentario[n][2]) {
                        _this.comentarios[contador]["comment"] = _this.tuplasComentario[n][0];
                        _this.tuplasComentario[n][2] = false;
                      }
                    }

                    contador = contador + 1;
                  });
                }
              });
              /**Se obtienen los viajes organizados por el usuario propietario del perfil. Para ello se emplea
               * el método getViajesByEmail, del servicio firestoreServiceViaje, que filtra los viajes por
               * el email del organizador. La variable res sería un array con los viajes del organizador. Para
               * introducirlos, se hace push sobre el atributo slides, que se emplea en el carrusel de la vista.
               * Además se recoge el id del viaje, con la intención de hacer un LinkedLink.
               *
               * De no haber viajes, aparecerá una imagen que indica que no hay viajes
               */


              _this.firestoreServiceViaje.getViajesByEmail(_this.usuario.email).subscribe(function (res) {
                if (res.length > 0) {
                  _this.susViajes = [];
                  _this.slides = []; //esto es para que no aparezca la imagen de no hay viajes si hay viajes

                  var i;

                  for (i = 0; i < res.length; i++) {
                    _this.slides.push({
                      src: res[i].img
                    });

                    _this.susViajes.push(['viaje', res[i].id]);
                  }
                } else {
                  _this.slides = [{
                    src: "../../../assets/noViajes.png"
                  }];
                }
              });
            });
          });
          /**Deben establecerse los permisos de opinión y edición. Para ello comprobamos los id del usuario
           * propietario del perfil y el visitante
          */


          if (userId != visitanteId) {
            this.activarOpiniones(); //si el usuario está visitando un perfil distinto del suyo, puede comentar y puntuar
          } else {
            this.titulo = "TU PERFIL";
            this.activarEdicion(visitanteId); //si el usuario está visitando su perfil, puede editarlo
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {//this.s_usuarios.unsubscribe();
        }
      }]);

      return PerfilOrganizadorComponent;
    }();

    PerfilOrganizadorComponent.ɵfac = function PerfilOrganizadorComponent_Factory(t) {
      return new (t || PerfilOrganizadorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    PerfilOrganizadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerfilOrganizadorComponent,
      selectors: [["app-perfil-organizador"]],
      viewQuery: function PerfilOrganizadorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newDescripcion = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
        }
      },
      decls: 48,
      vars: 17,
      consts: [[3, "titulo"], ["id", "puntuar", 3, "cerrado", "puntuacion"], ["id", "comentar", 3, "cerrado", "comentario"], ["id", "editar", "user", "usuario", 3, "descripcion", "cerrado", "newDescripcion", "foto", "signal"], ["id", "graciasC", "mensaje", "\xA1 Gracias por comentar !", "imagen", "../../../assets/comment.png", 3, "cerrado"], ["id", "graciasP", "mensaje", "\xA1 Gracias por puntuar !", "imagen", "../../../assets/ok.png", 3, "cerrado"], ["id", "editOk", "mensaje", "\xA1 Has modificado tu perfil !", "imagen", "../../../assets/usuario.png", 3, "cerrado"], ["id", "general"], ["id", "div1"], ["id", "tarjeta"], [1, "little_container_izq"], [1, "name"], ["id", "img-editar", "src", "./assets/engranaje.png", 3, "click", 4, "ngIf"], [1, "texto_perfil"], ["src", "./assets/location.png", 2, "height", "7%", "width", "7%"], [1, "little_container_der"], ["style", "display: inline-block; max-width: 200px; max-height: 200px; ", 3, "src", 4, "ngIf"], ["src", "./assets/usuario.png", "style", "display: inline-block; max-width: 100px; max-height: 100px; ", 4, "ngIf"], ["id", "div2"], ["id", "myDescripcion", 1, "texto"], ["id", "div3"], ["id", "opinions"], ["src", "./assets/plan.png", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], [1, "bold_text"], [4, "ngIf"], [1, "stars"], [4, "ngFor", "ngForOf"], ["texto", "Puntua a este usuario", 3, "click", 4, "ngIf"], [1, "titulo-opinion"], [1, "name", "comentarios_usuario"], ["src", "./assets/comentario.png", 3, "click", 4, "ngIf"], ["class", "comment", 4, "ngFor", "ngForOf"], ["id", "div4"], [1, "name", "viajes_usuario"], [1, "container_carousel1"], [3, "slides", "links"], ["id", "img-editar", "src", "./assets/engranaje.png", 3, "click"], [2, "display", "inline-block", "max-width", "200px", "max-height", "200px", 3, "src"], ["src", "./assets/usuario.png", 2, "display", "inline-block", "max-width", "100px", "max-height", "100px"], ["src", "./assets/star.png", 1, "llena", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], ["src", "./assets/empty_star.png", 1, "vacia", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], ["texto", "Puntua a este usuario", 3, "click"], ["src", "./assets/comentario.png", 3, "click"], [1, "comment"], [1, "comment-division-1"], [2, "height", "100%", "width", "100%", "vertical-align", "middle", "display", "inline-block", 3, "src", "routerLink"], [1, "comment-division-2"], [1, "bold_text", 2, "display", "inline-block"]],
      template: function PerfilOrganizadorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-puntuacion-pu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_puntuacion_pu_cerrado_1_listener($event) {
            return ctx.cerrar($event, "puntuar");
          })("puntuacion", function PerfilOrganizadorComponent_Template_app_puntuacion_pu_puntuacion_1_listener($event) {
            return ctx.newPuntuacion($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-comentario-pu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_comentario_pu_cerrado_2_listener($event) {
            return ctx.cerrar($event, "comentar");
          })("comentario", function PerfilOrganizadorComponent_Template_app_comentario_pu_comentario_2_listener($event) {
            return ctx.newComentario($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-edicion-pu", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_edicion_pu_cerrado_3_listener($event) {
            return ctx.cerrar($event, "editar");
          })("newDescripcion", function PerfilOrganizadorComponent_Template_app_edicion_pu_newDescripcion_3_listener($event) {
            return ctx.setDescripcion($event);
          })("foto", function PerfilOrganizadorComponent_Template_app_edicion_pu_foto_3_listener($event) {
            return ctx.setFoto($event);
          })("signal", function PerfilOrganizadorComponent_Template_app_edicion_pu_signal_3_listener($event) {
            return ctx.uploadUser($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-mensaje", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_mensaje_cerrado_4_listener($event) {
            return ctx.cerrar($event, "graciasC");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-mensaje", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_mensaje_cerrado_5_listener($event) {
            return ctx.cerrar($event, "graciasP");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-mensaje", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_mensaje_cerrado_6_listener($event) {
            return ctx.cerrar($event, "editOk");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PerfilOrganizadorComponent_img_15_Template, 1, 0, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PerfilOrganizadorComponent_img_21_Template, 1, 1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PerfilOrganizadorComponent_img_22_Template, 1, 0, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PerfilOrganizadorComponent_p_33_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PerfilOrganizadorComponent_span_35_Template, 2, 0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PerfilOrganizadorComponent_span_36_Template, 2, 0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PerfilOrganizadorComponent_app_boton_37_Template, 1, 0, "app-boton", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Los usuarios opinaron:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PerfilOrganizadorComponent_img_41_Template, 1, 0, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PerfilOrganizadorComponent_div_42_Template, 8, 7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Paquetes ofrecidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "carousel", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("titulo", ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("descripcion", ctx.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permisoEditar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.ubicacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.image != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.image == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.usuario.descripcion, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.tipo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.estrellas == "-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Arr(ctx.stars).fill(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Arr(ctx.emptystars).fill(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permisoOpinar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permisoOpinar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comentarios);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides)("links", ctx.susViajes);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_9__["PuntuacionPuComponent"], _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_10__["ComentarioPuComponent"], _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_11__["EdicionPuComponent"], _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_12__["MensajeComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"], _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_16__["BotonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n#general[_ngcontent-%COMP%] {\n  height: 86%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n}\n#div1[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 35%;\n  float: left;\n}\n#tarjeta[_ngcontent-%COMP%] {\n  margin: 5%;\n  margin-top: 2%;\n}\n#opinions[_ngcontent-%COMP%] {\n  margin: 0 5%;\n}\n#div2[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 45%;\n  float: left;\n  overflow: hidden;\n}\n#div3[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  float: left;\n  overflow: auto;\n}\n#div4[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  float: left;\n}\n.little_container_der[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.little_container_izq[_ngcontent-%COMP%] {\n  width: 50%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.little_container_izq[_ngcontent-%COMP%]   #img-editar[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.name[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #03a9f4;\n  font-weight: bold;\n  font-size: 190%;\n  margin-bottom: 2.5%;\n  margin-top: 5%;\n}\n.viajes_usuario[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-top: 0%;\n  font-size: 170%;\n}\n#puntuar[_ngcontent-%COMP%] {\n  display: none;\n}\n#comentar[_ngcontent-%COMP%] {\n  display: none;\n}\n#editar[_ngcontent-%COMP%] {\n  display: none;\n}\n#editOk[_ngcontent-%COMP%] {\n  display: none;\n}\n#graciasP[_ngcontent-%COMP%] {\n  display: none;\n}\n#graciasC[_ngcontent-%COMP%] {\n  display: none;\n}\n.comentarios_usuario[_ngcontent-%COMP%] {\n  margin-top: 0%;\n  font-size: 170%;\n}\n.texto_perfil[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 6%;\n  font-size: 190%;\n}\n.bold_text[_ngcontent-%COMP%] {\n  font-size: 120%;\n  font-weight: bold;\n}\n.texto[_ngcontent-%COMP%] {\n  font-size: 110%;\n  text-align: justify;\n  margin: 6%;\n  margin-right: 10%;\n  margin-top: 2%;\n  overflow: auto;\n}\n.container_carousel1[_ngcontent-%COMP%] {\n  display: block;\n  height: 70%;\n  width: 60%;\n  margin: 1% 20%;\n}\n.titulo-opinion[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.titulo-opinion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.comment[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n.stars[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n.comment-division-1[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 19%;\n  margin-left: 3%;\n}\n.comment-division-2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 68%;\n  margin: 5%;\n}\n\n@media screen and (max-device-width: 700px) {\n  #div1[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div3[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  #div4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  .texto_perfil[_ngcontent-%COMP%] {\n    font-size: 140%;\n  }\n\n  .viajes_usuario[_ngcontent-%COMP%] {\n    font-size: 145%;\n  }\n}\n\n@media screen and (max-device-width: 1024px) {\n  #div1[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div3[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  #div4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  .texto_perfil[_ngcontent-%COMP%] {\n    font-size: 140%;\n  }\n\n  .viajes_usuario[_ngcontent-%COMP%] {\n    font-size: 145%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsZXMvcGVyZmlsLW9yZ2FuaXphZG9yL3BlcmZpbC1vcmdhbml6YWRvci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3BlcmZpbGVzL3BlcmZpbC1vcmdhbml6YWRvci9wZXJmaWwtb3JnYW5pemFkb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBS3pCO0VBQVUsV0FBQTtFQUFhLFdBQUE7RUFBYSxVQUFBO0VBQVksU0FBQTtFQUFXLGtCQUFBO0VBQW9CLE9BQUE7QUREL0U7QUNFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRENGO0FDQ0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBREVGO0FDQUE7RUFDRSxZQUFBO0FER0Y7QUNBQTtFQUFRLFVBQUE7RUFBWSxXQUFBO0VBQWEsV0FBQTtFQUFhLGdCQUFBO0FETzlDO0FDTkE7RUFBUSxVQUFBO0VBQVksV0FBQTtFQUFhLFdBQUE7RUFBYSxjQUFBO0FEYTlDO0FDWkE7RUFBUSxVQUFBO0VBQVksV0FBQTtFQUFhLFdBQUE7QURrQmpDO0FDZkE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FEa0JGO0FDZkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBRGtCRjtBQ2RBO0VBQ0UsaUJBQUE7QURpQkY7QUNYQTtFQUNFLHFCQUFBO0VBQ0EsY0E3Q1E7RUE4Q1IsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FEY0Y7QUNYQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGNGO0FDWEE7RUFDRSxhQUFBO0FEY0Y7QUNYQTtFQUNFLGFBQUE7QURjRjtBQ1hBO0VBQ0UsYUFBQTtBRGNGO0FDWEE7RUFDRSxhQUFBO0FEY0Y7QUNYQTtFQUNFLGFBQUE7QURjRjtBQ1pBO0VBQ0UsYUFBQTtBRGVGO0FDWkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRGVGO0FDWkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEZUY7QUNaQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRGVGO0FDWkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRGVGO0FDWEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FEY0Y7QUNYQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRGNGO0FDWEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRGNGO0FDWEE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QURjRjtBQ1hBO0VBQ0UsaUJBQUE7QURjRjtBQ1RBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRFlGO0FDVkE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEYUY7QUNWQSxlQUFBO0FBQ0E7RUFFRTtJQUFRLFdBQUE7SUFBYSxXQUFBO0VEY3JCOztFQ2JBO0lBQVEsV0FBQTtJQUFhLFlBQUE7SUFBYyxXQUFBO0VEbUJuQzs7RUNsQkE7SUFBUSxXQUFBO0lBQWEsZUFBQTtJQUFpQixXQUFBO0VEd0J0Qzs7RUN2QkE7SUFBUSxXQUFBO0lBQWEsZUFBQTtJQUFnQixXQUFBO0VENkJyQzs7RUMxQkE7SUFDRSxlQUFBO0VENkJGOztFQzNCQTtJQUNFLGVBQUE7RUQ4QkY7QUFDRjtBQzNCQSxlQUFBO0FBQ0E7RUFFRTtJQUFRLFdBQUE7SUFBYSxZQUFBO0lBQWMsV0FBQTtFRCtCbkM7O0VDOUJBO0lBQVEsV0FBQTtJQUFhLFlBQUE7SUFBYyxXQUFBO0VEb0NuQzs7RUNuQ0E7SUFBUSxXQUFBO0lBQWEsZUFBQTtJQUFpQixXQUFBO0VEeUN0Qzs7RUN4Q0E7SUFBUSxXQUFBO0lBQWEsZUFBQTtJQUFnQixXQUFBO0VEOENyQzs7RUMzQ0E7SUFDRSxlQUFBO0VEOENGOztFQzVDQTtJQUNFLGVBQUE7RUQrQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbGVzL3BlcmZpbC1vcmdhbml6YWRvci9wZXJmaWwtb3JnYW5pemFkb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuI2dlbmVyYWwge1xuICBoZWlnaHQ6IDg2JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4jZGl2MSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuI3RhcmpldGEge1xuICBtYXJnaW46IDUlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuI29waW5pb25zIHtcbiAgbWFyZ2luOiAwIDUlO1xufVxuXG4jZGl2MiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDUlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2RpdjMge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jZGl2NCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxpdHRsZV9jb250YWluZXJfZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5saXR0bGVfY29udGFpbmVyX2l6cSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxpdHRsZV9jb250YWluZXJfaXpxICNpbWctZWRpdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzAzYTlmNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTkwJTtcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi52aWFqZXNfdXN1YXJpbyB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIGZvbnQtc2l6ZTogMTcwJTtcbn1cblxuI3B1bnR1YXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jY29tZW50YXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZWRpdGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2VkaXRPayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNncmFjaWFzUCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNncmFjaWFzQyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb21lbnRhcmlvc191c3VhcmlvIHtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIGZvbnQtc2l6ZTogMTcwJTtcbn1cblxuLnRleHRvX3BlcmZpbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNiU7XG4gIGZvbnQtc2l6ZTogMTkwJTtcbn1cblxuLmJvbGRfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0byB7XG4gIGZvbnQtc2l6ZTogMTEwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiA2JTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbnRhaW5lcl9jYXJvdXNlbDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMSUgMjAlO1xufVxuXG4udGl0dWxvLW9waW5pb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aXR1bG8tb3BpbmlvbiBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uY29tbWVudCB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuLnN0YXJzIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5jb21tZW50LWRpdmlzaW9uLTEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxOSU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLmNvbW1lbnQtZGl2aXNpb24tMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY4JTtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MDBweCkge1xuICAjZGl2MSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjZGl2MiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2RpdjMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICNkaXY0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAudGV4dG9fcGVyZmlsIHtcbiAgICBmb250LXNpemU6IDE0MCU7XG4gIH1cblxuICAudmlhamVzX3VzdWFyaW8ge1xuICAgIGZvbnQtc2l6ZTogMTQ1JTtcbiAgfVxufVxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgI2RpdjEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICNkaXYyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjZGl2MyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2RpdjQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC50ZXh0b19wZXJmaWwge1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbiAgfVxuXG4gIC52aWFqZXNfdXN1YXJpbyB7XG4gICAgZm9udC1zaXplOiAxNDUlO1xuICB9XG59IiwiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcclxuXHJcbiNnZW5lcmFseyBoZWlnaHQ6IDg2JTsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwO31cclxuI2RpdjEge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzNSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI3RhcmpldGF7XHJcbiAgbWFyZ2luOiA1JTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4jb3BpbmlvbnN7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG59XHJcblxyXG4jZGl2MiB7IHdpZHRoOiA1MCU7IGhlaWdodDogNDUlOyBmbG9hdDogbGVmdDsgb3ZlcmZsb3c6IGhpZGRlbjt9XHJcbiNkaXYzIHsgd2lkdGg6IDUwJTsgaGVpZ2h0OiA1MCU7IGZsb2F0OiBsZWZ0OyBvdmVyZmxvdzogYXV0bzt9XHJcbiNkaXY0IHsgd2lkdGg6IDUwJTsgaGVpZ2h0OiA1MCU7IGZsb2F0OiBsZWZ0O31cclxuXHJcblxyXG4ubGl0dGxlX2NvbnRhaW5lcl9kZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5saXR0bGVfY29udGFpbmVyX2l6cXtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxufVxyXG5cclxuLmxpdHRsZV9jb250YWluZXJfaXpxICNpbWctZWRpdGFye1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ubmFtZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICRsZXR0ZXJzO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTkwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjUlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4udmlhamVzX3VzdWFyaW97XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIGZvbnQtc2l6ZTogMTcwJTtcclxufVxyXG5cclxuI3B1bnR1YXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2NvbWVudGFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNlZGl0YXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2VkaXRPa3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jZ3JhY2lhc1B7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jZ3JhY2lhc0N7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvbWVudGFyaW9zX3VzdWFyaW97XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgZm9udC1zaXplOiAxNzAlO1xyXG59XHJcblxyXG4udGV4dG9fcGVyZmlse1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiA2JTtcclxuICBmb250LXNpemU6IDE5MCU7XHJcbn1cclxuXHJcbi5ib2xkX3RleHR7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGV4dG97XHJcbiAgZm9udC1zaXplOiAxMTAlO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbWFyZ2luOiA2JTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi5jb250YWluZXJfY2Fyb3VzZWwxIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMSUgMjAlO1xyXG59XHJcblxyXG4udGl0dWxvLW9waW5pb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50aXR1bG8tb3BpbmlvbiBpbWd7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uY29tbWVudHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLnN0YXJze1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb21tZW50LWRpdmlzaW9uLTF7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxOSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcbi5jb21tZW50LWRpdmlzaW9uLTJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2OCU7XHJcbiAgbWFyZ2luOiA1JTtcclxufVxyXG5cclxuLyoqUEFSQSBNw5NWSUwqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MDBweCl7XHJcblxyXG4gICNkaXYxIHsgd2lkdGg6IDEwMCU7IGZsb2F0OiBsZWZ0O31cclxuICAjZGl2MiB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0O31cclxuICAjZGl2MyB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOjEwJTsgIGZsb2F0OiBsZWZ0O31cclxuICAjZGl2NCB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOjEwJTsgZmxvYXQ6IGxlZnQ7fVxyXG5cclxuXHJcbiAgLnRleHRvX3BlcmZpbHtcclxuICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICB9XHJcbiAgLnZpYWplc191c3Vhcmlve1xyXG4gICAgZm9udC1zaXplOiAxNDUlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqUEFSQSBNw5NWSUwqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpe1xyXG5cclxuICAjZGl2MSB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0O31cclxuICAjZGl2MiB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0O31cclxuICAjZGl2MyB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOjEwJTsgIGZsb2F0OiBsZWZ0O31cclxuICAjZGl2NCB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOjEwJTsgZmxvYXQ6IGxlZnQ7fVxyXG5cclxuXHJcbiAgLnRleHRvX3BlcmZpbHtcclxuICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICB9XHJcbiAgLnZpYWplc191c3Vhcmlve1xyXG4gICAgZm9udC1zaXplOiAxNDUlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilOrganizadorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perfil-organizador',
          templateUrl: './perfil-organizador.component.html',
          styleUrls: ['./perfil-organizador.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]
        }, {
          type: _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        newDescripcion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['descripcion']
        }],
        inputImageUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['imageUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/perfiles/perfil-viajero/perfil-viajero.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/perfiles/perfil-viajero/perfil-viajero.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PerfilViajeroComponent */

  /***/
  function srcAppPerfilesPerfilViajeroPerfilViajeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilViajeroComponent", function () {
      return PerfilViajeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/interfaces/usuario */
    "./src/app/interfaces/usuario.ts");
    /* harmony import */


    var _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../interfaces/opiniones */
    "./src/app/interfaces/opiniones.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/firestore/opiniones-firestore.service */
    "./src/app/services/firestore/opiniones-firestore.service.ts");
    /* harmony import */


    var _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/firestore/solicitud-firestore.service */
    "./src/app/services/firestore/solicitud-firestore.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/puntuacion-pu/puntuacion-pu.component */
    "./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts");
    /* harmony import */


    var _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/comentario-pu/comentario-pu.component */
    "./src/app/shared/comentario-pu/comentario-pu.component.ts");
    /* harmony import */


    var _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/edicion-pu/edicion-pu.component */
    "./src/app/shared/edicion-pu/edicion-pu.component.ts");
    /* harmony import */


    var _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/mensaje/mensaje.component */
    "./src/app/shared/mensaje/mensaje.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared/boton/boton.component */
    "./src/app/shared/boton/boton.component.ts");

    var _c0 = ["descripcion"];
    var _c1 = ["imageUser"];

    function PerfilViajeroComponent_img_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilViajeroComponent_img_15_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.editar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilViajeroComponent_img_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r19.usuario.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PerfilViajeroComponent_img_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
      }
    }

    function PerfilViajeroComponent_p_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Este usuario no tiene valoraciones a\xFAn ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilViajeroComponent_span_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilViajeroComponent_span_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilViajeroComponent_app_boton_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-boton", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilViajeroComponent_app_boton_37_Template_app_boton_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.puntuar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PerfilViajeroComponent_img_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilViajeroComponent_img_41_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.comentar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a0, a1) {
      return [a0, a1];
    };

    function PerfilViajeroComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", comment_r35["photo"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, comment_r35["tipo-url"], comment_r35["id"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r35["person"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r35["comment"]);
      }
    }

    var PerfilViajeroComponent =
    /*#__PURE__*/
    function () {
      function PerfilViajeroComponent(_route, _router, storage, firestoreServiceUser, firestoreServiceViaje, firestoreServiceOpiniones, firestoreServiceSolicitud, _activatedRoute, zone) {
        _classCallCheck(this, PerfilViajeroComponent);

        this._route = _route;
        this._router = _router;
        this.storage = storage;
        this.firestoreServiceUser = firestoreServiceUser;
        this.firestoreServiceViaje = firestoreServiceViaje;
        this.firestoreServiceOpiniones = firestoreServiceOpiniones;
        this.firestoreServiceSolicitud = firestoreServiceSolicitud;
        this._activatedRoute = _activatedRoute;
        this.zone = zone;
        this.myUrl = "";
        this.descripcion = "";
        this.titulo = "VIAJERO";
        this.susViajesId = [];
        this.susViajes = []; //almacena los id

        this.slides = [{
          src: "../../../assets/noViajes.png"
        }]; //almacena las imagenes en el formato del carrusel

        /****estrellas****/
        //es necesario recargar para ver la actualización de las estrellas porque hay que hacer la media con el resto

        this.stars = 4; //Stars of the user

        this.Arr = Array; //Array to print elements

        this.maxStars = 5; //Maximum of stars

        this.emptystars = this.maxStars - this.stars;
        /****comentarios****/
        //no es necesario recargar para ver la actualización porque solo hay que añadir

        this.comentarios = []; //se rellena como un diccionario con los datos de un comentario:
        //id comentador, comentario, foto comentador, nombre comentador

        this.tuplasComentario = []; //0:id del comentador, 1:comentario, 3: true si añadir, false si añadido

        /****ediciones ****/

        this.nuevaFoto = "";
        this.nuevaDescripcion = ""; //****permisos****/

        this.permisoOpinar = false; //si el usuario tiene permiso para opinar es true

        this.permisoEditar = false; //si el usuario tiene permiso para editar es true

        this.usuarios = [];
        this.usuario = new src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
      }

      _createClass(PerfilViajeroComponent, [{
        key: "reload",
        value: function reload() {
          window.location.reload();
          window.scrollTo(0, 0);
        } //es necesario activar las opiniones si se quiere comentar y puntuar

      }, {
        key: "activarOpiniones",
        value: function activarOpiniones() {
          this.permisoOpinar = true;
        } //es necesario activar la edición si se quiere editar la descripción o la foto de perfil

      }, {
        key: "activarEdicion",
        value: function activarEdicion(visitanteId) {
          this.permisoEditar = true;
        } //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
        //que accede

      }, {
        key: "puntuar",
        value: function puntuar() {
          document.getElementById("puntuar").style.display = "block";
        } //resultante del evento cerrar de los componentes pu

      }, {
        key: "cerrar",
        value: function cerrar(cerrado, id) {
          if (cerrado == true) {
            document.getElementById(id).style.display = "none";
          }
        } //resultante del evento puntuacion del componente hijo puntuacion-pu

      }, {
        key: "newPuntuacion",
        value: function newPuntuacion(puntos) {
          if (puntos > -1) {
            var puntuacion = new _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__["Puntuacion"]();
            puntuacion.puntuacion = puntos.toString();
            puntuacion.puntuador = localStorage.getItem('usuario');
            puntuacion.puntuado = this._route.snapshot.paramMap.get('id');
            this.firestoreServiceOpiniones.createPuntuacion(puntuacion);
            document.getElementById("graciasP").style.display = "block";
          }

          document.getElementById("puntuar").style.display = "none";
        } //resultante del evento puntuacion del comentario hijo comentario-pu

      }, {
        key: "newComentario",
        value: function newComentario(comment) {
          if (comment != "") {
            var comentario = new _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__["Comentario"]();
            comentario.comentario = comment;
            comentario.comentador = localStorage.getItem('usuario');
            comentario.comentado = this._route.snapshot.paramMap.get('id');
            this.firestoreServiceOpiniones.createComentario(comentario);
            document.getElementById("graciasC").style.display = "block";
          }

          document.getElementById("comentar").style.display = "none";
        } //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
        //que accede

      }, {
        key: "comentar",
        value: function comentar() {
          document.getElementById("comentar").style.display = "block";
        } //activa el botón de comentarios, es llamada cuando el usuario propietario es el mismo que el usuario
        //que accede

      }, {
        key: "editar",
        value: function editar() {
          document.getElementById("editar").style.display = "block";
        } //resultante del evento foto del componente edicion-p

      }, {
        key: "setFoto",
        value: function setFoto(foto) {
          this.nuevaFoto = foto;

          if (this.nuevaFoto != "" && this.nuevaFoto != undefined) {
            this.usuario.image = foto;
          }
        } //resultante del evento newDescripcion del componente edicion-p

      }, {
        key: "setDescripcion",
        value: function setDescripcion(desc) {
          this.nuevaDescripcion = desc;

          if (this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined) {
            this.usuario.descripcion = desc;
          }
        } //resultante del evento signal del componente edicion-pu

      }, {
        key: "uploadUser",
        value: function uploadUser(signal) {
          if (this.nuevaFoto != "" && this.nuevaFoto != undefined) {
            //alert(this.nuevaFoto);
            this.usuario.image = this.nuevaFoto;
          }

          if (this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined) {
            //alert(this.nuevaDescripcion);
            this.usuario.descripcion = this.nuevaDescripcion;
          } //es necesario crear un objeto para que el set funcione


          var actualizar = {
            "id": this.usuario.id,
            "email": this.usuario.email,
            "ubicacion": this.usuario.ubicacion,
            "descripcion": this.usuario.descripcion,
            "tipo": this.usuario.tipo,
            "nombre": this.usuario.nombre,
            "apellidos": this.usuario.apellidos,
            "password": this.usuario.password,
            "estrellas": this.usuario.estrellas,
            "image": this.usuario.image
          };
          this.firestoreServiceUser.updateUsuario(actualizar);
          document.getElementById("editOk").style.display = "block";
          return true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var visitanteId = localStorage.getItem('usuario'); //hace referencia al usuario que está navegando

          var userId = this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil


          if (visitanteId == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
          } //utilizo la subscripción a activatedRoute para que se actualice el pefil de haber cambios en la ruta


          this._activatedRoute.paramMap.subscribe(function (params) {
            userId = params['id']; //this.reload();

            if (userId == undefined) {
              userId = _this2._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil;
            }

            window.scrollTo(0, 0);

            var usuarioAux = _this2.firestoreServiceUser.getUsuario(userId).then(function (elem) {
              /**Se obtiene el usuario propietario del perfil con su id (userId) y se pone el atributo usuario
               * con los valores correspondientes.
               * Para eso nos apoyamos de una variable auxiliar usuarioAux, definida como Usuario. Elem será el
               * valor devuelto por la función getUsuario del servicio firestoreServiceUser
               */
              var usuarioAux = new src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
              usuarioAux.id = elem.id;
              usuarioAux.email = elem.email;
              usuarioAux.ubicacion = elem.ubicacion;
              usuarioAux.descripcion = elem.descripcion;
              _this2.descripcion = elem.descripcion;
              usuarioAux.tipo = elem.tipo;
              usuarioAux.nombre = elem.nombre;
              usuarioAux.apellidos = elem.apellidos;
              usuarioAux.password = elem.password;
              usuarioAux.estrellas = elem.estrellas;
              usuarioAux.image = elem.image;
              _this2.usuario = usuarioAux;

              _this2.firestoreServiceOpiniones.getPuntuacionesFiltered(_this2.usuario.id).subscribe(function (res) {
                /**Se realiza el proceso de obtención de puntuaciones. Para ello se buscan todas aquellas
                 * puntuaciones que tengan como valor "puntuado" el id del usuario obtenido anteriormente.
                 * Esto se hace mediante el  método getPuntuacionesFiltered del servicio firestoreServiceOpiniones,
                 * que filtra opiniones por el id del usuario puntuado.
                 *
                 * La variable res será un array que contendrá todas las puntuaciones que tengan como
                 * puntuado al usuario propietario del perfil.
                 *
                 * Si no hay puntuaciones, el número de estrellas llenas (stars) será cero, y el de vacías el
                 * máximo. Como no se modifica el parámetro 'estrellas' del usuario propietario del perfil (queda
                 * a -1) se escribirá un mensaje "este usuario no tiene puntuaciones aún"
                 *
                 * Si hay puntuaciones se recorre el array res con un for, se acumulan los valores de dichas
                 * puntuaciones (atributo puntuación). Finalmente se divide entre el número de puntuaciones
                 * (el size de res) para obtener la media. Esta media será el número de estrellas a rellenar,
                 * mientras que las estrellas vacías serán la resta del máximo de estrellas (se ha establecido 5)
                 * y las estrellas llenas. Es importante notar que el atributo "estrellas" del usuario propietario
                 * del perfil cambia a 0, por lo que ya no aparecerá el mensaje de "este usuario no tiene
                 * puntuaciones"
                 *
                 * Para finalizar, se realiza un update del atributo usuario, de forma que la vista muestre los
                 * resultados obtenidos
                 */
                if (res.length <= 0) {
                  _this2.stars = 0;
                  _this2.emptystars = _this2.maxStars;
                } else {
                  var i;
                  var media = 0;

                  for (i = 0; i < res.length; i++) {
                    media = media + parseInt(res[i].puntuacion);
                  }

                  media = Math.round(media / res.length); //es necesario redondear, no podemos rellenar media estrella

                  _this2.stars = media;
                  _this2.emptystars = _this2.maxStars - media; //de esta forma, en el html ya no aparecerá el comentario de 'no hay puntuaciones'

                  _this2.usuario.estrellas = "0"; //se requiere una variable auxiliar para que no salte el error DocumentReference.set() al llamar
                  //a updateUsuario

                  var actualizar = {
                    "id": _this2.usuario.id,
                    "email": _this2.usuario.email,
                    "ubicacion": _this2.usuario.ubicacion,
                    "descripcion": _this2.usuario.descripcion,
                    "tipo": _this2.usuario.tipo,
                    "nombre": _this2.usuario.nombre,
                    "apellidos": _this2.usuario.apellidos,
                    "password": _this2.usuario.password,
                    "estrellas": _this2.usuario.estrellas,
                    "image": _this2.usuario.image
                  };

                  _this2.firestoreServiceUser.updateUsuario(actualizar);
                }
              });

              _this2.firestoreServiceOpiniones.getComentariosFiltered(_this2.usuario.id).subscribe(function (res) {
                /**Se obtienen los comentarios que tienen como atributo "comentado" al usuario propietario
                 * del perfil. Para ello se emplea el método getComentariosFiltered del servicio
                 * firestoreServiceOpiniones, que filtra los comentarios por el id del comentado.
                 *
                 * Guardamos los comentarios en un diccionario, definido arriba como atributo,
                 * que tendrá los siguientes parámetros:
                 * id del comentador, foto del comentador (photo), nombre del comentador (person) y comentario
                 * (comment)
                 *
                 * Una vez tenemos el comentario, habiendo usado la función getComentariosFiltered, podemos usar
                 * el id del comentador para obtener sus datos desde la tabla Usuario. Para ello empleamos
                 * el método getUsuario del servicio firestoreServiceUser, donde elem será el usuario coincidente
                 * con el id del comentador
                 *
                 * Es importante notar que la obtención del comentario y la obtención del usuario se hacen en
                 * espacios temporales diferentes. Es por ello que los comentarios se almacenan junto con el id
                 * del comentador en un array auxiliar de tuplas <comentario, idComentador>. Cuando se han metido
                 * todos los comentadores en el diccionario, se emplea la información del array auxiliar para
                 * meter también los comentarios.
                 *
                 * Las comprobaciones hechas al meter un comentario en el diccionario permiten que:
                 *  -Un usuario pueda hacer varios comentarios
                 *  -Todas las entradas del diccionario tengan un comentario
                 */
                _this2.comentarios = [];
                var i;

                for (i = 0; i < res.length; i++) {
                  _this2.comentarios.push({
                    "id": "",
                    "photo": "",
                    "person": "",
                    "comment": "",
                    "tipo-url": ""
                  });
                }

                var comment;
                var img;
                var nombre;
                var idUser;
                var tipo;

                for (i = 0; i < res.length; i++) {
                  comment = res[i].comentario;

                  _this2.tuplasComentario.push([comment, res[i].comentador, true]);

                  var contador = 0;

                  var usuarioAux = _this2.firestoreServiceUser.getUsuario(res[i].comentador).then(function (elem) {
                    img = elem.image;
                    _this2.comentarios[contador]["photo"] = img;
                    nombre = elem.nombre;
                    _this2.comentarios[contador]["person"] = nombre;
                    idUser = elem.id;
                    _this2.comentarios[contador]["id"] = idUser;
                    tipo = elem.tipo;

                    if (tipo == 'organizador') {
                      _this2.comentarios[contador]["tipo-url"] = '/perfil-organizador/';
                    } else {
                      _this2.comentarios[contador]["tipo-url"] = '/perfil-viajero/';
                    }

                    var n;

                    for (n = 0; n < _this2.tuplasComentario.length; n++) {
                      if (_this2.tuplasComentario[n][1] == _this2.comentarios[contador]["id"] && _this2.comentarios[contador]["comment"] == "" && _this2.tuplasComentario[n][2]) {
                        _this2.comentarios[contador]["comment"] = _this2.tuplasComentario[n][0];
                        _this2.tuplasComentario[n][2] = false;
                      }
                    }

                    contador = contador + 1;
                  });
                }
              });
              /**Se obtienen los viajes organizados por el usuario propietario del perfil. Para ello se emplea
               * el método getViajesByEmail, del servicio firestoreServiceViaje, que filtra los viajes por
               * el email del organizador. La variable res sería un array con los viajes del organizador. Para
               * introducirlos, se hace push sobre el atributo slides, que se emplea en el carrusel de la vista.
               * Además se recoge el id del viaje, con la intención de hacer un LinkedLink.
               *
               * De no haber viajes, aparecerá una imagen que indica que no hay viajes
               */


              _this2.firestoreServiceSolicitud.getSolicitudesByUserId(userId).subscribe(function (res) {
                var viajes = [];

                if (res.length <= 0) {
                  _this2.slides = [{
                    src: "../../../assets/noViajes.png"
                  }];
                } else {
                  var i;

                  for (i = 0; i < res.length; i++) {
                    viajes.push(res[i].idViaje);
                  }
                }

                if (viajes.length > 0) {
                  _this2.slides = [];

                  for (i = 0; i < viajes.length; i++) {
                    if (res[i].estado != "pendiente" && res[i].estado != "rechazado") {
                      _this2.firestoreServiceViaje.getViaje(viajes[i]).then(function (elem) {
                        _this2.slides.push({
                          src: elem.img
                        });

                        _this2.susViajes.push(['viaje', elem.id]);
                      });
                    }
                  }
                }
              });
            });
          });
          /**Deben establecerse los permisos de opinión y edición. Para ello comprobamos los id del usuario
           * propietario del perfil y el visitante
          */


          if (userId != visitanteId) {
            this.activarOpiniones(); //si el usuario está visitando un perfil distinto del suyo, puede comentar y puntuar
          } else {
            this.titulo = "TU PERFIL";
            this.activarEdicion(visitanteId); //si el usuario está visitando su perfil, puede editarlo
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {//this.s_usuarios.unsubscribe();
        }
      }]);

      return PerfilViajeroComponent;
    }();

    PerfilViajeroComponent.ɵfac = function PerfilViajeroComponent_Factory(t) {
      return new (t || PerfilViajeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    PerfilViajeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerfilViajeroComponent,
      selectors: [["app-perfil-viajero"]],
      viewQuery: function PerfilViajeroComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newDescripcion = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
        }
      },
      decls: 48,
      vars: 17,
      consts: [[3, "titulo"], ["id", "puntuar", 3, "cerrado", "puntuacion"], ["id", "comentar", 3, "cerrado", "comentario"], ["id", "editar", "user", "usuario", 3, "descripcion", "cerrado", "newDescripcion", "foto", "signal"], ["id", "graciasC", "mensaje", "\xA1 Gracias por comentar !", "imagen", "../../../assets/comment.png", 3, "cerrado"], ["id", "graciasP", "mensaje", "\xA1 Gracias por puntuar !", "imagen", "../../../assets/ok.png", 3, "cerrado"], ["id", "editOk", "mensaje", "\xA1 Has modificado tu perfil !", "imagen", "../../../assets/usuario.png", 3, "cerrado"], ["id", "general"], ["id", "div1"], ["id", "tarjeta"], [1, "little_container_izq"], [1, "name"], ["id", "img-editar", "src", "./assets/engranaje.png", 3, "click", 4, "ngIf"], [1, "texto_perfil"], ["src", "./assets/location.png", 2, "height", "7%", "width", "7%"], [1, "little_container_der"], ["style", "display: inline-block; max-width: 200px; max-height: 200px; ", 3, "src", 4, "ngIf"], ["src", "./assets/usuario.png", "style", "display: inline-block; max-width: 100px; max-height: 100px; ", 4, "ngIf"], ["id", "div2"], ["id", "myDescripcion", 1, "texto"], ["id", "div3"], ["id", "opinions"], ["src", "./assets/telegram.png", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], [1, "bold_text"], [4, "ngIf"], [1, "stars"], [4, "ngFor", "ngForOf"], ["texto", "Puntua a este usuario", 3, "click", 4, "ngIf"], [1, "titulo-opinion"], [1, "name", "comentarios_usuario"], ["src", "./assets/comentario.png", 3, "click", 4, "ngIf"], ["class", "comment", 4, "ngFor", "ngForOf"], ["id", "div4"], [1, "name", "viajes_usuario"], [1, "container_carousel1"], [3, "slides", "links"], ["id", "img-editar", "src", "./assets/engranaje.png", 3, "click"], [2, "display", "inline-block", "max-width", "200px", "max-height", "200px", 3, "src"], ["src", "./assets/usuario.png", 2, "display", "inline-block", "max-width", "100px", "max-height", "100px"], ["src", "./assets/star.png", 1, "llena", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], ["src", "./assets/empty_star.png", 1, "vacia", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], ["texto", "Puntua a este usuario", 3, "click"], ["src", "./assets/comentario.png", 3, "click"], [1, "comment"], [1, "comment-division-1"], [2, "height", "100%", "width", "100%", "vertical-align", "middle", "display", "inline-block", 3, "src", "routerLink"], [1, "comment-division-2"], [1, "bold_text", 2, "display", "inline-block"]],
      template: function PerfilViajeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-puntuacion-pu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_puntuacion_pu_cerrado_1_listener($event) {
            return ctx.cerrar($event, "puntuar");
          })("puntuacion", function PerfilViajeroComponent_Template_app_puntuacion_pu_puntuacion_1_listener($event) {
            return ctx.newPuntuacion($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-comentario-pu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_comentario_pu_cerrado_2_listener($event) {
            return ctx.cerrar($event, "comentar");
          })("comentario", function PerfilViajeroComponent_Template_app_comentario_pu_comentario_2_listener($event) {
            return ctx.newComentario($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-edicion-pu", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_edicion_pu_cerrado_3_listener($event) {
            return ctx.cerrar($event, "editar");
          })("newDescripcion", function PerfilViajeroComponent_Template_app_edicion_pu_newDescripcion_3_listener($event) {
            return ctx.setDescripcion($event);
          })("foto", function PerfilViajeroComponent_Template_app_edicion_pu_foto_3_listener($event) {
            return ctx.setFoto($event);
          })("signal", function PerfilViajeroComponent_Template_app_edicion_pu_signal_3_listener($event) {
            return ctx.uploadUser($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-mensaje", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_mensaje_cerrado_4_listener($event) {
            return ctx.cerrar($event, "graciasC");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-mensaje", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_mensaje_cerrado_5_listener($event) {
            return ctx.cerrar($event, "graciasP");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-mensaje", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_mensaje_cerrado_6_listener($event) {
            return ctx.cerrar($event, "editOk");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PerfilViajeroComponent_img_15_Template, 1, 0, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PerfilViajeroComponent_img_21_Template, 1, 1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PerfilViajeroComponent_img_22_Template, 1, 0, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PerfilViajeroComponent_p_33_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PerfilViajeroComponent_span_35_Template, 2, 0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PerfilViajeroComponent_span_36_Template, 2, 0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PerfilViajeroComponent_app_boton_37_Template, 1, 0, "app-boton", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Los usuarios opinaron:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PerfilViajeroComponent_img_41_Template, 1, 0, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PerfilViajeroComponent_div_42_Template, 8, 7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Viajes del usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "carousel", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("titulo", ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("descripcion", ctx.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permisoEditar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.ubicacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.image != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.image == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.usuario.descripcion, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario.tipo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.estrellas == "-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Arr(ctx.stars).fill(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Arr(ctx.emptystars).fill(1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permisoOpinar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.permisoOpinar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comentarios);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides)("links", ctx.susViajes);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_10__["PuntuacionPuComponent"], _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_11__["ComentarioPuComponent"], _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_12__["EdicionPuComponent"], _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_13__["MensajeComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"], _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_17__["BotonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n#general[_ngcontent-%COMP%] {\n  height: 86%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n}\n#div1[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 35%;\n  float: left;\n}\n#tarjeta[_ngcontent-%COMP%] {\n  margin: 5%;\n  margin-top: 2%;\n}\n#opinions[_ngcontent-%COMP%] {\n  margin: 0 5%;\n}\n#div2[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 45%;\n  float: left;\n  overflow: hidden;\n}\n#div3[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  float: left;\n  overflow: auto;\n}\n#div4[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  float: left;\n}\n.little_container_der[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.little_container_izq[_ngcontent-%COMP%] {\n  width: 50%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.little_container_izq[_ngcontent-%COMP%]   #img-editar[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.name[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #03a9f4;\n  font-weight: bold;\n  font-size: 190%;\n  margin-bottom: 2.5%;\n  margin-top: 5%;\n}\n.viajes_usuario[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-top: 0%;\n  font-size: 170%;\n}\n#puntuar[_ngcontent-%COMP%] {\n  display: none;\n}\n#comentar[_ngcontent-%COMP%] {\n  display: none;\n}\n#editar[_ngcontent-%COMP%] {\n  display: none;\n}\n#editOk[_ngcontent-%COMP%] {\n  display: none;\n}\n#graciasP[_ngcontent-%COMP%] {\n  display: none;\n}\n#graciasC[_ngcontent-%COMP%] {\n  display: none;\n}\n.comentarios_usuario[_ngcontent-%COMP%] {\n  margin-top: 0%;\n  font-size: 170%;\n}\n.texto_perfil[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 6%;\n  font-size: 190%;\n}\n.bold_text[_ngcontent-%COMP%] {\n  font-size: 120%;\n  font-weight: bold;\n}\n.texto[_ngcontent-%COMP%] {\n  font-size: 110%;\n  text-align: justify;\n  margin: 6%;\n  margin-right: 10%;\n  margin-top: 2%;\n  overflow: auto;\n}\n.container_carousel1[_ngcontent-%COMP%] {\n  display: block;\n  height: 70%;\n  width: 60%;\n  margin: 1% 20%;\n}\n.titulo-opinion[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.titulo-opinion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.comment[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n.stars[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n.comment-division-1[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 19%;\n  margin-left: 3%;\n}\n.comment-division-2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 68%;\n  margin: 5%;\n}\n\n@media screen and (max-device-width: 700px) {\n  #div1[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div3[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  #div4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  .texto_perfil[_ngcontent-%COMP%] {\n    font-size: 140%;\n  }\n\n  .viajes_usuario[_ngcontent-%COMP%] {\n    font-size: 145%;\n  }\n}\n\n@media screen and (max-device-width: 1024px) {\n  #div1[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div3[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  #div4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  .texto_perfil[_ngcontent-%COMP%] {\n    font-size: 140%;\n  }\n\n  .viajes_usuario[_ngcontent-%COMP%] {\n    font-size: 145%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsZXMvcGVyZmlsLXZpYWplcm8vcGVyZmlsLXZpYWplcm8uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWFyaW9sb3phbm9jb3J0ZXMvVW5pdmVyc2lkYWRfTG9jYWwvVHJpcG1lZnkvc3JjL2FwcC9wZXJmaWxlcy9wZXJmaWwtdmlhamVyby9wZXJmaWwtdmlhamVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHTyxxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFLekI7RUFBVSxXQUFBO0VBQWEsV0FBQTtFQUFhLFVBQUE7RUFBWSxTQUFBO0VBQVcsa0JBQUE7RUFBb0IsT0FBQTtBREQvRTtBQ0VBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEQ0Y7QUNDQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FERUY7QUNBQTtFQUNFLFlBQUE7QURHRjtBQ0FBO0VBQVEsVUFBQTtFQUFZLFdBQUE7RUFBYSxXQUFBO0VBQWEsZ0JBQUE7QURPOUM7QUNOQTtFQUFRLFVBQUE7RUFBWSxXQUFBO0VBQWEsV0FBQTtFQUFhLGNBQUE7QURhOUM7QUNaQTtFQUFRLFVBQUE7RUFBWSxXQUFBO0VBQWEsV0FBQTtBRGtCakM7QUNmQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QURrQkY7QUNmQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FEa0JGO0FDZEE7RUFDRSxpQkFBQTtBRGlCRjtBQ2JBO0VBQ0UscUJBQUE7RUFDQSxjQTNDUTtFQTRDUixpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURnQkY7QUNiQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGdCRjtBQ2JBO0VBQ0UsYUFBQTtBRGdCRjtBQ2JBO0VBQ0UsYUFBQTtBRGdCRjtBQ2JBO0VBQ0UsYUFBQTtBRGdCRjtBQ2JBO0VBQ0UsYUFBQTtBRGdCRjtBQ2JBO0VBQ0UsYUFBQTtBRGdCRjtBQ2RBO0VBQ0UsYUFBQTtBRGlCRjtBQ2RBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURpQkY7QUNkQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURpQkY7QUNkQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRGlCRjtBQ2RBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QURpQkY7QUNiQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QURnQkY7QUNiQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRGdCRjtBQ2JBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURnQkY7QUNiQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBRGdCRjtBQ2JBO0VBQ0UsaUJBQUE7QURnQkY7QUNYQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURjRjtBQ1pBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRGVGO0FDWkEsZUFBQTtBQUNBO0VBRUU7SUFBUSxXQUFBO0lBQWEsV0FBQTtFRGdCckI7O0VDZkE7SUFBUSxXQUFBO0lBQWEsWUFBQTtJQUFjLFdBQUE7RURxQm5DOztFQ3BCQTtJQUFRLFdBQUE7SUFBYSxlQUFBO0lBQWlCLFdBQUE7RUQwQnRDOztFQ3pCQTtJQUFRLFdBQUE7SUFBYSxlQUFBO0lBQWdCLFdBQUE7RUQrQnJDOztFQzVCQTtJQUNFLGVBQUE7RUQrQkY7O0VDN0JBO0lBQ0UsZUFBQTtFRGdDRjtBQUNGO0FDN0JBLGVBQUE7QUFDQTtFQUVFO0lBQVEsV0FBQTtJQUFhLFlBQUE7SUFBYyxXQUFBO0VEaUNuQzs7RUNoQ0E7SUFBUSxXQUFBO0lBQWEsWUFBQTtJQUFjLFdBQUE7RURzQ25DOztFQ3JDQTtJQUFRLFdBQUE7SUFBYSxlQUFBO0lBQWlCLFdBQUE7RUQyQ3RDOztFQzFDQTtJQUFRLFdBQUE7SUFBYSxlQUFBO0lBQWdCLFdBQUE7RURnRHJDOztFQzdDQTtJQUNFLGVBQUE7RURnREY7O0VDOUNBO0lBQ0UsZUFBQTtFRGlERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGVyZmlsZXMvcGVyZmlsLXZpYWplcm8vcGVyZmlsLXZpYWplcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuI2dlbmVyYWwge1xuICBoZWlnaHQ6IDg2JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4jZGl2MSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuI3RhcmpldGEge1xuICBtYXJnaW46IDUlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuI29waW5pb25zIHtcbiAgbWFyZ2luOiAwIDUlO1xufVxuXG4jZGl2MiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDUlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2RpdjMge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jZGl2NCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxpdHRsZV9jb250YWluZXJfZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5saXR0bGVfY29udGFpbmVyX2l6cSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxpdHRsZV9jb250YWluZXJfaXpxICNpbWctZWRpdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzAzYTlmNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTkwJTtcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi52aWFqZXNfdXN1YXJpbyB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIGZvbnQtc2l6ZTogMTcwJTtcbn1cblxuI3B1bnR1YXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jY29tZW50YXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZWRpdGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2VkaXRPayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNncmFjaWFzUCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNncmFjaWFzQyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb21lbnRhcmlvc191c3VhcmlvIHtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIGZvbnQtc2l6ZTogMTcwJTtcbn1cblxuLnRleHRvX3BlcmZpbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNiU7XG4gIGZvbnQtc2l6ZTogMTkwJTtcbn1cblxuLmJvbGRfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0byB7XG4gIGZvbnQtc2l6ZTogMTEwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiA2JTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbnRhaW5lcl9jYXJvdXNlbDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMSUgMjAlO1xufVxuXG4udGl0dWxvLW9waW5pb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aXR1bG8tb3BpbmlvbiBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uY29tbWVudCB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuLnN0YXJzIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5jb21tZW50LWRpdmlzaW9uLTEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxOSU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLmNvbW1lbnQtZGl2aXNpb24tMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY4JTtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MDBweCkge1xuICAjZGl2MSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjZGl2MiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2RpdjMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICNkaXY0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAudGV4dG9fcGVyZmlsIHtcbiAgICBmb250LXNpemU6IDE0MCU7XG4gIH1cblxuICAudmlhamVzX3VzdWFyaW8ge1xuICAgIGZvbnQtc2l6ZTogMTQ1JTtcbiAgfVxufVxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgI2RpdjEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICNkaXYyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjZGl2MyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2RpdjQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC50ZXh0b19wZXJmaWwge1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbiAgfVxuXG4gIC52aWFqZXNfdXN1YXJpbyB7XG4gICAgZm9udC1zaXplOiAxNDUlO1xuICB9XG59IiwiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcclxuXHJcbiNnZW5lcmFseyBoZWlnaHQ6IDg2JTsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwO31cclxuI2RpdjEge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzNSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI3RhcmpldGF7XHJcbiAgbWFyZ2luOiA1JTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4jb3BpbmlvbnN7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG59XHJcblxyXG4jZGl2MiB7IHdpZHRoOiA1MCU7IGhlaWdodDogNDUlOyBmbG9hdDogbGVmdDsgb3ZlcmZsb3c6IGhpZGRlbjt9XHJcbiNkaXYzIHsgd2lkdGg6IDUwJTsgaGVpZ2h0OiA1MCU7IGZsb2F0OiBsZWZ0OyBvdmVyZmxvdzogYXV0bzt9XHJcbiNkaXY0IHsgd2lkdGg6IDUwJTsgaGVpZ2h0OiA1MCU7IGZsb2F0OiBsZWZ0O31cclxuXHJcblxyXG4ubGl0dGxlX2NvbnRhaW5lcl9kZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5saXR0bGVfY29udGFpbmVyX2l6cXtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxufVxyXG5cclxuLmxpdHRsZV9jb250YWluZXJfaXpxICNpbWctZWRpdGFye1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuLm5hbWV7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAkbGV0dGVycztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE5MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnZpYWplc191c3Vhcmlve1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAwJTtcclxuICBmb250LXNpemU6IDE3MCU7XHJcbn1cclxuXHJcbiNwdW50dWFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNjb21lbnRhcntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jZWRpdGFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNlZGl0T2t7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2dyYWNpYXNQe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI2dyYWNpYXNDe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb21lbnRhcmlvc191c3Vhcmlve1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIGZvbnQtc2l6ZTogMTcwJTtcclxufVxyXG5cclxuLnRleHRvX3BlcmZpbHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNiU7XHJcbiAgZm9udC1zaXplOiAxOTAlO1xyXG59XHJcblxyXG4uYm9sZF90ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRleHRve1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIG1hcmdpbjogNiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyX2Nhcm91c2VsMSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDElIDIwJTtcclxufVxyXG5cclxuLnRpdHVsby1vcGluaW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGl0dWxvLW9waW5pb24gaW1ne1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuLmNvbW1lbnR7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5zdGFyc3tcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuXHJcblxyXG4uY29tbWVudC1kaXZpc2lvbi0xe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTklO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4uY29tbWVudC1kaXZpc2lvbi0ye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjglO1xyXG4gIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi8qKlBBUkEgTcOTVklMKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzAwcHgpe1xyXG5cclxuICAjZGl2MSB7IHdpZHRoOiAxMDAlOyBmbG9hdDogbGVmdDt9XHJcbiAgI2RpdjIgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBmbG9hdDogbGVmdDt9XHJcbiAgI2RpdjMgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDoxMCU7ICBmbG9hdDogbGVmdDt9XHJcbiAgI2RpdjQgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDoxMCU7IGZsb2F0OiBsZWZ0O31cclxuXHJcblxyXG4gIC50ZXh0b19wZXJmaWx7XHJcbiAgICBmb250LXNpemU6IDE0MCU7XHJcbiAgfVxyXG4gIC52aWFqZXNfdXN1YXJpb3tcclxuICAgIGZvbnQtc2l6ZTogMTQ1JTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlBBUkEgTcOTVklMKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KXtcclxuXHJcbiAgI2RpdjEgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBmbG9hdDogbGVmdDt9XHJcbiAgI2RpdjIgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBmbG9hdDogbGVmdDt9XHJcbiAgI2RpdjMgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDoxMCU7ICBmbG9hdDogbGVmdDt9XHJcbiAgI2RpdjQgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDoxMCU7IGZsb2F0OiBsZWZ0O31cclxuXHJcblxyXG4gIC50ZXh0b19wZXJmaWx7XHJcbiAgICBmb250LXNpemU6IDE0MCU7XHJcbiAgfVxyXG4gIC52aWFqZXNfdXN1YXJpb3tcclxuICAgIGZvbnQtc2l6ZTogMTQ1JTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilViajeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perfil-viajero',
          templateUrl: './perfil-viajero.component.html',
          styleUrls: ['./perfil-viajero.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]
        }, {
          type: _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]
        }, {
          type: _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudFirestoreService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        newDescripcion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['descripcion']
        }],
        inputImageUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['imageUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/privacidad/privacidad.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/privacidad/privacidad.component.ts ***!
    \****************************************************/

  /*! exports provided: PrivacidadComponent */

  /***/
  function srcAppPrivacidadPrivacidadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacidadComponent", function () {
      return PrivacidadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/scroll-top/scroll-top.component */
    "./src/app/shared/scroll-top/scroll-top.component.ts");

    var PrivacidadComponent =
    /*#__PURE__*/
    function () {
      function PrivacidadComponent() {
        _classCallCheck(this, PrivacidadComponent);
      }

      _createClass(PrivacidadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scroll",
        value: function scroll(el) {
          el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }]);

      return PrivacidadComponent;
    }();

    PrivacidadComponent.ɵfac = function PrivacidadComponent_Factory(t) {
      return new (t || PrivacidadComponent)();
    };

    PrivacidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivacidadComponent,
      selectors: [["app-privacidad"]],
      decls: 113,
      vars: 0,
      consts: [["titulo", "Pol\xEDtica de Privacidad"], [1, "title"], [1, "politica"], ["t0", ""], ["t1", ""], ["t2", ""], ["t3", ""], ["t4", ""], ["t5", ""], [1, "right-menu"], [3, "click"]],
      template: function PrivacidadComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nuestra pol\xEDtica de privacidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Introducci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Tal y como mencionamos en nuestras 3 Leyes de protecci\xF3n de datos, nos comprometemos a proteger la privacidad de sus datos. Esta Pol\xEDtica de privacidad explica m\xE1s concretamente qu\xE9 informaci\xF3n Tripmefy Corporation y sus Empresas del Grupo recopilan de los Titulares de cuenta y Usuarios finales (\"usted\") a trav\xE9s de los sitios web y aplicaciones de Tripmefy, a los cuales nos referimos colectivamente como \"el Servicio\". El Servicio incluye el Software tripmefy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tenga en cuenta que si utiliza Trimefy como viajero, usted es el Titular de la cuenta y el Usuario final de una cuenta del servicio de Tripmefy. Si utiliza Tripmefy como organizador, el Titular de la cuenta es el Cliente que ha contratado Tripmefy. Puede encontrar la definici\xF3n de estos y otros t\xE9rminos utilizados en esta pol\xEDtica en el Glosario al final de esta p\xE1gina. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Aunque es poco frecuente que se produzcan cambios, esta pol\xEDtica se puede modificar a medida que aparezcan nuevas funciones, tecnolog\xEDa o requisitos legales, de modo que le recomendamos que los compruebe ocasionalmente. Si realizamos alg\xFAn cambio significativo, le notificaremos y, en caso necesario, solicitaremos su consentimiento. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xBFQu\xE9 tipo de informaci\xF3n recoge Tripmefy? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Creamos Tripmefy para ayudarle a crear paquetes de viajes y as\xED poder acercarse m\xE1s al usuario . Eso significa que puede introducir, cargar o almacenar en Tripmefy cualquier texto, imagen y otros datos que desee; nos referimos a esa informaci\xF3n como \"Contenido\". Tambi\xE9n recopilamos y recibimos los siguientes tipos de informaci\xF3n: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Informaci\xF3n b\xE1sica sobre suscriptores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Para abrir su cuenta y procesar pagos, recopilamos y recibimos informaci\xF3n b\xE1sica como su direcci\xF3n de correo electr\xF3nico y, en funci\xF3n de c\xF3mo compre, su direcci\xF3n de facturaci\xF3n y otra informaci\xF3n de pago. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Datos de uso.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Recopilamos y registramos datos sobre c\xF3mo usted y otros usuarios acceden y utilizan Tripmefy, por ejemplo, la acci\xF3n de crear o compartir un viaje. Los datos de uso se pueden recopilar a trav\xE9s de cookies y tecnolog\xEDas similares. Para obtener m\xE1s informaci\xF3n, incluida la forma de desactivaci\xF3n, visite nuestra p\xE1gina de Informaci\xF3n de Cookies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Informaci\xF3n de ubicaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Recopilamos la direcci\xF3n IP que utiliza para conectarse al Servicio y, si decide compartirla, la informaci\xF3n de su ubicaci\xF3n desde un dispositivo m\xF3vil. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Informaci\xF3n del dispositivo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Recopilamos informaci\xF3n sobre el n\xFAmero y el tipo de dispositivos que utiliza para conectarse al Servicio, as\xED como informaci\xF3n sobre los sistemas operativos de esos dispositivos (p. ej., iOS, Android, Windows). Obtenga m\xE1s informaci\xF3n sobre los datos que recopilan nuestras aplicaciones de su dispositivo en nuestra p\xE1gina de Uso de datos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\xBFC\xF3mo utiliza Tripmefy mi informaci\xF3n?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tenemos normas concretas sobre c\xF3mo y cu\xE1ndo utilizamos la informaci\xF3n que recopilamos y recibimos. Las describimos a continuaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\xBFQu\xE9 hace Tripmefy con mi informaci\xF3n?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Nos comprometemos a proteger la privacidad de su informaci\xF3n. A continuaci\xF3n, describimos las formas en que utilizamos la informaci\xF3n que recopilamos y recibimos para proporcionar, mantener y mejorar el Servicio; con el fin de ofrecer soluci\xF3n a los problemas y dar asistencia a los clientes; para proteger el Servicio para todos nuestros usuarios; para ponernos en contacto con usted; y para administrar las cuentas de Tripmefy Business.\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Utilizamos una serie de tecnolog\xEDas para ayudarle a sacar el m\xE1ximo provecho del Servicio. Nuestros sistemas analizan autom\xE1ticamente sus datos con el fin de potenciar las funciones de Tripmefy y para mejorar continuamente el Servicio de una forma que no requiera que nadie vea su Contenido. Esto puede incluir, por ejemplo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Asegurarnos de que encuentra lo que necesita cuando busca en su cuenta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Mostr\xE1ndole la informaci\xF3n m\xE1s relevante seg\xFAn como est\xE9 o pueda estar utilizando el Servicio en el momento y/o lugar concreto;");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sugerir las acciones que puede realizar en funci\xF3n de la informaci\xF3n que ha almacenado.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sugiri\xE9ndole funciones o productos del servicio de Tripmefy que consideramos que le ayudar\xE1n a sacar el m\xE1ximo provecho de nuestro Servicio.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Para usuarios de Tripmefy Business, recomendar personas con las que puede colaborar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Con el fin de ofrecer soluci\xF3n a los problemas y dar asistencia a los clientes, es posible que nuestro equipo de Atenci\xF3n al cliente necesite acceder a su informaci\xF3n, como la direcci\xF3n de correo electr\xF3nico de su cuenta e informaci\xF3n sobre la aplicaci\xF3n Tripmefy que est\xE1 utilizando, sujeto a las protecciones que se describen a continuaci\xF3n. \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Como parte de nuestros esfuerzos para proteger su cuenta y la funcionalidad del Servicio, nuestros sistemas automatizados pueden analizar los mensajes de correo electr\xF3nico que env\xEDe a y desde su cuenta de Tripmefy y las notas que comparte para detectar spam, malware u otros posibles problemas de seguridad. Si determinamos que dicho material constituye una violaci\xF3n de los T\xE9rminos de Servicio o Gu\xEDas de usuario, podemos bloquear la entrega o detener el uso compartido del material problem\xE1tico, tal y como funciona un filtro de correo no deseado en su bandeja de entrada del correo electr\xF3nico. Obtenga m\xE1s informaci\xF3nsobre los pasos que puede seguir para proteger su cuenta, como el uso de contrase\xF1as seguras, verificaci\xF3n en dos pasos y cifrado.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "De acuerdo con sus preferencias de comunicaci\xF3n, nos pondremos en contacto con usted ocasionalmente para anunciar nuevos productos y funciones que creamos para usted, compartir consejos para utilizar Tripmefy y hacer m\xE1s cosas, ofrecer ofertas especiales y proporcionar informaci\xF3n sobre c\xF3mo funciona Tripmefy con productos y servicios de nuestros socios comerciales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h1", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\xBFAlguien de Tripmefy podr\xEDa ver alguna vez mi Contenido?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Usted tiene el control sobre qui\xE9n ve su Contenido. Limitamos el uso de su Contenido para asegurarnos de que nadie de Tripmefy pueda verlo, a menos que usted nos d\xE9 permiso expreso o que sea necesario para cumplir con nuestras obligaciones legales. Concretamente: Para ayudar a refinar o mejorar la tecnolog\xEDa, podemos pedirle permiso para revisar partes de su Contenido. Por ejemplo, si una nueva funci\xF3n sugiere notas relacionadas que son relevantes para su Contenido, podemos darle la oportunidad de proporcionarnos comentarios sobre c\xF3mo funciona la funci\xF3n junto con una muestra del Contenido en cuesti\xF3n, con el fin de que podamos asegurarnos de que la funci\xF3n proporciona sugerencias adaptadas de forma adecuada. Dicho acceso a su Contenido se produce \xFAnicamente con su permiso expreso y est\xE1 sujeto a estrictas normas de confidencialidad y controles de acceso a datos. Tomar la decisi\xF3n de darnos este permiso es completamente voluntario. Si se pone en contacto con nuestro equipo de Atenci\xF3n al cliente para obtener ayuda con partes concretas del Contenido en su cuenta (por ejemplo, si no puede encontrar una nota que cree que deber\xEDa estar en su cuenta), pedirles posible que le pidamos permiso temporal para mirar su Contenido. Este permiso finaliza en el momento en que se resuelve el problema. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\xBFC\xF3mo responde Tripmefy a las solicitudes legales de mi informaci\xF3n?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Protegemos cuidadosamente la privacidad de su cuenta. No divulgaremos su informaci\xF3n a las autoridades policiales u otras autoridades gubernamentales a menos que consideremos que sea necesario para cumplir las \xF3rdenes, \xF3rdenes judiciales, citaciones u otras solicitudes legales del gobierno. Esto puede incluir responder a solicitudes legales de jurisdicciones fuera de Espa\xF1a si consideramos de buena fe que la ley exige la respuesta en esa jurisdicci\xF3n, afecta a los usuarios en esa jurisdicci\xF3n y es coherente con las normas b\xE1sicas internacionalmente reconocidas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Interpretamos de manera estricta todas las solicitudes de informaci\xF3n, y solo revelamos el Contenido de su cuenta que atienda espec\xEDficamente a una orden del gobierno o si ha brindado su consentimiento expl\xEDcito. De acuerdo con nuestra pol\xEDtica de notificaci\xF3n a usuarios, le comunicaremos si creemos que estamos obligados a cumplir una demanda legal de un tercero de su informaci\xF3n, y rutinariamente rechazaremos las directivas de gobierno sobre el retraso de la notificaci\xF3n a usuarios que consideremos demasiado generales. Puede encontrar m\xE1s informaci\xF3n en nuestro Informe de transparencia actual. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Adem\xE1s, en raras ocasiones es posible que compartamos su informaci\xF3n seg\xFAn sea necesario para investigar o tomar acciones respecto a actividades ilegales, presunto fraude o amenazas potenciales contra personas, propiedad o sistemas de quienes trabajamos en el Servicio, o seg\xFAn sea necesario con el fin de cumplir nuestras obligaciones legales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h1", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\xBFC\xF3mo puedo gestionar mi informaci\xF3n almacenada en Tripmefy?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " De acuerdo con nuestra primera ley de protecci\xF3n de datos, sus datos le pertenecen y en la mayor\xEDa de los casos puede gestionar su informaci\xF3n simplemente accediendo a su cuenta y editando su informaci\xF3n directamente dentro del servicio de Tripmefy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Sin embargo, si lo prefiere, puede ponerse en contacto con nosotros escribiendo a atencion@Tripmefy.com para solicitarnos que proporcionemos acceso, corrijamos, actualicemos o eliminemos su informaci\xF3n personal. Tenga en cuenta que posiblemente le solicitemos un comprobante de identidad y/o propiedad de la cuenta antes de completar su solicitud. Cumpliremos dichas solicitudes en la medida requerida por la ley aplicable o por el Escudo de Privacidad de Espa\xF1a. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.scroll(_r76);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Introducci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_93_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.scroll(_r77);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\xBFQu\xE9 tipo de informaci\xF3n recoge Tripmefy?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_97_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

            return ctx.scroll(_r78);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\xBFC\xF3mo utiliza Tripmefy mi informaci\xF3n?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_101_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);

            return ctx.scroll(_r79);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\xBFAlguien de Tripmefy podr\xEDa ver alguna vez mi Contenido?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_105_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

            return ctx.scroll(_r80);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\xBFC\xF3mo responde Tripmefy a las solicitudes legales de mi informaci\xF3n?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_109_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

            var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81);

            return ctx.scroll(_r81);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\xBFC\xF3mo puedo gestionar mi informaci\xF3n almacenada en Tripmefy?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "app-scroll-top");
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__["ScrollTopComponent"]],
      styles: [".title[_ngcontent-%COMP%] {\n  font-size: 36pt;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: #009788;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 150px;\n  margin-bottom: 150px;\n}\n.politica[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: justify;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-left: 50px;\n  font-size: 11pt;\n}\n.politica[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #009788;\n  text-align: left;\n  font-weight: bold;\n}\n.politica[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #009788;\n}\n.right-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  right: 100px;\n  top: 400px;\n}\n.right-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  list-style-type: none;\n  font-weight: bold;\n}\n.right-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background-color: #009788;\n  color: #009788;\n  border-color: #009788;\n}\n@media screen and (max-device-width: 480px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 20pt;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-top: 30px;\n    margin-bottom: 150px;\n  }\n\n  .politica[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: 40px;\n    font-size: 11pt;\n    margin-top: 300px;\n  }\n\n  .right-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 80%;\n    top: 200px;\n    left: 15px;\n    font-size: 9pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3ByaXZhY2lkYWQvcHJpdmFjaWRhZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJpdmFjaWRhZC9wcml2YWNpZGFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFNekI7RUFDSSxlQUFBO0VBQ0Esd0lBQUE7RUFDQSxjQUxXO0VBTVgsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNUSjtBRFdBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0lBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFlBO0VBQ0ksY0FyQlc7RUFzQlgsZ0JBQUE7RUFDQSxpQkFBQTtBQ1RKO0FEYUE7RUFDSSxjQTVCVztBQ2tCZjtBRGFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNWSjtBRGFBO0VBQ0ksd0lBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDVko7QURhQTtFQUNJLHlCQTdDVztFQThDWCxjQTlDVztFQStDWCxxQkEvQ1c7QUNxQ2Y7QURhQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VDVk47O0VEWUU7SUFDSSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNUTjs7RURhRTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtFQ1ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcml2YWNpZGFkL3ByaXZhY2lkYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcbiRsZXR0ZXJzOiAjMDNhOWY0O1xyXG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xyXG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzNnB0O1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG59XHJcbi5wb2xpdGljYXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG5cclxufVxyXG5cclxuLnBvbGl0aWNhIGgxe1xyXG4gICAgY29sb3I6ICRhenVsLXZlcmRvc287XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG4ucG9saXRpY2EgYntcclxuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xyXG59XHJcbiAgXHJcbi5yaWdodC1tZW51e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHJpZ2h0OiAxMDBweDtcclxuICAgIHRvcDogNDAwcHhcclxufVxyXG5cclxuLnJpZ2h0LW1lbnUgdWx7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yaWdodC1tZW51IGhye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtdmVyZG9zbztcclxuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYXp1bC12ZXJkb3NvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLnBvbGl0aWNhe1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwMHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAucmlnaHQtbWVudXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB0b3A6IDIwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4udGl0bGUge1xuICBmb250LXNpemU6IDM2cHQ7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDA5Nzg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5wb2xpdGljYSB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDExcHQ7XG59XG5cbi5wb2xpdGljYSBoMSB7XG4gIGNvbG9yOiAjMDA5Nzg4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvbGl0aWNhIGIge1xuICBjb2xvcjogIzAwOTc4ODtcbn1cblxuLnJpZ2h0LW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMCU7XG4gIHJpZ2h0OiAxMDBweDtcbiAgdG9wOiA0MDBweDtcbn1cblxuLnJpZ2h0LW1lbnUgdWwge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmlnaHQtbWVudSBociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk3ODg7XG4gIGNvbG9yOiAjMDA5Nzg4O1xuICBib3JkZXItY29sb3I6ICMwMDk3ODg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbiAgfVxuXG4gIC5wb2xpdGljYSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XG4gIH1cblxuICAucmlnaHQtbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdG9wOiAyMDBweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogOXB0O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacidadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-privacidad',
          templateUrl: './privacidad.component.html',
          styleUrls: ['./privacidad.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pruebas/pruebas.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pruebas/pruebas.component.ts ***!
    \**********************************************/

  /*! exports provided: PruebasComponent */

  /***/
  function srcAppPruebasPruebasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PruebasComponent", function () {
      return PruebasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../interfaces/viaje */
    "./src/app/interfaces/viaje.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/pedir-imagen/pedir-imagen.component */
    "./src/app/shared/pedir-imagen/pedir-imagen.component.ts"); //import { EventEmitter } from 'protractor';


    var PruebasComponent =
    /*#__PURE__*/
    function () {
      function PruebasComponent(_route, _router, storage, firestoreService) {
        _classCallCheck(this, PruebasComponent);

        this._route = _route;
        this._router = _router;
        this.storage = storage;
        this.firestoreService = firestoreService;
      }

      _createClass(PruebasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "crearViaje",
        value: function crearViaje(e) {
          console.log("entra");
          var viaje = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__["Viaje"]();
          viaje.pais = "Alemania";
          viaje.ciudad = "Berlín";
          viaje.continente = "Europa";
          viaje.email = "emailinventado@gmail.com";
          viaje.img = e;
          this.firestoreService.createViaje(viaje);
        }
      }]);

      return PruebasComponent;
    }();

    PruebasComponent.ɵfac = function PruebasComponent_Factory(t) {
      return new (t || PruebasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]));
    };

    PruebasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PruebasComponent,
      selectors: [["app-pruebas"]],
      decls: 2,
      vars: 0,
      consts: [["titulo", "pruebas"], [3, "url"]],
      template: function PruebasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-pedir-imagen", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("url", function PruebasComponent_Template_app_pedir_imagen_url_1_listener($event) {
            return ctx.crearViaje($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_6__["PedirImagenComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BydWViYXMvcHJ1ZWJhcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PruebasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pruebas',
          templateUrl: './pruebas.component.html',
          styleUrls: ['./pruebas.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registro/registro.component.ts":
  /*!************************************************!*\
    !*** ./src/app/registro/registro.component.ts ***!
    \************************************************/

  /*! exports provided: MyErrorStateMatcher, RegistroComponent */

  /***/
  function srcAppRegistroRegistroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroComponent", function () {
      return RegistroComponent;
    });
    /* harmony import */


    var _interfaces_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../interfaces/usuario */
    "./src/app/interfaces/usuario.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/volver/volver.component */
    "./src/app/shared/volver/volver.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /** Error when invalid control is dirty, touched, or submitted. */


    var MyErrorStateMatcher =
    /*#__PURE__*/
    function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();

    var RegistroComponent =
    /*#__PURE__*/
    function () {
      function RegistroComponent(route, authService, userService) {
        _classCallCheck(this, RegistroComponent);

        this.route = route;
        this.authService = authService;
        this.userService = userService;
        this.hide = true;
        this.checked = false;
        this.labelPosition = 'after';
        this.nombre = '';
        this.apellido = '';
        this.email = '';
        this.password = '';
        this.password2 = '';
        this.tipo = '';
        this.poblacion = '';
        this.pais = '';
        this.terminos = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.nombreFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.apellidoFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.poblacionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.paisFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password2FormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.matcher = new MyErrorStateMatcher();
        this.error = "";
      }

      _createClass(RegistroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.route.navigate(['/page1']);
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          var _this3 = this;

          document.getElementById("password1").style.color = "white";
          document.getElementById("password2").style.color = "white";
          document.getElementById("email").style.color = "white";
          this.authService.registerUser(this.email, this.password) //almacenamos el usuario de registro en la bbdd (email y contraseña)
          .then(function (res) {
            var usuario = new _interfaces_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]();
            usuario.nombre = _this3.nombre;
            usuario.apellidos = _this3.apellido;
            usuario.email = _this3.email;
            usuario.password = _this3.password;
            usuario.tipo = _this3.tipo;
            usuario.image = "";
            usuario.descripcion = "";
            usuario.ubicacion = _this3.MaysPrimera(_this3.poblacion.toLowerCase()) + ", " + _this3.MaysPrimera(_this3.pais.toLowerCase());

            _this3.userService.createUsuario(usuario);

            localStorage.setItem('tipo', _this3.tipo);

            _this3.route.navigate(['/bienvenida']);
          })["catch"](function (err) {
            document.getElementById("error5").style.display = "block";
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "none";
            document.getElementById("email").style.color = "red";
          });
        }
      }, {
        key: "checkFields",
        value: function checkFields() {
          if (this.nombre === '' || this.apellido === '' || this.email === '' || this.password === '' || this.password2 === '' || this.poblacion === '' || this.pais === '' || this.tipo === '' || !this.terminos) {
            document.getElementById("password1").style.color = "white";
            document.getElementById("password2").style.color = "white";
            document.getElementById("error1").style.display = "block";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "none";
            document.getElementById("error5").style.display = "none";
            return true;
          } else if (this.password.localeCompare(this.password2) != 0) {
            document.getElementById("password1").style.color = "red";
            document.getElementById("password2").style.color = "red";
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "block";
            document.getElementById("error5").style.display = "none";
            return true;
          } else if (this.password.length < 8) {
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "block";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "none";
            document.getElementById("error5").style.display = "none";
            return true;
          } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.email)) {
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "block";
            document.getElementById("error4").style.display = "none";
            document.getElementById("error5").style.display = "none";
            return true;
          } else {
            document.getElementById("password1").style.color = "white";
            document.getElementById("password2").style.color = "white";
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "none";
            document.getElementById("error5").style.display = "none";
            return false;
          }
        }
      }, {
        key: "MaysPrimera",
        value: function MaysPrimera(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
      }]);

      return RegistroComponent;
    }();

    RegistroComponent.ɵfac = function RegistroComponent_Factory(t) {
      return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]));
    };

    RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegistroComponent,
      selectors: [["app-registro"]],
      inputs: {
        error: "error"
      },
      decls: 82,
      vars: 18,
      consts: [[1, "contenedor"], [1, "lateral-izq"], ["src", "./assets/tripmefy.png"], [1, "lateral-drch"], [1, "volver", 3, "click"], [3, "ngSubmit"], [1, "registro_datos"], ["id", "error1"], ["id", "error2"], ["id", "error3"], ["id", "error4"], ["id", "error5"], [1, "grupo-inputs"], [1, "input"], ["matInput", "", "name", "nombre", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "apellido", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "polacion", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "pais", "required", "", 3, "ngModel", "ngModelChange"], [1, "email", "input"], ["id", "email", "matInput", "", "type", "email", "placeholder", "Ej. pat@example.com", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "input"], ["id", "password1", "matInput", "", "name", "password", "required", "", 3, "ngModel", "type", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["id", "password2", "matInput", "", "name", "password2", "required", "", 3, "ngModel", "type", "ngModelChange"], [1, "checkbox"], ["name", "tipo", 3, "ngModel", "ngModelChange"], ["value", "viajero", 1, "example-margin"], ["value", "organizador", 1, "example-margin"], ["name", "terminos", 1, "", 3, "ngModel", "ngModelChange"], [1, "boton_registro"], ["mat-raised-button", "", "type", "submit", 1, "boton", 2, "width", "200px", 3, "disabled"], ["href", "/inicio-sesion"]],
      template: function RegistroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-volver", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistroComponent_Template_app_volver_click_4_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "REGISTRO");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegistroComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Introduce los campos obligatorios");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Introduce una contrase\xF1a de 8 caracteres");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Introduce el email en el formato correcto example@examle.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Las contrase\xF1as no coinciden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "El email ya existe");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Apellido");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.apellido = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Poblaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.poblacion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Pa\xEDs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.pais = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Introduce tu contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_52_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_53_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Confirma la contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_60_listener($event) {
            return ctx.password2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_61_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "section", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-radio-group", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_mat_radio_group_ngModelChange_65_listener($event) {
            return ctx.tipo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-radio-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Soy viajero");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-radio-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Soy organizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "section", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-checkbox", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_mat_checkbox_ngModelChange_71_listener($event) {
            return ctx.terminos = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Acepto los t\xE9rminos y la pol\xEDtica de privacidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " REGISTRATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\xBFYa est\xE1s registrado? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Inicia sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.apellido);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.poblacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pais);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password)("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password2)("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tipo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.terminos);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.checkFields());
        }
      },
      directives: [_shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_6__["VolverComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.contenedor[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.contenedor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.lateral-izq[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 50%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n\n.lateral-drch[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#004cbe, #0da8de);\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n  background-attachment: fixed;\n  overflow: scroll;\n  color: white;\n}\n.lateral-drch[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: none;\n}\n#error1[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n#error2[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n#error3[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n#error4[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n#error5[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n.grupo-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n}\n.grupo-inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n  width: 30%;\n}\n.input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #004cbe;\n}\n.volver[_ngcontent-%COMP%] {\n  color: white;\n}\n.boton_registro[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2%;\n}\n.registro_datos[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20%;\n}\n.checkbox[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2%;\n}\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 2%;\n  text-align: center;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: white !important;\n}\n .mat-form-field-underline {\n  \n  background-color: white !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: white !important;\n}\n\n  input.mat-input-element {\n  color: white;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: white !important;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: white;\n}\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle, .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: white !important;\n}\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: white !important;\n}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: white !important;\n  \n}\n\n@media screen and (max-device-width: 700px) {\n  .contenedor[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    display: inline-block;\n    background-color: #ffffff;\n    height: 620px;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: auto;\n    height: 70%;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70%;\n  }\n\n  .lateral-drch[_ngcontent-%COMP%] {\n    background-image: none;\n    background-color: #ffffff;\n    width: auto;\n    height: 30%;\n  }\n\n  #error1[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  #error2[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  #error3[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  #error4[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  #error5[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  .grupo-inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 35%;\n  }\n\n  .input[_ngcontent-%COMP%] {\n    width: 74%;\n  }\n\n  .boton_registro[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n\n  .boton_inicio[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 0%;\n  }\n\n  .formulario[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n    .mat-focused .mat-form-field-label {\n    \n    color: #004cbe !important;\n  }\n\n   .mat-form-field-underline {\n    \n    background-color: #004cbe !important;\n  }\n\n   .mat-form-field-ripple {\n    \n    background-color: #004cbe !important;\n  }\n\n  \n    input.mat-input-element {\n    color: #004cbe;\n  }\n\n    .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n    background-color: #004cbe !important;\n  }\n\n    .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n    background-color: #004cbe;\n  }\n\n    .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle, .mat-radio-outer-circle[_ngcontent-%COMP%] {\n    border-color: #004cbe !important;\n  }\n\n    .mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #004cbe !important;\n  }\n\n  .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n    border-color: #004cbe !important;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWFyaW9sb3phbm9jb3J0ZXMvVW5pdmVyc2lkYWRfTG9jYWwvVHJpcG1lZnkvc3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHTyxxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFJekIsOEJBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUROSjtBQ1dBO0VBQ0UsVUFBQTtBRFJGO0FDV0E7RUFDSSx3SUFBQTtBRFJKO0FDV0E7RUFDSSxxQkFBQTtBRFJKO0FDV0EsbUNBQUE7QUFDQTtFQUNJLHlCQW5DSztFQW9DTCxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEUko7QUNZQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7QURWSjtBQ2dCQSxpQ0FBQTtBQUNBO0VBQ0UsbURBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEYkY7QUNlQTtFQUNFLGFBQUE7QURaRjtBQ2VBO0VBQ0Usd0lBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURaRjtBQ2VBO0VBQ0Usd0lBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURaRjtBQ2VBO0VBQ0Usd0lBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURaRjtBQ2dCQTtFQUNFLHdJQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEYkY7QUNpQkE7RUFDRSx3SUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRGRGO0FDa0JBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURmRjtBQ2lCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEZEY7QUNpQkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURkRjtBQ2tCQTtFQUNJLHFCQUFBO0VBQ0EsY0FwS1M7QURxSmI7QUNpQkE7RUFDRSxZQUFBO0FEZEY7QUNrQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QURmSjtBQ2lCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBRGRGO0FDZ0JBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FEYkY7QUNnQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QURiRjtBQ2dCQTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7QURiRjtBQ2dCQztFQUNDLDRCQUFBO0VBQ0Esa0NBQUE7QURiRjtBQ2dCQTtFQUNDLHlDQUFBO0VBQ0Esa0NBQUE7QURiRDtBQ2dCQSxzQkFBQTtBQUNBO0VBQ0UsWUFBQTtBRGJGO0FDZ0JBO0VBQ0Usa0NBQUE7QURiRjtBQ2dCQTtFQUNFLHVCQUFBO0FEYkY7QUNnQkE7RUFDRSw4QkFBQTtBRGJGO0FDZ0JBO0VBQ0Usa0NBQUE7QURiRjtBQ2dCQTtFQUNFLDhCQUFBO0VBQWdDLDBCQUFBO0FEWmxDO0FDZ0JBLGVBQUE7QUFDQTtFQUVJO0lBQ0ksZUFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQTVPQztJQTZPRCxhQUFBO0VEZE47O0VDaUJFO0lBQ0kseUJBalBDO0lBa1BELFdBQUE7SUFDQSxXQUFBO0VEZE47O0VDaUJFO0lBQ0ksV0FBQTtFRGROOztFQ2dCRTtJQUNJLHNCQUFBO0lBQ0EseUJBM1BDO0lBNFBELFdBQUE7SUFDQSxXQUFBO0VEYk47O0VDZUU7SUFDRSx3SUFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RURaSjs7RUNjRTtJQUNFLHdJQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFRFhKOztFQ2FFO0lBQ0Usd0lBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VEVko7O0VDWUU7SUFDRSx3SUFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RURUSjs7RUNXRTtJQUNFLHdJQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFRFJKOztFQ1dFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RURSSjs7RUNXRTtJQUNFLFVBQUE7RURSSjs7RUNVRTtJQUNJLG9CQUFBO0VEUE47O0VDV0U7SUFDRSxrQkFBQTtJQUNBLGNBQUE7RURSSjs7RUNXRTtJQUNFLFVBQUE7RURSSjs7RUNXRTtJQUNFLHdCQUFBO0lBQ0EseUJBQUE7RURSSjs7RUNXRztJQUNDLDRCQUFBO0lBQ0Esb0NBQUE7RURSSjs7RUNXRTtJQUNDLHlDQUFBO0lBQ0Esb0NBQUE7RURSSDs7RUNXRSxzQkFBQTtFQUNBO0lBQ0UsY0E1VU87RURvVVg7O0VDV0U7SUFDRSxvQ0FBQTtFRFJKOztFQ1dFO0lBQ0UseUJBcFZPO0VENFVYOztFQ1dFO0lBQ0UsZ0NBQUE7RURSSjs7RUNXRTtJQUNFLG9DQUFBO0VEUko7O0VDV0U7SUFDRSxnQ0FBQTtJQUFzQywwQkFBQTtFRFAxQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLyoqQ09OVEVORURPUiBZIEZVRU5URSBDT03Dmk4qKi9cbi5jb250ZW5lZG9yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmNvbnRlbmVkb3IgcCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qKkxBVEVSQUwgSVpRVUlFUkRPIERFIExBIFDDgUdJTkEqKi9cbi5sYXRlcmFsLWl6cSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sYXRlcmFsLWl6cSBpbWcge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vKipMQVRFUkFMIERFUkVDSE8gREUgTEEgUMOBR0lOQSoqL1xuLmxhdGVyYWwtZHJjaCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDA0Y2JlLCAjMGRhOGRlKTtcbiAgd2lkdGg6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxhdGVyYWwtZHJjaCBoMSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlcnJvcjEge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlcnJvcjIge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlcnJvcjMge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlcnJvcjQge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlcnJvcjUge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ncnVwby1pbnB1dHMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncnVwby1pbnB1dHMgLmlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmlucHV0IHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDRjYmU7XG59XG5cbi52b2x2ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib3Rvbl9yZWdpc3RybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5yZWdpc3Ryb19kYXRvcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4uY2hlY2tib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKiBpbnB1dCBjb2xvciBjbGFzcyAqL1xuOjpuZy1kZWVwIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSwgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNzAwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDYyMHB4O1xuICB9XG5cbiAgLmxhdGVyYWwtaXpxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogNzAlO1xuICB9XG5cbiAgLmxhdGVyYWwtaXpxIGltZyB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cblxuICAubGF0ZXJhbC1kcmNoIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cblxuICAjZXJyb3IxIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdG9wOiA2MyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgI2Vycm9yMiB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRvcDogNjMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gICNlcnJvcjMge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0b3A6IDYzJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAjZXJyb3I0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdG9wOiA2MyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgI2Vycm9yNSB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRvcDogNjMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5ncnVwby1pbnB1dHMgLmlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cblxuICAuaW5wdXQge1xuICAgIHdpZHRoOiA3NCU7XG4gIH1cblxuICAuYm90b25fcmVnaXN0cm8ge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmJvdG9uX2luaWNpbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICB9XG5cbiAgLmZvcm11bGFyaW8ge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICAgIGNvbG9yOiAjMDA0Y2JlICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjYmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjYmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIGlucHV0IGNvbG9yIGNsYXNzICovXG4gIDo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY29sb3I6ICMwMDRjYmU7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGNiZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Y2JlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6ICMwMDRjYmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Y2JlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6ICMwMDRjYmUgIWltcG9ydGFudDtcbiAgICAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xyXG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcclxuJGJsYW5jbzogI2ZmZmZmZjtcclxuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXHJcbiRncmlzOiAjY2ZkOGRjO1xyXG4kbmFyYW5qYTogI2Y0YTUwMDtcclxuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXHJcbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xyXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcclxuXHJcblxyXG4vKipDT05URU5FRE9SIFkgRlVFTlRFIENPTcOaTioqL1xyXG4uY29udGVuZWRvcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uY29udGVuZWRvciBwe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyoqTEFURVJBTCBJWlFVSUVSRE8gREUgTEEgUMOBR0lOQSoqL1xyXG4ubGF0ZXJhbC1penF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLmxhdGVyYWwtaXpxIGltZ3tcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbi8qKkxBVEVSQUwgREVSRUNITyBERSBMQSBQw4FHSU5BKiovXHJcbi5sYXRlcmFsLWRyY2h7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRhenVsLXJveWFsLCAkYXp1bC1jbGFybyk7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgXHJcbiAgY29sb3I6IHdoaXRlOyAgICBcclxufVxyXG4ubGF0ZXJhbC1kcmNoIGgxe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNlcnJvcjF7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiAxMDBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG4jZXJyb3Iye1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogODtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuI2Vycm9yM3tcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDEwMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG59XHJcblxyXG4jZXJyb3I0e1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogODtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuXHJcbiNlcnJvcjV7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdG9wOiAxMDBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLmdydXBvLWlucHV0c3tcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ncnVwby1pbnB1dHMgLmlucHV0e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjokYXp1bC1yb3lhbDtcclxufVxyXG4udm9sdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5ib3Rvbl9yZWdpc3Ryb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbi5yZWdpc3Ryb19kYXRvc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcbi5jaGVja2JveHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDoyJTtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMiU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSBcclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBpbnB1dCBjb2xvciBjbGFzcyAqL1xyXG46Om5nLWRlZXAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSAsIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovIFxyXG4gfVxyXG5cclxuXHJcbi8qKlBBUkEgTcOTVklMKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzAwcHgpIHtcclxuXHJcbiAgICAuY29udGVuZWRvcntcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgaGVpZ2h0OiA2MjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxhdGVyYWwtaXpxe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7IFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAubGF0ZXJhbC1penEgaW1ne1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgfVxyXG4gICAgLmxhdGVyYWwtZHJjaHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB9XHJcbiAgICAjZXJyb3Ixe1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB0b3A6IDYzJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgICNlcnJvcjJ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIHRvcDogNjMlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgI2Vycm9yM3tcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgdG9wOiA2MyU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAjZXJyb3I0e1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB0b3A6IDYzJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgICNlcnJvcjV7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIHRvcDogNjMlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ncnVwby1pbnB1dHMgLmlucHV0e1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXR7XHJcbiAgICAgIHdpZHRoOiA3NCU7XHJcbiAgICB9XHJcbiAgICAuYm90b25fcmVnaXN0cm97XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYm90b25faW5pY2lve1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm11bGFyaW97XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgICAgIGNvbG9yOiAkYXp1bC1yb3lhbCAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgIFxyXG4gICAgIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1yb3lhbCAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogaW5wdXQgY29sb3IgY2xhc3MgKi9cclxuICAgIDo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICAgIGNvbG9yOiRhenVsLXJveWFsO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXJveWFsO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlICwgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRhenVsLXJveWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGV7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXJveWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovIFxyXG4gICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-registro',
          templateUrl: './registro.component.html',
          styleUrls: ['./registro.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]
        }];
      }, {
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afAuth, route) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.route = route;
        this.userData = afAuth.authState;
      }

      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(email, password) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4.afAuth.createUserWithEmailAndPassword(email, password).then(function (userData) {
              return resolve(userData);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "loginByEmail",
        value: function loginByEmail(user) {
          var _this5 = this;

          var email = user.email,
              password = user.password;
          this.afAuth.signInWithEmailAndPassword(email, password).then(function (res) {
            console.log('Successfuly', res);

            _this5.route.navigate(['/mis-viajes']);
          })["catch"](function (err) {
            return console.log('Error', err);
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          console.log('Successfuly');
          this.afAuth.signOut();
          localStorage.clear();
          this.route.navigate(['/']);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/firestore/firestore.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/firestore/firestore.service.ts ***!
    \*********************************************************/

  /*! exports provided: FirestoreService */

  /***/
  function srcAppServicesFirestoreFirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirestoreService", function () {
      return FirestoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var FirestoreService =
    /*#__PURE__*/
    function () {
      //private db: AngularFirestore;
      function FirestoreService(firestore, db, storage) {
        _classCallCheck(this, FirestoreService);

        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.afs = this.firestore.collection('Viaje');
        this.sli = this.firestore.collection('Slides');
      }

      _createClass(FirestoreService, [{
        key: "createViaje",
        value: function createViaje(data) {
          //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
          //  return r.id;});   
          data.id = this.firestore.createId();
          data.unidas = "0";
          return this.afs.doc(data.id).set(Object.assign({}, data)).then(function (r) {
            return data.id;
          });
        }
      }, {
        key: "getViaje",
        value: function getViaje(id) {
          return this.afs.doc(id).get().toPromise().then(function (r) {
            var viaje = r.data();
            return viaje;
          });
        }
      }, {
        key: "getViajes",
        value: function getViajes() {
          return this.afs.valueChanges();
        }
      }, {
        key: "updateViaje",
        value: function updateViaje(data) {
          console.log("hola");
          return this.afs.doc(data.id).set(data);
        }
      }, {
        key: "removeViaje",
        value: function removeViaje(id) {
          return this.afs.doc(id)["delete"]();
        } // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.

      }, {
        key: "getViajesSorted",
        value: function getViajesSorted() {
          /*
          PUEDE SER UTIL:
               this.afs.ref.orderBy('nombre').onSnapshot(z=>{
            z.docChanges().filter(f=>f.type==="added").forEach(d=>{
                console.log(d.doc.data());
            });
          });
          
          this.afs.ref.orderBy('nombre').onSnapshot(z=>{
            z.docs.forEach(d=>{
                console.log(d.data());
            });
          });
          */
          return this.firestore.collection('Viaje', function (ref) {
            return ref.orderBy('ciudad');
          }).valueChanges();
        }
      }, {
        key: "getViajesFiltered",
        value: function getViajesFiltered(pais) {
          return this.firestore.collection('Viaje', function (ref) {
            return ref.where('pais', '==', pais);
          }).valueChanges();
        }
      }, {
        key: "getViajesByEmail",
        value: function getViajesByEmail(email) {
          return this.firestore.collection('Viaje', function (ref) {
            return ref.where('email', '==', email);
          }).valueChanges();
        }
      }, {
        key: "getViajesCombined",
        value: function getViajesCombined(pais) {
          return this.firestore.collection('Viaje', function (ref) {
            return ref.where('pais', '==', pais).orderBy("ciudad");
          }).valueChanges();
        } //Tarea para subir archivo

      }, {
        key: "storageFile",
        value: function storageFile(nombreArchivo, datos) {
          return this.storage.upload(nombreArchivo, datos);
        } //Referencia del archivo

      }, {
        key: "getFileRef",
        value: function getFileRef(nombreArchivo) {
          return this.storage.ref(nombreArchivo);
        }
      }, {
        key: "getSlides",
        value: function getSlides(idViaje) {
          return this.firestore.collection('Slides', function (ref) {
            return ref.where('idViaje', '==', idViaje);
          }).valueChanges();
        }
      }]);

      return FirestoreService;
    }();

    FirestoreService.ɵfac = function FirestoreService_Factory(t) {
      return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]));
    };

    FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FirestoreService,
      factory: FirestoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/firestore/opiniones-firestore.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/services/firestore/opiniones-firestore.service.ts ***!
    \*******************************************************************/

  /*! exports provided: OpinionesFirestoreService */

  /***/
  function srcAppServicesFirestoreOpinionesFirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OpinionesFirestoreService", function () {
      return OpinionesFirestoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var OpinionesFirestoreService =
    /*#__PURE__*/
    function () {
      function OpinionesFirestoreService(firestore, db, storage) {
        _classCallCheck(this, OpinionesFirestoreService);

        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.com = this.firestore.collection('Comentario');
        this.pun = this.firestore.collection('Puntuacion');
      }

      _createClass(OpinionesFirestoreService, [{
        key: "createComentario",
        value: function createComentario(data) {
          //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
          //  return r.id;});   
          data.id = this.firestore.createId();
          return this.com.doc(data.id).set(Object.assign({}, data)).then(function (r) {
            return data.id;
          });
        }
      }, {
        key: "createPuntuacion",
        value: function createPuntuacion(data) {
          //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
          //  return r.id;});   
          data.id = this.firestore.createId();
          return this.pun.doc(data.id).set(Object.assign({}, data)).then(function (r) {
            return data.id;
          });
        }
      }, {
        key: "getComentario",
        value: function getComentario(id) {
          return this.com.doc(id).get().toPromise().then(function (r) {
            //Si quisieras forzar que se ejecute constructor de Contacto:
            //return new Contacto(r.data() as IContacto);
            var contacto = r.data();
            console.log(contacto);
            return contacto;
          });
        }
      }, {
        key: "getPuntuacion",
        value: function getPuntuacion(id) {
          return this.pun.doc(id).get().toPromise().then(function (r) {
            //Si quisieras forzar que se ejecute constructor de Contacto:
            //return new Contacto(r.data() as IContacto);
            var contacto = r.data();
            console.log(contacto);
            return contacto;
          });
        }
      }, {
        key: "getComentarios",
        value: function getComentarios() {
          return this.com.valueChanges();
        }
      }, {
        key: "getPuntuaciones",
        value: function getPuntuaciones() {
          return this.pun.valueChanges();
        }
      }, {
        key: "updateComentario",
        value: function updateComentario(data) {
          return this.com.doc(data.id).set(data);
        }
      }, {
        key: "updatePuntuacion",
        value: function updatePuntuacion(data) {
          return this.pun.doc(data.id).set(data);
        }
      }, {
        key: "removeComentario",
        value: function removeComentario(id) {
          return this.com.doc(id)["delete"]();
        }
      }, {
        key: "removePuntuacion",
        value: function removePuntuacion(id) {
          return this.pun.doc(id)["delete"]();
        } // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.

      }, {
        key: "getComentariosSorted",
        value: function getComentariosSorted() {
          /*
          PUEDE SER UTIL:
               this.afs.ref.orderBy('nombre').onSnapshot(z=>{
            z.docChanges().filter(f=>f.type==="added").forEach(d=>{
                console.log(d.doc.data());
            });
          });
          
          this.afs.ref.orderBy('nombre').onSnapshot(z=>{
            z.docs.forEach(d=>{
                console.log(d.data());
            });
          });
          */
          return this.firestore.collection('Comentario', function (ref) {
            return ref.orderBy('comentador');
          }).valueChanges();
        }
      }, {
        key: "getPuntuacionesSorted",
        value: function getPuntuacionesSorted() {
          /*
          PUEDE SER UTIL:
               this.afs.ref.orderBy('nombre').onSnapshot(z=>{
            z.docChanges().filter(f=>f.type==="added").forEach(d=>{
                console.log(d.doc.data());
            });
          });
          
          this.afs.ref.orderBy('nombre').onSnapshot(z=>{
            z.docs.forEach(d=>{
                console.log(d.data());
            });
          });
          */
          return this.firestore.collection('Puntuacion', function (ref) {
            return ref.orderBy('puntuado');
          }).valueChanges();
        }
      }, {
        key: "getComentariosFiltered",
        value: function getComentariosFiltered(comentado) {
          return this.firestore.collection('Comentario', function (ref) {
            return ref.where('comentado', '==', comentado);
          }).valueChanges();
        }
      }, {
        key: "getPuntuacionesFiltered",
        value: function getPuntuacionesFiltered(puntuado) {
          return this.firestore.collection('Puntuacion', function (ref) {
            return ref.where('puntuado', '==', puntuado);
          }).valueChanges();
        }
      }, {
        key: "getComentariosCombined",
        value: function getComentariosCombined(comentado) {
          return this.firestore.collection('Comentario', function (ref) {
            return ref.where('comentado', '==', comentado).orderBy("comentador");
          }).valueChanges();
        }
      }, {
        key: "getPuntuacionesCombined",
        value: function getPuntuacionesCombined(puntuado) {
          return this.firestore.collection('Puntuacion', function (ref) {
            return ref.where('puntuado', '==', puntuado).orderBy("puntuador");
          }).valueChanges();
        } //Tarea para subir archivo

      }, {
        key: "storageFile",
        value: function storageFile(nombreArchivo, datos) {
          return this.storage.upload(nombreArchivo, datos);
        } //Referencia del archivo

      }, {
        key: "getFileRef",
        value: function getFileRef(nombreArchivo) {
          return this.storage.ref(nombreArchivo);
        }
      }]);

      return OpinionesFirestoreService;
    }();

    OpinionesFirestoreService.ɵfac = function OpinionesFirestoreService_Factory(t) {
      return new (t || OpinionesFirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]));
    };

    OpinionesFirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OpinionesFirestoreService,
      factory: OpinionesFirestoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpinionesFirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/firestore/solicitud-firestore.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/services/firestore/solicitud-firestore.service.ts ***!
    \*******************************************************************/

  /*! exports provided: SolicitudFirestoreService */

  /***/
  function srcAppServicesFirestoreSolicitudFirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudFirestoreService", function () {
      return SolicitudFirestoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var SolicitudFirestoreService =
    /*#__PURE__*/
    function () {
      function SolicitudFirestoreService(firestore, db, storage) {
        _classCallCheck(this, SolicitudFirestoreService);

        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.afs = this.firestore.collection('Solicitud');
      }

      _createClass(SolicitudFirestoreService, [{
        key: "getSolicitud",
        value: function getSolicitud(id) {
          return this.afs.doc(id).get().toPromise().then(function (r) {
            var solicitud = r.data();
            return solicitud;
          });
        }
      }, {
        key: "getSolicitudesByUserId",
        value: function getSolicitudesByUserId(id) {
          return this.firestore.collection('Solicitud', function (ref) {
            return ref.where('idUsuario', '==', id);
          }).valueChanges();
        }
      }, {
        key: "getSolicitudesByTripId",
        value: function getSolicitudesByTripId(id) {
          return this.firestore.collection('Solicitud', function (ref) {
            return ref.where('idViaje', '==', id);
          }).valueChanges();
        }
      }, {
        key: "getSolicitudesByOrganizadorId",
        value: function getSolicitudesByOrganizadorId(id) {
          return this.firestore.collection('Solicitud', function (ref) {
            return ref.where('idOrganizador', '==', id);
          }).valueChanges();
        }
      }, {
        key: "getSolicitudesByOrganizadorEmail",
        value: function getSolicitudesByOrganizadorEmail(email) {
          return this.firestore.collection('Solicitud', function (ref) {
            return ref.where('idOrganizador', '==', email);
          }).valueChanges();
        }
      }, {
        key: "createSolicitud",
        value: function createSolicitud(data) {
          //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
          //  return r.id;});   
          data.id = this.firestore.createId();
          localStorage.setItem('solicitud', data.id);
          return this.afs.doc(data.id).set(Object.assign({}, data)).then(function (r) {
            return data.id;
          });
        }
      }, {
        key: "updateSolicitud",
        value: function updateSolicitud(data) {
          return this.afs.doc(data.id).set(data);
        }
      }]);

      return SolicitudFirestoreService;
    }();

    SolicitudFirestoreService.ɵfac = function SolicitudFirestoreService_Factory(t) {
      return new (t || SolicitudFirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]));
    };

    SolicitudFirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SolicitudFirestoreService,
      factory: SolicitudFirestoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolicitudFirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/firestore/usuario-firestore.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/firestore/usuario-firestore.service.ts ***!
    \*****************************************************************/

  /*! exports provided: UsuarioFirestoreService */

  /***/
  function srcAppServicesFirestoreUsuarioFirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioFirestoreService", function () {
      return UsuarioFirestoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var UsuarioFirestoreService =
    /*#__PURE__*/
    function () {
      function UsuarioFirestoreService(firestore, db, storage) {
        _classCallCheck(this, UsuarioFirestoreService);

        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.afs = this.firestore.collection('Usuario');
      }

      _createClass(UsuarioFirestoreService, [{
        key: "createUsuario",
        value: function createUsuario(data) {
          //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
          //  return r.id;});   
          data.id = this.firestore.createId();
          data.estrellas = "-1";
          localStorage.setItem('usuario', data.id);
          return this.afs.doc(data.id).set(Object.assign({}, data)).then(function (r) {
            return data.id;
          });
        }
      }, {
        key: "createUsuarioConID",
        value: function createUsuarioConID(data) {
          return this.afs.doc(data.id).set(Object.assign({}, data)).then(function (r) {
            return data.id;
          });
        }
      }, {
        key: "getUsuario",
        value: function getUsuario(id) {
          return this.afs.doc(id).get().toPromise().then(function (r) {
            //Si quisieras forzar que se ejecute constructor de Contacto:
            //return new Contacto(r.data() as IContacto);
            var contacto = r.data();
            return contacto;
          });
        }
      }, {
        key: "getUsuarios",
        value: function getUsuarios() {
          return this.afs.valueChanges();
        }
      }, {
        key: "updateUsuario",
        value: function updateUsuario(data) {
          return this.afs.doc(data.id).set(data);
        }
      }, {
        key: "removeUsuario",
        value: function removeUsuario(id) {
          return this.afs.doc(id)["delete"]();
        } // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.

      }, {
        key: "getUsuariosSorted",
        value: function getUsuariosSorted() {
          /*
          PUEDE SER UTIL:
               this.afs.ref.orderBy('nombre').onSnapshot(z=>{
            z.docChanges().filter(f=>f.type==="added").forEach(d=>{
                console.log(d.doc.data());
            });
          });
          
          this.afs.ref.orderBy('nombre').onSnapshot(z=>{
            z.docs.forEach(d=>{
                console.log(d.data());
            });
          });
          */
          return this.firestore.collection('Usuario', function (ref) {
            return ref.orderBy('puntuacion');
          }).valueChanges();
        }
      }, {
        key: "getUsuariosFiltered",
        value: function getUsuariosFiltered(id) {
          return this.firestore.collection('Usuario', function (ref) {
            return ref.where('id', '==', id);
          }).valueChanges();
        }
      }, {
        key: "getUsuariosByEmail",
        value: function getUsuariosByEmail(email) {
          return this.firestore.collection('Usuario', function (ref) {
            return ref.where('email', '==', email);
          }).valueChanges();
        }
      }, {
        key: "getusuariosCombined",
        value: function getusuariosCombined(pais) {
          return this.firestore.collection('Usuario', function (ref) {
            return ref.where('pais', '==', pais).orderBy("ciudad");
          }).valueChanges();
        } //Tarea para subir archivo

      }, {
        key: "storageFile",
        value: function storageFile(nombreArchivo, datos) {
          return this.storage.upload(nombreArchivo, datos);
        } //Referencia del archivo

      }, {
        key: "getFileRef",
        value: function getFileRef(nombreArchivo) {
          return this.storage.ref(nombreArchivo);
        }
      }]);

      return UsuarioFirestoreService;
    }();

    UsuarioFirestoreService.ɵfac = function UsuarioFirestoreService_Factory(t) {
      return new (t || UsuarioFirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]));
    };

    UsuarioFirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsuarioFirestoreService,
      factory: UsuarioFirestoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioFirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/boton/boton.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/boton/boton.component.ts ***!
    \*************************************************/

  /*! exports provided: BotonComponent */

  /***/
  function srcAppSharedBotonBotonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotonComponent", function () {
      return BotonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var BotonComponent =
    /*#__PURE__*/
    function () {
      function BotonComponent() {
        _classCallCheck(this, BotonComponent);

        this.texto = "tu texto";
      }

      _createClass(BotonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BotonComponent;
    }();

    BotonComponent.ɵfac = function BotonComponent_Factory(t) {
      return new (t || BotonComponent)();
    };

    BotonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BotonComponent,
      selectors: [["app-boton"]],
      inputs: {
        texto: "texto"
      },
      decls: 2,
      vars: 1,
      consts: [["mat-raised-button", "", "color", "primary", 2, "height", "3em", "width", "15em"]],
      template: function BotonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.texto);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: ["button[_ngcontent-%COMP%] {\n  background-color: #009788;\n  color: #ffffff;\n  vertical-align: center;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 2px 0px #cfd8dc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC9ib3Rvbi9ib3Rvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2JvdG9uL2JvdG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFPekI7RUFDSSx5QkFKVztFQUtYLGNBZEs7RUFlTCxzQkFBQTtBQ1ZKO0FEWUE7RUFHSSxtQ0FBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2JvdG9uL2JvdG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcclxuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcclxuXHJcblxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC12ZXJkb3NvO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbn0iLCIvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTc4ODtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4ICNjZmQ4ZGM7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4ICNjZmQ4ZGM7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCAjY2ZkOGRjO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-boton',
          templateUrl: './boton.component.html',
          styleUrls: ['./boton.component.scss']
        }]
      }], function () {
        return [];
      }, {
        texto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/comentario-pu/comentario-pu.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/comentario-pu/comentario-pu.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ComentarioPuComponent */

  /***/
  function srcAppSharedComentarioPuComentarioPuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComentarioPuComponent", function () {
      return ComentarioPuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _boton_boton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../boton/boton.component */
    "./src/app/shared/boton/boton.component.ts");

    var ComentarioPuComponent =
    /*#__PURE__*/
    function () {
      function ComentarioPuComponent() {
        _classCallCheck(this, ComentarioPuComponent);

        this.comentario = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.miComentario = "";
      }

      _createClass(ComentarioPuComponent, [{
        key: "getComentario",
        value: function getComentario() {
          var cerrado = true; //tenemos que cerrar porque hemos aceptado

          this.comentario.emit(this.miComentario);
          this.cerrado.emit(cerrado); //como aceptamos, cerramos
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          var cerrado = true; //devolvemos un true para cerrar el popup

          this.miComentario = ""; //no se ha comentado, se devuelve un vacío para que no se haga el comentario

          this.cerrado.emit(cerrado);
          this.comentario.emit(this.miComentario);
          return cerrado;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComentarioPuComponent;
    }();

    ComentarioPuComponent.ɵfac = function ComentarioPuComponent_Factory(t) {
      return new (t || ComentarioPuComponent)();
    };

    ComentarioPuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComentarioPuComponent,
      selectors: [["app-comentario-pu"]],
      outputs: {
        comentario: "comentario",
        cerrado: "cerrado"
      },
      decls: 11,
      vars: 1,
      consts: [["id", "all", 1, "outsider"], [1, "content"], [1, "cerrar"], ["src", "./assets/cerrar.png", "id", "close", 3, "click"], [1, "formulario"], ["name", "message", 3, "ngModel", "ngModelChange"], [1, "bloque-aceptar"], ["id", "aceptar", "texto", "Aceptar", 3, "click"]],
      template: function ComentarioPuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComentarioPuComponent_Template_img_click_3_listener() {
            return ctx.cerrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Haz un comentario sobre este usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComentarioPuComponent_Template_textarea_ngModelChange_8_listener($event) {
            return ctx.miComentario = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-boton", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComentarioPuComponent_Template_app_boton_click_10_listener() {
            return ctx.getComentario();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.miComentario);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _boton_boton_component__WEBPACK_IMPORTED_MODULE_2__["BotonComponent"]],
      styles: [".cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n  position: absolute;\n  margin-left: 25%;\n  z-index: 100;\n  background-color: #ffffff;\n  width: 50%;\n  height: 50%;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.bloque-aceptar[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n}\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n@media screen and (max-device-width: 480px) {\n  .outsider[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC9jb21lbnRhcmlvLXB1L2NvbWVudGFyaW8tcHUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21lbnRhcmlvLXB1L2NvbWVudGFyaW8tcHUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLG1CQUFBO0FDVEo7QURXQTtFQUNJLGVBQUE7QUNSSjtBRFlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEo7QURhQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0lBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQXJDSztFQXNDTCxVQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEZUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0E7Ozs7SUFBQTtFQU9BLCtDQUFBO0FDWko7QURpQkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNkSjtBRGlCQTtFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZEg7QURpQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ2RKO0FEaUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNkSjtBRG1CQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNoQko7QURtQkE7RUFFSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBR0Esa0JBQUE7SUFDQSxlQUFBO0VDbkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tZW50YXJpby1wdS9jb21lbnRhcmlvLXB1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcclxuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcclxuXHJcbi5jZXJyYXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5jZXJyYXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIFxyXG59XHJcblxyXG4uY2VycmFyIGltZ3tcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBcclxufVxyXG5cclxuLm91dHNpZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAvL2JhY2tncm91bmQ6ICRhenVsLXZlcmRvc287XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLyoqXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgKiovXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcblxyXG5cclxuXHJcbi5ibG9xdWUtYWNlcHRhcntcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlve1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgXHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIFxyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5ib3RvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG5cclxuICAgIC5vdXRzaWRlcntcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jZXJyYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2VycmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VycmFyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm91dHNpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvKipcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICoqL1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmJsb3F1ZS1hY2VwdGFyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib3RvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC5vdXRzaWRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComentarioPuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comentario-pu',
          templateUrl: './comentario-pu.component.html',
          styleUrls: ['./comentario-pu.component.scss']
        }]
      }], function () {
        return [];
      }, {
        comentario: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cerrado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/edicion-pu/edicion-pu.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/edicion-pu/edicion-pu.component.ts ***!
    \***********************************************************/

  /*! exports provided: EdicionPuComponent */

  /***/
  function srcAppSharedEdicionPuEdicionPuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EdicionPuComponent", function () {
      return EdicionPuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pedir-imagen/pedir-imagen.component */
    "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _boton_boton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../boton/boton.component */
    "./src/app/shared/boton/boton.component.ts");

    var EdicionPuComponent =
    /*#__PURE__*/
    function () {
      function EdicionPuComponent(firestoreServiceUser) {
        _classCallCheck(this, EdicionPuComponent);

        this.firestoreServiceUser = firestoreServiceUser;
        this.newDescripcion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.foto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.miFoto = "";
      }

      _createClass(EdicionPuComponent, [{
        key: "setImagen",
        value: function setImagen(e) {
          this.miFoto = e;
        }
      }, {
        key: "chooseImagen",
        value: function chooseImagen() {
          document.getElementById("pedir-imagen").style.display = "block";
          document.getElementById("allContent").style.display = "none";
        }
      }, {
        key: "save",
        value: function save() {
          var cerrado = true; //tenemos que cerrar porque hemos aceptado

          this.newDescripcion.emit(this.descripcion);
          this.cerrado.emit(cerrado); //como aceptamos, cerramos

          this.foto.emit(this.miFoto);
          this.signal.emit(this.user);
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          var cerrado = true; //devolvemos un true para cerrar el popup

          this.descripcion = ""; //no se ha comentado, se devuelve un vacío para que no se haga el comentario

          this.miFoto = "";
          this.cerrado.emit(cerrado);
          this.newDescripcion.emit(this.descripcion);
          this.foto.emit(this.miFoto);
          this.signal.emit(this.user);
          return cerrado;
        }
      }, {
        key: "cerrarPopup",
        value: function cerrarPopup(e, id) {
          if (e == true) {
            document.getElementById(id).style.display = "none";
            document.getElementById("allContent").style.display = "block";
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EdicionPuComponent;
    }();

    EdicionPuComponent.ɵfac = function EdicionPuComponent_Factory(t) {
      return new (t || EdicionPuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioFirestoreService"]));
    };

    EdicionPuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EdicionPuComponent,
      selectors: [["app-edicion-pu"]],
      inputs: {
        descripcion: "descripcion",
        user: "user"
      },
      outputs: {
        newDescripcion: "newDescripcion",
        foto: "foto",
        cerrado: "cerrado",
        signal: "signal"
      },
      decls: 21,
      vars: 1,
      consts: [["id", "all", 1, "outsider"], [1, "content"], ["id", "pedir-imagen", "directiva", "users", 3, "cerrar", "url"], ["id", "allContent"], [1, "cerrar"], ["src", "./assets/cerrar.png", "id", "close", 3, "click"], [1, "elementos"], [1, "form"], ["name", "message", 3, "ngModel", "ngModelChange"], ["src", "./assets/camera.png", "id", "normal", "texto", "cambiar imagen de perfil", 3, "click"], ["id", "movil"], [1, "boton-img"], ["id", "foto"], ["src", "./assets/camera.png", 3, "click"], [1, "bloque-aceptar"], ["id", "aceptar", "texto", "Save", 3, "click"]],
      template: function EdicionPuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-pedir-imagen", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrar", function EdicionPuComponent_Template_app_pedir_imagen_cerrar_2_listener($event) {
            return ctx.cerrarPopup($event, "pedir-imagen");
          })("url", function EdicionPuComponent_Template_app_pedir_imagen_url_2_listener($event) {
            return ctx.setImagen($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionPuComponent_Template_img_click_5_listener() {
            return ctx.cerrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EdicionPuComponent_Template_textarea_ngModelChange_10_listener($event) {
            return ctx.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "                       \n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionPuComponent_Template_img_click_12_listener() {
            return ctx.chooseImagen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cambiar foto de perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionPuComponent_Template_img_click_17_listener() {
            return ctx.chooseImagen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Examinar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-boton", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionPuComponent_Template_app_boton_click_20_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.descripcion);
        }
      },
      directives: [_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_2__["PedirImagenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _boton_boton_component__WEBPACK_IMPORTED_MODULE_4__["BotonComponent"]],
      styles: ["img[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 100px;\n}\n.cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n  position: absolute;\n  margin-left: 25%;\n  z-index: 100;\n  background-color: #ffffff;\n  width: 50%;\n  height: 50%;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.bloque-aceptar[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#allContent[_ngcontent-%COMP%] {\n  height: 70%;\n}\n.elementos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n}\n#normal[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n#pedir-imagen[_ngcontent-%COMP%] {\n  display: none;\n}\n.form[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px 20px;\n  height: 100%;\n  width: 70%;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n#normal[_ngcontent-%COMP%] {\n  display: block;\n}\n#movil[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-device-width: 480px) {\n  #normal[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #movil[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .outsider[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin-left: 0%;\n  }\n\n  .cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n\n  .elementos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    margin-top: 0px;\n    padding: 0px 0px 0px 0px;\n  }\n\n  .elementos[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-top: 50px;\n  }\n\n  .form[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 50%;\n  }\n\n  .boton-img[_ngcontent-%COMP%] {\n    padding: 20px 20px 20px 20px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    text-decoration: underline;\n  }\n\n  #foto[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC9lZGljaW9uLXB1L2VkaWNpb24tcHUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9lZGljaW9uLXB1L2VkaWNpb24tcHUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlBO0VBQ0ksbUJBQUE7QUNUSjtBRFdBO0VBQ0ksZUFBQTtBQ1JKO0FEWUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNUSjtBRGFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3SUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBMUNLO0VBMkNMLFVBQUE7RUFDQSxXQUFBO0FDWEo7QURlQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQTs7OztJQUFBO0VBT0EsK0NBQUE7QUNaSjtBRGlCQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2RKO0FEaUJBO0VBQ0ksV0FBQTtBQ2RKO0FEa0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDZko7QURrQkE7RUFDSSxpQkFBQTtBQ2ZKO0FEaUJBO0VBQ0ksYUFBQTtBQ2RKO0FEaUJBO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ2RKO0FEb0JBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNqQko7QURzQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDbkJKO0FEc0JBO0VBQ0ksY0FBQTtBQ25CSjtBRHFCQTtFQUNJLGFBQUE7QUNsQko7QURzQkE7RUFFSTtJQUNJLGFBQUE7RUNwQk47O0VEc0JFO0lBQ0ksY0FBQTtFQ25CTjs7RURxQkU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUdBLGtCQUFBO0lBQ0EsZUFBQTtFQ3BCTjs7RUR3QkU7SUFDSSxtQkFBQTtFQ3JCTjs7RUR3QkU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtFQ3JCTjs7RUR5QkU7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUVBLGdCQUFBO0VDdkJOOztFRDBCRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0VDdkJOOztFRDBCRTtJQUNHLDRCQUFBO0VDdkJMOztFRDRCRTtJQUNJLDBCQUFBO0VDekJOOztFRGdDRTtJQUNJLGtCQUFBO0VDN0JOOztFRGdDRTtJQUNJLFlBQUE7RUM3Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lZGljaW9uLXB1L2VkaWNpb24tcHUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcbiRsZXR0ZXJzOiAjMDNhOWY0O1xyXG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xyXG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xyXG5cclxuaW1ne1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY2VycmFye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uY2VycmFyOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBcclxufVxyXG5cclxuLmNlcnJhciBpbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgXHJcbn1cclxuXHJcbi5vdXRzaWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAkYXp1bC12ZXJkb3NvO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC8qKlxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgICoqL1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG5cclxuXHJcblxyXG4uYmxvcXVlLWFjZXB0YXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYWxsQ29udGVudHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5lbGVtZW50b3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBcclxufVxyXG4jbm9ybWFse1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuI3BlZGlyLWltYWdlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3Jte1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxudGV4dGFyZWF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4uYm90b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNub3JtYWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jbW92aWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG5cclxuICAgICNub3JtYWx7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNtb3ZpbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5vdXRzaWRlcntcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY2VycmFyIGltZ3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbGVtZW50b3MgaW1ne1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZWxlbWVudG9ze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3Jte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3Rvbi1pbWd7XHJcbiAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBcclxuICAgICNmb3Rve1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0YXJlYXtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsIi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG5pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmNlcnJhciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jZXJyYXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZXJyYXIgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ub3V0c2lkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIC8qKlxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgKiovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uYmxvcXVlLWFjZXB0YXIge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYWxsQ29udGVudCB7XG4gIGhlaWdodDogNzAlO1xufVxuXG4uZWxlbWVudG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzAlO1xufVxuXG4jbm9ybWFsIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbiNwZWRpci1pbWFnZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwJTtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNub3JtYWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI21vdmlsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gICNub3JtYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbW92aWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm91dHNpZGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuXG4gIC5jZXJyYXIgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLmVsZW1lbnRvcyBpbWcge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG5cbiAgLmVsZW1lbnRvcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuXG4gIC5ib3Rvbi1pbWcge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gIH1cblxuICBoMiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAjZm90byB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgdGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EdicionPuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edicion-pu',
          templateUrl: './edicion-pu.component.html',
          styleUrls: ['./edicion-pu.component.scss']
        }]
      }], function () {
        return [{
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioFirestoreService"]
        }];
      }, {
        descripcion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        newDescripcion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        foto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cerrado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        signal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/privacidad"];
    };

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 2,
      consts: [[1, "main"], [2, "cursor", "pointer", 3, "routerLink"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Politica de privacidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA9 2020, Tripmefy SL. Todos los derechos reservados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".main[_ngcontent-%COMP%] {\n  height: 78px;\n  width: 100%;\n  background-color: #413D33;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 14px;\n  font-size: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIscUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBTXpCO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDVEQiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xyXG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcclxuJGJsYW5jbzogI2ZmZmZmZjtcclxuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXHJcbiRncmlzOiAjY2ZkOGRjO1xyXG4kbmFyYW5qYTogI2Y0YTUwMDtcclxuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXHJcbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xyXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcclxuJGxldHRlcnM6ICMwM2E5ZjQ7XHJcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XHJcbiRhenVsLXZlcmRvc286ICMwMDk3ODg7XHJcblxyXG4ubWFpbntcclxuXHRoZWlnaHQ6IDc4cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzQxM0QzMztcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nLXRvcDogMTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuXHRmb250LXNpemU6IDgwJTtcclxuXHJcbn0iLCIvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLm1haW4ge1xuICBoZWlnaHQ6IDc4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEzRDMzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBmb250LXNpemU6IDgwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../interfaces/solicitud */
    "./src/app/interfaces/solicitud.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/firestore/solicitud-firestore.service */
    "./src/app/services/firestore/solicitud-firestore.service.ts");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HeaderComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_p_2_Template_p_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.onNotification();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "question_answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r93.numberOfMensajes);
      }
    }

    function HeaderComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_p_3_Template_p_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r101.onNotification();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "question_answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r94.numberOfSolicitudes);
      }
    }

    function HeaderComponent_p_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_p_7_Template_p_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.onNotification();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "question_answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r95.numberOfMensajes);
      }
    }

    function HeaderComponent_p_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_p_8_Template_p_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.onNotification();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "question_answer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r96.numberOfSolicitudes);
      }
    }

    function HeaderComponent_div_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_27_div_1_Template_mat_icon_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

          var solicitud_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r109.accept(solicitud_r107.idSolicitud);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "done_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_27_div_1_Template_mat_icon_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

          var solicitud_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r112.aCasa(solicitud_r107.idSolicitud);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "highlight_off");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var solicitud_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", solicitud_r107.nombre, " ");
      }
    }

    function HeaderComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_27_div_1_Template, 11, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var solicitud_r107 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", solicitud_r107.idSolicitud != "--");
      }
    }

    function HeaderComponent_div_37_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mensaje_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Viaje a ", mensaje_r115.nombreViaje, " aceptado");
      }
    }

    function HeaderComponent_div_37_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mensaje_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lo sentimos, su solicitud para ", mensaje_r115.nombreViaje, " ha sido denegada :(");
      }
    }

    function HeaderComponent_div_37_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_37_div_1_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var mensaje_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r123.pagar(mensaje_r115.idViaje);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pagar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_div_37_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ya has pagado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_37_div_1_div_1_Template, 3, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_37_div_1_div_2_Template, 3, 1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_37_div_1_div_3_Template, 3, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_37_div_1_div_4_Template, 3, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mensaje_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mensaje_r115.estado == "aceptado" || mensaje_r115.estado == "pagado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mensaje_r115.estado == "rechazado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mensaje_r115.estado == "aceptado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mensaje_r115.estado == "pagado");
      }
    }

    function HeaderComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_37_div_1_Template, 6, 4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mensaje_r115 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mensaje_r115.idViaje != "--");
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authSvc, firestoreServiceSolicitud, firestoreServiceUser, firestoreServiceViaje, _route, route, dialog) {
        _classCallCheck(this, HeaderComponent);

        this.authSvc = authSvc;
        this.firestoreServiceSolicitud = firestoreServiceSolicitud;
        this.firestoreServiceUser = firestoreServiceUser;
        this.firestoreServiceViaje = firestoreServiceViaje;
        this._route = _route;
        this.route = route;
        this.dialog = dialog;
        this.menuOpen = false; //indica si el menu esta abierto. (Solo util en vista movil)

        this.solicitudes = [];
        this.numberOfSolicitudes = 0;
        this.mensajes = [];
        this.numberOfMensajes = 0; //Esta variable escogera el numero a mostrar (solicitudes o mensajes)->Ir a OnInit

        this.isViajero = false;
        this.titulo = "";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          /* IMPORTANTE-> El ngOnInit se vuelve a ejecutar con cada modificación de la bbdd en firebase */

          /*  Este pedazo de código obtiene el nombre de los nombres de las ciudades de cada una
          de las solicitudes realizadas por el usuario  */

          /*----------------- CASO VIAJERO--------------------- */
          if (localStorage.getItem('tipo') == 'viajero') {
            this.numberOfSolicitudes = 0;
            this.isViajero = true;
            this.firestoreServiceSolicitud.getSolicitudesByUserId(localStorage.getItem('usuario')).subscribe(function (res) {
              var i;

              for (i = 0; i < res.length; i++) {
                if (res[i].estado != "pendiente") {
                  console.log("inicializado:onInit (getSolicitud): ", res[i].id);
                  var añadir = true;
                  var kk;

                  for (kk = 0; kk < _this6.mensajes.length; kk++) {
                    if (res[i].id == _this6.mensajes[kk].idSolicitud) {
                      añadir = false;
                    }
                  }

                  if (añadir == true) {
                    _this6.numberOfMensajes = _this6.numberOfMensajes + 1;

                    _this6.mensajes.push({
                      idSolicitud: res[i].id,
                      idViaje: res[i].idViaje,
                      estado: res[i].estado,
                      nombreViaje: "--"
                    });
                  }

                  _this6.firestoreServiceViaje.getViaje(res[i].idViaje).then(function (elem) {
                    var j;

                    for (j = 0; j < _this6.mensajes.length; j++) {
                      if (_this6.mensajes[j].idViaje == elem.id && _this6.mensajes[j].nombreViaje == "--") {
                        console.log("inicializado:onInit (getViaje): ", elem.ciudad);
                        _this6.mensajes[j].nombreViaje = elem.ciudad;
                      }
                    }
                  });
                }
              }
            });
          }
          /*  Este pedazo de código obtiene el nombre del usuario cuyo organizador que está navegando
              en esta página ha organizado algún viaje, de manera que posteriormente podamos imprimir
              las solicitudes que deben ser aceptadas en un viaje por el organizador */

          /*----------------- CASO ORGANIZADOR--------------------- */


          this.firestoreServiceUser.getUsuario(localStorage.getItem('usuario')).then(function (elem) {
            var organizadorEmail = elem.email;

            _this6.firestoreServiceSolicitud.getSolicitudesByOrganizadorEmail(organizadorEmail).subscribe(function (res) {
              var i;

              for (i = 0; i < res.length; i++) {
                if (res[i].estado == "pendiente") {
                  console.log("inicializado:onInit (getSolicitud): ", res[i].id);
                  var añadir = true;
                  var kk;

                  for (kk = 0; kk < _this6.solicitudes.length; kk++) {
                    if (res[i].id == _this6.solicitudes[kk].idSolicitud) {
                      añadir = false;
                    }
                  }

                  if (añadir == true) {
                    _this6.numberOfSolicitudes = _this6.numberOfSolicitudes + 1;

                    _this6.solicitudes.push({
                      nombre: "--",
                      idSolicitud: res[i].id,
                      idViajero: res[i].idUsuario
                    });
                  } //Nos quedamos con el nombre y el id del usuario de nuestras solicitudes:


                  _this6.firestoreServiceUser.getUsuario(res[i].idUsuario).then(function (elem) {
                    var j;

                    for (j = 0; j < _this6.solicitudes.length; j++) {
                      if (_this6.solicitudes[j].idViajero == elem.id && _this6.solicitudes[j].nombre == "--") {
                        _this6.solicitudes[j].nombre = elem.nombre;
                        console.log("inicializado:onInit (getUser): ", elem.nombre);
                      }
                    }
                  });
                }
              }
            });
          });
        }
        /* Redirigir a la página de perfil pulsando sobre perfil */

      }, {
        key: "irPerfil",
        value: function irPerfil() {
          //  Obtenemos la parte de la izquierda de la url
          var origin = window.location.origin + '/';
          var primero;
          /**
          if(localStorage.getItem('tipo') == 'organizador'){
            primero = 'perfil-organizador/';
          }else{
            primero = 'perfil-viajero/';
          }
          
          var segundo = localStorage.getItem('usuario');
          var destino = origin + primero + segundo;
          window.location.assign(destino);
          **/

          var perfil = localStorage.getItem('usuario');

          if (localStorage.getItem('tipo') == 'organizador') {
            var ruta = '/perfil-organizador/' + perfil;
            this.route.navigate([ruta]);
          } else {
            var ruta = '/perfil-viajero/' + perfil;
            this.route.navigate([ruta]);
          }
        }
        /* Redirigir a la página de privacidad pulsando sobre about us*/

      }, {
        key: "irAboutUs",
        value: function irAboutUs() {
          //  Obtenemos la parte de la izquierda de la url
          this.route.navigate(['/privacidad']);
        }
      }, {
        key: "toInicio",
        value: function toInicio() {
          this.route.navigate(['/mis-viajes']);
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authSvc.logOut();
        }
        /* Esta función rellena los arrays de solicitudes o de mensajes dependiendo de
           si el usuario es organizador o viajero, de tal forma que sea posible mostrale
           notificaciones significativas.
              IMPORTANTE!! SE USA SOLO CUANDO QUEREMOS OBTENER INFORMACIÓN DE LAS SOLICITUDES DE LA
           BASE DE DATOS COMO EL ESTADO DE LA SOLICITUD O LOS IDS. La informacion relativa a estos
           ids la captamos anteriormente en el OnInit */

      }, {
        key: "onNotification",
        value: function onNotification() {
          /*----------------- CASO ORGANIZADOR--------------------- */
          if (localStorage.getItem('tipo') == 'organizador') {
            document.getElementById("myForm").style.display = "block";
            /*----------------- CASO VIAJERO--------------------- */
          } else if (localStorage.getItem('tipo') == 'viajero') {
            document.getElementById("myFormViajero").style.display = "block";
          } //console.log(this.mensajes[0].idViaje);

        }
        /* Esta pareja de funciones se encarga de limpiar los arrays para que no se acumulen los resultados
          y de cerrar los popups asociados. */

      }, {
        key: "close",
        value: function close() {
          document.getElementById("myForm").style.display = "none";
        }
      }, {
        key: "close1",
        value: function close1() {
          document.getElementById("myFormViajero").style.display = "none";
        }
      }, {
        key: "showMenuMovil",
        value: function showMenuMovil() {
          if (this.menuOpen == false) {
            document.getElementById("myFormMenu").style.display = "block";
            this.menuOpen = true;
          } else if (this.menuOpen == true) {
            document.getElementById("myFormMenu").style.display = "none";
            this.menuOpen = false;
          } else {
            console.log("error->Menu movil");
          }
        }
        /* Función que acepta a alguien en un viaje desde la vista del organizador*/

      }, {
        key: "accept",
        value: function accept(id) {
          var _this7 = this;

          console.log("Has aceptado"); //Borramos de la lista de solicitudes del organizador

          var i;

          for (i = 0; i < this.solicitudes.length; i++) {
            if (this.solicitudes[i].idSolicitud == id) {
              this.solicitudes.splice(i, 1);
              /*Ponemos a 0 debido a que todos los valores del array
              son inicializados de nuevo en el OnInit, por tanto el número a mostrar
              estara siempre actualizado */

              this.numberOfSolicitudes = 0;
            }
          } //Actualizamos la solicitud en la base de datos


          var new_solicitud = new _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_1__["Solicitud"]();
          this.firestoreServiceSolicitud.getSolicitud(id).then(function (elem) {
            new_solicitud = elem;
            new_solicitud.estado = "aceptado";

            _this7.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
          });
        }
        /* Función que rechaza a alguien en un viaje desde la vista del organizador,
           el viajero se queda en casa. */

      }, {
        key: "aCasa",
        value: function aCasa(id) {
          var _this8 = this;

          console.log("Has rechazado"); //Borramos de la lista de solicitudes del organizador

          var i;

          for (i = 0; i < this.solicitudes.length; i++) {
            if (this.solicitudes[i].idSolicitud == id) {
              this.solicitudes.splice(i, 1);
              /*Ponemos a 0 debido a que todos los valores del array
              son inicializados de nuevo en el OnInit, por tanto el número a mostrar
              estara siempre actualizado */

              this.numberOfSolicitudes = 0;
            }
          } //Actualizamos la solicitud en la base de datos


          var new_solicitud = new _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_1__["Solicitud"]();
          this.firestoreServiceSolicitud.getSolicitud(id).then(function (elem) {
            new_solicitud = elem;
            new_solicitud.estado = "rechazado";

            _this8.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
          });
        }
        /*  Función que une actualiza en la solicitud de la persona el estado de aceptado a pagado
           Se activa al pinchar sobre el botón de pagar */

      }, {
        key: "pagar",
        value: function pagar(id) {
          var _this9 = this;

          var i;

          for (i = 0; i < this.mensajes.length; i++) {
            if (this.mensajes[i].idViaje == id) {
              // SI QUEREMOS QUE SE ELIMINE EL MENSAJE NADA MAS DARLE AL BOTON DE PAGAR DESCOMENTAR ESTO
              //this.mensajes.splice(i, 1);  
              //this.numberOfMensajes = 0;
              this.mensajes[i].estado = "pagado";
            }
          }

          this.firestoreServiceSolicitud.getSolicitudesByTripId(id).subscribe(function (res) {
            var i;
            var new_solicitud = new _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_1__["Solicitud"]();

            for (i = 0; i < res.length; i++) {
              if (res[i].idUsuario == localStorage.getItem('usuario')) {
                new_solicitud = res[i];
                new_solicitud.estado = "pagado";
                console.log("Paso a pagar");

                _this9.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
              }
            }
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_3__["SolicitudFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        titulo: "titulo"
      },
      decls: 57,
      vars: 7,
      consts: [[1, "content"], [1, "menu-izq"], ["class", "menu-icon", 3, "click", 4, "ngIf"], [1, "centro"], ["src", "./assets/tripmefy2.png", 3, "click"], [1, "menu-lateral"], [1, "menu", 3, "click"], ["routerLink", "/logros", 1, "menu"], ["src", "./assets/menu.png", 3, "click"], [1, "titulo"], ["id", "myForm", 1, "form-popup"], ["action", "/action_page.php", 1, "form-container"], ["class", "mensaje", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["id", "myFormViajero", 1, "form-popup"], ["id", "myFormMenu", 1, "form-popup"], [1, "menu-icon", 3, "click"], ["matBadgeColor", "warn", 3, "matBadge"], [1, "mensaje"], [4, "ngIf"], [1, "nombre_individuo"], [1, "eleccion1"], [2, "cursor", "pointer", 3, "click"], [1, "eleccion2"], ["class", "nombre_individuoViajero", 4, "ngIf"], ["class", "eleccion1Viajero", 4, "ngIf"], [1, "nombre_individuoViajero"], [1, "eleccion1Viajero"], ["mat-raised-button", "", "color", "primary", 2, "height", "3em", "width", "10em", 3, "click"], ["mat-stroked-button", "", "disabled", "", 2, "height", "3em", "width", "10em"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_p_2_Template, 3, 1, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_p_3_Template, 3, 1, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_5_listener() {
            return ctx.toInicio();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_p_7_Template, 3, 1, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_p_8_Template, 3, 1, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_9_listener() {
            return ctx.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_11_listener() {
            return ctx.irPerfil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Logros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_15_listener() {
            return ctx.irAboutUs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_17_listener() {
            return ctx.showMenuMovil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tus notificaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_div_27_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_29_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tus notificaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HeaderComponent_div_37_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_39_listener() {
            return ctx.close1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_47_listener() {
            return ctx.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_49_listener() {
            return ctx.irPerfil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Logros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_53_listener() {
            return ctx.irAboutUs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_55_listener() {
            return ctx.showMenuMovil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViajero);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViajero == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViajero);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViajero == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.solicitudes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mensajes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadge"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 50px;\n  background-color: #F5F5F5;\n}\n.content[_ngcontent-%COMP%]   .centro[_ngcontent-%COMP%] {\n  width: 33%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .centro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80%;\n  align-self: center;\n  display: block;\n  margin: auto;\n}\n.content[_ngcontent-%COMP%]   .menu-izq[_ngcontent-%COMP%] {\n  width: 33%;\n  padding-left: 30px;\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  align-items: center;\n}\n.menu-izq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 33%;\n  padding-top: 15px;\n}\n.content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-lateral[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #03a9f4;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.titulo[_ngcontent-%COMP%] {\n  background-color: #009788;\n  height: 40px;\n  color: #F5F5F5;\n  text-align: center;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #F5F5F5;\n  text-align: center;\n  padding-top: 0.35%;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.eleccion1Viajero[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15%;\n}\n.eleccion2Viajero[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15%;\n}\n.form-popup[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  left: 39%;\n  top: 23%;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n  border-radius: 3px;\n  width: 400px;\n}\n.form-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: white;\n  width: 100%;\n}\n.mensaje[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.nombre_individuo[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 70%;\n}\n.nombre_individuoViajero[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 60%;\n}\n.eleccion1[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15%;\n}\n.eleccion1Viajero[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15%;\n}\n.eleccion2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15%;\n}\n.form-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n.form-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, .form-container[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n.form-container[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .open-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n@media screen and (max-device-width: 680px) {\n  .titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .content[_ngcontent-%COMP%]   .centro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 35%;\n  }\n\n  .titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%] {\n    float: right;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    display: none;\n    width: 0px;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n    width: 0px;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    width: 20px;\n    margin: auto;\n    padding-bottom: 50px;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-izq[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n\n  .content[_ngcontent-%COMP%]   .centro[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-izq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .form-popup[_ngcontent-%COMP%] {\n    top: 35%;\n    left: 2%;\n    max-width: 95%;\n  }\n\n  #myFormMenu[_ngcontent-%COMP%] {\n    min-width: 100%;\n    border-bottom: 1500px solid #00000096;\n    border-left: 0px;\n    border-right: 0px;\n    padding-right: 2%;\n    left: 0%;\n    top: 90px;\n    \n    font-weight: bold;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  }\n\n  #myFormMenu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    min-height: 50px;\n    vertical-align: center;\n    cursor: pointer;\n  }\n\n  #myFormMenu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n    background-color: #f1f1f1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWFyaW9sb3phbm9jb3J0ZXMvVW5pdmVyc2lkYWRfTG9jYWwvVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHTyxxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFNekI7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQU5jO0FERmxCO0FDV0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QURSSjtBQ1dBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURSSjtBQ1lBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRFRKO0FDV0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QURSSjtBQ1VBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FEUEo7QUNVQTtFQUNJLGFBQUE7QURQSjtBQ1NBO0VBQ0ksaUJBQUE7RUFDQSxjQWpETTtFQWtETix3SUFBQTtBRE5KO0FDU0E7RUFDSSx5QkFwRFc7RUFxRFgsWUFBQTtFQUNBLGNBdkRjO0VBd0RkLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3SUFBQTtBRE5KO0FDUUE7RUFDSSxjQTdEYztFQThEZCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3SUFBQTtBRExKO0FDT0E7RUFDSSxlQUFBO0FESko7QUNNQTtFQUNJLGVBQUE7QURISjtBQ01BO0VBQU0seUNBQUE7QURGTjtBQ0dBO0VBQUcsc0JBQUE7QURDSDtBQ0NBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FERUo7QUNDQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBREVKO0FDQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FERUY7QUNDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QURFRjtBQ0NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURFSjtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FER0o7QUNBQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBREdKO0FDQUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QURHSjtBQ0FBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FER0o7QUNBQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBREdKO0FDQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FER0Y7QUNBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBREdGO0FDQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBREdGO0FDQUE7RUFDRSxxQkFBQTtBREdGO0FDQUE7RUFDRSxVQUFBO0FER0Y7QUNDQSxlQUFBO0FBQ0E7RUFDSTtJQUNBLGVBQUE7RURFRjs7RUNBRTtJQUNJLGdCQUFBO0VER047O0VDREU7SUFDSSxjQUFBO0VESU47O0VDRkU7SUFDSSxZQUFBO0VES047O0VDSEU7SUFDSSxhQUFBO0lBQ0EsVUFBQTtFRE1OOztFQ0pFO0lBQ0ksYUFBQTtJQUNBLFVBQUE7RURPTjs7RUNMRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFRFFOOztFQ05FO0lBQ0ksVUFBQTtFRFNOOztFQ1BFO0lBQ0ksVUFBQTtFRFVOOztFQ1JFO0lBQ0ksVUFBQTtFRFdOOztFQ1RFO0lBQ0ksY0FBQTtFRFlOOztFQ1ZFO0lBQ0ksUUFBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0VEYU47O0VDWEU7SUFDSSxlQUFBO0lBQ0EscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUFVLDRDQUFBO0lBQ1YsaUJBQUE7SUFDQSx3SUFBQTtFRGVOOztFQ1pFO0lBQ0ksZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RURlTjs7RUNiRTtJQUNJLHlCQUFBO0VEZ0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNvbnRlbnQgLmNlbnRybyB7XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250ZW50IC5jZW50cm8gaW1nIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRlbnQgLm1lbnUtaXpxIHtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtaXpxIHAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRlbnQgLm1lbnUtbGF0ZXJhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMzMlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmNvbnRlbnQgLm1lbnUtbGF0ZXJhbCBpbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1sYXRlcmFsIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwM2E5ZjQ7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXR1bG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Nzg4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjRjVGNUY1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0dWxvIGgxIHtcbiAgY29sb3I6ICNGNUY1RjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuMzUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1lbnUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5lbGVjY2lvbjFWaWFqZXJvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTUlO1xufVxuXG4uZWxlY2Npb24yVmlhamVybyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1JTtcbn1cblxuLmZvcm0tcG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDM5JTtcbiAgdG9wOiAyMyU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gIHotaW5kZXg6IDk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW5zYWplIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vbWJyZV9pbmRpdmlkdW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5ub21icmVfaW5kaXZpZHVvVmlhamVybyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmVsZWNjaW9uMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1JTtcbn1cblxuLmVsZWNjaW9uMVZpYWplcm8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5lbGVjY2lvbjIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsIC5vcGVuLWJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNjgwcHgpIHtcbiAgLnRpdHVsbyBoMSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmNvbnRlbnQgLmNlbnRybyBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XG4gIH1cblxuICAudGl0dWxvIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY29udGVudCAubWVudS1sYXRlcmFsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAuY29udGVudCAubWVudS1sYXRlcmFsIC5tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAwcHg7XG4gIH1cblxuICAuY29udGVudCAubWVudS1sYXRlcmFsIC5tZW51LWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDBweDtcbiAgfVxuXG4gIC5jb250ZW50IC5tZW51LWxhdGVyYWwgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLmNvbnRlbnQgLm1lbnUtaXpxIHtcbiAgICB3aWR0aDogMTUlO1xuICB9XG5cbiAgLmNvbnRlbnQgLmNlbnRybyB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5jb250ZW50IC5tZW51LWxhdGVyYWwge1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAuY29udGVudCAubWVudS1penEgcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZm9ybS1wb3B1cCB7XG4gICAgdG9wOiAzNSU7XG4gICAgbGVmdDogMiU7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gIH1cblxuICAjbXlGb3JtTWVudSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDE1MDBweCBzb2xpZCAjMDAwMDAwOTY7XG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICBsZWZ0OiAwJTtcbiAgICB0b3A6IDkwcHg7XG4gICAgLypEZXBlbmRlIGRlbCB0YW1hw7FvIGRlIGNvbnRlbnQgeSBkZSB0aXR1bG8qL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAjbXlGb3JtTWVudSBwIHtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgI215Rm9ybU1lbnUgcDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xyXG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcclxuJGJsYW5jbzogI2ZmZmZmZjtcclxuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXHJcbiRncmlzOiAjY2ZkOGRjO1xyXG4kbmFyYW5qYTogI2Y0YTUwMDtcclxuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXHJcbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xyXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcclxuJGxldHRlcnM6ICMwM2E5ZjQ7XHJcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XHJcbiRhenVsLXZlcmRvc286ICMwMDk3ODg7XHJcblxyXG4uY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3Jpcy1lbmNhYmV6YWRvO1xyXG59XHJcblxyXG4uY29udGVudCAuY2VudHJve1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRlbnQgLmNlbnRybyBpbWd7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50IC5tZW51LWl6cXtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubWVudS1penEgcHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29udGVudCAubWVudS1sYXRlcmFse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY29udGVudCAubWVudS1sYXRlcmFsIGltZ3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1lbnUtbGF0ZXJhbCBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJGxldHRlcnM7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0dWxve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtdmVyZG9zbztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAkZ3Jpcy1lbmNhYmV6YWRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50aXR1bG8gaDF7XHJcbiAgICBjb2xvcjogJGdyaXMtZW5jYWJlemFkbztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjM1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWVudXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWVudS1pY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5ib2R5IHtmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjt9XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuLmVsZWNjaW9uMVZpYWplcm97XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG4uZWxlY2Npb24yVmlhamVyb3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5mb3JtLXBvcHVwIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAzOSU7XHJcbiAgdG9wOjIzJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVuc2FqZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ub21icmVfaW5kaXZpZHVve1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLm5vbWJyZV9pbmRpdmlkdW9WaWFqZXJve1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmVsZWNjaW9uMXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5lbGVjY2lvbjFWaWFqZXJve1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmVsZWNjaW9uMntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIC5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciAuYnRuOmhvdmVyLCAub3Blbi1idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4vKipQQVJBIE3Dk1ZJTCoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY4MHB4KSB7XHJcbiAgICAudGl0dWxvIGgxe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLmNlbnRybyBpbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIH1cclxuICAgIC50aXR1bG8gaW1ne1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLm1lbnUtbGF0ZXJhbHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubWVudS1sYXRlcmFsIC5tZW51e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50IC5tZW51LWxhdGVyYWwgLm1lbnUtaWNvbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubWVudS1sYXRlcmFsIGltZ3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLm1lbnUtaXpxe1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAuY2VudHJve1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubWVudS1sYXRlcmFse1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubWVudS1penEgcHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayA7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1wb3B1cHtcclxuICAgICAgICB0b3A6MzUlO1xyXG4gICAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgfVxyXG4gICAgI215Rm9ybU1lbnV7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDE1MDBweCBzb2xpZCAjMDAwMDAwOTY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgICAgICBsZWZ0OjAlO1xyXG4gICAgICAgIHRvcDo5MHB4OyAvKkRlcGVuZGUgZGVsIHRhbWHDsW8gZGUgY29udGVudCB5IGRlIHRpdHVsbyovXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICB9XHJcbiAgICAjbXlGb3JtTWVudSBwe1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAjbXlGb3JtTWVudSBwOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_3__["SolicitudFirestoreService"]
        }, {
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      }, {
        titulo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/mensaje/mensaje.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/mensaje/mensaje.component.ts ***!
    \*****************************************************/

  /*! exports provided: MensajeComponent */

  /***/
  function srcAppSharedMensajeMensajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajeComponent", function () {
      return MensajeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MensajeComponent_h1_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r149.mensaje);
      }
    }

    function MensajeComponent_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
      }

      if (rf & 2) {
        var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r150.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var MensajeComponent =
    /*#__PURE__*/
    function () {
      function MensajeComponent() {
        _classCallCheck(this, MensajeComponent);

        this.cerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imagen = '';
      }

      _createClass(MensajeComponent, [{
        key: "cerrar",
        value: function cerrar() {
          var cerrado = true; //devolvemos un true para cerrar el popup

          this.cerrado.emit(cerrado);
          return cerrado;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MensajeComponent;
    }();

    MensajeComponent.ɵfac = function MensajeComponent_Factory(t) {
      return new (t || MensajeComponent)();
    };

    MensajeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MensajeComponent,
      selectors: [["app-mensaje"]],
      inputs: {
        mensaje: "mensaje",
        imagen: "imagen"
      },
      outputs: {
        cerrado: "cerrado"
      },
      decls: 9,
      vars: 2,
      consts: [["id", "all", 1, "outsider"], [1, "content"], [1, "cerrar"], ["src", "./assets/cerrar.png", "id", "close", 3, "click"], [1, "formulario"], [1, "mensaje"], [4, "ngIf"], [1, "imagen"], [3, "src", 4, "ngIf"], [3, "src"]],
      template: function MensajeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MensajeComponent_Template_img_click_3_listener() {
            return ctx.cerrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MensajeComponent_h1_6_Template, 2, 1, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MensajeComponent_img_8_Template, 1, 1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensaje != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagen != "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n  margin-left: 25%;\n  position: absolute;\n  z-index: 100;\n  background-color: #009788;\n  width: 50%;\n  height: 50%;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.bloque-aceptar[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.formulario[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 25%;\n  max-height: 25%;\n}\n.formulario[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mensaje[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: #ffffff;\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC9tZW5zYWplL21lbnNhamUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tZW5zYWplL21lbnNhamUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQVF6QjtFQUNJLG1CQUFBO0FDWEo7QURhQTtFQUNJLGVBQUE7QUNWSjtBRGNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEo7QURlQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsd0lBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLHlCQWhDVztFQWlDWCxVQUFBO0VBQ0EsV0FBQTtBQ2ZKO0FEcUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUlBLCtDQUFBO0FDcEJKO0FEeUJBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJKO0FEeUJBO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDdkJIO0FEMEJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUN2Qko7QUQyQkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUN4Qko7QUQyQkE7RUFDSSxXQUFBO0FDeEJKO0FEMkJBO0VBQ0ksbUJBQUE7RUFDQSxjQXJHSztFQXNHTCxtQkFBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZW5zYWplL21lbnNhamUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcbiRsZXR0ZXJzOiAjMDNhOWY0O1xyXG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xyXG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xyXG5cclxuXHJcblxyXG4uY2VycmFye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uY2VycmFyOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBcclxufVxyXG5cclxuLmNlcnJhciBpbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgXHJcbn1cclxuXHJcbi5vdXRzaWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXZlcmRvc287XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgIFxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG5cclxuXHJcblxyXG4uYmxvcXVlLWFjZXB0YXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgXHJcblxyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpbyBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDI1JTtcclxuICAgIG1heC1oZWlnaHQ6IDI1JTtcclxuICAgIFxyXG59XHJcblxyXG4uZm9ybXVsYXJpbyAuaW1hZ2Vue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICBcclxufVxyXG4uZm9ybXVsYXJpbyAubWVuc2FqZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVuc2FqZSBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogJGJsYW5jbztcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcblxyXG4iLCIvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLmNlcnJhciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jZXJyYXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZXJyYXIgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ub3V0c2lkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTc4ODtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uYmxvcXVlLWFjZXB0YXIge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZvcm11bGFyaW8gaW1nIHtcbiAgbWF4LXdpZHRoOiAyNSU7XG4gIG1heC1oZWlnaHQ6IDI1JTtcbn1cblxuLmZvcm11bGFyaW8gLmltYWdlbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybXVsYXJpbyAubWVuc2FqZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVuc2FqZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MensajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mensaje',
          templateUrl: './mensaje.component.html',
          styleUrls: ['./mensaje.component.scss']
        }]
      }], function () {
        return [];
      }, {
        cerrado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mensaje: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imagen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/pedir-imagen/pedir-imagen.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/pedir-imagen/pedir-imagen.component.ts ***!
    \***************************************************************/

  /*! exports provided: PedirImagenComponent */

  /***/
  function srcAppSharedPedirImagenPedirImagenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedirImagenComponent", function () {
      return PedirImagenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["imageUser"];

    function PedirImagenComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedirImagenComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.getURL();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PedirImagenComponent_ng_template_18_Template(rf, ctx) {} //import { EventEmitter } from 'protractor';


    var PedirImagenComponent =
    /*#__PURE__*/
    function () {
      function PedirImagenComponent(_route, _router, storage, firestoreService) {
        _classCallCheck(this, PedirImagenComponent);

        this._route = _route;
        this._router = _router;
        this.storage = storage;
        this.firestoreService = firestoreService;
        this.myUrl = "";
        this.url = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cerrar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myUrl = "";
      }

      _createClass(PedirImagenComponent, [{
        key: "onUpload",
        value: function onUpload(e) {
          var _this10 = this;

          var id = Math.random().toString(36).substring(2); //generamos un id aleatorio para que no haya nombres repetidos

          var file = e.target.files[0]; //cogemos el fichero que ha subido el usuario

          var filePath = "".concat(this.directiva, "/").concat(id); //utilizamos literales para meter el id

          var ref = this.firestoreService.getFileRef(filePath);
          var task = this.firestoreService.storageFile(filePath, file); //console.log(ref.getDownloadURL());

          this.uploadPercent = task.percentageChanges();
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this10.urlImage = ref.getDownloadURL();
          })).subscribe();
        }
      }, {
        key: "getURL",
        value: function getURL() {
          var url = this.inputImageUser.nativeElement.value;
          this.url.emit(url);
          this.cerrar.emit(true);
          alert("La imagen se ha subido correctamente");
          return url;
        }
      }, {
        key: "doCerrar",
        value: function doCerrar() {
          this.cerrar.emit(true);
          this.url.emit("");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PedirImagenComponent;
    }();

    PedirImagenComponent.ɵfac = function PedirImagenComponent_Factory(t) {
      return new (t || PedirImagenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]));
    };

    PedirImagenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PedirImagenComponent,
      selectors: [["app-pedir-imagen"]],
      viewQuery: function PedirImagenComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
        }
      },
      inputs: {
        directiva: "directiva"
      },
      outputs: {
        url: "url",
        cerrar: "cerrar"
      },
      decls: 20,
      vars: 10,
      consts: [["id", "all", 1, "outsider"], [1, "content"], [1, "cerrar"], ["src", "./assets/cerrar.png", "id", "close", 3, "click"], [1, "formulario"], ["id", "titulo", "for", "file"], ["type", "file", "id", "file", 3, "change"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["type", "hidden", 3, "value"], ["imageUser", ""], [1, "boton"], ["type", "submit", 3, "click", 4, "ngIf"], ["btnDisabled", ""], ["type", "submit", 3, "click"]],
      template: function PedirImagenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedirImagenComponent_Template_img_click_3_listener() {
            return ctx.doCerrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Selecciona una imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PedirImagenComponent_Template_input_change_8_listener($event) {
            return ctx.onUpload($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PedirImagenComponent_button_16_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PedirImagenComponent_ng_template_18_Template, 0, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.uploadPercent) + "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.urlImage));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, ctx.urlImage));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n}\n.content[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%]   #id[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.formulario[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC9wZWRpci1pbWFnZW4vcGVkaXItaW1hZ2VuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcGVkaXItaW1hZ2VuL3BlZGlyLWltYWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIscUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBTXpCO0VBQ0ksbUJBQUE7QUNUSjtBRFdBO0VBQ0ksZUFBQTtBQ1JKO0FEWUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNUSjtBRGFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3SUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBQ1hKO0FEZ0JBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQTs7OztJQUFBO0VBT0EsK0NBQUE7QUNiSjtBRGVBO0VBQ0csV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNaSDtBRGVBO0VBQ0ksWUFBQTtBQ1pKO0FEZ0JBO0VBQ0ksWUFBQTtBQ2JKO0FEaUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BlZGlyLWltYWdlbi9wZWRpci1pbWFnZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcbiRsZXR0ZXJzOiAjMDNhOWY0O1xyXG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xyXG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xyXG5cclxuLmNlcnJhcntcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNlcnJhcjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgXHJcbn1cclxuXHJcbi5jZXJyYXIgaW1ne1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgIFxyXG59XHJcblxyXG4ub3V0c2lkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIC8vYmFja2dyb3VuZDogJGF6dWwtdmVyZG9zbztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLyoqXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgKiovXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbi5mb3JtdWxhcmlve1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgXHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvICNpZHsgIFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmZvcm11bGFyaW8gI2ZpbGV7ICBcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbi5ib3RvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jZXJyYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2VycmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VycmFyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm91dHNpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgLyoqXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAqKi9cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm11bGFyaW8gI2lkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm9ybXVsYXJpbyAjZmlsZSB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJvdG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedirImagenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pedir-imagen',
          templateUrl: './pedir-imagen.component.html',
          styleUrls: ['./pedir-imagen.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]
        }];
      }, {
        inputImageUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['imageUser']
        }],
        directiva: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cerrar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PuntuacionPuComponent */

  /***/
  function srcAppSharedPuntuacionPuPuntuacionPuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PuntuacionPuComponent", function () {
      return PuntuacionPuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _boton_boton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../boton/boton.component */
    "./src/app/shared/boton/boton.component.ts");

    function PuntuacionPuComponent_div_8_img_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseout", function PuntuacionPuComponent_div_8_img_1_Template_img_mouseout_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141);

          var i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r139.vaciar(i_r136);
        })("click", function PuntuacionPuComponent_div_8_img_1_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141);

          var i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r142.establecer(i_r136);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PuntuacionPuComponent_div_8_img_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PuntuacionPuComponent_div_8_img_2_Template_img_mouseover_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

          var i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r144.rellenar(i_r136);
        })("click", function PuntuacionPuComponent_div_8_img_2_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

          var i_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r147.establecer(i_r136);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PuntuacionPuComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PuntuacionPuComponent_div_8_img_1_Template, 1, 0, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PuntuacionPuComponent_div_8_img_2_Template, 1, 0, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r136 = ctx.$implicit;

        var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r135.estrellas[i_r136] == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r135.estrellas[i_r136] == false);
      }
    }

    var _c0 = function _c0() {
      return [0, 1, 2, 3, 4];
    };

    var PuntuacionPuComponent =
    /*#__PURE__*/
    function () {
      function PuntuacionPuComponent() {
        _classCallCheck(this, PuntuacionPuComponent);

        this.puntuacion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.estrellas = [false, false, false, false, false];
        this.estable = -1;
      }

      _createClass(PuntuacionPuComponent, [{
        key: "getPuntuacion",
        value: function getPuntuacion() {
          var puntuacion = 0;
          var i = 0;
          var cerrado = true;

          for (i; i < this.estrellas.length; i++) {
            if (this.estrellas[i] == true) {
              puntuacion = puntuacion + 1; //si es verdadera sumamos un punto
            } else {
              this.puntuacion.emit(puntuacion);
              return puntuacion; //si una es falsa sus siguientes tambien
            }
          }

          this.puntuacion.emit(puntuacion);
          this.cerrado.emit(cerrado); //como aceptamos, cerramos

          return puntuacion; //devolvemos la puntuacion
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          var cerrado = true; //devolvemos un true para cerrar el popup

          var puntuacion = -1; //no se ha puntuado, se devuelve un -1 para que no se haga la puntuación

          this.cerrado.emit(cerrado);
          this.puntuacion.emit(puntuacion);
          return cerrado;
        }
      }, {
        key: "rellenar",
        value: function rellenar(i) {
          if (this.estable == -1) {
            for (i; i >= 0; i--) {
              this.estrellas[i] = true;
            }
          }
        }
      }, {
        key: "vaciar",
        value: function vaciar(i) {
          if (this.estable == -1) {
            var j;

            for (j = i; j >= 0; j--) {
              this.estrellas[j] = false;
            }
          }
        }
      }, {
        key: "establecer",
        value: function establecer(i) {
          if (this.estable == -1) {
            //si no hay ninguna estrella fija, se fija la que se ha pasado y se rellenan las anteriores
            this.estable = i;

            for (i; i >= 0; i--) {
              this.estrellas[i] = true;
            }
          } else if (this.estable == i) {
            //si ya hay una estrella fija y es sobre la que se ha pulsado, se desfija esa estrella y se vacían todas
            this.estable = -1;

            for (i; i >= 0; i--) {
              this.estrellas[i] = false;
            }
          } else {
            //si ya hay una estrella vacía, pero es diferente a la que se ha pulsado, se desfija, se fija la nueva
            //se vacían todas y se rellena hasta la nueva
            var j = 0;

            for (j; j < this.estrellas.length; j++) {
              this.estrellas[j] = false;
            } //vaciar todo


            this.estable = i; //establecer la nueva

            for (i; i >= 0; i--) {
              this.estrellas[i] = true;
            } //rellenar hasta i

          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PuntuacionPuComponent;
    }();

    PuntuacionPuComponent.ɵfac = function PuntuacionPuComponent_Factory(t) {
      return new (t || PuntuacionPuComponent)();
    };

    PuntuacionPuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PuntuacionPuComponent,
      selectors: [["app-puntuacion-pu"]],
      outputs: {
        puntuacion: "puntuacion",
        cerrado: "cerrado"
      },
      decls: 11,
      vars: 2,
      consts: [["id", "all", 1, "outsider"], [1, "content"], [1, "cerrar"], ["src", "./assets/cerrar.png", "id", "close", 3, "click"], [1, "formulario"], [1, "bloque-estrellas"], ["class", "estrellas", 4, "ngFor", "ngForOf"], [1, "bloque-aceptar"], ["id", "aceptar", "texto", "Aceptar", 3, "click"], [1, "estrellas"], ["src", "./assets/star.png", 3, "mouseout", "click", 4, "ngIf"], ["src", "./assets/empty_star.png", 3, "mouseover", "click", 4, "ngIf"], ["src", "./assets/star.png", 3, "mouseout", "click"], ["src", "./assets/empty_star.png", 3, "mouseover", "click"]],
      template: function PuntuacionPuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuntuacionPuComponent_Template_img_click_3_listener() {
            return ctx.cerrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xBFQu\xE9 tal fue el viaje?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PuntuacionPuComponent_div_8_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-boton", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuntuacionPuComponent_Template_app_boton_click_10_listener() {
            return ctx.getPuntuacion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _boton_boton_component__WEBPACK_IMPORTED_MODULE_2__["BotonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n  position: absolute;\n  margin-left: 25%;\n  z-index: 100;\n  background-color: #ffffff;\n  width: 50%;\n  height: 50%;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.bloque-estrellas[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.estrellas[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.bloque-estrellas[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30%;\n  width: 30%;\n}\n.bloque-aceptar[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%]   #id[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.formulario[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n@media screen and (max-device-width: 480px) {\n  .outsider[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC9wdW50dWFjaW9uLXB1L3B1bnR1YWNpb24tcHUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wdW50dWFjaW9uLXB1L3B1bnR1YWNpb24tcHUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLG1CQUFBO0FDVEo7QURXQTtFQUNJLGVBQUE7QUNSSjtBRFlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEo7QURhQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0lBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQXJDSztFQXNDTCxVQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEZUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0E7Ozs7SUFBQTtFQU9BLCtDQUFBO0FDWko7QURlQTtFQUNHLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1pIO0FEZUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUVJLFdBQUE7RUFDQSxVQUFBO0FDYko7QURrQkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNmSjtBRGtCQTtFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDZkg7QURrQkE7RUFDSSxZQUFBO0FDZko7QURtQkE7RUFDSSxZQUFBO0FDaEJKO0FEb0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRG9CQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFHQSxrQkFBQTtJQUNBLGVBQUE7RUNwQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wdW50dWFjaW9uLXB1L3B1bnR1YWNpb24tcHUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcbiRsZXR0ZXJzOiAjMDNhOWY0O1xyXG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xyXG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xyXG5cclxuLmNlcnJhcntcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNlcnJhcjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgXHJcbn1cclxuXHJcbi5jZXJyYXIgaW1ne1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgIFxyXG59XHJcblxyXG4ub3V0c2lkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIC8vYmFja2dyb3VuZDogJGF6dWwtdmVyZG9zbztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAvKipcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICAqKi9cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuXHJcbi5ibG9xdWUtZXN0cmVsbGFze1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lc3RyZWxsYXN7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIH1cclxuXHJcbi5ibG9xdWUtZXN0cmVsbGFzIGltZ3tcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4uYmxvcXVlLWFjZXB0YXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbWFyZ2luLWJvdHRvbTogMjBweDsgIFxyXG59XHJcblxyXG4uZm9ybXVsYXJpbyAjaWR7ICBcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbi5mb3JtdWxhcmlvICNmaWxleyAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG4uYm90b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIHtcclxuXHJcbiAgICAub3V0c2lkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jZXJyYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2VycmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VycmFyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm91dHNpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvKipcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICoqL1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmJsb3F1ZS1lc3RyZWxsYXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lc3RyZWxsYXMge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxvcXVlLWVzdHJlbGxhcyBpbWcge1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmJsb3F1ZS1hY2VwdGFyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybXVsYXJpbyAjaWQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtdWxhcmlvICNmaWxlIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYm90b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAub3V0c2lkZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuntuacionPuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-puntuacion-pu',
          templateUrl: './puntuacion-pu.component.html',
          styleUrls: ['./puntuacion-pu.component.scss']
        }]
      }], function () {
        return [];
      }, {
        puntuacion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cerrado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/scroll-top/scroll-top.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/scroll-top/scroll-top.component.ts ***!
    \***********************************************************/

  /*! exports provided: ScrollTopComponent */

  /***/
  function srcAppSharedScrollTopScrollTopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function () {
      return ScrollTopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "show-scroll": a0
      };
    };

    var ScrollTopComponent =
    /*#__PURE__*/
    function () {
      function ScrollTopComponent() {
        _classCallCheck(this, ScrollTopComponent);
      }

      _createClass(ScrollTopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.navIsFixed = true;
          } else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.navIsFixed = false;
          }
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - currentScroll / 5);
            }
          })();
        }
      }]);

      return ScrollTopComponent;
    }();

    ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) {
      return new (t || ScrollTopComponent)();
    };

    ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScrollTopComponent,
      selectors: [["app-scroll-top"]],
      hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 2,
      vars: 3,
      consts: [[1, "scroll-to-top", 3, "ngClass"], ["src", "../../../assets/avion.png", "title", "Ir arriba", 1, "scroll-top", 3, "click"]],
      template: function ScrollTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopComponent_Template_img_click_1_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.navIsFixed));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 25px;\n  right: 5px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n  width: 100px;\n}\n.scroll-top[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.show-scroll[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n@media screen and (max-device-width: 480px) {\n  .scroll-top[_ngcontent-%COMP%] {\n    -webkit-filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.7));\n            filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.7));\n  }\n\n  .scroll-to-top[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNUSjtBRFlBO0VBQ0ksVUFBQTtBQ1RKO0FEWUE7RUFDSSxVQUFBO0VBQ0EsZ0NBQUE7QUNUSjtBRFlBO0VBQ0k7SUFDSSx5REFBQTtZQUFBLGlEQUFBO0VDVE47O0VEYUU7SUFDSSxXQUFBO0VDVk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcclxuJGF6dWwtcm95YWw6ICMwMDRjYmU7XHJcbiRibGFuY286ICNmZmZmZmY7XHJcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xyXG4kZ3JpczogI2NmZDhkYztcclxuJG5hcmFuamE6ICNmNGE1MDA7XHJcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xyXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cclxuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XHJcbiRsZXR0ZXJzOiAjMDNhOWY0O1xyXG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xyXG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xyXG5cclxuLnNjcm9sbC10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsLXRvcHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5zaG93LXNjcm9sbCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG4gICAgLnNjcm9sbC10b3B7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjcpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC5zY3JvbGwtdG8tdG9wIHtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgIH1cclxuICAgIFxyXG59IiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5zY3JvbGwtdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5zY3JvbGwtdG9wIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnNob3ctc2Nyb2xsIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAuc2Nyb2xsLXRvcCB7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjcpKTtcbiAgfVxuXG4gIC5zY3JvbGwtdG8tdG9wIHtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scroll-top',
          templateUrl: './scroll-top.component.html',
          styleUrls: ['./scroll-top.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:scroll", []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/volver/volver.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/volver/volver.component.ts ***!
    \***************************************************/

  /*! exports provided: VolverComponent */

  /***/
  function srcAppSharedVolverVolverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolverComponent", function () {
      return VolverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VolverComponent =
    /*#__PURE__*/
    function () {
      function VolverComponent() {
        _classCallCheck(this, VolverComponent);
      }

      _createClass(VolverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VolverComponent;
    }();

    VolverComponent.ɵfac = function VolverComponent_Factory(t) {
      return new (t || VolverComponent)();
    };

    VolverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VolverComponent,
      selectors: [["app-volver"]],
      decls: 4,
      vars: 0,
      consts: [[1, "volver"], ["src", "./assets/volver.png"]],
      template: function VolverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Volver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".volver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  height: 35px;\n  padding: 5px;\n  border-radius: 10px;\n  width: 120px;\n  margin-left: 20px;\n  margin-top: 15px;\n}\n.volver[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n.volver[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n  margin-left: 20px;\n  margin-top: 13px;\n}\n.volver[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3NoYXJlZC92b2x2ZXIvdm9sdmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvdm9sdmVyL3ZvbHZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIscUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBTXpCO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlBO0VBQ0ksZUFBQTtFQUdBLHFEQUFBO0FDVEo7QURXQTtFQUNJLHdJQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDUko7QURVQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdm9sdmVyL3ZvbHZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xyXG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcclxuJGJsYW5jbzogI2ZmZmZmZjtcclxuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXHJcbiRncmlzOiAjY2ZkOGRjO1xyXG4kbmFyYW5qYTogI2Y0YTUwMDtcclxuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXHJcbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xyXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcclxuJGxldHRlcnM6ICMwM2E5ZjQ7XHJcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XHJcbiRhenVsLXZlcmRvc286ICMwMDk3ODg7XHJcblxyXG4udm9sdmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4udm9sdmVyOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LDEwOCwxMDksMC4zMSk7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDFweCAycHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxufVxyXG4udm9sdmVyIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4udm9sdmVyIGltZ3tcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4iLCIvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLnZvbHZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi52b2x2ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xufVxuXG4udm9sdmVyIGgxIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cblxuLnZvbHZlciBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-volver',
          templateUrl: './volver.component.html',
          styleUrls: ['./volver.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/viajes/crear-viaje/crear-viaje.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/viajes/crear-viaje/crear-viaje.component.ts ***!
    \*************************************************************/

  /*! exports provided: CrearViajeComponent */

  /***/
  function srcAppViajesCrearViajeCrearViajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearViajeComponent", function () {
      return CrearViajeComponent;
    });
    /* harmony import */


    var _interfaces_viaje__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../interfaces/viaje */
    "./src/app/interfaces/viaje.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/volver/volver.component */
    "./src/app/shared/volver/volver.component.ts");
    /* harmony import */


    var _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/pedir-imagen/pedir-imagen.component */
    "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function CrearViajeComponent_mat_option_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var continente_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", continente_r44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", continente_r44, " ");
      }
    }

    function CrearViajeComponent_mat_option_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pais_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pais_r45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pais_r45, " ");
      }
    }

    var CrearViajeComponent =
    /*#__PURE__*/
    function () {
      function CrearViajeComponent(route, viajeService, userService) {
        _classCallCheck(this, CrearViajeComponent);

        this.route = route;
        this.viajeService = viajeService;
        this.userService = userService;
        this.foto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.continentes = ["Europa", "Asia", "America del Norte", "America del Sur", "America Central", "Oceania", "Africa"];
        this.europa = ['España', 'Francia', 'Italia', 'Suecia', 'Alemania'];
        this.asia = ['Kazajistán', 'China', 'Corea del Norte', 'Corea del Sur', 'Japón'];
        this.americaNorte = ['Canada', 'EEUU'];
        this.americaSur = ['Colombia', 'Venezuela', 'Argentina', 'Perú', 'Ecuador'];
        this.americaCentro = ['Costa Rica', 'Salvador', 'Guatemala'];
        this.oceania = ['Australia', 'Nueva Zelanda'];
        this.africa = ['Argelia,', 'Camerún', 'Burkina Fasso', 'Egipto', 'Marruecos'];
        this.paises = [];
        this.continenteSelect = "";
        this.paisSelect = "";
        this.ciudadSelect = "";
        this.startDate = "";
        this.endDate = "";
        this.limitDate = "";
        this.limitPayDate = "";
        this.desc = "";
        this.email = "";
        this.telefono = "";
        this.prefijo = "";
        this.item = "";
        this.precio = "";
        this.maxpers = "";
        this.vuelo = false;
        this.alojamiento = false;
        this.comidas = false;
        this.miFoto = "";
      }

      _createClass(CrearViajeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (!localStorage.getItem('usuario') || 0 === localStorage.getItem('usuario').length) {
            this.route.navigate(['/page1']);
          }

          this.userService.getUsuariosFiltered(localStorage.getItem('usuario')).subscribe(function (res) {
            _this11.email = res[0].email;
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var newViaje = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_0__["Viaje"]();
          newViaje.ciudad = this.ciudadSelect;
          newViaje.continente = this.continenteSelect;
          newViaje.descripcion = this.desc;
          newViaje.email = this.email;
          newViaje.fin = this.endDate;
          newViaje.img = this.miFoto;
          newViaje.inicio = this.startDate;
          newViaje.limitePago = this.limitPayDate;
          newViaje.limiteUnion = this.limitDate;
          newViaje.maximo = this.maxpers;
          newViaje.pais = this.paisSelect;
          newViaje.precio = this.precio;
          newViaje.tlf = '+' + this.prefijo + ' ' + this.telefono;
          newViaje.servicios = '';
          newViaje.viajeros = '';

          if (this.vuelo) {
            newViaje.servicios += 'Vuelo,';
          }

          if (this.alojamiento) {
            newViaje.servicios += 'Alojamiento,';
          }

          if (this.comidas) {
            newViaje.servicios += 'Comidas,';
          }

          alert("El viaje se ha creado correctamente");
          this.viajeService.createViaje(newViaje);
          this.route.navigate(['/mis-viajes']);
        }
      }, {
        key: "chooseImagen",
        value: function chooseImagen() {
          document.getElementById("pedir-imagen").style.display = "block";
          document.getElementById("general").style.display = "none";
        }
      }, {
        key: "setImagen",
        value: function setImagen(e) {
          this.miFoto = e;
        }
      }, {
        key: "cerrarPopup",
        value: function cerrarPopup(e, id) {
          if (e == true) {
            document.getElementById(id).style.display = "none";
            document.getElementById("general").style.display = "block";
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.route.navigate(['/mis-viajes']);
        }
      }, {
        key: "getPais",
        value: function getPais() {
          if (this.continenteSelect === '') {
            return this.paises;
          }

          if (this.continenteSelect === 'Europa') {
            return this.europa;
          } else if (this.continenteSelect === 'Asia') {
            return this.asia;
          } else if (this.continenteSelect === 'America del Norte') {
            return this.americaNorte;
          } else if (this.continenteSelect === 'America del Sur') {
            return this.americaSur;
          } else if (this.continenteSelect === 'America Central') {
            return this.americaCentro;
          } else if (this.continenteSelect === 'Oceania') {
            return this.oceania;
          } else if (this.continenteSelect === 'Africa') {
            return this.africa;
          } else {
            return this.paises;
          }
        }
      }, {
        key: "checkFields",
        value: function checkFields() {
          if (this.ciudadSelect === '' || this.continenteSelect === '' || this.desc === '' || this.endDate === '' || this.startDate === '' || this.limitPayDate === '' || this.limitDate === '' || this.maxpers === '' || this.precio === '' || this.paisSelect === '' || this.telefono === '' || this.prefijo === '') {
            document.getElementById("error").style.display = "block";
            document.getElementById("error_img").style.display = "block";
            document.getElementById("error1").style.display = "block";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            return true;
          } else if (this.miFoto === '') {
            document.getElementById("error").style.display = "block";
            document.getElementById("error_img").style.display = "block";
            document.getElementById("error2").style.display = "block";
            document.getElementById("error1").style.display = "none";
            document.getElementById("error3").style.display = "none";
            return true;
          } else if (this.telefono.length < 9 || this.prefijo.length < 2) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error_img").style.display = "block";
            document.getElementById("error3").style.display = "block";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error1").style.display = "none";
            return true;
          } else {
            document.getElementById("error").style.display = "none";
            document.getElementById("error_img").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error1").style.display = "none";
            return false;
          }
        }
      }]);

      return CrearViajeComponent;
    }();

    CrearViajeComponent.ɵfac = function CrearViajeComponent_Factory(t) {
      return new (t || CrearViajeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"]));
    };

    CrearViajeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CrearViajeComponent,
      selectors: [["app-crear-viaje"]],
      outputs: {
        foto: "foto"
      },
      decls: 130,
      vars: 20,
      consts: [["titulo", "CREAR VIAJE"], [1, "sub-cabecera"], [3, "click"], ["id", "error_img", "src", "../../../assets/warning.png"], ["id", "error"], ["id", "error1"], ["id", "error2"], ["id", "error3"], ["id", "pedir-imagen", "directiva", "users", 3, "cerrar", "url"], ["id", "general"], [3, "ngSubmit"], ["id", "div1"], [2, "height", "220px", "vertical-align", "middle", "text-align", "center"], [1, "up"], ["src", "../../../assets/plus.png", "height", "100px", "width", "100px", 2, "display", "block", "margin-left", "auto", "margin-right", "auto", "cursor", "pointer", 3, "click"], [2, "margin-top", "3%"], [2, "display", "inline-block", "margin-right", "20px"], ["appearance", "fill"], ["matInput", "", "type", "number", "name", "precio", "required", "", 1, "example-right-align", 3, "ngModel", "ngModelChange"], ["matPrefix", ""], ["appearance", "fill", "id", "maximo"], ["matInput", "", "type", "number", "name", "maxpers", "required", "", 1, "example-right-align", 3, "ngModel", "ngModelChange"], ["name", "vuelo", 2, "display", "block", "margin-top", "5px", 3, "ngModel", "ngModelChange"], ["name", "alojamiento", 2, "display", "block", "margin-top", "5px", 3, "ngModel", "ngModelChange"], ["name", "comidas", 2, "display", "block", "margin-top", "5px", 3, "ngModel", "ngModelChange"], ["id", "div2"], [1, "texto"], [1, "formulario"], [1, "election"], ["name", "continente", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "pais", "required", "", 3, "ngModel", "ngModelChange"], [1, "formulario", "ciudad"], ["matInput", "", "name", "ciudad", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "maxlength", "10", "placeholder", "DD/MM/YYYY", "name", "startDate", "required", "", 3, "ngModel", "ngModelChange"], ["date1", ""], ["matInput", "", "type", "date", "maxlength", "10", "placeholder", "DD/MM/YYYY", "name", "endDate", "required", "", 3, "ngModel", "ngModelChange"], ["date2", ""], ["matInput", "", "type", "date", "maxlength", "10", "placeholder", "DD/MM/YYYY", "name", "limitDate", "required", "", 3, "ngModel", "ngModelChange"], ["date3", ""], ["matInput", "", "type", "date", "maxlength", "10", "placeholder", "DD/MM/YYYY", "name", "limitPayDate", "required", "", 3, "ngModel", "ngModelChange"], ["date4", ""], [1, "formulario", "descripcion"], ["matInput", "", "maxlength", "300", "rows", "5", "placeholder", "Introduce una breve descripci\xF3n en este area...", "name", "descripcion", 3, "ngModel", "ngModelChange"], ["descripcion", ""], [1, "formulario", "prefijo"], ["matInput", "", "name", "prefijo", "placeholder", "34", "maxlength", "3", "required", "", 3, "ngModel", "ngModelChange"], [1, "formulario", "contacto"], ["matInput", "", "name", "telefono", "placeholder", "660918814", "maxlength", "9", "required", "", 3, "ngModel", "ngModelChange"], ["telef", ""], [1, "divBotonAceptar"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "botonAceptar", 3, "disabled"], [3, "value"]],
      template: function CrearViajeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-volver", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrearViajeComponent_Template_app_volver_click_2_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Por favor introduce todos los campos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Por favor carga una imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "La longitud del telefono debe ser 6 y la de la extension 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-pedir-imagen", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cerrar", function CrearViajeComponent_Template_app_pedir_imagen_cerrar_11_listener($event) {
            return ctx.cerrarPopup($event, "pedir-imagen");
          })("url", function CrearViajeComponent_Template_app_pedir_imagen_url_11_listener($event) {
            return ctx.setImagen($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CrearViajeComponent_Template_form_ngSubmit_13_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrearViajeComponent_Template_img_click_17_listener() {
            return ctx.chooseImagen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "A\xF1ade una imagen para tu viaje");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Establece un precio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.precio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u20AC\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "M\xE1ximo de participantes: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "M\xE1ximo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.maxpers = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " El precio incluye...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-checkbox", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_checkbox_ngModelChange_40_listener($event) {
            return ctx.vuelo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Vuelo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_checkbox_ngModelChange_42_listener($event) {
            return ctx.alojamiento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Alojamiento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-checkbox", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_checkbox_ngModelChange_44_listener($event) {
            return ctx.comidas = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Comidas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Tu viaje a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Elija un continente");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_select_ngModelChange_53_listener($event) {
            return ctx.continenteSelect = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, CrearViajeComponent_mat_option_54_Template, 2, 2, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Elija un pais");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_select_ngModelChange_60_listener($event) {
            return ctx.paisSelect = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, CrearViajeComponent_mat_option_61_Template, 2, 2, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Ciudad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_67_listener($event) {
            return ctx.ciudadSelect = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Fecha de inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Elige una fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "input", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_75_listener($event) {
            return ctx.startDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Fecha de fin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Elige una fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_82_listener($event) {
            return ctx.endDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Fecha de l\xEDmite de inscripci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Elige una fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "input", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_91_listener($event) {
            return ctx.limitDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Fecha l\xEDmite de pago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Elige una fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "input", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_100_listener($event) {
            return ctx.limitPayDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "textarea", 43, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_textarea_ngModelChange_106_listener($event) {
            return ctx.desc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Contacto: + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Pr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_117_listener($event) {
            return ctx.prefijo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-form-field", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Telefono");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "input", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_122_listener($event) {
            return ctx.telefono = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Listo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](107);

          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.maxpers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.vuelo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.alojamiento);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.comidas);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.continenteSelect);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.continentes);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paisSelect);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getPais());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ciudadSelect);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.startDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.endDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.limitDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.limitPayDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r42.value.length, " / 300");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.prefijo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.telefono);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r43.value.length, " / 9");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.checkFields());
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_6__["VolverComponent"], _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_7__["PedirImagenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n.sub-cabecera[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.sub-cabecera[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: 20px;\n  width: 30px;\n  height: 30px;\n  display: none;\n}\n#error[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: 20px;\n  color: red;\n  display: none;\n}\n#error1[_ngcontent-%COMP%] {\n  display: none;\n}\n#error2[_ngcontent-%COMP%] {\n  display: none;\n}\n#error3[_ngcontent-%COMP%] {\n  display: none;\n}\n#general[_ngcontent-%COMP%] {\n  height: 86%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n  color: black;\n}\n#pedir-imagen[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n  z-index: 8;\n  top: 20%;\n}\n#div1[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  float: left;\n  margin: 0 4%;\n  margin-top: 1%;\n}\n#div2[_ngcontent-%COMP%] {\n  width: 55%;\n  height: 100%;\n  float: left;\n  margin-right: 4%;\n  margin-bottom: 4%;\n  font-size: 140%;\n}\n#uploader[_ngcontent-%COMP%] {\n  display: none;\n}\n.up[_ngcontent-%COMP%] {\n  height: 60%;\n}\n.up[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.bottom[_ngcontent-%COMP%] {\n  height: 40%;\n}\n.checkbox[_ngcontent-%COMP%] {\n  color: 0;\n}\nspan[_ngcontent-%COMP%]    > .texto[_ngcontent-%COMP%] {\n  padding-right: 5%;\n  float: left;\n}\n#maximo[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.formulario[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 2%;\n}\n.descripcion[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-left: 0;\n}\n.contacto[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.prefijo[_ngcontent-%COMP%] {\n  width: 5%;\n  margin-left: 0;\n}\n.email[_ngcontent-%COMP%] {\n  margin-right: 2%;\n}\n.election[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n.ciudad[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.divBotonAceptar[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 5%;\n}\n\n@media screen and (max-device-width: 700px) {\n  #div1[_ngcontent-%COMP%], #div2[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  #div1[_ngcontent-%COMP%] {\n    margin-bottom: 35%;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    margin-left: 3%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL2NyZWFyLXZpYWplL2NyZWFyLXZpYWplLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hcmlvbG96YW5vY29ydGVzL1VuaXZlcnNpZGFkX0xvY2FsL1RyaXBtZWZ5L3NyYy9hcHAvdmlhamVzL2NyZWFyLXZpYWplL2NyZWFyLXZpYWplLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQUt6QjtFQUNDLFdBQUE7RUFDQSxhQUFBO0FEUEQ7QUNTQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURORDtBQ1FBO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FETEQ7QUNPQTtFQUNDLGFBQUE7QURKRDtBQ01BO0VBQ0MsYUFBQTtBREhEO0FDS0E7RUFDQyxhQUFBO0FERkQ7QUNJQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FEREQ7QUNJQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FEREQ7QUNLQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FERkY7QUNJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEREY7QUNLQTtFQUNDLGFBQUE7QURGRDtBQ0tBO0VBQ0UsV0FBQTtBREZGO0FDS0E7RUFDQyxlQUFBO0FERkQ7QUNLQTtFQUNFLFdBQUE7QURGRjtBQ0tBO0VBQ0UsUUFBQTtBREZGO0FDS0E7RUFDQyxpQkFBQTtFQUNBLFdBQUE7QURGRDtBQ0tBO0VBQ0MsWUFBQTtBREZEO0FDS0E7RUFDQyxxQkFBQTtFQUNBLGVBQUE7QURGRDtBQ0tBO0VBQ0MsVUFBQTtFQUNBLGNBQUE7QURGRDtBQ0tBO0VBQ0MsVUFBQTtBREZEO0FDSUE7RUFDQyxTQUFBO0VBQ0EsY0FBQTtBREREO0FDR0E7RUFDQyxnQkFBQTtBREFEO0FDR0E7RUFDQyxxQkFBQTtFQUNBLFdBQUE7QURBRDtBQ0dBO0VBQ0MsVUFBQTtBREFEO0FDR0E7RUFDQyxZQUFBO0VBQ0EsY0FBQTtBREFEO0FDR0EsZUFBQTtBQUNBO0VBQ0M7SUFDQyxVQUFBO0VEQUE7O0VDRUQ7SUFDQyxrQkFBQTtFRENBOztFQ0NEO0lBQ0MsZUFBQTtFREVBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWFqZXMvY3JlYXItdmlhamUvY3JlYXItdmlhamUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLnN1Yi1jYWJlY2VyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3ViLWNhYmVjZXJhIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXJyb3Ige1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2Vycm9yMSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlcnJvcjIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXJyb3IzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2dlbmVyYWwge1xuICBoZWlnaHQ6IDg2JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNwZWRpci1pbWFnZW4ge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDg7XG4gIHRvcDogMjAlO1xufVxuXG4jZGl2MSB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCA0JTtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5cbiNkaXYyIHtcbiAgd2lkdGg6IDU1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIGZvbnQtc2l6ZTogMTQwJTtcbn1cblxuI3VwbG9hZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVwIHtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi51cCBpbWcge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5ib3R0b20ge1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLmNoZWNrYm94IHtcbiAgY29sb3I6IDA7XG59XG5cbnNwYW4gPiAudGV4dG8ge1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNtYXhpbW8ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5kZXNjcmlwY2lvbiB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uY29udGFjdG8ge1xuICB3aWR0aDogMzUlO1xufVxuXG4ucHJlZmlqbyB7XG4gIHdpZHRoOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5lbWFpbCB7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5lbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaXVkYWQge1xuICB3aWR0aDogMzAlO1xufVxuXG4uZGl2Qm90b25BY2VwdGFyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MDBweCkge1xuICAjZGl2MSwgI2RpdjIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAjZGl2MSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzUlO1xuICB9XG5cbiAgI2RpdjIge1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xyXG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcclxuJGJsYW5jbzogI2ZmZmZmZjtcclxuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXHJcbiRncmlzOiAjY2ZkOGRjO1xyXG4kbmFyYW5qYTogI2Y0YTUwMDtcclxuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXHJcbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xyXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcclxuJGxldHRlcnM6ICMwM2E5ZjQ7XHJcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XHJcblxyXG4uc3ViLWNhYmVjZXJhe1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnN1Yi1jYWJlY2VyYSBpbWd7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4jZXJyb3J7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRjb2xvcjogcmVkO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI2Vycm9yMXtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbiNlcnJvcjJ7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4jZXJyb3Ize1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI2dlbmVyYWx7IFxyXG5cdGhlaWdodDogODYlOyBcclxuXHR3aWR0aDogMTAwJTsgXHJcblx0cGFkZGluZzogMDsgXHJcblx0bWFyZ2luOiAwOyBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG5cdGxlZnQ6IDA7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jcGVkaXItaW1hZ2Vue1xyXG5cdGRpc3BsYXk6bm9uZTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogODtcclxuXHR0b3A6IDIwJTtcclxuXHJcbn1cclxuXHJcbiNkaXYxIHsgXHJcbiAgd2lkdGg6IDMwJTsgXHJcbiAgaGVpZ2h0OiAxMDAlOyBcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDAgNCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuI2RpdjIgeyBcclxuICB3aWR0aDogNTUlOyBcclxuICBoZWlnaHQ6IDEwMCU7IFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgZm9udC1zaXplOiAxNDAlO1xyXG5cclxufVxyXG5cclxuI3VwbG9hZGVye1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51cHtcclxuICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLnVwIGltZ3tcclxuXHRtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5ib3R0b217XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5jaGVja2JveHtcclxuICBjb2xvcjogcmVkKCRjb2xvcjogIzAwMDAwMCk7XHJcbn1cclxuXHJcbnNwYW4gPiAudGV4dG97XHJcblx0cGFkZGluZy1yaWdodDogNSU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNtYXhpbW97XHJcblx0d2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpb3tcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4uZGVzY3JpcGNpb257XHJcblx0d2lkdGg6IDk1JTtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmNvbnRhY3Rve1xyXG5cdHdpZHRoOiAzNSU7XHJcbn1cclxuLnByZWZpam97XHJcblx0d2lkdGg6IDUlO1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1x0XHJcbn1cclxuLmVtYWlse1xyXG5cdG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuXHJcbi5lbGVjdGlvbntcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaXVkYWR7XHJcblx0d2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmRpdkJvdG9uQWNlcHRhcntcdFxyXG5cdGZsb2F0OnJpZ2h0O1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4vKipQQVJBIE3Dk1ZJTCoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDcwMHB4KXtcclxuXHQjZGl2MSwgI2RpdjJ7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdH1cclxuXHQjZGl2MXtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1JTtcclxuXHR9XHJcblx0I2RpdjJ7XHJcblx0XHRtYXJnaW4tbGVmdDogMyU7XHJcblx0fVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CrearViajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-crear-viaje',
          templateUrl: './crear-viaje.component.html',
          styleUrls: ['./crear-viaje.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]
        }, {
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"]
        }];
      }, {
        foto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/viajes/mis-viajes/mis-viajes.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/viajes/mis-viajes/mis-viajes.component.ts ***!
    \***********************************************************/

  /*! exports provided: MisViajesComponent */

  /***/
  function srcAppViajesMisViajesMisViajesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MisViajesComponent", function () {
      return MisViajesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/firestore/solicitud-firestore.service */
    "./src/app/services/firestore/solicitud-firestore.service.ts");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/unirse-continente"];
    };

    function MisViajesComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/crear-viaje"];
    };

    function MisViajesComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var _c2 = function _c2(a1) {
      return ["/viaje/", a1];
    };

    function MisViajesComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ciudad_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ciudad_r49["id"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ciudad_r49.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ciudad_r49.ciudad);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ciudad_r49.descripcion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ciudad_r49.precio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ciudad_r49.unidas, "/", ciudad_r49.maximo, "");
      }
    }

    var MisViajesComponent =
    /*#__PURE__*/
    function () {
      function MisViajesComponent(_route, _router, firestoreServiceSolicitud, firestoreService, firestoreServiceUser) {
        _classCallCheck(this, MisViajesComponent);

        this._route = _route;
        this._router = _router;
        this.firestoreServiceSolicitud = firestoreServiceSolicitud;
        this.firestoreService = firestoreService;
        this.firestoreServiceUser = firestoreServiceUser;
        this.title = 'España';
        this.estePais = "";
        this.precio = "Todos";
        this.escogidas = [];
        this.buscar = "";
        this.ciudadesId = [];
        this.ciudades = []; //ciudades = [['Sevilla', 'hola'], ['Barcelona'], ['Galicia'], ['Madrid']];

        this.myciudad = this.ciudades[0];
        this.ciudades = [];
        this.escogidas = [];
      }

      _createClass(MisViajesComponent, [{
        key: "estaVacio",
        value: function estaVacio() {
          return this.escogidas.length < 1;
        }
      }, {
        key: "busqueda",
        value: function busqueda() {
          var i;
          var selec;
          this.escogidas = [];

          for (i = 0; i < this.ciudades.length; i++) {
            // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
            //console.log(this.estePais);
            selec = this.filtro(i);

            if (selec != -1 && selec['ciudad'].toUpperCase().includes(this.buscar.toUpperCase())) {
              this.escogidas.push(selec);
            }
          }

          ;
        }
      }, {
        key: "filtrar",
        value: function filtrar() {
          var i;
          var selec;
          this.escogidas = [];

          for (i = 0; i < this.ciudades.length; i++) {
            // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
            //console.log(this.estePais);
            selec = this.filtro(i);

            if (selec != -1) {
              this.escogidas.push(selec);
            }
          }

          ;
        }
      }, {
        key: "filtro",
        value: function filtro(i) {
          var ciudad = this.ciudades[i]; //solo metemos los viajes del pais escogido

          switch (this.precio) {
            case "Hasta 100€":
              if (parseInt(ciudad['precio'].substr(0, 3)) <= 100) {
                //this.escogidas.push(ciudad);
                return ciudad;
              }

              break;

            case "Hasta 300€":
              if (parseInt(ciudad['precio'].substr(0, 3)) <= 300) {
                //this.escogidas.push(ciudad);
                return ciudad;
              }

              break;

            case "Hasta 500€":
              if (parseInt(ciudad['precio'].substr(0, 3)) <= 500) {
                //this.escogidas.push(ciudad);
                return ciudad;
              }

              break;

            default:
              //this.escogidas.push(ciudad);
              return ciudad;
              break;
          }

          return -1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          //let dato = JSON.parse(localStorage.getItem('pais'));
          if (localStorage.getItem('usuario') == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
          } //let id = localStorage.getItem('pais');


          this.escogidas = this.ciudades;
          /**SI EL USUARIO ES VIAJERO
           * Deben buscarse las solicitudes del usuario y meter los datos de sus viajes en el array
           */

          if (localStorage.getItem('tipo') == 'viajero') {
            this.escogidas = [];
            this.ciudades = [];
            this.firestoreServiceSolicitud.getSolicitudesByUserId(localStorage.getItem('usuario')).subscribe(function (res) {
              var i;
              _this12.ciudadesId = [];

              for (i = 0; i < res.length; i++) {
                _this12.ciudadesId.push(res[i].idViaje);
              } //console.log(this.ciudadesId);


              for (i = 0; i < _this12.ciudadesId.length; i++) {
                if (res[i].estado != "pendiente" && res[i].estado != "rechazado") {
                  _this12.firestoreService.getViaje(_this12.ciudadesId[i]).then(function (elem) {
                    _this12.ciudades.push(elem);

                    _this12.escogidas.push(elem); //una vez estan todos los viajes al pais seleccionado metidos en el array, los filtros funcionan correctamente

                  });
                }
              }
            });
          }
          /**SI EL USUARIO ES ORGANIZADOR
           * Deben buscarse su email y buscar aquellos viajes que tengan como email el email del organizador
           */


          if (localStorage.getItem('tipo') == 'organizador') {
            this.escogidas = [];
            this.ciudades = [];
            this.firestoreServiceUser.getUsuariosFiltered(localStorage.getItem('usuario')).subscribe(function (res) {
              var email = res[0].email;

              _this12.firestoreService.getViajesByEmail(email).subscribe(function (elem) {
                var i;

                for (i = 0; i < elem.length; i++) {
                  //console.log(elem[i].descripcion);
                  _this12.ciudades.push(elem[i]);

                  _this12.escogidas.push(elem[i]); //console.log(this.ciudades[i].descripcion);

                }
              });
            });
          }
        }
      }, {
        key: "comprobarViajero",
        value: function comprobarViajero() {
          return localStorage.getItem('tipo') == "viajero";
        }
      }, {
        key: "comprobarOrganizador",
        value: function comprobarOrganizador() {
          return localStorage.getItem('tipo') == "organizador";
        }
      }]);

      return MisViajesComponent;
    }();

    MisViajesComponent.ɵfac = function MisViajesComponent_Factory(t) {
      return new (t || MisViajesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"]));
    };

    MisViajesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MisViajesComponent,
      selectors: [["app-mis-viajes"]],
      decls: 26,
      vars: 7,
      consts: [["titulo", "MIS VIAJES"], [1, "right"], [1, "buscador"], ["id", "fname", "name", "fname", "placeholder", "Buscar ciudad...", "onclick", "reset()", 3, "ngModel", "ngModelChange", "change"], ["id", "img-f", "src", "./assets/filtro.png"], ["id", "select-f", 3, "ngModel", "ngModelChange", "change"], ["value", "+ 500\u20AC"], ["value", "Hasta 100\u20AC"], ["value", "Hasta 300\u20AC"], ["value", "Hasta 500\u20AC"], ["selected", "", 3, "value"], [1, "content"], ["class", "nuevo", 3, "routerLink", 4, "ngIf"], ["class", "pais", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "nuevo", 3, "routerLink"], ["id", "mas", "src", "./assets/nuevo.png"], [1, "pais", 3, "routerLink"], [3, "src"], [1, "destacado"], ["id", "mensaje"], [1, "info"], [1, "personas"], ["src", "./assets/usuario.png"], ["src", "./assets/compartir.png"]],
      template: function MisViajesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MisViajesComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.buscar = $event;
          })("change", function MisViajesComponent_Template_input_change_5_listener() {
            return ctx.busqueda();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MisViajesComponent_Template_select_ngModelChange_9_listener($event) {
            return ctx.precio = $event;
          })("change", function MisViajesComponent_Template_select_change_9_listener() {
            return ctx.filtrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hasta 100\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hasta 300\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hasta 500\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+ 500\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MisViajesComponent_div_23_Template, 2, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MisViajesComponent_div_24_Template, 2, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MisViajesComponent_div_25_Template, 14, 9, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buscar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comprobarViajero());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comprobarOrganizador());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.escogidas);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  float: right;\n}\nselect[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 5px;\n  border: none;\n  opacity: 0.6;\n}\n#img-f[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n#select-f[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\nnav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  flex-wrap: nowrap;\n  float: right;\n}\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-left: 50px;\n}\nnav[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px;\n  margin-top: 20px;\n}\n\n.nuevo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  \n  width: 15%;\n  height: 400px;\n  cursor: pointer;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n  \n}\n.nuevo[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.nuevo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  height: 50px;\n  width: 50px;\n}\n\n.notfound[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n  width: 100%;\n}\n.pais[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  \n  width: 200px;\n  height: 30%;\n  cursor: pointer;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n  \n}\n.pais[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.pais[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  height: 150px;\n  width: 200px;\n}\n.pais[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.pais[_ngcontent-%COMP%]   .destacado[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #009788;\n}\n.pais[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 20px;\n  margin-right: 10px;\n  align-items: center;\n  text-align: center;\n}\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n}\n.info[_ngcontent-%COMP%]   .personas[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 35px;\n}\n.pais[_ngcontent-%COMP%]   #mensaje[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n\n@media screen and (max-device-width: 480px) {\n  .volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n    width: 100%;\n    justify-content: center;\n  }\n\n  #select-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #img-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .pais[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 30%;\n  }\n\n  .nuevo[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 400px;\n  }\n\n  .nuevo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL21pcy12aWFqZXMvbWlzLXZpYWplcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3ZpYWplcy9taXMtdmlhamVzL21pcy12aWFqZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBTXpCLHNCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEUko7QUNXQTtFQUNJLHdJQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEUko7QUNXQTtFQUNJLFlBQUE7QURSSjtBQ1dBO0VBRUksZUFBQTtFQUdBLHFEQUFBO0FEVEo7QUNhQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRFZKO0FDWUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEVEo7QUNXQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURSSjtBQ1dBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURSSjtBQ1dBLGdCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0E7Ozs7SUFBQTtFQUtBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBR0EsbUNBQUE7RUFFQTs7d0RBQUE7QURUSjtBQ2NBO0VBQ0k7O3VEQUFBO0VBS0EsK0NBQUE7QURYSjtBQ2VBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRFpKO0FDZUEsV0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURaSjtBQ2VBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FEWko7QUNlQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0E7Ozs7SUFBQTtFQUtBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLG1CQUFBO0VBR0EsbUNBQUE7RUFFQTs7d0RBQUE7QURaSjtBQ2lCQTtFQUNJOzt1REFBQTtFQUtBLCtDQUFBO0FEZEo7QUNrQkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FEZko7QUNpQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0lBQUE7QURkSjtBQ2tCQTtFQUNJLGlCQUFBO0VBQ0EsY0F6S1c7QUQwSmY7QUNpQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGRKO0FDaUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURkSjtBQ2dCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURiSjtBQ2VBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRFpKO0FDZUEsZUFBQTtBQUNBO0VBRUk7SUFDSSxhQUFBO0VEYk47O0VDZUU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0VEWk47O0VDZUU7SUFDSSxhQUFBO0VEWk47O0VDY0U7SUFDSSxhQUFBO0VEWE47O0VDY0U7SUFDSSxlQUFBO0VEWE47O0VDZUU7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUVBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFRGJOOztFQ2dCRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBRUEsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VEZE47O0VDaUJFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7RURkTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlhamVzL21pcy12aWFqZXMvbWlzLXZpYWplcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4vKipCQVJSQSBERSBCw5pTUVVFREEqKi9cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuI2ltZy1mIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4jc2VsZWN0LWY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xufVxuXG5uYXYgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmlnaHQgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbm5hdiAuYnVzY2Fkb3IgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnVzY2Fkb3IgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qKk5VRVZPIFZJQUpFKiovXG4ubnVldm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLyoqcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICoqL1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTsqKi9cbn1cblxuLm51ZXZvOmhvdmVyIHtcbiAgLyoqLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7KiovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ubnVldm8gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLyoqVklBSkVTKiovXG4ubm90Zm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhaXMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvKipwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgKiovXG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIC8qKi13ZWJraXQtYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpOyoqL1xufVxuXG4ucGFpczpob3ZlciB7XG4gIC8qKi13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpOyoqL1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLnBhaXMgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ucGFpcyBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGFpcyAuZGVzdGFjYWRvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA5Nzg4O1xufVxuXG4ucGFpcyAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyBpbWcge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uaW5mbyAucGVyc29uYXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5wYWlzICNtZW5zYWplIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAudm9sdmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgI3NlbGVjdC1mIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2ltZy1mIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC5wYWlzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cblxuICAubnVldm8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG5cbiAgLm51ZXZvIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59IiwiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcclxuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcclxuXHJcbi8qKkJBUlJBIERFIELDmlNRVUVEQSoqL1xyXG5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbnNlbGVjdHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbiNpbWctZntcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIFxyXG59XHJcbiNzZWxlY3QtZjpob3ZlcntcclxuICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LDEwOCwxMDksMC4zMSk7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDFweCAycHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxuICAgIFxyXG59XHJcblxyXG5uYXYgLnJpZ2h0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5yaWdodCBpbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbm5hdiAuYnVzY2Fkb3IgaW1ne1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idXNjYWRvciBpbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxufVxyXG5cclxuLyoqTlVFVk8gVklBSkUqKi9cclxuLm51ZXZve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLyoqcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAqKi9cclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG5cclxuICAgIC8qKi13ZWJraXQtYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7KiovXHJcblxyXG59XHJcbi5udWV2bzpob3ZlcntcclxuICAgIC8qKi13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7KiovXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcbi5udWV2byBpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4vKipWSUFKRVMqKi9cclxuLm5vdGZvdW5ke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLXRvcDogNzBweDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhaXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLyoqcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAqKi9cclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG5cclxuICAgIC8qKi13ZWJraXQtYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7KiovXHJcblxyXG59XHJcbi5wYWlzOmhvdmVye1xyXG4gICAgLyoqLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTsqKi9cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBcclxuICAgXHJcbn1cclxuLnBhaXMgaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5wYWlzIHB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgXHJcbn1cclxuXHJcbi5wYWlzIC5kZXN0YWNhZG97XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xyXG59XHJcbi5wYWlzIC5pbmZve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIGltZ3tcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcbi5pbmZvIC5wZXJzb25hc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG4ucGFpcyAjbWVuc2FqZXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyoqUEFSQSBNw5NWSUwqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG5cclxuICAgIC52b2x2ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjc2VsZWN0LWZ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNpbWctZntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5wYWlze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm51ZXZve1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5udWV2byBpbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MisViajesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mis-viajes',
          templateUrl: './mis-viajes.component.html',
          styleUrls: ['./mis-viajes.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudFirestoreService"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]
        }, {
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/viajes/unirse-ciudad/unirse-ciudad.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/viajes/unirse-ciudad/unirse-ciudad.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UnirseCiudadComponent */

  /***/
  function srcAppViajesUnirseCiudadUnirseCiudadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnirseCiudadComponent", function () {
      return UnirseCiudadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../interfaces/viaje */
    "./src/app/interfaces/viaje.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/volver/volver.component */
    "./src/app/shared/volver/volver.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../not-found404/not-found404.component */
    "./src/app/not-found404/not-found404.component.ts");

    var _c0 = ["imageUser"];

    function UnirseCiudadComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-not-found404", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a1) {
      return ["/viaje/", a1];
    };

    function UnirseCiudadComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ciudad_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ciudad_r53.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ciudad_r53.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ciudad_r53.ciudad);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ciudad_r53.descripcion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ciudad_r53.precio, " \u20AC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ciudad_r53.unidas, "/", ciudad_r53.maximo, "");
      }
    }

    function UnirseCiudadComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnirseCiudadComponent_div_25_div_1_Template, 14, 9, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.escogidas);
      }
    }

    var _c2 = function _c2() {
      return ["/unirse-pais"];
    };

    var UnirseCiudadComponent =
    /*#__PURE__*/
    function () {
      function UnirseCiudadComponent(_route, _router, storage, firestoreService) {
        _classCallCheck(this, UnirseCiudadComponent);

        this._route = _route;
        this._router = _router;
        this.storage = storage;
        this.firestoreService = firestoreService;
        this.title = 'España';
        this.estePais = "";
        this.escogidas = [];
        this.precio = "Todos";
        this.buscar = "";
        this.ciudades = [];
        this.myUrl = "";
        this.search_texto = "";
        this.search_tipo = 0;
        this.misViajes = [];
        this.viajes = [];
      }

      _createClass(UnirseCiudadComponent, [{
        key: "estaVacio",
        value: function estaVacio() {
          return this.escogidas.length < 1;
        }
      }, {
        key: "busqueda",
        value: function busqueda() {
          var i;
          var selec;
          this.escogidas = [];

          for (i = 0; i < this.ciudades.length; i++) {
            // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
            //console.log(this.estePais);
            selec = this.filtro(i);

            if (selec != -1 && selec.ciudad.toUpperCase().includes(this.buscar.toUpperCase())) {
              this.escogidas.push(selec);
            }
          }

          ;
        }
      }, {
        key: "filtrar",
        value: function filtrar() {
          var i;
          var selec;
          this.escogidas = [];

          for (i = 0; i < this.ciudades.length; i++) {
            // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
            //console.log(this.estePais);
            selec = this.filtro(i);

            if (selec != -1) {
              this.escogidas.push(selec);
            }
          }

          ;
        }
      }, {
        key: "filtro",
        value: function filtro(i) {
          var ciudad = this.ciudades[i]; //solo metemos los viajes del pais escogido

          switch (this.precio) {
            case "Hasta 100€":
              if (parseInt(ciudad.precio.substr(0, ciudad.precio.length - 1)) <= 100) {
                //this.escogidas.push(ciudad);
                return ciudad;
              }

              break;

            case "Hasta 300€":
              if (parseInt(ciudad.precio.substr(0, ciudad.precio.length - 1)) <= 300) {
                //this.escogidas.push(ciudad);
                return ciudad;
              }

              break;

            case "Hasta 500€":
              if (parseInt(ciudad.precio.substr(0, ciudad.precio.length - 1)) <= 500) {
                //this.escogidas.push(ciudad);
                return ciudad;
              }

              break;

            default:
              //this.escogidas.push(ciudad);
              return ciudad;
              break;
          }

          return -1;
        }
        /**Esta función recoge el file seleccionado */

        /**
        onUpload(e){
          //console.log('subir', e.target.files[0]);
          const id = Math.random().toString(36).substring(2); //generamos un id aleatorio para que no haya nombres repetidos
          const file = e.target.files[0]; //cogemos el fichero que ha subido el usuario
          const filePath = `upload/viaje_${id}`; //utilizamos literales para meter el id
          const ref = this.storage.ref(filePath);
          const task = this.storage.upload(filePath, file);
           this.uploadPercent = task.percentageChanges();
          task.snapshotChanges().pipe(finalize(() =>
            this.urlImage = ref.getDownloadURL()
                 
          
          
          
          )).subscribe();
          //this.crearViaje(this.urlImage);
          
        
        }
        **/

      }, {
        key: "onUpload",
        value: function onUpload(e) {
          var _this13 = this;

          var id = Math.random().toString(36).substring(2); //generamos un id aleatorio para que no haya nombres repetidos

          var file = e.target.files[0]; //cogemos el fichero que ha subido el usuario

          var filePath = "upload/viaje_".concat(id); //utilizamos literales para meter el id

          var ref = this.firestoreService.getFileRef(filePath);
          var task = this.firestoreService.storageFile(filePath, file); //console.log(ref.getDownloadURL());

          this.uploadPercent = task.percentageChanges();
          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this13.urlImage = ref.getDownloadURL();
          })).subscribe();
        }
      }, {
        key: "crearViaje",
        value: function crearViaje() {
          console.log("entra");
          var viaje = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__["Viaje"]();
          viaje.pais = "Francia";
          viaje.ciudad = "París";
          viaje.continente = "Europa";
          viaje.email = "emailinventado@gmail.com";
          viaje.img = this.inputImageUser.nativeElement.value;
          this.firestoreService.createViaje(viaje);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          //let dato = JSON.parse(localStorage.getItem('pais'));
          //let id = localStorage.getItem('pais');
          if (localStorage.getItem('usuario') == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
          }

          var id = this._route.snapshot.paramMap.get('id'); //para saber el pais a traves de la URL


          localStorage.setItem('pais', id); //se establece el local Storage

          this.estePais = id.toUpperCase(); //para el titulo

          this.s_viajes = this.firestoreService.getViajesSorted().subscribe(function (data) {
            _this14.viajes = data;
          });
          this.firestoreService.getViajesFiltered(this._route.snapshot.paramMap.get('id')).subscribe(function (res) {
            _this14.viajes = res; //obtenemos todos los viajes a dicho pais

            var i = 0;
            var iterado; //servira de variable auxiliar

            _this14.escogidas = []; //lo vaciamos al cargar la página

            _this14.ciudades = []; //lo vaciamos al cargar la página

            for (i = 0; i < _this14.viajes.length; i++) {
              //recorremos todos los viajes del pais y vamos metiendolos con sus datos en el atributo escogidas
              iterado = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__["Viaje"]();
              iterado.id = _this14.viajes[i].id;
              iterado.ciudad = _this14.viajes[i].ciudad;
              iterado.continente = _this14.viajes[i].continente;
              iterado.descripcion = _this14.viajes[i].descripcion;
              iterado.duracion = _this14.viajes[i].duracion;
              iterado.email = _this14.viajes[i].email;
              iterado.fin = _this14.viajes[i].fin;
              iterado.img = _this14.viajes[i].img;
              iterado.tlf = _this14.viajes[i].tlf;
              iterado.inicio = _this14.viajes[i].inicio;
              iterado.limitePago = _this14.viajes[i].limitePago;
              iterado.limiteUnion = _this14.viajes[i].limiteUnion;
              iterado.maximo = _this14.viajes[i].maximo;
              iterado.servicios = _this14.viajes[i].servicios;
              iterado.precio = _this14.viajes[i].precio;
              iterado.pais = _this14.viajes[i].pais;
              iterado.viajeros = _this14.viajes[i].viajeros;
              iterado.unidas = _this14.viajes[i].unidas;

              _this14.ciudades.push(iterado);

              _this14.escogidas.push(iterado);
            } //una vez estan todos los viajes al pais seleccionado metidos en el array, los filtros funcionan correctamente

          });
          /**
          var dir = "../../../assets/viajes/Europa/Barcelona-00.jpg"
          //var dir = "Otawa-00";
          var archivo = dir;
          var ref = this.firestoreService.getFileRef("Amberes-01.jpg");
          var tarea = this.firestoreService.storageFile("Amberes-01.jpg", archivo);
          
          ref.getDownloadURL().subscribe((URL) => {
            viaje.img = URL;
          });
          **/
          //console.log(this.firestoreService.createViaje(viaje));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.s_viajes.unsubscribe();
        }
      }]);

      return UnirseCiudadComponent;
    }();

    UnirseCiudadComponent.ɵfac = function UnirseCiudadComponent_Factory(t) {
      return new (t || UnirseCiudadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]));
    };

    UnirseCiudadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnirseCiudadComponent,
      selectors: [["app-unirse-ciudad"]],
      viewQuery: function UnirseCiudadComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
        }
      },
      decls: 26,
      vars: 9,
      consts: [[3, "titulo"], ["id", "div-volver", 3, "routerLink"], [1, "right"], [1, "buscador"], ["id", "fname", "name", "fname", "placeholder", "Buscar ciudad...", "onclick", "reset()", 3, "ngModel", "ngModelChange", "change"], ["id", "img-f", "src", "./assets/filtro.png"], ["id", "select-f", 3, "ngModel", "ngModelChange", "change"], ["value", "+ 500\u20AC"], ["value", "Hasta 100\u20AC"], ["value", "Hasta 300\u20AC"], ["value", "Hasta 500\u20AC"], ["selected", "", 3, "value"], ["class", "notfound", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "notfound"], ["titulo", "Lo sentimos, el viaje que est\xE1s buscando no est\xE1 disponible"], [1, "content"], ["class", "pais", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "pais", 3, "routerLink"], [3, "src"], [1, "destacado"], ["id", "mensaje"], [1, "info"], [1, "personas"], ["src", "./assets/usuario.png"], ["src", "./assets/compartir.png"]],
      template: function UnirseCiudadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-volver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnirseCiudadComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.buscar = $event;
          })("change", function UnirseCiudadComponent_Template_input_change_7_listener() {
            return ctx.busqueda();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnirseCiudadComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.precio = $event;
          })("change", function UnirseCiudadComponent_Template_select_change_11_listener() {
            return ctx.filtrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hasta 100\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hasta 300\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hasta 500\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+ 500\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UnirseCiudadComponent_div_24_Template, 2, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UnirseCiudadComponent_div_25_Template, 2, 1, "div", 13);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("titulo", "VIAJES A ", ctx.estePais, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buscar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estaVacio());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estaVacio() == false);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_7__["VolverComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_10__["NotFound404Component"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n#div-volver[_ngcontent-%COMP%]:active {\n  outline: none;\n}\nselect[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 5px;\n  border: none;\n  opacity: 0.6;\n}\n#img-f[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n#select-f[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n.volver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  padding: 5px;\n  border-radius: 10px;\n}\n.volver[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n.volver[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n  margin-left: 20px;\n  margin-top: 13px;\n}\n.volver[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\nnav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  flex-wrap: nowrap;\n}\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-left: 50px;\n}\nnav[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.buscador[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px;\n  margin-top: 20px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.notfound[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pais[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  \n  width: 200px;\n  height: 30%;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n  \n}\n.pais[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.pais[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  height: 150px;\n  width: 200px;\n}\n.pais[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.pais[_ngcontent-%COMP%]   .destacado[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #009788;\n}\n.pais[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 20px;\n  margin-right: 10px;\n  align-items: center;\n  text-align: center;\n}\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n}\n.info[_ngcontent-%COMP%]   .personas[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 35px;\n}\n.pais[_ngcontent-%COMP%]   #mensaje[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n\n@media screen and (max-device-width: 480px) {\n  .volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n    width: 100%;\n    justify-content: center;\n  }\n\n  #select-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #img-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .pais[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 30%;\n  }\n\n  #div-volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL3VuaXJzZS1jaXVkYWQvdW5pcnNlLWNpdWRhZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3ZpYWplcy91bmlyc2UtY2l1ZGFkL3VuaXJzZS1jaXVkYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBTXpCLHNCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURSSjtBQ1VBO0VBQ0ksYUFBQTtBRFBKO0FDVUE7RUFDSSx3SUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRFBKO0FDVUE7RUFDSSxZQUFBO0FEUEo7QUNVQTtFQUVJLGVBQUE7RUFHQSxxREFBQTtBRFJKO0FDV0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURSSjtBQ1lBO0VBQ0ksZUFBQTtFQUdBLHFEQUFBO0FEVEo7QUNXQTtFQUNJLHdJQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEUko7QUNVQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FEUEo7QUNVQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEUEo7QUNTQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUROSjtBQ1FBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRExKO0FDUUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRExKO0FDUUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRExKO0FDUUEsYUFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FETEo7QUNRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FETEo7QUNRQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0E7Ozs7SUFBQTtFQUtBLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFHQSxtQ0FBQTtFQUVBOzt3REFBQTtBRExKO0FDVUE7RUFDSTs7dURBQUE7RUFLQSwrQ0FBQTtBRFBKO0FDV0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FEUko7QUNVQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3SUFBQTtBRFBKO0FDV0E7RUFDSSxpQkFBQTtFQUNBLGNBekpXO0FEaUpmO0FDVUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRFBKO0FDU0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRE5KO0FDUUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FETEo7QUNPQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURKSjtBQ09BLGVBQUE7QUFDQTtFQUVJO0lBQ0ksYUFBQTtFRExOOztFQ09FO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtFREpOOztFQ09FO0lBQ0ksYUFBQTtFREpOOztFQ01FO0lBQ0ksYUFBQTtFREhOOztFQ01FO0lBQ0ksZUFBQTtFREhOOztFQ09FO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFFQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RURMTjs7RUNPRTtJQUNJLGFBQUE7RURKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlhamVzL3VuaXJzZS1jaXVkYWQvdW5pcnNlLWNpdWRhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4vKipCQVJSQSBERSBCw5pTUVVFREEqKi9cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuI2Rpdi12b2x2ZXI6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuI2ltZy1mIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4jc2VsZWN0LWY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xufVxuXG4udm9sdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udm9sdmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDFweCAycHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbn1cblxuLnZvbHZlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi52b2x2ZXIgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxubmF2IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5yaWdodCBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxubmF2IC5idXNjYWRvciBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5idXNjYWRvciBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idXNjYWRvciBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyoqQkFOREVSQVMqKi9cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5vdGZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWlzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLyoqcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICoqL1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbiAgLyoqLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xuICBib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7KiovXG59XG5cbi5wYWlzOmhvdmVyIHtcbiAgLyoqLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7KiovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ucGFpcyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5wYWlzIHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wYWlzIC5kZXN0YWNhZG8ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDk3ODg7XG59XG5cbi5wYWlzIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZvIGltZyB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5pbmZvIC5wZXJzb25hcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLnBhaXMgI21lbnNhamUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC52b2x2ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBuYXYge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAjc2VsZWN0LWYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjaW1nLWYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG5cbiAgLnBhaXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgfVxuXG4gICNkaXYtdm9sdmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcclxuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcclxuXHJcbi8qKkJBUlJBIERFIELDmlNRVUVEQSoqL1xyXG5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4jZGl2LXZvbHZlcjphY3RpdmV7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gfVxyXG5cclxuc2VsZWN0e1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuI2ltZy1me1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgXHJcbn1cclxuI3NlbGVjdC1mOmhvdmVye1xyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xyXG4gICAgXHJcbn1cclxuLnZvbHZlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIFxyXG59XHJcbi52b2x2ZXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xyXG59XHJcbi52b2x2ZXIgaDF7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcbi52b2x2ZXIgaW1ne1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbm5hdiAucmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLnJpZ2h0IGltZ3tcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxubmF2IC5idXNjYWRvciBpbWd7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJ1c2NhZG9yIGZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnVzY2Fkb3IgaW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgXHJcbn1cclxuXHJcbi8qKkJBTkRFUkFTKiovXHJcbi5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbn1cclxuXHJcbi5ub3Rmb3VuZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWlze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC8qKnBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgKiovXHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuXHJcbiAgICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpOyoqL1xyXG5cclxufVxyXG4ucGFpczpob3ZlcntcclxuICAgIC8qKi13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7KiovXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcbi5wYWlzIGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4ucGFpcyBwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgIFxyXG59XHJcblxyXG4ucGFpcyAuZGVzdGFjYWRve1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJGF6dWwtdmVyZG9zbztcclxufVxyXG4ucGFpcyAuaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbmZvIGltZ3tcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcbi5pbmZvIC5wZXJzb25hc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG4ucGFpcyAjbWVuc2FqZXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyoqUEFSQSBNw5NWSUwqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG5cclxuICAgIC52b2x2ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAjc2VsZWN0LWZ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICNpbWctZntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5wYWlze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB9XHJcbiAgICAjZGl2LXZvbHZlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgIH1cclxuXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnirseCiudadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-unirse-ciudad',
          templateUrl: './unirse-ciudad.component.html',
          styleUrls: ['./unirse-ciudad.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]
        }];
      }, {
        inputImageUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['imageUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/viajes/unirse-continente/unirse-continente.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/viajes/unirse-continente/unirse-continente.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UnirseContinenteComponent */

  /***/
  function srcAppViajesUnirseContinenteUnirseContinenteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnirseContinenteComponent", function () {
      return UnirseContinenteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/volver/volver.component */
    "./src/app/shared/volver/volver.component.ts");

    var _c0 = function _c0() {
      return ["/mis-viajes"];
    };

    var _c1 = function _c1() {
      return ["/unirse-pais"];
    };

    var UnirseContinenteComponent =
    /*#__PURE__*/
    function () {
      function UnirseContinenteComponent() {
        _classCallCheck(this, UnirseContinenteComponent);

        this.clickMessage = '';
      }
      /**
        establecerContinente(continente:string):void{
          alert(continente);
        }
        **/


      _createClass(UnirseContinenteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('usuario') == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
          }
        }
      }]);

      return UnirseContinenteComponent;
    }();

    UnirseContinenteComponent.ɵfac = function UnirseContinenteComponent_Factory(t) {
      return new (t || UnirseContinenteComponent)();
    };

    UnirseContinenteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnirseContinenteComponent,
      selectors: [["app-unirse-continente"]],
      decls: 41,
      vars: 30,
      consts: [["titulo", "ESCOGE TU SIGUIENTE EXPLORACI\xD3N"], ["id", "div-volver", 3, "routerLink"], ["id", "imagen", "src", "./assets/mapa-continentes.png", "usemap", "#image-map"], ["name", "image-map"], ["onclick", "localStorage.setItem('continente', 'africa')", "target", "_self", "alt", "\xC1frica", "title", "\xC1frica", "coords", "466,199,454,209,450,222,440,233,433,244,424,256,424,274,425,291,441,305,457,322,492,313,505,317,514,322,516,336,516,350,525,362,525,377,522,393,522,415,531,428,537,450,546,466,568,466,586,449,599,434,600,413,615,404,623,382,620,356,627,339,647,324,650,301,635,298,607,265,595,232,581,218,512,196", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'america-sur')", "target", "_self", "alt", "Am\xE9rica del sur", "title", "Am\xE9rica del sur", "coords", "232,294,219,303,219,316,211,338,206,354,213,380,220,392,235,401,252,414,250,426,248,463,250,496,258,515,264,537,295,552,280,497,300,482,320,450,331,428,349,419,349,387,360,367,352,354,304,317,265,297,256,298", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'america-norte')", "target", "_self", "alt", "Am\xE9rica del norte", "title", "Am\xE9rica del norte", "coords", "163,263,154,271,144,268,131,259,128,242,118,227,116,226,106,217,114,244,107,225,99,201,156,253,139,170,108,156,128,167,109,123,109,113,101,104,156,233,159,260,157,257,154,238,170,225,176,223,189,222,207,217,218,222,222,208,243,199,242,184,263,175,285,155,297,162,321,154,321,133,314,108,389,109,446,60,464,38,397,36,375,39,335,33,320,40,296,44,268,44,230,54,205,62,183,71,160,72,130,74,100,72,80,81,62,91,46,104,17,124,156,253,157,259", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'america-centro')", "target", "_self", "alt", "Am\xE9rica central", "title", "Am\xE9rica central", "coords", "188,257,178,257,166,265,156,269,154,276,164,290,181,304,204,306,212,299,247,264,211,252", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'oceania')", "target", "_self", "alt", "Ocean\xEDa", "title", "Ocean\xEDa", "coords", "854,473,856,450,860,425,874,414,895,408,904,392,916,391,930,382,941,382,939,395,953,404,965,381,965,394,971,404,979,415,984,421,989,432,986,450,975,472,963,489,943,484,945,513,884,436,935,489,853,441,898,469,944,503", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'europa')", "target", "_self", "alt", "Europa", "title", "Europa", "coords", "464,201,481,192,489,180,500,172,513,186,540,191,564,197,572,179,584,166,617,177,641,185,640,153,643,144,664,139,656,125,650,103,652,84,647,58,625,59,581,79,547,75,517,87,502,106,479,127,475,113,460,131,446,189,451,194", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'asia')", "target", "_self", "alt", "Asia", "title", "Asia", "coords", "570,186,589,180,603,178,621,178,636,185,646,195,655,184,645,160,645,143,658,144,659,122,646,97,658,72,679,70,725,50,769,58,789,66,846,69,886,77,919,80,955,84,976,91,953,107,938,136,949,140,927,212,877,224,858,258,846,284,888,271,911,294,903,327,924,350,886,385,657,274,640,291,624,271", "shape", "poly", 3, "routerLink"], [1, "botones"], ["onclick", "localStorage.setItem('continente', 'africa')", 1, "boton", 3, "routerLink"], ["src", "./assets/continentes/africa.png"], ["onclick", "localStorage.setItem('continente', 'america-sur')", 1, "boton", 3, "routerLink"], ["src", "./assets/continentes/america-sur.png"], ["onclick", "localStorage.setItem('continente', 'america-norte')", 1, "boton", 3, "routerLink"], ["src", "./assets/continentes/america-norte.png"], ["onclick", "localStorage.setItem('continente', 'america-centro')", 1, "boton", 3, "routerLink"], ["src", "./assets/continentes/america-centro.png"], ["onclick", "localStorage.setItem('continente', 'oceania')", 1, "boton", 3, "routerLink"], ["src", "./assets/continentes/oceania.png"], ["onclick", "localStorage.setItem('continente', 'europa')", 1, "boton", 3, "routerLink"], ["src", "./assets/continentes/europa.png"], ["onclick", "localStorage.setItem('continente', 'asia')", 1, "boton", 3, "routerLink"], ["src", "./assets/continentes/asia.png"]],
      template: function UnirseContinenteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-volver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "map", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "area", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "area", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "area", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "area", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "area", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "area", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "area", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\xC1frica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Am\xE9rica del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Am\xE9rica del Norte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Am\xE9rica Central");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ocean\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Europa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Asia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1));
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_3__["VolverComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["#div-volver[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n\n.mapa[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\narea[_ngcontent-%COMP%] {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 40px;\n  background-color: black;\n}\n\n.botones[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-device-width: 480px) {\n  map[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #imagen[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .botones[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 20px;\n  }\n\n  .botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 200px;\n    text-align: center;\n    margin-top: 50px;\n    border-radius: 10px;\n    box-shadow: 2px 7px 4px 0px #cfd8dc;\n  }\n\n  .botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n    box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  .boton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 80%;\n    width: 80%;\n  }\n\n  #div-volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZF9Mb2NhbC9UcmlwbWVmeS9zcmMvYXBwL3ZpYWplcy91bmlyc2UtY29udGluZW50ZS91bmlyc2UtY29udGluZW50ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlhamVzL3VuaXJzZS1jb250aW5lbnRlL3VuaXJzZS1jb250aW5lbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQUo7O0FESUE7RUFDSSxhQUFBO0FDREo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FETUE7RUFDSTtJQUNJLGFBQUE7RUNITjs7RURLRTtJQUNJLGFBQUE7RUNGTjs7RURLRTtJQUNJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtFQ0ZOOztFREtFO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFHQSxtQ0FBQTtFQ0ZOOztFREtFO0lBR0ksK0NBQUE7RUNGTjs7RURJRTtJQUNJLFdBQUE7SUFDQSxVQUFBO0VDRE47O0VER0U7SUFDSSxhQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYWplcy91bmlyc2UtY29udGluZW50ZS91bmlyc2UtY29udGluZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXYtdm9sdmVyOmFjdGl2ZXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiB9XHJcblxyXG5cclxuLm1hcGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxuXHJcbmFyZWF7XHJcbiAgICBvdXRsaW5lOiBub25lOyBcclxuXHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib3RvbmVze1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIHtcclxuICAgIG1hcHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgI2ltYWdlbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3RvbmVze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuYm90b25lcyAuYm90b257XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3RvbmVzIC5ib3Rvbjpob3ZlcntcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICB9XHJcbiAgICAuYm90b24gaW1ne1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAjZGl2LXZvbHZlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgIH1cclxuXHJcbn0iLCIjZGl2LXZvbHZlcjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWFwYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5hcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5ib3RvbmVzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIG1hcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNpbWFnZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYm90b25lcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5ib3RvbmVzIC5ib3RvbiB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIH1cblxuICAuYm90b25lcyAuYm90b246aG92ZXIge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgfVxuXG4gIC5ib3RvbiBpbWcge1xuICAgIGhlaWdodDogODAlO1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAjZGl2LXZvbHZlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnirseContinenteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-unirse-continente',
          templateUrl: './unirse-continente.component.html',
          styleUrls: ['./unirse-continente.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/viajes/unirse-pais/unirse-pais.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/viajes/unirse-pais/unirse-pais.component.ts ***!
    \*************************************************************/

  /*! exports provided: UnirsePaisComponent */

  /***/
  function srcAppViajesUnirsePaisUnirsePaisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnirsePaisComponent", function () {
      return UnirsePaisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/volver/volver.component */
    "./src/app/shared/volver/volver.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../not-found404/not-found404.component */
    "./src/app/not-found404/not-found404.component.ts");

    function UnirsePaisComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-not-found404", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/unirse-ciudad/", a1];
    };

    function UnirsePaisComponent_div_29_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pais_r57 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, pais_r57["pais"]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/banderas/", pais_r57["imagen"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pais_r57["pais"]);
      }
    }

    function UnirsePaisComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnirsePaisComponent_div_29_div_1_Template, 4, 5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.escogidos);
      }
    }

    var _c1 = function _c1() {
      return ["/unirse-continente"];
    };

    var UnirsePaisComponent =
    /*#__PURE__*/
    function () {
      function UnirsePaisComponent(_route, _router) {
        _classCallCheck(this, UnirsePaisComponent);

        this._route = _route;
        this._router = _router;
        this.escogidos = [];
        this.buscar = "";
        this.elegido = [];
        this.americaNorte = [{
          "pais": "Canadá",
          "imagen": "cn.jpg"
        }, {
          "pais": "EEUU",
          "imagen": "eeuu.png"
        }];
        this.americaCentro = [{
          "pais": "Salvador",
          "imagen": "slv.png"
        }, {
          "pais": "Costa Rica",
          "imagen": "csr.png"
        }, {
          "pais": "Guatemala",
          "imagen": "gt.png"
        }];
        this.americaSur = [{
          "pais": "Argentina",
          "imagen": "ar.png"
        }, {
          "pais": "Colombia",
          "imagen": "cl.png"
        }, {
          "pais": "Venezuela",
          "imagen": "vn.png"
        }, {
          "pais": "Perú",
          "imagen": "pr.png"
        }, {
          "pais": "Ecuador",
          "imagen": "ec.png"
        }];
        this.asia = [{
          "pais": "China",
          "imagen": "ch.png"
        }, {
          "pais": "Kazajistán",
          "imagen": "kj.png"
        }, {
          "pais": "Corea del Norte",
          "imagen": "cn.png"
        }, {
          "pais": "Corea del Sur",
          "imagen": "cs.png"
        }, {
          "pais": "Japón",
          "imagen": "jp.png"
        }];
        this.africa = [{
          "pais": "Egipto",
          "imagen": "eg.png"
        }, {
          "pais": "Argelia",
          "imagen": "arg.png"
        }, {
          "pais": "Camerún",
          "imagen": "cm.png"
        }, {
          "pais": "Burkina Faso",
          "imagen": "bf.png"
        }, {
          "pais": "Marruecos",
          "imagen": "mr.png"
        }];
        this.oceania = [{
          "pais": "Australia",
          "imagen": "au.png"
        }, {
          "pais": "Nueva Zelanda",
          "imagen": "nz.png"
        }];
        this.europa = [{
          "pais": "España",
          "imagen": "sp.png"
        }, {
          "pais": "Italia",
          "imagen": "ita.png"
        }, {
          "pais": "Francia",
          "imagen": "fr.png"
        }, {
          "pais": "Suecia",
          "imagen": "su.png"
        }];
        this.continentes = [this.europa];
        this.elem = this.continentes[this.numContinente];
      }

      _createClass(UnirsePaisComponent, [{
        key: "hayPais",
        value: function hayPais() {
          return this.escogidos.length > 0;
        }
      }, {
        key: "busqueda",
        value: function busqueda() {
          var i;
          var pais;
          this.escogidos = [];

          for (i = 0; i < this.continentes[0].length; i++) {
            // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
            //console.log(this.estePais);
            pais = this.continentes[0][i];

            if (pais['pais'].toUpperCase().includes(this.buscar.toUpperCase())) {
              this.escogidos.push(pais);
            }
          } //si devuelve true, habra encontrado, si devuelve false, no habra encontrado

        }
      }, {
        key: "onChange",
        value: function onChange(deviceValue) {
          console.log(deviceValue);
          localStorage.setItem('continente', deviceValue);
          this.identificador = localStorage.getItem('continente');
          this.continente = this.identificador;
          this.continente = deviceValue;

          switch (this.identificador) {
            case 'europa':
              {
                this.continentes[0] = this.europa;
                this.continente = 'Europa';
                break;
              }

            case 'america-norte':
              {
                this.continentes[0] = this.americaNorte;
                this.continente = 'América del Norte';
                break;
              }

            case 'america-sur':
              {
                this.continentes[0] = this.americaSur;
                this.continente = 'América del Sur';
                break;
              }

            case 'america-centro':
              {
                this.continentes[0] = this.americaCentro;
                this.continente = 'América Central';
                break;
              }

            case 'africa':
              {
                this.continentes[0] = this.africa;
                this.continente = 'África';
                break;
              }

            case 'asia':
              {
                this.continentes[0] = this.asia;
                this.continente = 'Asia';
                break;
              }

            case 'oceania':
              {
                this.continentes[0] = this.oceania;
                this.continente = 'Oceanía';
                break;
              }

            default:
              {
                this.continente = 'Europa';
                this.identificador = "europa";
                break;
              }
          }

          this.escogidos = this.continentes[0];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('usuario') == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
          }

          this.identificador = localStorage.getItem('continente');
          this.continente = this.identificador;
          this.continente[0].toUpperCase();

          switch (this.identificador) {
            case 'europa':
              {
                this.continentes[0] = this.europa;
                this.continente = 'Europa';
                break;
              }

            case 'america-norte':
              {
                this.continentes[0] = this.americaNorte;
                this.continente = 'América del Norte';
                break;
              }

            case 'america-sur':
              {
                this.continentes[0] = this.americaSur;
                this.continente = 'América del Sur';
                break;
              }

            case 'america-centro':
              {
                this.continentes[0] = this.americaCentro;
                this.continente = 'América Central';
                break;
              }

            case 'africa':
              {
                this.continentes[0] = this.africa;
                this.continente = 'África';
                break;
              }

            case 'asia':
              {
                this.continentes[0] = this.asia;
                this.continente = 'Asia';
                break;
              }

            case 'oceania':
              {
                this.continentes[0] = this.oceania;
                this.continente = 'Oceanía';
                break;
              }

            default:
              {
                this.continente = 'Europa';
                break;
              }
          }

          this.escogidos = this.continentes[0];
        }
      }, {
        key: "establecerPais",
        value: function establecerPais() {//onclick="localStorage.setItem('pais', pais['pais'])"
          //[routerLink]="['/unirse-ciudad']"
        }
      }]);

      return UnirsePaisComponent;
    }();

    UnirsePaisComponent.ɵfac = function UnirsePaisComponent_Factory(t) {
      return new (t || UnirsePaisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    UnirsePaisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnirsePaisComponent,
      selectors: [["app-unirse-pais"]],
      decls: 31,
      vars: 7,
      consts: [["titulo", "ESCOGE TU SIGUIENTE EXPLORACI\xD3N"], ["id", "div-volver", 3, "routerLink"], [1, "right"], [1, "buscador"], ["action", "/action_page.php"], ["type", "text", "id", "fname", "name", "fname", "placeholder", "Buscar pais...", "onclick", "reset()", 3, "ngModel", "ngModelChange", "change"], ["id", "img-f", "src", "./assets/filtro.png"], ["id", "continentes", 3, "change"], ["selected", "", 3, "value"], ["value", "africa"], ["value", "america-centro"], ["value", "america-sur"], ["value", "america-norte"], ["value", "oceania"], ["value", "asia"], ["value", "europa"], ["class", "notfound", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "notfound"], ["titulo", "Lo sentimos, no hay pa\xEDses que coincidan con esas caracter\xEDsticas"], [1, "content"], ["class", "pais", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "pais", 3, "routerLink"], [3, "src"], [1, "destacado"]],
      template: function UnirsePaisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-volver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnirsePaisComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.buscar = $event;
          })("change", function UnirsePaisComponent_Template_input_change_7_listener() {
            return ctx.busqueda();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UnirsePaisComponent_Template_select_change_11_listener($event) {
            return ctx.onChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xC1frica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Am\xE9rica Central");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Am\xE9rica del sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Am\xE9rica del Norte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ocean\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "As\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Europa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UnirsePaisComponent_div_28_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UnirsePaisComponent_div_29_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buscar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.identificador);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.continente);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayPais() == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hayPais());
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_3__["VolverComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_6__["NotFound404Component"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n#div-volver[_ngcontent-%COMP%]:active {\n  outline: none;\n}\nselect[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 5px;\n  border: none;\n  opacity: 0.6;\n}\n#select-f[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n#continentes[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-style: groove;\n}\n#img-f[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.volver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  padding: 5px;\n  border-radius: 10px;\n}\n.volver[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n.volver[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n  margin-left: 20px;\n  margin-top: 13px;\n}\n.volver[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\nnav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  flex-wrap: nowrap;\n}\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-left: 50px;\n}\nnav[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px;\n  margin-top: 20px;\n}\n\n.notfound[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.pais[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  \n  width: 180px;\n  height: 30%;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n  \n}\n.pais[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.pais[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  height: 100px;\n  width: 180px;\n}\n.pais[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.pais[_ngcontent-%COMP%]   .destacado[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #009788;\n}\n.pais[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 20px;\n  margin-right: 10px;\n  align-items: center;\n  text-align: center;\n}\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n}\n.info[_ngcontent-%COMP%]   .personas[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 35px;\n}\n.pais[_ngcontent-%COMP%]   #mensaje[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n\n@media screen and (max-device-width: 480px) {\n  .volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n    width: 100%;\n    justify-content: center;\n  }\n\n  #select-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #img-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .pais[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 30%;\n  }\n\n  .pais[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 120;\n  }\n\n  #div-volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL3VuaXJzZS1wYWlzL3VuaXJzZS1wYWlzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hcmlvbG96YW5vY29ydGVzL1VuaXZlcnNpZGFkX0xvY2FsL1RyaXBtZWZ5L3NyYy9hcHAvdmlhamVzL3VuaXJzZS1wYWlzL3VuaXJzZS1wYWlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLHVCQUFBO0FEUko7QUNVQSxzQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEUEo7QUNVQTtFQUNHLGFBQUE7QURQSDtBQ1VBO0VBQ0ksd0lBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURQSjtBQ1VBO0VBRUksZUFBQTtFQUdBLHFEQUFBO0FEUko7QUNZQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUNXQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRFJKO0FDWUE7RUFDSSxlQUFBO0VBR0EscURBQUE7QURUSjtBQ1dBO0VBQ0ksd0lBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURSSjtBQ1VBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURQSjtBQ1VBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURQSjtBQ1NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRE5KO0FDUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FETEo7QUNRQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FETEo7QUNRQSxhQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRE5KO0FDU0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUROSjtBQ1NBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQTs7OztJQUFBO0VBS0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUdBLG1DQUFBO0VBRUE7O3dEQUFBO0FETko7QUNXQTtFQUNJOzt1REFBQTtFQUtBLCtDQUFBO0FEUko7QUNZQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURUSjtBQ1dBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdJQUFBO0FEUko7QUNZQTtFQUNJLGlCQUFBO0VBQ0EsY0E3Slc7QURvSmY7QUNXQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEUko7QUNVQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FEUEo7QUNTQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUROSjtBQ1FBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRExKO0FDUUEsZUFBQTtBQUNBO0VBRUk7SUFDSSxhQUFBO0VETk47O0VDUUU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0VETE47O0VDUUU7SUFDSSxhQUFBO0VETE47O0VDT0U7SUFDSSxhQUFBO0VESk47O0VDT0U7SUFDSSxlQUFBO0VESk47O0VDT0U7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUVBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFRExOOztFQ1FFO0lBQ0ksYUFBQTtJQUNBLFVBQUE7RURMTjs7RUNPRTtJQUNJLGFBQUE7RURKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlhamVzL3VuaXJzZS1wYWlzL3VuaXJzZS1wYWlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4vKipCQVJSQSBERSBCw5pTUVVFREEqKi9cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuI2Rpdi12b2x2ZXI6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuI3NlbGVjdC1mOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDFweCAycHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbn1cblxuI2NvbnRpbmVudGVzIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG59XG5cbiNpbWctZiB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnZvbHZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnZvbHZlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbiAgYm94LXNoYWRvdzogM3B4IDFweCAxcHggMnB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG59XG5cbi52b2x2ZXIgaDEge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG4udm9sdmVyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbm5hdiAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4ucmlnaHQgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbm5hdiAuYnVzY2Fkb3IgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnVzY2Fkb3IgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qKkJBTkRFUkFTKiovXG4ubm90Zm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFpcyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8qKnBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAqKi9cbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDMwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIC8qKi13ZWJraXQtYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpOyoqL1xufVxuXG4ucGFpczpob3ZlciB7XG4gIC8qKi13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpOyoqL1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLnBhaXMgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4ucGFpcyBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGFpcyAuZGVzdGFjYWRvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA5Nzg4O1xufVxuXG4ucGFpcyAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyBpbWcge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uaW5mbyAucGVyc29uYXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5wYWlzICNtZW5zYWplIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAudm9sdmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgI3NlbGVjdC1mIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2ltZy1mIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC5wYWlzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cblxuICAucGFpcyBpbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEyMDtcbiAgfVxuXG4gICNkaXYtdm9sdmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcclxuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi8qKkJBUlJBIERFIELDmlNRVUVEQSoqL1xyXG5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI2Rpdi12b2x2ZXI6YWN0aXZle1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuI3NlbGVjdC1mOmhvdmVye1xyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xyXG4gICAgXHJcbn1cclxuXHJcbiNjb250aW5lbnRlc3tcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxufVxyXG5cclxuI2ltZy1me1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcbi52b2x2ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBcclxufVxyXG4udm9sdmVyOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LDEwOCwxMDksMC4zMSk7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDFweCAycHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcclxufVxyXG4udm9sdmVyIGgxe1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG4udm9sdmVyIGltZ3tcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG5uYXYgLnJpZ2h0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcbi5yaWdodCBpbWd7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbm5hdiAuYnVzY2Fkb3IgaW1ne1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idXNjYWRvciBpbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxufVxyXG5cclxuLyoqQkFOREVSQVMqKi9cclxuXHJcbi5ub3Rmb3VuZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXHJcbn1cclxuXHJcbi5wYWlze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC8qKnBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgKiovXHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcclxuXHJcbiAgICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpOyoqL1xyXG5cclxufVxyXG4ucGFpczpob3ZlcntcclxuICAgIC8qKi13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7KiovXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcbi5wYWlzIGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG4ucGFpcyBwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgIFxyXG59XHJcblxyXG4ucGFpcyAuZGVzdGFjYWRve1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJGF6dWwtdmVyZG9zbztcclxufVxyXG4ucGFpcyAuaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmluZm8gaW1ne1xyXG4gICAgaGVpZ2h0OiAxMHB4OyAgIFxyXG4gICAgd2lkdGg6IDEwcHg7XHJcbn1cclxuLmluZm8gLnBlcnNvbmFze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG59XHJcbi5wYWlzICNtZW5zYWple1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKipQQVJBIE3Dk1ZJTCoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XHJcblxyXG4gICAgLnZvbHZlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICNzZWxlY3QtZntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgI2ltZy1me1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnBhaXN7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAucGFpcyBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB3aWR0aDogMTIwO1xyXG4gICAgfVxyXG4gICAgI2Rpdi12b2x2ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICB9XHJcblxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnirsePaisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-unirse-pais',
          templateUrl: './unirse-pais.component.html',
          styleUrls: ['./unirse-pais.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/viajes/viaje/viaje.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/viajes/viaje/viaje.component.ts ***!
    \*************************************************/

  /*! exports provided: ViajeComponent */

  /***/
  function srcAppViajesViajeViajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViajeComponent", function () {
      return ViajeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../interfaces/viaje */
    "./src/app/interfaces/viaje.ts");
    /* harmony import */


    var _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../interfaces/solicitud */
    "./src/app/interfaces/solicitud.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/firestore/usuario-firestore.service */
    "./src/app/services/firestore/usuario-firestore.service.ts");
    /* harmony import */


    var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/firestore/firestore.service */
    "./src/app/services/firestore/firestore.service.ts");
    /* harmony import */


    var _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/firestore/opiniones-firestore.service */
    "./src/app/services/firestore/opiniones-firestore.service.ts");
    /* harmony import */


    var _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/firestore/solicitud-firestore.service */
    "./src/app/services/firestore/solicitud-firestore.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = ["imageUser"];

    function ViajeComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViajeComponent_div_27_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.unirse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Me uno al viaje");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViajeComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViajeComponent_div_28_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.abridPopUpPagar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pagar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViajeComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ya has pagado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViajeComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Solicitud pendiente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViajeComponent_div_72_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViajeComponent_div_72_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.pagar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pagar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViajeComponent_div_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ya has pagado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViajeComponent_div_75_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViajeComponent_div_75_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.close1();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViajeComponent_div_76_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViajeComponent_div_76_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.close1();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buscar m\xE1s viajes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ViajeComponent =
    /*#__PURE__*/
    function () {
      function ViajeComponent(_route, _router, storage, firestoreServiceUser, firestoreServiceViaje, firestoreServiceOpiniones, firestoreServiceSolicitud) {
        _classCallCheck(this, ViajeComponent);

        this._route = _route;
        this._router = _router;
        this.storage = storage;
        this.firestoreServiceUser = firestoreServiceUser;
        this.firestoreServiceViaje = firestoreServiceViaje;
        this.firestoreServiceOpiniones = firestoreServiceOpiniones;
        this.firestoreServiceSolicitud = firestoreServiceSolicitud;
        /* Array de prueba para los carouseles en caso de encontrarse offline
               public slides = [
          { src: "../../../assets/person-1.jpg"},
          { src: "../../../assets/person-2.jpg" },
          { src: "../../../assets/person-3.jpg" },
          { src: "../../../assets/person-4.jpg" },
          { src: "../../../assets/person-5.jpg" },
          { src: "../../../assets/person-6.jpg" }
        ];
               public slides2 = [
          { src: "../../../assets/Amsterdam-01.jpg"},
          { src: "../../../assets/Amsterdam-02.jpg" },
          { src: "../../../assets/Amsterdam-03.jpg" },
          { src: "../../../assets/Amsterdam-04.jpg" }
        ];
        */

        this.slides3 = [];
        this.solicitudes = [];
        this.usuarios_viaje = [];
        this.img_usuarios_viaje = [];
        this.show = true;
        this.payButton = false;
        this.alreadyPaid = false;
        this.pendienteButton = false;
        this.myUrl = "";
        /* Inicializaciones */

        this.viajes = [];
        this.viaje = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__["Viaje"]();
        this.solicitudes = [];
        this.usuarios_viaje = [];
      }
      /* Función que selecciona el tipo de botón a mostar al usuraio en un viaje
         Si el usuario no se ha apuntado y es viajero se le da la opción de apuntarse,
         si el usuario viajero no ha pagado pero está apuntado puede pagar
         si el usuario ya ha pagado no se le muestran los botones pues no los necesita*/


      _createClass(ViajeComponent, [{
        key: "showButtonJoin",
        value: function showButtonJoin(solicitudes) {
          if (localStorage.getItem('tipo') == 'organizador') {
            this.show = false;
          } else {
            // Es tipo viajero y hay que mirar las solicitudes
            for (var i = 0; i < solicitudes.length; i++) {
              if (solicitudes[i].idUsuario == localStorage.getItem('usuario')) {
                this.show = false; // El usuario ya se ha apuntado luego se elimina la posibilidad

                if (solicitudes[i].estado == 'aceptado') {
                  this.payButton = true; //Mostramos botón de pago
                } else if (solicitudes[i].estado == 'pendiente') {
                  this.pendienteButton = true;
                } else if (solicitudes[i].estado == 'pagado') {
                  this.pendienteButton = false; // La solicitud ya no esta pendiente

                  this.payButton = false; // No mostramos botón pago si ya ha pagado

                  this.alreadyPaid = true; // Activamos mensaje de confimración de pago
                }
              }
            }
          }
        }
        /*  Función que une a una persona a la base de datos en el apartado de solicitues para el viaje en cuestión
            Se activa al pinchar sobre el botón de unirse */

      }, {
        key: "unirse",
        value: function unirse() {
          var _this15 = this;

          var new_solicitud = new _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_2__["Solicitud"]();
          new_solicitud.idUsuario = localStorage.getItem('usuario');
          new_solicitud.idViaje = this._route.snapshot.paramMap.get('id');
          new_solicitud.estado = "pendiente";
          this.firestoreServiceViaje.getViaje(this._route.snapshot.paramMap.get('id')).then(function (elem) {
            new_solicitud.idOrganizador = elem.email;

            _this15.firestoreServiceSolicitud.createSolicitud(new_solicitud);
          });
        }
        /* Esta función abre el PopUp de pago */

      }, {
        key: "abridPopUpPagar",
        value: function abridPopUpPagar() {
          document.getElementById("myFormPagar").style.display = "block";
        }
        /* Esta función cierra el PopUp de pago */

      }, {
        key: "close1",
        value: function close1() {
          document.getElementById("myFormPagar").style.display = "none";
        }
        /*  Función que une actualiza en la solicitud de la persona el estado de aceptado a pagado
            Se activa al pinchar sobre el botón de pagar */

      }, {
        key: "pagar",
        value: function pagar() {
          var _this16 = this;

          this.firestoreServiceSolicitud.getSolicitudesByTripId(this._route.snapshot.paramMap.get('id')).subscribe(function (res) {
            var i;
            var new_solicitud = new _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_2__["Solicitud"]();

            for (i = 0; i < res.length; i++) {
              if (res[i].idUsuario == localStorage.getItem('usuario')) {
                new_solicitud = res[i];
                new_solicitud.estado = "pagado";

                _this16.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
              }
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          // El viaje a Roma es: lWdwEvTbnVAptd1xpr3Z
          // Obtenemos el id a partir de la ruta de forma automática
          var tripId = this._route.snapshot.paramMap.get('id');
          /*SI SE INTENTA ACCEDER A ESTA PAGINA SIN HABER INICIADO SESION RETORNAREMOS
          A LA PAGINA PRINCIPAL */


          if (localStorage.getItem('usuario') == null) {
            localStorage.clear();
            console.log("Any user is logged");
            var pagInicio = window.location.origin + '/page1';
            window.location.assign(pagInicio);
          }

          var tripAux = this.firestoreServiceViaje.getViaje(tripId).then(function (elem) {
            var tripAux = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__["Viaje"]();
            tripAux.continente = elem.continente;
            tripAux.ciudad = elem.ciudad;
            tripAux.descripcion = elem.descripcion;
            tripAux.duracion = elem.duracion;
            tripAux.email = elem.email;
            tripAux.fin = elem.fin;
            tripAux.id = elem.id;
            tripAux.img = elem.img;
            tripAux.inicio = elem.inicio;
            tripAux.limitePago = elem.limitePago;
            tripAux.limiteUnion = elem.limiteUnion;
            tripAux.maximo = elem.maximo;
            tripAux.pais = elem.pais;
            tripAux.precio = elem.precio;
            tripAux.servicios = elem.servicios;
            tripAux.tlf = elem.tlf;
            tripAux.unidas = elem.unidas;
            tripAux.viajeros = elem.viajeros; //este valor de momento no es de utilidad

            var tripAux2 = elem;
            _this17.viaje = tripAux;
            /* Esta función devuelve un array de imágenes para el viaje en el que nos encontremos*/

            _this17.firestoreServiceViaje.getSlides(_this17.viaje.id).subscribe(function (res) {
              _this17.slides3 = [];
              var i;

              for (i = 0; i < res.length; i++) {
                _this17.slides3.push({
                  src: res[i].url
                });
              }

              if (_this17.slides3.length == 0) {
                _this17.slides3.push({
                  src: tripAux.img
                });
              }
            });

            _this17.firestoreServiceUser.getUsuariosByEmail(tripAux.email).subscribe(function (res) {
              _this17.nombreOrganizador = res[0].nombre;
            });
            /* Esta función devuelve el array de solicitudes de un viaje */


            _this17.firestoreServiceSolicitud.getSolicitudesByTripId(_this17.viaje.id).subscribe(function (res) {
              _this17.solicitudes = [];
              var i;

              for (i = 0; i < res.length; i++) {
                _this17.solicitudes.push({
                  idUsuario: res[i].idUsuario,
                  estado: res[i].estado
                });
              } // Mostaremos el botón de unirse si el usuario no tiene el viaje entre sus solicitures y es viajero


              _this17.showButtonJoin(_this17.solicitudes);
              /* Esta función devuelve un array con las imagenes de los usuarios en un viaje */


              _this17.firestoreServiceUser.getUsuarios().subscribe(function (res) {
                _this17.usuarios_viaje = [];
                var i, j; // Se recorre el array de solicitudes

                for (i = 0; i < _this17.solicitudes.length; i++) {
                  // Recorremos la base de datos
                  for (j = 0; j < res.length; j++) {
                    // Encontramos el usuario de la solicitud
                    if (_this17.solicitudes[i].idUsuario == res[j].id && (_this17.solicitudes[i].estado == 'aceptado' || _this17.solicitudes[i].estado == 'pagado')) {
                      // Guardamos las imagenes para el carousel
                      _this17.usuarios_viaje.push({
                        src: res[j].image
                      });

                      if (res[j].tipo == 'viajero') {
                        _this17.img_usuarios_viaje.push(['perfil-viajero', res[j].id]);
                      } else {
                        _this17.img_usuarios_viaje.push(['perfil-organizador', res[j].id]);
                      }
                    }
                  }

                  tripAux2.unidas = String(_this17.usuarios_viaje.length);

                  _this17.firestoreServiceViaje.updateViaje(tripAux2);
                }
              });
            });
          });
        }
      }]);

      return ViajeComponent;
    }();

    ViajeComponent.ɵfac = function ViajeComponent_Factory(t) {
      return new (t || ViajeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudFirestoreService"]));
    };

    ViajeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViajeComponent,
      selectors: [["app-viaje"]],
      viewQuery: function ViajeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
        }
      },
      decls: 77,
      vars: 22,
      consts: [["titulo", "Viaje "], [1, "main_container_izq"], [1, "titulo_viaje"], [1, "lugar"], [1, "fotografia_viaje"], [1, "container_carousel1"], [3, "slides"], [1, "informacion_viaje"], [1, "precio", 2, "display", "inline-block"], ["src", "./assets/hotel.png", "height", "10%", "width", "10%", 2, "padding-left", "3%"], ["src", "./assets/plane.png", "height", "10%", "width", "10%", 2, "padding-left", "3%"], ["src", "./assets/fork.png", "height", "10%", "width", "10%", 2, "padding-left", "3%"], [2, "display", "inline-block"], ["src", "./assets/phone.png", "height", "6%", "width", "6%", 2, "padding-right", "3%"], [1, "bold", 2, "display", "inline-block"], ["src", "./assets/envelope.png", "height", "6%", "width", "6%", 2, "padding-right", "3%"], ["class", "button", 4, "ngIf"], [1, "main_container_der"], [1, "organizador"], [1, "bold"], [2, "text-align", "justify", "margin-right", "12%"], [1, "container_carousel2"], [3, "slides", "links"], ["id", "myFormPagar", 1, "form-popup-Viajero"], ["action", "/action_page.php", 1, "form-container"], [1, "mensaje"], [1, "nombre_individuoViajero"], ["class", "eleccion1Viajero", 4, "ngIf"], [1, "button"], ["mat-raised-button", "", "color", "primary", 2, "height", "3em", "width", "10em", 3, "click"], ["mat-stroked-button", "", "disabled", "", 2, "height", "3em", "width", "10em"], ["mat-stroked-button", "", "disabled", "", 2, "height", "3em", "width", "12em"], [1, "eleccion1Viajero"], ["mat-raised-button", "", "color", "warn", 2, "height", "3em", "width", "10em", 3, "click"]],
      template: function ViajeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Viaja a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "carousel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contacta con nostros a traves de:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViajeComponent_div_27_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViajeComponent_div_28_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViajeComponent_div_29_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ViajeComponent_div_30_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Viaje organizado por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Comienza el dia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Termina el dia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Con nosotros ya se vienen:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "carousel", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Termina el d\xEDa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Fecha l\xEDmite de pago: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "form", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\xA1Confirmaci\xF3n para irte de aventura!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \xBFEst\xE1s seguro de que deseas pagar este viaje?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ViajeComponent_div_72_Template, 3, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ViajeComponent_div_73_Template, 3, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ViajeComponent_div_75_Template, 3, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ViajeComponent_div_76_Template, 3, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.ciudad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.viaje.precio, "\u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.tlf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alreadyPaid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pendienteButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nombreOrganizador);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.inicio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.fin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.duracion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.viaje.descripcion, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.usuarios_viaje)("links", ctx.img_usuarios_viaje);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.limiteUnion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.limitePago);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alreadyPaid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.payButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alreadyPaid);
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_10__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n.main_container_izq[_ngcontent-%COMP%] {\n  float: left;\n  width: 43%;\n  margin-top: 4%;\n  padding-left: 7%;\n}\n.main_container_der[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  margin-top: 4%;\n}\n.container_carousel1[_ngcontent-%COMP%] {\n  display: block;\n  height: 20em;\n  width: 85%;\n}\n.container_carousel2[_ngcontent-%COMP%] {\n  display: block;\n  height: 15em;\n  width: 50%;\n  margin: 2% 25%;\n  margin-top: 4%;\n  margin-bottom: 7%;\n}\n.lugar[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-weight: bold;\n}\n.informacion_viaje[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.precio[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-size: 3em;\n  margin-top: 2%;\n}\n.organizador[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-weight: bold;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.button[_ngcontent-%COMP%] {\n  margin-left: 27%;\n  margin-top: 4%;\n}\n.texto[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-right: 12%;\n}\n.form-popup-Viajero[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  left: 35%;\n  top: 23%;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n.form-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: white;\n  width: 400px;\n}\n.nombre_individuoViajero[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 5%;\n}\n.eleccion1Viajero[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-left: 30%;\n}\n.form-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n.form-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, .form-container[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: red;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 10em;\n  margin-bottom: 10px;\n  opacity: 0.8;\n  margin-left: 30%;\n}\n.form-container[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n}\n.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .open-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n@media screen and (max-device-width: 700px) {\n  .main_container_izq[_ngcontent-%COMP%], .main_container_der[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 2.5%;\n    padding-left: 0%;\n  }\n\n  .container_carousel1[_ngcontent-%COMP%], .container_carousel2[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .container_carousel2[_ngcontent-%COMP%] {\n    margin: 0%;\n    margin-bottom: 5%;\n  }\n\n  .texto[_ngcontent-%COMP%] {\n    margin-right: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL3ZpYWplL3ZpYWplLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hcmlvbG96YW5vY29ydGVzL1VuaXZlcnNpZGFkX0xvY2FsL1RyaXBtZWZ5L3NyYy9hcHAvdmlhamVzL3ZpYWplL3ZpYWplLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQUt6QjtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEUEY7QUNVQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBRFBGO0FDVUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QURQSjtBQ1VBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRFBKO0FDVUE7RUFDRSxjQWhDUTtFQWlDUixpQkFBQTtBRFBGO0FDVUE7RUFDRSxjQUFBO0FEUEY7QUNVQTtFQUNFLGNBekNRO0VBMENSLGNBQUE7RUFDQSxjQUFBO0FEUEY7QUNVQTtFQUNFLGNBL0NRO0VBZ0RSLGlCQUFBO0FEUEY7QUNVQTtFQUNFLGlCQUFBO0FEUEY7QUNVQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRFBGO0FDVUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FEUEY7QUNVQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QURQRjtBQ1VBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBRFBGO0FDVUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEUEY7QUNVQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEUEY7QUNVQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURQRjtBQ1VBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FEUEY7QUNVQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURQRjtBQ1VBO0VBQ0UseUJBQUE7QURQRjtBQ1VBO0VBQ0UsVUFBQTtBRFBGO0FDVUEsZUFBQTtBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VEUEY7O0VDU0E7SUFDRSxVQUFBO0VETkY7O0VDUUE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RURMRjs7RUNPQTtJQUNFLGdCQUFBO0VESkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYWplcy92aWFqZS92aWFqZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4ubWFpbl9jb250YWluZXJfaXpxIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MyU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBwYWRkaW5nLWxlZnQ6IDclO1xufVxuXG4ubWFpbl9jb250YWluZXJfZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDQlO1xufVxuXG4uY29udGFpbmVyX2Nhcm91c2VsMSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDIwZW07XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5jb250YWluZXJfY2Fyb3VzZWwyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAyJSAyNSU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tYm90dG9tOiA3JTtcbn1cblxuLmx1Z2FyIHtcbiAgY29sb3I6ICMwM2E5ZjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5mb3JtYWNpb25fdmlhamUge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnByZWNpbyB7XG4gIGNvbG9yOiAjMDNhOWY0O1xuICBmb250LXNpemU6IDNlbTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5vcmdhbml6YWRvciB7XG4gIGNvbG9yOiAjMDNhOWY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNyU7XG4gIG1hcmdpbi10b3A6IDQlO1xufVxuXG4udGV4dG8ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tcmlnaHQ6IDEyJTtcbn1cblxuLmZvcm0tcG9wdXAtVmlhamVybyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMzUlO1xuICB0b3A6IDIzJTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgei1pbmRleDogOTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLm5vbWJyZV9pbmRpdmlkdW9WaWFqZXJvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmVsZWNjaW9uMVZpYWplcm8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS1jb250YWluZXIgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMGVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsIC5vcGVuLWJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNzAwcHgpIHtcbiAgLm1haW5fY29udGFpbmVyX2l6cSwgLm1haW5fY29udGFpbmVyX2RlciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDIuNSU7XG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgfVxuXG4gIC5jb250YWluZXJfY2Fyb3VzZWwxLCAuY29udGFpbmVyX2Nhcm91c2VsMiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG4gIC5jb250YWluZXJfY2Fyb3VzZWwyIHtcbiAgICBtYXJnaW46IDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG5cbiAgLnRleHRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICB9XG59IiwiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XHJcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xyXG4kYmxhbmNvOiAjZmZmZmZmO1xyXG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cclxuJGdyaXM6ICNjZmQ4ZGM7XHJcbiRuYXJhbmphOiAjZjRhNTAwO1xyXG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cclxuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXHJcbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xyXG4kbGV0dGVyczogIzAzYTlmNDtcclxuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcclxuXHJcbi5tYWluX2NvbnRhaW5lcl9penF7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDogNDMlO1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIHBhZGRpbmctbGVmdDogNyU7XHJcbn1cclxuXHJcbi5tYWluX2NvbnRhaW5lcl9kZXJ7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcblxyXG4uY29udGFpbmVyX2Nhcm91c2VsMSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMjBlbTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG5cclxuLmNvbnRhaW5lcl9jYXJvdXNlbDIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAyJSAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDclO1xyXG59XHJcblxyXG4ubHVnYXIge1xyXG4gIGNvbG9yOiAkbGV0dGVycztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluZm9ybWFjaW9uX3ZpYWple1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4ucHJlY2lve1xyXG4gIGNvbG9yOiAkbGV0dGVycztcclxuICBmb250LXNpemU6IDNlbTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLm9yZ2FuaXphZG9ye1xyXG4gIGNvbG9yOiAkbGV0dGVycztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG5cclxuLnRleHRve1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IFxyXG4gIG1hcmdpbi1yaWdodDogMTIlO1xyXG59XHJcblxyXG4uZm9ybS1wb3B1cC1WaWFqZXJvIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAzNSU7XHJcbiAgdG9wOjIzJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5ub21icmVfaW5kaXZpZHVvVmlhamVyb3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uZWxlY2Npb24xVmlhamVyb3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMGVtO1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIC5jYW5jZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsIC5vcGVuLWJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyoqUEFSQSBNw5NWSUwqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MDBweCl7XHJcbiAgLm1haW5fY29udGFpbmVyX2l6cSwgLm1haW5fY29udGFpbmVyX2RlcntcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDIuNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gIH1cclxuICAuY29udGFpbmVyX2Nhcm91c2VsMSwgLmNvbnRhaW5lcl9jYXJvdXNlbDIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcl9jYXJvdXNlbDIge1xyXG4gICAgbWFyZ2luOjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIC50ZXh0b3tcclxuICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-viaje',
          templateUrl: './viaje.component.html',
          styleUrls: ['./viaje.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]
        }, {
          type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]
        }, {
          type: _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]
        }, {
          type: _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudFirestoreService"]
        }];
      }, {
        inputImageUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['imageUser']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyCXDQ9k3UnMGVE_zrLZLijro-U9hdrQglU",
        authDomain: "tripmefy-c7857.firebaseapp.com",
        databaseURL: "https://tripmefy-c7857.firebaseio.com",
        projectId: "tripmefy-c7857",
        storageBucket: "tripmefy-c7857.appspot.com",
        messagingSenderId: "106995985515",
        appId: "1:106995985515:web:3242c6e367a437516cd52e",
        measurementId: "G-782LX8ZY7Y"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mariolozanocortes/Universidad_Local/Tripmefy/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map