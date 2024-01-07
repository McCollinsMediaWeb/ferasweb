import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const BranchBox = () => {
  const { t: translate } = useTranslation("location");
  const { locale, locales, push } = useRouter();
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [selectedState, setSelectedState] = useState("Dubai");
  const [selectedData, setSelectedData] = useState();
  const [selectedType, setSelectedType] = useState("sweet");

  useEffect(() => {
    axios
      .get("https://feras-backend.vercel.app/api/location")
      .then(function (response) {
        setData3(response.data.data);
      });
    axios
      .get("https://feras-backend.vercel.app/api/sweetlocation")
      .then(function (response) {
        setData(response.data.data);
        setData2(response.data.data);
        setSelectedData(
          response.data.data.filter((item) => item.catName === selectedState)[0]
        );
      });
  }, []);

  useEffect(() => {
    setSelectedData(data?.filter((item) => item.catName === selectedState)[0]);
  }, [selectedState]);

  const sweetFun = () => {
    setSelectedData(data2?.filter((item) => item.catName === selectedState)[0]);
    setData(data2);
    setSelectedType("sweet");
  };

  const restFun = () => {
    setSelectedData(data3?.filter((item) => item.catName === selectedState)[0]);
    setData(data3);
    setSelectedType("resto");
  };

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
              <div className="HdrT1 text-center color-gold">
                {translate("oBranch")}
              </div>

              <div className="HdrT2 text-center color-gold">
                {translate("branchDesc")}
              </div>
            </motion.div>
            <div className="locBtn">
              <button
                onClick={sweetFun}
                className={selectedType == "sweet" ? "active" : null}
              >
                {translate("fsl")}
              </button>
              <button
                onClick={restFun}
                className={selectedType != "sweet" ? "active" : null}
              >
                {translate("frl")}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <ul className="branchList">
                {data &&
                  data.map((item) => (
                    <li
                      className={selectedState == item.catName && "BLactive"}
                      onClick={() => {
                        setSelectedState(item.catName);
                      }}
                    >
                      {locale === "en" ? item.catName : item.catArName}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-md-10">
              <div className="branchWhiteBox">
                {/* <h3>Branches in Dubai</h3> */}
                <div className="bracnhListBox" id="bracnh-style-2">
                  {selectedData &&
                    selectedData.prd.map((i) => (
                      <div className="d-flex">
                        <div className="branchName">
                          {locale === "en" ? i.name : i.arName}
                        </div>
                        <div className="branchNo" style={{ direction: "ltr" }}>
                          <img src="/icons/branchNo.png" alt="Branch Number" />
                          &nbsp;{i.phone}
                        </div>
                        <div className="branchTime">
                          <img src="/icons/branchTime.png" alt="Branch Time" />
                          &nbsp;{" "}
                          {locale === "en" ? "Mon - Sun " : "  الاثنين - الأحد"}
                          &nbsp;{i.time}
                        </div>
                        {/* <div className="branchBtn">
                          <a
                            href={i.url}
                            target="_blank"
                            style={{ padding: "5px 0" }}
                          >
                            <button style={{ cursor: "pointer" }}>
                              Get Direction &nbsp;
                              <img
                                src="/icons/branchBtn.png"
                                alt="Branch Button"
                              />
                            </button>
                          </a>
                        </div> */}
                      </div>
                    ))}

                  {/* <div className="d-flex">
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
                  </div> */}
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
