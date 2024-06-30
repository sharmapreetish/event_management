import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd"
import WelcomeContent from "../common/welcome-content";

function RegisterPage() {
    const onFinish = (values: never) => {
      console.log("Recieved values:", values)
      }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 lg:flex hidden">
            <WelcomeContent />
          </div>
          <div className="h-screen flex items-center justify-center">
            <Form
              className="flex flex-col gap-5 w-96"
              layout="vertical"
              onFinish={onFinish}
            >
              <h1 className="text-2xl font-bold text-gray-600">
                Register your account
              </h1>
    
              <Form.Item
                name="name"
                required
                label="Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
    
              <Form.Item
                name="email"
                required
                label="Email"
                rules={[{ required: true }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
    
              <Form.Item
                name="password"
                required
                label="Password"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
    
              <Button type="primary" htmlType="submit" block >
                Register
              </Button>
    
              <Link to="/login">Already have an account? Login</Link>
            </Form>
          </div>
        </div>
      );
}

export default RegisterPage