import { Column, Entity } from "typeorm";

@Entity("COMPANY")
export class Company {
  @Column("int", { primary: true, name: "ID", unique: true })
  id: number;

  @Column("text", { name: "NAME" })
  name: string;

  @Column("int", { name: "AGE" })
  age: number;

  @Column("varchar", { name: "ADDRESS", nullable: true, length: 50 })
  address: NonNullable<unknown> | null;

  @Column("real", { name: "SALARY", nullable: true })
  salary: number | null;
}
