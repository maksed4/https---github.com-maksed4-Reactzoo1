import { Outlet } from "react-router-dom";
import { Style } from "util";
export const Layout = () => {
  return (
    <div className="container">
      <header></header>
      <aside></aside>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
