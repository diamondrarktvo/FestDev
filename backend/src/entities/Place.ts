import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fako } from "./Fako";
import { Fokotany } from "./Fokotany";

@Index("Place_Fokotany_FK", ["idFokotany"], {})
@Entity("place", { schema: "FAKOY" })
export class Place {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 30 })
  nom: string;

  @Column("varchar", { name: "cord_x", length: 30 })
  cordX: string;

  @Column("varchar", { name: "cord_y", length: 30 })
  cordY: string;

  @Column("int", { name: "id_Fokotany" })
  idFokotany: number;

  @OneToMany(() => Fako, (fako) => fako.idPlace2)
  fakos: Fako[];

  @ManyToOne(() => Fokotany, (fokotany) => fokotany.places, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "id_Fokotany", referencedColumnName: "id" }])
  idFokotany2: Fokotany;
}
