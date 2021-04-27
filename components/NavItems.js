export default function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="text-white text-opacity-60 hover:text-opacity-100 transition font-semibold text-xl">
        {children}
      </a>
    </li>
  );
}
