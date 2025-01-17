import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/users.service';
import { UserRepository } from './repository/user.repository';
import { User } from './entity/user.entity';
import { UserController } from './controller/users.controller';
import { UserMapper } from './mapper/user.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserMapper, UserRepository]
})
export class UserModule {}
