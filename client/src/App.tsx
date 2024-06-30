import ThemeProvider from "./theme";
import { Button, Input } from "antd";

function App() {
  

  return (
    <ThemeProvider>

      <div className="flex flex-col items-center justify-center h-screen gap-5 p-5">
        <div className="text-gray-500 text-3xl">Homepage</div>
        <Button>Default Button</Button>
        <Button type="primary">Primary Button</Button>
        <Input placeholder="Basic usage" />
      </div>
    </ThemeProvider>
  )
}

export default App
