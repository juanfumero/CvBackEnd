import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { handleRetry } from '@nestjs/typeorm';

@Module({
  exports: [EmailService],
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          port: 465,
          secure: true,
          auth: {
            user: config.get('MAIL_USER'),
            pass:  config.get('MAIL_PASSWORD'),   
          },
        },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: null,
          adapter: null,
          options: {
              strict: true,
          },
        },
      }),
     inject: [ConfigService]
    })
  ],
  controllers: [EmailController],
  providers: [EmailService]
})
export class EmailModule {}
