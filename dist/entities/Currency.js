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
exports.Currency = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
let Currency = class Currency {
    id;
    currency_name;
    currency_code;
    updated_date;
    exchange;
    async validate() {
        if (this.currency_name === null) {
            throw new Error("This field should not be empty");
        }
        if (this.currency_code.length !== 3) {
            throw new Error("Currency code should always be 3 charachter");
        }
        if (this.updated_date >= new Date()) {
            throw new Error("Date should not be in the past");
        }
    }
};
exports.Currency = Currency;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Currency.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Currency name", type: "string" }),
    __metadata("design:type", String)
], Currency.prototype, "currency_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Currency code", type: "string", length: 3, default: "sek" }),
    __metadata("design:type", String)
], Currency.prototype, "currency_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Last updated", type: "date" }),
    __metadata("design:type", Date)
], Currency.prototype, "updated_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Currency exchange (relative to sek)", type: "float", default: 1 }),
    __metadata("design:type", Float32Array)
], Currency.prototype, "exchange", void 0);
exports.Currency = Currency = __decorate([
    (0, typeorm_1.Entity)("Currency table")
], Currency);
