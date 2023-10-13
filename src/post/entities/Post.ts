import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("POST")
export class PostEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "POSTID" })
  postid: number;

  @Column("varchar", { name: "TITLE" })
  title: string;

  @Column("varchar", { name: "BODY" })
  body: string;

  @Column("int", { name: "USERID" })
  userid: number;
}
