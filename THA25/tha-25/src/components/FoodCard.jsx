function FoodCard({chefName, time, image, foodName}){
    return(
        <div>
            <div className="card hover:shadow-lg">
                <img src={image} alt="Pizza" className="w-full h-32 sm:h-48 object-cover"/>
                <div className="m-4">
                    <span className="font-bold">{foodName}</span>
                    <span className="block text-gray-500 text-sm">Recipe by {chefName}</span>
                </div>
                <div className="badge">
                    <span>{time}</span>
                </div>
            </div>
        </div>
    )
}

export default FoodCard