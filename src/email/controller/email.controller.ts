import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from '../service/email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post('enviar')
    async enviarCorreo(@Body() body: { destinatario: string; asunto: string; cuerpo: string }): Promise<string> {
      const { destinatario, asunto, cuerpo } = body;
      await this.emailService.enviarCorreo(destinatario, asunto, cuerpo);
      return 'Correo enviado correctamente';
    }
}
