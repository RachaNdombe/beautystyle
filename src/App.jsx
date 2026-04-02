import { useEffect, useState } from 'react'
import './App.css'
import { Layout } from './components/Layout.jsx'
import { HomePage } from './pages/HomePage.jsx'

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Layout theme={theme} onToggleTheme={handleToggleTheme}>
      <HomePage />
    </Layout>
  )
}
