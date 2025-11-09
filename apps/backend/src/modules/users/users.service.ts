import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './type/user.type';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async create(data: CreateUserDto): Promise<UserType> {
    return this.prisma.user.create({
      data: { ...data, role: data.role ?? 'READER' },
    });
  }

  async findAll(): Promise<UserType[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<UserType | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateUserDto): Promise<UserType> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number): Promise<UserType> {
    return this.prisma.user.delete({ where: { id } });
  }
}
