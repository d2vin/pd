import MobileSidebar from "./mobile-sidebar";

// eslint-disable-next-line @typescript-eslint/ban-types
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="absolute flex h-16 w-full justify-between border-b border-neutral-800 p-2 z-10">
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
