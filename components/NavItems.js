export default function NavItem({ children }) {
  return (
    <li>
      <a className="text-white text-opacity-60 font-semibold text-xl">
        {children}
      </a>
    </li>
  );
}
