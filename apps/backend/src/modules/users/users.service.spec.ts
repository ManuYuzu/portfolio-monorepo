import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    await service['prisma'].user.deleteMany();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const user = await service.create({
      email: 'test@example.com',
      name: 'Test',
      password: '123456',
      role: 'READER',
    });
    expect(user).toHaveProperty('id');
    expect(user.email).toBe('test@example.com');
  });

  it('should find all users', async () => {
    const users = await service.findAll();
    expect(Array.isArray(users)).toBe(true);
  });

  it('should find one user', async () => {
    const created = await service.create({
      email: 'findone@example.com',
      name: 'FindOne',
      password: '123456',
      role: 'READER',
    });
    const user = await service.findOne(created.id);
    expect(user).not.toBeNull();
    expect(user?.email).toBe('findone@example.com');
  });

  it('should update a user', async () => {
    const created = await service.create({
      email: 'update@example.com',
      name: 'Update',
      password: '123456',
      role: 'READER',
    });
    const updated = await service.update(created.id, { name: 'UpdatedName' });
    expect(updated.name).toBe('UpdatedName');
  });

  it('should remove a user', async () => {
    const created = await service.create({
      email: 'remove@example.com',
      name: 'Remove',
      password: '123456',
      role: 'READER',
    });
    const removed = await service.remove(created.id);
    expect(removed.id).toBe(created.id);
    const user = await service.findOne(created.id);
    expect(user).toBeNull();
  });
});
