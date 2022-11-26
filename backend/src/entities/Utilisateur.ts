import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Fako } from "./Fako";

@Entity("utilisateur", { schema: "FAKOY" })
export class Utilisateur {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 50 })
  nom: string;

  @Column("varchar", { name: "prenom", length: 50 })
  prenom: string;

  @Column("varchar", { name: "quartier", length: 50 })
  quartier: string;

  @Column("varchar", { name: "cin", nullable: true, length: 50 })
  cin: string | null;

  @Column("varchar", { name: "username", length: 50 })
  username: string;

  @Column("text", { name: "mdp" })
  mdp: string;

  @Column("varchar", { name: "phone", nullable: true, length: 15 })
  phone: string | null;

  @Column("varchar", { name: "path_photo", nullable: true, length: 255 })
  pathPhoto: string | null;

  @Column("varchar", { name: "facial", nullable: true, length: 15 })
  facial: string | null;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "update_at", nullable: true })
  updateAt: Date | null;

  @OneToMany(() => Fako, (fako) => fako.idUtilisateur2)
  fakos: Fako[];
}
