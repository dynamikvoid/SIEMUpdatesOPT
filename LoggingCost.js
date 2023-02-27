import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoggingCost.css";
import MultiSelectIV1 from "../components/MultiSelectIV1";
import MultiSelectIV2 from "../components/MultiSelectIV2";
import MultiSelectIV3 from "../components/MultiSelectIV3";
import RangeSlider from "../components/rangeSlider";
import StackedAreaChart from "../components/StackedAreaChart";
import ToggleSwitch from "../components/ToggleSwitch";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const LoggingCost = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/05-payment-sel");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/04-exploration");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/02-logging-cost");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/01-alert-summary");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/03-cost-analysis");
  }, [navigate]);

  const onButtonContainer5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);
  // console.log("checkedState ", checkedState);
  const [toggle, setToggle] = useState('');
  const checkedState = (val) => {
    setToggle(val);
    console.log("checkedState ", val);
  };
  return (
    <div className="logging-cost4">
      <div className="siem-ingestion-volume-by-parent">
        <div className="siem-ingestion-volume2">{`SIEM Ingestion Volume by `}</div>
        <div
          className="value22"
          style={{ width: 150, marginLeft: 750, marginTop: -6 }}
        >
          {" "}
          Source Systems
          <MultiSelectIV1 />
        </div>
        <div
          className="value22"
          style={{ width: 150, marginLeft: 550, marginTop: -63 }}
        >
          {" "}
          Table
          <MultiSelectIV2 />
        </div>
        <div className="overall-siem-ingestion-volume-parent">
          <div className="overall-siem-ingestion3">
            Overall SIEM Ingestion Volume
          </div>
          <div className="group-child70" />
          <div className="nov-12-20222">Nov 12, 2022</div>
          <div className="dec-12-20222">Dec 12, 2022</div>
          <div className="jan-12-20232">Jan 12, 2023</div>
          <div className="feb-12-2023">Feb 12, 2023</div>
          <img className="group-child71" alt="" src="../line-12.svg" />
          <img className="group-child72" alt="" src="../polygon-12.svg" />
          <div className="gb10">11.2GB</div>
          <div className="gb11">16.4GB</div>
          <div className="gb12">16.9GB</div>
          <div className="autocomplete-parent">
            <div className="autocomplete10">
              <div className="wrapper20">
                <div className="field69">
                  <div className="prefix69">
                    <div className="icon189">
                      <img
                        className="starfilled-icon178"
                        alt=""
                        src="../starfilled120.svg"
                      />
                    </div>
                  </div>
                  <div className="text-wrapper69">
                    <div className="values20">
                      <div className="chip80">
                        <div className="container208">
                          <div className="avatar80">
                            <div className="avatar81">
                              <div className="op40">OP</div>
                            </div>
                          </div>
                          <div className="typography166">
                            <div className="chip81">Chip</div>
                          </div>
                          <img
                            className="cancelfilled-icon40"
                            alt=""
                            src="../cancelfilled44.svg"
                          />
                        </div>
                      </div>
                      <div className="chip90">
                        <div className="container208">
                          <div className="avatar80">
                            <div className="avatar81">
                              <div className="op40">OP</div>
                            </div>
                          </div>
                          <div className="typography166">
                            <div className="chip81">Chip</div>
                          </div>
                          <img className="cancelfilled-icon40" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="value139">Days</div>
                  </div>
                  <div className="clear20">
                    <div className="iconbutton94">
                      <img className="starfilled-icon178" alt="" />
                    </div>
                  </div>
                  <div className="suffix69">
                    <div className="iconbutton95">
                      <img
                        className="starfilled-icon178"
                        alt=""
                        src="../arrowdropdownfilled24.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="alignment20">
                  <div className="basicmenu20">
                    <div className="menuitem60">
                      <div className="container226">
                        <div className="menuitembasicslot66">
                          <div className="icon190">
                            <div className="icon191">
                              <img className="starfilled-icon178" alt="" />
                            </div>
                          </div>
                          <div className="container211">
                            <div className="value140">Days</div>
                            <div className="right-content60">
                              <div className="typography168">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider84">
                        <div className="rectangle78" />
                      </div>
                    </div>
                    <div className="menuitem60">
                      <div className="container226">
                        <div className="menuitembasicslot66">
                          <div className="icon190">
                            <div className="icon191">
                              <img className="starfilled-icon178" alt="" />
                            </div>
                          </div>
                          <div className="container211">
                            <div className="value140">Months</div>
                            <div className="right-content60">
                              <div className="typography168">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider84">
                        <div className="rectangle78" />
                      </div>
                    </div>
                    <div className="menuitem60">
                      <div className="container214">
                        <div className="menuitembasicslot66">
                          <div className="icon190">
                            <div className="icon191">
                              <img className="starfilled-icon178" alt="" />
                            </div>
                          </div>
                          <div className="container211">
                            <div className="value140">Years</div>
                            <div className="right-content60">
                              <div className="typography168">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider84">
                        <div className="rectangle78" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="helper71">
                <div className="text184">Descriptive text</div>
              </div>
              <div className="label72">
                <div className="label-background69">
                  <div className="cutborder69" />
                  <div className="text189">Source</div>
                </div>
              </div>
            </div>
            <div className="text-field49">
              <div className="field72">
                <div className="prefix72">
                  <div className="icon189">
                    <img
                      className="starfilled-icon178"
                      alt=""
                      src="../starfilled121.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper72">
                  <div className="value151">30</div>
                </div>
                <div className="suffix72">
                  <div className="iconbutton100">
                    <img
                      className="starfilled-icon178"
                      alt=""
                      src="../starfilled122.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper72">
                <div className="text190">Blue</div>
              </div>
              <div className="label72">
                <div className="label-background69">
                  <div className="cutborder69" />
                  <div className="text189">Date Range</div>
                </div>
              </div>
            </div>
            <div className="forecast-the-next">Forecast the next</div>
            <div className="ellipse-group">
              <img className="group-child73" alt="" src="../ellipse-132.svg" />
              <div className="div18">?</div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: 200,
            position: "absolute",
            marginLeft: 950,
            marginTop: 50,
          }}
        >
          <RangeSlider />
        </div>
        <div className="gb13">35GB</div>
        <div className="gb14" style={{ marginLeft: -100 }}>
          GB/Day 0GB
        </div>
        <div className="text-field50">
          <div className="field72">
            <div className="prefix72">
              <div className="icon189">
                <img
                  className="starfilled-icon178"
                  alt=""
                  src="../starfilled123.svg"
                />
              </div>
            </div>
            <div className="text-wrapper72">
              <div className="value151">90</div>
            </div>
            <div className="suffix72">
              <div className="iconbutton100">
                <img
                  className="starfilled-icon178"
                  alt=""
                  src="../starfilled124.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper72">
            <div className="text190">Blue</div>
          </div>
          <div className="label72">
            <div className="label-background69">
              <div className="cutborder69" />
              <div className="text189">Date Range</div>
            </div>
          </div>
        </div>
        <div
          className="value22"
          style={{ width: 150, marginLeft: 470, marginTop: 27 }}
        >
          {" "}
          Sources
          <MultiSelectIV3 />
        </div>
        <Card
          sx={{
            minWidth: 200,
            maxWidth: 1050,
            minHeight: 500,
            marginTop: 1,
            marginLeft: 0,
          }}
        >
          <CardContent>
            <ToggleSwitch checkedState={checkedState} />
            {toggle ? <div><StackedAreaChart />
            <div className="instance-child63" />
            <div className="vector-parent">
              <b className="azure"></b>
              <b className="opsmanager"></b>
              <b className="linux1"></b>
            </div>

            <div className="gb15" style={{ marginTop: -330 }}>
              0 GB
            </div>
            <div className="gb16" style={{ marginTop: 20 }}>
              35 GB
            </div>
            <div className="switch-container">
              <div className="switch2"></div>
            </div></div> : <div>New component</div>}
            
          </CardContent>
        </Card>
      </div>
      <div className="logging-cost-inner">
        <div className="autocomplete-group">
          <div className="autocomplete-group">
            <div className="autocomplete-group">
              <div className="autocomplete10">
                <div className="wrapper20">
                  <div className="field69">
                    <div className="prefix69">
                      <div className="icon189">
                        <img
                          className="starfilled-icon178"
                          alt=""
                          src="../starfilled126.svg"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper69">
                      <div className="values20">
                        <div className="chip80">
                          <div className="container208">
                            <div className="avatar80">
                              <div className="avatar81">
                                <div className="op40">OP</div>
                              </div>
                            </div>
                            <div className="typography166">
                              <div className="chip81">Chip</div>
                            </div>
                            <img
                              className="cancelfilled-icon40"
                              alt=""
                              src="../cancelfilled47.svg"
                            />
                          </div>
                        </div>
                        <div className="chip80">
                          <div className="container208">
                            <div className="avatar80">
                              <div className="avatar81">
                                <div className="op40">OP</div>
                              </div>
                            </div>
                            <div className="typography166">
                              <div className="chip81">Chip</div>
                            </div>
                            <img
                              className="cancelfilled-icon40"
                              alt=""
                              src="../cancelfilled48.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="value139">Days</div>
                    </div>
                    <div className="clear20">
                      <div className="iconbutton94">
                        <img className="starfilled-icon178" alt="" />
                      </div>
                    </div>
                    <div className="suffix69">
                      <div className="iconbutton95">
                        <img
                          className="starfilled-icon178"
                          alt=""
                          src="../arrowdropdownfilled26.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="alignment20">
                    <div className="basicmenu20">
                      <div className="menuitem60">
                        <div className="container226">
                          <div className="menuitembasicslot66">
                            <div className="icon190">
                              <div className="icon191">
                                <img className="starfilled-icon178" alt="" />
                              </div>
                            </div>
                            <div className="container211">
                              <div className="value140">Days</div>
                              <div className="right-content60">
                                <div className="typography168">⌘X</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider84">
                          <div className="rectangle78" />
                        </div>
                      </div>
                      <div className="menuitem60">
                        <div className="container226">
                          <div className="menuitembasicslot66">
                            <div className="icon190">
                              <div className="icon191">
                                <img className="starfilled-icon178" alt="" />
                              </div>
                            </div>
                            <div className="container211">
                              <div className="value140">Months</div>
                              <div className="right-content60">
                                <div className="typography168">⌘X</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider84">
                          <div className="rectangle78" />
                        </div>
                      </div>
                      <div className="menuitem60">
                        <div className="container214">
                          <div className="menuitembasicslot66">
                            <div className="icon190">
                              <div className="icon191">
                                <img className="starfilled-icon178" alt="" />
                              </div>
                            </div>
                            <div className="container211">
                              <div className="value140">Years</div>
                              <div className="right-content60">
                                <div className="typography168">⌘X</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider84">
                          <div className="rectangle78" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="helper71">
                  <div className="text184">Descriptive text</div>
                </div>
                <div className="label72">
                  <div className="label-background69">
                    <div className="cutborder69" />
                    <div className="text189">Source</div>
                  </div>
                </div>
              </div>
              <div className="group-child77" />
              <div className="forecast-the-next">{`See the last `}</div>
              <img className="group-child78" alt="" src="../ellipse-132.svg" />
              <div className="div19">?</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="downloadfilled-icon3"
        alt=""
        src="../downloadfilled2.svg"
      />
      <div className="navbar7">
        <div className="navbar-child5" />
        <div className="button46" onClick={onButtonContainerClick}>
          <div className="container248">
            <img className="prefix-icon46" alt="" src="../prefix46.svg" />
            <div className="text198">Payment Sel.</div>
            <img className="prefix-icon46" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button47" onClick={onButtonContainer1Click}>
          <div className="container248">
            <img className="prefix-icon46" alt="" src="../prefix47.svg" />
            <div className="text198">Exploration</div>
            <img className="prefix-icon46" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button48" onClick={onButtonContainer2Click}>
          <div className="container40">
            <img className="prefix-icon46" alt="" src="../prefix48.svg" />
            <div className="text200">Ingestion Volume</div>
            <img className="prefix-icon46" alt="" src="../suffix48.svg" />
          </div>
        </div>
        <div className="button49" onClick={onButtonContainer3Click}>
          <div className="container248">
            <img className="prefix-icon46" alt="" src="../prefix49.svg" />
            <div className="text198">Alert Summary</div>
            <img className="prefix-icon46" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button50" onClick={onButtonContainer4Click}>
          <div className="container248">
            <img className="prefix-icon46" alt="" src="../prefix50.svg" />
            <div className="text198">Cost Analysis</div>
            <img className="prefix-icon46" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="ptimizer-container" onClick={onButtonContainer5Click}>
          <div className="ptimizer2">ptimizer</div>
          <img className="node-icon12" alt="" src="../node12.svg" />
          <img className="node-icon13" alt="" src="../node13.svg" />
          <img className="node-icon14" alt="" src="../node14.svg" />
          <img className="node-icon15" alt="" src="../node15.svg" />
          <img className="node-icon16" alt="" src="../node16.svg" />
          <img className="instance-child23" alt="" src="../line-5.svg" />
          <div className="instance-child24" />
          <img className="instance-child25" alt="" src="../line-7.svg" />
          <img className="instance-child26" alt="" src="../line-8.svg" />
          <img className="node-icon17" alt="" src="../node17.svg" />
          <img className="instance-child27" alt="" src="../line-92.svg" />
          <img className="instance-child28" alt="" src="../group-772.svg" />
          <img className="instance-child29" alt="" src="../group-862.svg" />
          <img className="instance-child30" alt="" src="../group-872.svg" />
          <div className="siem2">SIEM</div>
        </div>
      </div>
    </div>
  );
};

export default LoggingCost;
