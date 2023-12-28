import AppContent from "./components/AppContent";
import DataProvider from "./providers/DataProvider/DataProvider";

function App() {
  return (
    <DataProvider url="https://burger-app-api-seven.vercel.app/api/v1/burgers">
      <AppContent />
    </DataProvider>
  );
}

export default App;
