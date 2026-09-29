import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'pt' | 'en'

// Texto nos dois idiomas. Nomes próprios e tecnologias podem ficar como string simples.
export type Text = { pt: string; en: string }
export type Localized = string | Text

const STORAGE_KEY = 'lang'

const titles: Record<Lang, string> = {
  pt: 'Rodrigo de Carvalho Costa | Portfólio',
  en: 'Rodrigo de Carvalho Costa | Portfolio',
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // Sem acesso ao localStorage (ex.: aba anônima): segue para o idioma do navegador
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void } | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en'
    document.title = titles[lang]
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignora: o idioma só não fica salvo para a próxima visita
    }
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

// eslint-disable-next-line react/only-export-components
export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang precisa estar dentro de <LanguageProvider>')
  const { lang, setLang } = ctx
  const t = (text: Localized) => (typeof text === 'string' ? text : text[lang])
  return { lang, setLang, t }
}
