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
                    <img src="" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <img src="" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <img src="" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <img src="" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <img src="" />
                </S.Sliderimage>
                <S.Sliderimage>
                    <img src="" />
                </S.Sliderimage>
            </Slider>
        </S.Wrapper>
    );
}
