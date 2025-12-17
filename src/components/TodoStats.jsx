import { Badge, Tag } from "antd";


export default function TodoStats({todos}) {

  return (
    <div className="flex gap-4 my-4">
      <Badge count={todos.length} className="[&_.ant-badge-count]:!bg-md-info [&_.ant-badge-count]:!text-md-onInfo [&_.ant-badge-count]:!text-sm [&_.ant-badge-count]:!font-semibold">
        <Tag className="!border-transparent !bg-md-infoContainer !text-md-onInfoContainer !font-medium">Total</Tag>
      </Badge>
      <Badge count={todos.filter((todo) => !todo.isDone).length} className="[&_.ant-badge-count]:!bg-md-warning [&_.ant-badge-count]:!text-md-onWarning [&_.ant-badge-count]:!text-sm [&_.ant-badge-count]:!font-semibold">
        <Tag className="!border-transparent !bg-md-warningContainer !text-md-onWarningContainer !font-medium">Remaining</Tag>
      </Badge>
      <Badge count={todos.filter((todo) => todo.isDone).length} className="[&_.ant-badge-count]:!bg-md-success [&_.ant-badge-count]:!text-md-onSuccess [&_.ant-badge-count]:!text-sm [&_.ant-badge-count]:!font-semibold">
        <Tag className="!border-transparent !bg-md-successContainer !text-md-onSuccessContainer !font-medium">Done</Tag>
      </Badge>
    </div>
  );
}
