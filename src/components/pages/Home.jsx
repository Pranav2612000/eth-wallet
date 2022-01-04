import Button from "../common/Button";
function Home() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-6">
      </div>
      <div className="bg-black col-span-6 relative">
        <Button
          variant='dark'
          text='Connect Wallet'
          onClick={() => console.log('connecting wallet...') }
          className="absolute top-10 right-10"
        />
      </div>
    </div>
  );
}

export default Home;
