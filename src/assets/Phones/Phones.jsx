import axios from "axios";
import { Tooltip } from "chart.js";
import { useEffect, useState } from "react";

import { BarChart, Bar, XAxis, YAxis } from "recharts";


const Phones = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phonedata=data.data.data;
            const phoneswithFakedata=phonedata.map(phone=>{
                const obj ={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            setPhones(phoneswithFakedata)
            console.log(phoneswithFakedata)
        })
    },[])
    return (
        <div>
               <BarChart width={800} height={400} data={phones} barSize={20}>
      <Bar dataKey="price" fill="#8884d8" />
      <XAxis dataKey="name"> </XAxis>
      <YAxis dataKey="price"></YAxis>
      <Tooltip></Tooltip>
    </BarChart>
    
        </div>
    );
};

export default Phones;