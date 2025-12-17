import { Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";


export default function InputTodo({inputTodo, setInputTodo, createTodo}) {
  return (
    <div className="flex items-center justify-center gap-4 pt-2 pb-8">
      <Input
        placeholder="Input here"
        type="text"
        value={inputTodo}
        onPressEnter={createTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        className="!h-12 !rounded-full !bg-md-surfaceLow !px-5 !text-[15px] !text-md-on placeholder:!text-md-onVariant/60 !border !border-md-outline/30 hover:!border-md-primary/50 focus:!border-md-primary 
                          focus:!ring-2 focus:!ring-md-primary/25 focus:!ring-offset-2 focus:!ring-offset-md-bg !shadow-none transition-all duration-300 ease-md"
      />
      <Button
        type="primary"
        icon={<PlusCircleFilled />}
        onClick={createTodo}
        className="!h-12 !rounded-full !px-6 !font-semibold !tracking-[0.01em] active:scale-95 transition-all duration-300 ease-md !shadow-sm bg-md-primary hover:!bg-md-onSecondaryContainer hover:!shadow-md"
      >
        Add
      </Button>
    </div>
  );
}
