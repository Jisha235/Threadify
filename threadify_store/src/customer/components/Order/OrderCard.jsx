import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div  onClick ={() => navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border '>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h=[5rem] object-cover object-top' src="https://guysworld.in/wp-content/uploads/2019/03/8175jCE139L._UL1500_.jpg" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Park Avenue men shirt12</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Pink</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>$40</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon className="text-green-600 mr-2 text-sm"xs={{width:"15px", height:"15px"}}/>
                    <span>Delivered on Feb 03</span>
                </p> 
                <p className='text-xs'>
                    Your item has been delivered</p> 
                </div> }
                {false && <p>
                    <span>Expected Delivery on Fen 03</span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard