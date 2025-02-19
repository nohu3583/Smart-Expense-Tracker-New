import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("expenses")
export class Expense {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "bank_account_name", type: "varchar", length: 100 })
    bankAccountName!: string;

    @Column({ name: "bank_account_id", type: "varchar", length: 15 })
    bankAccountId!: string;

    @Column({ name: "amount", type: "float" })
    amount!: number;

    @Column({ name: "expense_date", type: "date" })
    expenseDate!: Date;

    @Column({ name: "currency_code", type: "varchar", length: 3 })
    currency!: string;

    @Column({ name: "expense_description", type: "text", nullable: true })
    description!: string;

    @Column({ name: "expense_category", type: "varchar", length: 50, nullable: true })
    category!: string;

    @Column({ name: "is_payed", type: "boolean", default: false })
    isBilled!: boolean;

    @Column({ name: "date_to_be_payed", type: "date", nullable: true }) // Fixed space in name
    dateToBePayed!: Date;

    @Column({ name: "credit_or_debit", type: "varchar", length: 6, default: "credit" }) // Fixed "/" issue
    creditOrDebit!: string;

    @Column({ name: "remaining_amount_in_account", type: "float" }) // Fixed typo & changed number → float
    remainingAmount!: number;

    @Column({ name: "remaining_amount_to_budget", type: "float" })
    remainingAmountToBudget!: number;
}
