"use client";

import { useState } from "react";

export default function SearchSection() {
  const [searchType, setSearchType] = useState<"1" | "3">("3");

  return (
    <section className="fullwidth-container secondary" style={{ padding: "40px 0", backgroundColor: "#f5f5f5" }}>
      <div className="maxwidth-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <h2 className="text-center section-title text-2xl font-semibold text-gray-800 mb-6">
          Find your next property in
        </h2>
        
        <div className="search-contain content-search" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <form action="/results" method="post" className="search-form flex flex-wrap gap-4 items-end">
            <input type="hidden" name="propsearchtype" value="" />
            <input type="hidden" name="searchurl" value="/" />
            <input type="hidden" name="market" id="market" value="1" />
            <input type="hidden" name="statustype" value="0" />
            <input type="hidden" name="ccode" value="UK" />
            
            <fieldset className="form-item flex-1 min-w-[250px]" style={{ flex: "1" }}>
              <input
                name="postcodes"
                type="text"
                placeholder="Search Street, Area, Town or Postcode"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#1e7ce8]"
                style={{ width: "100%" }}
              />
            </fieldset>

            <fieldset className="form-item" style={{ minWidth: "150px" }}>
              <select
                name="pricetype"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as "1" | "3")}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#1e7ce8] bg-white cursor-pointer"
              >
                <option value="1">Buy</option>
                <option value="3">Rent</option>
              </select>
            </fieldset>

            <fieldset className="form-item">
              <button
                type="submit"
                className="px-8 py-3 bg-[#1e7ce8] text-white font-medium rounded hover:bg-[#1565c0] transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </fieldset>
          </form>
          
          <div className="search-link mt-3 text-right">
            <a href="#" className="text-sm text-[#1e7ce8] hover:underline">Advanced Search</a>
          </div>
        </div>
      </div>
    </section>
  );
}
