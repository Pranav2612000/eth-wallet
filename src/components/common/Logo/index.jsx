import clsx from "clsx";
import Img from "../Img";
import logo from '../../../assets/images/icons/logo.svg';

const Logo = ({className}) => {
  return (
    <button className={clsx("flex justify-center items-center w-auto absolute top-10 left-10", className)}>
      <Img  
        srcSet= {
          [
            {
              'srcSet': [
                logo
              ]
            }
          ]
        }
        isFromAssets={false}
      />
      <p className="ml-4 font-bold text-2xl">
        Dropyourmoney.xyz
      </p>
    </button>
  );
};
export default Logo;
