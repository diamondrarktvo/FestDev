import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin", { schema: "FAKOY" })
export class Admin {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 50 })
  nom: string;

  @Column("varchar", { name: "prenom", length: 50 })
  prenom: string;

  @Column("varchar", {
    name: "fonction",
    nullable: true,
    length: 255,
    default: () => "'admin'",
  })
  fonction: string | null;

  @Column("varchar", { name: "username", length: 50 })
  username: string;

  @Column("varchar", { name: "phone", nullable: true, length: 15 })
  phone: string | null;

  @Column("text", { name: "mdp" })
  mdp: string;

  @Column("varchar", { name: "path_photo", nullable: true, length: 255 })
  pathPhoto: string | null;
}
