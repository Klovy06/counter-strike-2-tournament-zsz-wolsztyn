export default function NotFound() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', gap: '12px'}}>
      <h1>Strona nie znaleziona (404)</h1>
      <p>Wygląda na to, że żądana strona nie istnieje.</p>
      <a href="/">Przejdź do strony głównej</a>
    </div>
  )
}
