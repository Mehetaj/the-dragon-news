import React from 'react';
import qzone1 from '../../../../../assets/qZone1.png'
import qzone2 from '../../../../../assets/qZone2.png'
import qzone3 from '../../../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary bg-opacity-10 py-4 px-4 my-4'>
            <h4>Q-zone</h4>
            <div className='text-center'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;