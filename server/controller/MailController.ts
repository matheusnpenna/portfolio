import { createError, readBody } from 'h3'
import type { H3Event, H3Error } from 'h3'
import type { TMailerConfig } from '../types'
import getContactTemplate from '../templates/mail'
import NodeMailer from 'nodemailer'

const MailController = {
  async send(
    event: H3Event,
    config: TMailerConfig
  ): Promise<{ status: 'success' | 'error', message: string, metadata?: string } | H3Error<unknown>> {
    const transporter = NodeMailer.createTransport({
      host: config.MAIL_SMTP,
      port: 587,
      secure: config.MAIL_SECURE === 'true',
      auth: {
        user: config.MAIL_USER,
        pass: config.MAIL_PASS
      }
    })

    const body = await readBody(event)

    if (!body) return createError({ statusCode: 400, message: 'Nenhum parâmetro foi enviado' })

    if (!body.from) return createError({ statusCode: 400, message: 'O parâmetro "from" não pode ser vazio' })
    if (!body?.to) return createError({ statusCode: 400, message: 'O parâmetro "to" não pode ser vazio' })
    if (!body?.subject) return createError({ statusCode: 400, message: 'O parâmetro "subject" não pode ser vazio' })
    if (!body?.text && !body?.data) return createError({ statusCode: 400, message: 'O parâmetro "text" e o parâmetro "data" não podem estar vazios' })

    const isSMTPConnected = await transporter.verify()

    if (!isSMTPConnected) {
      return createError({ statusCode: 400, message: 'Não é possível se conectar ao SMTP' })
    }

    try {
      const resp = await transporter.sendMail({
        from: `"Novo contato vindo do site" <${body.from}>'`,
        to: body.to,
        subject: body.subject,
        html: getContactTemplate(body.data)
      })

      return { status: 'success', message: `E-mail enviado com sucesso!`, metadata: resp.response.toString() }
    } catch (err) {
      console.error('[NODEMAILER] Error while sending mail', err)
      return createError({ statusCode: 500, message: 'Erro interno ao enviar o e-mail' })
    }
  }
}

export default MailController
