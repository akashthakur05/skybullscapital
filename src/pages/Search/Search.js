import React from "react";
import PageHelmet from "./../../components/shared/PageHelmet";
import CommonPageHeader from "./../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "./../../components/CommonCtaArea/CommonCtaArea";
import HomeHeader from './../Main/HomeHeader/HomeHeader';
import HomeFooter from './../Main/HomeFooter/HomeFooter';

const Search = () => {
  return (
    <>
      <PageHelmet pageTitle="Search Services Page" />
      <HomeHeader />
      <CommonPageHeader title="Search" subtitle="Services" />
      <div class="blog-area pt-120 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 blog-post-items">
              <section class="no-results not-found">
                <header class="page-header">
                  <h1 class="page-title blog-search-title">Nothing Found</h1>
                </header>

                <div class="pageontent blog-search-content  mt-20 mb-10">
                  <p>
                    Sorry, but nothing matched your search terms. Please try
                    again with some different keywords.
                  </p>
                  <div class="sidebar__widget-content">
                    <div class="search">
                      <form
                        class="sidebar-widget-form"
                        action="https://bdevs.net/wp/zibber/"
                        method="get"
                      >
                        <input
                          type="text"
                          value="asdasd"
                          required=""
                          name="s"
                          placeholder="Search"
                          data-ddg-inputtype="unknown"
                        />
                        <button type="submit">
                          {" "}
                          <i class="far fa-search"></i>{" "}
                        </button>
                      </form>
                    </div>
                  </div>{" "}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <CommonCtaArea
        data={{ link2: "/faq", text2: "FAQ", link1: "", text1: "" }}
      />

      <HomeFooter/>
    </>
  );
};

export default Search;
