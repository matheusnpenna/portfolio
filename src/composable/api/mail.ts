export default function useMailAPI() {
  function sendMail(data: { from: string, to: string, subject: string, text?: string, html?: string }) {
    return fetch('/api/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return {
    sendMail
  }
}
