import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brand } from "./Brand";
import { Photo } from "./Photo";
import { Category } from "./Category";
import { User } from "./User";
import { Rent } from "./Rent";

export type Gender = "masculino" | "feminino" | "unissex";
export type Material = "aluminio" | "carbono" | "ferro";
export type Speedkit = 1 | 2 | 3 | 4 | 5 | 6;

@Entity({ name: "bikes" })
export class Bike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 30 })
  name: string;

  @Column({ nullable: false, length: 30 })
  color: string;

  @Column({ nullable: false })
  size: number;

  @Column({
    nullable: false,
    type: "enum",
    enum: ["aluminio", "carbono", "ferro"],
  })
  material: Material;

  @Column({
    nullable: false,
    type: "enum",
    enum: ["feminino", "masculino", "unissex"],
  })
  gender: Gender;

  @Column({ nullable: false, type: "enum", enum: [1, 2, 3, 4, 5, 6] })
  speedkit: Speedkit;

  @Column({ nullable: false, type: "float" })
  rim: number;

  @Column({ nullable: false })
  suspension: boolean;

  @Column({ nullable: false, length: 200 })
  description: string;

  @Column({ nullable: false, type: "decimal", precision: 10, scale: 2 })
  hourlyvalue: number;

  @Column({ nullable: false, type: "decimal", precision: 10, scale: 2 })
  dailyvalue: number;

  @Column({ nullable: false, type: "float" })
  latitude: number;

  @Column({ nullable: false, type: "float" })
  longitude: number;

  @ManyToOne(() => Brand, { nullable: false })
  @JoinColumn({ name: "idbrand" })
  brand: Brand;

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn({ name: "idcategory" })
  category: Category;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "iduser" })
  user: User;

  @OneToMany(() => Photo, (photo) => photo.bike)
  photos: Photo[];

  @OneToMany(() => Rent, (rent) => rent.bike)
  rents: Rent[];
}
