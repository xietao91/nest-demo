import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
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

  @Delete('delete')
  delete(@Query() { id }): any {
    return this.girlService.delGirl(id);
  }

  @Put('update')
  update(@Query() { id }, @Body() body): any {
    return this.girlService.updateGirl(id, body);
  }

  @Get('all')
  getAllGirls(): any {
    return this.girlService.getAllGirls();
  }

  @Get('getGirlById')
  getGirlById(@Query() query): any {
    const { id } = query;
    return this.girlService.getGirlById(parseInt(id));
  }

  @Get('getGirlByName/:name')
  getGirlByName(@Param() { name }: any) {
    return this.girlService.getGirlByName(name);
  }

  @Get('findGirlById/:id')
  findGirlById(@Param() params, @Headers() header): any {
    const { id } = params;
    return this.girlService.getGirlById(parseInt(id));
  }
}
