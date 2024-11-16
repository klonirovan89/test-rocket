export type HotelsType = {
    id: number;
    name: string;
    description: string;
    price: number;
    country: string;
    type: string;
    stars: number;
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

export type Prices = {
    minValue: number | null;
    maxValue: number | null;
}

export type Filter = {
    country: CheckboxType[];
    type: CheckboxType[];
    stars: CheckboxType[];
    reviews: number | null;
    price: Prices;
}