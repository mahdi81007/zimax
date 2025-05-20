import React from 'react';
import Step from "@/components/Roadmap/Step";
import classes from './index.module.css'
const content =[
    {subTitle :'Step 01',
        id:1,
        time:<div className="justify-center"><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">4</span><span className="text-text-primary-default text-xl font-normal  leading-10"> 2022</span></div>,
        title:<div className="font-bold justify-center"><span className="text-text-primary-default text-xl font-bold  leading-10">Ro</span><span className="text-text-default-default text-xl font-bold  leading-10">a</span><span className="text-text-primary-default text-xl font-bold  leading-10">dm</span><span className="text-text-default-default text-xl font-bold  leading-10">a</span><span className="text-text-primary-default text-xl font-bold  leading-10">p</span></div>,
        body:<div className="list-disc justify-center text-text-default-default text-xs font-normal  leading-normal">- Analysis, search for vulnerabilities and technical bugs in already existing Auto Staking & Auto Compounding DEX protocols on the DeFi and crypto market<br/>-Creating concepts and ideas, market research, preparing infrastructure, registering domains, hosts and servers<br/>- Smart contract development for exclusive ZMX, BNB, USDT<br/>-Concept design for ZiMax multi-DeFi platform<br/>-Initial stage of development of unique smart contract<br/>- Deployment Phase: dApp V1 Dashboard<br/>- Gitbook Documentation<br/>- ZiMax token Development<br/>- ZiMax token staking Smart contract Swap feature<br/>- Final stage of ZiMax DeFi smart contract development</div>
    },
    {subTitle :'Step 02',
        id:2,
        time:<div className="justify-center"><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">4</span><span className="text-text-primary-default text-xl font-normal  leading-10">2023</span></div>,
        body:<div className="list-disc justify-center text-text-default-default text-xs font-normal  leading-normal">-NFT collection creation<br/>- Development of the second staking smart contract for ZiMax auto staking and compounding for $ZMX token holders<br/>- Developing  ZiMax Lottery platform<br/>- Build Phase - dApp v2 Dashboard<br/>- ZiMax NFT Marketplace launch<br/>- Adviser partnerships<br/>- NFT marketing program development<br/>- Desing of ZiMax NFT Marketings Program<br/>- ZiMax 3D NFT creation with Artificial intelligence</div>
    },
    {subTitle :'Step 03',
        id:3,
        time:<div className="justify-center"><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">1</span><span className="text-text-primary-default text-xl font-normal  leading-10"> / Q</span><span className="text-text-default-default text-xl font-normal  leading-10">2</span><span className="text-Text-Primary-default text-xl font-normal  leading-10"> 2025</span></div>,
        body:<div className="list-disc justify-center text-text-default-default text-xs font-normal  leading-normal">- Deployment Phase - dApp v2 Dashboard<br/>- Launch Alpha Version of ZiMax landingpage<br/>- Deployment phase - Smart contract. Testnet<br/>- Deployment - MainNet<br/>- Deployment phase - dApp V1 dashboard<br/>- Expand Core Team<br/>- Pre- Launch of ZiMax Defi<br/>- Start Pre-Sale<br/>- PR marketing<br/>- Pre-Launch Marketing<br/>- Articles in the most famous news publications<br/>- ZiMax DeFi social networks community building<br/>-Telegram community<br/>- $ZMX token listing on Pancakeswap<br/>- Launch of exclusive ZiMax DeFi platform<br/>- Start Phase 2 Pre-Sale<br/>- Advertising integrations with YouTube and Twitter bloggers to promote the $ZMX token and increase its popularity</div>
    },
    {subTitle :'Step 04',
        id:4,
        time:<div className="justify-center"><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">3</span><span className="text-text-primary-default text-xl font-normal  leading-10"> 2025</span></div>,
        body:<div className="list-disc justify-center text-text-default-default text-xs font-normal  leading-normal">- Start Phase 3 pre-sale<br/>- Smart contract Audit by CerTik<br/>- Advertising campaigns on Poocoin, Dextools, and Bscscan ADS resources<br/>- Onboarding Vloggers and Influencers<br/>- 10,000 Token Holders<br/>- PR Marketing Phase 2<br/>- Fair Launch on PinkSale<br/>- Cryptorank Listing</div>
    }, {subTitle :'Step 05',
        id:5,
        time:<div className="justify-center"><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">1</span><span className="text-text-primary-default text-xl font-normal  leading-10"> 2026</span></div>,
        body:<div className="list-disc justify-center text-text-default-default text-xs font-normal  leading-normal">- X (Twitter) Marketing Campaign<br/>- YouTube Marketing Campaign for Vloggers<br/>- SEO<br/>- 25,000 token holder<br/>- Telegram Marketing Campaign<br/>- CoinMarketCap Listing<br/>- CEX Listing<br/>- CoinGecko Listing<br/>- Celebrities onboarding program 2026</div>
    }
]

function Index() {
    return (
        <div className={'mt-[80px]'}>
            {
                content.map((item)=>(
                    <Step
                        id={item.id}
                        title={item?.title}
                    className={classes.cards}
                        subTitle={item.subTitle}
                    time={item.time}
                    children={item.body}
                    />
                ))
            }
        </div
        >
    );
}

export default Index;