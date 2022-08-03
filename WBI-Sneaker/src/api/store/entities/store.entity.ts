import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from '../../product/entities/product.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 60,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 60,
  })
  link: string;

  @Column({
    type: 'varchar',
  })
  img_url: string;

  @OneToMany(() => Product, (product) => product.store, {
    cascade: true,
  })
  products: Product[];

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
