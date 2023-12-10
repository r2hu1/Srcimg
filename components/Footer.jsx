const Footer = () => {
    return (
        <footer className="h-[150px] border-t999 grid items-center mt-14 bg-white">
            <ul className="list-none grid gap-1 text-sm md:mx-20 mx-10">
                <li>
                    <a href="https://github.com/r2hu1/Srcimg" className="hover:underline">Fix this page</a>
                </li>
                <li>
                    <a href="https://rahul.eu.org" className="hover:underline">Hire Me</a>
                </li>
                <p className="text-xs mt-4">© {new Date().getFullYear()} Srcimg All rights reserved.</p>
            </ul>
        </footer>
    )
};

export default Footer;