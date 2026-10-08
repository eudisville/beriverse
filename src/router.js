import { useEffect, useState } from "react";

const read = () => ({ path: location.pathname.replace(/\/+$/, "") || "/", hash: location.hash });

// Mini routeur sans dépendance : les <a href="/..."> internes naviguent sans recharger la page.
export function useLocation() {
  const [loc, setLoc] = useState(read);

  useEffect(() => {
    const update = () => setLoc(read());
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest("a");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin) return;
      e.preventDefault();
      history.pushState({}, "", u.pathname + u.search + u.hash);
      update();
    };
    window.addEventListener("popstate", update);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", update);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      const el = loc.hash && document.querySelector(loc.hash);
      el ? el.scrollIntoView() : window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(id);
  }, [loc]);

  return loc;
}
