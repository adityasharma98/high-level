import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("USER")
export class UserEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "USERID" })
  userid: number;

  @Column("text", { name: "NAME" })
  name: string;

  @Column("text", { name: "HANDLE" })
  handle: string;

  @Column("text", { name: "DOB" })
  dob: string;

  @Column("text", { name: "PASSWORD" })
  password: string;
}
