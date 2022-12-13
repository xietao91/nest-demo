import { Injectable } from '@nestjs/common';

@Injectable()
export class GirlService {
  getGirlList(): any {
    return {
      code: 200,
      data: ['丽丽', '翠红'],
      msg: '获取女孩列表成功',
    };
  }

  addGirl(data: any): any {
    return {
      code: 200,
      data,
      msg: '女孩添加成功',
    };
  }

  getGirlById(id: number): any {
    let res: any = null;
    switch (id) {
      case 1:
        res = {
          id: 1,
          name: '张华',
          age: 20,
        };
        break;
      case 2:
        res = {
          id: 2,
          name: '李华',
          age: 20,
        };
        break;
      default:
        res = {};
    }
    return res;
  }
}
