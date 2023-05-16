import React , { useState, useEffect } from 'react';
import img from '../images/img.jpg';
import img2 from '../images/img2.jpg';
import img4 from '../images/img4.jpg';

const Slider = () => {
    const [scroll, setScroll] = useState(0);
    const [complete, setComplete] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if(scrollHeight > 0) {
                setComplete(Number((window.scrollY / scrollHeight).toFixed(4)) * 100);
            }
        };
        window.addEventListener('scroll', updateScroll); 
    });

    const scrollHandle = (e) => {
        let y = window.scrollY;
        setScroll(y);
        console.warn(scroll);
    };

    const animate = () => {
        let height = window.innerHeight;
        let s1 = document.getElementById('s1');
        let s2 = document.getElementById('s2');
        let s3 = document.getElementById('s3');
        
        if(scroll >=height && scroll <3*height){
            s1.style.opacity = 1;
            s1.style.transform = 'translate(0px,0px)';
            s1.style.transition = 'scale(1,1)';

            s2.style.opacity = 0;
            s2.style.transform = 'translate(0px,250px)';
            s2.style.transition = 'scale(0.8,0.8)';

            s3.style.opacity = 0;
            s3.style.transform = 'translate(0px,250px)';
            s3.style.transition = 'scale(0.8,0.8)';
        }
        else if(scroll >=3*height && scroll <4*height){
            s1.style.opacity = 0;
            s1.style.transform = "translate(0px,250px)";
            s1.style.transform = "scale(0.8,0.8)";

            s2.style.opacity = 1;
            s2.style.transform = "translate(0px,0px)";
            s2.style.transform = "scale(1,1)";

            s3.style.opacity = 0;
            s3.style.transform = "translate(0px,250px)";
            s3.style.transform = "scale(0.8,0.8)";
        }
        else if(scroll >=4*height){
            s1.style.opacity = 0;
            s1.style.transform = "translate(0px,250px)";
            s1.style.transform = "scale(0.8,0.8)";

            s2.style.opacity = 0;
            s2.style.transform = "translate(0px,250px)";
            s2.style.transform = "scale(0.8,0.8)";

            s3.style.opacity = 1;
            s3.style.transform = "translate(0px,0px)";
            s3.style.transform = "scale(1,1)";
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandle);
        console.warn(scroll);
        animate();
    });

    return (
        <div className="relative h-[600vh] w-1/2 bg-black">
            <div className='sticky top-0 left-0 h-screen max-w-[475px] flex flex-col'>
                <div className='absolute top-0 left-0 w-fit h-screen py-16 lg:px-10 lg:opacity-1 lg:translate-y-[0px] transition-all duration-700 delay-200 rounded-lg' id='s1'>
                    <div className=" md:w-[388px] lg:w-[388px] h-[400px] bg-[#101010] rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
                        <div className=" w-[100%] h-[100%]">
                            <img src={img} alt='Home'/>
                        </div>
                        <div className=" w-[100%] h-[50%]">
                            <h1 className=" text-white text-center text-2xl">
                                A keyboard <br /> first experience
                            </h1>
                            <br/>
                            <p className=" text-center text-white pb-4 mx-2">
                                Powerful shortcuts and a keyboard-first workflow means you will
                                get to your finish line in no time!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 w-fit h-screen py-16 lg:px-10 lg:opacity-0 lg:translate-y-[250px] transition-all duration-700 delay-200 rounded-lg' id='s2'>
                    <div className=" md:w-[388px] lg:w-[388px] h-[400px] bg-[#101010] rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
                        <div className=" w-[100%] h-[100%]">
                            <img src={img2} alt="home-2" />
                        </div>
                        <div className=" w-[100%] h-[50%]">
                            <h1 className=" text-white text-center text-2xl">
                                bullets to visuals
                                <br /> in a click
                            </h1>
                            <br />
                            <p className=" text-center text-white pb-4 mx-2">
                                transform any block to any other and try different options
                                without any design hassle
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 w-fit h-screen py-16 lg:px-10 lg:opacity-0 lg:translate-y-[250px] transition-all duration-700 delay-200 rounded-lg' id='s3'>
                    <div className=" md:w-[388px] lg:w-[388px] h-[400px] bg-[#101010] rounded-lg flex flex-col justify-center items-center my-14 overflow-hidden">
                        <div className=" w-[100%] h-[100%]">
                            <img src={img4} alt="home-3" />
                        </div>
                        <div className=" w-[100%] h-[50%]">
                            <h1 className=" text-white text-center text-2xl">
                                A powerful assistant <br/> just a click away 
                            </h1>
                            <br/>
                            <p className=" text-center text-white pb-4 mx-2">
                                Insert blocks, perform powerful actions and leverage the
                                limitless power of AI - all without leaving your keyboard
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" hidden md:absolute md:top-0 md:mt-28 md:right-0 md:h-screen md:flex md:flex-col md:items-center md:gap-2">
                    <span className=" text-[12px] opacity-1 text-white">
                        {   scroll >= 3 * window.screen.height &&
                            scroll < 4 * window.screen.height
                            ? "02"
                            : scroll > 4 * window.screen.height
                            ? "03"
                            : "01"
                        }
                    </span>
                    <div className=" w-[4px] h-[350px] relative rounded-full bg-[#232323] overflow-hidden">
                        <span
                        className=" absolute top-0 left-0 w-full bg-[#A594FD] rounded-full"
                        style={{ height: `${complete}%` }}
                        ></span>
                    </div>
                    <span className=" text-[12px] opacity-1 text-white">03</span>
                </div>
            </div>

        </div>
    );
};

export default Slider;