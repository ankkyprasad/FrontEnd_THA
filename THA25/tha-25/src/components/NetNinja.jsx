import Food1 from "./img/food1.jpg"
import Food2 from "./img/food2.jfif"
import Food3 from "./img/food3.jfif"
import FoodCard from "./FoodCard.jsx"

function NetNinja(){
    return(
        <div className="grid md:grid-cols-3">
            {/* start of navbar */}
            <div className="md:col-span-1 md:flex md:justify-end">
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                            <a href="/" className="hover:text-gray-800">Food Ninja</a>
                        </h1>
                        <div className="px-4 cursor-pointer md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                    <ul className="text-sm mt-6 hidden md:block">
                        <li className="text-gray-700 font-bold py-1">
                            <a href="/" className="px-4 border-r-4 border-primary">
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="/" className="px-4">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="py-1">
                            <a href="/" className="px-4">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* End of Nav */}
            <main className="px-16 py-6 bg-gray-100 md:col-span-2">
                <div className="flex justify-center md:justify-end">
                    <a href="/" className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</a>
                    <a href="/" className="text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign Up</a>
                </div>

                <header>
                    <h2 className="text-gray-800 text-6xl font-semibold">Recipes</h2>
                    <h3 className="text-2xl font-semibold">For Ninjas</h3>
                </header>

                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

                    <div className="mt-8 grid lg:grid-cols-3 gap-10">
                        {/* cards go here */}
                        <FoodCard chefName="Mario" time="25 mins" image={Food1} foodName="Pizza"/>
                        <FoodCard chefName="Roller" time="35 mins" image={Food2} foodName="Indian Thali"/>
                        <FoodCard chefName="Luigi" time="10 mins" image={Food3} foodName="Momo"/>
                    </div>
                
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
                    <div className="mt-8">
                        {/* cards goes here */}
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
                    </div>
                </div>


            </main>
        </div>
    )
}

export default NetNinja;