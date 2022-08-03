import { Store } from '../../store/entities/store.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  product: string;

  @Column()
  price: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  brand: string;

  @Column({
    type: 'varchar',
  })
  img_url: string;

  @ManyToOne(() => Store, (store) => store.products, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'store_id' })
  store: number;

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
