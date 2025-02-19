import "reflect-metadata";  
import { AppDataSource } from "./Data_source";
import { Account } from "./entities/Account";  

AppDataSource.initialize()
    .then(async () => {
        console.log("✅ Database initialized successfully!");

        // Create a new account
        const account = new Account();
        account.account_owner = "12345678-1234";
        account.account_name = "Test Account";
        account.account_type = "Savings";
        account.account_balance = 500;
        account.currency_code = "USD";
        account.updated_date = new Date();

        // Save to database
        await AppDataSource.manager.save(account);
        console.log("✅ Test account saved!");

        // Fetch all accounts to verify
        const accounts = await AppDataSource.manager.find(Account);
        console.log("✅ Fetched Accounts: ", accounts);
    })
    .catch((error) => console.error("❌ Error:", error));
