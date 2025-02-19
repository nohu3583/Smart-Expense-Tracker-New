"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Account_1 = require("./entities/Account");
const Expense_1 = require("./entities/Expense");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities: [Account_1.Account, Expense_1.Expense],
    synchronize: true, // Auto-create tables (disable in production)
    logging: true
});
exports.AppDataSource.initialize()
    .then(() => console.log("Database initialized successfully"))
    .catch((err) => console.error("Error initializing database:", err));
