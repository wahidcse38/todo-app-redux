import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filter/actions";

function numberOfTodos(no_of_todos) {
  switch (no_of_todos) {
    case 0:
      return "No task";
    case 1:
      return "1 task";

    default:
      return `${no_of_todos} tasks`;
  }
}

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  const dispatch = useDispatch();

  function handleStatusChanged(status) {
    dispatch(statusChanged(status));
  }

  function handleColorChanged(color) {
    if (filter.colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  }

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(remainingTodos)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${filter.status === "All" && "font-bold"}`}
          onClick={() => handleStatusChanged("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filter.status === "Incomplete" && "font-bold"
          }`}
          onClick={() => handleStatusChanged("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filter.status === "Complete" && "font-bold"
          }`}
          onClick={() => handleStatusChanged("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChanged("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filter.colors.includes("green") && "bg-green-500"
          } `}
        ></li>
        <li
          onClick={() => handleColorChanged("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filter.colors.includes("red") && "bg-red-500"
          } `}
        ></li>
        <li
          onClick={() => handleColorChanged("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filter.colors.includes("yellow") && "bg-yellow-500"
          } `}
        ></li>
      </ul>
    </div>
  );
}
