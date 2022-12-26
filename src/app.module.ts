import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GirlModule } from './girl/girl.module';

const typeOrmModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'xtxs1991',
  database: 'nest-demo',
  retryDelay: 500,
  retryAttempts: 10,
  synchronize: true,
  autoLoadEntities: true,
});

@Module({
  imports: [GirlModule, typeOrmModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
