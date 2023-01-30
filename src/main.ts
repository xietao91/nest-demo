import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';

function MiddlewareAll(req: any, res: any, next: any) {
  console.log('我是全局中间件');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('xietao');
  app.use(cors());
  app.use(MiddlewareAll);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
