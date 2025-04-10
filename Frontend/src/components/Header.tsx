
function Header() {
    
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold ml-24 mt-2.5 ">
                PlayGround
            </h1>
            <nav>
                <ul className="flex items-center gap-24 text-xl mr-40">
                    <li>Games</li>
                    <li>Consoles</li>
                    <li>Support</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
