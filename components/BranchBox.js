import React from "react";
import { motion } from "framer-motion";

const BranchBox = () => {
  return (
    <>
      <div className="sectionBox pd-common bg1">
        <div className="container">
          <div className="HeaderBox">
            <motion.div
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="HdrT1 text-center color-fff">Our Branches</div>
              <div className="HdrT2 text-center color-fff">
                Firas Sweets uses only the highest quality ingredients. Our team
                continuously supervises the quality, which helps keep our
                products to the highest standards
              </div>
            </motion.div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <ul className="branchList">
                <li className="BLactive">Dubai</li>
                <li>Sharja</li>
                <li>Ajman</li>
                <li>RAK</li>
                <li>Abu Dhabi</li>
                <li>Al Ain</li>
                <li>Umm Al Quwain</li>
                <li>Al Fujairah</li>
                <li>Khor Fakkan</li>
                <li>Al Dhaid</li>
              </ul>
            </div>
            <div className="col-md-10">
              <div className="branchWhiteBox">
                <h3>Branches in Dubai</h3>
                <div className="bracnhListBox" id="bracnh-style-2">
                  <div className="d-flex">
                    <div className="branchName">Sheikh Zayad Road</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Al Barsha</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Motor City</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Sheikh Zayad Road</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Al Barsha</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Motor City</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Sheikh Zayad Road</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Al Barsha</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Motor City</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Sheikh Zayad Road</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Al Barsha</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Motor City</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Sheikh Zayad Road</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Al Barsha</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="branchName">Motor City</div>
                    <div className="branchNo">
                      <img src="/icons/branchNo.png" />
                      &nbsp;04 - 547 17 77
                    </div>
                    <div className="branchTime">
                      <img src="/icons/branchTime.png" />
                      &nbsp; Mon - Sun 12pm to12am
                    </div>
                    <div className="branchBtn">
                      <button>
                        Get Direction &nbsp; <img src="/icons/branchBtn.png" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BranchBox;
