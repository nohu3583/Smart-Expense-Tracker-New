import "reflect-metadata";
import { DataSource } from "typeorm";
import { Account } from "./entities/Account";
import { Expense } from "./entities/Expense";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities: [Account, Expense],
    synchronize: true,  // Auto-create tables (disable in production)
    logging: true
});

AppDataSource.initialize()
    .then(() => console.log("Database initialized successfully"))
    .catch((err) => console.error("Error initializing database:", err));
