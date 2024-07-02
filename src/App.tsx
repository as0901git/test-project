import Header from "./components/Header";
import { PaymentProvider } from "./context/payment";
import PaymentPage from "./pages";

function App() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PaymentProvider>
        <PaymentPage />
      </PaymentProvider>
    </main>
  );
}

export default App;
