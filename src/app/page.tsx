import Link from "next/link";

interface IData {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data: IData[] = await response.json()
  console.log("data ==>> ", data);

  return (
    <div>
      <h1 className="text-2xl">Api fetching</h1>
      <h1>Todos</h1>
      <div className="grid grid-cols-4 gap-5">
        {
          data.map((todo) => {
            return (
              <Link key={todo.id} href={`/todos/${todo.id}`}>
                <div className="py-5 px-7 shadow-2xl shadow-yellow-500 rounded-lg border-2 border-red-600 font-bold">{todo.title}</div>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}
