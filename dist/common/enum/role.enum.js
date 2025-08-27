"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
var Role;
(function (Role) {
    Role["STUDENT"] = "student";
    Role["ADMIN"] = "admin";
    Role["INSTRUCTOR"] = "instructor";
})(Role || (exports.Role = Role = {}));
(0, graphql_1.registerEnumType)(Role, {
    name: 'Role',
});
//# sourceMappingURL=role.enum.js.map