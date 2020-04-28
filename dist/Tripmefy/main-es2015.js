(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-sesion/inicio-sesion.component */ "./src/app/inicio-sesion/inicio-sesion.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfiles/perfil-organizador/perfil-organizador.component */ "./src/app/perfiles/perfil-organizador/perfil-organizador.component.ts");
/* harmony import */ var _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfiles/perfil-viajero/perfil-viajero.component */ "./src/app/perfiles/perfil-viajero/perfil-viajero.component.ts");
/* harmony import */ var _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viajes/crear-viaje/crear-viaje.component */ "./src/app/viajes/crear-viaje/crear-viaje.component.ts");
/* harmony import */ var _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viajes/mis-viajes/mis-viajes.component */ "./src/app/viajes/mis-viajes/mis-viajes.component.ts");
/* harmony import */ var _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viajes/unirse-ciudad/unirse-ciudad.component */ "./src/app/viajes/unirse-ciudad/unirse-ciudad.component.ts");
/* harmony import */ var _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viajes/unirse-pais/unirse-pais.component */ "./src/app/viajes/unirse-pais/unirse-pais.component.ts");
/* harmony import */ var _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viajes/unirse-continente/unirse-continente.component */ "./src/app/viajes/unirse-continente/unirse-continente.component.ts");
/* harmony import */ var _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viajes/viaje/viaje.component */ "./src/app/viajes/viaje/viaje.component.ts");
/* harmony import */ var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found404/not-found404.component */ "./src/app/not-found404/not-found404.component.ts");
/* harmony import */ var _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./privacidad/privacidad.component */ "./src/app/privacidad/privacidad.component.ts");
/* harmony import */ var _logros_logros_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logros/logros.component */ "./src/app/logros/logros.component.ts");
/* harmony import */ var _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bienvenida/bienvenida.component */ "./src/app/bienvenida/bienvenida.component.ts");
/* harmony import */ var _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/pedir-imagen/pedir-imagen.component */ "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");
/* harmony import */ var _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pruebas/pruebas.component */ "./src/app/pruebas/pruebas.component.ts");





















const routes = [
    { path: 'page1', component: _page1_page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"] },
    { path: 'inicio-sesion', component: _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_3__["InicioSesionComponent"] },
    { path: 'registro', component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_4__["RegistroComponent"] },
    { path: 'perfil-organizador/:id', component: _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_5__["PerfilOrganizadorComponent"] },
    { path: 'perfil-viajero/:id', component: _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_6__["PerfilViajeroComponent"] },
    { path: 'crear-viaje', component: _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_7__["CrearViajeComponent"] },
    { path: 'mis-viajes', component: _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_8__["MisViajesComponent"] },
    { path: 'unirse-ciudad/:id', component: _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_9__["UnirseCiudadComponent"] },
    { path: 'unirse-pais', component: _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_10__["UnirsePaisComponent"] },
    { path: 'unirse-continente', component: _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_11__["UnirseContinenteComponent"] },
    { path: 'viaje/:id', component: _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_12__["ViajeComponent"] },
    { path: 'privacidad', component: _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_14__["PrivacidadComponent"] },
    { path: 'not-found404', component: _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_13__["NotFound404Component"] },
    { path: 'logros', component: _logros_logros_component__WEBPACK_IMPORTED_MODULE_15__["LogrosComponent"] },
    { path: 'bienvenida', component: _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_16__["BienvenidaComponent"] },
    { path: 'pedir-imagen', component: _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_17__["PedirImagenComponent"] },
    { path: 'pruebas', component: _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_18__["PruebasComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'page1' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Tripmefy';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "general-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./inicio-sesion/inicio-sesion.component */ "./src/app/inicio-sesion/inicio-sesion.component.ts");
/* harmony import */ var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./not-found404/not-found404.component */ "./src/app/not-found404/not-found404.component.ts");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./privacidad/privacidad.component */ "./src/app/privacidad/privacidad.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./perfiles/perfil-organizador/perfil-organizador.component */ "./src/app/perfiles/perfil-organizador/perfil-organizador.component.ts");
/* harmony import */ var _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./perfiles/perfil-viajero/perfil-viajero.component */ "./src/app/perfiles/perfil-viajero/perfil-viajero.component.ts");
/* harmony import */ var _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./viajes/crear-viaje/crear-viaje.component */ "./src/app/viajes/crear-viaje/crear-viaje.component.ts");
/* harmony import */ var _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./viajes/mis-viajes/mis-viajes.component */ "./src/app/viajes/mis-viajes/mis-viajes.component.ts");
/* harmony import */ var _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./viajes/unirse-ciudad/unirse-ciudad.component */ "./src/app/viajes/unirse-ciudad/unirse-ciudad.component.ts");
/* harmony import */ var _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./viajes/unirse-continente/unirse-continente.component */ "./src/app/viajes/unirse-continente/unirse-continente.component.ts");
/* harmony import */ var _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./viajes/unirse-pais/unirse-pais.component */ "./src/app/viajes/unirse-pais/unirse-pais.component.ts");
/* harmony import */ var _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./viajes/viaje/viaje.component */ "./src/app/viajes/viaje/viaje.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _logros_logros_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./logros/logros.component */ "./src/app/logros/logros.component.ts");
/* harmony import */ var _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./bienvenida/bienvenida.component */ "./src/app/bienvenida/bienvenida.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./shared/volver/volver.component */ "./src/app/shared/volver/volver.component.ts");
/* harmony import */ var _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./shared/boton/boton.component */ "./src/app/shared/boton/boton.component.ts");
/* harmony import */ var _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./shared/scroll-top/scroll-top.component */ "./src/app/shared/scroll-top/scroll-top.component.ts");
/* harmony import */ var _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./shared/pedir-imagen/pedir-imagen.component */ "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");
/* harmony import */ var _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pruebas/pruebas.component */ "./src/app/pruebas/pruebas.component.ts");
/* harmony import */ var _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./shared/puntuacion-pu/puntuacion-pu.component */ "./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts");
/* harmony import */ var _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./shared/comentario-pu/comentario-pu.component */ "./src/app/shared/comentario-pu/comentario-pu.component.ts");
/* harmony import */ var _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./shared/edicion-pu/edicion-pu.component */ "./src/app/shared/edicion-pu/edicion-pu.component.ts");
/* harmony import */ var _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./shared/mensaje/mensaje.component */ "./src/app/shared/mensaje/mensaje.component.ts");













// ELEMENTOS UI ESPECÍFICOS:






















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase),
            _angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__["AngularFireStorageModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_28__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__["ModalModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"],
        _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_34__["InicioSesionComponent"],
        _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_35__["NotFound404Component"],
        _page1_page1_component__WEBPACK_IMPORTED_MODULE_36__["Page1Component"],
        _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_37__["PrivacidadComponent"],
        _registro_registro_component__WEBPACK_IMPORTED_MODULE_38__["RegistroComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__["FooterComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_40__["HeaderComponent"],
        _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_41__["PerfilOrganizadorComponent"],
        _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_42__["PerfilViajeroComponent"],
        _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_43__["CrearViajeComponent"],
        _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_44__["MisViajesComponent"],
        _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_45__["UnirseCiudadComponent"],
        _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_46__["UnirseContinenteComponent"],
        _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_47__["UnirsePaisComponent"],
        _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_48__["ViajeComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_49__["CarouselComponent"],
        _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__["VolverComponent"],
        _logros_logros_component__WEBPACK_IMPORTED_MODULE_50__["LogrosComponent"],
        _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_51__["BienvenidaComponent"],
        _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__["VolverComponent"],
        _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_55__["ScrollTopComponent"],
        _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_54__["BotonComponent"],
        _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_56__["PedirImagenComponent"],
        _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_57__["PruebasComponent"],
        _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_58__["PuntuacionPuComponent"],
        _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_59__["ComentarioPuComponent"],
        _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_60__["EdicionPuComponent"],
        _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__["MensajeComponent"]], imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"], _angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__["AngularFireStorageModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_28__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__["ModalModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"],
                    _inicio_sesion_inicio_sesion_component__WEBPACK_IMPORTED_MODULE_34__["InicioSesionComponent"],
                    _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_35__["NotFound404Component"],
                    _page1_page1_component__WEBPACK_IMPORTED_MODULE_36__["Page1Component"],
                    _privacidad_privacidad_component__WEBPACK_IMPORTED_MODULE_37__["PrivacidadComponent"],
                    _registro_registro_component__WEBPACK_IMPORTED_MODULE_38__["RegistroComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__["FooterComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_40__["HeaderComponent"],
                    _perfiles_perfil_organizador_perfil_organizador_component__WEBPACK_IMPORTED_MODULE_41__["PerfilOrganizadorComponent"],
                    _perfiles_perfil_viajero_perfil_viajero_component__WEBPACK_IMPORTED_MODULE_42__["PerfilViajeroComponent"],
                    _viajes_crear_viaje_crear_viaje_component__WEBPACK_IMPORTED_MODULE_43__["CrearViajeComponent"],
                    _viajes_mis_viajes_mis_viajes_component__WEBPACK_IMPORTED_MODULE_44__["MisViajesComponent"],
                    _viajes_unirse_ciudad_unirse_ciudad_component__WEBPACK_IMPORTED_MODULE_45__["UnirseCiudadComponent"],
                    _viajes_unirse_continente_unirse_continente_component__WEBPACK_IMPORTED_MODULE_46__["UnirseContinenteComponent"],
                    _viajes_unirse_pais_unirse_pais_component__WEBPACK_IMPORTED_MODULE_47__["UnirsePaisComponent"],
                    _viajes_viaje_viaje_component__WEBPACK_IMPORTED_MODULE_48__["ViajeComponent"],
                    _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_49__["CarouselComponent"],
                    _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__["VolverComponent"],
                    _logros_logros_component__WEBPACK_IMPORTED_MODULE_50__["LogrosComponent"],
                    _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_51__["BienvenidaComponent"],
                    _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_53__["VolverComponent"],
                    _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_55__["ScrollTopComponent"],
                    _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_54__["BotonComponent"],
                    _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_56__["PedirImagenComponent"],
                    _pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_57__["PruebasComponent"],
                    _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_58__["PuntuacionPuComponent"],
                    _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_59__["ComentarioPuComponent"],
                    _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_60__["EdicionPuComponent"],
                    _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__["MensajeComponent"],
                ],
                imports: [
                    _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].firebase),
                    _angular_common__WEBPACK_IMPORTED_MODULE_52__["CommonModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_24__["AngularFireStorageModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_28__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_29__["TooltipModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_30__["ModalModule"].forRoot(),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bienvenida/bienvenida.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bienvenida/bienvenida.component.ts ***!
  \****************************************************/
/*! exports provided: BienvenidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaComponent", function() { return BienvenidaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/boton/boton.component */ "./src/app/shared/boton/boton.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return ["/mis-viajes"]; };
class BienvenidaComponent {
    constructor() {
        this.textoMotivacion = "";
        this.textoAccion = "";
        this.textoViajero = [
            {
                'motivacion': '¡Hola viajero! ¿Estás cansado del mismo rollo de siempre? Organizar un viaje durante meses para que acabe saliendo mal, o peor, que ni siquiera acabe llevándose a cabo. Las agencias de viajes son costosas y las ofertas no suelen adaptarse a lo buscado. Pues estás de suerte, porque has llegado a la página que satisface todas tus necesidades. Busca ofertas de agencias, únete y vete de viaje con gente como tú. ¿A qué esperas? ¡Y no olvides rellenar tu perfil! será la forma de conocerte para los demás viajeros. ¿A qué esperas? Dale al botón y comienza a vivir aventuras inolvidables con gente diferente y al mejor precio.',
                'accion': 'Busca tu primera aventura'
            }
        ];
        this.textoOrganizador = [
            {
                'motivacion': '¡Hola organizador! Atraer a la gente cada vez es más complicado. Internet ha puesto al alcance de cualquiera organizar un viaje, y los jóvenes no quieren destinar una parte del dinero a las comisiones de las agencias. Con Tripmefy tendrás la oportunidad de acercar tu negocio a un público joven, subiendo ofertas de baja demanda, permitiras unirse a millones de usuarios que querrán llevar a cabo ese viaje. Los pagos se realizan de forma totalmente segura através de paypal, además, podrás aceptar o rechazar a los solicitantes basándote en su perfil, comentarios y puntuaciones. Consigue visibilidad entre el público joven, vende más y lleva tu negocio al siguiente nivel. ¿A qué esperas? Haz click en crear y sube tu primera oferta ',
                'accion': 'Sube tu primera oferta'
            }
        ];
    }
    ngOnInit() {
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
        let usuario = localStorage.getItem('tipo');
        /**Este switch evalua la variable usuario y decide qué texto mostrar */
        switch (usuario) {
            case 'viajero':
                this.textoMotivacion = this.textoViajero[0]["motivacion"];
                this.textoAccion = this.textoViajero[0]["accion"];
                break;
            case 'organizador':
                this.textoMotivacion = this.textoOrganizador[0]["motivacion"];
                this.textoAccion = this.textoOrganizador[0]["accion"];
                break;
            default:
                this.textoMotivacion = this.textoViajero[0]["motivacion"];
                this.textoAccion = this.textoViajero[0]["accion"];
                break;
        }
    }
}
BienvenidaComponent.ɵfac = function BienvenidaComponent_Factory(t) { return new (t || BienvenidaComponent)(); };
BienvenidaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BienvenidaComponent, selectors: [["app-bienvenida"]], decls: 13, vars: 4, consts: [["titulo", "Aqu\u00ED empieza todo"], [1, "contenido"], [1, "tarjeta"], [1, "principal"], ["id", "video", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/_xJWESxbP0k", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "inferior"], ["texto", "COMENZAR", 3, "routerLink"]], template: function BienvenidaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A1 Bienvenido !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-boton", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textoMotivacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textoAccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_2__["BotonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".contenido[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.tarjeta[_ngcontent-%COMP%] {\n  height: 40%;\n  width: 90%;\n  margin-top: 50px;\n}\n.tarjeta[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  text-align: center;\n  font-weight: bolder;\n  color: #009788;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.tarjeta[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-between;\n}\n.principal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 50%;\n  font-weight: lighter;\n  text-align: justify;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.principal[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 200px;\n}\n.tarjeta[_ngcontent-%COMP%]   .inferior[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  text-align: center;\n}\n.inferior[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.inferior[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #009788;\n  color: #ffffff;\n  font-weight: bolder;\n}\n.inferior[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 2px 0px #cfd8dc;\n}\n@media screen and (max-device-width: 480px) {\n  .tarjeta[_ngcontent-%COMP%]   .principal[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .principal[_ngcontent-%COMP%]   #video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .principal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .tarjeta[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n\n  .tarjeta[_ngcontent-%COMP%]   .inferior[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9iaWVudmVuaWRhL2JpZW52ZW5pZGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JpZW52ZW5pZGEvYmllbnZlbmlkYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIscUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBT3pCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNWSjtBRGFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEWUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQWxCVztFQW1CWCx3SUFBQTtBQ1RKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ1JKO0FEVUE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdJQUFBO0FDUEo7QURTQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDTko7QURTQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSx3SUFBQTtBQ0xKO0FET0E7RUFDSSxrQkFBQTtFQUNBLHlCQS9DVztFQWdEWCxjQXpESztFQTBETCxtQkFBQTtBQ0pKO0FETUE7RUFHSSxtQ0FBQTtBQ0hKO0FETUE7RUFFQTtJQUNJLGVBQUE7RUNKRjs7RURPRjtJQUNJLFdBQUE7RUNKRjs7RURNRjtJQUNJLFdBQUE7RUNIRjs7RURLRjtJQUNJLGVBQUE7RUNGRjs7RURJRjtJQUNJLGVBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmllbnZlbmlkYS9iaWVudmVuaWRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcbiRibGFuY286ICNmZmZmZmY7XG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbiRncmlzOiAjY2ZkOGRjO1xuJG5hcmFuamE6ICNmNGE1MDA7XG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XG4kbGV0dGVyczogIzAzYTlmNDtcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xuXG5cbi5jb250ZW5pZG97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFyamV0YXtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4udGFyamV0YSBoMXtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG4udGFyamV0YSAucHJpbmNpcGFse1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJpbmNpcGFsIHB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG4ucHJpbmNpcGFsICN2aWRlb3tcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi50YXJqZXRhIC5pbmZlcmlvcntcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbmZlcmlvciBoMntcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG4uaW5mZXJpb3IgYnV0dG9ue1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC12ZXJkb3NvO1xuICAgIGNvbG9yOiAkYmxhbmNvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uaW5mZXJpb3IgYnV0dG9uOmhvdmVye1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuXG4udGFyamV0YSAucHJpbmNpcGFse1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnByaW5jaXBhbCAjdmlkZW97XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJpbmNpcGFsIHB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGFyamV0YXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGFyamV0YSAuaW5mZXJpb3J7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG59IiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jb250ZW5pZG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhcmpldGEge1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRhcmpldGEgaDEge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjMDA5Nzg4O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4udGFyamV0YSAucHJpbmNpcGFsIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJpbmNpcGFsIHAge1xuICB3aWR0aDogNTAlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnByaW5jaXBhbCAjdmlkZW8ge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4udGFyamV0YSAuaW5mZXJpb3Ige1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZlcmlvciBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5pbmZlcmlvciBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk3ODg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uaW5mZXJpb3IgYnV0dG9uOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggI2NmZDhkYztcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggI2NmZDhkYztcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4ICNjZmQ4ZGM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAudGFyamV0YSAucHJpbmNpcGFsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAucHJpbmNpcGFsICN2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucHJpbmNpcGFsIHAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRhcmpldGEge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC50YXJqZXRhIC5pbmZlcmlvciB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BienvenidaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bienvenida',
                templateUrl: './bienvenida.component.html',
                styleUrls: ['./bienvenida.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CarouselComponent_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_1_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r86.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("@carouselAnimation", undefined);
} }
function CarouselComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_img_1_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r87 = ctx.index;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r87 === ctx_r85.currentSlide);
} }
class CarouselComponent {
    constructor(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
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
    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
        //console.log("previous clicked, new current slide is: ", this.currentSlide);
    }
    onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
        //console.log("next clicked, new current slide is: ", this.currentSlide);
    }
    onClick() {
        if (this.links == undefined || this.links.length <= 0) {
            //si no tenemos links devolvemos un cero y ya, no hacemos nada
            return 0;
        }
        else {
            //si tenemos links hacemos lo siguiente
            var origin = window.location.origin + '/'; //obtenemos la parte de la izquierda de la url
            //var datos = window.location.pathname;
            //var routerLink = datos.split('/');
            var primero = this.links[this.currentSlide][0] + '/'; //primero corresponde a la primera posicion del slide donde estemos
            var segundo = this.links[this.currentSlide][1];
            //var segundo = 'yhySIyMyRGwIqtwEeuZV';
            this.primero = primero;
            this.segundo = segundo;
            var destino = origin + primero + segundo;
            window.location.assign(destino);
        }
    }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { slides: "slides", links: "links" }, decls: 6, vars: 2, consts: [[1, "carousel"], [4, "ngFor", "ngForOf"], [1, "control", "prev", 3, "click"], [1, "arrow", "left"], [1, "control", "next", 3, "click"], [1, "arrow", "right"], ["class", "slide", 3, "src", "click", 4, "ngIf"], [1, "slide", 3, "src", "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_2_listener() { return ctx.onPreviousClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_4_listener() { return ctx.onNextClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides)("ngForOf", ctx.misLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.5em;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  border-radius: 0.5em;\n}\n\n.slide[_ngcontent-%COMP%]:hover {\n  transform: scale(1.025);\n}\n\n.control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 3em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  \n}\n\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n}\n\n.control.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.control.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n\n\n.arrow[_ngcontent-%COMP%] {\n  display: block;\n  border-left: 0.1em solid white;\n  border-bottom: 0.1em solid white;\n  width: 0.5em;\n  height: 0.5em;\n}\n\n.arrow.left[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.arrow.right[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxPQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUVBLGdFQUFBO0VBQ0Esb0JBQUE7QUNKSjs7QURPRTtFQUNFLHVCQUFBO0FDSko7O0FEVUU7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSw4REFBQTtFQU1BLHlCQUFBO0FDYko7O0FEU0k7RUFDRSxVQUFBO0FDUE47O0FEV0k7RUFDRSxRQUFBO0FDVE47O0FEV0k7RUFDRSxPQUFBO0FDVE47O0FEYUUscUJBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVko7O0FEWUk7RUFDRSx3QkFBQTtBQ1ZOOztBRFlJO0VBQ0UseUJBQUE7QUNWTiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2Fyb3VzZWxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuOmhvc3Qge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgXG4gIC5jYXJvdXNlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICB9XG4gIFxuICAuc2xpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gem9vbSBlZmZlY3Qgb24gaG92ZXJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICB9XG4gIFxuICAuc2xpZGU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xuICB9XG4gIFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIE5leHQgYW5kIFByZXYgYnV0dG9uc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC5jb250cm9sIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogMDsgLy8gcmVtb3ZlIGJsdWUgb3V0bGluZSBib3JkZXIsIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmUgc3RpbGwgZm9jdXNzYWJsZSBmb3IgYWNjZXNzaWJpbGl0eVxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogODAlO1xuICAgIC8vIG9wYWNpdHkgZWZmZWN0IG9uIGhvdmVyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XG4gIFxuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIC8qIFBvc2l0aW9uIHRoZSBidXR0b25zICovXG4gICAgJi5uZXh0IHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAmLnByZXYge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIHN0eWxlIHRoZSBhcnJvd3MgKi9cbiAgLmFycm93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItbGVmdDogMC4xZW0gc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgd2hpdGU7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGhlaWdodDogMC41ZW07XG4gIFxuICAgICYubGVmdCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICB9XG4gIH1cblxuICBcbiIsIjpob3N0IHtcbiAgZmxleDogMTtcbn1cblxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLnNsaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLnNsaWRlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XG59XG5cbi5jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDgwJTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XG4gIC8qIFBvc2l0aW9uIHRoZSBidXR0b25zICovXG59XG4uY29udHJvbDpob3ZlciwgLmNvbnRyb2w6Zm9jdXMge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRyb2wubmV4dCB7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbnRyb2wucHJldiB7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIHN0eWxlIHRoZSBhcnJvd3MgKi9cbi5hcnJvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogMC4xZW0gc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHdoaXRlO1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG59XG4uYXJyb3cubGVmdCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5hcnJvdy5yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('carouselAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "carousel",
                templateUrl: "./carousel.component.html",
                styleUrls: ["./carousel.component.scss"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('carouselAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], links: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/inicio-sesion/inicio-sesion.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inicio-sesion/inicio-sesion.component.ts ***!
  \**********************************************************/
/*! exports provided: InicioSesionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionComponent", function() { return InicioSesionComponent; });
/* harmony import */ var src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/usuario */ "./src/app/interfaces/usuario.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/volver/volver.component */ "./src/app/shared/volver/volver.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












class InicioSesionComponent {
    constructor(route, authSvc, userService) {
        this.route = route;
        this.authSvc = authSvc;
        this.userService = userService;
        this.hide = true;
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['/page1']);
    }
    onLogin() {
        var form = new src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]();
        form.email = this.email;
        form.password = this.password;
        this.authSvc.loginByEmail(form);
        this.userService.getUsuariosByEmail(this.email).subscribe(res => {
            var i;
            for (i = 0; i < res.length; i++) { //nunca va a haber más de un usuario con ese email
                localStorage.setItem("usuario", res[i].id);
                localStorage.setItem("tipo", res[i].tipo);
            }
        });
    }
    checkFields() {
        if (this.password === '' || this.email === '' || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.email)) {
            return true;
        }
        else {
            return false;
        }
    }
}
InicioSesionComponent.ɵfac = function InicioSesionComponent_Factory(t) { return new (t || InicioSesionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"])); };
InicioSesionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InicioSesionComponent, selectors: [["app-inicio-sesion"]], decls: 30, vars: 7, consts: [[1, "contenedor"], [1, "lateral-izq"], ["src", "../../assets/tripmefy.png"], [1, "lateral-drch"], [1, "volver", 3, "click"], [3, "ngSubmit"], [1, "inicio_datos"], [1, "input"], ["matInput", "", "placeholder", "Ej. pat@example.com", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "input"], ["matInput", "", "name", "password", "required", "", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "boton_inicio"], ["type", "submit", "mat-raised-button", "", 1, "boton", 2, "width", "200px", 3, "disabled"], ["href", "/registro"]], template: function InicioSesionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-volver", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InicioSesionComponent_Template_app_volver_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "INICIO DE SESI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function InicioSesionComponent_Template_form_ngSubmit_7_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InicioSesionComponent_Template_input_ngModelChange_12_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Introduce tu contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InicioSesionComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InicioSesionComponent_Template_button_click_18_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " INICIAR SESI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00BFA\u00FAn no est\u00E1s registrado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Reg\u00EDstrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_5__["VolverComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n.contenedor[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.lateral-izq[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 50%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n\n.lateral-drch[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#004cbe, #0da8de);\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n  background-attachment: fixed;\n  overflow: scroll;\n  padding-top: 15%;\n  padding-left: 20px;\n  color: white;\n}\n.lateral-drch[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: none;\n}\n.lateral-drch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #004cbe;\n}\n.volver[_ngcontent-%COMP%] {\n  color: white;\n}\n.inicio_datos[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n.input[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.boton_inicio[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2%;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: white !important;\n}\n .mat-form-field-underline {\n  \n  background-color: white !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: white !important;\n}\n\n  input.mat-input-element {\n  color: white;\n}\n\n@media screen and (max-device-width: 700px) {\n  \n  .contenedor[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    display: inline-block;\n    background-color: #ffffff;\n    height: 620px;\n  }\n\n  \n  .lateral-izq[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: auto;\n    height: 70%;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70%;\n  }\n\n  \n  .lateral-drch[_ngcontent-%COMP%] {\n    background-image: none;\n    background-color: #ffffff;\n    width: auto;\n    height: 30%;\n    padding-bottom: 20px;\n  }\n\n  .lateral-drch[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    display: block;\n    text-align: center;\n    font-weight: bold;\n    color: #03a9f4;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  }\n\n  .inicio_datos[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 0%;\n  }\n\n  .input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .boton_inicio[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 0%;\n    margin-bottom: 5%;\n  }\n\n    .mat-focused .mat-form-field-label {\n    \n    color: #004cbe !important;\n  }\n\n   .mat-form-field-underline {\n    \n    background-color: #004cbe !important;\n  }\n\n   .mat-form-field-ripple {\n    \n    background-color: #004cbe !important;\n  }\n\n  \n    input.mat-input-element {\n    color: #004cbe;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvLXNlc2lvbi9pbmljaW8tc2VzaW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2V1Z2VuaW9nYXJjaWFkZWxhcm9zYS9naXRodWIvc2FyYXlncmppbS9UcmlwbWVmeS9zcmMvYXBwL2luaWNpby1zZXNpb24vaW5pY2lvLXNlc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNJTyxxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFJekIsdUNBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3SUFBQTtBRFBKO0FDWUEsMkNBQUE7QUFDQTtFQUNJLHlCQXhCSztFQXlCTCxVQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEVko7QUNhQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7QURYSjtBQ2VBLDZDQUFBO0FBQ0E7RUFDRSxtREFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEWkY7QUNnQkE7RUFDRSxhQUFBO0FEYkY7QUNnQkE7RUFDRSxxQkFBQTtFQUNBLGNBcEVXO0FEdURiO0FDZ0JBO0VBQ0UsWUFBQTtBRGJGO0FDZ0JBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRGJGO0FDZ0JBO0VBQ0UsVUFBQTtBRGJGO0FDZ0JBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FEYko7QUNpQkE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FEZEY7QUNpQkM7RUFDQyw0QkFBQTtFQUNBLGtDQUFBO0FEZEY7QUNpQkE7RUFDQyx5Q0FBQTtFQUNBLGtDQUFBO0FEZEQ7QUNpQkEsc0JBQUE7QUFDQTtFQUNFLFlBQUE7QURkRjtBQytFQSxlQUFBO0FBQ0E7RUFFRSx1Q0FBQTtFQUNFO0lBQ0ksZUFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQW5MQztJQW9MRCxhQUFBO0VEN0VOOztFQ2dGQSwyQ0FBQTtFQUNFO0lBQ0kseUJBekxDO0lBMExELFdBQUE7SUFDQSxXQUFBO0VEN0VOOztFQ2dGRTtJQUNJLFdBQUE7RUQ3RU47O0VDZ0ZFLDZDQUFBO0VBQ0E7SUFDSSxzQkFBQTtJQUNBLHlCQXJNQztJQXNNRCxXQUFBO0lBQ0EsV0FBQTtJQUVBLG9CQUFBO0VEOUVOOztFQ2tGRTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQXBOSTtJQXFOSix3SUFBQTtFRC9FSjs7RUNrRkU7SUFDRSxrQkFBQTtJQUNBLGNBQUE7RUQvRUo7O0VDa0ZFO0lBQ0UsVUFBQTtFRC9FSjs7RUNrRkU7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFRC9FSjs7RUNtRkU7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VEaEZKOztFQ21GRztJQUNDLDRCQUFBO0lBQ0Esb0NBQUE7RURoRko7O0VDbUZFO0lBQ0MseUNBQUE7SUFDQSxvQ0FBQTtFRGhGSDs7RUNtRkUsc0JBQUE7RUFDQTtJQUNFLGNBeFBPO0VEd0tYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8tc2VzaW9uL2luaWNpby1zZXNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLyoqLS0tLS1DT05URU5FRE9SIFkgRlVFTlRFIENPTcOaTi0tLS0qKi9cbi5jb250ZW5lZG9yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qKi0tLS1MQVRFUkFMIElaUVVJRVJETyBERSBMQSBQw4FHSU5BLS0tLSoqL1xuLmxhdGVyYWwtaXpxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxhdGVyYWwtaXpxIGltZyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8qKi0tLS0tLUxBVEVSQUwgREVSRUNITyBERSBMQSBQw4FHSU5BLS0tLS0tKiovXG4ubGF0ZXJhbC1kcmNoIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDRjYmUsICMwZGE4ZGUpO1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sYXRlcmFsLWRyY2ggaDEge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGF0ZXJhbC1kcmNoIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA0Y2JlO1xufVxuXG4udm9sdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5pY2lvX2RhdG9zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogMzAlO1xufVxuXG4uYm90b25faW5pY2lvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4vKiBpbnB1dCBjb2xvciBjbGFzcyAqL1xuOjpuZy1kZWVwIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDcwMHB4KSB7XG4gIC8qKi0tLS0tQ09OVEVORURPUiBZIEZVRU5URSBDT03Dmk4tLS0tKiovXG4gIC5jb250ZW5lZG9yIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiA2MjBweDtcbiAgfVxuXG4gIC8qKi0tLS1MQVRFUkFMIElaUVVJRVJETyBERSBMQSBQw4FHSU5BLS0tLSoqL1xuICAubGF0ZXJhbC1penEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cblxuICAubGF0ZXJhbC1penEgaW1nIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxuXG4gIC8qKi0tLS0tLUxBVEVSQUwgREVSRUNITyBERSBMQSBQw4FHSU5BLS0tLS0tKiovXG4gIC5sYXRlcmFsLWRyY2gge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5sYXRlcmFsLWRyY2ggaDEge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDNhOWY0O1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAuaW5pY2lvX2RhdG9zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gIH1cblxuICAuaW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAuYm90b25faW5pY2lvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICAgIGNvbG9yOiAjMDA0Y2JlICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjYmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjYmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIGlucHV0IGNvbG9yIGNsYXNzICovXG4gIDo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY29sb3I6ICMwMDRjYmU7XG4gIH1cbn0iLCIkYXp1bC1jbGFybzogIzBkYThkZTtcbiRsZXR0ZXJzOiAjMDNhOWY0O1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuXG5cbi8qKi0tLS0tQ09OVEVORURPUiBZIEZVRU5URSBDT03Dmk4tLS0tKiovXG4uY29udGVuZWRvcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG5cblxufVxuXG4vKiotLS0tTEFURVJBTCBJWlFVSUVSRE8gREUgTEEgUMOBR0lOQS0tLS0qKi9cbi5sYXRlcmFsLWl6cXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sYXRlcmFsLWl6cSBpbWd7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cblxuLyoqLS0tLS0tTEFURVJBTCBERVJFQ0hPIERFIExBIFDDgUdJTkEtLS0tLS0qKi9cbi5sYXRlcmFsLWRyY2h7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYXp1bC1yb3lhbCwgJGF6dWwtY2xhcm8pO1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7ICAgIFxufVxuXG5cbi5sYXRlcmFsLWRyY2ggaDF7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYXRlcmFsLWRyY2ggYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjokYXp1bC1yb3lhbDtcbn1cblxuLnZvbHZlcntcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5pY2lvX2RhdG9ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pbnB1dHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmJvdG9uX2luaWNpb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG5cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuIH1cblxuIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSBcblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLyogaW5wdXQgY29sb3IgY2xhc3MgKi9cbjo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4vLyAvKipQQVJBIFRBQkxFVCoqLyAvL05PIFRJRU5FIFNFTlRJRE8gVEVORVIgRVNUTyBTSSBOTyBTRSBJTVBMRU1FTlRBIEVOIE5JTkdVTiBTSVRJTyBNw4FTXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkge1xuXG4vLyAgIC5jb250ZW5lZG9ye1xuLy8gICAgICAgZmxleC13cmFwOiB3cmFwO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xuLy8gICAgICAgaGVpZ2h0OiA2MjBweDtcbi8vICAgfVxuICBcbi8vICAgLmxhdGVyYWwtaXpxe1xuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcbi8vICAgICAgIHdpZHRoOiBhdXRvO1xuLy8gICAgICAgaGVpZ2h0OiA3MCU7XG5cbiAgICAgXG4gIFxuLy8gICB9XG4vLyAgIC5sYXRlcmFsLWl6cSBpbWd7XG4vLyAgICAgICBoZWlnaHQ6IDcwJTtcbi8vICAgfVxuLy8gICAubGF0ZXJhbC1kcmNoe1xuLy8gICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XG4vLyAgICAgICB3aWR0aDogYXV0bztcbi8vICAgICAgIGhlaWdodDogMzAlO1xuXG4vLyAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgXG4vLyAgIH1cblxuLy8gICAuYm90b25faW5pY2lve1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBtYXJnaW4tdG9wOjAlO1xuLy8gICB9XG5cbi8vICAgLmZvcm11bGFyaW97XG4vLyAgICAgd2lkdGg6IDcwJTtcbi8vICAgfVxuXG4vLyAgIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbi8vICAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4vLyAgICAgY29sb3I6ICRhenVsLXJveWFsICFpbXBvcnRhbnQ7XG4vLyAgICB9XG4gIFxuLy8gICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4vLyAgICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1yb3lhbCAhaW1wb3J0YW50O1xuLy8gICB9IFxuICBcbi8vICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4vLyAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbi8vICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXJveWFsICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIGlucHV0IGNvbG9yIGNsYXNzICovXG4vLyAgIDo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4vLyAgICAgY29sb3I6JGF6dWwtcm95YWw7XG4vLyAgIH1cbi8vIH1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzAwcHgpIHtcblxuICAvKiotLS0tLUNPTlRFTkVET1IgWSBGVUVOVEUgQ09Nw5pOLS0tLSoqL1xuICAgIC5jb250ZW5lZG9ye1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XG4gICAgICAgIGhlaWdodDogNjIwcHg7XG4gICAgfVxuICAgIFxuICAvKiotLS0tTEFURVJBTCBJWlFVSUVSRE8gREUgTEEgUMOBR0lOQS0tLS0qKi9cbiAgICAubGF0ZXJhbC1penF7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICB9XG5cbiAgICAubGF0ZXJhbC1penEgaW1ne1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICB9XG5cbiAgICAvKiotLS0tLS1MQVRFUkFMIERFUkVDSE8gREUgTEEgUMOBR0lOQS0tLS0tLSoqL1xuICAgIC5sYXRlcmFsLWRyY2h7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDMwJTtcblxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICBcbiAgICB9XG5cbiAgICAubGF0ZXJhbC1kcmNoIGgxe1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogJGxldHRlcnM7XG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIC5pbmljaW9fZGF0b3N7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOjAlO1xuICAgIH1cblxuICAgIC5pbnB1dHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuXG4gICAgLmJvdG9uX2luaWNpb3tcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1JTtcblxuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgICAgIGNvbG9yOiAkYXp1bC1yb3lhbCAhaW1wb3J0YW50O1xuICAgICB9XG4gICAgXG4gICAgIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXJveWFsICFpbXBvcnRhbnQ7XG4gICAgfSBcbiAgICBcbiAgICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXJveWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC8qIGlucHV0IGNvbG9yIGNsYXNzICovXG4gICAgOjpuZy1kZWVwIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICAgIGNvbG9yOiRhenVsLXJveWFsO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InicioSesionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-inicio-sesion',
                templateUrl: './inicio-sesion.component.html',
                styleUrls: ['./inicio-sesion.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interfaces/opiniones.ts":
/*!*****************************************!*\
  !*** ./src/app/interfaces/opiniones.ts ***!
  \*****************************************/
/*! exports provided: Puntuacion, Comentario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Puntuacion", function() { return Puntuacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comentario", function() { return Comentario; });
class Puntuacion {
    constructor(o) {
        //this.id='';
        if (o !== undefined)
            Object.assign(this, o);
    }
}
class Comentario {
    constructor(o) {
        //this.id='';
        if (o !== undefined)
            Object.assign(this, o);
    }
}


/***/ }),

/***/ "./src/app/interfaces/solicitud.ts":
/*!*****************************************!*\
  !*** ./src/app/interfaces/solicitud.ts ***!
  \*****************************************/
/*! exports provided: Solicitud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solicitud", function() { return Solicitud; });
class Solicitud {
    constructor(o) {
        if (o !== undefined)
            Object.assign(this, o);
    }
}
;


/***/ }),

/***/ "./src/app/interfaces/usuario.ts":
/*!***************************************!*\
  !*** ./src/app/interfaces/usuario.ts ***!
  \***************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
    //los comentarios se buscarán con el id del comentado
    constructor(o) {
        //this.id='';
        if (o !== undefined)
            Object.assign(this, o);
    }
}


/***/ }),

/***/ "./src/app/interfaces/viaje.ts":
/*!*************************************!*\
  !*** ./src/app/interfaces/viaje.ts ***!
  \*************************************/
/*! exports provided: Viaje, Slides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viaje", function() { return Viaje; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slides", function() { return Slides; });
;
class Viaje {
    constructor(o) {
        //this.id='';
        if (o !== undefined)
            Object.assign(this, o);
    }
}
;
class Slides {
    constructor(o) {
        //this.id='';
        if (o !== undefined)
            Object.assign(this, o);
    }
}


/***/ }),

/***/ "./src/app/logros/logros.component.ts":
/*!********************************************!*\
  !*** ./src/app/logros/logros.component.ts ***!
  \********************************************/
/*! exports provided: LogrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogrosComponent", function() { return LogrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LogrosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const logro_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/", logro_r73["img"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](logro_r73["nombre"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](logro_r73["descripcion"]);
} }
class LogrosComponent {
    constructor() {
        this.logros = [
            {
                'nombre': 'Súper viajero',
                'descripcion': 'Has estado en todos los continentes',
                'img': 'logros/logro1.png',
                'activado': 'no'
            },
            {
                'nombre': 'Viajero amigo',
                'descripcion': 'Has hecho un viaje con más de seis personas',
                'img': 'logros/logro2.png',
                'activado': 'no'
            },
            {
                'nombre': 'Europa',
                'descripcion': 'Has estado en Europa',
                'img': 'logros/logro3.png',
                'activado': 'no'
            },
            {
                'nombre': 'Asia',
                'descripcion': 'Has estado en Asia',
                'img': 'logros/logro4.png',
                'activado': 'no'
            },
            {
                'nombre': 'África',
                'descripcion': 'Has estado en África',
                'img': 'logros/logro5.png',
                'activado': 'no'
            },
            {
                'nombre': 'Oceanía',
                'descripcion': 'Has estado en Oceanía',
                'img': 'logros/logro6.png',
                'activado': 'no'
            },
            {
                'nombre': 'América del Norte',
                'descripcion': 'Has estado en América del Norte',
                'img': 'logros/logro7.png',
                'activado': 'no'
            },
            {
                'nombre': 'América del Sur',
                'descripcion': 'Has estado en América del Sur',
                'img': 'logros/logro8.png',
                'activado': 'no'
            },
            {
                'nombre': 'América Central',
                'descripcion': 'Has estado en América Central',
                'img': 'logros/logro9.png',
                'activado': 'no'
            },
        ];
    }
    ngOnInit() {
    }
}
LogrosComponent.ɵfac = function LogrosComponent_Factory(t) { return new (t || LogrosComponent)(); };
LogrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogrosComponent, selectors: [["app-logros"]], decls: 3, vars: 1, consts: [["titulo", "Tus logros"], [1, "contenido"], ["class", "logro", 4, "ngFor", "ngForOf"], [1, "logro"], [1, "activa"], [3, "src"], ["id", "titulo"], ["id", "descripci\u00F3n"]], template: function LogrosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogrosComponent_div_2_Template, 7, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logros);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@charset \"UTF-8\";\n\n\n\n.contenido[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.contenido[_ngcontent-%COMP%]   .logro[_ngcontent-%COMP%] {\n  height: 258px;\n  width: 155px;\n  margin: 20px;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n}\n.contenido[_ngcontent-%COMP%]   .logro[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\nimg[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  width: 150px;\n}\n.activa[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.inactiva[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.logro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.logro[_ngcontent-%COMP%]   #titulo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #009788;\n}\n\n@media screen and (max-device-width: 480px) {\n  .logro[_ngcontent-%COMP%] {\n    margin-left: 40%;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncm9zL2xvZ3Jvcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9sb2dyb3MvbG9ncm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRFJKO0FDV0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBR0EsbUNBQUE7QURUSjtBQ1lBO0VBR0ksK0NBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEVEo7QUNhQTtFQUNJLFlBQUE7QURWSjtBQ1lBO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtBRFRKO0FDWUE7RUFDSSx3SUFBQTtBRFRKO0FDYUE7RUFDSSxpQkFBQTtFQUNBLGNBaERXO0FEc0NmO0FDYUEsZUFBQTtBQUNBO0VBRUk7SUFDSSxnQkFBQTtJQUVBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RURaTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9ncm9zL2xvZ3Jvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4uY29udGVuaWRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbnRlbmlkbyAubG9ncm8ge1xuICBoZWlnaHQ6IDI1OHB4O1xuICB3aWR0aDogMTU1cHg7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbn1cblxuLmNvbnRlbmlkbyAubG9ncm86aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uYWN0aXZhIGltZyB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmluYWN0aXZhIGltZyB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4ubG9ncm8gcCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dybyAjdGl0dWxvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA5Nzg4O1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC5sb2dybyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cbn0iLCIkYXp1bC1jbGFybzogIzBkYThkZTtcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xuJGJsYW5jbzogI2ZmZmZmZjtcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuJGdyaXM6ICNjZmQ4ZGM7XG4kbmFyYW5qYTogI2Y0YTUwMDtcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcbiRsZXR0ZXJzOiAjMDNhOWY0O1xuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcbiRhenVsLXZlcmRvc286ICMwMDk3ODg7XG5cbi5jb250ZW5pZG97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbnRlbmlkbyAubG9ncm97XG4gICAgaGVpZ2h0OiAyNThweDtcbiAgICB3aWR0aDogMTU1cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xufVxuXG4uY29udGVuaWRvIC5sb2dybzpob3ZlcntcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbmltZ3tcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIC8vb3BhY2l0eTogMC40O1xuICAgIC8vZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG4uYWN0aXZhIGltZ3tcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG4uaW5hY3RpdmEgaW1ne1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4ubG9ncm8gcHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5sb2dybyAjdGl0dWxve1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuICAgIFxuICAgIC5sb2dyb3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcblxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICB9XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logros',
                templateUrl: './logros.component.html',
                styleUrls: ['./logros.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/not-found404/not-found404.component.ts":
/*!********************************************************!*\
  !*** ./src/app/not-found404/not-found404.component.ts ***!
  \********************************************************/
/*! exports provided: NotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return NotFound404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFound404Component {
    constructor() {
        this.titulo = "Parece que no hay nada por aquí";
    }
    ngOnInit() {
    }
}
NotFound404Component.ɵfac = function NotFound404Component_Factory(t) { return new (t || NotFound404Component)(); };
NotFound404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFound404Component, selectors: [["app-not-found404"]], inputs: { titulo: "titulo" }, decls: 4, vars: 1, consts: [[1, "mensaje"], ["src", "../../../assets/warning.png"]], template: function NotFound404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
    } }, styles: ["@charset \"UTF-8\";\n\n\n\n.mensaje[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  margin-top: 150px;\n  margin-left: 210px;\n  color: #009788;\n  text-align: left;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 750px;\n  font-size: xxx-large;\n  line-height: 1.5;\n  margin-left: 50px;\n}\n.mensaje[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13%;\n  height: 13%;\n}\n\n@media screen and (max-device-width: 480px) {\n  .mensaje[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-left: 40px;\n  }\n\n  .mensaje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 300px;\n    font-size: medium;\n    margin-top: 10px;\n    margin-left: 10px;\n  }\n\n  .mensaje[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15%;\n    height: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kNDA0L25vdC1mb3VuZDQwNC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9ub3QtZm91bmQ0MDQvbm90LWZvdW5kNDA0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQVBXO0VBUVgsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdJQUFBO0FEUko7QUNVQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURQSjtBQ1NBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUROSjtBQ1NBLGVBQUE7QUFDQTtFQUVJO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFRFBOOztFQ1NFO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFRE5OOztFQ1FFO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RURMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kNDA0L25vdC1mb3VuZDQwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4ubWVuc2FqZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMjEwcHg7XG4gIGNvbG9yOiAjMDA5Nzg4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1lbnNhamUgcCB7XG4gIHdpZHRoOiA3NTBweDtcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4ubWVuc2FqZSBpbWcge1xuICB3aWR0aDogMTMlO1xuICBoZWlnaHQ6IDEzJTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAubWVuc2FqZSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuXG4gIC5tZW5zYWplIHAge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLm1lbnNhamUgaW1nIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMTUlO1xuICB9XG59IiwiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcbiRibGFuY286ICNmZmZmZmY7XG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbiRncmlzOiAjY2ZkOGRjO1xuJG5hcmFuamE6ICNmNGE1MDA7XG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XG4kbGV0dGVyczogIzAzYTlmNDtcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xuXG4ubWVuc2FqZXtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xuICAgIGNvbG9yOiAkYXp1bC12ZXJkb3NvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cbi5tZW5zYWplIHB7XG4gICAgd2lkdGg6IDc1MHB4O1xuICAgIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4ubWVuc2FqZSBpbWd7XG4gICAgd2lkdGg6IDEzJTtcbiAgICBoZWlnaHQ6IDEzJTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIHtcblxuICAgIC5tZW5zYWple1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG4gICAgLm1lbnNhamUgcHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5tZW5zYWplIGltZ3tcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgfVxuICAgIFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFound404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found404',
                templateUrl: './not-found404.component.html',
                styleUrls: ['./not-found404.component.scss']
            }]
    }], function () { return []; }, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/inicio-sesion"]; };
const _c1 = function () { return ["/registro"]; };
class Page1Component {
    constructor() {
    }
    ngOnInit() {
    }
}
Page1Component.ɵfac = function Page1Component_Factory(t) { return new (t || Page1Component)(); };
Page1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page1Component, selectors: [["app-page1"]], decls: 12, vars: 4, consts: [[1, "contenedor"], [1, "lateral-izq"], ["src", "../../assets/tripmefy.png"], [1, "lateral-drch"], [1, "boton_inicio"], ["mat-raised-button", "", 1, "boton", 2, "width", "200px", 3, "routerLink"], [1, "boton_registro"]], template: function Page1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "INICIAR SESI\u00D3N");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n.contenedor[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.contenedor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.lateral-izq[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 50%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n\n.lateral-drch[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#004cbe, #0da8de);\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n  background-attachment: fixed;\n  overflow: scroll;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #004cbe;\n}\n.boton_inicio[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50%;\n}\n.boton_registro[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2%;\n}\n\n@media screen and (max-device-width: 700px) {\n  .contenedor[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    display: inline-block;\n    background-color: #ffffff;\n    height: 350px;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: auto;\n    height: 100%;\n    margin-top: 20%;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    height: 70%;\n  }\n\n  .lateral-drch[_ngcontent-%COMP%] {\n    background-image: none;\n    background-color: #ffffff;\n    width: auto;\n    height: 20%;\n    background-attachment: fixed;\n    overflow: unset;\n  }\n\n  .boton_inicio[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTEvcGFnZTEuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZXVnZW5pb2dhcmNpYWRlbGFyb3NhL2dpdGh1Yi9zYXJheWdyamltL1RyaXBtZWZ5L3NyYy9hcHAvcGFnZTEvcGFnZTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBSXpCLDhCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FETko7QUNZQTtFQUNJLHdJQUFBO0FEVEo7QUNZQTtFQUNJLHFCQUFBO0FEVEo7QUNZQSxtQ0FBQTtBQUNBO0VBQ0kseUJBaENLO0VBaUNMLFVBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURWSjtBQ2FBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtBRFhKO0FDaUJBLGlDQUFBO0FBQ0E7RUFDSSxtREFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBRGRKO0FDa0JBO0VBQ0kscUJBQUE7RUFDQSxjQXZFUztBRHdEYjtBQ2tCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBRGZKO0FDaUJBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FEZEo7QUNtQkEsZUFBQTtBQUNBO0VBR0k7SUFDSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EseUJBNUZDO0lBNkZELGFBQUE7RURsQk47O0VDcUJFO0lBQ0kseUJBakdDO0lBa0dELFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFRGxCTjs7RUNxQkU7SUFDSSxnQkFBQTtJQUNBLFdBQUE7RURsQk47O0VDcUJFO0lBQ0ksc0JBQUE7SUFDQSx5QkE5R0M7SUErR0QsV0FBQTtJQUNBLFdBQUE7SUFDQSw0QkFBQTtJQUNBLGVBQUE7RURsQk47O0VDb0JFO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VEakJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlMS9wYWdlMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4vKipDT05URU5FRE9SIFkgRlVFTlRFIENPTcOaTioqL1xuLmNvbnRlbmVkb3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNvbnRlbmVkb3IgcCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qKkxBVEVSQUwgSVpRVUlFUkRPIERFIExBIFDDgUdJTkEqKi9cbi5sYXRlcmFsLWl6cSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5sYXRlcmFsLWl6cSBpbWcge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vKipMQVRFUkFMIERFUkVDSE8gREUgTEEgUMOBR0lOQSoqL1xuLmxhdGVyYWwtZHJjaCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDA0Y2JlLCAjMGRhOGRlKTtcbiAgd2lkdGg6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA0Y2JlO1xufVxuXG4uYm90b25faW5pY2lvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG5cbi5ib3Rvbl9yZWdpc3RybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNzAwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICB9XG5cbiAgLmxhdGVyYWwtaXpxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cblxuICAubGF0ZXJhbC1penEgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGhlaWdodDogNzAlO1xuICB9XG5cbiAgLmxhdGVyYWwtZHJjaCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMjAlO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xuICB9XG5cbiAgLmJvdG9uX2luaWNpbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuXG5cbi8qKkNPTlRFTkVET1IgWSBGVUVOVEUgQ09Nw5pOKiovXG4uY29udGVuZWRvcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgXG5cbn1cblxuLmNvbnRlbmVkb3IgcHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyoqTEFURVJBTCBJWlFVSUVSRE8gREUgTEEgUMOBR0lOQSoqL1xuLmxhdGVyYWwtaXpxe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxhdGVyYWwtaXpxIGltZ3tcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBcblxufVxuXG5cbi8qKkxBVEVSQUwgREVSRUNITyBERSBMQSBQw4FHSU5BKiovXG4ubGF0ZXJhbC1kcmNoe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYXp1bC1yb3lhbCwgJGF6dWwtY2xhcm8pO1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICBcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6JGF6dWwtcm95YWw7XG59XG5cbi5ib3Rvbl9pbmljaW97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbn1cbi5ib3Rvbl9yZWdpc3Ryb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMiU7XG59XG5cblxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MDBweCkge1xuXG5cbiAgICAuY29udGVuZWRvcntcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIH1cblxuICAgIC5sYXRlcmFsLWl6cXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIH1cblxuICAgIC5sYXRlcmFsLWl6cSBpbWd7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGhlaWdodDo3MCU7XG4gICAgfVxuXG4gICAgLmxhdGVyYWwtZHJjaHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBvdmVyZmxvdzogdW5zZXQ7ICBcbiAgICB9XG4gICAgLmJvdG9uX2luaWNpb3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page1',
                templateUrl: './page1.component.html',
                styleUrls: ['./page1.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/perfiles/perfil-organizador/perfil-organizador.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/perfiles/perfil-organizador/perfil-organizador.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PerfilOrganizadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilOrganizadorComponent", function() { return PerfilOrganizadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/usuario */ "./src/app/interfaces/usuario.ts");
/* harmony import */ var _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/opiniones */ "./src/app/interfaces/opiniones.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firestore/opiniones-firestore.service */ "./src/app/services/firestore/opiniones-firestore.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/puntuacion-pu/puntuacion-pu.component */ "./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts");
/* harmony import */ var _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/comentario-pu/comentario-pu.component */ "./src/app/shared/comentario-pu/comentario-pu.component.ts");
/* harmony import */ var _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/edicion-pu/edicion-pu.component */ "./src/app/shared/edicion-pu/edicion-pu.component.ts");
/* harmony import */ var _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/mensaje/mensaje.component */ "./src/app/shared/mensaje/mensaje.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/boton/boton.component */ "./src/app/shared/boton/boton.component.ts");


















const _c0 = ["descripcion"];
const _c1 = ["imageUser"];
function PerfilOrganizadorComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilOrganizadorComponent_img_15_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.editar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilOrganizadorComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.usuario.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PerfilOrganizadorComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
} }
function PerfilOrganizadorComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Este usuario no tiene valoraciones a\u00FAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilOrganizadorComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilOrganizadorComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilOrganizadorComponent_app_boton_37_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-boton", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilOrganizadorComponent_app_boton_37_Template_app_boton_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.puntuar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilOrganizadorComponent_img_41_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilOrganizadorComponent_img_41_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.comentar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
function PerfilOrganizadorComponent_div_42_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const comment_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", comment_r17["photo"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, comment_r17["tipo-url"], comment_r17["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r17["person"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r17["comment"]);
} }
class PerfilOrganizadorComponent {
    constructor(_route, _router, storage, firestoreServiceUser, firestoreServiceViaje, firestoreServiceOpiniones, _activatedRoute, zone) {
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
        this.susViajes = [];
        //almacena los id
        this.slides = [
            { src: "../../../assets/noViajes.png" },
        ]; //almacena las imagenes en el formato del carrusel
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
        this.nuevaDescripcion = "";
        //****permisos****/
        this.permisoOpinar = false; //si el usuario tiene permiso para opinar es true
        this.permisoEditar = false; //si el usuario tiene permiso para editar es true
        this.usuarios = [];
        this.usuario = new src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
    }
    reload() {
        window.location.reload();
        window.scrollTo(0, 0);
    }
    //es necesario activar las opiniones si se quiere comentar y puntuar
    activarOpiniones() {
        this.permisoOpinar = true;
    }
    //es necesario activar la edición si se quiere editar la descripción o la foto de perfil
    activarEdicion(visitanteId) {
        this.permisoEditar = true;
    }
    //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
    //que accede
    puntuar() {
        document.getElementById("puntuar").style.display = "block";
    }
    //resultante del evento cerrar de los componentes pu
    cerrar(cerrado, id) {
        if (cerrado == true) {
            document.getElementById(id).style.display = "none";
        }
    }
    //resultante del evento puntuacion del componente hijo puntuacion-pu
    newPuntuacion(puntos) {
        if (puntos > -1) {
            var puntuacion = new _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__["Puntuacion"]();
            puntuacion.puntuacion = puntos.toString();
            puntuacion.puntuador = localStorage.getItem('usuario');
            puntuacion.puntuado = this._route.snapshot.paramMap.get('id');
            this.firestoreServiceOpiniones.createPuntuacion(puntuacion);
            document.getElementById("graciasP").style.display = "block";
        }
        document.getElementById("puntuar").style.display = "none";
    }
    //resultante del evento puntuacion del comentario hijo comentario-pu
    newComentario(comment) {
        if (comment != "") {
            var comentario = new _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__["Comentario"]();
            comentario.comentario = comment;
            comentario.comentador = localStorage.getItem('usuario');
            comentario.comentado = this._route.snapshot.paramMap.get('id');
            this.firestoreServiceOpiniones.createComentario(comentario);
            document.getElementById("graciasC").style.display = "block";
        }
        document.getElementById("comentar").style.display = "none";
    }
    //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
    //que accede
    comentar() {
        document.getElementById("comentar").style.display = "block";
    }
    //activa el botón de comentarios, es llamada cuando el usuario propietario es el mismo que el usuario
    //que accede
    editar() {
        document.getElementById("editar").style.display = "block";
    }
    //resultante del evento foto del componente edicion-p
    setFoto(foto) {
        this.nuevaFoto = foto;
        if (this.nuevaFoto != "" && this.nuevaFoto != undefined) {
            this.usuario.image = foto;
        }
    }
    //resultante del evento newDescripcion del componente edicion-p
    setDescripcion(desc) {
        this.nuevaDescripcion = desc;
        if (this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined) {
            this.usuario.descripcion = desc;
        }
    }
    //resultante del evento signal del componente edicion-pu
    uploadUser(signal) {
        if (this.nuevaFoto != "" && this.nuevaFoto != undefined) {
            //alert(this.nuevaFoto);
            this.usuario.image = this.nuevaFoto;
        }
        if (this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined) {
            //alert(this.nuevaDescripcion);
            this.usuario.descripcion = this.nuevaDescripcion;
        }
        //es necesario crear un objeto para que el set funcione
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
            "image": this.usuario.image,
        };
        this.firestoreServiceUser.updateUsuario(actualizar);
        document.getElementById("editOk").style.display = "block";
        return true;
    }
    ngOnInit() {
        var visitanteId = localStorage.getItem('usuario'); //hace referencia al usuario que está navegando 
        var userId = this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil
        if (visitanteId == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
        }
        //utilizo la subscripción a activatedRoute para que se actualice el pefil de haber cambios en la ruta
        this._activatedRoute.paramMap.subscribe((params) => {
            userId = params['id'];
            //this.reload();
            if (userId == undefined) {
                userId = this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil;
            }
            window.scrollTo(0, 0);
            var usuarioAux = this.firestoreServiceUser.getUsuario(userId).then((elem) => {
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
                this.descripcion = elem.descripcion;
                usuarioAux.tipo = elem.tipo;
                usuarioAux.nombre = elem.nombre;
                usuarioAux.apellidos = elem.apellidos;
                usuarioAux.password = elem.password;
                usuarioAux.estrellas = elem.estrellas;
                usuarioAux.image = elem.image;
                this.usuario = usuarioAux;
                this.firestoreServiceOpiniones.getPuntuacionesFiltered(this.usuario.id).subscribe(res => {
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
                        this.stars = 0;
                        this.emptystars = this.maxStars;
                    }
                    else {
                        var i;
                        var media = 0;
                        for (i = 0; i < res.length; i++) {
                            media = media + parseInt(res[i].puntuacion);
                        }
                        media = Math.round(media / res.length); //es necesario redondear, no podemos rellenar media estrella
                        this.stars = media;
                        this.emptystars = this.maxStars - media;
                        //de esta forma, en el html ya no aparecerá el comentario de 'no hay puntuaciones'
                        this.usuario.estrellas = "0";
                        //se requiere una variable auxiliar para que no salte el error DocumentReference.set() al llamar
                        //a updateUsuario
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
                    }
                });
                this.firestoreServiceOpiniones.getComentariosFiltered(this.usuario.id).subscribe(res => {
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
                    this.comentarios = [];
                    var i;
                    for (i = 0; i < res.length; i++) {
                        this.comentarios.push({
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
                        this.tuplasComentario.push([comment, res[i].comentador, true]);
                        var contador = 0;
                        var usuarioAux = this.firestoreServiceUser.getUsuario(res[i].comentador).then((elem) => {
                            img = elem.image;
                            this.comentarios[contador]["photo"] = img;
                            nombre = elem.nombre;
                            this.comentarios[contador]["person"] = nombre;
                            idUser = elem.id;
                            this.comentarios[contador]["id"] = idUser;
                            tipo = elem.tipo;
                            if (tipo == 'organizador') {
                                this.comentarios[contador]["tipo-url"] = '/perfil-organizador/';
                            }
                            else {
                                this.comentarios[contador]["tipo-url"] = '/perfil-viajero/';
                            }
                            var n;
                            for (n = 0; n < this.tuplasComentario.length; n++) {
                                if (this.tuplasComentario[n][1] == this.comentarios[contador]["id"] && this.comentarios[contador]["comment"] == "" && this.tuplasComentario[n][2]) {
                                    this.comentarios[contador]["comment"] = this.tuplasComentario[n][0];
                                    this.tuplasComentario[n][2] = false;
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
                this.firestoreServiceViaje.getViajesByEmail(this.usuario.email).subscribe(res => {
                    if (res.length > 0) {
                        this.susViajes = [];
                        this.slides = []; //esto es para que no aparezca la imagen de no hay viajes si hay viajes
                        var i;
                        for (i = 0; i < res.length; i++) {
                            this.slides.push({ src: res[i].img });
                            this.susViajes.push(['viaje', res[i].id]);
                        }
                    }
                    else {
                        this.slides = [
                            { src: "../../../assets/noViajes.png" },
                        ];
                    }
                });
            });
        });
        /**Deben establecerse los permisos de opinión y edición. Para ello comprobamos los id del usuario
         * propietario del perfil y el visitante
        */
        if (userId != visitanteId) {
            this.activarOpiniones(); //si el usuario está visitando un perfil distinto del suyo, puede comentar y puntuar
        }
        else {
            this.titulo = "TU PERFIL";
            this.activarEdicion(visitanteId); //si el usuario está visitando su perfil, puede editarlo
        }
    }
    ngOnDestroy() {
        //this.s_usuarios.unsubscribe();
    }
}
PerfilOrganizadorComponent.ɵfac = function PerfilOrganizadorComponent_Factory(t) { return new (t || PerfilOrganizadorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
PerfilOrganizadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerfilOrganizadorComponent, selectors: [["app-perfil-organizador"]], viewQuery: function PerfilOrganizadorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newDescripcion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
    } }, decls: 48, vars: 17, consts: [[3, "titulo"], ["id", "puntuar", 3, "cerrado", "puntuacion"], ["id", "comentar", 3, "cerrado", "comentario"], ["id", "editar", "user", "usuario", 3, "descripcion", "cerrado", "newDescripcion", "foto", "signal"], ["id", "graciasC", "mensaje", "\u00A1 Gracias por comentar !", "imagen", "../../../assets/comment.png", 3, "cerrado"], ["id", "graciasP", "mensaje", "\u00A1 Gracias por puntuar !", "imagen", "../../../assets/ok.png", 3, "cerrado"], ["id", "editOk", "mensaje", "\u00A1 Has modificado tu perfil !", "imagen", "../../../assets/usuario.png", 3, "cerrado"], ["id", "general"], ["id", "div1"], ["id", "tarjeta"], [1, "little_container_izq"], [1, "name"], ["id", "img-editar", "src", "../../../assets/engranaje.png", 3, "click", 4, "ngIf"], [1, "texto_perfil"], ["src", "../../../assets/location.png", 2, "height", "7%", "width", "7%"], [1, "little_container_der"], ["style", "display: inline-block; max-width: 200px; max-height: 200px; ", 3, "src", 4, "ngIf"], ["src", "../../../assets/usuario.png", "style", "display: inline-block; max-width: 100px; max-height: 100px; ", 4, "ngIf"], ["id", "div2"], ["id", "myDescripcion", 1, "texto"], ["id", "div3"], ["id", "opinions"], ["src", "../../../assets/plan.png", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], [1, "bold_text"], [4, "ngIf"], [1, "stars"], [4, "ngFor", "ngForOf"], ["texto", "Puntua a este usuario", 3, "click", 4, "ngIf"], [1, "titulo-opinion"], [1, "name", "comentarios_usuario"], ["src", "../../../assets/comentario.png", 3, "click", 4, "ngIf"], ["class", "comment", 4, "ngFor", "ngForOf"], ["id", "div4"], [1, "name", "viajes_usuario"], [1, "container_carousel1"], [3, "slides", "links"], ["id", "img-editar", "src", "../../../assets/engranaje.png", 3, "click"], [2, "display", "inline-block", "max-width", "200px", "max-height", "200px", 3, "src"], ["src", "../../../assets/usuario.png", 2, "display", "inline-block", "max-width", "100px", "max-height", "100px"], ["src", "../../../assets/star.png", 1, "llena", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], ["src", "../../../assets/empty_star.png", 1, "vacia", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], ["texto", "Puntua a este usuario", 3, "click"], ["src", "../../../assets/comentario.png", 3, "click"], [1, "comment"], [1, "comment-division-1"], [2, "height", "100%", "width", "100%", "vertical-align", "middle", "display", "inline-block", 3, "src", "routerLink"], [1, "comment-division-2"], [1, "bold_text", 2, "display", "inline-block"]], template: function PerfilOrganizadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-puntuacion-pu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_puntuacion_pu_cerrado_1_listener($event) { return ctx.cerrar($event, "puntuar"); })("puntuacion", function PerfilOrganizadorComponent_Template_app_puntuacion_pu_puntuacion_1_listener($event) { return ctx.newPuntuacion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-comentario-pu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_comentario_pu_cerrado_2_listener($event) { return ctx.cerrar($event, "comentar"); })("comentario", function PerfilOrganizadorComponent_Template_app_comentario_pu_comentario_2_listener($event) { return ctx.newComentario($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-edicion-pu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_edicion_pu_cerrado_3_listener($event) { return ctx.cerrar($event, "editar"); })("newDescripcion", function PerfilOrganizadorComponent_Template_app_edicion_pu_newDescripcion_3_listener($event) { return ctx.setDescripcion($event); })("foto", function PerfilOrganizadorComponent_Template_app_edicion_pu_foto_3_listener($event) { return ctx.setFoto($event); })("signal", function PerfilOrganizadorComponent_Template_app_edicion_pu_signal_3_listener($event) { return ctx.uploadUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-mensaje", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_mensaje_cerrado_4_listener($event) { return ctx.cerrar($event, "graciasC"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-mensaje", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_mensaje_cerrado_5_listener($event) { return ctx.cerrar($event, "graciasP"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-mensaje", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilOrganizadorComponent_Template_app_mensaje_cerrado_6_listener($event) { return ctx.cerrar($event, "editOk"); });
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
    } if (rf & 2) {
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
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_9__["PuntuacionPuComponent"], _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_10__["ComentarioPuComponent"], _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_11__["EdicionPuComponent"], _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_12__["MensajeComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"], _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_16__["BotonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["@charset \"UTF-8\";\n\n\n\n#general[_ngcontent-%COMP%] {\n  height: 86%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n}\n#div1[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 35%;\n  float: left;\n}\n#tarjeta[_ngcontent-%COMP%] {\n  margin: 5%;\n  margin-top: 2%;\n}\n#opinions[_ngcontent-%COMP%] {\n  margin: 0 5%;\n}\n#div2[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 45%;\n  float: left;\n  overflow: hidden;\n}\n#div3[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  float: left;\n  overflow: auto;\n}\n#div4[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  float: left;\n}\n.little_container_der[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.little_container_izq[_ngcontent-%COMP%] {\n  width: 50%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.little_container_izq[_ngcontent-%COMP%]   #img-editar[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.name[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #03a9f4;\n  font-weight: bold;\n  font-size: 190%;\n  margin-bottom: 2.5%;\n  margin-top: 5%;\n}\n.viajes_usuario[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-top: 0%;\n  font-size: 170%;\n}\n#puntuar[_ngcontent-%COMP%] {\n  display: none;\n}\n#comentar[_ngcontent-%COMP%] {\n  display: none;\n}\n#editar[_ngcontent-%COMP%] {\n  display: none;\n}\n#editOk[_ngcontent-%COMP%] {\n  display: none;\n}\n#graciasP[_ngcontent-%COMP%] {\n  display: none;\n}\n#graciasC[_ngcontent-%COMP%] {\n  display: none;\n}\n.comentarios_usuario[_ngcontent-%COMP%] {\n  margin-top: 0%;\n  font-size: 170%;\n}\n.texto_perfil[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 6%;\n  font-size: 190%;\n}\n.bold_text[_ngcontent-%COMP%] {\n  font-size: 120%;\n  font-weight: bold;\n}\n.texto[_ngcontent-%COMP%] {\n  font-size: 110%;\n  text-align: justify;\n  margin: 6%;\n  margin-right: 10%;\n  margin-top: 2%;\n  overflow: auto;\n}\n.container_carousel1[_ngcontent-%COMP%] {\n  display: block;\n  height: 70%;\n  width: 60%;\n  margin: 1% 20%;\n}\n.titulo-opinion[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.titulo-opinion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.comment[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n.stars[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n.comment-division-1[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 19%;\n  margin-left: 3%;\n}\n.comment-division-2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 68%;\n  margin: 5%;\n}\n\n@media screen and (max-device-width: 700px) {\n  #div1[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div3[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  #div4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  .texto_perfil[_ngcontent-%COMP%] {\n    font-size: 140%;\n  }\n\n  .viajes_usuario[_ngcontent-%COMP%] {\n    font-size: 145%;\n  }\n}\n\n@media screen and (max-device-width: 1024px) {\n  #div1[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div3[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  #div4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  .texto_perfil[_ngcontent-%COMP%] {\n    font-size: 140%;\n  }\n\n  .viajes_usuario[_ngcontent-%COMP%] {\n    font-size: 145%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsZXMvcGVyZmlsLW9yZ2FuaXphZG9yL3BlcmZpbC1vcmdhbml6YWRvci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9wZXJmaWxlcy9wZXJmaWwtb3JnYW5pemFkb3IvcGVyZmlsLW9yZ2FuaXphZG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQUt6QjtFQUFVLFdBQUE7RUFBYSxXQUFBO0VBQWEsVUFBQTtFQUFZLFNBQUE7RUFBVyxrQkFBQTtFQUFvQixPQUFBO0FERC9FO0FDRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURDRjtBQ0NBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QURFRjtBQ0FBO0VBQ0UsWUFBQTtBREdGO0FDQUE7RUFBUSxVQUFBO0VBQVksV0FBQTtFQUFhLFdBQUE7RUFBYSxnQkFBQTtBRE85QztBQ05BO0VBQVEsVUFBQTtFQUFZLFdBQUE7RUFBYSxXQUFBO0VBQWEsY0FBQTtBRGE5QztBQ1pBO0VBQVEsVUFBQTtFQUFZLFdBQUE7RUFBYSxXQUFBO0FEa0JqQztBQ2ZBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBRGtCRjtBQ2ZBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QURrQkY7QUNkQTtFQUNFLGlCQUFBO0FEaUJGO0FDWEE7RUFDRSxxQkFBQTtFQUNBLGNBN0NRO0VBOENSLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRGNGO0FDWEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURjRjtBQ1hBO0VBQ0UsYUFBQTtBRGNGO0FDWEE7RUFDRSxhQUFBO0FEY0Y7QUNYQTtFQUNFLGFBQUE7QURjRjtBQ1hBO0VBQ0UsYUFBQTtBRGNGO0FDWEE7RUFDRSxhQUFBO0FEY0Y7QUNaQTtFQUNFLGFBQUE7QURlRjtBQ1pBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURlRjtBQ1pBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGVGO0FDWkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURlRjtBQ1pBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QURlRjtBQ1hBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBRGNGO0FDWEE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QURjRjtBQ1hBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURjRjtBQ1hBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FEY0Y7QUNYQTtFQUNFLGlCQUFBO0FEY0Y7QUNUQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QURZRjtBQ1ZBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRGFGO0FDVkEsZUFBQTtBQUNBO0VBRUU7SUFBUSxXQUFBO0lBQWEsV0FBQTtFRGNyQjs7RUNiQTtJQUFRLFdBQUE7SUFBYSxZQUFBO0lBQWMsV0FBQTtFRG1CbkM7O0VDbEJBO0lBQVEsV0FBQTtJQUFhLGVBQUE7SUFBaUIsV0FBQTtFRHdCdEM7O0VDdkJBO0lBQVEsV0FBQTtJQUFhLGVBQUE7SUFBZ0IsV0FBQTtFRDZCckM7O0VDMUJBO0lBQ0UsZUFBQTtFRDZCRjs7RUMzQkE7SUFDRSxlQUFBO0VEOEJGO0FBQ0Y7QUMzQkEsZUFBQTtBQUNBO0VBRUU7SUFBUSxXQUFBO0lBQWEsWUFBQTtJQUFjLFdBQUE7RUQrQm5DOztFQzlCQTtJQUFRLFdBQUE7SUFBYSxZQUFBO0lBQWMsV0FBQTtFRG9DbkM7O0VDbkNBO0lBQVEsV0FBQTtJQUFhLGVBQUE7SUFBaUIsV0FBQTtFRHlDdEM7O0VDeENBO0lBQVEsV0FBQTtJQUFhLGVBQUE7SUFBZ0IsV0FBQTtFRDhDckM7O0VDM0NBO0lBQ0UsZUFBQTtFRDhDRjs7RUM1Q0E7SUFDRSxlQUFBO0VEK0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWxlcy9wZXJmaWwtb3JnYW5pemFkb3IvcGVyZmlsLW9yZ2FuaXphZG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiNnZW5lcmFsIHtcbiAgaGVpZ2h0OiA4NiU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cblxuI2RpdjEge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDM1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiN0YXJqZXRhIHtcbiAgbWFyZ2luOiA1JTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbiNvcGluaW9ucyB7XG4gIG1hcmdpbjogMCA1JTtcbn1cblxuI2RpdjIge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQ1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNkaXYzIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2RpdjQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5saXR0bGVfY29udGFpbmVyX2RlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubGl0dGxlX2NvbnRhaW5lcl9penEge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5saXR0bGVfY29udGFpbmVyX2l6cSAjaW1nLWVkaXRhciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMwM2E5ZjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE5MCU7XG4gIG1hcmdpbi1ib3R0b206IDIuNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4udmlhamVzX3VzdWFyaW8ge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBmb250LXNpemU6IDE3MCU7XG59XG5cbiNwdW50dWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbWVudGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2VkaXRhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlZGl0T2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ3JhY2lhc1Age1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ3JhY2lhc0Mge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tZW50YXJpb3NfdXN1YXJpbyB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBmb250LXNpemU6IDE3MCU7XG59XG5cbi50ZXh0b19wZXJmaWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBmb250LXNpemU6IDE5MCU7XG59XG5cbi5ib2xkX3RleHQge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dG8ge1xuICBmb250LXNpemU6IDExMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogNiU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb250YWluZXJfY2Fyb3VzZWwxIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDElIDIwJTtcbn1cblxuLnRpdHVsby1vcGluaW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGl0dWxvLW9waW5pb24gaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLmNvbW1lbnQge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbi5zdGFycyB7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uY29tbWVudC1kaXZpc2lvbi0xIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTklO1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5jb21tZW50LWRpdmlzaW9uLTIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2OCU7XG4gIG1hcmdpbjogNSU7XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNzAwcHgpIHtcbiAgI2RpdjEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2RpdjIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICNkaXYzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjZGl2NCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLnRleHRvX3BlcmZpbCB7XG4gICAgZm9udC1zaXplOiAxNDAlO1xuICB9XG5cbiAgLnZpYWplc191c3VhcmlvIHtcbiAgICBmb250LXNpemU6IDE0NSU7XG4gIH1cbn1cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICNkaXYxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjZGl2MiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2RpdjMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICNkaXY0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAudGV4dG9fcGVyZmlsIHtcbiAgICBmb250LXNpemU6IDE0MCU7XG4gIH1cblxuICAudmlhamVzX3VzdWFyaW8ge1xuICAgIGZvbnQtc2l6ZTogMTQ1JTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuJGxldHRlcnM6ICMwM2E5ZjQ7XG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xuXG4jZ2VuZXJhbHsgaGVpZ2h0OiA4NiU7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDt9XG4jZGl2MSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzUlO1xuICBmbG9hdDogbGVmdDtcbn1cbiN0YXJqZXRhe1xuICBtYXJnaW46IDUlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbiNvcGluaW9uc3tcbiAgbWFyZ2luOiAwIDUlO1xufVxuXG4jZGl2MiB7IHdpZHRoOiA1MCU7IGhlaWdodDogNDUlOyBmbG9hdDogbGVmdDsgb3ZlcmZsb3c6IGhpZGRlbjt9XG4jZGl2MyB7IHdpZHRoOiA1MCU7IGhlaWdodDogNTAlOyBmbG9hdDogbGVmdDsgb3ZlcmZsb3c6IGF1dG87fVxuI2RpdjQgeyB3aWR0aDogNTAlOyBoZWlnaHQ6IDUwJTsgZmxvYXQ6IGxlZnQ7fVxuXG5cbi5saXR0bGVfY29udGFpbmVyX2RlcntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5saXR0bGVfY29udGFpbmVyX2l6cXtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG59XG5cbi5saXR0bGVfY29udGFpbmVyX2l6cSAjaW1nLWVkaXRhcntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbn1cblxuXG5cbi5uYW1le1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAkbGV0dGVycztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTkwJTtcbiAgbWFyZ2luLWJvdHRvbTogMi41JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi52aWFqZXNfdXN1YXJpb3tcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgZm9udC1zaXplOiAxNzAlO1xufVxuXG4jcHVudHVhcntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbWVudGFye1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZWRpdGFye1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZWRpdE9re1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ3JhY2lhc1B7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jZ3JhY2lhc0N7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb21lbnRhcmlvc191c3Vhcmlve1xuICBtYXJnaW4tdG9wOiAwJTtcbiAgZm9udC1zaXplOiAxNzAlO1xufVxuXG4udGV4dG9fcGVyZmlse1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBmb250LXNpemU6IDE5MCU7XG59XG5cbi5ib2xkX3RleHR7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0b3tcbiAgZm9udC1zaXplOiAxMTAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IDYlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cbi5jb250YWluZXJfY2Fyb3VzZWwxIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDElIDIwJTtcbn1cblxuLnRpdHVsby1vcGluaW9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aXR1bG8tb3BpbmlvbiBpbWd7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5jb21tZW50e1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbi5zdGFyc3tcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cblxuXG4uY29tbWVudC1kaXZpc2lvbi0xe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxOSU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cbi5jb21tZW50LWRpdmlzaW9uLTJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY4JTtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzAwcHgpe1xuXG4gICNkaXYxIHsgd2lkdGg6IDEwMCU7IGZsb2F0OiBsZWZ0O31cbiAgI2RpdjIgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBmbG9hdDogbGVmdDt9XG4gICNkaXYzIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6MTAlOyAgZmxvYXQ6IGxlZnQ7fVxuICAjZGl2NCB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOjEwJTsgZmxvYXQ6IGxlZnQ7fVxuXG5cbiAgLnRleHRvX3BlcmZpbHtcbiAgICBmb250LXNpemU6IDE0MCU7XG4gIH1cbiAgLnZpYWplc191c3Vhcmlve1xuICAgIGZvbnQtc2l6ZTogMTQ1JTtcbiAgfVxufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpe1xuXG4gICNkaXYxIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgZmxvYXQ6IGxlZnQ7fVxuICAjZGl2MiB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0O31cbiAgI2RpdjMgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDoxMCU7ICBmbG9hdDogbGVmdDt9XG4gICNkaXY0IHsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6MTAlOyBmbG9hdDogbGVmdDt9XG5cblxuICAudGV4dG9fcGVyZmlse1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbiAgfVxuICAudmlhamVzX3VzdWFyaW97XG4gICAgZm9udC1zaXplOiAxNDUlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilOrganizadorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perfil-organizador',
                templateUrl: './perfil-organizador.component.html',
                styleUrls: ['./perfil-organizador.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"] }, { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] }, { type: _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { newDescripcion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['descripcion']
        }], inputImageUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageUser']
        }] }); })();


/***/ }),

/***/ "./src/app/perfiles/perfil-viajero/perfil-viajero.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/perfiles/perfil-viajero/perfil-viajero.component.ts ***!
  \*********************************************************************/
/*! exports provided: PerfilViajeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilViajeroComponent", function() { return PerfilViajeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/usuario */ "./src/app/interfaces/usuario.ts");
/* harmony import */ var _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/opiniones */ "./src/app/interfaces/opiniones.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firestore/opiniones-firestore.service */ "./src/app/services/firestore/opiniones-firestore.service.ts");
/* harmony import */ var _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/firestore/solicitud-firestore.service */ "./src/app/services/firestore/solicitud-firestore.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/puntuacion-pu/puntuacion-pu.component */ "./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts");
/* harmony import */ var _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/comentario-pu/comentario-pu.component */ "./src/app/shared/comentario-pu/comentario-pu.component.ts");
/* harmony import */ var _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/edicion-pu/edicion-pu.component */ "./src/app/shared/edicion-pu/edicion-pu.component.ts");
/* harmony import */ var _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/mensaje/mensaje.component */ "./src/app/shared/mensaje/mensaje.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/boton/boton.component */ "./src/app/shared/boton/boton.component.ts");



















const _c0 = ["descripcion"];
const _c1 = ["imageUser"];
function PerfilViajeroComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilViajeroComponent_img_15_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.editar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilViajeroComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r19.usuario.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PerfilViajeroComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
} }
function PerfilViajeroComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Este usuario no tiene valoraciones a\u00FAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilViajeroComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilViajeroComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilViajeroComponent_app_boton_37_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-boton", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilViajeroComponent_app_boton_37_Template_app_boton_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.puntuar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerfilViajeroComponent_img_41_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilViajeroComponent_img_41_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.comentar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
function PerfilViajeroComponent_div_42_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const comment_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", comment_r35["photo"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, comment_r35["tipo-url"], comment_r35["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r35["person"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r35["comment"]);
} }
class PerfilViajeroComponent {
    constructor(_route, _router, storage, firestoreServiceUser, firestoreServiceViaje, firestoreServiceOpiniones, firestoreServiceSolicitud, _activatedRoute, zone) {
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
        this.susViajes = [];
        //almacena los id
        this.slides = [
            { src: "../../../assets/noViajes.png" },
        ]; //almacena las imagenes en el formato del carrusel
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
        this.nuevaDescripcion = "";
        //****permisos****/
        this.permisoOpinar = false; //si el usuario tiene permiso para opinar es true
        this.permisoEditar = false; //si el usuario tiene permiso para editar es true
        this.usuarios = [];
        this.usuario = new src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
    }
    reload() {
        window.location.reload();
        window.scrollTo(0, 0);
    }
    //es necesario activar las opiniones si se quiere comentar y puntuar
    activarOpiniones() {
        this.permisoOpinar = true;
    }
    //es necesario activar la edición si se quiere editar la descripción o la foto de perfil
    activarEdicion(visitanteId) {
        this.permisoEditar = true;
    }
    //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
    //que accede
    puntuar() {
        document.getElementById("puntuar").style.display = "block";
    }
    //resultante del evento cerrar de los componentes pu
    cerrar(cerrado, id) {
        if (cerrado == true) {
            document.getElementById(id).style.display = "none";
        }
    }
    //resultante del evento puntuacion del componente hijo puntuacion-pu
    newPuntuacion(puntos) {
        if (puntos > -1) {
            var puntuacion = new _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__["Puntuacion"]();
            puntuacion.puntuacion = puntos.toString();
            puntuacion.puntuador = localStorage.getItem('usuario');
            puntuacion.puntuado = this._route.snapshot.paramMap.get('id');
            this.firestoreServiceOpiniones.createPuntuacion(puntuacion);
            document.getElementById("graciasP").style.display = "block";
        }
        document.getElementById("puntuar").style.display = "none";
    }
    //resultante del evento puntuacion del comentario hijo comentario-pu
    newComentario(comment) {
        if (comment != "") {
            var comentario = new _interfaces_opiniones__WEBPACK_IMPORTED_MODULE_2__["Comentario"]();
            comentario.comentario = comment;
            comentario.comentador = localStorage.getItem('usuario');
            comentario.comentado = this._route.snapshot.paramMap.get('id');
            this.firestoreServiceOpiniones.createComentario(comentario);
            document.getElementById("graciasC").style.display = "block";
        }
        document.getElementById("comentar").style.display = "none";
    }
    //activa el botón de comentarios, es llamada cuando el usuario propietario es distinto del usuario
    //que accede
    comentar() {
        document.getElementById("comentar").style.display = "block";
    }
    //activa el botón de comentarios, es llamada cuando el usuario propietario es el mismo que el usuario
    //que accede
    editar() {
        document.getElementById("editar").style.display = "block";
    }
    //resultante del evento foto del componente edicion-p
    setFoto(foto) {
        this.nuevaFoto = foto;
        if (this.nuevaFoto != "" && this.nuevaFoto != undefined) {
            this.usuario.image = foto;
        }
    }
    //resultante del evento newDescripcion del componente edicion-p
    setDescripcion(desc) {
        this.nuevaDescripcion = desc;
        if (this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined) {
            this.usuario.descripcion = desc;
        }
    }
    //resultante del evento signal del componente edicion-pu
    uploadUser(signal) {
        if (this.nuevaFoto != "" && this.nuevaFoto != undefined) {
            //alert(this.nuevaFoto);
            this.usuario.image = this.nuevaFoto;
        }
        if (this.nuevaDescripcion != "" && this.nuevaDescripcion != undefined) {
            //alert(this.nuevaDescripcion);
            this.usuario.descripcion = this.nuevaDescripcion;
        }
        //es necesario crear un objeto para que el set funcione
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
            "image": this.usuario.image,
        };
        this.firestoreServiceUser.updateUsuario(actualizar);
        document.getElementById("editOk").style.display = "block";
        return true;
    }
    ngOnInit() {
        var visitanteId = localStorage.getItem('usuario'); //hace referencia al usuario que está navegando
        var userId = this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil
        if (visitanteId == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
        }
        //utilizo la subscripción a activatedRoute para que se actualice el pefil de haber cambios en la ruta
        this._activatedRoute.paramMap.subscribe((params) => {
            userId = params['id'];
            //this.reload();
            if (userId == undefined) {
                userId = this._route.snapshot.paramMap.get('id'); //hace referencia al usuario propietario del perfil;
            }
            window.scrollTo(0, 0);
            var usuarioAux = this.firestoreServiceUser.getUsuario(userId).then((elem) => {
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
                this.descripcion = elem.descripcion;
                usuarioAux.tipo = elem.tipo;
                usuarioAux.nombre = elem.nombre;
                usuarioAux.apellidos = elem.apellidos;
                usuarioAux.password = elem.password;
                usuarioAux.estrellas = elem.estrellas;
                usuarioAux.image = elem.image;
                this.usuario = usuarioAux;
                this.firestoreServiceOpiniones.getPuntuacionesFiltered(this.usuario.id).subscribe(res => {
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
                        this.stars = 0;
                        this.emptystars = this.maxStars;
                    }
                    else {
                        var i;
                        var media = 0;
                        for (i = 0; i < res.length; i++) {
                            media = media + parseInt(res[i].puntuacion);
                        }
                        media = Math.round(media / res.length); //es necesario redondear, no podemos rellenar media estrella
                        this.stars = media;
                        this.emptystars = this.maxStars - media;
                        //de esta forma, en el html ya no aparecerá el comentario de 'no hay puntuaciones'
                        this.usuario.estrellas = "0";
                        //se requiere una variable auxiliar para que no salte el error DocumentReference.set() al llamar
                        //a updateUsuario
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
                    }
                });
                this.firestoreServiceOpiniones.getComentariosFiltered(this.usuario.id).subscribe(res => {
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
                    this.comentarios = [];
                    var i;
                    for (i = 0; i < res.length; i++) {
                        this.comentarios.push({
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
                        this.tuplasComentario.push([comment, res[i].comentador, true]);
                        var contador = 0;
                        var usuarioAux = this.firestoreServiceUser.getUsuario(res[i].comentador).then((elem) => {
                            img = elem.image;
                            this.comentarios[contador]["photo"] = img;
                            nombre = elem.nombre;
                            this.comentarios[contador]["person"] = nombre;
                            idUser = elem.id;
                            this.comentarios[contador]["id"] = idUser;
                            tipo = elem.tipo;
                            if (tipo == 'organizador') {
                                this.comentarios[contador]["tipo-url"] = '/perfil-organizador/';
                            }
                            else {
                                this.comentarios[contador]["tipo-url"] = '/perfil-viajero/';
                            }
                            var n;
                            for (n = 0; n < this.tuplasComentario.length; n++) {
                                if (this.tuplasComentario[n][1] == this.comentarios[contador]["id"] && this.comentarios[contador]["comment"] == "" && this.tuplasComentario[n][2]) {
                                    this.comentarios[contador]["comment"] = this.tuplasComentario[n][0];
                                    this.tuplasComentario[n][2] = false;
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
                this.firestoreServiceSolicitud.getSolicitudesByUserId(userId).subscribe(res => {
                    var viajes = [];
                    if (res.length <= 0) {
                        this.slides = [
                            { src: "../../../assets/noViajes.png" },
                        ];
                    }
                    else {
                        var i;
                        for (i = 0; i < res.length; i++) {
                            viajes.push(res[i].idViaje);
                        }
                    }
                    if (viajes.length > 0) {
                        this.slides = [];
                        for (i = 0; i < viajes.length; i++) {
                            if (res[i].estado != "pendiente" && res[i].estado != "rechazado") {
                                this.firestoreServiceViaje.getViaje(viajes[i]).then(elem => {
                                    this.slides.push({ src: elem.img });
                                    this.susViajes.push(['viaje', elem.id]);
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
        }
        else {
            this.titulo = "TU PERFIL";
            this.activarEdicion(visitanteId); //si el usuario está visitando su perfil, puede editarlo
        }
    }
    ngOnDestroy() {
        //this.s_usuarios.unsubscribe();
    }
}
PerfilViajeroComponent.ɵfac = function PerfilViajeroComponent_Factory(t) { return new (t || PerfilViajeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
PerfilViajeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerfilViajeroComponent, selectors: [["app-perfil-viajero"]], viewQuery: function PerfilViajeroComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newDescripcion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
    } }, decls: 48, vars: 17, consts: [[3, "titulo"], ["id", "puntuar", 3, "cerrado", "puntuacion"], ["id", "comentar", 3, "cerrado", "comentario"], ["id", "editar", "user", "usuario", 3, "descripcion", "cerrado", "newDescripcion", "foto", "signal"], ["id", "graciasC", "mensaje", "\u00A1 Gracias por comentar !", "imagen", "../../../assets/comment.png", 3, "cerrado"], ["id", "graciasP", "mensaje", "\u00A1 Gracias por puntuar !", "imagen", "../../../assets/ok.png", 3, "cerrado"], ["id", "editOk", "mensaje", "\u00A1 Has modificado tu perfil !", "imagen", "../../../assets/usuario.png", 3, "cerrado"], ["id", "general"], ["id", "div1"], ["id", "tarjeta"], [1, "little_container_izq"], [1, "name"], ["id", "img-editar", "src", "../../../assets/engranaje.png", 3, "click", 4, "ngIf"], [1, "texto_perfil"], ["src", "../../../assets/location.png", 2, "height", "7%", "width", "7%"], [1, "little_container_der"], ["style", "display: inline-block; max-width: 200px; max-height: 200px; ", 3, "src", 4, "ngIf"], ["src", "../../../assets/usuario.png", "style", "display: inline-block; max-width: 100px; max-height: 100px; ", 4, "ngIf"], ["id", "div2"], ["id", "myDescripcion", 1, "texto"], ["id", "div3"], ["id", "opinions"], ["src", "../../../assets/telegram.png", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], [1, "bold_text"], [4, "ngIf"], [1, "stars"], [4, "ngFor", "ngForOf"], ["texto", "Puntua a este usuario", 3, "click", 4, "ngIf"], [1, "titulo-opinion"], [1, "name", "comentarios_usuario"], ["src", "../../../assets/comentario.png", 3, "click", 4, "ngIf"], ["class", "comment", 4, "ngFor", "ngForOf"], ["id", "div4"], [1, "name", "viajes_usuario"], [1, "container_carousel1"], [3, "slides", "links"], ["id", "img-editar", "src", "../../../assets/engranaje.png", 3, "click"], [2, "display", "inline-block", "max-width", "200px", "max-height", "200px", 3, "src"], ["src", "../../../assets/usuario.png", 2, "display", "inline-block", "max-width", "100px", "max-height", "100px"], ["src", "../../../assets/star.png", 1, "llena", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], ["src", "../../../assets/empty_star.png", 1, "vacia", 2, "height", "5%", "width", "5%", "vertical-align", "middle", "margin-right", "2%"], ["texto", "Puntua a este usuario", 3, "click"], ["src", "../../../assets/comentario.png", 3, "click"], [1, "comment"], [1, "comment-division-1"], [2, "height", "100%", "width", "100%", "vertical-align", "middle", "display", "inline-block", 3, "src", "routerLink"], [1, "comment-division-2"], [1, "bold_text", 2, "display", "inline-block"]], template: function PerfilViajeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-puntuacion-pu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_puntuacion_pu_cerrado_1_listener($event) { return ctx.cerrar($event, "puntuar"); })("puntuacion", function PerfilViajeroComponent_Template_app_puntuacion_pu_puntuacion_1_listener($event) { return ctx.newPuntuacion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-comentario-pu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_comentario_pu_cerrado_2_listener($event) { return ctx.cerrar($event, "comentar"); })("comentario", function PerfilViajeroComponent_Template_app_comentario_pu_comentario_2_listener($event) { return ctx.newComentario($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-edicion-pu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_edicion_pu_cerrado_3_listener($event) { return ctx.cerrar($event, "editar"); })("newDescripcion", function PerfilViajeroComponent_Template_app_edicion_pu_newDescripcion_3_listener($event) { return ctx.setDescripcion($event); })("foto", function PerfilViajeroComponent_Template_app_edicion_pu_foto_3_listener($event) { return ctx.setFoto($event); })("signal", function PerfilViajeroComponent_Template_app_edicion_pu_signal_3_listener($event) { return ctx.uploadUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-mensaje", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_mensaje_cerrado_4_listener($event) { return ctx.cerrar($event, "graciasC"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-mensaje", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_mensaje_cerrado_5_listener($event) { return ctx.cerrar($event, "graciasP"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-mensaje", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrado", function PerfilViajeroComponent_Template_app_mensaje_cerrado_6_listener($event) { return ctx.cerrar($event, "editOk"); });
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
    } if (rf & 2) {
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
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_puntuacion_pu_puntuacion_pu_component__WEBPACK_IMPORTED_MODULE_10__["PuntuacionPuComponent"], _shared_comentario_pu_comentario_pu_component__WEBPACK_IMPORTED_MODULE_11__["ComentarioPuComponent"], _shared_edicion_pu_edicion_pu_component__WEBPACK_IMPORTED_MODULE_12__["EdicionPuComponent"], _shared_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_13__["MensajeComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"], _shared_boton_boton_component__WEBPACK_IMPORTED_MODULE_17__["BotonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["@charset \"UTF-8\";\n\n\n\n#general[_ngcontent-%COMP%] {\n  height: 86%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n}\n#div1[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 35%;\n  float: left;\n}\n#tarjeta[_ngcontent-%COMP%] {\n  margin: 5%;\n  margin-top: 2%;\n}\n#opinions[_ngcontent-%COMP%] {\n  margin: 0 5%;\n}\n#div2[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 45%;\n  float: left;\n  overflow: hidden;\n}\n#div3[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  float: left;\n  overflow: auto;\n}\n#div4[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  float: left;\n}\n.little_container_der[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.little_container_izq[_ngcontent-%COMP%] {\n  width: 50%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.little_container_izq[_ngcontent-%COMP%]   #img-editar[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.name[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #03a9f4;\n  font-weight: bold;\n  font-size: 190%;\n  margin-bottom: 2.5%;\n  margin-top: 5%;\n}\n.viajes_usuario[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-top: 0%;\n  font-size: 170%;\n}\n#puntuar[_ngcontent-%COMP%] {\n  display: none;\n}\n#comentar[_ngcontent-%COMP%] {\n  display: none;\n}\n#editar[_ngcontent-%COMP%] {\n  display: none;\n}\n#editOk[_ngcontent-%COMP%] {\n  display: none;\n}\n#graciasP[_ngcontent-%COMP%] {\n  display: none;\n}\n#graciasC[_ngcontent-%COMP%] {\n  display: none;\n}\n.comentarios_usuario[_ngcontent-%COMP%] {\n  margin-top: 0%;\n  font-size: 170%;\n}\n.texto_perfil[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 6%;\n  font-size: 190%;\n}\n.bold_text[_ngcontent-%COMP%] {\n  font-size: 120%;\n  font-weight: bold;\n}\n.texto[_ngcontent-%COMP%] {\n  font-size: 110%;\n  text-align: justify;\n  margin: 6%;\n  margin-right: 10%;\n  margin-top: 2%;\n  overflow: auto;\n}\n.container_carousel1[_ngcontent-%COMP%] {\n  display: block;\n  height: 70%;\n  width: 60%;\n  margin: 1% 20%;\n}\n.titulo-opinion[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.titulo-opinion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n}\n.comment[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n.stars[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n.comment-division-1[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 19%;\n  margin-left: 3%;\n}\n.comment-division-2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 68%;\n  margin: 5%;\n}\n\n@media screen and (max-device-width: 700px) {\n  #div1[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div3[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  #div4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  .texto_perfil[_ngcontent-%COMP%] {\n    font-size: 140%;\n  }\n\n  .viajes_usuario[_ngcontent-%COMP%] {\n    font-size: 145%;\n  }\n}\n\n@media screen and (max-device-width: 1024px) {\n  #div1[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    float: left;\n  }\n\n  #div3[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  #div4[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10%;\n    float: left;\n  }\n\n  .texto_perfil[_ngcontent-%COMP%] {\n    font-size: 140%;\n  }\n\n  .viajes_usuario[_ngcontent-%COMP%] {\n    font-size: 145%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsZXMvcGVyZmlsLXZpYWplcm8vcGVyZmlsLXZpYWplcm8uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZXVnZW5pb2dhcmNpYWRlbGFyb3NhL2dpdGh1Yi9zYXJheWdyamltL1RyaXBtZWZ5L3NyYy9hcHAvcGVyZmlsZXMvcGVyZmlsLXZpYWplcm8vcGVyZmlsLXZpYWplcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBS3pCO0VBQVUsV0FBQTtFQUFhLFdBQUE7RUFBYSxVQUFBO0VBQVksU0FBQTtFQUFXLGtCQUFBO0VBQW9CLE9BQUE7QUREL0U7QUNFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRENGO0FDQ0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBREVGO0FDQUE7RUFDRSxZQUFBO0FER0Y7QUNBQTtFQUFRLFVBQUE7RUFBWSxXQUFBO0VBQWEsV0FBQTtFQUFhLGdCQUFBO0FETzlDO0FDTkE7RUFBUSxVQUFBO0VBQVksV0FBQTtFQUFhLFdBQUE7RUFBYSxjQUFBO0FEYTlDO0FDWkE7RUFBUSxVQUFBO0VBQVksV0FBQTtFQUFhLFdBQUE7QURrQmpDO0FDZkE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FEa0JGO0FDZkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBRGtCRjtBQ2RBO0VBQ0UsaUJBQUE7QURpQkY7QUNiQTtFQUNFLHFCQUFBO0VBQ0EsY0EzQ1E7RUE0Q1IsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FEZ0JGO0FDYkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURnQkY7QUNiQTtFQUNFLGFBQUE7QURnQkY7QUNiQTtFQUNFLGFBQUE7QURnQkY7QUNiQTtFQUNFLGFBQUE7QURnQkY7QUNiQTtFQUNFLGFBQUE7QURnQkY7QUNiQTtFQUNFLGFBQUE7QURnQkY7QUNkQTtFQUNFLGFBQUE7QURpQkY7QUNkQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FEaUJGO0FDZEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEaUJGO0FDZEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURpQkY7QUNkQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEaUJGO0FDYkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FEZ0JGO0FDYkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QURnQkY7QUNiQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FEZ0JGO0FDYkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QURnQkY7QUNiQTtFQUNFLGlCQUFBO0FEZ0JGO0FDWEE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEY0Y7QUNaQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURlRjtBQ1pBLGVBQUE7QUFDQTtFQUVFO0lBQVEsV0FBQTtJQUFhLFdBQUE7RURnQnJCOztFQ2ZBO0lBQVEsV0FBQTtJQUFhLFlBQUE7SUFBYyxXQUFBO0VEcUJuQzs7RUNwQkE7SUFBUSxXQUFBO0lBQWEsZUFBQTtJQUFpQixXQUFBO0VEMEJ0Qzs7RUN6QkE7SUFBUSxXQUFBO0lBQWEsZUFBQTtJQUFnQixXQUFBO0VEK0JyQzs7RUM1QkE7SUFDRSxlQUFBO0VEK0JGOztFQzdCQTtJQUNFLGVBQUE7RURnQ0Y7QUFDRjtBQzdCQSxlQUFBO0FBQ0E7RUFFRTtJQUFRLFdBQUE7SUFBYSxZQUFBO0lBQWMsV0FBQTtFRGlDbkM7O0VDaENBO0lBQVEsV0FBQTtJQUFhLFlBQUE7SUFBYyxXQUFBO0VEc0NuQzs7RUNyQ0E7SUFBUSxXQUFBO0lBQWEsZUFBQTtJQUFpQixXQUFBO0VEMkN0Qzs7RUMxQ0E7SUFBUSxXQUFBO0lBQWEsZUFBQTtJQUFnQixXQUFBO0VEZ0RyQzs7RUM3Q0E7SUFDRSxlQUFBO0VEZ0RGOztFQzlDQTtJQUNFLGVBQUE7RURpREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbGVzL3BlcmZpbC12aWFqZXJvL3BlcmZpbC12aWFqZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiNnZW5lcmFsIHtcbiAgaGVpZ2h0OiA4NiU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cblxuI2RpdjEge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDM1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiN0YXJqZXRhIHtcbiAgbWFyZ2luOiA1JTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbiNvcGluaW9ucyB7XG4gIG1hcmdpbjogMCA1JTtcbn1cblxuI2RpdjIge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQ1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNkaXYzIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2RpdjQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5saXR0bGVfY29udGFpbmVyX2RlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubGl0dGxlX2NvbnRhaW5lcl9penEge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5saXR0bGVfY29udGFpbmVyX2l6cSAjaW1nLWVkaXRhciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMwM2E5ZjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE5MCU7XG4gIG1hcmdpbi1ib3R0b206IDIuNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4udmlhamVzX3VzdWFyaW8ge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBmb250LXNpemU6IDE3MCU7XG59XG5cbiNwdW50dWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2NvbWVudGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2VkaXRhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlZGl0T2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ3JhY2lhc1Age1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZ3JhY2lhc0Mge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tZW50YXJpb3NfdXN1YXJpbyB7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBmb250LXNpemU6IDE3MCU7XG59XG5cbi50ZXh0b19wZXJmaWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBmb250LXNpemU6IDE5MCU7XG59XG5cbi5ib2xkX3RleHQge1xuICBmb250LXNpemU6IDEyMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dG8ge1xuICBmb250LXNpemU6IDExMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogNiU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jb250YWluZXJfY2Fyb3VzZWwxIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDElIDIwJTtcbn1cblxuLnRpdHVsby1vcGluaW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGl0dWxvLW9waW5pb24gaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLmNvbW1lbnQge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbi5zdGFycyB7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uY29tbWVudC1kaXZpc2lvbi0xIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTklO1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5jb21tZW50LWRpdmlzaW9uLTIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2OCU7XG4gIG1hcmdpbjogNSU7XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNzAwcHgpIHtcbiAgI2RpdjEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2RpdjIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICNkaXYzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjZGl2NCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLnRleHRvX3BlcmZpbCB7XG4gICAgZm9udC1zaXplOiAxNDAlO1xuICB9XG5cbiAgLnZpYWplc191c3VhcmlvIHtcbiAgICBmb250LXNpemU6IDE0NSU7XG4gIH1cbn1cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICNkaXYxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjZGl2MiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2RpdjMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICNkaXY0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAudGV4dG9fcGVyZmlsIHtcbiAgICBmb250LXNpemU6IDE0MCU7XG4gIH1cblxuICAudmlhamVzX3VzdWFyaW8ge1xuICAgIGZvbnQtc2l6ZTogMTQ1JTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuJGxldHRlcnM6ICMwM2E5ZjQ7XG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xuXG4jZ2VuZXJhbHsgaGVpZ2h0OiA4NiU7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDt9XG4jZGl2MSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzUlO1xuICBmbG9hdDogbGVmdDtcbn1cbiN0YXJqZXRhe1xuICBtYXJnaW46IDUlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbiNvcGluaW9uc3tcbiAgbWFyZ2luOiAwIDUlO1xufVxuXG4jZGl2MiB7IHdpZHRoOiA1MCU7IGhlaWdodDogNDUlOyBmbG9hdDogbGVmdDsgb3ZlcmZsb3c6IGhpZGRlbjt9XG4jZGl2MyB7IHdpZHRoOiA1MCU7IGhlaWdodDogNTAlOyBmbG9hdDogbGVmdDsgb3ZlcmZsb3c6IGF1dG87fVxuI2RpdjQgeyB3aWR0aDogNTAlOyBoZWlnaHQ6IDUwJTsgZmxvYXQ6IGxlZnQ7fVxuXG5cbi5saXR0bGVfY29udGFpbmVyX2RlcntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5saXR0bGVfY29udGFpbmVyX2l6cXtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG59XG5cbi5saXR0bGVfY29udGFpbmVyX2l6cSAjaW1nLWVkaXRhcntcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbn1cblxuLm5hbWV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICRsZXR0ZXJzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOTAlO1xuICBtYXJnaW4tYm90dG9tOiAyLjUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnZpYWplc191c3Vhcmlve1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDAlO1xuICBmb250LXNpemU6IDE3MCU7XG59XG5cbiNwdW50dWFye1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jY29tZW50YXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlZGl0YXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlZGl0T2t7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNncmFjaWFzUHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNncmFjaWFzQ3tcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbWVudGFyaW9zX3VzdWFyaW97XG4gIG1hcmdpbi10b3A6IDAlO1xuICBmb250LXNpemU6IDE3MCU7XG59XG5cbi50ZXh0b19wZXJmaWx7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNiU7XG4gIGZvbnQtc2l6ZTogMTkwJTtcbn1cblxuLmJvbGRfdGV4dHtcbiAgZm9udC1zaXplOiAxMjAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHRve1xuICBmb250LXNpemU6IDExMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogNiU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cblxuLmNvbnRhaW5lcl9jYXJvdXNlbDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMSUgMjAlO1xufVxuXG4udGl0dWxvLW9waW5pb257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRpdHVsby1vcGluaW9uIGltZ3tcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLmNvbW1lbnR7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuLnN0YXJze1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuXG5cbi5jb21tZW50LWRpdmlzaW9uLTF7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE5JTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuLmNvbW1lbnQtZGl2aXNpb24tMntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjglO1xuICBtYXJnaW46IDUlO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MDBweCl7XG5cbiAgI2RpdjEgeyB3aWR0aDogMTAwJTsgZmxvYXQ6IGxlZnQ7fVxuICAjZGl2MiB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0O31cbiAgI2RpdjMgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDoxMCU7ICBmbG9hdDogbGVmdDt9XG4gICNkaXY0IHsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6MTAlOyBmbG9hdDogbGVmdDt9XG5cblxuICAudGV4dG9fcGVyZmlse1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbiAgfVxuICAudmlhamVzX3VzdWFyaW97XG4gICAgZm9udC1zaXplOiAxNDUlO1xuICB9XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCl7XG5cbiAgI2RpdjEgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBmbG9hdDogbGVmdDt9XG4gICNkaXYyIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgZmxvYXQ6IGxlZnQ7fVxuICAjZGl2MyB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOjEwJTsgIGZsb2F0OiBsZWZ0O31cbiAgI2RpdjQgeyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDoxMCU7IGZsb2F0OiBsZWZ0O31cblxuXG4gIC50ZXh0b19wZXJmaWx7XG4gICAgZm9udC1zaXplOiAxNDAlO1xuICB9XG4gIC52aWFqZXNfdXN1YXJpb3tcbiAgICBmb250LXNpemU6IDE0NSU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilViajeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perfil-viajero',
                templateUrl: './perfil-viajero.component.html',
                styleUrls: ['./perfil-viajero.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"] }, { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] }, { type: _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"] }, { type: _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudFirestoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { newDescripcion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['descripcion']
        }], inputImageUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageUser']
        }] }); })();


/***/ }),

/***/ "./src/app/privacidad/privacidad.component.ts":
/*!****************************************************!*\
  !*** ./src/app/privacidad/privacidad.component.ts ***!
  \****************************************************/
/*! exports provided: PrivacidadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacidadComponent", function() { return PrivacidadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/scroll-top/scroll-top.component */ "./src/app/shared/scroll-top/scroll-top.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");





class PrivacidadComponent {
    constructor() {
    }
    ngOnInit() {
    }
    scroll(el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
PrivacidadComponent.ɵfac = function PrivacidadComponent_Factory(t) { return new (t || PrivacidadComponent)(); };
PrivacidadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacidadComponent, selectors: [["app-privacidad"]], decls: 114, vars: 0, consts: [["titulo", "Pol\u00EDtica de Privacidad"], [1, "title"], [1, "politica"], ["t0", ""], ["t1", ""], ["t2", ""], ["t3", ""], ["t4", ""], ["t5", ""], [1, "right-menu"], [3, "click"]], template: function PrivacidadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nuestra pol\u00EDtica de privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Introducci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Tal y como mencionamos en nuestras 3 Leyes de protecci\u00F3n de datos, nos comprometemos a proteger la privacidad de sus datos. Esta Pol\u00EDtica de privacidad explica m\u00E1s concretamente qu\u00E9 informaci\u00F3n Tripmefy Corporation y sus Empresas del Grupo recopilan de los Titulares de cuenta y Usuarios finales (\"usted\") a trav\u00E9s de los sitios web y aplicaciones de Tripmefy, a los cuales nos referimos colectivamente como \"el Servicio\". El Servicio incluye el Software tripmefy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tenga en cuenta que si utiliza Trimefy como viajero, usted es el Titular de la cuenta y el Usuario final de una cuenta del servicio de Tripmefy. Si utiliza Tripmefy como organizador, el Titular de la cuenta es el Cliente que ha contratado Tripmefy. Puede encontrar la definici\u00F3n de estos y otros t\u00E9rminos utilizados en esta pol\u00EDtica en el Glosario al final de esta p\u00E1gina. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Aunque es poco frecuente que se produzcan cambios, esta pol\u00EDtica se puede modificar a medida que aparezcan nuevas funciones, tecnolog\u00EDa o requisitos legales, de modo que le recomendamos que los compruebe ocasionalmente. Si realizamos alg\u00FAn cambio significativo, le notificaremos y, en caso necesario, solicitaremos su consentimiento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00BFQu\u00E9 tipo de informaci\u00F3n recoge Tripmefy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Creamos Tripmefy para ayudarle a crear paquetes de viajes y as\u00ED poder acercarse m\u00E1s al usuario . Eso significa que puede introducir, cargar o almacenar en Tripmefy cualquier texto, imagen y otros datos que desee; nos referimos a esa informaci\u00F3n como \"Contenido\". Tambi\u00E9n recopilamos y recibimos los siguientes tipos de informaci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Informaci\u00F3n b\u00E1sica sobre suscriptores.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Para abrir su cuenta y procesar pagos, recopilamos y recibimos informaci\u00F3n b\u00E1sica como su direcci\u00F3n de correo electr\u00F3nico y, en funci\u00F3n de c\u00F3mo compre, su direcci\u00F3n de facturaci\u00F3n y otra informaci\u00F3n de pago. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Datos de uso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Recopilamos y registramos datos sobre c\u00F3mo usted y otros usuarios acceden y utilizan Tripmefy, por ejemplo, la acci\u00F3n de crear o compartir un viaje. Los datos de uso se pueden recopilar a trav\u00E9s de cookies y tecnolog\u00EDas similares. Para obtener m\u00E1s informaci\u00F3n, incluida la forma de desactivaci\u00F3n, visite nuestra p\u00E1gina de Informaci\u00F3n de Cookies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Informaci\u00F3n de ubicaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Recopilamos la direcci\u00F3n IP que utiliza para conectarse al Servicio y, si decide compartirla, la informaci\u00F3n de su ubicaci\u00F3n desde un dispositivo m\u00F3vil. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Informaci\u00F3n del dispositivo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Recopilamos informaci\u00F3n sobre el n\u00FAmero y el tipo de dispositivos que utiliza para conectarse al Servicio, as\u00ED como informaci\u00F3n sobre los sistemas operativos de esos dispositivos (p. ej., iOS, Android, Windows). Obtenga m\u00E1s informaci\u00F3n sobre los datos que recopilan nuestras aplicaciones de su dispositivo en nuestra p\u00E1gina de Uso de datos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00BFC\u00F3mo utiliza Tripmefy mi informaci\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tenemos normas concretas sobre c\u00F3mo y cu\u00E1ndo utilizamos la informaci\u00F3n que recopilamos y recibimos. Las describimos a continuaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00BFQu\u00E9 hace Tripmefy con mi informaci\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Nos comprometemos a proteger la privacidad de su informaci\u00F3n. A continuaci\u00F3n, describimos las formas en que utilizamos la informaci\u00F3n que recopilamos y recibimos para proporcionar, mantener y mejorar el Servicio; con el fin de ofrecer soluci\u00F3n a los problemas y dar asistencia a los clientes; para proteger el Servicio para todos nuestros usuarios; para ponernos en contacto con usted; y para administrar las cuentas de Tripmefy Business.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Utilizamos una serie de tecnolog\u00EDas para ayudarle a sacar el m\u00E1ximo provecho del Servicio. Nuestros sistemas analizan autom\u00E1ticamente sus datos con el fin de potenciar las funciones de Tripmefy y para mejorar continuamente el Servicio de una forma que no requiera que nadie vea su Contenido. Esto puede incluir, por ejemplo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Asegurarnos de que encuentra lo que necesita cuando busca en su cuenta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Mostr\u00E1ndole la informaci\u00F3n m\u00E1s relevante seg\u00FAn como est\u00E9 o pueda estar utilizando el Servicio en el momento y/o lugar concreto;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sugerir las acciones que puede realizar en funci\u00F3n de la informaci\u00F3n que ha almacenado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sugiri\u00E9ndole funciones o productos del servicio de Tripmefy que consideramos que le ayudar\u00E1n a sacar el m\u00E1ximo provecho de nuestro Servicio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Para usuarios de Tripmefy Business, recomendar personas con las que puede colaborar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Con el fin de ofrecer soluci\u00F3n a los problemas y dar asistencia a los clientes, es posible que nuestro equipo de Atenci\u00F3n al cliente necesite acceder a su informaci\u00F3n, como la direcci\u00F3n de correo electr\u00F3nico de su cuenta e informaci\u00F3n sobre la aplicaci\u00F3n Tripmefy que est\u00E1 utilizando, sujeto a las protecciones que se describen a continuaci\u00F3n. \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Como parte de nuestros esfuerzos para proteger su cuenta y la funcionalidad del Servicio, nuestros sistemas automatizados pueden analizar los mensajes de correo electr\u00F3nico que env\u00EDe a y desde su cuenta de Tripmefy y las notas que comparte para detectar spam, malware u otros posibles problemas de seguridad. Si determinamos que dicho material constituye una violaci\u00F3n de los T\u00E9rminos de Servicio o Gu\u00EDas de usuario, podemos bloquear la entrega o detener el uso compartido del material problem\u00E1tico, tal y como funciona un filtro de correo no deseado en su bandeja de entrada del correo electr\u00F3nico. Obtenga m\u00E1s informaci\u00F3nsobre los pasos que puede seguir para proteger su cuenta, como el uso de contrase\u00F1as seguras, verificaci\u00F3n en dos pasos y cifrado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "De acuerdo con sus preferencias de comunicaci\u00F3n, nos pondremos en contacto con usted ocasionalmente para anunciar nuevos productos y funciones que creamos para usted, compartir consejos para utilizar Tripmefy y hacer m\u00E1s cosas, ofrecer ofertas especiales y proporcionar informaci\u00F3n sobre c\u00F3mo funciona Tripmefy con productos y servicios de nuestros socios comerciales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h1", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u00BFAlguien de Tripmefy podr\u00EDa ver alguna vez mi Contenido?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Usted tiene el control sobre qui\u00E9n ve su Contenido. Limitamos el uso de su Contenido para asegurarnos de que nadie de Tripmefy pueda verlo, a menos que usted nos d\u00E9 permiso expreso o que sea necesario para cumplir con nuestras obligaciones legales. Concretamente: Para ayudar a refinar o mejorar la tecnolog\u00EDa, podemos pedirle permiso para revisar partes de su Contenido. Por ejemplo, si una nueva funci\u00F3n sugiere notas relacionadas que son relevantes para su Contenido, podemos darle la oportunidad de proporcionarnos comentarios sobre c\u00F3mo funciona la funci\u00F3n junto con una muestra del Contenido en cuesti\u00F3n, con el fin de que podamos asegurarnos de que la funci\u00F3n proporciona sugerencias adaptadas de forma adecuada. Dicho acceso a su Contenido se produce \u00FAnicamente con su permiso expreso y est\u00E1 sujeto a estrictas normas de confidencialidad y controles de acceso a datos. Tomar la decisi\u00F3n de darnos este permiso es completamente voluntario. Si se pone en contacto con nuestro equipo de Atenci\u00F3n al cliente para obtener ayuda con partes concretas del Contenido en su cuenta (por ejemplo, si no puede encontrar una nota que cree que deber\u00EDa estar en su cuenta), pedirles posible que le pidamos permiso temporal para mirar su Contenido. Este permiso finaliza en el momento en que se resuelve el problema. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u00BFC\u00F3mo responde Tripmefy a las solicitudes legales de mi informaci\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Protegemos cuidadosamente la privacidad de su cuenta. No divulgaremos su informaci\u00F3n a las autoridades policiales u otras autoridades gubernamentales a menos que consideremos que sea necesario para cumplir las \u00F3rdenes, \u00F3rdenes judiciales, citaciones u otras solicitudes legales del gobierno. Esto puede incluir responder a solicitudes legales de jurisdicciones fuera de Espa\u00F1a si consideramos de buena fe que la ley exige la respuesta en esa jurisdicci\u00F3n, afecta a los usuarios en esa jurisdicci\u00F3n y es coherente con las normas b\u00E1sicas internacionalmente reconocidas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Interpretamos de manera estricta todas las solicitudes de informaci\u00F3n, y solo revelamos el Contenido de su cuenta que atienda espec\u00EDficamente a una orden del gobierno o si ha brindado su consentimiento expl\u00EDcito. De acuerdo con nuestra pol\u00EDtica de notificaci\u00F3n a usuarios, le comunicaremos si creemos que estamos obligados a cumplir una demanda legal de un tercero de su informaci\u00F3n, y rutinariamente rechazaremos las directivas de gobierno sobre el retraso de la notificaci\u00F3n a usuarios que consideremos demasiado generales. Puede encontrar m\u00E1s informaci\u00F3n en nuestro Informe de transparencia actual. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Adem\u00E1s, en raras ocasiones es posible que compartamos su informaci\u00F3n seg\u00FAn sea necesario para investigar o tomar acciones respecto a actividades ilegales, presunto fraude o amenazas potenciales contra personas, propiedad o sistemas de quienes trabajamos en el Servicio, o seg\u00FAn sea necesario con el fin de cumplir nuestras obligaciones legales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h1", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u00BFC\u00F3mo puedo gestionar mi informaci\u00F3n almacenada en Tripmefy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " De acuerdo con nuestra primera ley de protecci\u00F3n de datos, sus datos le pertenecen y en la mayor\u00EDa de los casos puede gestionar su informaci\u00F3n simplemente accediendo a su cuenta y editando su informaci\u00F3n directamente dentro del servicio de Tripmefy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Sin embargo, si lo prefiere, puede ponerse en contacto con nosotros escribiendo a atencion@Tripmefy.com para solicitarnos que proporcionemos acceso, corrijamos, actualicemos o eliminemos su informaci\u00F3n personal. Tenga en cuenta que posiblemente le solicitemos un comprobante de identidad y/o propiedad de la cuenta antes de completar su solicitud. Cumpliremos dichas solicitudes en la medida requerida por la ley aplicable o por el Escudo de Privacidad de Espa\u00F1a. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.scroll(_r65); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Introducci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.scroll(_r66); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u00BFQu\u00E9 tipo de informaci\u00F3n recoge Tripmefy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); return ctx.scroll(_r67); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u00BFC\u00F3mo utiliza Tripmefy mi informaci\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_101_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67); return ctx.scroll(_r68); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u00BFAlguien de Tripmefy podr\u00EDa ver alguna vez mi Contenido?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72); return ctx.scroll(_r69); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u00BFC\u00F3mo responde Tripmefy a las solicitudes legales de mi informaci\u00F3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacidadComponent_Template_a_click_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81); return ctx.scroll(_r70); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u00BFC\u00F3mo puedo gestionar mi informaci\u00F3n almacenada en Tripmefy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "app-scroll-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "app-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_2__["ScrollTopComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 36pt;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: #009788;\n  text-align: center;\n  font-weight: bold;\n  margin-top: 150px;\n  margin-bottom: 150px;\n}\n.politica[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: justify;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-left: 50px;\n  font-size: 11pt;\n}\n.politica[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #009788;\n  text-align: left;\n  font-weight: bold;\n}\n.politica[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #009788;\n}\n.right-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 30%;\n  right: 100px;\n  top: 400px;\n}\n.right-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  list-style-type: none;\n  font-weight: bold;\n}\n.right-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background-color: #009788;\n  color: #009788;\n  border-color: #009788;\n}\n@media screen and (max-device-width: 480px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 20pt;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-top: 30px;\n    margin-bottom: 150px;\n  }\n\n  .politica[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: 40px;\n    font-size: 11pt;\n    margin-top: 300px;\n  }\n\n  .right-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 80%;\n    top: 200px;\n    left: 15px;\n    font-size: 9pt;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9wcml2YWNpZGFkL3ByaXZhY2lkYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ByaXZhY2lkYWQvcHJpdmFjaWRhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIscUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBTXpCO0VBQ0ksZUFBQTtFQUNBLHdJQUFBO0VBQ0EsY0FMVztFQU1YLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDVEo7QURXQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdJQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDUko7QURZQTtFQUNJLGNBckJXO0VBc0JYLGdCQUFBO0VBQ0EsaUJBQUE7QUNUSjtBRGFBO0VBQ0ksY0E1Qlc7QUNrQmY7QURhQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDVko7QURhQTtFQUNJLHdJQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1ZKO0FEYUE7RUFDSSx5QkE3Q1c7RUE4Q1gsY0E5Q1c7RUErQ1gscUJBL0NXO0FDcUNmO0FEYUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQ1ZOOztFRFlFO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDVE47O0VEYUU7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJpdmFjaWRhZC9wcml2YWNpZGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcbiRibGFuY286ICNmZmZmZmY7XG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbiRncmlzOiAjY2ZkOGRjO1xuJG5hcmFuamE6ICNmNGE1MDA7XG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XG4kbGV0dGVyczogIzAzYTlmNDtcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xuXG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAzNnB0O1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICRhenVsLXZlcmRvc287XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuLnBvbGl0aWNhe1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcblxufVxuXG4ucG9saXRpY2EgaDF7XG4gICAgY29sb3I6ICRhenVsLXZlcmRvc287XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxufVxuXG4ucG9saXRpY2EgYntcbiAgICBjb2xvcjogJGF6dWwtdmVyZG9zbztcbn1cbiAgXG4ucmlnaHQtbWVudXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICByaWdodDogMTAwcHg7XG4gICAgdG9wOiA0MDBweFxufVxuXG4ucmlnaHQtbWVudSB1bHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpZ2h0LW1lbnUgaHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtdmVyZG9zbztcbiAgICBjb2xvcjogJGF6dWwtdmVyZG9zbztcbiAgICBib3JkZXItY29sb3I6ICRhenVsLXZlcmRvc287XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIHtcbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gICAgfVxuICAgIC5wb2xpdGljYXtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzAwcHg7XG4gICAgXG4gICAgfVxuICAgICAgICBcbiAgICAucmlnaHQtbWVudXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDlwdDtcbiAgICAgICAgXG4gICAgfVxuXG59XG4iLCIvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzNnB0O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwOTc4ODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4ucG9saXRpY2Ege1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgZm9udC1zaXplOiAxMXB0O1xufVxuXG4ucG9saXRpY2EgaDEge1xuICBjb2xvcjogIzAwOTc4ODtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wb2xpdGljYSBiIHtcbiAgY29sb3I6ICMwMDk3ODg7XG59XG5cbi5yaWdodC1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAlO1xuICByaWdodDogMTAwcHg7XG4gIHRvcDogNDAwcHg7XG59XG5cbi5yaWdodC1tZW51IHVsIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpZ2h0LW1lbnUgaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Nzg4O1xuICBjb2xvcjogIzAwOTc4ODtcbiAgYm9yZGVyLWNvbG9yOiAjMDA5Nzg4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gIH1cblxuICAucG9saXRpY2Ege1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxMXB0O1xuICAgIG1hcmdpbi10b3A6IDMwMHB4O1xuICB9XG5cbiAgLnJpZ2h0LW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIHRvcDogMjAwcHg7XG4gICAgbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDlwdDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacidadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacidad',
                templateUrl: './privacidad.component.html',
                styleUrls: ['./privacidad.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pruebas/pruebas.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pruebas/pruebas.component.ts ***!
  \**********************************************/
/*! exports provided: PruebasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebasComponent", function() { return PruebasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/viaje */ "./src/app/interfaces/viaje.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pedir-imagen/pedir-imagen.component */ "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");








//import { EventEmitter } from 'protractor';
class PruebasComponent {
    constructor(_route, _router, storage, firestoreService) {
        this._route = _route;
        this._router = _router;
        this.storage = storage;
        this.firestoreService = firestoreService;
    }
    ngOnInit() {
    }
    crearViaje(e) {
        console.log("entra");
        var viaje = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__["Viaje"]();
        viaje.pais = "Alemania";
        viaje.ciudad = "Berlín";
        viaje.continente = "Europa";
        viaje.email = "emailinventado@gmail.com";
        viaje.img = e;
        this.firestoreService.createViaje(viaje);
    }
}
PruebasComponent.ɵfac = function PruebasComponent_Factory(t) { return new (t || PruebasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"])); };
PruebasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PruebasComponent, selectors: [["app-pruebas"]], decls: 2, vars: 0, consts: [["titulo", "pruebas"], [3, "url"]], template: function PruebasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-pedir-imagen", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("url", function PruebasComponent_Template_app_pedir_imagen_url_1_listener($event) { return ctx.crearViaje($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_6__["PedirImagenComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BydWViYXMvcHJ1ZWJhcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PruebasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pruebas',
                templateUrl: './pruebas.component.html',
                styleUrls: ['./pruebas.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registro/registro.component.ts":
/*!************************************************!*\
  !*** ./src/app/registro/registro.component.ts ***!
  \************************************************/
/*! exports provided: MyErrorStateMatcher, RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _interfaces_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../interfaces/usuario */ "./src/app/interfaces/usuario.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/volver/volver.component */ "./src/app/shared/volver/volver.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");















/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class RegistroComponent {
    constructor(route, authService, userService) {
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
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.nombreFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.apellidoFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.poblacionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.paisFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.password2FormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.error = "";
    }
    ngOnInit() {
    }
    back() {
        this.route.navigate(['/page1']);
    }
    onRegister() {
        document.getElementById("password1").style.color = "white";
        document.getElementById("password2").style.color = "white";
        document.getElementById("email").style.color = "white";
        this.authService.registerUser(this.email, this.password) //almacenamos el usuario de registro en la bbdd (email y contraseña)
            .then((res) => {
            var usuario = new _interfaces_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"]();
            usuario.nombre = this.nombre;
            usuario.apellidos = this.apellido;
            usuario.email = this.email;
            usuario.password = this.password;
            usuario.tipo = this.tipo;
            usuario.image = "";
            usuario.descripcion = "";
            usuario.ubicacion = this.MaysPrimera(this.poblacion.toLowerCase()) + ", " + this.MaysPrimera(this.pais.toLowerCase());
            this.userService.createUsuario(usuario);
            localStorage.setItem('tipo', this.tipo);
            this.route.navigate(['/bienvenida']);
        }).catch(err => {
            document.getElementById("error5").style.display = "block";
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "none";
            document.getElementById("email").style.color = "red";
        });
    }
    checkFields() {
        if (this.nombre === '' || this.apellido === '' || this.email === '' || this.password === '' ||
            this.password2 === '' || this.poblacion === '' || this.pais === '' || this.tipo === '' || !this.terminos) {
            document.getElementById("password1").style.color = "white";
            document.getElementById("password2").style.color = "white";
            document.getElementById("error1").style.display = "block";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "none";
            document.getElementById("error5").style.display = "none";
            return true;
        }
        else if (this.password.localeCompare(this.password2) != 0) {
            document.getElementById("password1").style.color = "red";
            document.getElementById("password2").style.color = "red";
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "block";
            document.getElementById("error5").style.display = "none";
            return true;
        }
        else if (this.password.length < 8) {
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "block";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error4").style.display = "none";
            document.getElementById("error5").style.display = "none";
            return true;
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(this.email)) {
            document.getElementById("error1").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "block";
            document.getElementById("error4").style.display = "none";
            document.getElementById("error5").style.display = "none";
            return true;
        }
        else {
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
    MaysPrimera(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"])); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], inputs: { error: "error" }, decls: 82, vars: 18, consts: [[1, "contenedor"], [1, "lateral-izq"], ["src", "../../assets/tripmefy.png"], [1, "lateral-drch"], [1, "volver", 3, "click"], [3, "ngSubmit"], [1, "registro_datos"], ["id", "error1"], ["id", "error2"], ["id", "error3"], ["id", "error4"], ["id", "error5"], [1, "grupo-inputs"], [1, "input"], ["matInput", "", "name", "nombre", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "apellido", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "polacion", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "pais", "required", "", 3, "ngModel", "ngModelChange"], [1, "email", "input"], ["id", "email", "matInput", "", "type", "email", "placeholder", "Ej. pat@example.com", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "input"], ["id", "password1", "matInput", "", "name", "password", "required", "", 3, "ngModel", "type", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["id", "password2", "matInput", "", "name", "password2", "required", "", 3, "ngModel", "type", "ngModelChange"], [1, "checkbox"], ["name", "tipo", 3, "ngModel", "ngModelChange"], ["value", "viajero", 1, "example-margin"], ["value", "organizador", 1, "example-margin"], ["name", "terminos", 1, "", 3, "ngModel", "ngModelChange"], [1, "boton_registro"], ["mat-raised-button", "", "type", "submit", 1, "boton", 2, "width", "200px", 3, "disabled"], ["href", "/inicio-sesion"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-volver", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistroComponent_Template_app_volver_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "REGISTRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegistroComponent_Template_form_ngSubmit_7_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Introduce los campos obligatorios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Introduce una contrase\u00F1a de 8 caracteres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Introduce el email en el formato correcto example@examle.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Las contrase\u00F1as no coinciden");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_28_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_32_listener($event) { return ctx.apellido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Poblaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_38_listener($event) { return ctx.poblacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Pa\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_42_listener($event) { return ctx.pais = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_47_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Introduce tu contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_52_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_53_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Confirma la contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_input_ngModelChange_60_listener($event) { return ctx.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_61_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-radio-group", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_mat_radio_group_ngModelChange_65_listener($event) { return ctx.tipo = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegistroComponent_Template_mat_checkbox_ngModelChange_71_listener($event) { return ctx.terminos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Acepto los t\u00E9rminos y la pol\u00EDtica de privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " REGISTRATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "\u00BFYa est\u00E1s registrado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Inicia sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_6__["VolverComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n.contenedor[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.contenedor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.lateral-izq[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 50%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n\n.lateral-drch[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#004cbe, #0da8de);\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n  background-attachment: fixed;\n  overflow: scroll;\n  color: white;\n}\n.lateral-drch[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: none;\n}\n#error1[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n#error2[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n#error3[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n#error4[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n#error5[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: red;\n  position: absolute;\n  z-index: 8;\n  align-content: center;\n  text-align: center;\n  top: 100px;\n  width: 50%;\n  height: 30px;\n  display: none;\n}\n.grupo-inputs[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n}\n.grupo-inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n  width: 30%;\n}\n.input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #004cbe;\n}\n.volver[_ngcontent-%COMP%] {\n  color: white;\n}\n.boton_registro[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2%;\n}\n.registro_datos[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20%;\n}\n.checkbox[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2%;\n}\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 2%;\n  text-align: center;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: white !important;\n}\n .mat-form-field-underline {\n  \n  background-color: white !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: white !important;\n}\n\n  input.mat-input-element {\n  color: white;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: white !important;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: white;\n}\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle, .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: white !important;\n}\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: white !important;\n}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: white !important;\n  \n}\n\n@media screen and (max-device-width: 700px) {\n  .contenedor[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    width: 100%;\n    display: inline-block;\n    background-color: #ffffff;\n    height: 620px;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    width: auto;\n    height: 70%;\n  }\n\n  .lateral-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70%;\n  }\n\n  .lateral-drch[_ngcontent-%COMP%] {\n    background-image: none;\n    background-color: #ffffff;\n    width: auto;\n    height: 30%;\n  }\n\n  #error1[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  #error2[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  #error3[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  #error4[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  #error5[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n    color: red;\n    top: 63%;\n    width: 100%;\n    height: 30px;\n  }\n\n  .grupo-inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 35%;\n  }\n\n  .input[_ngcontent-%COMP%] {\n    width: 74%;\n  }\n\n  .boton_registro[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n\n  .boton_inicio[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 0%;\n  }\n\n  .formulario[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n    .mat-focused .mat-form-field-label {\n    \n    color: #004cbe !important;\n  }\n\n   .mat-form-field-underline {\n    \n    background-color: #004cbe !important;\n  }\n\n   .mat-form-field-ripple {\n    \n    background-color: #004cbe !important;\n  }\n\n  \n    input.mat-input-element {\n    color: #004cbe;\n  }\n\n    .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n    background-color: #004cbe !important;\n  }\n\n    .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n    background-color: #004cbe;\n  }\n\n    .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle, .mat-radio-outer-circle[_ngcontent-%COMP%] {\n    border-color: #004cbe !important;\n  }\n\n    .mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #004cbe !important;\n  }\n\n  .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n    border-color: #004cbe !important;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZXVnZW5pb2dhcmNpYWRlbGFyb3NhL2dpdGh1Yi9zYXJheWdyamltL1RyaXBtZWZ5L3NyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBSXpCLDhCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FETko7QUNXQTtFQUNFLFVBQUE7QURSRjtBQ1dBO0VBQ0ksd0lBQUE7QURSSjtBQ1dBO0VBQ0kscUJBQUE7QURSSjtBQ1dBLG1DQUFBO0FBQ0E7RUFDSSx5QkFuQ0s7RUFvQ0wsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRFJKO0FDWUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0FEVko7QUNnQkEsaUNBQUE7QUFDQTtFQUNFLG1EQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRGJGO0FDZUE7RUFDRSxhQUFBO0FEWkY7QUNlQTtFQUNFLHdJQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEWkY7QUNlQTtFQUNFLHdJQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEWkY7QUNlQTtFQUNFLHdJQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEWkY7QUNnQkE7RUFDRSx3SUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRGJGO0FDaUJBO0VBQ0Usd0lBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURkRjtBQ2tCQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEZkY7QUNpQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRGRGO0FDaUJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEZEY7QUNrQkE7RUFDSSxxQkFBQTtFQUNBLGNBcEtTO0FEcUpiO0FDaUJBO0VBQ0UsWUFBQTtBRGRGO0FDa0JBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FEZko7QUNpQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QURkRjtBQ2dCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRGJGO0FDZ0JBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FEYkY7QUNnQkE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FEYkY7QUNnQkM7RUFDQyw0QkFBQTtFQUNBLGtDQUFBO0FEYkY7QUNnQkE7RUFDQyx5Q0FBQTtFQUNBLGtDQUFBO0FEYkQ7QUNnQkEsc0JBQUE7QUFDQTtFQUNFLFlBQUE7QURiRjtBQ2dCQTtFQUNFLGtDQUFBO0FEYkY7QUNnQkE7RUFDRSx1QkFBQTtBRGJGO0FDZ0JBO0VBQ0UsOEJBQUE7QURiRjtBQ2dCQTtFQUNFLGtDQUFBO0FEYkY7QUNnQkE7RUFDRSw4QkFBQTtFQUFnQywwQkFBQTtBRFpsQztBQ2dCQSxlQUFBO0FBQ0E7RUFFSTtJQUNJLGVBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkE1T0M7SUE2T0QsYUFBQTtFRGROOztFQ2lCRTtJQUNJLHlCQWpQQztJQWtQRCxXQUFBO0lBQ0EsV0FBQTtFRGROOztFQ2lCRTtJQUNJLFdBQUE7RURkTjs7RUNnQkU7SUFDSSxzQkFBQTtJQUNBLHlCQTNQQztJQTRQRCxXQUFBO0lBQ0EsV0FBQTtFRGJOOztFQ2VFO0lBQ0Usd0lBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VEWko7O0VDY0U7SUFDRSx3SUFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RURYSjs7RUNhRTtJQUNFLHdJQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFRFZKOztFQ1lFO0lBQ0Usd0lBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VEVEo7O0VDV0U7SUFDRSx3SUFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RURSSjs7RUNXRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VEUko7O0VDV0U7SUFDRSxVQUFBO0VEUko7O0VDVUU7SUFDSSxvQkFBQTtFRFBOOztFQ1dFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0VEUko7O0VDV0U7SUFDRSxVQUFBO0VEUko7O0VDV0U7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VEUko7O0VDV0c7SUFDQyw0QkFBQTtJQUNBLG9DQUFBO0VEUko7O0VDV0U7SUFDQyx5Q0FBQTtJQUNBLG9DQUFBO0VEUkg7O0VDV0Usc0JBQUE7RUFDQTtJQUNFLGNBNVVPO0VEb1VYOztFQ1dFO0lBQ0Usb0NBQUE7RURSSjs7RUNXRTtJQUNFLHlCQXBWTztFRDRVWDs7RUNXRTtJQUNFLGdDQUFBO0VEUko7O0VDV0U7SUFDRSxvQ0FBQTtFRFJKOztFQ1dFO0lBQ0UsZ0NBQUE7SUFBc0MsMEJBQUE7RURQMUM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi8qKkNPTlRFTkVET1IgWSBGVUVOVEUgQ09Nw5pOKiovXG4uY29udGVuZWRvciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5jb250ZW5lZG9yIHAge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKipMQVRFUkFMIElaUVVJRVJETyBERSBMQSBQw4FHSU5BKiovXG4ubGF0ZXJhbC1penEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubGF0ZXJhbC1penEgaW1nIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLyoqTEFURVJBTCBERVJFQ0hPIERFIExBIFDDgUdJTkEqKi9cbi5sYXRlcmFsLWRyY2gge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwNGNiZSwgIzBkYThkZSk7XG4gIHdpZHRoOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sYXRlcmFsLWRyY2ggaDEge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXJyb3IxIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXJyb3IyIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXJyb3IzIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXJyb3I0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXJyb3I1IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZ3J1cG8taW5wdXRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3J1cG8taW5wdXRzIC5pbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA0Y2JlO1xufVxuXG4udm9sdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm90b25fcmVnaXN0cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4ucmVnaXN0cm9fZGF0b3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuLmNoZWNrYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLyogaW5wdXQgY29sb3IgY2xhc3MgKi9cbjo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqL1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDcwMHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiA2MjBweDtcbiAgfVxuXG4gIC5sYXRlcmFsLWl6cSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxuXG4gIC5sYXRlcmFsLWl6cSBpbWcge1xuICAgIGhlaWdodDogNzAlO1xuICB9XG5cbiAgLmxhdGVyYWwtZHJjaCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMzAlO1xuICB9XG5cbiAgI2Vycm9yMSB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRvcDogNjMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gICNlcnJvcjIge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0b3A6IDYzJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAjZXJyb3IzIHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdG9wOiA2MyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgI2Vycm9yNCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRvcDogNjMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gICNlcnJvcjUge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0b3A6IDYzJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAuZ3J1cG8taW5wdXRzIC5pbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB3aWR0aDogMzUlO1xuICB9XG5cbiAgLmlucHV0IHtcbiAgICB3aWR0aDogNzQlO1xuICB9XG5cbiAgLmJvdG9uX3JlZ2lzdHJvIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5ib3Rvbl9pbmljaW8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgfVxuXG4gIC5mb3JtdWxhcmlvIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgICBjb2xvcjogIzAwNGNiZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Y2JlICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Y2JlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBpbnB1dCBjb2xvciBjbGFzcyAqL1xuICA6Om5nLWRlZXAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNvbG9yOiAjMDA0Y2JlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRjYmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGNiZTtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA0Y2JlICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGNiZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA0Y2JlICFpbXBvcnRhbnQ7XG4gICAgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG4gIH1cbn0iLCIkYXp1bC1jbGFybzogIzBkYThkZTtcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xuJGJsYW5jbzogI2ZmZmZmZjtcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuJGdyaXM6ICNjZmQ4ZGM7XG4kbmFyYW5qYTogI2Y0YTUwMDtcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcblxuXG4vKipDT05URU5FRE9SIFkgRlVFTlRFIENPTcOaTioqL1xuLmNvbnRlbmVkb3J7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBcblxufVxuXG4uZm9ybXVsYXJpb3tcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmNvbnRlbmVkb3IgcHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyoqTEFURVJBTCBJWlFVSUVSRE8gREUgTEEgUMOBR0lOQSoqL1xuLmxhdGVyYWwtaXpxe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbn1cblxuLmxhdGVyYWwtaXpxIGltZ3tcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBcblxufVxuXG5cbi8qKkxBVEVSQUwgREVSRUNITyBERSBMQSBQw4FHSU5BKiovXG4ubGF0ZXJhbC1kcmNoe1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGF6dWwtcm95YWwsICRhenVsLWNsYXJvKTtcbiAgd2lkdGg6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7IFxuICBjb2xvcjogd2hpdGU7ICAgIFxufVxuLmxhdGVyYWwtZHJjaCBoMXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2Vycm9yMXtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xuXG59XG4jZXJyb3Iye1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbn1cbiNlcnJvcjN7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogODtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMTAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogbm9uZTtcblxufVxuXG4jZXJyb3I0e1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbn1cblxuI2Vycm9yNXtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5ncnVwby1pbnB1dHN7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncnVwby1pbnB1dHMgLmlucHV0e1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzAlO1xufVxuXG4uaW5wdXR7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6JGF6dWwtcm95YWw7XG59XG4udm9sdmVye1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmJvdG9uX3JlZ2lzdHJve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbn1cbi5yZWdpc3Ryb19kYXRvc3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG4uY2hlY2tib3h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDoyJTtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiB9XG5cbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0gXG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi8qIGlucHV0IGNvbG9yIGNsYXNzICovXG46Om5nLWRlZXAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSAsIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovIFxuIH1cblxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MDBweCkge1xuXG4gICAgLmNvbnRlbmVkb3J7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcbiAgICAgICAgaGVpZ2h0OiA2MjBweDtcbiAgICB9XG4gICAgXG4gICAgLmxhdGVyYWwtaXpxe1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA3MCU7IFxuICAgIFxuICAgIH1cbiAgICAubGF0ZXJhbC1penEgaW1ne1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICB9XG4gICAgLmxhdGVyYWwtZHJjaHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogMzAlO1xuICAgIH1cbiAgICAjZXJyb3Ixe1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB0b3A6IDYzJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAjZXJyb3Iye1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB0b3A6IDYzJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAjZXJyb3Ize1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB0b3A6IDYzJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAjZXJyb3I0e1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB0b3A6IDYzJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAjZXJyb3I1e1xuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB0b3A6IDYzJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIC5ncnVwby1pbnB1dHMgLmlucHV0e1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICB9XG5cbiAgICAuaW5wdXR7XG4gICAgICB3aWR0aDogNzQlO1xuICAgIH1cbiAgICAuYm90b25fcmVnaXN0cm97XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgIFxuICAgIH1cblxuICAgIC5ib3Rvbl9pbmljaW97XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOjAlO1xuICAgIH1cblxuICAgIC5mb3JtdWxhcmlve1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gICAgICBjb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDtcbiAgICAgfVxuICAgIFxuICAgICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1yb3lhbCAhaW1wb3J0YW50O1xuICAgIH0gXG4gICAgXG4gICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1yb3lhbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAvKiBpbnB1dCBjb2xvciBjbGFzcyAqL1xuICAgIDo6bmctZGVlcCBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgICBjb2xvcjokYXp1bC1yb3lhbDtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1yb3lhbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXJveWFsO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlICwgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkYXp1bC1yb3lhbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGF6dWwtcm95YWwgIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovIFxuICAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-registro',
                templateUrl: './registro.component.html',
                styleUrls: ['./registro.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"] }]; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthService {
    constructor(afAuth, route) {
        this.afAuth = afAuth;
        this.route = route;
        this.userData = afAuth.authState;
    }
    registerUser(email, password) {
        return new Promise((resolve, reject) => {
            this.afAuth.createUserWithEmailAndPassword(email, password)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    loginByEmail(user) {
        const { email, password } = user;
        this.afAuth.signInWithEmailAndPassword(email, password)
            .then(res => {
            console.log('Successfuly', res);
            this.route.navigate(['/mis-viajes']);
        })
            .catch(err => console.log('Error', err));
    }
    logOut() {
        console.log('Successfuly');
        this.afAuth.signOut();
        localStorage.clear();
        this.route.navigate(['/']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/firestore/firestore.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/firestore/firestore.service.ts ***!
  \*********************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");




class FirestoreService {
    //private db: AngularFirestore;
    constructor(firestore, db, storage) {
        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.afs = this.firestore.collection('Viaje');
        this.sli = this.firestore.collection('Slides');
    }
    createViaje(data) {
        //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
        //  return r.id;});   
        data.id = this.firestore.createId();
        data.unidas = "0";
        return this.afs.doc(data.id).set(Object.assign({}, data)).then(r => {
            return data.id;
        });
    }
    getViaje(id) {
        return this.afs.doc(id).get().toPromise().then(r => {
            //Si quisieras forzar que se ejecute constructor de Contacto:
            //return new Contacto(r.data() as IContacto);
            var contacto = r.data();
            console.log(contacto);
            return contacto;
        });
    }
    getViajes() {
        return this.afs.valueChanges();
    }
    updateViaje(data) {
        return this.afs.doc(data.id).set(data);
    }
    removeViaje(id) {
        return this.afs.doc(id).delete();
    }
    // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.
    getViajesSorted() {
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
        return this.firestore.collection('Viaje', ref => ref.orderBy('ciudad')).valueChanges();
    }
    getViajesFiltered(pais) {
        return this.firestore.collection('Viaje', ref => ref.where('pais', '==', pais)).valueChanges();
    }
    getViajesByEmail(email) {
        return this.firestore.collection('Viaje', ref => ref.where('email', '==', email)).valueChanges();
    }
    getViajesCombined(pais) {
        return this.firestore.collection('Viaje', ref => ref.where('pais', '==', pais).orderBy("ciudad")).valueChanges();
    }
    //Tarea para subir archivo
    storageFile(nombreArchivo, datos) {
        return this.storage.upload(nombreArchivo, datos);
    }
    //Referencia del archivo
    getFileRef(nombreArchivo) {
        return this.storage.ref(nombreArchivo);
    }
    getSlides(idViaje) {
        return this.firestore.collection('Slides', ref => ref.where('idViaje', '==', idViaje)).valueChanges();
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"])); };
FirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/firestore/opiniones-firestore.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/firestore/opiniones-firestore.service.ts ***!
  \*******************************************************************/
/*! exports provided: OpinionesFirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionesFirestoreService", function() { return OpinionesFirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");




class OpinionesFirestoreService {
    constructor(firestore, db, storage) {
        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.com = this.firestore.collection('Comentario');
        this.pun = this.firestore.collection('Puntuacion');
    }
    createComentario(data) {
        //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
        //  return r.id;});   
        data.id = this.firestore.createId();
        return this.com.doc(data.id).set(Object.assign({}, data)).then(r => {
            return data.id;
        });
    }
    createPuntuacion(data) {
        //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
        //  return r.id;});   
        data.id = this.firestore.createId();
        return this.pun.doc(data.id).set(Object.assign({}, data)).then(r => {
            return data.id;
        });
    }
    getComentario(id) {
        return this.com.doc(id).get().toPromise().then(r => {
            //Si quisieras forzar que se ejecute constructor de Contacto:
            //return new Contacto(r.data() as IContacto);
            var contacto = r.data();
            console.log(contacto);
            return contacto;
        });
    }
    getPuntuacion(id) {
        return this.pun.doc(id).get().toPromise().then(r => {
            //Si quisieras forzar que se ejecute constructor de Contacto:
            //return new Contacto(r.data() as IContacto);
            var contacto = r.data();
            console.log(contacto);
            return contacto;
        });
    }
    getComentarios() {
        return this.com.valueChanges();
    }
    getPuntuaciones() {
        return this.pun.valueChanges();
    }
    updateComentario(data) {
        return this.com.doc(data.id).set(data);
    }
    updatePuntuacion(data) {
        return this.pun.doc(data.id).set(data);
    }
    removeComentario(id) {
        return this.com.doc(id).delete();
    }
    removePuntuacion(id) {
        return this.pun.doc(id).delete();
    }
    // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.
    getComentariosSorted() {
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
        return this.firestore.collection('Comentario', ref => ref.orderBy('comentador')).valueChanges();
    }
    getPuntuacionesSorted() {
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
        return this.firestore.collection('Puntuacion', ref => ref.orderBy('puntuado')).valueChanges();
    }
    getComentariosFiltered(comentado) {
        return this.firestore.collection('Comentario', ref => ref.where('comentado', '==', comentado)).valueChanges();
    }
    getPuntuacionesFiltered(puntuado) {
        return this.firestore.collection('Puntuacion', ref => ref.where('puntuado', '==', puntuado)).valueChanges();
    }
    getComentariosCombined(comentado) {
        return this.firestore.collection('Comentario', ref => ref.where('comentado', '==', comentado).orderBy("comentador")).valueChanges();
    }
    getPuntuacionesCombined(puntuado) {
        return this.firestore.collection('Puntuacion', ref => ref.where('puntuado', '==', puntuado).orderBy("puntuador")).valueChanges();
    }
    //Tarea para subir archivo
    storageFile(nombreArchivo, datos) {
        return this.storage.upload(nombreArchivo, datos);
    }
    //Referencia del archivo
    getFileRef(nombreArchivo) {
        return this.storage.ref(nombreArchivo);
    }
}
OpinionesFirestoreService.ɵfac = function OpinionesFirestoreService_Factory(t) { return new (t || OpinionesFirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"])); };
OpinionesFirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OpinionesFirestoreService, factory: OpinionesFirestoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpinionesFirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/firestore/solicitud-firestore.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/firestore/solicitud-firestore.service.ts ***!
  \*******************************************************************/
/*! exports provided: SolicitudFirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudFirestoreService", function() { return SolicitudFirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");




class SolicitudFirestoreService {
    constructor(firestore, db, storage) {
        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.afs = this.firestore.collection('Solicitud');
    }
    getSolicitudesByUserId(id) {
        return this.firestore.collection('Solicitud', ref => ref.where('idUsuario', '==', id)).valueChanges();
    }
    getSolicitudesByTripId(id) {
        return this.firestore.collection('Solicitud', ref => ref.where('idViaje', '==', id)).valueChanges();
    }
    getSolicitudesByOrganizadorId(id) {
        return this.firestore.collection('Solicitud', ref => ref.where('idOrganizador', '==', id)).valueChanges();
    }
    getSolicitudesByOrganizadorEmail(email) {
        return this.firestore.collection('Solicitud', ref => ref.where('idOrganizador', '==', email)).valueChanges();
    }
    createSolicitud(data) {
        //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
        //  return r.id;});   
        data.id = this.firestore.createId();
        localStorage.setItem('solicitud', data.id);
        return this.afs.doc(data.id).set(Object.assign({}, data)).then(r => {
            return data.id;
        });
    }
    updateSolicitud(data) {
        return this.afs.doc(data.id).set(data);
    }
}
SolicitudFirestoreService.ɵfac = function SolicitudFirestoreService_Factory(t) { return new (t || SolicitudFirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"])); };
SolicitudFirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SolicitudFirestoreService, factory: SolicitudFirestoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolicitudFirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/firestore/usuario-firestore.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/firestore/usuario-firestore.service.ts ***!
  \*****************************************************************/
/*! exports provided: UsuarioFirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioFirestoreService", function() { return UsuarioFirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");




class UsuarioFirestoreService {
    constructor(firestore, db, storage) {
        this.firestore = firestore;
        this.db = db;
        this.storage = storage;
        this.afs = this.firestore.collection('Usuario');
    }
    createUsuario(data) {
        //return this.firestore.collection<IContacto>('contactos').add({... data}).then(r=>{
        //  return r.id;});   
        data.id = this.firestore.createId();
        data.estrellas = "-1";
        localStorage.setItem('usuario', data.id);
        return this.afs.doc(data.id).set(Object.assign({}, data)).then(r => {
            return data.id;
        });
    }
    createUsuarioConID(data) {
        return this.afs.doc(data.id).set(Object.assign({}, data)).then(r => {
            return data.id;
        });
    }
    getUsuario(id) {
        return this.afs.doc(id).get().toPromise().then(r => {
            //Si quisieras forzar que se ejecute constructor de Contacto:
            //return new Contacto(r.data() as IContacto);
            var contacto = r.data();
            return contacto;
        });
    }
    getUsuarios() {
        return this.afs.valueChanges();
    }
    updateUsuario(data) {
        return this.afs.doc(data.id).set(data);
    }
    removeUsuario(id) {
        return this.afs.doc(id).delete();
    }
    // Los siguientes métodos se muestran a modo de ejemplo. No son usados en esta practica.
    getUsuariosSorted() {
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
        return this.firestore.collection('Usuario', ref => ref.orderBy('puntuacion')).valueChanges();
    }
    getUsuariosFiltered(id) {
        return this.firestore.collection('Usuario', ref => ref.where('id', '==', id)).valueChanges();
    }
    getUsuariosByEmail(email) {
        return this.firestore.collection('Usuario', ref => ref.where('email', '==', email)).valueChanges();
    }
    getusuariosCombined(pais) {
        return this.firestore.collection('Usuario', ref => ref.where('pais', '==', pais).orderBy("ciudad")).valueChanges();
    }
    //Tarea para subir archivo
    storageFile(nombreArchivo, datos) {
        return this.storage.upload(nombreArchivo, datos);
    }
    //Referencia del archivo
    getFileRef(nombreArchivo) {
        return this.storage.ref(nombreArchivo);
    }
}
UsuarioFirestoreService.ɵfac = function UsuarioFirestoreService_Factory(t) { return new (t || UsuarioFirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"])); };
UsuarioFirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioFirestoreService, factory: UsuarioFirestoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioFirestoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/boton/boton.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/boton/boton.component.ts ***!
  \*************************************************/
/*! exports provided: BotonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonComponent", function() { return BotonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



class BotonComponent {
    constructor() {
        this.texto = "tu texto";
    }
    ngOnInit() {
    }
}
BotonComponent.ɵfac = function BotonComponent_Factory(t) { return new (t || BotonComponent)(); };
BotonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BotonComponent, selectors: [["app-boton"]], inputs: { texto: "texto" }, decls: 2, vars: 1, consts: [["mat-raised-button", "", "color", "primary", 2, "height", "3em", "width", "15em"]], template: function BotonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.texto);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: ["button[_ngcontent-%COMP%] {\n  background-color: #009788;\n  color: #ffffff;\n  vertical-align: center;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 2px 0px #cfd8dc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvYm90b24vYm90b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9ib3Rvbi9ib3Rvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIscUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBT3pCO0VBQ0kseUJBSlc7RUFLWCxjQWRLO0VBZUwsc0JBQUE7QUNWSjtBRFlBO0VBR0ksbUNBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ib3Rvbi9ib3Rvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuJGxldHRlcnM6ICMwM2E5ZjQ7XG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcblxuXG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtdmVyZG9zbztcbiAgICBjb2xvcjogJGJsYW5jbztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9uOmhvdmVye1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbn0iLCIvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTc4ODtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4ICNjZmQ4ZGM7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4ICNjZmQ4ZGM7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCAjY2ZkOGRjO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-boton',
                templateUrl: './boton.component.html',
                styleUrls: ['./boton.component.scss']
            }]
    }], function () { return []; }, { texto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/comentario-pu/comentario-pu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/comentario-pu/comentario-pu.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComentarioPuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioPuComponent", function() { return ComentarioPuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _boton_boton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boton/boton.component */ "./src/app/shared/boton/boton.component.ts");




class ComentarioPuComponent {
    constructor() {
        this.comentario = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.miComentario = "";
    }
    getComentario() {
        var cerrado = true; //tenemos que cerrar porque hemos aceptado
        this.comentario.emit(this.miComentario);
        this.cerrado.emit(cerrado); //como aceptamos, cerramos
    }
    cerrar() {
        var cerrado = true; //devolvemos un true para cerrar el popup
        this.miComentario = ""; //no se ha comentado, se devuelve un vacío para que no se haga el comentario
        this.cerrado.emit(cerrado);
        this.comentario.emit(this.miComentario);
        return cerrado;
    }
    ngOnInit() {
    }
}
ComentarioPuComponent.ɵfac = function ComentarioPuComponent_Factory(t) { return new (t || ComentarioPuComponent)(); };
ComentarioPuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComentarioPuComponent, selectors: [["app-comentario-pu"]], outputs: { comentario: "comentario", cerrado: "cerrado" }, decls: 11, vars: 1, consts: [["id", "all", 1, "outsider"], [1, "content"], [1, "cerrar"], ["src", "../../../assets/cerrar.png", "id", "close", 3, "click"], [1, "formulario"], ["name", "message", 3, "ngModel", "ngModelChange"], [1, "bloque-aceptar"], ["id", "aceptar", "texto", "Aceptar", 3, "click"]], template: function ComentarioPuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComentarioPuComponent_Template_img_click_3_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Haz un comentario sobre este usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComentarioPuComponent_Template_textarea_ngModelChange_8_listener($event) { return ctx.miComentario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-boton", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComentarioPuComponent_Template_app_boton_click_10_listener() { return ctx.getComentario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.miComentario);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _boton_boton_component__WEBPACK_IMPORTED_MODULE_2__["BotonComponent"]], styles: [".cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n  position: absolute;\n  margin-left: 25%;\n  z-index: 100;\n  background-color: #ffffff;\n  width: 50%;\n  height: 50%;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.bloque-aceptar[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n}\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n@media screen and (max-device-width: 480px) {\n  .outsider[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvY29tZW50YXJpby1wdS9jb21lbnRhcmlvLXB1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tZW50YXJpby1wdS9jb21lbnRhcmlvLXB1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFNekI7RUFDSSxtQkFBQTtBQ1RKO0FEV0E7RUFDSSxlQUFBO0FDUko7QURZQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEYUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdJQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFyQ0s7RUFzQ0wsVUFBQTtFQUNBLFdBQUE7QUNYSjtBRGVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBOzs7O0lBQUE7RUFPQSwrQ0FBQTtBQ1pKO0FEaUJBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZEo7QURpQkE7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2RIO0FEaUJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNkSjtBRGlCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZEo7QURtQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDaEJKO0FEbUJBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUdBLGtCQUFBO0lBQ0EsZUFBQTtFQ25CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbWVudGFyaW8tcHUvY29tZW50YXJpby1wdS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuJGxldHRlcnM6ICMwM2E5ZjQ7XG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcblxuLmNlcnJhcntcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNlcnJhcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICBcbn1cblxuLmNlcnJhciBpbWd7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgIFxufVxuXG4ub3V0c2lkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgLy9iYWNrZ3JvdW5kOiAkYXp1bC12ZXJkb3NvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgXG59XG5cbi5jb250ZW50e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAvKipcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgKiovXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xufVxuXG5cblxuLmJsb3F1ZS1hY2VwdGFye1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtdWxhcmlve1xuICAgd2lkdGg6IDEwMCU7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgXG59XG5cbmZvcm17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIFxufVxudGV4dGFyZWF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIFxufVxuXG5cbi5ib3RvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIHtcblxuICAgIC5vdXRzaWRlcntcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgfVxuXG59IiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jZXJyYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2VycmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VycmFyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm91dHNpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvKipcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICoqL1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmJsb3F1ZS1hY2VwdGFyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib3RvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC5vdXRzaWRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComentarioPuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comentario-pu',
                templateUrl: './comentario-pu.component.html',
                styleUrls: ['./comentario-pu.component.scss']
            }]
    }], function () { return []; }, { comentario: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cerrado: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/edicion-pu/edicion-pu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/edicion-pu/edicion-pu.component.ts ***!
  \***********************************************************/
/*! exports provided: EdicionPuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionPuComponent", function() { return EdicionPuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pedir-imagen/pedir-imagen.component */ "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _boton_boton_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../boton/boton.component */ "./src/app/shared/boton/boton.component.ts");






class EdicionPuComponent {
    constructor(firestoreServiceUser) {
        this.firestoreServiceUser = firestoreServiceUser;
        this.newDescripcion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.foto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.miFoto = "";
    }
    setImagen(e) {
        this.miFoto = e;
    }
    chooseImagen() {
        document.getElementById("pedir-imagen").style.display = "block";
        document.getElementById("allContent").style.display = "none";
    }
    save() {
        var cerrado = true; //tenemos que cerrar porque hemos aceptado
        this.newDescripcion.emit(this.descripcion);
        this.cerrado.emit(cerrado); //como aceptamos, cerramos
        this.foto.emit(this.miFoto);
        this.signal.emit(this.user);
    }
    cerrar() {
        var cerrado = true; //devolvemos un true para cerrar el popup
        this.descripcion = ""; //no se ha comentado, se devuelve un vacío para que no se haga el comentario
        this.miFoto = "";
        this.cerrado.emit(cerrado);
        this.newDescripcion.emit(this.descripcion);
        this.foto.emit(this.miFoto);
        this.signal.emit(this.user);
        return cerrado;
    }
    cerrarPopup(e, id) {
        if (e == true) {
            document.getElementById(id).style.display = "none";
            document.getElementById("allContent").style.display = "block";
        }
    }
    ngOnInit() {
    }
}
EdicionPuComponent.ɵfac = function EdicionPuComponent_Factory(t) { return new (t || EdicionPuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioFirestoreService"])); };
EdicionPuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EdicionPuComponent, selectors: [["app-edicion-pu"]], inputs: { descripcion: "descripcion", user: "user" }, outputs: { newDescripcion: "newDescripcion", foto: "foto", cerrado: "cerrado", signal: "signal" }, decls: 21, vars: 1, consts: [["id", "all", 1, "outsider"], [1, "content"], ["id", "pedir-imagen", "directiva", "users", 3, "cerrar", "url"], ["id", "allContent"], [1, "cerrar"], ["src", "../../../assets/cerrar.png", "id", "close", 3, "click"], [1, "elementos"], [1, "form"], ["name", "message", 3, "ngModel", "ngModelChange"], ["src", "../../../assets/camera.png", "id", "normal", "texto", "cambiar imagen de perfil", 3, "click"], ["id", "movil"], [1, "boton-img"], ["id", "foto"], ["src", "../../../assets/camera.png", 3, "click"], [1, "bloque-aceptar"], ["id", "aceptar", "texto", "Save", 3, "click"]], template: function EdicionPuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-pedir-imagen", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cerrar", function EdicionPuComponent_Template_app_pedir_imagen_cerrar_2_listener($event) { return ctx.cerrarPopup($event, "pedir-imagen"); })("url", function EdicionPuComponent_Template_app_pedir_imagen_url_2_listener($event) { return ctx.setImagen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionPuComponent_Template_img_click_5_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EdicionPuComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "                       \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionPuComponent_Template_img_click_12_listener() { return ctx.chooseImagen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cambiar foto de perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionPuComponent_Template_img_click_17_listener() { return ctx.chooseImagen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Examinar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-boton", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdicionPuComponent_Template_app_boton_click_20_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.descripcion);
    } }, directives: [_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_2__["PedirImagenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _boton_boton_component__WEBPACK_IMPORTED_MODULE_4__["BotonComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 100px;\n}\n.cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n  position: absolute;\n  margin-left: 25%;\n  z-index: 100;\n  background-color: #ffffff;\n  width: 50%;\n  height: 50%;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.bloque-aceptar[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#allContent[_ngcontent-%COMP%] {\n  height: 70%;\n}\n.elementos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n}\n#normal[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n#pedir-imagen[_ngcontent-%COMP%] {\n  display: none;\n}\n.form[_ngcontent-%COMP%] {\n  padding: 20px 20px 20px 20px;\n  height: 100%;\n  width: 70%;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n#normal[_ngcontent-%COMP%] {\n  display: block;\n}\n#movil[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-device-width: 480px) {\n  #normal[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #movil[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .outsider[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin-left: 0%;\n  }\n\n  .cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n\n  .elementos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    margin-top: 0px;\n    padding: 0px 0px 0px 0px;\n  }\n\n  .elementos[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    margin-top: 50px;\n  }\n\n  .form[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 50%;\n  }\n\n  .boton-img[_ngcontent-%COMP%] {\n    padding: 20px 20px 20px 20px;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    text-decoration: underline;\n  }\n\n  #foto[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvZWRpY2lvbi1wdS9lZGljaW9uLXB1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZWRpY2lvbi1wdS9lZGljaW9uLXB1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFNekI7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDVEo7QURZQTtFQUNJLG1CQUFBO0FDVEo7QURXQTtFQUNJLGVBQUE7QUNSSjtBRFlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEo7QURhQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0lBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQTFDSztFQTJDTCxVQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEZUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0E7Ozs7SUFBQTtFQU9BLCtDQUFBO0FDWko7QURpQkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNkSjtBRGlCQTtFQUNJLFdBQUE7QUNkSjtBRGtCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2ZKO0FEa0JBO0VBQ0ksaUJBQUE7QUNmSjtBRGlCQTtFQUNJLGFBQUE7QUNkSjtBRGlCQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNkSjtBRG9CQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDakJKO0FEc0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHNCQTtFQUNJLGNBQUE7QUNuQko7QURxQkE7RUFDSSxhQUFBO0FDbEJKO0FEc0JBO0VBRUk7SUFDSSxhQUFBO0VDcEJOOztFRHNCRTtJQUNJLGNBQUE7RUNuQk47O0VEcUJFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFHQSxrQkFBQTtJQUNBLGVBQUE7RUNwQk47O0VEd0JFO0lBQ0ksbUJBQUE7RUNyQk47O0VEd0JFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7RUNyQk47O0VEeUJFO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFFQSxnQkFBQTtFQ3ZCTjs7RUQwQkU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQ3ZCTjs7RUQwQkU7SUFDRyw0QkFBQTtFQ3ZCTDs7RUQ0QkU7SUFDSSwwQkFBQTtFQ3pCTjs7RURnQ0U7SUFDSSxrQkFBQTtFQzdCTjs7RURnQ0U7SUFDSSxZQUFBO0VDN0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZWRpY2lvbi1wdS9lZGljaW9uLXB1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcbiRibGFuY286ICNmZmZmZmY7XG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbiRncmlzOiAjY2ZkOGRjO1xuJG5hcmFuamE6ICNmNGE1MDA7XG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XG4kbGV0dGVyczogIzAzYTlmNDtcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xuXG5pbWd7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmNlcnJhcntcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNlcnJhcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICBcbn1cblxuLmNlcnJhciBpbWd7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgIFxufVxuXG4ub3V0c2lkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgLy9iYWNrZ3JvdW5kOiAkYXp1bC12ZXJkb3NvO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgXG59XG5cbi5jb250ZW50e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAvKipcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgKiovXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xufVxuXG5cblxuLmJsb3F1ZS1hY2VwdGFye1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhbGxDb250ZW50e1xuICAgIGhlaWdodDogNzAlO1xuICAgIFxufVxuXG4uZWxlbWVudG9ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBcbn1cbiNub3JtYWx7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4jcGVkaXItaW1hZ2Vue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3Jte1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgXG4gICAgXG59XG5cblxudGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuLmJvdG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25vcm1hbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiNtb3ZpbHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIHtcblxuICAgICNub3JtYWx7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNtb3ZpbHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5vdXRzaWRlcntcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgICAgXG4gICAgfVxuXG4gICAgLmNlcnJhciBpbWd7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuXG4gICAgLmVsZW1lbnRvcyBpbWd7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmVsZW1lbnRvc3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuXG4gICAgLmZvcm17XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICB9XG5cbiAgICAuYm90b24taW1ne1xuICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIFxuICAgICNmb3Rve1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgdGV4dGFyZWF7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cblxuXG5cblxuXG59XG5cbiIsIi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG5pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmNlcnJhciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jZXJyYXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZXJyYXIgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ub3V0c2lkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIC8qKlxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgKiovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uYmxvcXVlLWFjZXB0YXIge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYWxsQ29udGVudCB7XG4gIGhlaWdodDogNzAlO1xufVxuXG4uZWxlbWVudG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzAlO1xufVxuXG4jbm9ybWFsIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbiNwZWRpci1pbWFnZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwJTtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNub3JtYWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI21vdmlsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gICNub3JtYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbW92aWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm91dHNpZGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgfVxuXG4gIC5jZXJyYXIgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLmVsZW1lbnRvcyBpbWcge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICB9XG5cbiAgLmVsZW1lbnRvcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuXG4gIC5ib3Rvbi1pbWcge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gIH1cblxuICBoMiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAjZm90byB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgdGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EdicionPuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edicion-pu',
                templateUrl: './edicion-pu.component.html',
                styleUrls: ['./edicion-pu.component.scss']
            }]
    }], function () { return [{ type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioFirestoreService"] }]; }, { descripcion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newDescripcion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], foto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cerrado: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], signal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/privacidad"]; };
class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 2, consts: [[1, "main"], [2, "cursor", "pointer", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Politica de privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A9 2020, Tripmefy SL. Todos los derechos reservados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".main[_ngcontent-%COMP%] {\n  height: 78px;\n  width: 100%;\n  background-color: #413D33;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 14px;\n  font-size: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ1REIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xuJGJsYW5jbzogI2ZmZmZmZjtcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuJGdyaXM6ICNjZmQ4ZGM7XG4kbmFyYW5qYTogI2Y0YTUwMDtcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcbiRsZXR0ZXJzOiAjMDNhOWY0O1xuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcbiRhenVsLXZlcmRvc286ICMwMDk3ODg7XG5cbi5tYWlue1xuXHRoZWlnaHQ6IDc4cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDEzRDMzO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAxNHB4O1xuXHRmb250LXNpemU6IDgwJTtcblxufSIsIi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4ubWFpbiB7XG4gIGhlaWdodDogNzhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTNEMzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGZvbnQtc2l6ZTogODAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore/solicitud-firestore.service */ "./src/app/services/firestore/solicitud-firestore.service.ts");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function HeaderComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_29_Template_mat_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.accept(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "done_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_29_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.aCasa(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const solicitud_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", solicitud_r81.nombre, " ");
} }
class HeaderComponent {
    constructor(authSvc, firestoreServiceSolicitud, firestoreServiceUser, _route, route, dialog) {
        this.authSvc = authSvc;
        this.firestoreServiceSolicitud = firestoreServiceSolicitud;
        this.firestoreServiceUser = firestoreServiceUser;
        this._route = _route;
        this.route = route;
        this.dialog = dialog;
        this.solicitudes = [];
        this.titulo = "";
    }
    ngOnInit() {
        /*  Este pedazo de código obtiene el nombre del usuario cuyo organizador que está navegando
            en esta página ha organizado algún viaje, de manera que posteriormente podamos imprimir
            las solicitudes que deben ser aceptadas en un viaje por el organizador */
        this.firestoreServiceUser.getUsuario(localStorage.getItem('usuario')).then((elem) => {
            var organizadorEmail = elem.email;
            this.firestoreServiceSolicitud.getSolicitudesByOrganizadorEmail(organizadorEmail).subscribe(res => {
                var i;
                for (i = 0; i < res.length; i++) {
                    //Nos quedamos con el nombre y el id del usuario de nuestras solicitudes:
                    this.firestoreServiceUser.getUsuario(res[i].idUsuario).then((elem) => {
                        this.solicitudes.push({ nombre: elem.nombre });
                    });
                }
            });
        });
    }
    /* Redirigir a la página de perfil pulsando sobre perfil */
    irPerfil() {
        //  Obtenemos la parte de la izquierda de la url
        var origin = window.location.origin + '/';
        var primero;
        if (localStorage.getItem('tipo') == 'organizador') {
            primero = 'perfil-organizador/';
        }
        else {
            primero = 'perfil-viajero/';
        }
        var segundo = localStorage.getItem('usuario');
        var destino = origin + primero + segundo;
        window.location.assign(destino);
    }
    /* Redirigir a la página de privacidad pulsando sobre about us*/
    irAboutUs() {
        //  Obtenemos la parte de la izquierda de la url
        var origin = window.location.origin + '/';
        var primero = "privacidad";
        var destino = origin + primero;
        window.location.assign(destino);
    }
    toInicio() {
        this.route.navigate(['/mis-viajes']);
    }
    onLogout() {
    }
    onNotification() {
        document.getElementById("myForm").style.display = "block";
    }
    close() {
        document.getElementById("myForm").style.display = "none";
    }
    accept() {
        console.log("Has aceptado");
    }
    aCasa() {
        console.log("Has rechazado");
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { titulo: "titulo" }, decls: 33, vars: 2, consts: [[1, "content"], [1, "menu-izq"], ["src", "../../../assets/notificacion.png"], [1, "centro"], ["src", "../../../assets/tripmefy2.png", 3, "click"], [1, "menu-lateral"], [3, "click"], ["matBadge", "15", "matBadgeColor", "warn"], [1, "menu", 3, "click"], ["routerLink", "/logros", 1, "menu"], [1, "menu"], ["src", "../../../assets/menu.png"], [1, "titulo"], ["id", "myForm", 1, "form-popup"], ["action", "/action_page.php", 1, "form-container"], ["class", "mensaje", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "cancel", 3, "click"], [1, "mensaje"], [1, "nombre_individuo"], [1, "eleccion1"], [2, "cursor", "pointer", 3, "click"], [1, "eleccion2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_4_listener() { return ctx.toInicio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_6_listener() { return ctx.onNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "question_answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_9_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_11_listener() { return ctx.irPerfil(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Logros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_15_listener() { return ctx.irAboutUs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tus notificaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_div_29_Template, 11, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_31_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.solicitudes);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["@charset \"UTF-8\";\n\n\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 50px;\n  background-color: #F5F5F5;\n}\n.content[_ngcontent-%COMP%]   .centro[_ngcontent-%COMP%] {\n  width: 33%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .centro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80%;\n  align-self: center;\n  display: block;\n  margin: auto;\n}\n.content[_ngcontent-%COMP%]   .menu-izq[_ngcontent-%COMP%] {\n  width: 33%;\n  padding-left: 30px;\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  align-items: center;\n}\n.menu-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40%;\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 33%;\n  padding-top: 15px;\n}\n.content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-lateral[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #03a9f4;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.titulo[_ngcontent-%COMP%] {\n  background-color: #009788;\n  height: 40px;\n  color: #F5F5F5;\n  text-align: center;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #F5F5F5;\n  text-align: center;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.form-popup[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  left: 39%;\n  top: 23%;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: white;\n  width: 300px;\n}\n.mensaje[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.nombre_individuo[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 70%;\n}\n.eleccion1[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15%;\n}\n.eleccion2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15%;\n}\n\n.form-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n.form-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, .form-container[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  opacity: 0.8;\n}\n\n.form-container[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .open-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n@media screen and (max-device-width: 480px) {\n  .titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .content[_ngcontent-%COMP%]   .centro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 40px;\n  }\n\n  .titulo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-lateral[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    width: 20px;\n    margin: auto;\n    padding-bottom: 50px;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-izq[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n\n  .content[_ngcontent-%COMP%]   .menu-izq[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZXVnZW5pb2dhcmNpYWRlbGFyb3NhL2dpdGh1Yi9zYXJheWdyamltL1RyaXBtZWZ5L3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR08scUJBQUE7QUFHQSx3QkFBQTtBQUNFLGtDQUFBO0FBT3pCO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFQYztBREZsQjtBQ1lBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEVEo7QUNZQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEVEo7QUNhQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURWSjtBQ1lBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QURUSjtBQ1dBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FEUko7QUNXQTtFQUNJLGFBQUE7QURSSjtBQ1VBO0VBQ0ksaUJBQUE7RUFDQSxjQWxETTtFQW1ETix3SUFBQTtBRFBKO0FDWUE7RUFFSSx5QkF4RFc7RUF5RFgsWUFBQTtFQUNBLGNBM0RjO0VBNERkLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3SUFBQTtBRFZKO0FDWUE7RUFDSSxjQWpFYztFQWtFZCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0lBQUE7QURUSjtBQ1dBO0VBQ0ksZUFBQTtBRFJKO0FDV0E7RUFBTSx5Q0FBQTtBRFBOO0FDUUE7RUFBRyxzQkFBQTtBREpIO0FDTUEsdUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QURIRjtBQ01BLHFDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FESEY7QUNNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FESEo7QUNLQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBREZKO0FDS0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QURGSjtBQ0tBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FERko7QUNNQSw0QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBREhGO0FDTUEsNENBQUE7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBREhGO0FDTUEsNENBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FESEY7QUNNQSxvREFBQTtBQUNBO0VBQ0UscUJBQUE7QURIRjtBQ01BLHNDQUFBO0FBQ0E7RUFDRSxVQUFBO0FESEY7QUNPQSxlQUFBO0FBQ0E7RUFDSTtJQUNBLGVBQUE7RURKRjs7RUNNRTtJQUNJLGlCQUFBO0VESE47O0VDS0U7SUFDSSxjQUFBO0VERk47O0VDSUU7SUFDSSxVQUFBO0VERE47O0VDR0U7SUFDSSxhQUFBO0VEQU47O0VDRUU7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFRENOOztFQ0NFO0lBQ0ksV0FBQTtFREVOOztFQ0FFO0lBQ0ksY0FBQTtFREdOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmNvbnRlbnQgLmNlbnRybyB7XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250ZW50IC5jZW50cm8gaW1nIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRlbnQgLm1lbnUtaXpxIHtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtaXpxIGltZyB7XG4gIGhlaWdodDogNDAlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29udGVudCAubWVudS1sYXRlcmFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uY29udGVudCAubWVudS1sYXRlcmFsIGltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51LWxhdGVyYWwgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAzYTlmNDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRpdHVsbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk3ODg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNGNUY1RjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXR1bG8gaDEge1xuICBjb2xvcjogI0Y1RjVGNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1lbnUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbi5mb3JtLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAzOSU7XG4gIHRvcDogMjMlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICB6LWluZGV4OiA5O1xufVxuXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm1lbnNhamUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm9tYnJlX2luZGl2aWR1byB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmVsZWNjaW9uMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1JTtcbn1cblxuLmVsZWNjaW9uMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1JTtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogV2hlbiB0aGUgaW5wdXRzIGdldCBmb2N1cywgZG8gc29tZXRoaW5nICovXG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvbG9naW4gYnV0dG9uICovXG4uZm9ybS1jb250YWluZXIgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNhbmNlbCBidXR0b24gKi9cbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4vKiBBZGQgc29tZSBob3ZlciBlZmZlY3RzIHRvIGJ1dHRvbnMgKi9cbi5mb3JtLWNvbnRhaW5lciAuYnRuOmhvdmVyLCAub3Blbi1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC50aXR1bG8gaDEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5jb250ZW50IC5jZW50cm8gaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuXG4gIC50aXR1bG8gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jb250ZW50IC5tZW51LWxhdGVyYWwge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuY29udGVudCAubWVudS1sYXRlcmFsIC5tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQgLm1lbnUtbGF0ZXJhbCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5jb250ZW50IC5tZW51LWl6cSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cblxuICAuY29udGVudCAubWVudS1penEgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuJGxldHRlcnM6ICMwM2E5ZjQ7XG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcblxuXG4uY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3Jpcy1lbmNhYmV6YWRvO1xufVxuXG4uY29udGVudCAuY2VudHJve1xuICAgIHdpZHRoOiAzMyU7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250ZW50IC5jZW50cm8gaW1ne1xuICAgIGhlaWdodDogODAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgXG59XG5cbi5jb250ZW50IC5tZW51LWl6cXtcbiAgICB3aWR0aDogMzMlO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51LWl6cSBpbWd7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250ZW50IC5tZW51LWxhdGVyYWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB3aWR0aDogMzMlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uY29udGVudCAubWVudS1sYXRlcmFsIGltZ3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLm1lbnUtbGF0ZXJhbCBwe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkbGV0dGVycztcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuXG59XG5cblxuLnRpdHVsb3tcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICRsZXR0ZXJzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLXZlcmRvc287XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAkZ3Jpcy1lbmNhYmV6YWRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuLnRpdHVsbyBoMXtcbiAgICBjb2xvcjogJGdyaXMtZW5jYWJlemFkbztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cbi5tZW51e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYm9keSB7Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7fVxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDt9XG5cbi8qIFRoZSBwb3B1cCBmb3JtIC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbi5mb3JtLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAzOSU7XG4gIHRvcDoyMyU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gIHotaW5kZXg6IDk7XG59XG5cbi8qIEFkZCBzdHlsZXMgdG8gdGhlIGZvcm0gY29udGFpbmVyICovXG4uZm9ybS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubWVuc2FqZXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubm9tYnJlX2luZGl2aWR1b3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLmVsZWNjaW9uMXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuLmVsZWNjaW9uMntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDVweCAwIDIycHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cbi5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9sb2dpbiBidXR0b24gKi9cbi5mb3JtLWNvbnRhaW5lciAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXG4uZm9ybS1jb250YWluZXIgLmJ0bjpob3ZlciwgLm9wZW4tYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuICAgIC50aXR1bG8gaDF7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuY29udGVudCAuY2VudHJvIGltZ3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuICAgIC50aXR1bG8gaW1ne1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRlbnQgLm1lbnUtbGF0ZXJhbHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLmNvbnRlbnQgLm1lbnUtbGF0ZXJhbCAubWVudXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmNvbnRlbnQgLm1lbnUtbGF0ZXJhbCBpbWd7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQgLm1lbnUtaXpxe1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQgLm1lbnUtaXpxIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2sgO1xuICAgIH1cbiAgICAgIFxuICAgIFxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudFirestoreService"] }, { type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioFirestoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/mensaje/mensaje.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/mensaje/mensaje.component.ts ***!
  \*****************************************************/
/*! exports provided: MensajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeComponent", function() { return MensajeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MensajeComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r107.mensaje);
} }
function MensajeComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r108.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MensajeComponent {
    constructor() {
        this.cerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imagen = '';
    }
    cerrar() {
        var cerrado = true; //devolvemos un true para cerrar el popup
        this.cerrado.emit(cerrado);
        return cerrado;
    }
    ngOnInit() {
    }
}
MensajeComponent.ɵfac = function MensajeComponent_Factory(t) { return new (t || MensajeComponent)(); };
MensajeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MensajeComponent, selectors: [["app-mensaje"]], inputs: { mensaje: "mensaje", imagen: "imagen" }, outputs: { cerrado: "cerrado" }, decls: 9, vars: 2, consts: [["id", "all", 1, "outsider"], [1, "content"], [1, "cerrar"], ["src", "../../../assets/cerrar.png", "id", "close", 3, "click"], [1, "formulario"], [1, "mensaje"], [4, "ngIf"], [1, "imagen"], [3, "src", 4, "ngIf"], [3, "src"]], template: function MensajeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MensajeComponent_Template_img_click_3_listener() { return ctx.cerrar(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensaje != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagen != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n  margin-left: 25%;\n  position: absolute;\n  z-index: 100;\n  background-color: #009788;\n  width: 50%;\n  height: 50%;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.bloque-aceptar[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.formulario[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 25%;\n  max-height: 25%;\n}\n.formulario[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%]   .mensaje[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mensaje[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: #ffffff;\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvbWVuc2FqZS9tZW5zYWplLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbWVuc2FqZS9tZW5zYWplLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFRekI7RUFDSSxtQkFBQTtBQ1hKO0FEYUE7RUFDSSxlQUFBO0FDVko7QURjQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1hKO0FEZUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHdJQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSx5QkFoQ1c7RUFpQ1gsVUFBQTtFQUNBLFdBQUE7QUNmSjtBRHFCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFJQSwrQ0FBQTtBQ3BCSjtBRHlCQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCSjtBRHlCQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3ZCSDtBRDBCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDdkJKO0FEMkJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDeEJKO0FEMkJBO0VBQ0ksV0FBQTtBQ3hCSjtBRDJCQTtFQUNJLG1CQUFBO0VBQ0EsY0FyR0s7RUFzR0wsbUJBQUE7QUN4QkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWVuc2FqZS9tZW5zYWplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcbiRibGFuY286ICNmZmZmZmY7XG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbiRncmlzOiAjY2ZkOGRjO1xuJG5hcmFuamE6ICNmNGE1MDA7XG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XG4kbGV0dGVyczogIzAzYTlmNDtcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xuXG5cblxuLmNlcnJhcntcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNlcnJhcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICBcbn1cblxuLmNlcnJhciBpbWd7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgIFxufVxuXG4ub3V0c2lkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtdmVyZG9zbztcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIFxuICAgIFxuICAgIFxufVxuXG4uY29udGVudHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgIFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cblxuXG5cbi5ibG9xdWUtYWNlcHRhcntcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybXVsYXJpb3tcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDsgIFxuXG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9ybXVsYXJpbyBpbWd7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gICAgbWF4LWhlaWdodDogMjUlO1xuICAgIFxufVxuXG4uZm9ybXVsYXJpbyAuaW1hZ2Vue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICBcbn1cbi5mb3JtdWxhcmlvIC5tZW5zYWple1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVuc2FqZSBoMXtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiAkYmxhbmNvO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cblxuIiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jZXJyYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2VycmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VycmFyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm91dHNpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk3ODg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmJsb3F1ZS1hY2VwdGFyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb3JtdWxhcmlvIGltZyB7XG4gIG1heC13aWR0aDogMjUlO1xuICBtYXgtaGVpZ2h0OiAyNSU7XG59XG5cbi5mb3JtdWxhcmlvIC5pbWFnZW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm11bGFyaW8gLm1lbnNhamUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnNhamUgaDEge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MensajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mensaje',
                templateUrl: './mensaje.component.html',
                styleUrls: ['./mensaje.component.scss']
            }]
    }], function () { return []; }, { cerrado: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mensaje: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imagen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/pedir-imagen/pedir-imagen.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/pedir-imagen/pedir-imagen.component.ts ***!
  \***************************************************************/
/*! exports provided: PedirImagenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedirImagenComponent", function() { return PedirImagenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["imageUser"];
function PedirImagenComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedirImagenComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.getURL(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PedirImagenComponent_ng_template_18_Template(rf, ctx) { }
//import { EventEmitter } from 'protractor';
class PedirImagenComponent {
    constructor(_route, _router, storage, firestoreService) {
        this._route = _route;
        this._router = _router;
        this.storage = storage;
        this.firestoreService = firestoreService;
        this.myUrl = "";
        this.url = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cerrar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myUrl = "";
    }
    onUpload(e) {
        const id = Math.random().toString(36).substring(2); //generamos un id aleatorio para que no haya nombres repetidos
        const file = e.target.files[0]; //cogemos el fichero que ha subido el usuario
        const filePath = `${this.directiva}/${id}`; //utilizamos literales para meter el id
        const ref = this.firestoreService.getFileRef(filePath);
        const task = this.firestoreService.storageFile(filePath, file);
        //console.log(ref.getDownloadURL());
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.urlImage = ref.getDownloadURL();
        })).subscribe();
    }
    getURL() {
        var url = this.inputImageUser.nativeElement.value;
        this.url.emit(url);
        this.cerrar.emit(true);
        alert("La imagen se ha subido correctamente");
        return url;
    }
    doCerrar() {
        this.cerrar.emit(true);
        this.url.emit("");
    }
    ngOnInit() {
    }
}
PedirImagenComponent.ɵfac = function PedirImagenComponent_Factory(t) { return new (t || PedirImagenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"])); };
PedirImagenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedirImagenComponent, selectors: [["app-pedir-imagen"]], viewQuery: function PedirImagenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
    } }, inputs: { directiva: "directiva" }, outputs: { url: "url", cerrar: "cerrar" }, decls: 20, vars: 10, consts: [["id", "all", 1, "outsider"], [1, "content"], [1, "cerrar"], ["src", "../../../assets/cerrar.png", "id", "close", 3, "click"], [1, "formulario"], ["id", "titulo", "for", "file"], ["type", "file", "id", "file", 3, "change"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["type", "hidden", 3, "value"], ["imageUser", ""], [1, "boton"], ["type", "submit", 3, "click", 4, "ngIf"], ["btnDisabled", ""], ["type", "submit", 3, "click"]], template: function PedirImagenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedirImagenComponent_Template_img_click_3_listener() { return ctx.doCerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Selecciona una imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PedirImagenComponent_Template_input_change_8_listener($event) { return ctx.onUpload($event); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.uploadPercent) + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.urlImage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, ctx.urlImage));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n}\n.content[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%]   #id[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.formulario[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvcGVkaXItaW1hZ2VuL3BlZGlyLWltYWdlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3BlZGlyLWltYWdlbi9wZWRpci1pbWFnZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLG1CQUFBO0FDVEo7QURXQTtFQUNJLGVBQUE7QUNSSjtBRFlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVEo7QURhQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0lBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7QUNYSjtBRGdCQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0E7Ozs7SUFBQTtFQU9BLCtDQUFBO0FDYko7QURlQTtFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWkg7QURlQTtFQUNJLFlBQUE7QUNaSjtBRGdCQTtFQUNJLFlBQUE7QUNiSjtBRGlCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wZWRpci1pbWFnZW4vcGVkaXItaW1hZ2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcbiRibGFuY286ICNmZmZmZmY7XG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbiRncmlzOiAjY2ZkOGRjO1xuJG5hcmFuamE6ICNmNGE1MDA7XG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XG4kbGV0dGVyczogIzAzYTlmNDtcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xuXG4uY2VycmFye1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY2VycmFyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIFxufVxuXG4uY2VycmFyIGltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgXG59XG5cbi5vdXRzaWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAvL2JhY2tncm91bmQ6ICRhenVsLXZlcmRvc287XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgXG4gICAgXG59XG5cbi5jb250ZW50e1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8qKlxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICAqKi9cbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG4uZm9ybXVsYXJpb3tcbiAgIHdpZHRoOiAxMDAlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDsgIFxufVxuXG4uZm9ybXVsYXJpbyAjaWR7ICBcbiAgICBtYXJnaW46IGF1dG87XG59XG5cblxuLmZvcm11bGFyaW8gI2ZpbGV7ICBcbiAgICBtYXJnaW46IGF1dG87XG59XG5cblxuLmJvdG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jZXJyYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2VycmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VycmFyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm91dHNpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgLyoqXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAqKi9cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm11bGFyaW8gI2lkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm9ybXVsYXJpbyAjZmlsZSB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJvdG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedirImagenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedir-imagen',
                templateUrl: './pedir-imagen.component.html',
                styleUrls: ['./pedir-imagen.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }]; }, { inputImageUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageUser']
        }], directiva: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cerrar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/puntuacion-pu/puntuacion-pu.component.ts ***!
  \*****************************************************************/
/*! exports provided: PuntuacionPuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntuacionPuComponent", function() { return PuntuacionPuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _boton_boton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boton/boton.component */ "./src/app/shared/boton/boton.component.ts");




function PuntuacionPuComponent_div_8_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseout", function PuntuacionPuComponent_div_8_img_1_Template_img_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const i_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.vaciar(i_r94); })("click", function PuntuacionPuComponent_div_8_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const i_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.establecer(i_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PuntuacionPuComponent_div_8_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PuntuacionPuComponent_div_8_img_2_Template_img_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const i_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.rellenar(i_r94); })("click", function PuntuacionPuComponent_div_8_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const i_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.establecer(i_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PuntuacionPuComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PuntuacionPuComponent_div_8_img_1_Template, 1, 0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PuntuacionPuComponent_div_8_img_2_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r94 = ctx.$implicit;
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.estrellas[i_r94] == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.estrellas[i_r94] == false);
} }
const _c0 = function () { return [0, 1, 2, 3, 4]; };
class PuntuacionPuComponent {
    constructor() {
        this.puntuacion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cerrado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.estrellas = [false, false, false, false, false];
        this.estable = -1;
    }
    getPuntuacion() {
        var puntuacion = 0;
        var i = 0;
        var cerrado = true;
        for (i; i < this.estrellas.length; i++) {
            if (this.estrellas[i] == true) {
                puntuacion = puntuacion + 1; //si es verdadera sumamos un punto
            }
            else {
                this.puntuacion.emit(puntuacion);
                return puntuacion; //si una es falsa sus siguientes tambien
            }
        }
        this.puntuacion.emit(puntuacion);
        this.cerrado.emit(cerrado); //como aceptamos, cerramos
        return puntuacion; //devolvemos la puntuacion
    }
    cerrar() {
        var cerrado = true; //devolvemos un true para cerrar el popup
        var puntuacion = -1; //no se ha puntuado, se devuelve un -1 para que no se haga la puntuación
        this.cerrado.emit(cerrado);
        this.puntuacion.emit(puntuacion);
        return cerrado;
    }
    rellenar(i) {
        if (this.estable == -1) {
            for (i; i >= 0; i--) {
                this.estrellas[i] = true;
            }
        }
    }
    vaciar(i) {
        if (this.estable == -1) {
            var j;
            for (j = i; j >= 0; j--) {
                this.estrellas[j] = false;
            }
        }
    }
    establecer(i) {
        if (this.estable == -1) {
            //si no hay ninguna estrella fija, se fija la que se ha pasado y se rellenan las anteriores
            this.estable = i;
            for (i; i >= 0; i--) {
                this.estrellas[i] = true;
            }
        }
        else if (this.estable == i) {
            //si ya hay una estrella fija y es sobre la que se ha pulsado, se desfija esa estrella y se vacían todas
            this.estable = -1;
            for (i; i >= 0; i--) {
                this.estrellas[i] = false;
            }
        }
        else {
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
    ngOnInit() {
    }
}
PuntuacionPuComponent.ɵfac = function PuntuacionPuComponent_Factory(t) { return new (t || PuntuacionPuComponent)(); };
PuntuacionPuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PuntuacionPuComponent, selectors: [["app-puntuacion-pu"]], outputs: { puntuacion: "puntuacion", cerrado: "cerrado" }, decls: 11, vars: 2, consts: [["id", "all", 1, "outsider"], [1, "content"], [1, "cerrar"], ["src", "../../../assets/cerrar.png", "id", "close", 3, "click"], [1, "formulario"], [1, "bloque-estrellas"], ["class", "estrellas", 4, "ngFor", "ngForOf"], [1, "bloque-aceptar"], ["id", "aceptar", "texto", "Aceptar", 3, "click"], [1, "estrellas"], ["src", "../../../assets/star.png", 3, "mouseout", "click", 4, "ngIf"], ["src", "../../../assets/empty_star.png", 3, "mouseover", "click", 4, "ngIf"], ["src", "../../../assets/star.png", 3, "mouseout", "click"], ["src", "../../../assets/empty_star.png", 3, "mouseover", "click"]], template: function PuntuacionPuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuntuacionPuComponent_Template_img_click_3_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00BFQu\u00E9 tal fue el viaje?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PuntuacionPuComponent_div_8_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-boton", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PuntuacionPuComponent_Template_app_boton_click_10_listener() { return ctx.getPuntuacion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _boton_boton_component__WEBPACK_IMPORTED_MODULE_2__["BotonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".cerrar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.cerrar[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.cerrar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  float: right;\n}\n.outsider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: bolder;\n  margin-top: 10%;\n  position: absolute;\n  margin-left: 25%;\n  z-index: 100;\n  background-color: #ffffff;\n  width: 50%;\n  height: 50%;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.bloque-estrellas[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.estrellas[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.bloque-estrellas[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30%;\n  width: 30%;\n}\n.bloque-aceptar[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%]   #id[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.formulario[_ngcontent-%COMP%]   #file[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n@media screen and (max-device-width: 480px) {\n  .outsider[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    margin-left: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvcHVudHVhY2lvbi1wdS9wdW50dWFjaW9uLXB1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcHVudHVhY2lvbi1wdS9wdW50dWFjaW9uLXB1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFNekI7RUFDSSxtQkFBQTtBQ1RKO0FEV0E7RUFDSSxlQUFBO0FDUko7QURZQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEYUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdJQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFyQ0s7RUFzQ0wsVUFBQTtFQUNBLFdBQUE7QUNYSjtBRGVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBOzs7O0lBQUE7RUFPQSwrQ0FBQTtBQ1pKO0FEZUE7RUFDRyxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNaSDtBRGVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEZUE7RUFFSSxXQUFBO0VBQ0EsVUFBQTtBQ2JKO0FEa0JBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZko7QURrQkE7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2ZIO0FEa0JBO0VBQ0ksWUFBQTtBQ2ZKO0FEbUJBO0VBQ0ksWUFBQTtBQ2hCSjtBRG9CQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNqQko7QURvQkE7RUFFSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBR0Esa0JBQUE7SUFDQSxlQUFBO0VDcEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcHVudHVhY2lvbi1wdS9wdW50dWFjaW9uLXB1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcbiRibGFuY286ICNmZmZmZmY7XG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbiRncmlzOiAjY2ZkOGRjO1xuJG5hcmFuamE6ICNmNGE1MDA7XG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XG4kbGV0dGVyczogIzAzYTlmNDtcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xuXG4uY2VycmFye1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY2VycmFyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIFxufVxuXG4uY2VycmFyIGltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgXG59XG5cbi5vdXRzaWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAvL2JhY2tncm91bmQ6ICRhenVsLXZlcmRvc287XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBcbn1cblxuLmNvbnRlbnR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8qKlxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICAqKi9cbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbi5ibG9xdWUtZXN0cmVsbGFze1xuICAgd2lkdGg6IDEwMCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXN0cmVsbGFze1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG5cbi5ibG9xdWUtZXN0cmVsbGFzIGltZ3tcbiAgICBcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIFxuICAgXG59XG5cbi5ibG9xdWUtYWNlcHRhcntcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybXVsYXJpb3tcbiAgIHdpZHRoOiAxMDAlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDsgIFxufVxuXG4uZm9ybXVsYXJpbyAjaWR7ICBcbiAgICBtYXJnaW46IGF1dG87XG59XG5cblxuLmZvcm11bGFyaW8gI2ZpbGV7ICBcbiAgICBtYXJnaW46IGF1dG87XG59XG5cblxuLmJvdG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuXG4gICAgLm91dHNpZGVye1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICB9XG5cbn1cblxuIiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5jZXJyYXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2VycmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VycmFyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm91dHNpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvKipcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICoqL1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLmJsb3F1ZS1lc3RyZWxsYXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lc3RyZWxsYXMge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxvcXVlLWVzdHJlbGxhcyBpbWcge1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmJsb3F1ZS1hY2VwdGFyIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybXVsYXJpbyAjaWQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtdWxhcmlvICNmaWxlIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYm90b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAub3V0c2lkZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuntuacionPuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-puntuacion-pu',
                templateUrl: './puntuacion-pu.component.html',
                styleUrls: ['./puntuacion-pu.component.scss']
            }]
    }], function () { return []; }, { puntuacion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cerrado: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/scroll-top/scroll-top.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/scroll-top/scroll-top.component.ts ***!
  \***********************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "show-scroll": a0 }; };
class ScrollTopComponent {
    constructor() {
    }
    ngOnInit() {
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.navIsFixed = true;
        }
        else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.navIsFixed = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(); };
ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 3, consts: [[1, "scroll-to-top", 3, "ngClass"], ["src", "../../../assets/avion.png", "title", "Ir arriba", 1, "scroll-top", 3, "click"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopComponent_Template_img_click_1_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.navIsFixed));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 25px;\n  right: 5px;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n  width: 100px;\n}\n.scroll-top[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.show-scroll[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: all 0.2s ease-in-out;\n}\n@media screen and (max-device-width: 480px) {\n  .scroll-top[_ngcontent-%COMP%] {\n    -webkit-filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.7));\n            filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.7));\n  }\n\n  .scroll-to-top[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvc2Nyb2xsLXRvcC9zY3JvbGwtdG9wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2Nyb2xsLXRvcC9zY3JvbGwtdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFNekI7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDVEo7QURZQTtFQUNJLFVBQUE7QUNUSjtBRFlBO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0FDVEo7QURZQTtFQUNJO0lBQ0kseURBQUE7WUFBQSxpREFBQTtFQ1ROOztFRGFFO0lBQ0ksV0FBQTtFQ1ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2Nyb2xsLXRvcC9zY3JvbGwtdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGF6dWwtY2xhcm86ICMwZGE4ZGU7XG4kYXp1bC1yb3lhbDogIzAwNGNiZTtcbiRibGFuY286ICNmZmZmZmY7XG4kYXp1bC1tYXJpbm86ICMyMDI4NGM7IC8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbiRncmlzOiAjY2ZkOGRjO1xuJG5hcmFuamE6ICNmNGE1MDA7XG4kYXp1bC1vc2N1cm86ICMwMDIwNjM7IC8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbiR0cmFuc3BhcmVuY2lhOiAjNmM2YzZkOyAvKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuJGdyaXMtYnVzY2Fkb3I6ICNjMGMxYzA7XG4kbGV0dGVyczogIzAzYTlmNDtcbiRncmlzLWVuY2FiZXphZG86ICNGNUY1RjU7XG4kYXp1bC12ZXJkb3NvOiAjMDA5Nzg4O1xuXG4uc2Nyb2xsLXRvLXRvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICByaWdodDogNXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5zY3JvbGwtdG9we1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5zaG93LXNjcm9sbCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XG4gICAgLnNjcm9sbC10b3B7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC43KSk7XG4gICAgfVxuICAgIFxuXG4gICAgLnNjcm9sbC10by10b3Age1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICB9XG4gICAgXG59IiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5zY3JvbGwtdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5zY3JvbGwtdG9wIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnNob3ctc2Nyb2xsIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAuc2Nyb2xsLXRvcCB7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjcpKTtcbiAgfVxuXG4gIC5zY3JvbGwtdG8tdG9wIHtcbiAgICB3aWR0aDogNzBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-top',
                templateUrl: './scroll-top.component.html',
                styleUrls: ['./scroll-top.component.scss']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/volver/volver.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/volver/volver.component.ts ***!
  \***************************************************/
/*! exports provided: VolverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolverComponent", function() { return VolverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VolverComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
VolverComponent.ɵfac = function VolverComponent_Factory(t) { return new (t || VolverComponent)(); };
VolverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VolverComponent, selectors: [["app-volver"]], decls: 4, vars: 0, consts: [[1, "volver"], ["src", "../../../assets/volver.png"]], template: function VolverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".volver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  height: 35px;\n  padding: 5px;\n  border-radius: 10px;\n  width: 120px;\n  margin-left: 20px;\n  margin-top: 15px;\n}\n.volver[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n.volver[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n  margin-left: 20px;\n  margin-top: 13px;\n}\n.volver[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC9zaGFyZWQvdm9sdmVyL3ZvbHZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3ZvbHZlci92b2x2ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3VCLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QjtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVEo7QURZQTtFQUNJLGVBQUE7RUFHQSxxREFBQTtBQ1RKO0FEV0E7RUFDSSx3SUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEVUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3ZvbHZlci92b2x2ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXp1bC1jbGFybzogIzBkYThkZTtcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xuJGJsYW5jbzogI2ZmZmZmZjtcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuJGdyaXM6ICNjZmQ4ZGM7XG4kbmFyYW5qYTogI2Y0YTUwMDtcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcbiRsZXR0ZXJzOiAjMDNhOWY0O1xuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcbiRhenVsLXZlcmRvc286ICMwMDk3ODg7XG5cbi52b2x2ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6MTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi52b2x2ZXI6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LDEwOCwxMDksMC4zMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDFweCAycHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcbn1cbi52b2x2ZXIgaDF7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbn1cbi52b2x2ZXIgaW1ne1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuIiwiLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi52b2x2ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udm9sdmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDFweCAycHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbn1cblxuLnZvbHZlciBoMSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi52b2x2ZXIgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-volver',
                templateUrl: './volver.component.html',
                styleUrls: ['./volver.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/viajes/crear-viaje/crear-viaje.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/viajes/crear-viaje/crear-viaje.component.ts ***!
  \*************************************************************/
/*! exports provided: CrearViajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearViajeComponent", function() { return CrearViajeComponent; });
/* harmony import */ var _interfaces_viaje__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../interfaces/viaje */ "./src/app/interfaces/viaje.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/volver/volver.component */ "./src/app/shared/volver/volver.component.ts");
/* harmony import */ var _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pedir-imagen/pedir-imagen.component */ "./src/app/shared/pedir-imagen/pedir-imagen.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















function CrearViajeComponent_mat_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const continente_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", continente_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", continente_r44, " ");
} }
function CrearViajeComponent_mat_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pais_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pais_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pais_r45, " ");
} }
class CrearViajeComponent {
    constructor(route, viajeService, userService) {
        this.route = route;
        this.viajeService = viajeService;
        this.userService = userService;
        this.foto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.continentes = ["Europa", "Asia", "America del Norte", "America del Sur", "America Central",
            "Oceania", "Africa"];
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
    ngOnInit() {
        if (!localStorage.getItem('usuario') || 0 === localStorage.getItem('usuario').length) {
            this.route.navigate(['/page1']);
        }
        this.userService.getUsuariosFiltered(localStorage.getItem('usuario')).subscribe(res => {
            this.email = res[0].email;
        });
    }
    refresh() {
        window.location.reload();
    }
    onCreate() {
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
        //this.viajeService.createViaje(newViaje);
        this.route.navigate(['/mis-viajes']);
    }
    chooseImagen() {
        document.getElementById("pedir-imagen").style.display = "block";
        document.getElementById("general").style.display = "none";
    }
    setImagen(e) {
        this.miFoto = e;
    }
    cerrarPopup(e, id) {
        if (e == true) {
            document.getElementById(id).style.display = "none";
            document.getElementById("general").style.display = "block";
        }
    }
    back() {
        this.route.navigate(['/mis-viajes']);
    }
    getPais() {
        if (this.continenteSelect === '') {
            return this.paises;
        }
        if (this.continenteSelect === 'Europa') {
            return this.europa;
        }
        else if (this.continenteSelect === 'Asia') {
            return this.asia;
        }
        else if (this.continenteSelect === 'America del Norte') {
            return this.americaNorte;
        }
        else if (this.continenteSelect === 'America del Sur') {
            return this.americaSur;
        }
        else if (this.continenteSelect === 'America Central') {
            return this.americaCentro;
        }
        else if (this.continenteSelect === 'Oceania') {
            return this.oceania;
        }
        else if (this.continenteSelect === 'Africa') {
            return this.africa;
        }
        else {
            return this.paises;
        }
    }
    checkFields() {
        if (this.ciudadSelect === '' || this.continenteSelect === '' || this.desc === '' ||
            this.endDate === '' || this.startDate === '' || this.limitPayDate === '' || this.limitDate === ''
            || this.maxpers === '' || this.precio === '' || this.paisSelect === '' || this.telefono === '' || this.prefijo === '') {
            document.getElementById("error").style.display = "block";
            document.getElementById("error_img").style.display = "block";
            document.getElementById("error1").style.display = "block";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error3").style.display = "none";
            return true;
        }
        else if (this.miFoto === '') {
            document.getElementById("error").style.display = "block";
            document.getElementById("error_img").style.display = "block";
            document.getElementById("error2").style.display = "block";
            document.getElementById("error1").style.display = "none";
            document.getElementById("error3").style.display = "none";
            return true;
        }
        else if (this.telefono.length < 9 || this.prefijo.length < 2) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error_img").style.display = "block";
            document.getElementById("error3").style.display = "block";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error1").style.display = "none";
            return true;
        }
        else {
            document.getElementById("error").style.display = "none";
            document.getElementById("error_img").style.display = "none";
            document.getElementById("error3").style.display = "none";
            document.getElementById("error2").style.display = "none";
            document.getElementById("error1").style.display = "none";
            return false;
        }
    }
}
CrearViajeComponent.ɵfac = function CrearViajeComponent_Factory(t) { return new (t || CrearViajeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"])); };
CrearViajeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CrearViajeComponent, selectors: [["app-crear-viaje"]], outputs: { foto: "foto" }, decls: 130, vars: 20, consts: [["titulo", "CREAR VIAJE"], [1, "sub-cabecera"], [3, "click"], ["id", "error_img", "src", "../../../assets/warning.png"], ["id", "error"], ["id", "error1"], ["id", "error2"], ["id", "error3"], ["id", "pedir-imagen", "directiva", "users", 3, "cerrar", "url"], ["id", "general"], [3, "ngSubmit"], ["id", "div1"], [2, "height", "220px", "vertical-align", "middle", "text-align", "center"], [1, "up"], ["src", "../../../assets/plus.png", "height", "100px", "width", "100px", 2, "display", "block", "margin-left", "auto", "margin-right", "auto", "cursor", "pointer", 3, "click"], [2, "margin-top", "3%"], [2, "display", "inline-block", "margin-right", "20px"], ["appearance", "fill"], ["matInput", "", "type", "number", "name", "precio", "required", "", 1, "example-right-align", 3, "ngModel", "ngModelChange"], ["matPrefix", ""], ["appearance", "fill", "id", "maximo"], ["matInput", "", "type", "number", "name", "maxpers", "required", "", 1, "example-right-align", 3, "ngModel", "ngModelChange"], ["name", "vuelo", 2, "display", "block", "margin-top", "5px", 3, "ngModel", "ngModelChange"], ["name", "alojamiento", 2, "display", "block", "margin-top", "5px", 3, "ngModel", "ngModelChange"], ["name", "comidas", 2, "display", "block", "margin-top", "5px", 3, "ngModel", "ngModelChange"], ["id", "div2"], [1, "texto"], [1, "formulario"], [1, "election"], ["name", "continente", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "pais", "required", "", 3, "ngModel", "ngModelChange"], [1, "formulario", "ciudad"], ["matInput", "", "name", "ciudad", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "maxlength", "10", "placeholder", "DD/MM/YYYY", "name", "startDate", "required", "", 3, "ngModel", "ngModelChange"], ["date1", ""], ["matInput", "", "type", "date", "maxlength", "10", "placeholder", "DD/MM/YYYY", "name", "endDate", "required", "", 3, "ngModel", "ngModelChange"], ["date2", ""], ["matInput", "", "type", "date", "maxlength", "10", "placeholder", "DD/MM/YYYY", "name", "limitDate", "required", "", 3, "ngModel", "ngModelChange"], ["date3", ""], ["matInput", "", "type", "date", "maxlength", "10", "placeholder", "DD/MM/YYYY", "name", "limitPayDate", "required", "", 3, "ngModel", "ngModelChange"], ["date4", ""], [1, "formulario", "descripcion"], ["matInput", "", "maxlength", "300", "rows", "5", "placeholder", "Introduce una breve descripci\u00F3n en este area...", "name", "descripcion", 3, "ngModel", "ngModelChange"], ["descripcion", ""], [1, "formulario", "prefijo"], ["matInput", "", "name", "prefijo", "placeholder", "34", "maxlength", "3", "required", "", 3, "ngModel", "ngModelChange"], [1, "formulario", "contacto"], ["matInput", "", "name", "telefono", "placeholder", "660918814", "maxlength", "9", "required", "", 3, "ngModel", "ngModelChange"], ["telef", ""], [1, "divBotonAceptar"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "botonAceptar", 3, "disabled"], [3, "value"]], template: function CrearViajeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-volver", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrearViajeComponent_Template_app_volver_click_2_listener() { return ctx.back(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cerrar", function CrearViajeComponent_Template_app_pedir_imagen_cerrar_11_listener($event) { return ctx.cerrarPopup($event, "pedir-imagen"); })("url", function CrearViajeComponent_Template_app_pedir_imagen_url_11_listener($event) { return ctx.setImagen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CrearViajeComponent_Template_form_ngSubmit_13_listener() { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrearViajeComponent_Template_img_click_17_listener() { return ctx.chooseImagen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "A\u00F1ade una imagen para tu viaje");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_26_listener($event) { return ctx.precio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u20AC\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "M\u00E1ximo de participantes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "M\u00E1ximo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_35_listener($event) { return ctx.maxpers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " El precio incluye...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_checkbox_ngModelChange_40_listener($event) { return ctx.vuelo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Vuelo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_checkbox_ngModelChange_42_listener($event) { return ctx.alojamiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Alojamiento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_checkbox_ngModelChange_44_listener($event) { return ctx.comidas = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_select_ngModelChange_53_listener($event) { return ctx.continenteSelect = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_mat_select_ngModelChange_60_listener($event) { return ctx.paisSelect = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_67_listener($event) { return ctx.ciudadSelect = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_75_listener($event) { return ctx.startDate = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_82_listener($event) { return ctx.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Fecha de l\u00EDmite de inscripci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Elige una fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_91_listener($event) { return ctx.limitDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Fecha l\u00EDmite de pago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Elige una fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_100_listener($event) { return ctx.limitPayDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "textarea", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_textarea_ngModelChange_106_listener($event) { return ctx.desc = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_117_listener($event) { return ctx.prefijo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "input", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrearViajeComponent_Template_input_ngModelChange_122_listener($event) { return ctx.telefono = $event; });
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
    } if (rf & 2) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](107);
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](123);
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
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_6__["VolverComponent"], _shared_pedir_imagen_pedir_imagen_component__WEBPACK_IMPORTED_MODULE_7__["PedirImagenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPrefix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: ["@charset \"UTF-8\";\n\n\n\n.sub-cabecera[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.sub-cabecera[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: 20px;\n  width: 30px;\n  height: 30px;\n  display: none;\n}\n#error[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: 20px;\n  color: red;\n  display: none;\n}\n#error1[_ngcontent-%COMP%] {\n  display: none;\n}\n#error2[_ngcontent-%COMP%] {\n  display: none;\n}\n#error3[_ngcontent-%COMP%] {\n  display: none;\n}\n#general[_ngcontent-%COMP%] {\n  height: 86%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  left: 0;\n  color: black;\n}\n#pedir-imagen[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n  z-index: 8;\n  top: 20%;\n}\n#div1[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  float: left;\n  margin: 0 4%;\n  margin-top: 1%;\n}\n#div2[_ngcontent-%COMP%] {\n  width: 55%;\n  height: 100%;\n  float: left;\n  margin-right: 4%;\n  margin-bottom: 4%;\n  font-size: 140%;\n}\n#uploader[_ngcontent-%COMP%] {\n  display: none;\n}\n.up[_ngcontent-%COMP%] {\n  height: 60%;\n}\n.up[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.bottom[_ngcontent-%COMP%] {\n  height: 40%;\n}\n.checkbox[_ngcontent-%COMP%] {\n  color: 0;\n}\nspan[_ngcontent-%COMP%]    > .texto[_ngcontent-%COMP%] {\n  padding-right: 5%;\n  float: left;\n}\n#maximo[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.formulario[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 2%;\n}\n.descripcion[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-left: 0;\n}\n.contacto[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.prefijo[_ngcontent-%COMP%] {\n  width: 5%;\n  margin-left: 0;\n}\n.email[_ngcontent-%COMP%] {\n  margin-right: 2%;\n}\n.election[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n.ciudad[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.divBotonAceptar[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 5%;\n}\n\n@media screen and (max-device-width: 700px) {\n  #div1[_ngcontent-%COMP%], #div2[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  #div1[_ngcontent-%COMP%] {\n    margin-bottom: 35%;\n  }\n\n  #div2[_ngcontent-%COMP%] {\n    margin-left: 3%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL2NyZWFyLXZpYWplL2NyZWFyLXZpYWplLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2V1Z2VuaW9nYXJjaWFkZWxhcm9zYS9naXRodWIvc2FyYXlncmppbS9UcmlwbWVmeS9zcmMvYXBwL3ZpYWplcy9jcmVhci12aWFqZS9jcmVhci12aWFqZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHTyxxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFLekI7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBRFBEO0FDU0E7RUFDQyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FETkQ7QUNRQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBRExEO0FDT0E7RUFDQyxhQUFBO0FESkQ7QUNNQTtFQUNDLGFBQUE7QURIRDtBQ0tBO0VBQ0MsYUFBQTtBREZEO0FDSUE7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBREREO0FDSUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBREREO0FDS0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBREZGO0FDSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRERGO0FDS0E7RUFDQyxhQUFBO0FERkQ7QUNLQTtFQUNFLFdBQUE7QURGRjtBQ0tBO0VBQ0MsZUFBQTtBREZEO0FDS0E7RUFDRSxXQUFBO0FERkY7QUNLQTtFQUNFLFFBQUE7QURGRjtBQ0tBO0VBQ0MsaUJBQUE7RUFDQSxXQUFBO0FERkQ7QUNLQTtFQUNDLFlBQUE7QURGRDtBQ0tBO0VBQ0MscUJBQUE7RUFDQSxlQUFBO0FERkQ7QUNLQTtFQUNDLFVBQUE7RUFDQSxjQUFBO0FERkQ7QUNLQTtFQUNDLFVBQUE7QURGRDtBQ0lBO0VBQ0MsU0FBQTtFQUNBLGNBQUE7QURERDtBQ0dBO0VBQ0MsZ0JBQUE7QURBRDtBQ0dBO0VBQ0MscUJBQUE7RUFDQSxXQUFBO0FEQUQ7QUNHQTtFQUNDLFVBQUE7QURBRDtBQ0dBO0VBQ0MsWUFBQTtFQUNBLGNBQUE7QURBRDtBQ0dBLGVBQUE7QUFDQTtFQUNDO0lBQ0MsVUFBQTtFREFBOztFQ0VEO0lBQ0Msa0JBQUE7RURDQTs7RUNDRDtJQUNDLGVBQUE7RURFQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlhamVzL2NyZWFyLXZpYWplL2NyZWFyLXZpYWplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi5zdWItY2FiZWNlcmEge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN1Yi1jYWJlY2VyYSBpbWcge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2Vycm9yIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNlcnJvcjEge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXJyb3IyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2Vycm9yMyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNnZW5lcmFsIHtcbiAgaGVpZ2h0OiA4NiU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jcGVkaXItaW1hZ2VuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA4O1xuICB0b3A6IDIwJTtcbn1cblxuI2RpdjEge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgNCU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG4jZGl2MiB7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogNCU7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBmb250LXNpemU6IDE0MCU7XG59XG5cbiN1cGxvYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51cCB7XG4gIGhlaWdodDogNjAlO1xufVxuXG4udXAgaW1nIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uYm90dG9tIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5jaGVja2JveCB7XG4gIGNvbG9yOiAwO1xufVxuXG5zcGFuID4gLnRleHRvIHtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4jbWF4aW1vIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uZGVzY3JpcGNpb24ge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmNvbnRhY3RvIHtcbiAgd2lkdGg6IDM1JTtcbn1cblxuLnByZWZpam8ge1xuICB3aWR0aDogNSU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZW1haWwge1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG4uZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2l1ZGFkIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmRpdkJvdG9uQWNlcHRhciB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNzAwcHgpIHtcbiAgI2RpdjEsICNkaXYyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgI2RpdjEge1xuICAgIG1hcmdpbi1ib3R0b206IDM1JTtcbiAgfVxuXG4gICNkaXYyIHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gIH1cbn0iLCIkYXp1bC1jbGFybzogIzBkYThkZTtcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xuJGJsYW5jbzogI2ZmZmZmZjtcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuJGdyaXM6ICNjZmQ4ZGM7XG4kbmFyYW5qYTogI2Y0YTUwMDtcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcbiRsZXR0ZXJzOiAjMDNhOWY0O1xuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcblxuLnN1Yi1jYWJlY2VyYXtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG4uc3ViLWNhYmVjZXJhIGltZ3tcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4jZXJyb3J7XG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRjb2xvcjogcmVkO1xuXHRkaXNwbGF5OiBub25lO1xufVxuI2Vycm9yMXtcblx0ZGlzcGxheTogbm9uZTtcbn1cbiNlcnJvcjJ7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4jZXJyb3Ize1xuXHRkaXNwbGF5OiBub25lO1xufVxuI2dlbmVyYWx7IFxuXHRoZWlnaHQ6IDg2JTsgXG5cdHdpZHRoOiAxMDAlOyBcblx0cGFkZGluZzogMDsgXG5cdG1hcmdpbjogMDsgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG5cdGxlZnQ6IDA7XG5cdGNvbG9yOiBibGFjaztcbn1cblxuI3BlZGlyLWltYWdlbntcblx0ZGlzcGxheTpub25lO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDg7XG5cdHRvcDogMjAlO1xuXG59XG5cbiNkaXYxIHsgXG4gIHdpZHRoOiAzMCU7IFxuICBoZWlnaHQ6IDEwMCU7IFxuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDQlO1xuICBtYXJnaW4tdG9wOiAxJTtcbn1cbiNkaXYyIHsgXG4gIHdpZHRoOiA1NSU7IFxuICBoZWlnaHQ6IDEwMCU7IFxuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIGZvbnQtc2l6ZTogMTQwJTtcblxufVxuXG4jdXBsb2FkZXJ7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi51cHtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi51cCBpbWd7XG5cdG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLmJvdHRvbXtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5jaGVja2JveHtcbiAgY29sb3I6IHJlZCgkY29sb3I6ICMwMDAwMDApO1xufVxuXG5zcGFuID4gLnRleHRve1xuXHRwYWRkaW5nLXJpZ2h0OiA1JTtcblx0ZmxvYXQ6IGxlZnQ7XG59XG5cbiNtYXhpbW97XG5cdHdpZHRoOiAxMDBweDtcbn1cblxuLmZvcm11bGFyaW97XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uZGVzY3JpcGNpb257XG5cdHdpZHRoOiA5NSU7XG5cdG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uY29udGFjdG97XG5cdHdpZHRoOiAzNSU7XG59XG4ucHJlZmlqb3tcblx0d2lkdGg6IDUlO1xuXHRtYXJnaW4tbGVmdDogMDtcdFxufVxuLmVtYWlse1xuXHRtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG4uZWxlY3Rpb257XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5jaXVkYWR7XG5cdHdpZHRoOiAzMCU7XG59XG5cbi5kaXZCb3RvbkFjZXB0YXJ7XHRcblx0ZmxvYXQ6cmlnaHQ7XG5cdG1hcmdpbi10b3A6IDUlO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MDBweCl7XG5cdCNkaXYxLCAjZGl2Mntcblx0XHR3aWR0aDogOTAlO1xuXHR9XG5cdCNkaXYxe1xuXHRcdG1hcmdpbi1ib3R0b206IDM1JTtcblx0fVxuXHQjZGl2Mntcblx0XHRtYXJnaW4tbGVmdDogMyU7XG5cdH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CrearViajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-crear-viaje',
                templateUrl: './crear-viaje.component.html',
                styleUrls: ['./crear-viaje.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }, { type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"] }]; }, { foto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/viajes/mis-viajes/mis-viajes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/viajes/mis-viajes/mis-viajes.component.ts ***!
  \***********************************************************/
/*! exports provided: MisViajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisViajesComponent", function() { return MisViajesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firestore/solicitud-firestore.service */ "./src/app/services/firestore/solicitud-firestore.service.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function () { return ["/unirse-continente"]; };
function MisViajesComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/crear-viaje"]; };
function MisViajesComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function (a1) { return ["/viaje/", a1]; };
function MisViajesComponent_div_25_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ciudad_r49 = ctx.$implicit;
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
} }
class MisViajesComponent {
    constructor(_route, _router, firestoreServiceSolicitud, firestoreService, firestoreServiceUser) {
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
        this.ciudades = [];
        //ciudades = [['Sevilla', 'hola'], ['Barcelona'], ['Galicia'], ['Madrid']];
        this.myciudad = this.ciudades[0];
        this.ciudades = [];
        this.escogidas = [];
    }
    estaVacio() {
        return this.escogidas.length < 1;
    }
    busqueda() {
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
    filtrar() {
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
    filtro(i) {
        var ciudad = this.ciudades[i];
        //solo metemos los viajes del pais escogido
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
    ngOnInit() {
        //let dato = JSON.parse(localStorage.getItem('pais'));
        if (localStorage.getItem('usuario') == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
        }
        //let id = localStorage.getItem('pais');
        this.escogidas = this.ciudades;
        /**SI EL USUARIO ES VIAJERO
         * Deben buscarse las solicitudes del usuario y meter los datos de sus viajes en el array
         */
        if (localStorage.getItem('tipo') == 'viajero') {
            this.escogidas = [];
            this.ciudades = [];
            this.firestoreServiceSolicitud.getSolicitudesByUserId(localStorage.getItem('usuario')).subscribe(res => {
                var i;
                this.ciudadesId = [];
                for (i = 0; i < res.length; i++) {
                    this.ciudadesId.push(res[i].idViaje);
                }
                //console.log(this.ciudadesId);
                for (i = 0; i < this.ciudadesId.length; i++) {
                    if (res[i].estado != "pendiente" && res[i].estado != "rechazado") {
                        this.firestoreService.getViaje(this.ciudadesId[i]).then(elem => {
                            this.ciudades.push(elem);
                            this.escogidas.push(elem);
                            //una vez estan todos los viajes al pais seleccionado metidos en el array, los filtros funcionan correctamente
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
            this.firestoreServiceUser.getUsuariosFiltered(localStorage.getItem('usuario')).subscribe(res => {
                var email = res[0].email;
                this.firestoreService.getViajesByEmail(email).subscribe(elem => {
                    var i;
                    for (i = 0; i < elem.length; i++) {
                        //console.log(elem[i].descripcion);
                        this.ciudades.push(elem[i]);
                        this.escogidas.push(elem[i]);
                        //console.log(this.ciudades[i].descripcion);
                    }
                });
            });
        }
    }
    comprobarViajero() {
        return localStorage.getItem('tipo') == "viajero";
    }
    comprobarOrganizador() {
        return localStorage.getItem('tipo') == "organizador";
    }
}
MisViajesComponent.ɵfac = function MisViajesComponent_Factory(t) { return new (t || MisViajesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"])); };
MisViajesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MisViajesComponent, selectors: [["app-mis-viajes"]], decls: 26, vars: 7, consts: [["titulo", "MIS VIAJES"], [1, "right"], [1, "buscador"], ["id", "fname", "name", "fname", "placeholder", "Buscar ciudad...", "onclick", "reset()", 3, "ngModel", "ngModelChange", "change"], ["id", "img-f", "src", "../../../assets/filtro.png"], ["id", "select-f", 3, "ngModel", "ngModelChange", "change"], ["value", "+ 500\u20AC"], ["value", "Hasta 100\u20AC"], ["value", "Hasta 300\u20AC"], ["value", "Hasta 500\u20AC"], ["selected", "", 3, "value"], [1, "content"], ["class", "nuevo", 3, "routerLink", 4, "ngIf"], ["class", "pais", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "nuevo", 3, "routerLink"], ["id", "mas", "src", "../../../assets/nuevo.png"], [1, "pais", 3, "routerLink"], [3, "src"], [1, "destacado"], ["id", "mensaje"], [1, "info"], [1, "personas"], ["src", "../../../assets/usuario.png"], ["src", "../../../assets/compartir.png"]], template: function MisViajesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MisViajesComponent_Template_input_ngModelChange_5_listener($event) { return ctx.buscar = $event; })("change", function MisViajesComponent_Template_input_change_5_listener() { return ctx.busqueda(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MisViajesComponent_Template_select_ngModelChange_9_listener($event) { return ctx.precio = $event; })("change", function MisViajesComponent_Template_select_change_9_listener() { return ctx.filtrar(); });
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
    } if (rf & 2) {
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
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@charset \"UTF-8\";\n\n\n\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  float: right;\n}\nselect[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 5px;\n  border: none;\n  opacity: 0.6;\n}\n#img-f[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n#select-f[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\nnav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  flex-wrap: nowrap;\n  float: right;\n}\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-left: 50px;\n}\nnav[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px;\n  margin-top: 20px;\n}\n\n.nuevo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  \n  width: 15%;\n  height: 400px;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n  \n}\n.nuevo[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.nuevo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  height: 50px;\n  width: 50px;\n}\n\n.notfound[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-top: 70px;\n  width: 100%;\n}\n.pais[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  \n  width: 200px;\n  height: 30%;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n  \n}\n.pais[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.pais[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  height: 150px;\n  width: 200px;\n}\n.pais[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.pais[_ngcontent-%COMP%]   .destacado[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #009788;\n}\n.pais[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 20px;\n  margin-right: 10px;\n  align-items: center;\n  text-align: center;\n}\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n}\n.info[_ngcontent-%COMP%]   .personas[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 35px;\n}\n.pais[_ngcontent-%COMP%]   #mensaje[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n\n@media screen and (max-device-width: 480px) {\n  .volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n    width: 100%;\n    justify-content: center;\n  }\n\n  #select-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #img-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .pais[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 30%;\n  }\n\n  .nuevo[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 400px;\n  }\n\n  .nuevo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL21pcy12aWFqZXMvbWlzLXZpYWplcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC92aWFqZXMvbWlzLXZpYWplcy9taXMtdmlhamVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QixzQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRFJKO0FDV0E7RUFDSSx3SUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRFJKO0FDV0E7RUFDSSxZQUFBO0FEUko7QUNXQTtFQUVJLGVBQUE7RUFHQSxxREFBQTtBRFRKO0FDYUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QURWSjtBQ1lBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRFRKO0FDV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEUko7QUNXQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEUko7QUNXQSxnQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBOzs7O0lBQUE7RUFLQSxVQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBR0EsbUNBQUE7RUFFQTs7d0RBQUE7QURUSjtBQ2NBO0VBQ0k7O3VEQUFBO0VBS0EsK0NBQUE7QURYSjtBQ2VBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRFpKO0FDZUEsV0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURaSjtBQ2VBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FEWko7QUNlQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0E7Ozs7SUFBQTtFQUtBLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFHQSxtQ0FBQTtFQUVBOzt3REFBQTtBRFpKO0FDaUJBO0VBQ0k7O3VEQUFBO0VBS0EsK0NBQUE7QURkSjtBQ2tCQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURmSjtBQ2lCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3SUFBQTtBRGRKO0FDa0JBO0VBQ0ksaUJBQUE7RUFDQSxjQXZLVztBRHdKZjtBQ2lCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEZEo7QUNpQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRGRKO0FDZ0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRGJKO0FDZUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FEWko7QUNlQSxlQUFBO0FBQ0E7RUFFSTtJQUNJLGFBQUE7RURiTjs7RUNlRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7RURaTjs7RUNlRTtJQUNJLGFBQUE7RURaTjs7RUNjRTtJQUNJLGFBQUE7RURYTjs7RUNjRTtJQUNJLGVBQUE7RURYTjs7RUNlRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBRUEsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VEYk47O0VDZ0JFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFFQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RURkTjs7RUNpQkU7SUFDSSxjQUFBO0lBQ0EsWUFBQTtFRGROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWFqZXMvbWlzLXZpYWplcy9taXMtdmlhamVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbi8qKkJBUlJBIERFIELDmlNRVUVEQSoqL1xubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5zZWxlY3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4jaW1nLWYge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbiNzZWxlY3QtZjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbiAgYm94LXNoYWRvdzogM3B4IDFweCAxcHggMnB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG59XG5cbm5hdiAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yaWdodCBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxubmF2IC5idXNjYWRvciBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5idXNjYWRvciBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyoqTlVFVk8gVklBSkUqKi9cbi5udWV2byB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvKipwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgKiovXG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTsqKi9cbn1cblxuLm51ZXZvOmhvdmVyIHtcbiAgLyoqLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7KiovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ubnVldm8gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLyoqVklBSkVTKiovXG4ubm90Zm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhaXMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvKipwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgKiovXG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTsqKi9cbn1cblxuLnBhaXM6aG92ZXIge1xuICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICBib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTsqKi9cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5wYWlzIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnBhaXMgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBhaXMgLmRlc3RhY2FkbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwOTc4ODtcbn1cblxuLnBhaXMgLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8gaW1nIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbn1cblxuLmluZm8gLnBlcnNvbmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuXG4ucGFpcyAjbWVuc2FqZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgLnZvbHZlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICNzZWxlY3QtZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNpbWctZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAucGFpcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMzAlO1xuICB9XG5cbiAgLm51ZXZvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIC5udWV2byBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuJGxldHRlcnM6ICMwM2E5ZjQ7XG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcblxuLyoqQkFSUkEgREUgQsOaU1FVRURBKiovXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbnNlbGVjdHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3BhY2l0eTogMC42O1xufVxuXG4jaW1nLWZ7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIFxufVxuI3NlbGVjdC1mOmhvdmVye1xuICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LDEwOCwxMDksMC4zMSk7XG4gICAgYm94LXNoYWRvdzogM3B4IDFweCAxcHggMnB4IHJnYmEoMTA4LDEwOCwxMDksMC4zMSk7XG4gICAgXG59XG5cbm5hdiAucmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnJpZ2h0IGltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5uYXYgLmJ1c2NhZG9yIGltZ3tcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnVzY2Fkb3IgaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgXG59XG5cbi8qKk5VRVZPIFZJQUpFKiovXG4ubnVldm97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vYm9yZGVyLXN0eWxlOiBncm9vdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvKipwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAqKi9cbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogNDAwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcblxuICAgIC8qKi13ZWJraXQtYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xuICAgIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTsqKi9cblxufVxuLm51ZXZvOmhvdmVye1xuICAgIC8qKi13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTsqKi9cbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgXG4gICBcbn1cbi5udWV2byBpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLyoqVklBSkVTKiovXG4ubm90Zm91bmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIG1hcmdpbi10b3A6IDcwcHg7IFxuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFpc3tcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC8qKnBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICoqL1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwJTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuXG4gICAgLyoqLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gICAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpOyoqL1xuXG59XG4ucGFpczpob3ZlcntcbiAgICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7KiovXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIFxuICAgXG59XG4ucGFpcyBpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuLnBhaXMgcHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgXG59XG5cbi5wYWlzIC5kZXN0YWNhZG97XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRhenVsLXZlcmRvc287XG59XG4ucGFpcyAuaW5mb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyBpbWd7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xufVxuLmluZm8gLnBlcnNvbmFze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbn1cbi5wYWlzICNtZW5zYWple1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuXG4gICAgLnZvbHZlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgbmF2IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjc2VsZWN0LWZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNpbWctZntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udGVudHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5wYWlze1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogMzAlO1xuICAgIH1cblxuICAgIC5udWV2b3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxuXG4gICAgLm51ZXZvIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICBcblxuICAgIFxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MisViajesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mis-viajes',
                templateUrl: './mis-viajes.component.html',
                styleUrls: ['./mis-viajes.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudFirestoreService"] }, { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }, { type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioFirestoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/viajes/unirse-ciudad/unirse-ciudad.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/viajes/unirse-ciudad/unirse-ciudad.component.ts ***!
  \*****************************************************************/
/*! exports provided: UnirseCiudadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnirseCiudadComponent", function() { return UnirseCiudadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/viaje */ "./src/app/interfaces/viaje.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/volver/volver.component */ "./src/app/shared/volver/volver.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../not-found404/not-found404.component */ "./src/app/not-found404/not-found404.component.ts");












const _c0 = ["imageUser"];
function UnirseCiudadComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-not-found404", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/viaje/", a1]; };
function UnirseCiudadComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ciudad_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ciudad_r53.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ciudad_r53.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ciudad_r53.ciudad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ciudad_r53.mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ciudad_r53.precio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ciudad_r53.unidas, "/", ciudad_r53.maximo, "");
} }
function UnirseCiudadComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnirseCiudadComponent_div_25_div_1_Template, 14, 9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.escogidas);
} }
const _c2 = function () { return ["/unirse-pais"]; };
class UnirseCiudadComponent {
    constructor(_route, _router, storage, firestoreService) {
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
    estaVacio() {
        return this.escogidas.length < 1;
    }
    busqueda() {
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
    filtrar() {
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
    filtro(i) {
        var ciudad = this.ciudades[i];
        //solo metemos los viajes del pais escogido
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
    onUpload(e) {
        const id = Math.random().toString(36).substring(2); //generamos un id aleatorio para que no haya nombres repetidos
        const file = e.target.files[0]; //cogemos el fichero que ha subido el usuario
        const filePath = `upload/viaje_${id}`; //utilizamos literales para meter el id
        const ref = this.firestoreService.getFileRef(filePath);
        const task = this.firestoreService.storageFile(filePath, file);
        //console.log(ref.getDownloadURL());
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.urlImage = ref.getDownloadURL();
        })).subscribe();
    }
    crearViaje() {
        console.log("entra");
        var viaje = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__["Viaje"]();
        viaje.pais = "Francia";
        viaje.ciudad = "París";
        viaje.continente = "Europa";
        viaje.email = "emailinventado@gmail.com";
        viaje.img = this.inputImageUser.nativeElement.value;
        this.firestoreService.createViaje(viaje);
    }
    ngOnInit() {
        //let dato = JSON.parse(localStorage.getItem('pais'));
        //let id = localStorage.getItem('pais');
        if (localStorage.getItem('usuario') == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
        }
        let id = this._route.snapshot.paramMap.get('id'); //para saber el pais a traves de la URL
        localStorage.setItem('pais', id); //se establece el local Storage
        this.estePais = id.toUpperCase(); //para el titulo
        this.s_viajes = this.firestoreService.getViajesSorted().subscribe(data => {
            this.viajes = data;
        });
        this.firestoreService.getViajesFiltered(this._route.snapshot.paramMap.get('id')).subscribe(res => {
            this.viajes = res; //obtenemos todos los viajes a dicho pais
            var i = 0;
            var iterado; //servira de variable auxiliar
            this.escogidas = []; //lo vaciamos al cargar la página
            this.ciudades = []; //lo vaciamos al cargar la página
            for (i = 0; i < this.viajes.length; i++) {
                //recorremos todos los viajes del pais y vamos metiendolos con sus datos en el atributo escogidas
                iterado = new _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__["Viaje"]();
                iterado.id = this.viajes[i].id;
                iterado.ciudad = this.viajes[i].ciudad;
                iterado.continente = this.viajes[i].continente;
                iterado.descripcion = this.viajes[i].descripcion;
                iterado.duracion = this.viajes[i].duracion;
                iterado.email = this.viajes[i].email;
                iterado.fin = this.viajes[i].fin;
                iterado.img = this.viajes[i].img;
                iterado.tlf = this.viajes[i].tlf;
                iterado.inicio = this.viajes[i].inicio;
                iterado.limitePago = this.viajes[i].limitePago;
                iterado.limiteUnion = this.viajes[i].limiteUnion;
                iterado.maximo = this.viajes[i].maximo;
                iterado.servicios = this.viajes[i].servicios;
                iterado.precio = this.viajes[i].precio;
                iterado.pais = this.viajes[i].pais;
                iterado.viajeros = this.viajes[i].viajeros;
                iterado.unidas = this.viajes[i].unidas;
                this.ciudades.push(iterado);
                this.escogidas.push(iterado);
            }
            //una vez estan todos los viajes al pais seleccionado metidos en el array, los filtros funcionan correctamente
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
    ngOnDestroy() {
        this.s_viajes.unsubscribe();
    }
}
UnirseCiudadComponent.ɵfac = function UnirseCiudadComponent_Factory(t) { return new (t || UnirseCiudadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"])); };
UnirseCiudadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnirseCiudadComponent, selectors: [["app-unirse-ciudad"]], viewQuery: function UnirseCiudadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
    } }, decls: 26, vars: 9, consts: [[3, "titulo"], ["id", "div-volver", 3, "routerLink"], [1, "right"], [1, "buscador"], ["id", "fname", "name", "fname", "placeholder", "Buscar ciudad...", "onclick", "reset()", 3, "ngModel", "ngModelChange", "change"], ["id", "img-f", "src", "../../../assets/filtro.png"], ["id", "select-f", 3, "ngModel", "ngModelChange", "change"], ["value", "+ 500\u20AC"], ["value", "Hasta 100\u20AC"], ["value", "Hasta 300\u20AC"], ["value", "Hasta 500\u20AC"], ["selected", "", 3, "value"], ["class", "notfound", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "notfound"], ["titulo", "Lo sentimos, el viaje que est\u00E1s buscando no est\u00E1 disponible"], [1, "content"], ["class", "pais", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "pais", 3, "routerLink"], [3, "src"], [1, "destacado"], ["id", "mensaje"], [1, "info"], [1, "personas"], ["src", "../../../assets/usuario.png"], ["src", "../../../assets/compartir.png"]], template: function UnirseCiudadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnirseCiudadComponent_Template_input_ngModelChange_7_listener($event) { return ctx.buscar = $event; })("change", function UnirseCiudadComponent_Template_input_change_7_listener() { return ctx.busqueda(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnirseCiudadComponent_Template_select_ngModelChange_11_listener($event) { return ctx.precio = $event; })("change", function UnirseCiudadComponent_Template_select_change_11_listener() { return ctx.filtrar(); });
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
    } if (rf & 2) {
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
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_7__["VolverComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_10__["NotFound404Component"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["@charset \"UTF-8\";\n\n\n\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n#div-volver[_ngcontent-%COMP%]:active {\n  outline: none;\n}\nselect[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 5px;\n  border: none;\n  opacity: 0.6;\n}\n#img-f[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n#select-f[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n.volver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  padding: 5px;\n  border-radius: 10px;\n}\n.volver[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n.volver[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n  margin-left: 20px;\n  margin-top: 13px;\n}\n.volver[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\nnav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  flex-wrap: nowrap;\n}\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-left: 50px;\n}\nnav[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.buscador[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px;\n  margin-top: 20px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.notfound[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pais[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  \n  width: 200px;\n  height: 30%;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n  \n}\n.pais[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.pais[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  height: 150px;\n  width: 200px;\n}\n.pais[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.pais[_ngcontent-%COMP%]   .destacado[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #009788;\n}\n.pais[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 20px;\n  margin-right: 10px;\n  align-items: center;\n  text-align: center;\n}\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n}\n.info[_ngcontent-%COMP%]   .personas[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 35px;\n}\n.pais[_ngcontent-%COMP%]   #mensaje[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n\n@media screen and (max-device-width: 480px) {\n  .volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n    width: 100%;\n    justify-content: center;\n  }\n\n  #select-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #img-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .pais[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 30%;\n  }\n\n  #div-volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL3VuaXJzZS1jaXVkYWQvdW5pcnNlLWNpdWRhZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC92aWFqZXMvdW5pcnNlLWNpdWRhZC91bmlyc2UtY2l1ZGFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dPLHFCQUFBO0FBR0Esd0JBQUE7QUFDRSxrQ0FBQTtBQU16QixzQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEUko7QUNVQTtFQUNJLGFBQUE7QURQSjtBQ1VBO0VBQ0ksd0lBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURQSjtBQ1VBO0VBQ0ksWUFBQTtBRFBKO0FDVUE7RUFFSSxlQUFBO0VBR0EscURBQUE7QURSSjtBQ1dBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEUko7QUNZQTtFQUNJLGVBQUE7RUFHQSxxREFBQTtBRFRKO0FDV0E7RUFDSSx3SUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRFJKO0FDVUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRFBKO0FDVUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRFBKO0FDU0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FETko7QUNRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURMSjtBQ1FBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURMSjtBQ1FBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURMSjtBQ1FBLGFBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRExKO0FDUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRExKO0FDUUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBOzs7O0lBQUE7RUFLQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBR0EsbUNBQUE7RUFFQTs7d0RBQUE7QURMSjtBQ1VBO0VBQ0k7O3VEQUFBO0VBS0EsK0NBQUE7QURQSjtBQ1dBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBRFJKO0FDVUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0lBQUE7QURQSjtBQ1dBO0VBQ0ksaUJBQUE7RUFDQSxjQXpKVztBRGlKZjtBQ1VBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURQSjtBQ1NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUROSjtBQ1FBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRExKO0FDT0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FESko7QUNPQSxlQUFBO0FBQ0E7RUFFSTtJQUNJLGFBQUE7RURMTjs7RUNPRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7RURKTjs7RUNPRTtJQUNJLGFBQUE7RURKTjs7RUNNRTtJQUNJLGFBQUE7RURITjs7RUNNRTtJQUNJLGVBQUE7RURITjs7RUNPRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBRUEsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VETE47O0VDT0U7SUFDSSxhQUFBO0VESk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYWplcy91bmlyc2UtY2l1ZGFkL3VuaXJzZS1jaXVkYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogc29sbyBlbiB0ZXh0b3MgKiovXG4vKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4vKiogZXN0ZSBsbGV2YSBvcGFjaWRhZCBkZWwgNTIlICoqL1xuLyoqQkFSUkEgREUgQsOaU1FVRURBKiovXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNkaXYtdm9sdmVyOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbiNpbWctZiB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuI3NlbGVjdC1mOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDFweCAycHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbn1cblxuLnZvbHZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnZvbHZlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbiAgYm94LXNoYWRvdzogM3B4IDFweCAxcHggMnB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG59XG5cbi52b2x2ZXIgaDEge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG4udm9sdmVyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbm5hdiAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4ucmlnaHQgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbm5hdiAuYnVzY2Fkb3IgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnVzY2Fkb3IgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnVzY2Fkb3IgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qKkJBTkRFUkFTKiovXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ub3Rmb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFpcyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8qKnBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAqKi9cbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDMwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIC8qKi13ZWJraXQtYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpOyoqL1xufVxuXG4ucGFpczpob3ZlciB7XG4gIC8qKi13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpOyoqL1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLnBhaXMgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ucGFpcyBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGFpcyAuZGVzdGFjYWRvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA5Nzg4O1xufVxuXG4ucGFpcyAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyBpbWcge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uaW5mbyAucGVyc29uYXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5wYWlzICNtZW5zYWplIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAudm9sdmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgI3NlbGVjdC1mIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2ltZy1mIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC5wYWlzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gIH1cblxuICAjZGl2LXZvbHZlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuJGxldHRlcnM6ICMwM2E5ZjQ7XG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcblxuLyoqQkFSUkEgREUgQsOaU1FVRURBKiovXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuI2Rpdi12b2x2ZXI6YWN0aXZle1xuICAgIG91dGxpbmU6IG5vbmU7XG4gfVxuXG5zZWxlY3R7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuI2ltZy1me1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBcbn1cbiNzZWxlY3QtZjpob3ZlcntcbiAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xuICAgIFxufVxuLnZvbHZlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgXG59XG4udm9sdmVyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LDEwOCwxMDksMC4zMSk7XG4gICAgYm94LXNoYWRvdzogM3B4IDFweCAxcHggMnB4IHJnYmEoMTA4LDEwOCwxMDksMC4zMSk7XG59XG4udm9sdmVyIGgxe1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG59XG4udm9sdmVyIGltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbm5hdiAucmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG59XG4ucmlnaHQgaW1ne1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbm5hdiAuYnVzY2Fkb3IgaW1ne1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5idXNjYWRvciBmb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1c2NhZG9yIGlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7IFxufVxuXG4vKipCQU5ERVJBUyoqL1xuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXG59XG5cbi5ub3Rmb3VuZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWlze1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLyoqcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgKiovXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzAlO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG5cbiAgICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7KiovXG5cbn1cbi5wYWlzOmhvdmVye1xuICAgIC8qKi13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTsqKi9cbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgXG4gICBcbn1cbi5wYWlzIGltZ3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG4ucGFpcyBwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICBcbn1cblxuLnBhaXMgLmRlc3RhY2Fkb3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJGF6dWwtdmVyZG9zbztcbn1cbi5wYWlzIC5pbmZve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5mbyBpbWd7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xufVxuLmluZm8gLnBlcnNvbmFze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbn1cbi5wYWlzICNtZW5zYWple1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuXG4gICAgLnZvbHZlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgbmF2IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjc2VsZWN0LWZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNpbWctZntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udGVudHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5wYWlze1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogMzAlO1xuICAgIH1cbiAgICAjZGl2LXZvbHZlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgfVxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnirseCiudadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unirse-ciudad',
                templateUrl: './unirse-ciudad.component.html',
                styleUrls: ['./unirse-ciudad.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }]; }, { inputImageUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageUser']
        }] }); })();


/***/ }),

/***/ "./src/app/viajes/unirse-continente/unirse-continente.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/viajes/unirse-continente/unirse-continente.component.ts ***!
  \*************************************************************************/
/*! exports provided: UnirseContinenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnirseContinenteComponent", function() { return UnirseContinenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/volver/volver.component */ "./src/app/shared/volver/volver.component.ts");





const _c0 = function () { return ["/mis-viajes"]; };
const _c1 = function () { return ["/unirse-pais"]; };
class UnirseContinenteComponent {
    constructor() {
        this.clickMessage = '';
    }
    /**
      establecerContinente(continente:string):void{
        alert(continente);
      }
      **/
    ngOnInit() {
        if (localStorage.getItem('usuario') == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
        }
    }
}
UnirseContinenteComponent.ɵfac = function UnirseContinenteComponent_Factory(t) { return new (t || UnirseContinenteComponent)(); };
UnirseContinenteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnirseContinenteComponent, selectors: [["app-unirse-continente"]], decls: 41, vars: 30, consts: [["titulo", "ESCOGE TU SIGUIENTE EXPLORACI\u00D3N"], ["id", "div-volver", 3, "routerLink"], ["id", "imagen", "src", "../../../assets/mapa-continentes.png", "usemap", "#image-map"], ["name", "image-map"], ["onclick", "localStorage.setItem('continente', 'africa')", "target", "_self", "alt", "\u00C1frica", "title", "\u00C1frica", "coords", "466,199,454,209,450,222,440,233,433,244,424,256,424,274,425,291,441,305,457,322,492,313,505,317,514,322,516,336,516,350,525,362,525,377,522,393,522,415,531,428,537,450,546,466,568,466,586,449,599,434,600,413,615,404,623,382,620,356,627,339,647,324,650,301,635,298,607,265,595,232,581,218,512,196", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'america-sur')", "target", "_self", "alt", "Am\u00E9rica del sur", "title", "Am\u00E9rica del sur", "coords", "232,294,219,303,219,316,211,338,206,354,213,380,220,392,235,401,252,414,250,426,248,463,250,496,258,515,264,537,295,552,280,497,300,482,320,450,331,428,349,419,349,387,360,367,352,354,304,317,265,297,256,298", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'america-norte')", "target", "_self", "alt", "Am\u00E9rica del norte", "title", "Am\u00E9rica del norte", "coords", "163,263,154,271,144,268,131,259,128,242,118,227,116,226,106,217,114,244,107,225,99,201,156,253,139,170,108,156,128,167,109,123,109,113,101,104,156,233,159,260,157,257,154,238,170,225,176,223,189,222,207,217,218,222,222,208,243,199,242,184,263,175,285,155,297,162,321,154,321,133,314,108,389,109,446,60,464,38,397,36,375,39,335,33,320,40,296,44,268,44,230,54,205,62,183,71,160,72,130,74,100,72,80,81,62,91,46,104,17,124,156,253,157,259", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'america-centro')", "target", "_self", "alt", "Am\u00E9rica central", "title", "Am\u00E9rica central", "coords", "188,257,178,257,166,265,156,269,154,276,164,290,181,304,204,306,212,299,247,264,211,252", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'oceania')", "target", "_self", "alt", "Ocean\u00EDa", "title", "Ocean\u00EDa", "coords", "854,473,856,450,860,425,874,414,895,408,904,392,916,391,930,382,941,382,939,395,953,404,965,381,965,394,971,404,979,415,984,421,989,432,986,450,975,472,963,489,943,484,945,513,884,436,935,489,853,441,898,469,944,503", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'europa')", "target", "_self", "alt", "Europa", "title", "Europa", "coords", "464,201,481,192,489,180,500,172,513,186,540,191,564,197,572,179,584,166,617,177,641,185,640,153,643,144,664,139,656,125,650,103,652,84,647,58,625,59,581,79,547,75,517,87,502,106,479,127,475,113,460,131,446,189,451,194", "shape", "poly", 3, "routerLink"], ["onclick", "localStorage.setItem('continente', 'asia')", "target", "_self", "alt", "Asia", "title", "Asia", "coords", "570,186,589,180,603,178,621,178,636,185,646,195,655,184,645,160,645,143,658,144,659,122,646,97,658,72,679,70,725,50,769,58,789,66,846,69,886,77,919,80,955,84,976,91,953,107,938,136,949,140,927,212,877,224,858,258,846,284,888,271,911,294,903,327,924,350,886,385,657,274,640,291,624,271", "shape", "poly", 3, "routerLink"], [1, "botones"], ["onclick", "localStorage.setItem('continente', 'africa')", 1, "boton", 3, "routerLink"], ["src", "../../../assets/continentes/africa.png"], ["onclick", "localStorage.setItem('continente', 'america-sur')", 1, "boton", 3, "routerLink"], ["src", "../../../assets/continentes/america-sur.png"], ["onclick", "localStorage.setItem('continente', 'america-norte')", 1, "boton", 3, "routerLink"], ["src", "../../../assets/continentes/america-norte.png"], ["onclick", "localStorage.setItem('continente', 'america-centro')", 1, "boton", 3, "routerLink"], ["src", "../../../assets/continentes/america-centro.png"], ["onclick", "localStorage.setItem('continente', 'oceania')", 1, "boton", 3, "routerLink"], ["src", "../../../assets/continentes/oceania.png"], ["onclick", "localStorage.setItem('continente', 'europa')", 1, "boton", 3, "routerLink"], ["src", "../../../assets/continentes/europa.png"], ["onclick", "localStorage.setItem('continente', 'asia')", 1, "boton", 3, "routerLink"], ["src", "../../../assets/continentes/asia.png"]], template: function UnirseContinenteComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00C1frica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Am\u00E9rica del Sur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Am\u00E9rica del Norte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Am\u00E9rica Central");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ocean\u00EDa");
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
    } if (rf & 2) {
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
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_3__["VolverComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["#div-volver[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n\n.mapa[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\narea[_ngcontent-%COMP%] {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 40px;\n  background-color: black;\n}\n\n.botones[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-device-width: 480px) {\n  map[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #imagen[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .botones[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 20px;\n  }\n\n  .botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 200px;\n    text-align: center;\n    margin-top: 50px;\n    border-radius: 10px;\n    box-shadow: 2px 7px 4px 0px #cfd8dc;\n  }\n\n  .botones[_ngcontent-%COMP%]   .boton[_ngcontent-%COMP%]:hover {\n    box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  .boton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 80%;\n    width: 80%;\n  }\n\n  #div-volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldWdlbmlvZ2FyY2lhZGVsYXJvc2EvZ2l0aHViL3NhcmF5Z3JqaW0vVHJpcG1lZnkvc3JjL2FwcC92aWFqZXMvdW5pcnNlLWNvbnRpbmVudGUvdW5pcnNlLWNvbnRpbmVudGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpYWplcy91bmlyc2UtY29udGluZW50ZS91bmlyc2UtY29udGluZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksYUFBQTtBQ0ZKOztBRE1BO0VBQ0k7SUFDSSxhQUFBO0VDSE47O0VES0U7SUFDSSxhQUFBO0VDRk47O0VES0U7SUFDSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUNGTjs7RURLRTtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBR0EsbUNBQUE7RUNGTjs7RURLRTtJQUdJLCtDQUFBO0VDRk47O0VESUU7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFQ0ROOztFREdFO0lBQ0ksYUFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWFqZXMvdW5pcnNlLWNvbnRpbmVudGUvdW5pcnNlLWNvbnRpbmVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGl2LXZvbHZlcjphY3RpdmV7XG4gICAgb3V0bGluZTogbm9uZTtcbiB9XG5cblxuLm1hcGF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG59XG5cbmFyZWF7XG4gICAgb3V0bGluZTogbm9uZTsgXG5cbn1cblxuYnV0dG9ue1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmJvdG9uZXN7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XG4gICAgbWFwe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjaW1hZ2Vue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5ib3RvbmVze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBcbiAgICB9XG4gICAgLmJvdG9uZXMgLmJvdG9ue1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgfVxuICAgIFxuICAgIC5ib3RvbmVzIC5ib3Rvbjpob3ZlcntcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgfVxuICAgIC5ib3RvbiBpbWd7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAjZGl2LXZvbHZlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgfVxuXG59IiwiI2Rpdi12b2x2ZXI6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1hcGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuYXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uYm90b25lcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICBtYXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjaW1hZ2VuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJvdG9uZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAuYm90b25lcyAuYm90b24ge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggI2NmZDhkYztcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICB9XG5cbiAgLmJvdG9uZXMgLmJvdG9uOmhvdmVyIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIH1cblxuICAuYm90b24gaW1nIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgI2Rpdi12b2x2ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnirseContinenteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unirse-continente',
                templateUrl: './unirse-continente.component.html',
                styleUrls: ['./unirse-continente.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/viajes/unirse-pais/unirse-pais.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/viajes/unirse-pais/unirse-pais.component.ts ***!
  \*************************************************************/
/*! exports provided: UnirsePaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnirsePaisComponent", function() { return UnirsePaisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/volver/volver.component */ "./src/app/shared/volver/volver.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../not-found404/not-found404.component */ "./src/app/not-found404/not-found404.component.ts");








function UnirsePaisComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-not-found404", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/unirse-ciudad/", a1]; };
function UnirsePaisComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pais_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, pais_r57["pais"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/banderas/", pais_r57["imagen"], "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pais_r57["pais"]);
} }
function UnirsePaisComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnirsePaisComponent_div_29_div_1_Template, 4, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.escogidos);
} }
const _c1 = function () { return ["/unirse-continente"]; };
class UnirsePaisComponent {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.escogidos = [];
        this.buscar = "";
        this.elegido = [];
        this.americaNorte = [
            {
                "pais": "Canadá",
                "imagen": "cn.jpg"
            }
        ];
        this.americaCentro = [
            {
                "pais": "Panamá",
                "imagen": "pn.png"
            }
        ];
        this.americaSur = [
            {
                "pais": "Argentina",
                "imagen": "ar.png"
            }
        ];
        this.asia = [
            {
                "pais": "China",
                "imagen": "ch.png"
            }
        ];
        this.africa = [
            {
                "pais": "Egipto",
                "imagen": "eg.png"
            }
        ];
        this.oceania = [
            {
                "pais": "Australia",
                "imagen": "au.png"
            }
        ];
        this.europa = [
            {
                "pais": "España",
                "imagen": "sp.png"
            },
            {
                "pais": "Italia",
                "imagen": "ita.png"
            },
            {
                "pais": "Francia",
                "imagen": "fr.png"
            },
            {
                "pais": "Hungría",
                "imagen": "hu.png"
            }
        ];
        this.continentes = [this.europa];
        this.elem = this.continentes[this.numContinente];
    }
    hayPais() {
        return this.escogidos.length > 0;
    }
    busqueda() {
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
        }
        //si devuelve true, habra encontrado, si devuelve false, no habra encontrado
    }
    onChange(deviceValue) {
        console.log(deviceValue);
        localStorage.setItem('continente', deviceValue);
        this.identificador = localStorage.getItem('continente');
        this.continente = this.identificador;
        this.continente = deviceValue;
        switch (this.identificador) {
            case 'europa': {
                this.continentes[0] = this.europa;
                this.continente = 'Europa';
                break;
            }
            case 'america-norte': {
                this.continentes[0] = this.americaNorte;
                this.continente = 'América del Norte';
                break;
            }
            case 'america-sur': {
                this.continentes[0] = this.americaSur;
                this.continente = 'América del Sur';
                break;
            }
            case 'america-centro': {
                this.continentes[0] = this.americaCentro;
                this.continente = 'América Central';
                break;
            }
            case 'africa': {
                this.continentes[0] = this.africa;
                this.continente = 'África';
                break;
            }
            case 'asia': {
                this.continentes[0] = this.asia;
                this.continente = 'Asia';
                break;
            }
            case 'oceania': {
                this.continentes[0] = this.oceania;
                this.continente = 'Oceanía';
                break;
            }
            default: {
                this.continente = 'Europa';
                this.identificador = "europa";
                break;
            }
        }
        this.escogidos = this.continentes[0];
    }
    ngOnInit() {
        if (localStorage.getItem('usuario') == "null") {
            var origin = window.location.origin + '/';
            var destino = origin + "page1";
            window.location.assign(destino);
        }
        this.identificador = localStorage.getItem('continente');
        this.continente = this.identificador;
        this.continente[0].toUpperCase();
        switch (this.identificador) {
            case 'europa': {
                this.continentes[0] = this.europa;
                this.continente = 'Europa';
                break;
            }
            case 'america-norte': {
                this.continentes[0] = this.americaNorte;
                this.continente = 'América del Norte';
                break;
            }
            case 'america-sur': {
                this.continentes[0] = this.americaSur;
                this.continente = 'América del Sur';
                break;
            }
            case 'america-centro': {
                this.continentes[0] = this.americaCentro;
                this.continente = 'América Central';
                break;
            }
            case 'africa': {
                this.continentes[0] = this.africa;
                this.continente = 'África';
                break;
            }
            case 'asia': {
                this.continentes[0] = this.asia;
                this.continente = 'Asia';
                break;
            }
            case 'oceania': {
                this.continentes[0] = this.oceania;
                this.continente = 'Oceanía';
                break;
            }
            default: {
                this.continente = 'Europa';
                break;
            }
        }
        this.escogidos = this.continentes[0];
    }
    establecerPais() {
        //onclick="localStorage.setItem('pais', pais['pais'])"
        //[routerLink]="['/unirse-ciudad']"
    }
}
UnirsePaisComponent.ɵfac = function UnirsePaisComponent_Factory(t) { return new (t || UnirsePaisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UnirsePaisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnirsePaisComponent, selectors: [["app-unirse-pais"]], decls: 31, vars: 7, consts: [["titulo", "ESCOGE TU SIGUIENTE EXPLORACI\u00D3N"], ["id", "div-volver", 3, "routerLink"], [1, "right"], [1, "buscador"], ["action", "/action_page.php"], ["type", "text", "id", "fname", "name", "fname", "placeholder", "Buscar pais...", "onclick", "reset()", 3, "ngModel", "ngModelChange", "change"], ["id", "img-f", "src", "../../../assets/filtro.png"], ["id", "continentes", 3, "change"], ["selected", "", 3, "value"], ["value", "africa"], ["value", "america-centro"], ["value", "america-sur"], ["value", "america-norte"], ["value", "oceania"], ["value", "asia"], ["value", "europa"], ["class", "notfound", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "notfound"], ["titulo", "Lo sentimos, no hay pa\u00EDses que coincidan con esas caracter\u00EDsticas"], [1, "content"], ["class", "pais", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "pais", 3, "routerLink"], [3, "src"], [1, "destacado"]], template: function UnirsePaisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnirsePaisComponent_Template_input_ngModelChange_7_listener($event) { return ctx.buscar = $event; })("change", function UnirsePaisComponent_Template_input_change_7_listener() { return ctx.busqueda(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UnirsePaisComponent_Template_select_change_11_listener($event) { return ctx.onChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00C1frica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Am\u00E9rica Central");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Am\u00E9rica del sur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Am\u00E9rica del Norte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ocean\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "As\u00EDa");
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
    } if (rf & 2) {
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
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_3__["VolverComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_6__["NotFound404Component"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@charset \"UTF-8\";\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n#div-volver[_ngcontent-%COMP%]:active {\n  outline: none;\n}\nselect[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  padding: 5px;\n  border: none;\n  opacity: 0.6;\n}\n#select-f[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n#continentes[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-style: groove;\n}\n#img-f[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.volver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  padding: 5px;\n  border-radius: 10px;\n}\n.volver[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 3px 1px 1px 2px rgba(108, 108, 109, 0.31);\n}\n.volver[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  text-align: center;\n  margin-left: 20px;\n  margin-top: 13px;\n}\n.volver[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\nnav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  margin-right: 10px;\n  flex-wrap: nowrap;\n}\n.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin-left: 50px;\n}\nnav[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 5px;\n  margin-top: 20px;\n}\n\n.notfound[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.pais[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  \n  width: 180px;\n  height: 30%;\n  border-radius: 10px;\n  box-shadow: 2px 7px 4px 0px #cfd8dc;\n  \n}\n.pais[_ngcontent-%COMP%]:hover {\n  \n  box-shadow: 2px 7px 4px 0px rgba(0, 0, 0, 0.75);\n}\n.pais[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  height: 100px;\n  width: 180px;\n}\n.pais[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.pais[_ngcontent-%COMP%]   .destacado[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #009788;\n}\n.pais[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 20px;\n  margin-right: 10px;\n  align-items: center;\n  text-align: center;\n}\n.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n}\n.info[_ngcontent-%COMP%]   .personas[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 35px;\n}\n.pais[_ngcontent-%COMP%]   #mensaje[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 150px;\n  overflow: hidden;\n}\n\n@media screen and (max-device-width: 480px) {\n  .volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n    width: 100%;\n    justify-content: center;\n  }\n\n  #select-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #img-f[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .pais[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 70%;\n    height: 30%;\n  }\n\n  .pais[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 120;\n  }\n\n  #div-volver[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL3VuaXJzZS1wYWlzL3VuaXJzZS1wYWlzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2V1Z2VuaW9nYXJjaWFkZWxhcm9zYS9naXRodWIvc2FyYXlncmppbS9UcmlwbWVmeS9zcmMvYXBwL3ZpYWplcy91bmlyc2UtcGFpcy91bmlyc2UtcGFpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHTyxxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFNekI7RUFDSSx1QkFBQTtBRFJKO0FDVUEsc0JBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRFBKO0FDVUE7RUFDRyxhQUFBO0FEUEg7QUNVQTtFQUNJLHdJQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEUEo7QUNVQTtFQUVJLGVBQUE7RUFHQSxxREFBQTtBRFJKO0FDWUE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FDV0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURSSjtBQ1lBO0VBQ0ksZUFBQTtFQUdBLHFEQUFBO0FEVEo7QUNXQTtFQUNJLHdJQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEUko7QUNVQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FEUEo7QUNVQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEUEo7QUNTQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUROSjtBQ1FBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRExKO0FDUUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRExKO0FDUUEsYUFBQTtBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUROSjtBQ1NBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FETko7QUNTQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0E7Ozs7SUFBQTtFQUtBLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFHQSxtQ0FBQTtFQUVBOzt3REFBQTtBRE5KO0FDV0E7RUFDSTs7dURBQUE7RUFLQSwrQ0FBQTtBRFJKO0FDWUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FEVEo7QUNXQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3SUFBQTtBRFJKO0FDWUE7RUFDSSxpQkFBQTtFQUNBLGNBN0pXO0FEb0pmO0FDV0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRFJKO0FDVUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRFBKO0FDU0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FETko7QUNRQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURMSjtBQ1FBLGVBQUE7QUFDQTtFQUVJO0lBQ0ksYUFBQTtFRE5OOztFQ1FFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtFRExOOztFQ1FFO0lBQ0ksYUFBQTtFRExOOztFQ09FO0lBQ0ksYUFBQTtFREpOOztFQ09FO0lBQ0ksZUFBQTtFREpOOztFQ09FO0lBQ0ksY0FBQTtJQUNBLFlBQUE7SUFFQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7RURMTjs7RUNRRTtJQUNJLGFBQUE7SUFDQSxVQUFBO0VETE47O0VDT0U7SUFDSSxhQUFBO0VESk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYWplcy91bmlyc2UtcGFpcy91bmlyc2UtcGFpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLyoqQkFSUkEgREUgQsOaU1FVRURBKiovXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNkaXYtdm9sdmVyOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbiNzZWxlY3QtZjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsIDEwOCwgMTA5LCAwLjMxKTtcbiAgYm94LXNoYWRvdzogM3B4IDFweCAxcHggMnB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG59XG5cbiNjb250aW5lbnRlcyB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xufVxuXG4jaW1nLWYge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi52b2x2ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi52b2x2ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDFweCAycHggNXB4IHJnYmEoMTA4LCAxMDgsIDEwOSwgMC4zMSk7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwgMTA4LCAxMDksIDAuMzEpO1xufVxuXG4udm9sdmVyIGgxIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cblxuLnZvbHZlciBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5uYXYgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLnJpZ2h0IGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG5uYXYgLmJ1c2NhZG9yIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJ1c2NhZG9yIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKipCQU5ERVJBUyoqL1xuLm5vdGZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhaXMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvKipwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgKiovXG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4ICNjZmQ4ZGM7XG4gIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCAjY2ZkOGRjO1xuICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gIGJveC1zaGFkb3c6IDNweCAwcHggMHB4IDIwcHggcmdiYSgyMDcsMjE2LDIyMCwwLjU3KTsqKi9cbn1cblxuLnBhaXM6aG92ZXIge1xuICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICBib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTsqKi9cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMnB4IDdweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5wYWlzIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxODBweDtcbn1cblxuLnBhaXMgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBhaXMgLmRlc3RhY2FkbyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwOTc4ODtcbn1cblxuLnBhaXMgLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8gaW1nIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbn1cblxuLmluZm8gLnBlcnNvbmFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuXG4ucGFpcyAjbWVuc2FqZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qKlBBUkEgTcOTVklMKiovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgLnZvbHZlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICNzZWxlY3QtZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNpbWctZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAucGFpcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMzAlO1xuICB9XG5cbiAgLnBhaXMgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMjA7XG4gIH1cblxuICAjZGl2LXZvbHZlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIiRhenVsLWNsYXJvOiAjMGRhOGRlO1xuJGF6dWwtcm95YWw6ICMwMDRjYmU7XG4kYmxhbmNvOiAjZmZmZmZmO1xuJGF6dWwtbWFyaW5vOiAjMjAyODRjOyAvKiogc29sbyBlbiB0ZXh0b3MgKiovXG4kZ3JpczogI2NmZDhkYztcbiRuYXJhbmphOiAjZjRhNTAwO1xuJGF6dWwtb3NjdXJvOiAjMDAyMDYzOyAvKiogcG9wdXBzIHkgZGV0YWxsZXMgKiovXG4kdHJhbnNwYXJlbmNpYTogIzZjNmM2ZDsgLyoqIGVzdGUgbGxldmEgb3BhY2lkYWQgZGVsIDUyJSAqKi9cbiRncmlzLWJ1c2NhZG9yOiAjYzBjMWMwO1xuJGxldHRlcnM6ICMwM2E5ZjQ7XG4kZ3Jpcy1lbmNhYmV6YWRvOiAjRjVGNUY1O1xuJGF6dWwtdmVyZG9zbzogIzAwOTc4ODtcblxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLyoqQkFSUkEgREUgQsOaU1FVRURBKiovXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4jZGl2LXZvbHZlcjphY3RpdmV7XG4gICBvdXRsaW5lOiBub25lO1xufVxuXG5zZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbiNzZWxlY3QtZjpob3ZlcntcbiAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xuICAgIFxufVxuXG4jY29udGluZW50ZXN7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItc3R5bGU6IGdyb292ZTtcbn1cblxuI2ltZy1me1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cbi52b2x2ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIFxufVxuLnZvbHZlcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMXB4IDJweCA1cHggcmdiYSgxMDgsMTA4LDEwOSwwLjMxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCAxcHggMnB4IDVweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IDJweCByZ2JhKDEwOCwxMDgsMTA5LDAuMzEpO1xufVxuLnZvbHZlciBoMXtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuLnZvbHZlciBpbWd7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG5uYXYgLnJpZ2h0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLnJpZ2h0IGltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5uYXYgLmJ1c2NhZG9yIGltZ3tcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYnVzY2Fkb3IgaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgXG59XG5cbi8qKkJBTkRFUkFTKiovXG5cbi5ub3Rmb3VuZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxufVxuXG4ucGFpc3tcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC8qKnBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICoqL1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDMwJTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgyMDcsMjE2LDIyMCwxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuXG4gICAgLyoqLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggMHB4IDBweCAyMHB4IHJnYmEoMjA3LDIxNiwyMjAsMC41Nyk7XG4gICAgYm94LXNoYWRvdzogM3B4IDBweCAwcHggMjBweCByZ2JhKDIwNywyMTYsMjIwLDAuNTcpOyoqL1xuXG59XG4ucGFpczpob3ZlcntcbiAgICAvKiotd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDBweCByZ2JhKDIwNywyMTYsMjIwLDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7XG4gICAgYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMHB4IHJnYmEoMjA3LDIxNiwyMjAsMSk7KiovXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggN3B4IDRweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDJweCA3cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIFxuICAgXG59XG4ucGFpcyBpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xufVxuLnBhaXMgcHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgXG59XG5cbi5wYWlzIC5kZXN0YWNhZG97XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRhenVsLXZlcmRvc287XG59XG4ucGFpcyAuaW5mb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5mbyBpbWd7XG4gICAgaGVpZ2h0OiAxMHB4OyAgIFxuICAgIHdpZHRoOiAxMHB4O1xufVxuLmluZm8gLnBlcnNvbmFze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbn1cbi5wYWlzICNtZW5zYWple1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipQQVJBIE3Dk1ZJTCoqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuXG4gICAgLnZvbHZlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgbmF2IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjc2VsZWN0LWZ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNpbWctZntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udGVudHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBcbiAgICB9XG4gICAgLnBhaXN7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgfVxuXG4gICAgLnBhaXMgaW1ne1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTIwO1xuICAgIH1cbiAgICAjZGl2LXZvbHZlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgfVxuXG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnirsePaisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unirse-pais',
                templateUrl: './unirse-pais.component.html',
                styleUrls: ['./unirse-pais.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/viajes/viaje/viaje.component.ts":
/*!*************************************************!*\
  !*** ./src/app/viajes/viaje/viaje.component.ts ***!
  \*************************************************/
/*! exports provided: ViajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViajeComponent", function() { return ViajeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _interfaces_viaje__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/viaje */ "./src/app/interfaces/viaje.ts");
/* harmony import */ var _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/solicitud */ "./src/app/interfaces/solicitud.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/usuario-firestore.service */ "./src/app/services/firestore/usuario-firestore.service.ts");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firestore/opiniones-firestore.service */ "./src/app/services/firestore/opiniones-firestore.service.ts");
/* harmony import */ var _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/firestore/solicitud-firestore.service */ "./src/app/services/firestore/solicitud-firestore.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/volver/volver.component */ "./src/app/shared/volver/volver.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");















const _c0 = ["imageUser"];
function ViajeComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViajeComponent_div_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.unirse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Me uno al viaje");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViajeComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViajeComponent_div_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.pagar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pagar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViajeComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ya has pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViajeComponent {
    constructor(_route, _router, storage, firestoreServiceUser, firestoreServiceViaje, firestoreServiceOpiniones, firestoreServiceSolicitud) {
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
    showButtonJoin(solicitudes) {
        if (localStorage.getItem('tipo') == 'organizador') {
            this.show = false;
        }
        else { // Es tipo viajero y hay que mirar las solicitudes
            for (var i = 0; i < solicitudes.length; i++) {
                if (solicitudes[i].idUsuario == localStorage.getItem('usuario')) {
                    this.show = false; // El usuario ya se ha apuntado luego se elimina la posibilidad
                    if (solicitudes[i].estado == 'aceptado') {
                        this.payButton = true; //Mostramos botón de pago
                    }
                    else if (solicitudes[i].estado == 'pagado') {
                        this.payButton = false; // No mostramos botón pago si ya ha pagado
                        this.alreadyPaid = true; // Activamos mensaje de confimración de pago
                    }
                }
            }
        }
    }
    /*  Función que une a una persona a la base de datos en el apartado de solicitues para el viaje en cuestión
        Se activa al pinchar sobre el botón de unirse */
    unirse() {
        var new_solicitud = new _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_2__["Solicitud"]();
        new_solicitud.idUsuario = localStorage.getItem('usuario');
        new_solicitud.idOrganizador = "";
        new_solicitud.idViaje = this._route.snapshot.paramMap.get('id');
        new_solicitud.estado = "aceptado";
        this.firestoreServiceSolicitud.createSolicitud(new_solicitud);
    }
    /*  Función que une actualiza en la solicitud de la persona el estado de aceptado a pagado
        Se activa al pinchar sobre el botón de pagar */
    pagar() {
        this.firestoreServiceSolicitud.getSolicitudesByTripId(this._route.snapshot.paramMap.get('id')).subscribe(res => {
            var i;
            var new_solicitud = new _interfaces_solicitud__WEBPACK_IMPORTED_MODULE_2__["Solicitud"]();
            for (i = 0; i < res.length; i++) {
                if (res[i].idUsuario == localStorage.getItem('usuario')) {
                    new_solicitud = res[i];
                    new_solicitud.estado = "pagado";
                    this.firestoreServiceSolicitud.updateSolicitud(new_solicitud);
                }
            }
        });
    }
    ngOnInit() {
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
        var tripAux = this.firestoreServiceViaje.getViaje(tripId).then((elem) => {
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
            tripAux.viajeros = elem.viajeros;
            this.viaje = tripAux;
            /* Esta función devuelve un array de imágenes para el viaje en el que nos encontremos*/
            this.firestoreServiceViaje.getSlides(this.viaje.id).subscribe(res => {
                this.slides3 = [];
                var i;
                for (i = 0; i < res.length; i++) {
                    this.slides3.push({ src: res[i].url });
                }
            });
            /* Esta función devuelve el array de solicitudes de un viaje */
            this.firestoreServiceSolicitud.getSolicitudesByTripId(this.viaje.id).subscribe(res => {
                this.solicitudes = [];
                var i;
                for (i = 0; i < res.length; i++) {
                    this.solicitudes.push({ idUsuario: res[i].idUsuario, estado: res[i].estado });
                }
                // Mostaremos el botón de unirse si el usuario no tiene el viaje entre sus solicitures y es viajero
                this.showButtonJoin(this.solicitudes);
                /* Esta función devuelve un array con las imagenes de los usuarios en un viaje */
                this.firestoreServiceUser.getUsuarios().subscribe(res => {
                    this.usuarios_viaje = [];
                    var i, j;
                    // Se recorre el array de solicitudes
                    for (i = 0; i < this.solicitudes.length; i++) {
                        // Recorremos la base de datos
                        for (j = 0; j < res.length; j++) {
                            // Encontramos el usuario de la solicitud
                            if (this.solicitudes[i].idUsuario == res[j].id) {
                                // Guardamos las imagenes para el carousel
                                this.usuarios_viaje.push({ src: res[j].image });
                                if (res[j].tipo == 'viajero') {
                                    this.img_usuarios_viaje.push(['perfil-viajero', res[j].id]);
                                }
                                else {
                                    this.img_usuarios_viaje.push(['perfil-organizador', res[j].id]);
                                }
                            }
                        }
                    }
                });
            });
        });
    }
}
ViajeComponent.ɵfac = function ViajeComponent_Factory(t) { return new (t || ViajeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudFirestoreService"])); };
ViajeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViajeComponent, selectors: [["app-viaje"]], viewQuery: function ViajeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputImageUser = _t.first);
    } }, decls: 61, vars: 16, consts: [["titulo", "Viaje "], [1, "main_container_izq"], [1, "titulo_viaje"], [1, "lugar"], [1, "fotografia_viaje"], [1, "container_carousel1"], [3, "slides"], [1, "informacion_viaje"], [1, "precio", 2, "display", "inline-block"], ["src", "../../../assets/hotel.png", "height", "10%", "width", "10%", 2, "padding-left", "3%"], ["src", "../../../assets/plane.png", "height", "10%", "width", "10%", 2, "padding-left", "3%"], ["src", "../../../assets/fork.png", "height", "10%", "width", "10%", 2, "padding-left", "3%"], [2, "display", "inline-block"], ["src", "../../../assets/phone.png", "height", "3%", "width", "3%", 2, "display", "inline-block", "padding", "0 3%"], [1, "bold", 2, "display", "inline-block"], ["src", "../../../assets/envelope.png", "height", "3%", "width", "3%", 2, "display", "inline-block", "padding", "0 3%"], ["class", "button", 4, "ngIf"], [1, "main_container_der"], [1, "organizador"], [1, "bold"], [2, "text-align", "justify", "margin-right", "12%"], [1, "container_carousel2"], [3, "slides", "links"], [1, "button"], ["mat-raised-button", "", "color", "primary", 2, "height", "3em", "width", "10em", 3, "click"], ["mat-stroked-button", "", "disabled", "", 2, "height", "3em", "width", "10em"]], template: function ViajeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Viaja a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contacta con nostros a traves de:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViajeComponent_div_28_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViajeComponent_div_29_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ViajeComponent_div_30_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Viaje organizado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "TopViajes");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Termina el d\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Fecha l\u00EDmite de pago: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viaje.precio);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
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
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_volver_volver_component__WEBPACK_IMPORTED_MODULE_10__["VolverComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], styles: ["@charset \"UTF-8\";\n\n\n\n.main_container_izq[_ngcontent-%COMP%] {\n  float: left;\n  width: 43%;\n  margin-top: 1%;\n  padding-left: 7%;\n}\n.main_container_der[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  margin-top: 1%;\n}\n.container_carousel1[_ngcontent-%COMP%] {\n  display: block;\n  height: 20em;\n  width: 85%;\n}\n.container_carousel2[_ngcontent-%COMP%] {\n  display: block;\n  height: 15em;\n  width: 50%;\n  margin: 2% 25%;\n  margin-top: 4%;\n  margin-bottom: 7%;\n}\n.lugar[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-weight: bold;\n}\n.informacion_viaje[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.precio[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-size: 3em;\n  margin-top: 2%;\n}\n.organizador[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-weight: bold;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.button[_ngcontent-%COMP%] {\n  margin-left: 27%;\n  margin-top: 4%;\n}\n.texto[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-right: 12%;\n}\n\n@media screen and (max-device-width: 700px) {\n  .main_container_izq[_ngcontent-%COMP%], .main_container_der[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 2.5%;\n    padding-left: 0%;\n  }\n\n  .container_carousel1[_ngcontent-%COMP%], .container_carousel2[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .container_carousel2[_ngcontent-%COMP%] {\n    margin: 0%;\n    margin-bottom: 5%;\n  }\n\n  .texto[_ngcontent-%COMP%] {\n    margin-right: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlhamVzL3ZpYWplL3ZpYWplLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2V1Z2VuaW9nYXJjaWFkZWxhcm9zYS9naXRodWIvc2FyYXlncmppbS9UcmlwbWVmeS9zcmMvYXBwL3ZpYWplcy92aWFqZS92aWFqZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHTyxxQkFBQTtBQUdBLHdCQUFBO0FBQ0Usa0NBQUE7QUFLekI7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRFBGO0FDVUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QURQRjtBQ1VBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FEUEo7QUNVQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURQSjtBQ1VBO0VBQ0UsY0FoQ1E7RUFpQ1IsaUJBQUE7QURQRjtBQ1VBO0VBQ0UsY0FBQTtBRFBGO0FDVUE7RUFDRSxjQXpDUTtFQTBDUixjQUFBO0VBQ0EsY0FBQTtBRFBGO0FDVUE7RUFDRSxjQS9DUTtFQWdEUixpQkFBQTtBRFBGO0FDVUE7RUFDRSxpQkFBQTtBRFBGO0FDVUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QURQRjtBQ1VBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBRFBGO0FDVUEsZUFBQTtBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VEUEY7O0VDU0E7SUFDRSxVQUFBO0VETkY7O0VDUUE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RURMRjs7RUNPQTtJQUNFLGdCQUFBO0VESkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYWplcy92aWFqZS92aWFqZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBzb2xvIGVuIHRleHRvcyAqKi9cbi8qKiBwb3B1cHMgeSBkZXRhbGxlcyAqKi9cbi8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4ubWFpbl9jb250YWluZXJfaXpxIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MyU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBwYWRkaW5nLWxlZnQ6IDclO1xufVxuXG4ubWFpbl9jb250YWluZXJfZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG4uY29udGFpbmVyX2Nhcm91c2VsMSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDIwZW07XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5jb250YWluZXJfY2Fyb3VzZWwyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAyJSAyNSU7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tYm90dG9tOiA3JTtcbn1cblxuLmx1Z2FyIHtcbiAgY29sb3I6ICMwM2E5ZjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5mb3JtYWNpb25fdmlhamUge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnByZWNpbyB7XG4gIGNvbG9yOiAjMDNhOWY0O1xuICBmb250LXNpemU6IDNlbTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5vcmdhbml6YWRvciB7XG4gIGNvbG9yOiAjMDNhOWY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNyU7XG4gIG1hcmdpbi10b3A6IDQlO1xufVxuXG4udGV4dG8ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tcmlnaHQ6IDEyJTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3MDBweCkge1xuICAubWFpbl9jb250YWluZXJfaXpxLCAubWFpbl9jb250YWluZXJfZGVyIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMi41JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xuICB9XG5cbiAgLmNvbnRhaW5lcl9jYXJvdXNlbDEsIC5jb250YWluZXJfY2Fyb3VzZWwyIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG5cbiAgLmNvbnRhaW5lcl9jYXJvdXNlbDIge1xuICAgIG1hcmdpbjogMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cblxuICAudGV4dG8ge1xuICAgIG1hcmdpbi1yaWdodDogMCU7XG4gIH1cbn0iLCIkYXp1bC1jbGFybzogIzBkYThkZTtcbiRhenVsLXJveWFsOiAjMDA0Y2JlO1xuJGJsYW5jbzogI2ZmZmZmZjtcbiRhenVsLW1hcmlubzogIzIwMjg0YzsgLyoqIHNvbG8gZW4gdGV4dG9zICoqL1xuJGdyaXM6ICNjZmQ4ZGM7XG4kbmFyYW5qYTogI2Y0YTUwMDtcbiRhenVsLW9zY3VybzogIzAwMjA2MzsgLyoqIHBvcHVwcyB5IGRldGFsbGVzICoqL1xuJHRyYW5zcGFyZW5jaWE6ICM2YzZjNmQ7IC8qKiBlc3RlIGxsZXZhIG9wYWNpZGFkIGRlbCA1MiUgKiovXG4kZ3Jpcy1idXNjYWRvcjogI2MwYzFjMDtcbiRsZXR0ZXJzOiAjMDNhOWY0O1xuJGdyaXMtZW5jYWJlemFkbzogI0Y1RjVGNTtcblxuLm1haW5fY29udGFpbmVyX2l6cXtcbiAgZmxvYXQ6bGVmdDtcbiAgd2lkdGg6IDQzJTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIHBhZGRpbmctbGVmdDogNyU7XG59XG5cbi5tYWluX2NvbnRhaW5lcl9kZXJ7XG4gIGZsb2F0OmxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG4uY29udGFpbmVyX2Nhcm91c2VsMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAyMGVtO1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cblxuLmNvbnRhaW5lcl9jYXJvdXNlbDIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTVlbTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMiUgMjUlO1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIG1hcmdpbi1ib3R0b206IDclO1xufVxuXG4ubHVnYXIge1xuICBjb2xvcjogJGxldHRlcnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5mb3JtYWNpb25fdmlhamV7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4ucHJlY2lve1xuICBjb2xvcjogJGxldHRlcnM7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLm9yZ2FuaXphZG9ye1xuICBjb2xvcjogJGxldHRlcnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9sZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b257XG4gIG1hcmdpbi1sZWZ0OiAyNyU7XG4gIG1hcmdpbi10b3A6IDQlO1xufVxuXG4udGV4dG97XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7IFxuICBtYXJnaW4tcmlnaHQ6IDEyJTtcbn1cblxuLyoqUEFSQSBNw5NWSUwqKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzAwcHgpe1xuICAubWFpbl9jb250YWluZXJfaXpxLCAubWFpbl9jb250YWluZXJfZGVye1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAyLjUlO1xuICAgIHBhZGRpbmctbGVmdDogMCU7XG4gIH1cbiAgLmNvbnRhaW5lcl9jYXJvdXNlbDEsIC5jb250YWluZXJfY2Fyb3VzZWwyIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5jb250YWluZXJfY2Fyb3VzZWwyIHtcbiAgICBtYXJnaW46MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbiAgLnRleHRve1xuICAgIG1hcmdpbi1yaWdodDogMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViajeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viaje',
                templateUrl: './viaje.component.html',
                styleUrls: ['./viaje.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }, { type: _services_firestore_usuario_firestore_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioFirestoreService"] }, { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] }, { type: _services_firestore_opiniones_firestore_service__WEBPACK_IMPORTED_MODULE_7__["OpinionesFirestoreService"] }, { type: _services_firestore_solicitud_firestore_service__WEBPACK_IMPORTED_MODULE_8__["SolicitudFirestoreService"] }]; }, { inputImageUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageUser']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eugeniogarciadelarosa/github/saraygrjim/Tripmefy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map