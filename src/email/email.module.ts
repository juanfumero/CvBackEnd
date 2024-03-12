import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
          user: 'cvprojectbarcelona@gmail.com', // Coloca tu usuario de correo aquí
          pass: 'taptmoofkossirxy',    //pass: 'tapt moof koss irxy', // Coloca tu contraseña de correo aquí
        }
      }
    }),
    // MailerModule.forRootAsync({
    //   useFactory: () => ({
    //     transport: {
    //       host: 'smtp.gmail.com',
    //       port: 465,
    //       secure: true,
    //       auth: {
    //         user: 'cvprojectbarcelona@gmail.com', // Coloca tu usuario de correo aquí
    //         pass: 'taptmoofkossirxy',    //pass: 'tapt moof koss irxy', // Coloca tu contraseña de correo aquí
    //       },
    //     }
    //   }),
    // }),
  ],
  controllers: [EmailController],
  providers: [EmailService]
})
export class EmailModule {}
