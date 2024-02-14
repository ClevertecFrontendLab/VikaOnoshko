import { Button } from 'antd';

import './button.less';

type ButtonProps = {
    className?: string;
    type?: 'primary' | 'secondary' | 'dashed' | 'link' | 'text';
    size?: 'medium' | 'large';
    children: React.ReactNode;
};

export const MyButton = ({
    size = 'medium',
    type = 'primary',
    children,
    className = '',
}: ButtonProps) => {
    const classList: string[] = ['button', `button_${size}`, `button_${type}`, className];

    return <Button className={classList.join(' ')}>{children}</Button>;
};
