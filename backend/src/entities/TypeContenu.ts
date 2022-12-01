import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contenu } from "./Contenu";

@Entity("type_contenu", { schema: "FAKOY" })
export class TypeContenu {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", nullable: true, length: 255 })
  nom: string | null;

  @OneToMany(() => Contenu, (contenu) => contenu.type)
  contenus: Contenu[];
}
