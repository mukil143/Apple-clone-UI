import React from "react";
import { FaAngleDown,FaLine } from "react-icons/fa6";
const Footer = () => {
  let links = [
    {
      name: "Shop and Learn",
      href: "#",
    },
    {
      name: "Apple Wallet",
      href: "#",
    },
    {
      name: "Account",
      href: "#",
    },
    {
      name: "Entertainment",
      href: "#",
    },
    {
      name: "Apple Store",
      href: "#",
    },
    {
      name: "For Business",
      href: "#",
    },
    {
      name: "For Education",
      href: "#",
    },
    {
      name: "For Healthcare",
      href: "#",
    },
    {
      name: "Apple Values",
      href: "#",
    },
    {
      name: "About Apple",
      href: "#",
    },
  ];


  let Copyright=[
    {
        name:"Privacy Policy",
        href:"#"
    },
    {
        name:"Terms of Use",
        href:"#"
    },
    {
        name:"Sales Policy",  
        href:"#"
    },
    {
        name:"Legal ",
        href:"#"
    },
    {
        name:"Site Map",
        href:"#"
    },
  ]
  return (
    <footer className="mt-5 py-5 bg-gray-100 ">
      <section className="px-5 ">
        <section className="text-xs flex flex-col space-y-2  ">
          <div>
            <p>
              ◊No Cost EMI is available with the purchase of an{" "}
              <a
                href=""
                className="underline hover:cursor-pointer text to-black"
              >
                eligible product
              </a>{" "}
              made using qualifying cards on 3-, 6-, 9- or 12-month tenures from
              most leading card issuers. Eligible AirPods, HomePod and Beats
              products are available with No Cost EMI on 3- and 6-month tenures
              only. Monthly pricing is rounded to the nearest rupee. Exact
              pricing will be provided by your card issuer, subject to your card
              issuer’s terms and conditions. Minimum order spend applies as per
              your card issuer’s threshold. No Cost EMI is not available to
              business customers and cannot be combined with Apple Store for
              Education or Corporate Employee Purchase Plan pricing. Card
              eligibility is subject to terms and conditions between you and
              your card issuer. Offer may be revised or withdrawn at any time
              without any prior notice.{" "}
              <a href="" className="underline cursor-pointer">
                Terms apply.
              </a>
            </p>
          </div>
          <div>
            <p>Representative example:</p>
          </div>
          <div>
            <p>
              A purchase of ₹79900.00 repaid over 12 months with an interest
              rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires
              monthly payments of ₹6658.00. Total amount payable: ₹79900.00.
            </p>
          </div>
          <div>
            <p>
              ‡Instant cashback is available with the purchase of an eligible
              product with qualifying American Express, Axis Bank and ICICI Bank
              cards only. Minimum transaction value of ₹10001.00 applies. Click
              here to see instant cashback amounts and eligible devices. Instant
              cashback is available for up to two orders per rolling 90-day
              period with an eligible card. Card eligibility is subject to terms
              and conditions between you and your card issuer. Total transaction
              value is calculated after any trade-in credit or eligible discount
              is applied. Any subsequent order adjustment(s) or cancellation(s)
              may result in instant cashback being recalculated, and any refund
              may be adjusted to account for instant cashback clawback; this may
              result in no refund being made to you. Offer may be revised or
              withdrawn at any time without any prior notice. Additional terms
              apply. Instant cashback is not available to Business customers and
              cannot be combined with Apple Store for Education or Corporate
              Employee Purchase Plan pricing. Multiple separate orders cannot be
              combined for instant cashback.
            </p>
          </div>
          <div>
            <p>
              1. Available in two models: AirPods 4 and AirPods 4 with Active
              Noise Cancellation.
            </p>
          </div>
          <div>
            <p>
              Apple Intelligence is available in beta on all iPhone 16 models,
              iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad
              and Mac models with M1 and later, with Siri and device language
              set to Chinese (Simplified), English (Australia, Canada, India,
              Ireland, New Zealand, Singapore, South Africa, UK or US), French,
              German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish,
              as part of an iOS 18, iPadOS 18 and macOS Sequoia software update,
              with more languages coming over the course of the year, including
              Vietnamese. Some features may not be available in all regions or
              languages.
            </p>
          </div>
          <div>
            <p>A subscription is required for Apple TV+.</p>
          </div>
          <div>
            Features are subject to change. Some features, applications and
            services may not be available in all regions or all languages.
          </div>
          <hr className="mt-2" />
        </section>

        <section className="mt-8 md:hidden">
          <div className="flex flex-col  space-y-3">
            {links.map((link, index) => (
              <button
                key={index}
                className="flex  items-center pb-2 justify-between border-b-1 text-sm"
              >
                {link.name} <FaAngleDown className="inline" />{" "}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-5 hidden justify-around md:flex">
            <div >
                <div>   
                    
                <div className="text-sm font-bold">
                <p>Shop and Learn</p>
                </div>
                <div>
                    <ul className="text-sm *:hover:underline cursor-pointer">
                        <li>Store</li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>Airpods</li>
                        <li>TV & Home</li>
                        <li>AirTag</li>
                        <li>Accessories</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
                </div>

                <div className="mt-5">
                    <div  className="text-sm font-bold" >

                    <p>Apple Wallet</p>
                    </div>
                    <div>
                        <ul className="text-sm *:hover:underline cursor-pointer">
                            <li>Wallet</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div >
                <div>   
                    
                <div className="text-sm font-bold *:hover:underline cursor-pointer">
                <p>Accounts</p>
                </div>
                <div>
                    <ul className="text-sm *:hover:underline cursor-pointer">
                        <li>Manage Your Apple Account</li>
                        <li>Apple Store Account</li>
                        <li>iCloud.com</li>                       
                    </ul>
                </div>
                </div>

                <div className="mt-5" >
                    <div  className="text-sm font-bold" >

                    <p>Entertainment</p>
                    </div>
                    <div>
                        <ul className="text-sm *:hover:underline cursor-pointer">
                            <li>Apple One</li>
                            <li>Apple TV+</li>
                            <li>Apple Music</li>
                            <li>Apple Arcade</li>
                            <li>Apple Podcast</li>
                            <li>Apple Books</li>
                            <li>App Store</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div >
                <div>   
                    
                <div className="text-sm font-bold">
                <p>Apple Store</p>
                </div>
                <div>
                    <ul className="text-sm *:hover:underline cursor-pointer">
                        <li>Find a Store</li>
                        <li>Genius Bar</li>
                        <li>Today at Apple</li>
                        <li>Group Reservation</li>
                        <li>Apple Camp</li>
                        <li>Apple Trade In</li>
                        <li>Ways to Buy</li>
                        <li>Recycling Programe</li>
                        <li>Order Status</li>
                        <li>Shopping Help</li>
                    </ul>
                </div>
                </div>

                
            </div>
            <div >
                <div>   
                    
                <div className="text-sm font-bold">
                <p>Shop and Learn</p>
                </div>
                <div>
                    <ul className="text-sm *:hover:underline cursor-pointer">
                        <li>Store</li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>Airpods</li>
                        <li>TV & Home</li>
                        <li>AirTag</li>
                        <li>Accessories</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
                </div>

                <div className="mt-5">
                    <div  className="text-sm font-bold" >

                    <p>Apple Wallet</p>
                    </div>
                    <div>
                        <ul className="text-sm *:hover:underline cursor-pointer">
                            <li>Wallet</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </section>
        <hr className="my-5 hidden md:block"/>

        <section className="mt-5 flex flex-col     space-y-3">
          <div className="text-sm" >
            <p>
              More ways to shop:{" "}
              <a href="" className="underline text-sky-400">
                Find an Apple Store
              </a>{" "}
              or{" "}
              <a href="" className="underline text-sky-400">
                other retailer
              </a>{" "}
              near you. Or call{" "}
              <a href="" className="underline text-sky-400">
                000800 040 1966
              </a>
              .
            </p>
          </div>
          <div>
            India
          </div>
          <div className="text-sm md:text-lg">
            <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
            <div className=" container w-full flex text-xs sm:text-sm md:text-sm gap-0.5">
                {Copyright.map((name,index)=>(
                    <p key={index} className="flex "> <a href="">{name.name}</a> <span> | </span></p>
                ))}
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
