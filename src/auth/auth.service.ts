import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDocument } from './entities/auth.entity';
import { ResponseBody } from 'src/common/helpers/responseBody';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private readonly authModel: Model<AuthDocument>
  ) { }
  async create(createAuthDto: CreateAuthDto) {
    try {
      // whatever insert into database
      const registerUser = await this.authModel.create(createAuthDto);
      return new ResponseBody(200, 'User registered successfully', true, registerUser);

    } catch (error) {
      console.log(error);
      throw error
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
