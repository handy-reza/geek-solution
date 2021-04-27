export default function NavItem({ children }) {
  return (
    <li>
      <a className="text-white text-opacity-60 hover:text-opacity-100 transition font-semibold text-xl">
        {children}
      </a>
    </li>
  );
}
