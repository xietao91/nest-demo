import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
export class GirlService {
  constructor(
    @InjectRepository(Girl) private readonly girl: Repository<Girl>,
  ) {}
  getGirlList(): any {
    return {
      code: 200,
      data: ['丽丽', '翠红'],
      msg: '获取女孩列表成功',
    };
  }

  addGirl({ name, age, skill }: any): any {
    const girl = new Girl();
    girl.name = name;
    girl.age = age;
    girl.skill = skill;
    return this.girl.save(girl);
  }

  delGirl(id: string) {
    return this.girl.delete(id);
  }

  updateGirl(id: string, { name, age, skill }: any) {
    const girl = new Girl();
    girl.name = name;
    girl.age = age;
    girl.skill = skill;
    return this.girl.update(id, girl);
  }

  getAllGirls() {
    return this.girl.find();
  }

  getGirlByName(name: string) {
    return this.girl.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
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
