import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Request,
  Headers,
  Param,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {}
  @Get()
  getGirlList(): any {
    return this.girlService.getGirlList();
  }

  @Post('add')
  add(@Body() body): any {
    return this.girlService.addGirl(body);
  }

  @Get('getGirlById')
  getGirlById(@Query() query): any {
    const { id } = query;
    return this.girlService.getGirlById(parseInt(id));
  }

  @Get('findGirlById/:id')
  findGirlById(@Param() params, @Headers() header): any {
    console.log(header);
    const { id } = params;
    return this.girlService.getGirlById(parseInt(id));
  }
}
