import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GirlModule } from './girl/girl.module';
import { BoyModule } from './boy/boy.module';

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
  imports: [
    GirlModule,
    typeOrmModule,
    BoyModule,
    ConfigModule.forRoot('洗浴王'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
