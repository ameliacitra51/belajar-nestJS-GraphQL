"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSectionInput = void 0;
const create_section_input_1 = require("./create-section.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateSectionInput = class UpdateSectionInput extends (0, graphql_1.PartialType)(create_section_input_1.CreateSectionInput) {
    id;
};
exports.UpdateSectionInput = UpdateSectionInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UpdateSectionInput.prototype, "id", void 0);
exports.UpdateSectionInput = UpdateSectionInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateSectionInput);
//# sourceMappingURL=update-section.input.js.map