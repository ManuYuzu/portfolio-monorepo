import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const mockUser = {
  id: 1,
  email: 'mock@example.com',
  name: 'Mock',
  password: '123456',
  role: 'READER',
  createdAt: new Date(),
};

const mockUsersService = {
  create: jest.fn().mockResolvedValue(mockUser),
  findAll: jest.fn().mockResolvedValue([mockUser]),
  findOne: jest.fn().mockResolvedValue(mockUser),
  update: jest.fn().mockResolvedValue({ ...mockUser, name: 'Updated' }),
  remove: jest.fn().mockResolvedValue(mockUser),
};

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const result = await controller.create({
      email: 'mock@example.com',
      name: 'Mock',
      password: '123456',
      role: 'READER',
    });
    expect(result).toEqual(mockUser);
    expect(mockUsersService.create).toHaveBeenCalled();
  });

  it('should return all users', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([mockUser]);
    expect(mockUsersService.findAll).toHaveBeenCalled();
  });

  it('should return one user', async () => {
    const result = await controller.findOne('1');
    expect(result).toEqual(mockUser);
    expect(mockUsersService.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a user', async () => {
    const result = await controller.update('1', { name: 'Updated' });
    expect(result.name).toBe('Updated');
    expect(mockUsersService.update).toHaveBeenCalledWith(1, {
      name: 'Updated',
    });
  });

  it('should remove a user', async () => {
    const result = await controller.remove('1');
    expect(result).toEqual(mockUser);
    expect(mockUsersService.remove).toHaveBeenCalledWith(1);
  });
});
