import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">Canvas App</h1>
      </header>
      <Outlet />
    </main>
  )
}

export default SharedLayout;