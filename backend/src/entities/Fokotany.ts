import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Place } from "./Place";

@Entity("fokotany", { schema: "FAKOY" })
export class Fokotany {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 50 })
  nom: string;

  @OneToMany(() => Place, (place) => place.idFokotany2)
  places: Place[];
}
