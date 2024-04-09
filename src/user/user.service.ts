import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const data = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      };

      const createdUser = await this.prisma.user.create({
        data,
      });

      return {
        ...createdUser,
        password: undefined,
      };
    } catch (error) {
      throw new Error(`Error creating the user: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany({
        orderBy: {
          id: 'desc',
        },
      });
    } catch (error) {
      throw new Error(`Error finding all users: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      throw new Error(`Error finding the user by ID: ${error.message}`);
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });
      return user;
    } catch (error) {
      throw new Error(`Error finding the user by Email: ${error.message}`);
    }
  }

  async findByName(name: string) {
    try {
      const user = await this.prisma.user.findMany({
        where: {
          name: {
            contains: name,
          },
        },
      });
      return user;
    } catch (error) {
      throw new Error(`Error finding the user by Name: ${error.message}`);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
