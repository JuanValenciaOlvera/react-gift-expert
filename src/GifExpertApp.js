import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One punch' , 'Samurai x' , 'Dragon Ball'];

    const [categories, setCategories] = useState(['HunterxHunter']);


    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
            <ol>
                {
                    categories.map(category  => 
                        <GifGrid 
                        key={category}
                        category={ category} />
                    )
                }
            </ol>

        </>
    )
}

export default GifExpertApp;
