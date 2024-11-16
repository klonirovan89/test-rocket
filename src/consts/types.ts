export type HotelsType = {
    id: number;
    name: string;
    description: string;
    price: number;
    country: string;
    type: string;
    stars: number;
    isBooked: boolean;
    reviewsCount: number;
}

export type FilterProps = {
    type: string,
    title: string,
    options?: string[],
    value?: any,
    onChange: (type: string, value: any) => void;
};

export type CheckboxType = {
    label: string,
    isChecked: boolean,
}