import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Admin } from "./Admin";
import { TypeContenu } from "./TypeContenu";

@Index("fk_admin_id_contenu", ["adminId"], {})
@Index("fk_type_id_contenu", ["typeId"], {})
@Entity("contenu", { schema: "FAKOY" })
export class Contenu {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "photo_1", length: 255 })
  photo_1: string;

  @Column("varchar", { name: "photo_2", nullable: true, length: 255 })
  photo_2: string | null;

  @Column("text", { name: "description" })
  description: string;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "admin_id" })
  adminId: number;

  @Column("int", { name: "type_id" })
  typeId: number;

  @ManyToOne(() => Admin, (admin) => admin.contenus, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "admin_id", referencedColumnName: "id" }])
  admin: Admin;

  @ManyToOne(() => TypeContenu, (typeContenu) => typeContenu.contenus, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: TypeContenu;
}
