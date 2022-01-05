import Button from "../common/Button";
import Logo from "../common/Logo";
import PurpleCircle from "../common/PurpleCircle";

function Home() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-12 lg:col-span-6 string-bg pt-10 px-16">
        <Logo/>
        <PurpleCircle className={"w-[130px] h-[130px] top-36 left-4"}/>
        <div className="mt-36 relative z-10">
          <h2 className="text-[3.25rem] leading-[68px]"> Easiest and <br/> fastest way to <br/> invest your <br/> wallet currency. </h2>
          <div>
            <h4 className="mt-20">How it works?</h4>
            <ul className="pl-3 mt-7 text-[26px] leading-[32px]" type="circle">
              <li>Connect your wallet.</li>
              <li>Decide how much you want to invest.</li>
              <li>Select your protocol.</li>
              <li>
                <span class="text-[#9362dc]">Happy </span>
                <span class="text-[#e95569]">Investing</span></li>
            </ul>
          </div>
        </div>
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
          <h2 className="text-center px-8 mt-24">Drop Your Money</h2>
          <p className="text-center text-sm mt-8">Connect your wallet to start</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
