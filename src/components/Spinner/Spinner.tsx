import { SpinnerComponent } from './Spinner.styled';

export type TSpinner = {
  size?: number;
};

const Spinner = ({ size = 48 }: TSpinner) => {
  return <SpinnerComponent size={size}></SpinnerComponent>;
};

export default Spinner;
