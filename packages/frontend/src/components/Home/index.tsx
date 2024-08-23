'use client'

import { Translations } from '@/lib/types/translations'

interface HomeContentProps {
  translations: Translations['Home']
}

export const HomeContent: React.FC<HomeContentProps> = ({ translations }) => {
  return <>{translations.hoge}</>
}
