import { LoginForm, SearchInterface, SettingsPanel } from "./patterns";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8">
      <h1 className="text-4xl font-bold">
        {" "}
        Patterns for the burgundy design system
      </h1>
      <h4>
        it shows all the tokens in use with components in the design system
      </h4>
      <SettingsPanel />
      <SearchInterface />
      <LoginForm />
    </div>
  );
}

export default App;
