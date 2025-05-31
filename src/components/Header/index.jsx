import logoImg from '../../assets/images/logo/logo-green.png'
import {
    Burger,
    Drawer,
    Group,
    ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './index.module.css';
import {useEffect, useState} from "react";
import clsx from "clsx";
import {links} from "@/content";


export function Header({className}) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const screenHeight = window.innerHeight;

            // Only change styles if scroll past first viewport
            const hasScrolledPastHero = currentScrollY > screenHeight;
            setScrolledPastHero(hasScrolledPastHero);

            // If not past 100vh, always show header
            if (!hasScrolledPastHero) {
                setHidden(false);
            } else {
                if (currentScrollY > lastScrollY) {
                    setHidden(true); // scrolling down
                } else {
                    setHidden(false); // scrolling up
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header className={clsx(classes.header, {
                [classes.scrolled]: scrolledPastHero,
                [classes.hidden]: hidden && scrolledPastHero,
                className
            })}>
                <Group justify="space-between" h="100%" px={16}>
                    <a href={'./'}>
                        <img className={'w-[100px]  h-[30px] md:h-[40px] md:w-[133px] md:mx-auto'} src={logoImg.src} alt={'logo'} />
                    </a>
                    {/*<Group h="100%" gap={0} visibleFrom="sm">*/}
                    {/*    <a href="#" className={classes.link}>*/}
                    {/*        Home*/}
                    {/*    </a>*/}
                    {/*    <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>*/}
                    {/*        <HoverCard.Target>*/}
                    {/*            <a href="#" className={classes.link}>*/}
                    {/*                <Center inline>*/}
                    {/*                    <Box component="span" mr={5}>*/}
                    {/*                        Features*/}
                    {/*                    </Box>*/}
                    {/*                    /!*<IconChevronDown size={16} color={theme.colors.blue[6]} />*!/*/}
                    {/*                </Center>*/}
                    {/*            </a>*/}
                    {/*        </HoverCard.Target>*/}
                    {/*    </HoverCard>*/}
                    {/*    <a href="#" className={classes.link}>*/}
                    {/*        Learn*/}
                    {/*    </a>*/}
                    {/*    <a href="#" className={classes.link}>*/}
                    {/*        Academy*/}
                    {/*    </a>*/}
                    {/*</Group>*/}
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={<img className={'h-[46px]'} src={logoImg.src} alt={'logo'}/>}
                hiddenFrom="sm"
                zIndex={1000000}
                classNames={{body: 'px-[24px]'}}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <div className={'flex flex-col text-[20px] px-[24px]'}>
                        {links.map((link)=>(
                            <a className={'py-[12px] border-b border-gray-4'} onClick={()=>closeDrawer()} href={link.href}>{link.title}</a>
                        ))}
                    </div>
                    <Group justify="center" grow pb="xl" px="md">
                        {/*<Button variant="default">Log in</Button>*/}
                        {/*<Button>Sign up</Button>*/}
                    </Group>
                </ScrollArea>
            </Drawer>
        </>
    );
}