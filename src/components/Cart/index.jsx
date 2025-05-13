import React from 'react';
import { Button, Center, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './index.module.css';

function Index({
                   title,
                   className,
                   children,
                   isMore = true,
                   height = '', // default value if not provided
    titleClassName,number,subTitle,img
               }) {
    const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);

    // Calculate reduced height (height - 50px)
    const gradientHeight = typeof height === 'string' && height.endsWith('px')
        ? `${parseInt(height) - 150}px`
        : `calc(${height} - 50px)`;

    return (
        <>
            <div
                className={`${className}  relative cart mt-[24px] ${number?'pt-[60px]':''} p-6 bg-gradient-to-b from-gray-100 to-blue-100 rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-400`}
                style={{ height: height }}
            >
                {number&&<div className={'text-[134px] font-normal absolute top-[-50px] left-2 text-blue-600 opacity-10'}>{number}</div>}
                <div className={`${titleClassName}  text-[20px] mb-[16px] font-bold`}>{title}</div>
                <div className={'mt-[8px]'}>{subTitle}</div>
                {img&&<img alt={'img'} src={img}/>}
                <div className=" relative overflow-hidden">

                    <div className={classes['gradiant-cart']}>{children}</div>

                    <Center>
                        {isMore && (
                            <Button
                                variant="subtle"
                                size="md"
                                color="blue"
                                rightSection={<i className="icon-chevron"></i>}
                                onClick={openDrawer}
                            >
                                Read more
                            </Button>
                        )}
                    </Center>
                </div>

                {isMore && (
                    <Drawer
                        opened={drawerOpened}
                        onClose={closeDrawer}
                        position="bottom"
                        withCloseButton={false}
                        classNames={{
                            title: 'w-full text-blue-600 font-bold text-[18px]',
                            header: 'w-full',
                        }}
                        size="100%"
                        title={
                            <div className="w-full flex justify-between items-center text-Primary">
                                {title}
                                <div
                                    onClick={closeDrawer}
                                    className="w-[40px] h-[20px] cursor-pointer bg-Background-Gray-light rounded-3xl inline-flex justify-center items-center"
                                >
                                    {/* SVG Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12Z"
                                            fill="#212529"
                                        />
                                    </svg>
                                </div>
                            </div>
                        }
                    >
                        <p>{children}</p>
                    </Drawer>
                )}
            </div>
        </>
    );
}

export default Index;
