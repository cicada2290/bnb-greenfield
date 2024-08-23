import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'

const i18nMiddleware = createMiddleware({
  locales: ['en'],
  defaultLocale: 'en',
})

export default async function middleware(req: NextRequest) {
  const i18nResponse = i18nMiddleware(req)
  if (i18nResponse) return i18nResponse
}
