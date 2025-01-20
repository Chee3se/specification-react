export default function NavLink({href, title}) {
    return (
        <a className="hidden px-5 py-2 text-black text-sm text-center" href={href}>{title}</a>
    )
}