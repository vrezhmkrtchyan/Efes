import type { JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import FirstSlide from '../../Assets/Images/d71a1f0106b82a54e324dce1346501dcbea0e315.jpg'
import SecondSlide from '../../Assets/Images/884080d3cdbf4815ed08d07069cb7d66e684c06b.jpg'
import ThreeSlide from '../../Assets/Images/6b4ab06fc56d4f1c15186eadf3014894d170c686.jpg'
import FourSlide from '../../Assets/Images/9f35a03f45b10071025c83f21aa544258bf2989c.jpg'
import FiveSlide from '../../Assets/Images/martin-martz-5bWWxcpAjZ4-unsplash.jpg'
import './Slider.css'

interface ISliderArray {
    id: number,
    url: string,
    title: string,
    description: string
}

function Slider(): JSX.Element {
    const SliderArray: ISliderArray[] = [{
        id: 1,
        url: `${FirstSlide}`,
        title: "Welcome to “Name”",
        description: "Learn. Grow. Succeed.",

    }, {
        id: 2,
        url: `${SecondSlide}`,
        title: "Welcome to “Name”",
        description: "Learn. Grow. Succeed.",

    },
    {
        id: 3,
        url: `${ThreeSlide}`,
        title: "Welcome to “Name”",
        description: "Learn. Grow. Succeed.",

    },
    {
        id: 4,
        url: `${FourSlide}`,
        title: "Welcome to “Name”",
        description: "Learn. Grow. Succeed.",

    },
    {
        id: 5,
        url: `${FiveSlide}`,
        title: "Welcome to “Name”",
        description: "Learn. Grow. Succeed.",
    }]

    return (
        <div className='basis-5/12 overflow-hidden h-full rounded-[1.25rem]'>
            <Swiper style={{ cursor: 'grab', height: "100%" }} slidesPerView={1} resistanceRatio={0} spaceBetween={0} pagination={{
                clickable: true,
            }} modules={[Pagination, Autoplay]} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} className="mySwiper">
                {
                    SliderArray.map((slide) => {
                        return (
                            <SwiperSlide>
                                <div className='absolute w-full px-2 text-center left-1/2 top-1/5 transform -translate-x-1/2 -translate-y-1/2 '>
                                    <h1 className='font-[400] tracking-[0.5px] text-[2rem] font-satoshi' style={{ color: "#fff" }}>{slide?.title}</h1>
                                </div>
                                <img src={slide?.url} className='object-cover min-w-full min-h-full' alt="" />
                                <div className='absolute w-full px-2 text-center left-1/2 bottom-1/5 transform -translate-x-1/2 -translate-y-1/2 '>
                                    <h1 className='font-[400] tracking-[0.5px] text-[2rem] text-white font-satoshi' style={{ color: "#fff" }}>{slide?.description}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default Slider