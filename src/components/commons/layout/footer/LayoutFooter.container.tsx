import FooterUI from "./LayoutFooter.presenter";

export default function FooterContainer() {
    const onClickToGithub = () => {
        window.open(
            `https://github.com/s2s2hyun`,
            `GithubPopup`,
            `width=1280px,height=1280px,scrollbars=yes`
        );
    };

    return <FooterUI onClickToGithub={onClickToGithub} />;
}
