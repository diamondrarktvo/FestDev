import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Place } from "./Place";
import { Type } from "./Type";
import { Utilisateur } from "./Utilisateur";

@Index("Fako_Utilisateur_FK", ["idUtilisateur"], {})
@Index("Fako_Type0_FK", ["idType"], {})
@Index("Fako_Place1_FK", ["idPlace"], {})
@Entity("fako", { schema: "FAKOY" })
export class Fako {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("double", { name: "poids", precision: 22 })
  poids: number;

  @Column("tinyint", { name: "status", width: 1 })
  status: boolean;

  @Column("datetime", {
    name: "date_create",
    default: () => "CURRENT_TIMESTAMP",
  })
  dateCreate: Date;

  @Column("int", { name: "id_Utilisateur" })
  idUtilisateur: number;

  @Column("int", { name: "id_Type" })
  idType: number;

  @Column("int", { name: "id_Place" })
  idPlace: number;

  @ManyToOne(() => Place, (place) => place.fakos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_Place", referencedColumnName: "id" }])
  idPlace2: Place;

  @ManyToOne(() => Type, (type) => type.fakos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_Type", referencedColumnName: "id" }])
  idType2: Type;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.fakos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_Utilisateur", referencedColumnName: "id" }])
  idUtilisateur2: Utilisateur;
}
