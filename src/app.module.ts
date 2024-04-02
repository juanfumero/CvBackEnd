import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/users.module';
import { EmailModule } from './email/email.module';


export function stringToBoolean(str) {
  str = str.trim().toLowerCase();  
  return str === 'true' || str === '1';
}

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  }), TasksModule, UserModule, EmailModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: stringToBoolean(process.env.POSTGRES_SSL),
    autoLoadEntities: true,
    synchronize: !!process.env.DB_SYNC
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
