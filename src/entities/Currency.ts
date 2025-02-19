import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

@Entity("Currency table") 
    export class Currency{
    @PrimaryGeneratedColumn()
    id! : string;

    @Column({name : "Currency name", type : "string" })
    currency_name! : string;

    @Column({name : "Currency code", type : "string", length : 3, default : "sek"})
    currency_code! : string
    
    @Column({name : "Last updated", type : "date"})
    updated_date! : Date;

    @Column({name : "Currency exchange (relative to sek)", type: "float", default : 1})
    exchange! : Float32Array;

    async validate(): Promise<void> {
        if (this.currency_name === null) {
            throw new Error ("This field should not be empty");
        }
        if (this.currency_code.length !== 3) {
            throw new Error ("Currency code should always be 3 charachter")
        }
        if (this.updated_date >= new Date()) {
            throw new Error ("Date should not be in the past")
        }
    }
}