import React, { Component } from "react";
import "./BubbleSort.css";
import BubbleSortVisualization from "./BubbleSortVisualization";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import BubbleSortingImg from "../../img/bubble-sorting.jpg";
import bubbleSortImg1 from "../../img/Bubble-sort-0.png";
import bubbleSortImg2 from "../../img/Bubble-sort-1.png";
import bubbleSortImg3 from "../../img/Bubble-sort-2.png";
import bubbleSortImg4 from "../../img/Bubble-sort-3.png";

class BubbleSort extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="algorithm-main">
        <Header theme={theme} />
        <div className="basic-algorithm">
          <Fade bottom duration={2000} distance="40px">
            <div className="algorithm-main-div">
              <div className="algorithm-heading-div">
                <div className="algorithm-heading-img-div">
                  <img
                    src={BubbleSortingImg}
                    width="70%"
                    height="auto"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div className="algorithm-heading-text-div">
                  <h1
                    className="algorithm-heading-text"
                    style={{ color: theme.text }}
                  >
                    Պղպջակային տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Պղպջակային տեսակավորում (անգլ bubble sort), տեսակավորման
                    պարզ ալգորիթմ, որը կարգավորում է զանգվածը շարունակաբար
                    անցնելով զանգվածի վրայով և տեղերով փոխանակելով սխալ
                    հերթականթյամբ շարված հարևան էլեմենտները։ Սա շարունակվում է
                    այնքան, մինչև այլևս կարիք չլինի փոխանակել էլեմենտները, ինչը
                    կնշանակի, որ զանգվածը կարգավորված է։ Քանի որ ալգորիթմը
                    համեմատության եղանակով է տեսակավորում, այն համարվում է
                    համեմատության ալգորիթմ (comparison sort). Թեպետ ալգորիթմը
                    պարզունակ է, այն երբեմն ձեռնտու է փոքր ծավալի տվյալներ
                    կարգավորելիս, ի տարբերություն այլ ալգորիթմների, որոնք ավելի
                    արագ են մեծ ծավալի տվյալների վրա աշխատելիս։
                  </p>
                </div>
              </div>
              <div className="algorithm-about-main">
                <div className="algorithm-explanation">
                  <h3
                    className="algorithm-heading-sub-text"
                    style={{ color: theme.text, marginBottom: "28px" }}
                  >
                    Bubble տեսակավորման աշխատանք
                  </h3>
                  <div>
                    <div>
                      <strong>Bubble sort-ը </strong>
                      տեսակավորման ալգորիթմ է, որը համեմատում է երկու հարակից
                      տարրեր և դրանք փոխում է այնքան ժամանակ, մինչև դրանք լինեն
                      նախատեսված հերթականությամբ:
                    </div>

                    <p>
                      Ինչպես ջրի մեջ օդային պղպջակների շարժումը, որը բարձրանում
                      է մակերես, այնպես էլ զանգվածի յուրաքանչյուր տարր
                      յուրաքանչյուր կրկնության մեջ շարժվում է մինչև վերջ:
                      Հետեւաբար, այն կոչվում է փուչիկների տեսակավորում:
                    </p>

                    <hr />
                    <p>
                      Ենթադրենք, որ մենք փորձում ենք տարրերը դասավորել{" "}
                      <strong>աճման կարգով</strong>:
                    </p>
                    <ol>
                      <li>
                        <p>
                          <strong>
                            Առաջին կրկնություն (համեմատել և փոխանակել)
                          </strong>
                        </p>
                        <ol>
                          <li>
                            Սկսած առաջին ցուցանիշից՝ համեմատեք առաջին և երկրորդ
                            տարրերը։
                          </li>
                          <li>
                            Եթե առաջին տարրը մեծ է երկրորդ տարրից, ապա դրանք
                            փոխվում են:
                          </li>
                          <li>
                            Այժմ համեմատեք երկրորդ և երրորդ տարրերը: Փոխեք
                            դրանք, եթե դրանք կարգին չեն:
                          </li>
                          <li>
                            Վերոնշյալ գործընթացը շարունակվում է մինչև վերջին
                            տարրը:
                          </li>
                        </ol>

                        <figure className="figure">
                          <img
                            alt=""
                            height="500"
                            src={bubbleSortImg1}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Համեմատեք հարակից տարրերը</font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <p>
                          <strong> Մնացած կրկնություն</strong>
                        </p>
                        <p>
                          Նույն գործընթացը շարունակվում է մնացած կրկնությունների
                          համար:
                        </p>
                        <p>
                          Յուրաքանչյուր կրկնությունից հետո չտեսակավորված տարրերի
                          մեջ ամենամեծ տարրը տեղադրվում է վերջում։
                        </p>

                        <figure className="figure">
                          <img
                            alt=""
                            height="410"
                            src={bubbleSortImg2}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Ամենամեծ տարրը դրեք վերջում</font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>
                          Յուրաքանչյուր կրկնությունում համեմատությունը տեղի է
                          ունենում մինչև վերջին չտեսակավորված տարրը:
                        </p>

                        <figure className="figure">
                          <img
                            alt=""
                            height="320"
                            src={bubbleSortImg3}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Համեմատեք հարակից տարրերը</font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>
                          Զանգվածը տեսակավորվում է, երբ բոլոր չտեսակավորված
                          տարրերը տեղադրվում են իրենց ճիշտ դիրքերում:
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="280"
                            src={bubbleSortImg4}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Զանգվածը դասավորված է, եթե բոլոր տարրերը պահվեն
                                ճիշտ հերթականությամբ
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <BubbleSortVisualization></BubbleSortVisualization>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default BubbleSort;
