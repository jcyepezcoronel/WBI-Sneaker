import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Product } from '../../api/product/entities/product.entity';

export default class CreateProduct implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values([
        {
          product: 'Gel-Contend 7',
          price: 15,
          brand: 'ASICS',
          img_url:
            'https://m.media-amazon.com/images/I/61laO+i8hTL._AC_UL320_.jpg',
          store: 1,
        },
        {
          product: 'Gel-Venture 7',
          price: 15,
          brand: 'ASICS',
          img_url:
            'https://m.media-amazon.com/images/I/61IBhEWVAvL._AC_UL320_.jpg',
          store: 1,
        },
        {
          product: '410 V7',
          price: 25,
          brand: 'New Balance',
          img_url:
            'https://m.media-amazon.com/images/I/51RToQjA0rL._AC_UL320_.jpg',
          store: 2,
        },
        {
          product: 'Foam Roav V1',
          price: 55,
          brand: 'New Balance',
          img_url:
            'https://m.media-amazon.com/images/I/51RToQjA0rL._AC_UL320_.jpg',
          store: 2,
        },
        {
          product: 'Arishi Fresh Foam v2',
          price: 55,
          brand: 'New Balance',
          img_url:
            'https://m.media-amazon.com/images/I/71nMkiSrHfS._AC_UL320_.jpg',
          store: 2,
        },
        {
          product: 'Arishi Fresh Foam v2',
          price: 55,
          brand: 'New Balance',
          img_url:
            'https://m.media-amazon.com/images/I/71nMkiSrHfS._AC_UL320_.jpg',
          store: 2,
        },
        {
          product: 'Arishi Fresh Foam v2',
          price: 55,
          brand: 'New Balance',
          img_url:
            'https://m.media-amazon.com/images/I/71nMkiSrHfS._AC_UL320_.jpg',
          store: 2,
        },
        {
          product: 'Runfalcon 2.0',
          price: 55,
          brand: 'Adidas',
          img_url:
            'https://m.media-amazon.com/images/I/81yOtHoB2BL._AC_UL320_.jpg',
          store: 3,
        },
        {
          product: 'Grand Court',
          price: 55,
          brand: 'Adidas',
          img_url:
            'https://m.media-amazon.com/images/I/71qdoDlEOpL._AC_UL320_.jpg',
          store: 3,
        },
        {
          product: 'Racer TR21',
          price: 55,
          brand: 'Adidas',
          img_url:
            'https://m.media-amazon.com/images/I/51ahEQQ8a8L._AC_UL320_.jpg',
          store: 3,
        },
        {
          product: '4D Run 1.0',
          price: 55,
          brand: 'Adidas',
          img_url:
            'https://m.media-amazon.com/images/I/510gldTG8KL._AC_UL320_.jpg',
          store: 3,
        },
        {
          product: 'Ultraboost 21',
          price: 55,
          brand: 'Adidas',
          img_url:
            'https://m.media-amazon.com/images/I/41rnqdXs8GL._AC_UL320_.jpg',
          store: 3,
        },
        {
          product: 'Lite Racer Adapt 4.0',
          price: 55,
          brand: 'Adidas',
          img_url:
            'https://m.media-amazon.com/images/I/81l5J1Rf11S._AC_UL320_.jpg',
          store: 3,
        },
        {
          product: 'Fortarun',
          price: 55,
          brand: 'Adidas',
          img_url:
            'https://m.media-amazon.com/images/I/612yo6Gy8EL._AC_UL320_.jpg',
          store: 3,
        },
        {
          product: 'Air Zoom Pegasus 36',
          price: 105,
          brand: 'Nike',
          img_url:
            'https://m.media-amazon.com/images/I/61nAuWkqZjL._AC_UL320_.jpg',
          store: 4,
        },
        {
          product: '0 Big Kid',
          price: 105,
          brand: 'Nike',
          img_url:
            'https://m.media-amazon.com/images/I/61-STtijLAS._AC_UL320_.jpg',
          store: 4,
        },
        {
          product: 'Tanjun',
          price: 105,
          brand: 'Nike',
          img_url:
            'https://m.media-amazon.com/images/I/61FX0rRlbiL._AC_UL320_.jpg',
          store: 4,
        },
        {
          product: 'RACE',
          price: 105,
          brand: 'Nike',
          img_url:
            'https://m.media-amazon.com/images/I/51OKk9pvEHL._AC_UL320_.jpg',
          store: 4,
        },
        {
          product: 'AF1 WOMAN',
          price: 105,
          brand: 'Nike',
          img_url:
            'https://m.media-amazon.com/images/I/712qdoxFfQL._AC_UL320_.jpg',
          store: 4,
        },
        {
          product: 'Crater Impact',
          price: 105,
          brand: 'Nike',
          img_url:
            'https://m.media-amazon.com/images/I/71JqeSO4FOS._AC_UL320_.jpg',
          store: 4,
        },
        {
          product: 'Air Max Genome',
          price: 105,
          brand: 'Nike',
          img_url:
            'https://m.media-amazon.com/images/I/618-2yTkh0S._AC_UL320_.jpg',
          store: 4,
        },
        {
          product: 'Nanoflex Cross',
          price: 105,
          brand: 'Reebok',
          img_url:
            'https://m.media-amazon.com/images/I/71ATqx0bnkL._AC_UL320_.jpg',
          store: 5,
        },
        {
          product: 'Classic Legacy',
          price: 105,
          brand: 'Reebok',
          img_url:
            'https://m.media-amazon.com/images/I/61-zP2cXFBL._AC_UL320_.jpg',
          store: 5,
        },
        {
          product: 'Nano X2 Cross',
          price: 105,
          brand: 'Reebok',
          img_url:
            'https://m.media-amazon.com/images/I/613aG8YBCJL._AC_UL320_.jpg',
          store: 5,
        },
      ])
      .orIgnore()
      .execute();
  }
}
