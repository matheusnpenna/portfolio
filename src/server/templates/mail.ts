function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  }

  return text.replace(/[&<>"']/g, m => map[m])
}

export default function getContactTemplate(data: { name: string, email: string, subject: string, message: string } | string): string {
  const dateTime = new Date().toLocaleString('pt-BR', undefined)
  const year = new Date().getFullYear()

  if (typeof data === 'string') {
    return `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nova Mensagem de Contato - Matheus Penna</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
          <!-- Main Container -->
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0a;">
              <tr>
                  <td style="padding: 40px 20px;">
                      <!-- Email Card -->
                      <table role="presentation" style="max-width: 600px; margin: 0 auto; border-collapse: collapse; background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
                          
                          <!-- Header -->
                          <tr>
                              <td style="background: linear-gradient(135deg, #8257e5 0%, #04D361 100%); padding: 40px 30px; text-align: center;">
                                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                      <tr>
                                          <td style="text-align: center;">
                                              <div style="display: inline-block; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border-radius: 12px; margin-bottom: 16px;"></div>
                                              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);">
                                                  Nova Mensagem de Contato
                                              </h1>
                                              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                                                  Recebida através do seu portfólio
                                              </p>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
  
                          <!-- Content -->
                          <tr>
                              <td style="padding: 40px 30px;">
                                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                      
                                      <!-- Info Badge -->
                                      <tr>
                                          <td style="padding-bottom: 30px;">
                                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                  <tr>
                                                      <td style="background: rgba(130, 87, 229, 0.1); border: 1px solid rgba(130, 87, 229, 0.3); border-radius: 8px; padding: 12px 16px;">
                                                          <p style="margin: 0; font-size: 13px; color: #8257e5;">
                                                              <strong>📬 Data/Hora:</strong> ${dateTime}
                                                          </p>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                      ${data}
                                      <!-- Divider -->
                                      <tr>
                                          <td style="padding: 20px 0;">
                                              <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);"></div>
                                          </td>
                                      </tr>
  
                                      <!-- Footer Info -->
                                      <tr>
                                          <td>
                                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                  <tr>
                                                      <td style="background: rgba(130, 87, 229, 0.05); border-left: 3px solid #8257e5; border-radius: 4px; padding: 16px 20px;">
                                                          <p style="margin: 0 0 8px 0; font-size: 13px; color: #999999;">
                                                              <strong style="color: #8257e5;">ℹ️ Importante:</strong>
                                                          </p>
                                                          <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #cccccc;">
                                                              Esta mensagem foi enviada através do formulário de contato do seu portfólio em <strong>matheuspenna.com</strong>. Responda o mais breve possível para manter um bom relacionamento com seus clientes.
                                                          </p>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
  
                                  </table>
                              </td>
                          </tr>
  
                          <!-- Footer -->
                          <tr>
                              <td style="background: rgba(0, 0, 0, 0.3); padding: 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                      <tr>
                                          <td style="padding-bottom: 16px;">
                                              <div style="display: inline-block; width: 40px; height: 40px; background: linear-gradient(135deg, #8257e5, #04D361); border-radius: 8px;"></div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding-bottom: 16px;">
                                              <p style="margin: 0; font-size: 16px; font-weight: 700; color: #ffffff;">
                                                  Matheus Penna
                                              </p>
                                              <p style="margin: 4px 0 0 0; font-size: 13px; color: #999999;">
                                                  Desenvolvedor Full Stack
                                              </p>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding-bottom: 16px;">
                                              <!-- Social Links -->
                                              <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                                                  <tr>
                                                      <td style="padding: 0 8px;">
                                                          <a href="https://github.com" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; text-align: center; line-height: 36px; text-decoration: none; color: #ffffff; font-size: 14px;">
                                                              GH
                                                          </a>
                                                      </td>
                                                      <td style="padding: 0 8px;">
                                                          <a href="https://linkedin.com" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; text-align: center; line-height: 36px; text-decoration: none; color: #ffffff; font-size: 14px;">
                                                              IN
                                                          </a>
                                                      </td>
                                                      <td style="padding: 0 8px;">
                                                          <a href="mailto:contato@matheuspenna.com" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; text-align: center; line-height: 36px; text-decoration: none; color: #ffffff; font-size: 14px;">
                                                              ✉
                                                          </a>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <p style="margin: 0; font-size: 11px; color: #666666; line-height: 1.6;">
                                                  © ${year} Matheus Penna. Todos os direitos reservados.<br>
                                              </p>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
  
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
    `
  } else {
    return `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nova Mensagem de Contato - Matheus Penna</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
          <!-- Main Container -->
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0a0a0a;">
              <tr>
                  <td style="padding: 40px 20px;">
                      <!-- Email Card -->
                      <table role="presentation" style="max-width: 600px; margin: 0 auto; border-collapse: collapse; background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
                          
                          <!-- Header -->
                          <tr>
                              <td style="background: linear-gradient(135deg, #8257e5 0%, #04D361 100%); padding: 40px 30px; text-align: center;">
                                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                      <tr>
                                          <td style="text-align: center;">
                                              <div style="display: inline-block; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border-radius: 12px; margin-bottom: 16px;"></div>
                                              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);">
                                                  Nova Mensagem de Contato
                                              </h1>
                                              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                                                  Recebida através do seu portfólio
                                              </p>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
  
                          <!-- Content -->
                          <tr>
                              <td style="padding: 40px 30px;">
                                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                      
                                      <!-- Info Badge -->
                                      <tr>
                                          <td style="padding-bottom: 30px;">
                                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                  <tr>
                                                      <td style="background: rgba(130, 87, 229, 0.1); border: 1px solid rgba(130, 87, 229, 0.3); border-radius: 8px; padding: 12px 16px;">
                                                          <p style="margin: 0; font-size: 13px; color: #8257e5;">
                                                              <strong>📬 Data/Hora:</strong> ${dateTime}
                                                          </p>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
  
                                      <!-- Sender Information -->
                                      <tr>
                                          <td style="padding-bottom: 30px;">
                                              <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 700; color: #ffffff; border-bottom: 2px solid rgba(130, 87, 229, 0.3); padding-bottom: 12px;">
                                                  👤 Informações do Remetente
                                              </h2>
                                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                  <tr>
                                                      <td style="background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.1);">
                                                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                              <!-- Name -->
                                                              <tr>
                                                                  <td style="padding-bottom: 16px;">
                                                                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                                          <tr>
                                                                              <td style="width: 100px; vertical-align: top;">
                                                                                  <p style="margin: 0; font-size: 13px; color: #999999; font-weight: 600;">Nome:</p>
                                                                              </td>
                                                                              <td style="vertical-align: top;">
                                                                                  <p style="margin: 0; font-size: 14px; color: #ffffff; font-weight: 500;">${escapeHtml(data.name)}</p>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                              <!-- Email -->
                                                              <tr>
                                                                  <td style="padding-bottom: 16px;">
                                                                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                                          <tr>
                                                                              <td style="width: 100px; vertical-align: top;">
                                                                                  <p style="margin: 0; font-size: 13px; color: #999999; font-weight: 600;">Email:</p>
                                                                              </td>
                                                                              <td style="vertical-align: top;">
                                                                                  <a href="mailto:${escapeHtml(data.email)}" style="margin: 0; font-size: 14px; color: #04D361; font-weight: 500; text-decoration: none;">${escapeHtml(data.email)}</a>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                              <!-- Subject -->
                                                              <tr>
                                                                  <td>
                                                                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                                          <tr>
                                                                              <td style="width: 100px; vertical-align: top;">
                                                                                  <p style="margin: 0; font-size: 13px; color: #999999; font-weight: 600;">Assunto:</p>
                                                                              </td>
                                                                              <td style="vertical-align: top;">
                                                                                  <p style="margin: 0; font-size: 14px; color: #ffffff; font-weight: 500;">${escapeHtml(data.subject)}</p>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
  
                                      <!-- Message Content -->
                                      <tr>
                                          <td style="padding-bottom: 30px;">
                                              <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 700; color: #ffffff; border-bottom: 2px solid rgba(4, 211, 97, 0.3); padding-bottom: 12px;">
                                                  💬 Mensagem
                                              </h2>
                                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                  <tr>
                                                      <td style="background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 24px; border: 1px solid rgba(255, 255, 255, 0.1);">
                                                          <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #e0e0e0; white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(data.message)}</p>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
  
                                      <!-- Divider -->
                                      <tr>
                                          <td style="padding: 20px 0;">
                                              <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);"></div>
                                          </td>
                                      </tr>
  
                                      <!-- Footer Info -->
                                      <tr>
                                          <td>
                                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                                  <tr>
                                                      <td style="background: rgba(130, 87, 229, 0.05); border-left: 3px solid #8257e5; border-radius: 4px; padding: 16px 20px;">
                                                          <p style="margin: 0 0 8px 0; font-size: 13px; color: #999999;">
                                                              <strong style="color: #8257e5;">ℹ️ Importante:</strong>
                                                          </p>
                                                          <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #cccccc;">
                                                              Esta mensagem foi enviada através do formulário de contato do seu portfólio em <strong>matheuspenna.com</strong>. Responda o mais breve possível para manter um bom relacionamento com seus clientes.
                                                          </p>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
  
                                  </table>
                              </td>
                          </tr>
  
                          <!-- Footer -->
                          <tr>
                              <td style="background: rgba(0, 0, 0, 0.3); padding: 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                      <tr>
                                          <td style="padding-bottom: 16px;">
                                              <div style="display: inline-block; width: 40px; height: 40px; background: linear-gradient(135deg, #8257e5, #04D361); border-radius: 8px;"></div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding-bottom: 16px;">
                                              <p style="margin: 0; font-size: 16px; font-weight: 700; color: #ffffff;">
                                                  Matheus Penna
                                              </p>
                                              <p style="margin: 4px 0 0 0; font-size: 13px; color: #999999;">
                                                  Desenvolvedor Full Stack
                                              </p>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding-bottom: 16px;">
                                              <!-- Social Links -->
                                              <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                                                  <tr>
                                                      <td style="padding: 0 8px;">
                                                          <a href="https://github.com" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; text-align: center; line-height: 36px; text-decoration: none; color: #ffffff; font-size: 14px;">
                                                              GH
                                                          </a>
                                                      </td>
                                                      <td style="padding: 0 8px;">
                                                          <a href="https://linkedin.com" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; text-align: center; line-height: 36px; text-decoration: none; color: #ffffff; font-size: 14px;">
                                                              IN
                                                          </a>
                                                      </td>
                                                      <td style="padding: 0 8px;">
                                                          <a href="mailto:contato@matheuspenna.com" style="display: inline-block; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; text-align: center; line-height: 36px; text-decoration: none; color: #ffffff; font-size: 14px;">
                                                              ✉
                                                          </a>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <p style="margin: 0; font-size: 11px; color: #666666; line-height: 1.6;">
                                                  © ${year} Matheus Penna. Todos os direitos reservados.<br>
                                              </p>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
  
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
    `
  }
}
