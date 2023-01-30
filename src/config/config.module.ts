import { Module, Global, DynamicModule } from '@nestjs/common';
@Global()
@Module({
  providers: [
    {
      provide: 'Config',
      useValue: { shopName: '浪漫满屋' },
    },
  ],
  exports: [
    {
      provide: 'Config',
      useValue: { shopName: '浪漫满屋' },
    },
  ],
})
export class ConfigModule {
  static forRoot(option: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'Config',
          useValue: { shopName: '哈哈哈' + option },
        },
      ],
      exports: [
        {
          provide: 'Config',
          useValue: { shopName: '哈哈哈' + option },
        },
      ],
    };
  }
}
