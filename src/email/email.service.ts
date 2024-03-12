import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {

    constructor(private readonly mailerService: MailerService) {}

    async enviarCorreo(destinatario: string, asunto: string, cuerpo: string): Promise<void> {
      console.log('mis datos', destinatario, asunto, cuerpo);
      await this.mailerService.sendMail({
        from: 'cvprojectbarcelona@gmail.com',
        to: destinatario,
        subject: asunto,
        text: cuerpo,
      });
    }

    
}
