import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Fako } from "./Fako";

@Entity("type", { schema: "FAKOY" })
export class Type {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 15 })
  nom: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(() => Fako, (fako) => fako.idType2)
  fakos: Fako[];
}
