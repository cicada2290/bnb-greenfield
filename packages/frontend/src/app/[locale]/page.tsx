import { HomeContent } from '@/components/Home'
import { useTranslations } from 'next-intl'
import type { Translations } from '@/lib/types/translations'

export default function Home() {
  const t = useTranslations('Home')

  const translations: Translations['Home'] = {
    hoge: t(`hoge`),
  }

  return <HomeContent translations={translations} />
}
