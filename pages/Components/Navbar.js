import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src = "/wolf.jpg"/><h1>ZEV</h1>
            </div>
        <Link href = "/"><a className = "active">Home</a></Link>
        <Link href = "/about"><a>About</a></Link>
        <Link href = "/services"><a>Services</a></Link>
        <Link href = "/contact"><a>Contact Us</a></Link>
        </nav>
    );
}

export default Navbar;