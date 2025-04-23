import { TodoItem } from "../types/todo-types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Props = {
  todos: TodoItem[];
};

const columnHelper = createColumnHelper<TodoItem>();
const columnsDef = [
  columnHelper.accessor("task", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("completed", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

const TodoList = ({ todos }: Props) => {
  const table = useReactTable({
    data: todos,
    columns: columnsDef,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
