import { Button } from './styles';

interface CommonProps {
    className?: string;
    onClick: Function;
    children: React.ReactNode;
}

export function CustomBtn ({ className, onClick, children }: CommonProps) {
    return (
        <Button className={className} onClick={() => onClick()}>
            {children}
        </Button>
    );
}

