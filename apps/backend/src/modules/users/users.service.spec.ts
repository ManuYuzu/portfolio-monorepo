import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

let service: UsersService;
// let dbAvailable = true;

// async function canConnectPrisma(service: UsersService) {
//   try {
//     await service['prisma'].user.findMany({ take: 1 });
//     return true;
//   } catch {
//     return false;
//   }
// }

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [UsersService],
  }).compile();
  service = module.get<UsersService>(UsersService);
  // dbAvailable = await canConnectPrisma(service);
});

beforeEach(async () => {
  // if (!dbAvailable) return;
  try {
    await service['prisma'].user.deleteMany();
  } catch {}
});

describe('UsersService', () => {
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // if (dbAvailable) {
  //   it('should create a user', async () => {
  //     const user = await service.create({
  //       email: 'test@example.com',
  //       name: 'Test',
  //       password: '123456',
  //       role: 'READER',
  //     });
  //     expect(user).toHaveProperty('id');
  //     expect(user.email).toBe('test@example.com');
  //   });

  //   it('should find all users', async () => {
  //     const users = await service.findAll();
  //     expect(Array.isArray(users)).toBe(true);
  //   });

  //   it('should find one user', async () => {
  //     const created = await service.create({
  //       email: 'findone@example.com',
  //       name: 'FindOne',
  //       password: '123456',
  //       role: 'READER',
  //     });
  //     const user = await service.findOne(created.id);
  //     expect(user).not.toBeNull();
  //     expect(user?.email).toBe('findone@example.com');
  //   });

  //   it('should update a user', async () => {
  //     const created = await service.create({
  //       email: 'update@example.com',
  //       name: 'Update',
  //       password: '123456',
  //       role: 'READER',
  //     });
  //     const updated = await service.update(created.id, { name: 'UpdatedName' });
  //     expect(updated.name).toBe('UpdatedName');
  //   });

  //   it('should remove a user', async () => {
  //     const created = await service.create({
  //       email: 'remove@example.com',
  //       name: 'Remove',
  //       password: '123456',
  //       role: 'READER',
  //     });
  //     const removed = await service.remove(created.id);
  //     expect(removed.id).toBe(created.id);
  //     const user = await service.findOne(created.id);
  //     expect(user).toBeNull();
  //   });
  // } else {
  //   it.skip('should create a user', () => {});
  //   it.skip('should find all users', () => {});
  //   it.skip('should find one user', () => {});
  //   it.skip('should update a user', () => {});
  //   it.skip('should remove a user', () => {});
  // }
});
