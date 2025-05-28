import { useViewportSize } from '@mantine/hooks';

export function useIsDesktop() {
    const { width: screenWidth } = useViewportSize();
    return screenWidth >= 768;
}
