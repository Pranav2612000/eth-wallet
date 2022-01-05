import Button from "../common/Button";

function Home() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-6">
      </div>
      <div className="bg-black col-span-6 relative flex items-center justify-center">
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
