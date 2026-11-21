import Sidebar from './components/layout/Sidebar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className="grid grid-cols-[320px_1fr] min-h-screen">
      <Sidebar />
      <main className="px-14">
        <Hero />
      </main>
    </div>
  )
}

export default App