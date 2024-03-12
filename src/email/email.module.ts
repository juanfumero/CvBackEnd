import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'cvprojectbarcelona@gmail.com',
          pass: 'taptmoofkossirxy',   
        }
      }
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService]
})
export class EmailModule {}
