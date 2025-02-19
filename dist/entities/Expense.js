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
exports.Expense = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
let Expense = class Expense {
    id;
    bankAccountName;
    bankAccountId;
    amount;
    expenseDate;
    currency;
    description;
    category;
    isBilled;
    dateToBePayed;
    creditOrDebit;
    remainingAmount;
    remainingAmountToBudget;
};
exports.Expense = Expense;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Expense.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "bank_account_name", type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Expense.prototype, "bankAccountName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "bank_account_id", type: "varchar", length: 15 }),
    __metadata("design:type", String)
], Expense.prototype, "bankAccountId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "amount", type: "float" }),
    __metadata("design:type", Number)
], Expense.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "expense_date", type: "date" }),
    __metadata("design:type", Date)
], Expense.prototype, "expenseDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "currency_code", type: "varchar", length: 3 }),
    __metadata("design:type", String)
], Expense.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "expense_description", type: "text", nullable: true }),
    __metadata("design:type", String)
], Expense.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "expense_category", type: "varchar", length: 50, nullable: true }),
    __metadata("design:type", String)
], Expense.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_payed", type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Expense.prototype, "isBilled", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "date_to_be_payed", type: "date", nullable: true }) // Fixed space in name
    ,
    __metadata("design:type", Date)
], Expense.prototype, "dateToBePayed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "credit_or_debit", type: "varchar", length: 6, default: "credit" }) // Fixed "/" issue
    ,
    __metadata("design:type", String)
], Expense.prototype, "creditOrDebit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "remaining_amount_in_account", type: "float" }) // Fixed typo & changed number → float
    ,
    __metadata("design:type", Number)
], Expense.prototype, "remainingAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "remaining_amount_to_budget", type: "float" }),
    __metadata("design:type", Number)
], Expense.prototype, "remainingAmountToBudget", void 0);
exports.Expense = Expense = __decorate([
    (0, typeorm_1.Entity)("expenses")
], Expense);
