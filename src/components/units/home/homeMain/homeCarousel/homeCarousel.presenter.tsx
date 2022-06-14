import * as S from "./homeCarousel.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeCarouselUI() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <S.Wrapper>
            <Slider {...settings}>
                <S.Sliderimage>
                    <S.Img src="/images/car1.jpg" alt="fashion" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <S.Img src="/images/car2.jpg" alt="fashion" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <S.Img src="/images/car3.jpg" alt="fashion" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <S.Img src="/images/car4.jpg" alt="fashion" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <S.Img src="/images/car5.jpg" alt="fashion" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <S.Img src="/images/car1.jpg" alt="fashion" />
                </S.Sliderimage>
            </Slider>
        </S.Wrapper>
    );
}
