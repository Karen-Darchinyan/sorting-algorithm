import React, { Component } from "react";
import "./QuickSort.css";
import Header from "../../components/header/Header";
import { Fade } from "react-bootstrap";
import QuickSortingImg from "../../img/quick-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import quickSortImg0 from "../../img/Quick-sort-0.png";
import quickSortImg1 from "../../img/Quick-sort-1.png";
import quickSortImg2 from "../../img/Quick-sort-2.png";
import quickSortImg3 from "../../img/Quick-sort-3.png";
import quickSortImg4 from "../../img/Quick-sort-4.png";
import quickSortImg5 from "../../img/Quick-sort-5.png";
import quickSortImg6 from "../../img/Quick-sort-6.png";
import quickSortImg7 from "../../img/Quick-sort-7.png";
import quickSortImg8 from "../../img/Quick-sort-8.png";
import quickSortImg9 from "../../img/Quick-sort-9.png";
import quickSortImg10 from "../../img/Quick-sort-10.png";

class QuickSort extends Component {
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
                    src={QuickSortingImg}
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
                    Արագ տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Արագ տեսակավորում (անգլ.՝ quicksort) հաճախ անվանում են qsort
                    C լեզվի ստանդարտ գրադարանի իրականացման անունով։ Այն հայտնի
                    դասակարգման ալգորիթմ է, որը մշակվել է անգլիացի ինֆորմատիկ
                    Չարլզ Հոարի կողմից 1960 թվականին։ Զանգվածի տեսակավորման
                    առաջին արագ ունիվերսալ ալգորիթմն է։ n հատ տարրերի
                    տեսակավորման համար կատարում է միջինը O (n log n)
                    համեմատություն։ Ամենավատ դեպքում կատարում է O(n2)
                    համեմատություն, չնայած այսպիսի բան պատահում է հազվադեպ։
                    Quicksort-ը հաճախ ավելի արագ է գործում, քան այլ O(n log n)
                    ալգորիթմները։
                  </p>
                </div>
              </div>
              <div className="algorithm-about-main">
                <div className="algorithm-explanation">
                  <h3
                    className="algorithm-heading-sub-text"
                    style={{ color: theme.text, marginBottom: "28px" }}
                  >
                    Quick տեսակավորման աշխատանք
                  </h3>
                  <div>
                    <div>
                      <strong>Quick sort-ը </strong>
                      տեսակավորման ալգորիթմ է , որը հիմնված է բաժանիր և տիրիր
                      մոտեցման վրա , որտեղ
                    </div>
                    <ol>
                      <li>
                        <p>
                          Զանգվածը բաժանվում է ենթազանգվածների՝ ընտրելով
                          առանցքային տարր (զանգվածից ընտրված տարր)։
                        </p>
                        <p>
                          Զանգվածը բաժանելիս առանցքային տարրը պետք է տեղադրվի
                          այնպես, որ առանցքից փոքր տարրերը պահվեն ձախ կողմում,
                          իսկ առանցքից մեծ տարրերը լինեն առանցքի աջ կողմում:
                        </p>
                      </li>
                      <li>
                        <p>
                          Ձախ և աջ ենթաշարքները նույնպես բաժանվում են նույն
                          մոտեցմամբ: Այս գործընթացը շարունակվում է այնքան
                          ժամանակ, մինչև յուրաքանչյուր ենթաշարք չպարունակի մեկ
                          տարր:
                        </p>
                      </li>
                      <li>
                        <p>
                          Այս պահին տարրերն արդեն դասավորված են: Ի վերջո,
                          տարրերը միավորվում են՝ ձևավորելով տեսակավորված
                          զանգված:
                        </p>
                      </li>
                    </ol>
                    <hr />
                    <h4
                      className="algorithm-heading-sub-text"
                      style={{
                        color: theme.text,
                        marginBottom: "28px",
                        marginTop: "50px",
                        fontSize: "24px",
                      }}
                    >
                      Quicksort ալգորիթմի աշխատանք
                    </h4>
                    <ol>
                      <li>
                        <strong>Ընտրեք առանցքային տարրը</strong>
                        <p>
                          Կան արագ տեսակավորման տարբեր տարբերակներ, որտեղ
                          առանցքային տարրն ընտրվում է տարբեր դիրքերից: Այստեղ
                          մենք կընտրենք զանգվածի ամենաաջ տարրը որպես առանցքային
                          տարր:
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="88"
                            src={quickSortImg0}
                            title=""
                            width="460"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Ընտրեք առանցքային տարր</font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <strong>Վերադասավորեք զանգվածը</strong>
                        <p>
                          Այժմ զանգվածի տարրերը վերադասավորվում են այնպես, որ
                          առանցքից փոքր տարրերը դրվում են ձախ կողմում, իսկ
                          առանցքից մեծ տարրերը՝ աջ:
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="88"
                            src={quickSortImg1}
                            title=""
                            width="460"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Բոլոր փոքր տարրերը դրեք առանցքային տարրի ձախ
                                կողմում, իսկ ավելի մեծը՝ աջ կողմում
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>Ահա, թե ինչպես ենք մենք վերադասավորում զանգվածը.</p>
                        <ol>
                          <li>
                            <p>
                              Սլաքը ամրագրված է առանցքային տարրի վրա: Առանցքային
                              տարրը համեմատվում է առաջին ինդեքսից սկսած տարրերի
                              հետ:
                            </p>
                            <figure className="figure">
                              <img
                                alt=""
                                height="134"
                                src={quickSortImg2}
                                title=""
                                width="460"
                              />
                              <figcaption className="figcaption">
                                <font>
                                  <font>
                                    Առանցքային տարրի համեմատությունը տարրի հետ՝
                                    սկսած առաջին ինդեքսից
                                  </font>
                                </font>
                              </figcaption>
                            </figure>
                          </li>
                          <li>
                            <p>
                              Եթե տարրը մեծ է առանցքային տարրից, ապա այդ տարրի
                              համար սահմանվում է երկրորդ ցուցիչ:
                            </p>
                            <figure className="figure">
                              <img
                                alt=""
                                height="134"
                                src={quickSortImg3}
                                title=""
                                width="460"
                              />
                              <figcaption className="figcaption">
                                <font>
                                  <font>
                                    Եթե տարրը մեծ է առանցքային տարրից, ապա այդ
                                    տարրի համար սահմանվում է երկրորդ ցուցիչ:
                                  </font>
                                </font>
                              </figcaption>
                            </figure>
                          </li>
                          <li>
                            <p>
                              Այժմ առանցքը համեմատվում է այլ տարրերի հետ: Եթե
                              հասնում է առանցքային տարրից փոքր տարր, ապա փոքր
                              տարրը փոխարինվում է ավելի վաղ հայտնաբերված ավելի
                              մեծ տարրի հետ:
                            </p>
                            <figure className="figure">
                              <img
                                alt=""
                                height="290"
                                src={quickSortImg4}
                                title=""
                                width="450"
                              />
                              <figcaption className="figcaption">
                                <font>
                                  <font>
                                    Pivot-ը համեմատվում է այլ տարրերի հետ:
                                  </font>
                                </font>
                              </figcaption>
                            </figure>
                          </li>
                          <li>
                            <p>
                              Կրկին, գործընթացը կրկնվում է հաջորդ ավելի մեծ
                              տարրը որպես երկրորդ ցուցիչ սահմանելու համար: Եվ
                              փոխանակեք այն մեկ այլ ավելի փոքր տարրի հետ:
                            </p>
                            <figure className="figure">
                              <img
                                alt=""
                                height="206"
                                src={quickSortImg5}
                                title=""
                                width="450"
                              />
                              <figcaption className="figcaption">
                                <font>
                                  <font>
                                    Գործընթացը կրկնվում է հաջորդ ավելի մեծ տարրը
                                    որպես երկրորդ ցուցիչ սահմանելու համար:
                                  </font>
                                </font>
                              </figcaption>
                            </figure>
                          </li>
                          <li>
                            <p>
                              Գործընթացը շարունակվում է մինչև երկրորդ վերջին
                              տարրի հասնելը:
                            </p>
                            <figure className="figure">
                              <img
                                alt=""
                                height="206"
                                src={quickSortImg6}
                                title=""
                                width="450"
                              />
                              <figcaption className="figcaption">
                                <font>
                                  <font>
                                    Գործընթացը շարունակվում է մինչև երկրորդ
                                    վերջին տարրի հասնելը:
                                  </font>
                                </font>
                              </figcaption>
                            </figure>
                          </li>
                          <li>
                            <p>
                              Ի վերջո, առանցքային տարրը փոխարինվում է երկրորդ
                              ցուցիչով:
                            </p>
                            <figure className="figure">
                              <img
                                alt=""
                                height="125"
                                src={quickSortImg7}
                                title=""
                                width="450"
                              />
                              <figcaption className="figcaption">
                                <font>
                                  <font>
                                    Ի վերջո, առանցքային տարրը փոխարինվում է
                                    երկրորդ ցուցիչով:
                                  </font>
                                </font>
                              </figcaption>
                            </figure>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <strong>Բաժանել ենթաշերտերը</strong>
                        <p>
                          Առանցքային տարրերը կրկին ընտրվում են ձախ և աջ ենթամասերի համար առանձին: Եվ <strong> 2-րդ
                          քայլը </strong> կրկնվում է:
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="256"
                            src={quickSortImg8}
                            title=""
                            width="450"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Ընտրեք առանցքային տարրը յուրաքանչյուր կեսում և դրեք ճիշտ տեղում՝ օգտագործելով ռեկուրսիա
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>
                          Ենթազանգվածները բաժանվում են այնքան ժամանակ, մինչև յուրաքանչյուր ենթաշարք ձևավորվի մեկ տարրից:
                          Այս պահին զանգվածն արդեն տեսակավորված է:
                        </p>
                      </li>
                      <hr />
                      <h4
                        className="algorithm-heading-sub-text"
                        style={{
                          color: theme.text,
                          marginBottom: "28px",
                          marginTop: "50px",
                          fontSize: "24px",
                        }}
                      >
                        Արագ տեսակավորման ալգորիթմ
                      </h4>
                      <div style={{ padding: "0 40px" }}>
                          <pre style={{ background: "rgb(0, 28, 85)", borderRadius: "4px", padding: "20px 0" }}>
                            <code style={{ color: "#fff" }}>
                              &nbsp;&nbsp;quickSort(array, leftmostIndex, rightmostIndex) {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;if (leftmostIndex &lt; rightmostIndex) {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pivotIndex &larr; partition(array, leftmostIndex, rightmostIndex) {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quickSort(array, leftmostIndex, pivotIndex - 1) {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quickSort(array, pivotIndex, rightmostIndex) {"\n"}
                              &nbsp;&nbsp;{"\n"}
                              &nbsp;&nbsp;partition(array, leftmostIndex, rightmostIndex) {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;set rightmostIndex as pivotIndex {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;storeIndex &larr; leftmostIndex - 1 {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;for i &larr; leftmostIndex + 1 to rightmostIndex {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if element[i] &lt; pivotElement {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap element[i] and element[storeIndex] {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;storeIndex++ {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;swap pivotElement and element[storeIndex + 1] {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;return storeIndex + 1 {"\n"}
                            </code>
                          </pre>
                      </div>
                      <h4
                        className="algorithm-heading-sub-text"
                        style={{
                          color: theme.text,
                          marginBottom: "28px",
                          marginTop: "50px",
                          fontSize: "24px",
                        }}
                      >
                        Quicksort ալգորիթմի տեսողական նկարազարդում
                      </h4>
                      <figure className="figure">
                        <img
                          alt=""
                          height="340"
                          src={quickSortImg9}
                          title=""
                          width="758"
                        />
                        <figcaption className="figcaption">
                          <font>
                            <font>
                              Տեսակավորելով առանցքի ձախ կողմում գտնվող տարրերը ռեկուրսիայի միջոցով
                            </font>
                          </font>
                        </figcaption>
                      </figure>
                      <figure className="figure">
                        <img
                          alt=""
                          height="432"
                          src={quickSortImg10}
                          title=""
                          width="758"
                        />
                        <figcaption className="figcaption">
                          <font>
                            <font>
                              Առանցքի աջ կողմում գտնվող տարրերի դասակարգում ռեկուրսիայի միջոցով
                            </font>
                          </font>
                        </figcaption>
                      </figure>
                    </ol>
                    <hr/>
                    <hr/>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default QuickSort;
