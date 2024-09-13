import React, { Component } from "react";
import "./InsertionSort.css";
import Header from "../../components/header/Header";
import { Fade } from "react-bootstrap";
import InsertionSortingImg from "../../img/insertion-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import insertionSortImg0 from "../../img/Insertion-sort-0.png";
import insertionSortImg1 from "../../img/Insertion-sort-1.png";
import insertionSortImg2 from "../../img/Insertion-sort-2.png";
import insertionSortImg3 from "../../img/Insertion-sort-3.png";
import insertionSortImg4 from "../../img/Insertion-sort-4.png";
import InsertionSortVisualization from "./InsertionSortVisualization";

class InsertionSort extends Component {
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
                    alt=""
                    src={InsertionSortingImg}
                    width="70%"
                    height="auto"
                    title=""
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div className="algorithm-heading-text-div">
                  <h1
                    className="algorithm-heading-text"
                    style={{ color: theme.text }}
                  >
                    Ներդրմամբ տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Ներդրմամբ տեսակավորումը պարզ տեսակավորման ալգորիթմ է, որը
                    ստեղծում է վերջնական սորտավորված զանգված կամ ցանկ։ Այն
                    այդքան էֆեկտիվ չէ մեծ ցանկերի համար, տվյալ ալգորիթմը
                    տեսակավորումը, կույտային ավելի դանդաղ է աշխատում
                    տեսակավորումը կամ միաձուլման քան արագ տեսակավորումը։
                    Այնուամենայնիվ մուտքային սորտավորումը ունի իր
                    առավելությունները, որոնցից են՝ <br />• Պարզ ռեալիզացումը,
                    Ջոն Բենթլին՝ համակարգչային գիտնակնը, ներկայացնում է երեք
                    տողով C լեզվով։ <br />
                    •Էֆեկտիվ փոքր տվյալների սահմաններում <br />
                    •Գործնականում ավելի էֆեկտիվ է քան ուրիշ քառակուսային
                    ալգորիթմեր (Օ(n2))՝ ընտրանքային տեսակավորում կամ պղպջակային
                    տեսակավորում <br />• Այն կարող է տեսակավորել շարքը, դրա
                    տեսակավորման ընթացքում <br />• Այն չի պահանջում ժամանակավոր
                    հիշողության տիրույթ նույնիսկ ստեկում
                  </p>
                </div>
              </div>
              <div className="algorithm-about-main">
                <div className="algorithm-explanation">
                  <h3
                    className="algorithm-heading-sub-text"
                    style={{ color: theme.text, marginBottom: "28px" }}
                  >
                    Insertion տեսակավորման աշխատանք
                  </h3>
                  <div>
                    <div>
                      <strong>Insertion sort-ը </strong>
                      տեսակավորման ալգորիթմ է , որը յուրաքանչյուր կրկնության մեջ
                      տեղադրում է չտեսակավորված տարրը իր հարմար տեղում:
                      <p>
                        {" "}
                        Տեղադրման տեսակավորումն աշխատում է նույն կերպ, երբ մենք
                        տեսակավորում ենք քարտերը մեր ձեռքում թղթախաղում:
                      </p>
                      <p>
                        {" "}
                        Մենք ենթադրում ենք, որ առաջին քարտն արդեն տեսակավորված
                        է, այնուհետև ընտրում ենք չտեսակավորված քարտ: Եթե
                        չտեսակավորված քարտը ավելի մեծ է, քան ձեռքի տակ գտնվող
                        քարտը, այն դրվում է աջ կողմում, հակառակ դեպքում՝ ձախ:
                        Նույն կերպ վերցվում են այլ չտեսակավորված քարտեր և դրվում
                        իրենց ճիշտ տեղում։
                      </p>
                      <p>
                        {" "}
                        Նմանատիպ մոտեցում է կիրառվում ներդիրների տեսակավորման
                        միջոցով:
                      </p>
                    </div>
                    <hr />
                    <ol>
                      <p>
                        Ենթադրենք, մենք պետք է տեսակավորենք հետևյալ զանգվածը.
                      </p>
                      <figure className="figure">
                        <img
                          alt=""
                          height="132"
                          src={insertionSortImg0}
                          title=""
                          width="375"
                        />
                        <figcaption className="figcaption">
                          <font>
                            <font>Սկզբնական զանգված</font>
                          </font>
                        </figcaption>
                      </figure>
                      <li>
                        <p>
                          <strong>
                            Ենթադրվում է, որ զանգվածի առաջին տարրը տեսակավորված
                            է: Վերցրեք երկրորդ տարրը և պահեք այն առանձին key:
                          </strong>
                        </p>
                        <p>
                          Համեմատեք key առաջին տարրի հետ. Եթե առաջին տարրը ավելի
                          մեծ է, քան key, ապաբանալիտեղադրված է առաջին տարրի
                          դիմաց:
                        </p>

                        <figure className="figure">
                          <img
                            alt=""
                            height="358"
                            src={insertionSortImg1}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Եթե առաջին տարրը մեծ է բանալինից, ապա բանալին
                                դրվում է առաջին տարրի դիմաց:
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <p>
                          <strong>
                            Այժմ առաջին երկու տարրերը դասավորված են:
                          </strong>
                        </p>
                        <p>
                          Վերցրեք երրորդ տարրը և համեմատեք այն ձախ կողմում
                          գտնվող տարրերի հետ: Տեղադրեց այն հենց դրանից փոքր
                          տարրի հետևում: Եթե դրանից փոքր տարր չկա, ապա դրեք այն
                          զանգվածի սկզբում։
                        </p>

                        <figure className="figure">
                          <img
                            alt=""
                            height="440"
                            src={insertionSortImg2}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Տեղադրեք 1-ը սկզբում</font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <p>
                          <strong>
                            Նմանապես, տեղադրեք յուրաքանչյուր չտեսակավորված տարր
                            իր ճիշտ դիրքում:
                          </strong>
                        </p>

                        <figure className="figure">
                          <img
                            alt=""
                            height="443"
                            src={insertionSortImg3}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Տեղադրեք 4-ը 1-ի հետևում</font>
                            </font>
                          </figcaption>
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="530"
                            src={insertionSortImg4}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Տեղադրեք 3-ը 1-ի հետևում և զանգվածը դասավորված է
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <hr />
                      <br />
                      <strong>Ալգորիթմի իրականացումը JavaScript-ով`</strong>
                      <div style={{ padding: "0 40px" }}>
                        <pre
                          style={{
                            background: "rgb(0, 28, 85)",
                            borderRadius: "4px",
                            padding: "20px 0",
                          }}
                        >
                          <code style={{ color: "#fff" }}>
                            &nbsp;&nbsp;function insertionSort(arr) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;for (let i = 1; i &lt;
                            arr.length; i++) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let key =
                            arr[i]; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let j = i - 1;{" "}
                            {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Move elements
                            of arr[0..i-1], that are greater than key, {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to one
                            position ahead of their current position {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (j &gt;= 0
                            && arr[j] &gt; key) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j
                            + 1] = arr[j]; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j =
                            j - 1; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j + 1] =
                            key; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;return arr; {"\n"}
                            &nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;// Example usage: {"\n"}
                            &nbsp;&nbsp;let array = [12, 11, 13, 5, 6]; {"\n"}
                            &nbsp;&nbsp;console.log("Sorted array: ",
                            insertionSort(array)); {"\n"}
                          </code>
                        </pre>
                      </div>
                    </ol>
                  </div>
                </div>
              </div>
              <InsertionSortVisualization></InsertionSortVisualization>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default InsertionSort;
