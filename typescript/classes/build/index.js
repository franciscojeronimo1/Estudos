"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
function acessarSistema() {
    (0, connection_1.connection)({ ip: "198,3232.32.", name: "mysql" });
}
acessarSistema();
