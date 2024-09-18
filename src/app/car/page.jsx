'use client';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Appbar from '../components/appbar';

export default function page() {

    const [carData, setCarData] = useState([]);
    console.log(carData)
    useEffect(() => {
        fetchCar();
    }, []);

    const fetchCar = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/cars`);
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setCarData(data.cars);
                console.log(data.cars);
            }
            console.log(response.cars);
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: error,
            }, 500);
        }
    }

    return (
        <div>
            <Appbar />
            <div>
                <h1 className='mt-4 text-4xl text-center font-semibold '>Car</h1>
            </div>
            <div className='grid grid-cols-4 gap-6 p-4'>
                {carData.map((car, index) => (
                    <div key={car.id} className='bg-white w-[28rem] h-[25rem] p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-[5rem]'>
                        <div className=''>
                            <img className='h-[14rem] w-full' src={`http://localhost:8000/images/car/${car.c_img}`} alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='text-black font-bold'>{car.c_name}</p>
                            <p className='text-black'>{car.c_detail}</p>
                            <div className=' text-white  flex justify-end mt-[4rem]'>
                                <a className='font-bold  bg-black flex p-2 hover:bg-orange-400 transition delay-150 ease-in-outhover:-translate-y-1 hover:scale-110 duration-300 border border-black' href="">read more<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
