
export default function CardContainer({items}) {
  return (
    <section 
    className='grid grid-cols-4 orange-ring bg-glacier-teal/50 mt-10 mx-5 p-5 gap-5'
    >
        {
            items && 
            items.map(({strMealThumb, strMeal, idMeal}) => {
                return <div className='menu-card'>
                    <img src={strMealThumb} alt={strMeal} className='rounded-md' />
                    <div className='flex justify-evenly items-center p-2'>

                    <h1 className='font-f2 text-xl text-snow-white'>{strMeal}</h1>
                    <p className='font-mono text-beak-orange'>#{idMeal}</p>
                    </div>
                </div>
            })
        }
    </section>
  )
}
