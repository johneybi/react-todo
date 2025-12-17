import { Button, Input } from "antd";
import {
  DeleteFilled,
  EditFilled,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";

export default function TodoItem({
  todo,
  updateId,
  updateText,
  setUpdateText,
  handleToggle,
  deleteTodo,
  startUpdate,
  updateTodo,
  cancelUpdate,
}) {
  return (
    <li className="min-h-[82px] flex items-center justify-between py-4 px-3 -mx-3 rounded-mdCard hover:bg-md-bg transition-all duration-300 ease-md gap-8">
      {updateId === todo.id ? (
        <>
          <div className="flex gap-4 w-full">
            <Input
              value={updateText}
              onPressEnter={updateTodo}
              onChange={(e) => setUpdateText(e.target.value)}
              className="flex-1 !rounded-full !bg-md-surfaceLow !px-5 !text-[15px] !text-md-on placeholder:!text-md-onVariant/60 !border !border-md-outline/30 hover:!border-md-primary/50 focus:!border-md-primary 
                          focus:!ring-2 focus:!ring-md-primary/25 focus:!ring-offset-2 focus:!ring-offset-md-bg !shadow-none transition-all duration-300 ease-md"
            />
            <div className="flex gap-2">
              <Button icon={<CloseOutlined />} onClick={cancelUpdate}>
                <span className="hidden">취소</span>
              </Button>
              <Button icon={<CheckOutlined />} onClick={updateTodo}>
                <span className="hidden">저장</span>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="flex-1 ms-1 cursor-pointer"
            onClick={() => handleToggle(todo.id)}
          >
            <strong
              className={`text-md font-medium text-md-on hover:text-md-primary ${
                todo.isDone ? "line-through text-md-onVariant/60" : ""
              }`}
            >
              {todo.text}
            </strong>
            <p className="pt-2 text-xs text-md-onVariant/75">{todo.datetime}</p>
          </div>

          <div className="flex gap-2">
            <Button
              color="default"
              variant="filled"
              icon={<EditFilled />}
              onClick={() => startUpdate(todo)}
              className="!h-10 !rounded-full !px-4 !bg-md-secondaryContainer !text-md-onSecondaryContainer hover:!bg-md-secondaryContainer/90 active:!bg-md-secondaryContainer/80 active:scale-95 transition-all duration-300 ease-md"
            >
              Edit
            </Button>

            <Button
              color="danger"
              variant="filled"
              icon={<DeleteFilled />}
              onClick={() => deleteTodo(todo.id)}
              className="!h-10 !rounded-full !px-4 !bg-md-dangerContainer !text-md-onDangerContainer hover:!bg-md-dangerContainer/90 active:!bg-md-dangerContainer/80 active:scale-95 transition-all duration-300 ease-md"
            >
              Delete
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
