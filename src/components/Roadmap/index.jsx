import React from 'react';
import Step from "@/components/Roadmap/Step";
import classes from './index.module.css'
const content =[
    {subTitle :'Step 01',
        id:1,
        time:<div className=""><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">4</span><span className="text-text-primary-default text-xl font-normal  leading-10"> 2022</span></div>,
        title:<div className="font-bold "><span className="text-text-primary-default text-xl font-bold  leading-10">Ro</span><span className="text-text-default-default text-xl font-bold  leading-10">a</span><span className="text-text-primary-default text-xl font-bold  leading-10">dm</span><span className="text-text-default-default text-xl font-bold  leading-10">a</span><span className="text-text-primary-default text-xl font-bold  leading-10">p</span></div>,
        body:<div className="list-disc list-inside  text-text-default-default text-xs md:text-lg font-normal  leading-normal"><li>- Analysis, search for vulnerabilities and technical bugs in already existing Auto Staking & Auto Compounding DEX protocols on the DeFi and crypto market</li><li>-Creating concepts and ideas, market research, preparing infrastructure, registering domains, hosts and servers</li><li>- Smart contract development for exclusive ZMX, BNB, USDT</li><li>-Concept design for ZiMax multi-DeFi platform</li><li>-Initial stage of development of unique smart contract</li><li>- Deployment Phase: dApp V1 Dashboard</li><li>- Gitbook Documentation</li><li>- ZiMax token Development</li><li>- ZiMax token staking Smart contract Swap feature</li><li>- Final stage of ZiMax DeFi smart contract development</li></div>
    },
    {subTitle :'Step 02',
        id:2,
        time:<div className=""><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">4</span><span className="text-text-primary-default text-xl font-normal  leading-10">2023</span></div>,
        body:<div className="list-disc list-inside  text-text-default-default text-xs md:text-lg font-normal  leading-normal"><li>-NFT collection creation</li><li>- Development of the second staking smart contract for ZiMax auto staking and compounding for $ZMX token holders</li><li>- Developing  ZiMax Lottery platform</li><li>- Build Phase - dApp v2 Dashboard</li><li>- ZiMax NFT Marketplace launch</li><li>- Adviser partnerships</li><li>- NFT marketing program development</li><li>- Desing of ZiMax NFT Marketings Program</li><li>- ZiMax 3D NFT creation with Artificial intelligence</li></div>
    },
    {subTitle :'Step 03',
        id:3,
        time:<div className=""><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">1</span><span className="text-text-primary-default text-xl font-normal  leading-10"> / Q</span><span className="text-text-default-default text-xl font-normal  leading-10">2</span><span className="text-Text-Primary-default text-xl font-normal  leading-10"> 2025</span></div>,
        body:<div className="list-disc  list-inside text-text-default-default  md:text-lg text-xs font-normal  leading-normal"><li>- Deployment Phase - dApp v2 Dashboard</li><li>- Launch Alpha Version of ZiMax landingpage</li><li>- Deployment phase - Smart contract. Testnet</li><li>- Deployment - MainNet</li><li>- Deployment phase - dApp V1 dashboard</li><li>- Expand Core Team</li><li>- Pre- Launch of ZiMax Defi</li><li>- Start Pre-Sale</li><li>- PR marketing</li><li>- Pre-Launch Marketing</li><li>- Articles in the most famous news publications</li><li>- ZiMax DeFi social networks community building</li><li>-Telegram community</li><li>- $ZMX token listing on Pancakeswap</li><li>- Launch of exclusive ZiMax DeFi platform</li><li>- Start Phase 2 Pre-Sale</li><li>- Advertising integrations with YouTube and Twitter bloggers to promote the $ZMX token and increase its popularity</li></div>
    },
    {subTitle :'Step 04',
        id:4,
        time:<div className=""><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">3</span><span className="text-text-primary-default text-xl font-normal  leading-10"> 2025</span></div>,
        body:<div className="list-disc list-inside text-text-default-default md:text-lg text-xs font-normal  leading-normal"><li>- Start Phase 3 pre-sale</li><li>- Smart contract Audit by CerTik</li><li>- Advertising campaigns on Poocoin, Dextools, and Bscscan ADS resources</li><li>- Onboarding Vloggers and Influencers</li><li>- 10,000 Token Holders</li><li>- PR Marketing Phase 2</li><li>- Fair Launch on PinkSale</li> <li>- Cryptorank Listing</li> </div>
    },
{subTitle :'Step 05',
        id:5,
        time:<div className=""><span className="text-text-primary-default text-xl font-normal  leading-10">Q</span><span className="text-text-default-default text-xl font-normal  leading-10">1</span><span className="text-text-primary-default text-xl font-normal  leading-10"> 2026</span></div>,
        body:<ul className="list-disc list-inside  text-text-default-default text-xs md:text-lg font-normal  leading-normal"><li>- X (Twitter) Marketing Campaign</li><li> - YouTube Marketing Campaign for Vloggers</li><li>- SEO</li><li>- 25,000 token holder</li><li>- Telegram Marketing Campaign</li><li>- CoinMarketCap Listing</li><li>- CEX Listing</li><li>- CoinGecko Listing</li><li>- Celebrities onboarding program 2026</li></ul>
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