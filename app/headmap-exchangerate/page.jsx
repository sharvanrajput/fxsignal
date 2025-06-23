import Exchangerate from "@/components/widgets/exchangeRate/Exchangerate"
import Heatmap from "@/components/widgets/headmap/Heatmap"

const page = () => {
  return (
    <main>
      <section className="pt-50 pb-10 bg-[url('/img/tools_pages_banner_shape.png')] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <h5 className='text-light-yellow font-bold'>Currency Converter</h5>
          <h2 className="text-4xl text-heading-c1  font-bold inline-block relative z-10">
            Real-Time Currency Conversion for Smart Trading
          </h2>
          <p className="text-para-dark  mt-5 mb-10 text-lg">
            Instantly convert major currencies with live exchange rates.
          </p>
          <h4 className="text-2xl text-heading font-bold mb-10"> Heatmap</h4>
          <Heatmap />
        </div>
      </section>

      <section className="pt-10 pb-10">
        <div className="container">
            <h4 className="text-2xl text-heading font-bold mb-10 ">
                Exchange Rate
            </h4>
          <Exchangerate />
        </div>
      </section>
    </main>
  );
};

export default page;
