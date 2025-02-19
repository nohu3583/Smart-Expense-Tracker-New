import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

@Entity("Account")
export class Account {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ name: "account_owner", type: "varchar", length: 13 })
    account_owner!: string;

    @Column({ name: "account_name", type: "varchar", length: 100 })
    account_name!: string;

    @Column({ name: "account_type", type: "varchar", length: 50 })
    account_type!: string;

    @Column({ name: "account_balance", type: "float" })
    account_balance!: number;

    @Column({ name: "currency_code", type: "varchar", length: 3 })
    currency_code!: string;

    @Column({ name: "last_updated", type: "date" })
    updated_date!: Date;

    async validate(): Promise<void> {
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
}