import ThemeProvider from "./theme";
import { Button } from "antd";

function App() {
  

  return (
    <ThemeProvider>

      <div className="flex flex-col items-center justify-center h-screen gap-5 p-5">
        <div className="text-gray-500 text-3xl">Homepage</div>
        <Button>Default Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button> Default</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
