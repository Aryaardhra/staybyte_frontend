import React, { useEffect } from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { useState } from 'react'

const RecommendedHotel = () => {

  const { rooms, navigate, searchedCities } = useAppContext();
  const [recommended, setRecommended] = useState([]);

  const filterHotels = () => {
    const filteredHotels = rooms.slice().filter(room => searchedCities.includes(room.hotel.city));
    setRecommended(filteredHotels);
  };

  useEffect(()=>{filterHotels()},[rooms, searchedCities])

   // const navigate = useNavigate();

  return recommended.length > 0 && (
    <>
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">

        <Title title="Recommended For You" subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
            { recommended.slice(0,4).map((room, index) => (
                <HotelCard key={room._id} room={room} index={index} />
            ))}
        </div>
        
        <button onClick= {() => { navigate("/rooms"); scrollTo(0, 0)}}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">
          View All Destinations
        </button>
    </div>
    </>
  )
}

export default RecommendedHotel;