import { Express } from 'express'

const PORT = process.env.PORT || 5000

export function startServer(app: Express) {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.error('Error starting the server:', error)
  }
}
