import s from './Checkbox.module.scss';

type CheckboxProps = {
    name: string;
    label: string;
    id: number;
    isChecked: boolean;
    onChange: () => void;
}

export const Checkbox = ({name, label, id, isChecked, onChange}: CheckboxProps) => {

    return (
        <div className={s.checkbox}>
            <input type="checkbox" name={name} id={`${name}-${id}`} onChange={onChange} checked={isChecked}/>
            <label htmlFor={`${name}-${id}`} className={s.label}>{label}</label>
        </div>
    );
};
