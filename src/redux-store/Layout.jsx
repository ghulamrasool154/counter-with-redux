import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";

import { Increment, Decrement } from './actions/Actions';
const Layout = () => {


    const Dispatch = useDispatch();

    const count = useSelector((count) => count.Reduder)


    console.log('Getvalue ', count);

    return (
        <>


            <div className="container text-center ">
                <div className="row">
                    <div className="col-lg-12 m-auto">
                        <h1>Counter with Redux </h1>


                        <h1 style={{
                            color: 'black',
                            padding: '0 35px',
                            marginRight: '20px'
                        }} > {count}</h1>
                        <h1 className='count mb-5'
                            style={{
                                color: count <= 33 ? "red" :
                                    (count >= 34 && count < 60) ? " " : count >= 61 ? "brown" : ""
                            }} >


                            {

                                count <= 33 ? " Sorry You have Failed" :
                                    (count >= 34 && count <= 60) ? " Congrulations You have pass " : count >= 61 ? "Good A+ " : ""
                            }

                        </h1>


                        <div >
                            <button
                                className='btn btn-danger me-3 rounded-0'
                                onClick={() => Dispatch(Increment())}
                            ><BsPatchPlusFill className='me-3' /> Increment
                            </button>
                            <button
                                className='btn btn-danger ms-3  rounded-0'
                                onClick={() => Dispatch(Decrement())}
                            > <BsPatchMinusFill className='me-3' />Decrement
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout