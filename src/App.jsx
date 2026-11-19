import "./App.css"
import * as Pages from "./pages"

const App = () => {
  return (
    <>
    <Pages.HomePage />
    <Pages.ShowsPage />
    <Pages.ShowPage />
    <Pages.SearchPage />
    <Pages.NotFoundPage />
    </>
  )
}

export default App;