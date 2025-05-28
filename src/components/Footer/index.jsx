import logoImg from '@/assets/images/logo/logo-green.png'
import {useIsDesktop} from "@/utils/screen-size";

function Index() {
    const isPc = useIsDesktop();

    return (
        <footer
            className="w-full absolute md:px-[64px] md:mx-auto p-6 bg-blue-6 rounded-tl-2xl rounded-tr-2xl inline-flex flex-col justify-start items-center gap-4">
            <div className={'md:mx-auto md:max-w-[700px] w-full'}>

                <div className={'w-full flex items-center justify-between'}>
                    <a href={'https://dash.zimax.io/'}><img src={logoImg.src} className={'w-24'} alt={'logo-img'}/></a>
                    <div className={'flex items-center justify-center text-[24px] gap-[8px] text-white'}>
                        <a href={'https://x.com/Zimaxdefi'}><i className={'icon-twitter '}></i></a>
                        <a href={'https://t.me/Zimaxmultidefi'}><i className={'icon-send'}></i></a>
                        <a href={'https://t.me/+r5DAX7eeGE03YTFk'}><i className={'icon-youtube'}></i></a>
                    </div>
                </div>
                <div
                    className="w-full mt-[16px] inline-flex justify-between items-center text-text-invert-title text-sm">
                    <a href={'https://docs.zimax.io/'}>GITBOOK</a>
                    <p>ZiMax copyright 2022-2025</p>
                </div>
            </div>

        </footer>
    );
}

export default Index;