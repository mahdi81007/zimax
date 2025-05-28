import contractImg from "@/assets/images/contract.png";
import web3Img from "@/assets/images/web3.png";
import blockchainImg from "@/assets/images/blockchain.png";
import defiImg from "@/assets/images/defi.png";
import ntfImg from "@/assets/images/nft.png";
import binanceImg from '@/assets/images/binance.png'
import metamaskImg from '@/assets/images/metamask.png'
import  './index.css'
const partnerImages = [web3Img, blockchainImg, defiImg, ntfImg, binanceImg, metamaskImg];

function Index() {
    return (
        <div className="w-full mt-[80px] max-w-[1436px] p-6 bg-background-primary-filled rounded-3xl inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <p className="text-center text-text-invert-title text-lg leading-relaxed">
                KYC & audit reports
            </p>
            <img src={contractImg.src} className="w-24 h-11 mt-2" alt="contract-img" />
            <p className="mt-4 text-center text-text-invert-title text-lg leading-relaxed">
                Technology partners
            </p>

            <div className="slider-container">
                <div className="slider-track">
                    {[...partnerImages, ...partnerImages].map((img, idx) => (
                        <img key={idx} src={img.src} className="slider-img" alt={`partner-${idx}`} />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Index;