// import React,{useEffect, useState} from 'react'
import { GiftGridItem } from './GiftGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    console.log(loading);

    

    
    return (
        <>
        <h3>{category}</h3>
        
        { loading && <p>Loading</p>}
        
        <div className="card-grid">  
            {
                images.map(img => (
                    <GiftGridItem
                    key={img.id}
                    { ...img }
                    />
                ))
            }
        </div>
        </>
    )
}
