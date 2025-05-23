export default function TabButton({
  children,
  onSelect,
  isSelected,
  ...props
}) {
  console.log("TABBUTTON COMPONENT EXECUTING twice in dev mode");

  return (
    <li>
      <button
        onClick={onSelect}
        className={isSelected ? "active" : undefined}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
