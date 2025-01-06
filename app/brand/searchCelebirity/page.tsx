import React from 'react'

const SearchCelebirity = () => {
    return (
        <div>
<div  className='flex'>
    
                <input type="text"  className='border border-black'/>
                <div>
                    <label htmlFor=""></label>
                    <select name="" id="">
                        <option value="All categories">All categories</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Fitnes">Fitnes</option>
                        <option value="lifestyle">lifestyle</option>
                        <option value="sports">sports</option>
                        <option value="Tech">Tech</option>
                    </select>
                </div>
                <div>
    
                    <select name="" id="">
                        <option value="All">Followers</option>
                        <option value="All">All</option>
                        <option value="1m+">1m+</option>
                        <option value="500K-1M">500K-1M</option>
                        <option value="100k-500k">100k-500k</option>
                        <option value="50k-100k">50k-100k</option>
                    </select>
                </div>
</div>

        </div>
    )
}

export default SearchCelebirity