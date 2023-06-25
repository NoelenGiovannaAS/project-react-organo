import './Banner.css'

function Banner() {
    // JSX  É TIPO O DOCUMENT.CREATEeLEMENT(ÍMG).   Ele entende e transforma em elementos  no dom.
    return (
        <header>
            <img id="banner" src="/images/banner.png" alt="O banner princpal da página do Organograma" />
        </header>
    )
}

export default Banner