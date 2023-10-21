import React from 'react'
import {tableDatas, tableHeaders} from '../datas/parityData'
import Image from 'next/image'
import StarsIcon from '../../../public/star.svg'

const ParityTable = () => {
    return (
      <div className='flex flex-col w-full gap-4 font-bold'>
        <div className='hidden md:flex gap-6 items-center justify-around text-[11.49px] text-android-card w-inherit '>
        {tableHeaders.map((item, i) => (
            <div key={i} className=' flex justify-between items-center gap-4'>{item.value}</div>
        ))}
        </div>
        <div className='flex flex-col gap-6'>
            {tableDatas.map((item, i) => (
                <>
                <div key={i} className={`flex justify-around items-center gap-4 h-[43.9px] rounded-[12px] ${i%2==0 ? 'bg-parity-item-gray' :'bg-parity-item-blue'}`}>
                    <span>{item.date}</span>
                    <span>{item.parity}</span>
                    <span className='flex w-4 '>
                        {
                              (() => {
                                const stars = [];
                                let i = 0;
                                while (i < item.stars) {
                                    stars.push(<Image src={StarsIcon} width={10} height={10} key={i} />);
                                    i++;
                                    
                                }
                                return stars;
                            })()
                        }
                    </span>
                    <span className='hidden md:flex'>{item.event}</span>
                    <span className='hidden md:flex'>{item.explained}</span>
                    <span className='hidden md:flex'>{item.expectation}</span>
                    <span className='hidden md:flex'>{item.before}</span>           
                </div>
                {i%6===5 && i!==17 && <div className='w-[375px] h-[50px] md:w-[750px] md:h-[100px] bg-gray-300 mx-auto text-center'> GoogleAds</div> }
                </>
                
            ))}
        </div>
      </div>
    );
  };

export default ParityTable;