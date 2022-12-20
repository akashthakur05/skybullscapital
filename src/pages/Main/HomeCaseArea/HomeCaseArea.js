import React, { useState } from "react";
import { featuredWorksData, categories } from "../../../data/featuredWorksData";
import OneService from "../../../components/OneService/OneService";

const allCategories = ["TOP", ...categories];

const arr = featuredWorksData;
// const uniqueItem = arr.filter(
//   (arr, index, self) =>
//     index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
// );

const regex = /_/g; // Note the 'g' flag, which matches all occurrences of the expression

const trendingItems = arr.filter((arr, index, self) => arr.trending);
const parseCategory = (cat) => cat.replace(regex, " ").toLowerCase();
const HomeCaseArea = () => {
  const [isActive, setIsActive] = useState("all");
  const [filterGalleryItems, setFilterGalleryItems] = useState(trendingItems);

  const filterCategory = (category) => {
    setIsActive(category);
    if (category === "TOP") {
      debugger;
      return setFilterGalleryItems(trendingItems);
    }

    const remainingItems = featuredWorksData.filter(
      (item) => item.category === category
    );
    setFilterGalleryItems(remainingItems);
  };

  return (
    <>
      <section className="case__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section__title section__title-3 text-center mb-45">
                <span>We Offer</span>
                <h2>Our Services.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div
                className="case__menu text-center mb-40 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="masonary-menu filter-button-group">
                  {allCategories.map((category, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => filterCategory(category)}
                        className={
                          isActive === category
                            ? "active text-capitalize"
                            : "text-capitalize"
                        }
                      >
                        {parseCategory(category)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {filterGalleryItems.map((item, index) => (
              <OneService
                slug={item.slug}
                key={index}
                galleryItem={item}
                index={index}
                filterGalleryItems={filterGalleryItems}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCaseArea;
