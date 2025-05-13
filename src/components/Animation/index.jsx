import {useEffect, useState} from "react";
import logoImg from '@/assets/images/logo/Logo.svg';
import {Container} from "@mantine/core";
import './index.css';
import {Header} from "@/components/Header";

function Index() {
    const [showSectionTwo, setShowSectionTwo] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setShowSectionTwo(true);
            document.body.style.overflow = 'auto';
        }, 5000);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            className={'relative  bg-[radial-gradient(ellipse_71.17%_71.17%_at_50.00%_50.00%,_var(--Background-Primary-filled,_#228BE6)_0%,_#0B2E4D_100%)] overflow-hidden h-[100vh]'}>
            {!showSectionTwo ? (
                <Container className={'text-white pt-[200px] text-center align-center'}>
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
                <div>
                 <Header/>
                    <h2 className={'opacity-80'}>The World's First Decentralized</h2>
                    <i className={'icon-send text-[80px]'}></i>
                    <h2 className={'opacity-8'}>The World's First Decentralized</h2>
                    <h2 className={'opacity-80'}>The World's First Decentralized</h2>
                    <p className="self-stretch opacity-80 justify-center text-Text-Invert-title text-sm  leading-loose">For
                        Individuell Blogger's & Influencers</p>
                    <h2 className={'opacity-8'}>The World's First Decentralized</h2>
                </div>
            )}
        </div>
    );
}

export default Index;
