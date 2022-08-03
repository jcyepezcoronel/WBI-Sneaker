import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Store } from '../../api/store/entities/store.entity';

export default class CreateStores implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Store)
      .values([
        {
          name: 'ASICS',
          link: 'https://www.asics.com/us/en-us/',
          img_url:
            'https://cdn.iconscout.com/icon/free/png-256/asics-tiger-3421385-2853770.png',
        },
        {
          name: 'New Balance',
          link: 'https://www.newbalance.com/',
          img_url:
            'https://distritobynewbalance.es/wp-content/uploads/2022/01/newbalance.png',
        },
        {
          name: 'ADIDAS',
          link: 'https://www.adidas.com/us/men-shoes',
          img_url:
            'https://4.bp.blogspot.com/-Jk3nDhCVqME/YUV7sDYkMDI/AAAAAAAASNc/l4WpklaTRQ8CE3ItC6iwPks-2MxD4BksACLcBGAsYHQ/s256/logo%2Badidas%2B2021.png',
        },
        {
          name: 'Nike',
          link: 'https://www.nike.com/w/mens-shoes-nik1zy7ok',
          img_url:
            'https://zshopp.com/wp-content/uploads/2021/07/nike_text_logo_256.png',
        },
        {
          name: 'Reebok',
          link: 'https://www.asics.com/us/en-us/',
          img_url: 'https://logospng.org/download/reebok/logo-reebok-256.png',
        },
      ])
      .orIgnore()
      .execute();
  }
}
