import Button from "../common/Button";
import Logo from "../common/Logo";
import PurpleCircle from "../common/PurpleCircle";

function Invest() {
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
        <div className="h-2/5 w-3/5 text-white glass-effect rounded-[30px]">
          <p className="text-center text-sm mt-8">What percentage of wallet money you want to auto invest?</p>
        </div>
      </div>
    </div>
  );
}

export default Invest;
