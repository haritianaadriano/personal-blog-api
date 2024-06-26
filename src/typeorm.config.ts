import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Dummy } from './model/dummy.entity';
import { CreateDummy1712500758914 } from './migrations/1712500758914-CreateDummy';
import { User } from './model/user.entity';
import { CreateUser1713183354964 } from './migrations/1713183354964-CreateUser';
import { Project } from './model/project.entity';
import { CreateProject1713358961833 } from './migrations/1713358961833-CreateProject';
import { Donation } from './model/donation.entity';
import { CreateDonation1713359250906 } from './migrations/1713359250906-CreateDonation';
import { Category } from './model/category.entity';
import { CreateCategory1715155975869 } from './migrations/1715155975869-CreateCategory';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DATABASE'),
  entities: [Dummy, User, Project, Donation, Category],
  // Order by creation time
  migrations: [
    CreateDummy1712500758914,
    CreateUser1713183354964,
    CreateProject1713358961833,
    CreateDonation1713359250906,
    CreateCategory1715155975869,
  ],
  migrationsRun: true,
  synchronize: false,
});
