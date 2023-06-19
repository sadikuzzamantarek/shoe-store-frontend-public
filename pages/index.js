import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <Wrapper>
        {/* Heading and Paragraph */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for your Miles
          </div>
          <div className="text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            laboriosam blanditiis eaque modi cum voluptatibus nemo corporis
            provident accusamus quos amet, architecto eos nobis similique nihil
            obcaecati consequuntur laudantium. Exercitationem.
          </div>
        </div>
        {/* Heading and Paragraph ENd*/}
        {/* Product Grid Start */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        {/* Product Grid End */}

      </Wrapper>
    </main>
  );
}
