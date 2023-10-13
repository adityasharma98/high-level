import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("FOLLOWERS")
export class Followers {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("int", { name: "PRIMARYUSERID" })
  primaryuserid: number;

  @Column("int", { name: "SECONDARYUSERID" })
  secondaryuserid: number;
}
