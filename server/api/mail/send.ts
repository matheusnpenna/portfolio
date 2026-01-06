import MailController from '~~/server/controller/MailController'
import type { TMailerConfig } from '~~/server/types'
import { defineRouteMeta } from 'nitropack/runtime'
import { assertMethod, defineEventHandler } from 'h3'

defineRouteMeta({
  openAPI: {
    summary: 'Enviar E-mail',
    description: 'Envia um e-mail utilizando o serviço SMTP configurado.',
    tags: ['Auth'],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              from: 'johndoe@gmail.com',
              to: 'password@10',
              subject: 'password@10',
              text: 'password@10',
              data: 'password@10'
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Login realizado com sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: { type: 'string', example: 'success' },
                message: { type: 'string', example: 'E-mail enviado com sucesso!' }
              }
            }
          }
        }
      },
      401: { description: 'Credenciais inválidas' }
    }
  }
})

export default defineEventHandler(async (event) => {
  assertMethod(event, 'POST')
  const config = useRuntimeConfig()
  return await MailController.send(event, config as TMailerConfig)
})
