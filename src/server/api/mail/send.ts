import MailController from '~/server/controller/MailController'
import type { TMailerConfig } from '~/server/types'

export default defineEventHandler(async (event) => {
  assertMethod(event, 'POST')
  const config = useRuntimeConfig()
  return await MailController.send(event, config as TMailerConfig)
})
