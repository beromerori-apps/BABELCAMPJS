// Representa una entidad contacto
"use strict";
var Contacto = (function () {
    function Contacto(id, nombre, apellidos, email, telefono, twitter, facebook, avatar) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.twitter = twitter;
        this.facebook = facebook;
        this.avatar = avatar;
    }
    Contacto.desdeJSON = function (json) {
        return new Contacto(json.id, json.nombre, json.apellidos, json.email, json.telefono, json.twitter, json.facebook, json.avatar || '');
    };
    // Metodo de instancia (lo tienen todas las instancias de Contacto)
    Contacto.prototype.generarRutaFacebook = function () {
        return this.facebook ? "https://facebook.com/" + this.facebook : null;
    };
    Contacto.prototype.generarRutaTwitter = function () {
        return this.facebook ? "https://twitter.com/" + this.twitter : null;
    };
    return Contacto;
}());
exports.Contacto = Contacto;
//# sourceMappingURL=contacto.js.map