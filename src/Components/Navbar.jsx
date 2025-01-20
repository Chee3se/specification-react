import NavLink from "./NavLink";

export default function Navbar({ className }) {
    return (
        <nav className={"fixed z-10 bg-gradient-to-t from-gray-200 from-5% via-gray-50 via-50% to-gray-50 top-0 left-0 flex items-center justify-center w-full" + className}>
            <NavLink href={"/"} title={"Home"}></NavLink>
            <NavLink href={"/about"} title={"About"}></NavLink>
        </nav>
    )
}