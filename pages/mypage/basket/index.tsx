import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BasketWrapper = styled.div`
    width: 1200px;
    height: 1000px;
`;

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const BrandTopNumber = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
`;

const BrandContents = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

const BrandPrice = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
`;

const BrandName = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
`;

const BrandAddress = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
`;

const BasketBrand = styled.div``;

const MyRow = styled.div``;

const BasketLine = styled.div`
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-bottom: 15px;
    padding-top: 15px;
`;

const BasketNumber = styled.div`
    padding-left: 80px;
    width: 10%;
`;

const BasketRemark = styled.div`
    padding-left: 170px;
    width: 25%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const BasketPrice = styled.div`
    width: 20%;
    padding-left: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const BasketName = styled.div`
    padding-left: 140px;
`;

const BasketAddress = styled.div`
    padding-left: 120px;
`;

// const MyColumn = styled.div`
//     width: 25%;
//     padding-left: 80px;
// `;

const MyDivider = styled.div`
    width: 1200px;
    height: 1px;
    background: #bdbdbd;
`;

const TopDivider = styled.div`
    width: 1200px;
    height: 1px;

    margin-top: 100px;
    background: #000000;
`;

const BottomDivider = styled.div`
    width: 1200px;
    height: 1px;
    background: #000000;
`;

const BasketTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
`;

const BasketTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
`;

const BasketRouter = styled.button``;

export default function BasketPage() {
    const [basketItems, setBasketItems] = useState([]);
    const router = useRouter();
    const onClickMoveToBrandDetail = (el: any) => (event: any) => {
        router.push(`/brands/${el}`);
    };

    //
    // useEffect 가 있어야 localStorage 를 찾을수있다 .
    // 그래야만 페이지 렌딩이 가능하다. , [] did mount 상태라서 1번만 실행된다 .

    useEffect(() => {
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
        console.log(baskets, "데이터");
        setBasketItems(baskets);
    }, []);
    return (
        <BasketWrapper>
            <BasketTitleWrapper>
                <BasketTitle>BASKET</BasketTitle>
            </BasketTitleWrapper>

            <TopDivider />
            <TopWrapper>
                <BrandTopNumber>번호</BrandTopNumber>
                <BrandContents>상품명</BrandContents>
                <BrandPrice>판매가격</BrandPrice>
                <BrandName>판매자</BrandName>
                <BrandAddress>판매장소</BrandAddress>
            </TopWrapper>
            <BasketBrand>
                {basketItems.map((el: any, index) => (
                    <MyRow key={el.fetchUseditem._id}>
                        <MyDivider />
                        <BasketLine>
                            <BasketNumber>{index + 1}</BasketNumber>
                            <BasketRemark>{el.fetchUseditem.remarks}</BasketRemark>
                            <BasketPrice>
                                ₩
                                {el.fetchUseditem.price
                                    ?.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                원
                            </BasketPrice>
                            <BasketName>{el.fetchUseditem.seller.name}</BasketName>
                            <BasketAddress>
                                {el.fetchUseditem.useditemAddress.address}
                            </BasketAddress>
                            <BasketRouter onClick={onClickMoveToBrandDetail(el.fetchUseditem._id)}>
                                이동
                            </BasketRouter>
                        </BasketLine>
                    </MyRow>
                ))}
            </BasketBrand>
            <BottomDivider />
        </BasketWrapper>
    );
}
