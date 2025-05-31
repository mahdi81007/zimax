import {useEffect, useState} from "react";
import logoImg from '@/assets/images/logo/logo-green.png';
import {Container} from "@mantine/core";
import  './index.css';
import {Header} from "@/components/Header";
import {useIsDesktop} from "@/utils/screen-size";

function Index() {
    const [showSectionTwo, setShowSectionTwo] = useState(false);
    const [backgroundShown, setBackgroundShown] = useState(false);
    const [showContent, setShowContent] = useState(false);


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        // Step 1: Show Section Two
        const sectionTimer = setTimeout(() => {
            setShowSectionTwo(true);
            document.body.style.overflow = 'auto';
        }, 10000); // total wait time

        const bgTimer = setTimeout(() => {
            setBackgroundShown(true);
        }, 5000); // same moment as section shown

        // Step 3: Then show content after background animation is done (1s)
        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 6000); // 1s after bg starts (duration of `bgReveal`)

        return () => {
            clearTimeout(sectionTimer);
            clearTimeout(bgTimer);
            clearTimeout(contentTimer);
            document.body.style.overflow = 'auto';
        };
    }, []);


    const isPc = useIsDesktop();

    return (
        <div
            className={' relative  bg-[radial-gradient(ellipse_71.17%_71.17%_at_50.00%_50.00%,_var(--background-primary-filled,_#228BE6)_0%,_#0B2E4D_100%)] overflow-hidden h-[100vh]'}>
            {!showSectionTwo ? (
                <Container className={'text-white pt-[200px] text-center align-center md:text-lg h-full'}>
                    <img
                        src={logoImg.src}
                        alt={'logo'}
                        style={{margin: '0 auto'}}
                        className={'w-[182px]  h-[53px] animate-fade delay-300'}
                    />
                    <h1 className={'mt-[29px] animate-fade delay-600'}>
                        For Your Own Decentralized <b>Business</b>
                    </h1>
                    <div className={'mt-[12px] '}>
                        <span className={'animate-fade  delay-900'}>Built on <b> web3  </b></span>
                        <span className={'animate-fade delay-1200'}>Powered by <b>You</b></span>
                    </div>
                    <p className={'mt-[54px] leading-loos  animate-fade delay-1500'}>
                        ZiMax is not just secure and transparent but also has <b>" NO "</b>
                        intermediaries. ZiMax used <b>" NO "</b> middlemen/intermediary admin control. It is based on
                        smart-contract.
                    </p>
                </Container>
            ) : (
                <>
                    {!isPc &&showContent&& <Header className="wipe-in delay-300" />}

                    {backgroundShown&& <div className={'animate-bg-fade delay-300 h-[100vh]'}>
                        {showContent && (
                            <>
                                <div className="wipe-in delay-600">
                                    {isPc&&<img alt={'logo-img'} className={'mx-auto w-[133px] h-[39px] my-[32px]'} src={logoImg.src}/>}
                                    <Container className="animate-float-up delay-[900ms] relative h-full ">
                                        <p className=" wipe-in delay-[100ms] pt-[60px] md:text-center  mt-[24px] opacity-80 w-full md:mx-auto text-text-invert-title overflow-hidden animate-float-up delay-[800ms] font-spaced leading-relaxed">
                                            The World's First Decentralized
                                        </p>
                                        <div className="w-72 md:mx-auto w-full flex-col justify-center items-start gap-3">
                                            <h1 className={'wipe-in delay-[300ms] flex flex-wrap w-full items-center font-corsa md:justify-center text-text-invert-title'}>
                                                <span className="  text-9xl md:text-9xl    animate-float-up delay-[1000ms]">Multi</span>
                                                <span className=" text-8xl md:text-9xl  md:ml-[16px] animate-float-up delay-[1200ms]">DeFi</span>
                                            </h1>

                                            <div className=" md:text-center gap-2.5 animate-float-up delay-[1400ms] wipe-in delay-[500ms]">
                                                <p className="text-text-invert-title text-3xl font-corsa leading-loose">Income Platform</p>
                                            </div>
                                            <div className=" md:text-center md:text-lg gap-2.5  animate-float-up delay-[1600ms] font-poppins">
                                                <p className="opacity-80 text-text-invert-title opacity-8 text-sm leading-loose">For Individuell Blogger's & Influencers</p>
                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col gap-4 mt-6 animate-float-up delay-[1800ms] font-poppins text-sm md:text-md">
                                            <div className="h-9 px-3 md:h-[38px] py-1 bg-white/10 rounded-3xl flex items-center">
                                                <p className="flex-1  text-center text-text-invert-title  leading-loose">100% transparent on BSC Blockchain</p>
                                            </div>
                                            <div className="h-9 px-3 md:h-[38px] py-1 bg-white/10 rounded-3xl flex items-center">
                                                <p className="flex-1 text-center text-text-invert-title  leading-loose">No admins needed - No human involved</p>
                                            </div>
                                        </div>
                                        {isPc&&(
                                            <div className="flex w-full justify-center items-center gap-2.5 flex-wrap content-center text-lg mx-auto mt-[45px]">
                                                <a className="justify-start text-text-invert-default   leading-normal" href={'#zimax-token'}>Zimax Token</a>
                                                <div data-size="16"  className="w-4 h-4 relative overflow-hidden">
                                                    <div className="w-px h-2.5 left-[7px] top-[3px] absolute bg-text-invert-default" />
                                                </div>
                                                <a className="justify-start text-text-invert-default  font-normal font-['Poppins'] leading-normal" href={'#NFT-marketplace'}>NFT Marketplace</a>
                                                <div data-size="16" data-state="Short" data-theme="Regular" className="w-4 h-4 relative overflow-hidden">
                                                    <div className="w-px h-2.5 left-[7px] top-[3px] absolute bg-text-invert-default" />
                                                </div>
                                                <a className="justify-start text-text-invert-default  font-normal font-['Poppins'] leading-normal" href={'#zimax-bank'}>Zimax Bank</a>
                                                <div data-size="16" data-state="Short" data-theme="Regular" className="w-4 h-4 relative overflow-hidden">
                                                    <div className="w-px h-2.5 left-[7px] top-[3px] absolute bg-text-invert-default" />
                                                </div>
                                                <a className="justify-start text-text-invert-default  font-normal font-['Poppins'] leading-normal" href={'#bank15'}>Bank15</a>
                                                <div data-size="16" data-state="Short" data-theme="Regular" className="w-4 h-4 relative overflow-hidden">
                                                    <div className="w-px h-2.5 left-[7px] top-[3px] absolute bg-text-invert-default" />
                                                </div>
                                                <a className="justify-start text-text-invert-default  font-normal font-['Poppins'] leading-normal" href={'#NFT-income-program'}>NFT Income Program</a>
                                                <div data-size="16" data-state="Short" data-theme="Regular" className="w-4 h-4 relative overflow-hidden">
                                                    <div className="w-px h-2.5 left-[7px] top-[3px] absolute bg-text-invert-default" />
                                                </div>
                                                <a className="justify-start text-text-invert-default  font-normal font-['Poppins'] leading-normal" href={'#lottery'}>Lottery</a>
                                            </div>
                                        )}

                                    </Container>
                                    <div className="absolute bottom-[24px] transform -translate-x-1/2 left-1/2 flex flex-col items-center gap-2 animate-float-up delay-[2000ms]">
                                        <div className="text-text-invert-title text-[8px] leading-[8px]">scroll down</div>
                                        <div className="h-9 p-2 rounded-2xl outline outline-[1.5px] outline-offset-[-1.5px] outline-border-default flex justify-center items-start">
                                            <div className="w-1.5 h-1.5 bg-text-invert-title rounded-[3px]" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>}

                </>
            )}
        </div>
    );
}

export default Index;
