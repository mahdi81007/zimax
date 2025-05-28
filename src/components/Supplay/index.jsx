import arrowMobileImg from '@/assets/images/arrow/suply-mobule-arrow.svg.svg'
import arrowDown from '@/assets/images/arrow/public-sale-object-mobile.svg.svg'
import SmallSupplay from "@/components/Supplay/SmallSupplay";
import desktopArrowImg from '@/assets/images/arrow/desktop-arrow.svg.png'
import {useIsDesktop} from "@/utils/screen-size";

const smallContent =[
    {id :1,title:'Funder & investor',content:'6%'},
    {id :2,title:'TREAsury',content:'16%'},
    {id :3,title:'Developer',content:'1%'},
    {id :4,title:'PRE-SALE',content:'6%'},
    {id :5,title:'PUBLIC SALE',content:'74%'},
]

function Index() {
    const isPc = useIsDesktop();

    return (
        <div className={'mt-[16px]'}>
            <div className="w-full p-6 bg-background-body rounded-3xl outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-start items-start overflow-hidden">
                <div className=" px-6 flex flex-col justify-start items-center">
                    <div className=" text-center justify-center text-text-defaullt-default text-base font-bold  leading-loose">Total Supplay</div>
                </div>
                <div className=" px-6 flex flex-col justify-start items-center">
                    <div className=" text-center justify-center text-text-primary-default text-xl font-bold  leading-10">280 . 000 .000</div>
                </div>
            </div>
            {isPc&&<img alt={'arrow'} src={desktopArrowImg.src} />}

            <div className={'flex items-center justify-center mt-[20px]'}>
                <div className={'flex flex-col items-center justify-center md:w-full md:flex-row md:gap-[16px]'}>
                    <div className="w-full p-6 bg-background-body rounded-3xl outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-center items-center overflow-hidden">
                            <p className=" text-center justify-center text-text-defaullt-default text-base font-bold  leading-loose">Bank Rewards</p>
                            <p className=" text-center justify-center text-text-primary-default text-xl font-bold  leading-10">250 . 000 . 000</p>
                    </div>

                    <div className="w-full mt-[16px]  md:mt-0 p-6 bg-background-body rounded-3xl outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-center items-center overflow-hidden">
                            <p className=" text-center justify-center  text-text-defaullt-default text-base font-bold  leading-loose">Initial Supplay</p>
                            <p className=" text-center justify-center text-text-primary-default text-xl font-bold  leading-10">30 . 000 . 000</p>
                    </div>
                </div>
                <img className={'md:hidden'} src={arrowMobileImg.src} alt={'arrow-mobile-img'}/>
            </div>

            <div className={'flex flex-col items-center justify-center md:flex-row md:gap-[16px]'}>
                {smallContent.map((item)=>(
                    <SmallSupplay {...item}/>
                ))}
            </div>
            <img src={arrowDown.src} alt={'arrow-down'} className={'my-[16px] mx-auto'}/>

            <div className="mt-[16px] text-center justify-center text-text-default-title text-sm font-semibold  leading-7">Distribution from ZMX public-sale</div>
            <div className="md:w-full mt-[16px] p-6 bg-Background-body rounded-3xl outline outline-4 outline-offset-[-4px] outline-border-gray-default inline-flex md:flex-row justify-center items-center flex-wrap content-center">
                <div className="flex-1 min-w-24 inline-flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-text-default-default text-xs font-normal  leading-normal">Liquidity</div>
                    <div className="text-center justify-center text-text-primary-default text-xl font-bold  leading-10">55%</div>
                </div>
                <div className="flex-1 min-w-24 inline-flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-text-default-default text-xs font-normal  leading-normal">LEGAL</div>
                    <div className="text-center justify-center text-text-primary-default text-xl font-bold  leading-10">5%</div>
                </div>
                <div className="flex-1 min-w-24 inline-flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-text-default-default text-xs font-normal  leading-normal">TREASURY</div>
                    <div className="text-center justify-center text-text-primary-default text-xl font-bold  leading-10">25%</div>
                </div>
                <div className="flex-1 min-w-24 inline-flex flex-col justify-start items-center mt-[24px]">
                    <div className="text-center justify-center text-text-default-default text-xs font-normal  leading-normal">Marketing</div>
                    <div className="text-center justify-center text-text-primary-default text-xl font-bold  leading-10">25%</div>
                </div>
                <div className="flex-1 min-w-24 inline-flex flex-col justify-start items-center mt-[24px]">
                    <div className="text-center justify-center text-text-default-default text-xs font-normal  leading-normal">DEV & ADVISER</div>
                    <div className="text-center justify-center text-text-primary-default text-xl font-bold  leading-10">10%</div>
                </div>
            </div>
        </div>
    );
}

export default Index;