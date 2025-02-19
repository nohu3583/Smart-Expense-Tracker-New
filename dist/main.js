"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Data_source_1 = require("./Data_source");
const Account_1 = require("./entities/Account");
Data_source_1.AppDataSource.initialize()
    .then(async () => {
    console.log("✅ Database initialized successfully!");
    // Create a new account
    const account = new Account_1.Account();
    account.account_owner = "12345678-1234";
    account.account_name = "Test Account";
    account.account_type = "Savings";
    account.account_balance = 500;
    account.currency_code = "USD";
    account.updated_date = new Date();
    // Save to database
    await Data_source_1.AppDataSource.manager.save(account);
    console.log("✅ Test account saved!");
    // Fetch all accounts to verify
    const accounts = await Data_source_1.AppDataSource.manager.find(Account_1.Account);
    console.log("✅ Fetched Accounts: ", accounts);
})
    .catch((error) => console.error("❌ Error:", error));
