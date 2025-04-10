
function Header() {
    
    return (
        <div className="flex items-center justify-between bg-green-700 text-white">
            <nav className="flex justify-between w-full">
                <h1 className="text-4xl font-bold p-2.5 ml-24 ">
                    PlayGround
                </h1>
                <ul className="flex items-center gap-24 text-xl mr-40">
                    <li className="hover:text-gray-300 cursor-pointer">Games</li>
                    <li className="hover:text-gray-300 cursor-pointer">Consoles</li>
                    <li className="hover:text-gray-300 cursor-pointer">Support</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
