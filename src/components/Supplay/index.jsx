import arrowMobileImg from '@/assets/images/arrow/suply-mobule-arrow.svg.svg'
import arrowDown from '@/assets/images/arrow/public-sale-object-mobile.svg.svg'
import SmallSupplay from "@/components/Supplay/SmallSupplay";

const smallContent =[
    {id :1,title:'Funder & investor',content:'6%'},
    {id :2,title:'TREAsury',content:'16%'},
    {id :3,title:'Developer',content:'1%'},
    {id :4,title:'PRE-SALE',content:'6%'},
    {id :5,title:'PUBLIC SALE',content:'74%'},
]
function Index() {
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
            <div className={'flex items-center justify-center mt-[20px]'}>
                <div className={'flex flex-col items-center justify-center'}>
                    <div className="w-full p-6 bg-background-body rounded-3xl outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-start items-start overflow-hidden">
                        <div className=" flex flex-col justify-start items-center">
                            <p className=" text-center justify-center text-text-defaullt-default text-base font-bold  leading-loose">Bank Rewards</p>
                        </div>
                        <div className=" flex flex-col justify-start items-center">
                            <div className=" text-center justify-center text-text-primary-default text-xl font-bold  leading-10">250 . 000 . 000</div>
                        </div>
                    </div>

                    <div className="w-full mt-[16px] p-6 bg-background-body rounded-3xl outline outline-2 outline-offset-[-2px] outline-border-gray-default inline-flex flex-col justify-start items-start overflow-hidden">
                        <div className=" flex flex-col justify-start items-center">
                            <div className=" text-center justify-center text-text-defaullt-default text-base font-bold  leading-loose">Initial Supplay</div>
                        </div>
                        <div className=" flex flex-col justify-start items-center">
                            <div className=" text-center justify-center text-text-primary-default text-xl font-bold  leading-10">30 . 000 . 000</div>
                        </div>
                    </div>
                </div>
                <img className={''} src={arrowMobileImg.src} alt={'arrow-mobile-img'}/>
            </div>

            <div className={'flex flex-col items-center justify-center '}>
                {smallContent.map((item)=>(
                    <SmallSupplay {...item}/>
                ))}
            </div>
            <img src={arrowDown.src} alt={'arrow-down'} className={'my-[16px] mx-auto'}/>

            <div className="mt-[16px] text-center justify-center text-text-default-title text-sm font-semibold  leading-7">Distribution from ZMX public-sale</div>
            <div className=" p-6 bg-Background-body rounded-3xl outline outline-4 outline-offset-[-4px] outline-border-gray-default inline-flex justify-center items-center flex-wrap content-center">
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