import ProductDetailCarouse from "@/components/ProductDetailCarouse";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <div
      className="
    w-full md:py-20"
    >
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailCarouse />
          </div>
          {/* left column end */}
          {/* Right column start */}

          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">Men's Golf Shoes</div>
            {/* Product Price */}
            <div className="text-lg font-semibold">BDT : 1234.50</div>
            {/* taxes */}
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black text-black/[0.5] mb-20">
              {`(Also included all duties and charge)`}
            </div>
            {/* Product size and range section start */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                {/* Heading Start */}
                <div className="text0-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
                {/* Heading End */}
              </div>
              {/* Size Selection Start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 10.5
                </div>
              </div>
              {/* Size selection End */}
              {/* Add to Cart Button Start*/}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 my-3 hover:opacity-75">
                Add to Cart
              </button>
              {/* Add to Cart Button End*/}

              {/* WHISHLIST BUTTON START */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* WHISHLIST BUTTON END */}

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  {/* <ReactMarkdown>{p.description}</ReactMarkdown> */}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Harum impedit fugit necessitatibus sunt error, consequatur,
                  facilis laboriosam numquam non maxime eligendi, ad illum omnis
                  neque nobis saepe. Voluptate, magnam optio. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quibusdam velit
                  repellat aliquid sed, maiores quis cum minus mollitia quas
                  perferendis. Quae veritatis magni neque amet labore impedit
                  maxime quas iste. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Minus, illo provident dolorem tempore quam
                  fuga expedita quaerat, tempora cumque commodi, nobis iusto
                  voluptatibus et explicabo adipisci! Deserunt sed saepe eos.
                </div>
              </div>
            </div>
          </div>
          {/* Right column end */}
        </div>
        <RelatedProduct />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
