import { useState } from "react";
import Button from "../common/Button";
import Logo from "../common/Logo";
import PurpleCircle from "../common/PurpleCircle";
import Slider from "../common/Slider";
import Img from "../common/Img";
import ethereumLogo from '../../assets/images/icons/ethereum-light.svg'

function Invest() {
  const [total, setTotal] = useState(0); 
  const [lending, setLending] = useState(0); 
  const [staking, setStaking] = useState(0); 
  const [swaping, setSwaping] = useState(0); 

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-12 lg:col-span-6 string-bg pt-10 px-16">
        <Logo/>
        <PurpleCircle className={"w-[148px] h-[148px] top-[65%] left-[-60px]"}/>
        <h2 className="mt-[30vh] text-[3.25rem] leading-[68px]">
          Choose your <br/>
          investing <br/>
          options wisely.
        </h2>
      </div>
      <div className="bg-black col-span-12 lg:col-span-6 relative flex items-center justify-center">
        <PurpleCircle className={"w-[111px] h-[111px] top-[calc(30%-55px)] left-[calc(20%-55px)]"}/>
        <PurpleCircle className={"w-[240px] h-[240px] top-[calc(70%-120px)] left-[calc(80%-120px)]"}/>
        <Button
          variant='dark'
          text='Connect Wallet'
          onClick={() => console.log('connecting wallet...') }
          className="absolute top-10 right-10"
        />
        <div className="w-3/5 text-white glass-effect rounded-[30px] px-14 py-8">
          <p className="text-bold text-sm">What percentage of wallet money you want to auto invest?</p>
          <div className="mt-10">
            <Slider setValue={setTotal}/>
            <p className="text-center mt-3">{total}%</p>
          </div>
          <div>
            <div className="flex justify-between mt-8">
              <p> Lending [ {lending}% ] </p>
              <div className="flex justify-center items-center px-8 bg-purple-gradient rounded-sm">
                <Img  
                  srcSet= {
                    [
                      {
                        'srcSet': [
                          ethereumLogo 
                        ]
                      }
                    ]
                  }
                  isFromAssets={false}
                />
                <span className="ml-2">60</span>
              </div>
            </div>
            <div className="mt-5">
              <Slider setValue={setLending}/>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-8">
              <p> Staking [ {staking}% ] </p>
              <div className="flex justify-center items-center px-8 bg-purple-gradient rounded-sm">
                <Img  
                  srcSet= {
                    [
                      {
                        'srcSet': [
                          ethereumLogo 
                        ]
                      }
                    ]
                  }
                  isFromAssets={false}
                />
                <span className="ml-2">60</span>
              </div>
            </div>
            <div className="mt-5">
              <Slider setValue={setStaking}/>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex justify-between mt-8">
              <p> Swaping [ {swaping}% ] </p>
              <div className="flex justify-center items-center px-8 bg-purple-gradient rounded-sm">
                <Img  
                  srcSet= {
                    [
                      {
                        'srcSet': [
                          ethereumLogo 
                        ]
                      }
                    ]
                  }
                  isFromAssets={false}
                />
                <span className="ml-2">60</span>
              </div>
            </div>
            <div className="mt-5">
              <Slider setValue={setSwaping}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invest;
