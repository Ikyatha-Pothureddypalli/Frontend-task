// import React from 'react'

// export default function Footer() {
//   return (
//     <div className='flex flex-col md:flex-row justify-around items-center py-20 px-10'>
//         <ul className='flex gap-6'>
//             <li>Privacy Policy</li>
//             <li>Terms of Services</li>
//             <li>Sales and Refunds</li>
//             <li>Legal</li>
//         </ul>
//         <ul className='flex font-semibold gap-6 py-20 px-20'>
//             <li>About</li>
//             <li>Pricing</li>
//             <li>Membership</li>
//             <li>Join us </li>
//             <li>Schedules</li>
            
//         </ul>
//     </div>
//   )
// }
import React from 'react';

export default function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center py-20 px-10'>
        <ul className='flex flex-col md:flex-row gap-6 text-center'>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Sales and Refunds</li>
            <li>Legal</li>
        </ul>
        <ul className='flex flex-col md:flex-row font-semibold gap-6 py-10 px-20 text-center'>
            <li>About</li>
            <li>Pricing</li>
            <li>Membership</li>
            <li>Join us</li>
            <li>Schedules</li>
        </ul>
    </div>
  );
}
