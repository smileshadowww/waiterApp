import styles from './BillInput.module.scss';

const BillInput = props => {

    return <input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="number" min="0" />
}

export default BillInput;
