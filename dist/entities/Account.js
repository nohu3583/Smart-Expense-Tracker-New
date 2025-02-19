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
exports.Account = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
let Account = class Account {
    id;
    account_owner;
    account_name;
    account_type;
    account_balance;
    currency_code;
    updated_date;
    async validate() {
        if (this.account_name === null) {
            throw new Error("This field should not be empty");
        }
        if (this.account_name.length > 100) {
            throw new Error("Account name should not exceed 100 characters");
        }
        if (this.account_type.length > 50) {
            throw new Error("Account type should not exceed 50 characters");
        }
        if (this.currency_code.length !== 3) {
            throw new Error("Currency code should always be 3 characters");
        }
        if (this.updated_date >= new Date()) {
            throw new Error("Date should not be in the past");
        }
        if (this.account_balance < 0) {
            throw new Error("Account balance should not be negative");
        }
        if (this.account_owner.length !== 13) {
            throw new Error("Account owner should be 13 characters");
        }
        if (!/^\d{8}-\d{4}$/.test(this.account_owner)) {
            throw new Error("Account owner should be in the format of 8 digits dash 4 digits");
        }
    }
};
exports.Account = Account;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "account_owner", type: "varchar", length: 13 }),
    __metadata("design:type", String)
], Account.prototype, "account_owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "account_name", type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Account.prototype, "account_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "account_type", type: "varchar", length: 50 }),
    __metadata("design:type", String)
], Account.prototype, "account_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "account_balance", type: "float" }),
    __metadata("design:type", Number)
], Account.prototype, "account_balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "currency_code", type: "varchar", length: 3 }),
    __metadata("design:type", String)
], Account.prototype, "currency_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "last_updated", type: "date" }),
    __metadata("design:type", Date)
], Account.prototype, "updated_date", void 0);
exports.Account = Account = __decorate([
    (0, typeorm_1.Entity)("Account")
], Account);
