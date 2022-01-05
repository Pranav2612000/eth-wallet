import clsx from "clsx";

const baseLocation = `../../../assets/images/`;

/*
import logo from '../../../assets/images/icons/logo.svg';
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
 */
const Img = ({ srcSet, className, width, height, alt, isFromAssets}) => {

  if (isFromAssets != false) {
    isFromAssets = true;
  }

  const _srcSet = srcSet;
  const getSourceElements = () => {
    return _srcSet.map((setItem: srcSetType | string, index) => {
      if (typeof setItem === "string") {
        return "";
      }
      return (
        <source
          key={index}
          media={setItem.media}
          srcSet={setItem.srcSet.map((src) => {
            if (isFromAssets) return baseLocation.concat(src.trim());
            return src;
          }).join(", ")}
          sizes={setItem.sizes}
        />
      );
    });
  };

  return (
    <picture>
      {getSourceElements()}
      <img
        className={clsx(className)}
        width={width}
        height={height}
        alt={alt}
        srcSet={srcSet[0].srcSet.join(", ")}
      />
    </picture>
  );
};
export default Img;
