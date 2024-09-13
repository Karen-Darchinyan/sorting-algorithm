import React, { Component } from "react";
import "./ShellSort.css";
import Header from "../../components/header/Header";
import { Fade } from "react-bootstrap";
import ShellSortingImg from "../../img/shell-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import shellSortImg0 from "../../img/Shell-sort-0.png";
import shellSortImg1 from "../../img/Shell-sort-1.png";
import shellSortImg2 from "../../img/Shell-sort-2.png";
import shellSortImg3 from "../../img/Shell-sort-3.png";
import shellSortImg4 from "../../img/Shell-sort-4.png";
import shellSortImg5 from "../../img/Shell-sort-5.png";
import shellSortImg6 from "../../img/Shell-sort-6.png";
import ShellSortVisualization from "./ShellSortVisualization";

class ShellSort extends Component {
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
                    src={ShellSortingImg}
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
                    Շելլի տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Շելլի տեսակավորումը (անգլ.՝ Shell sort) — տեսակավորման
                    ալգորիթմ, հանդիսանում է ներդրմամբ տեսակավորման
                    կատարելագործված տեսակը։ Շելլի մեթոդի գաղափարն այն է, որ իրար
                    հետ կարող են համեմատվել ոչ միայն կողք կողքի գտնվող տարրեը,
                    այլ նաև նրանք, որոնք գտնվում են իրարից որոշակի հեռավորության
                    վրա։ Այլ կերպ ասած դա հենց ներդրմամբ տեսակավորումն
                    է՝նախնական «կոպիտ» անցումներով։ Պղպջակային տեսակավորման
                    անալոգային մեթոդը կոչվում է սանրային տեսակավորում։
                  </p>
                </div>
              </div>
              <div className="algorithm-about-main">
                <div className="algorithm-explanation">
                  <h3
                    className="algorithm-heading-sub-text"
                    style={{ color: theme.text, marginBottom: "28px" }}
                  >
                    Shell տեսակավորման աշխատանք
                  </h3>
                  <div>
                    <div>
                      <strong>Shell sort-ը </strong>
                      զետեղման տեսակավորման ալգորիթմի ընդհանրացված տարբերակն է :
                      Այն նախ տեսակավորում է միմյանցից հեռու գտնվող տարրերը և
                      հաջորդաբար կրճատում է տեսակավորվող տարրերի միջև ընկած
                      միջակայքը:
                    </div>
                    <p>
                      Տարրերի միջև ընդմիջումը կրճատվում է օգտագործված
                      հաջորդականության հիման վրա: Օպտիմալ հաջորդականություններից
                      մի քանիսը, որոնք կարող են օգտագործվել կեղևի տեսակավորման
                      ալգորիթմում, հետևյալն են.
                    </p>
                    <ul>
                      <li>
                        Shell-ի սկզբնական հաջորդականությունը .N/2 , N/4 , …, 1
                      </li>
                      <li>Knuth's ավելացումները .1, 4, 13, …, (3k – 1) / 2</li>
                      <li>
                        Sedgewick-ի ավելացումները .1, 8, 23, 77, 281, 1073,
                        4193, 16577...4j+1+ 3·2j+ 1
                      </li>
                      <li>
                        Hibbard's հավելումները .1, 3, 7, 15, 31, 63, 127, 255,
                        511…
                      </li>
                      <li>
                        Papernov & Stasevich ավելացում .1, 3, 5, 9, 17, 33,
                        65,...
                      </li>
                      <li>
                        Pratt: 1, 2, 3, 4, 6, 9, 8, 12, 18, 27, 16, 24, 36, 54,
                        81....
                      </li>
                    </ul>
                    <hr />
                    <ol>
                      <li>
                        <p>
                          <strong>
                            Ենթադրենք, մենք պետք է տեսակավորենք հետևյալ
                            զանգվածը.
                          </strong>
                        </p>
                        <figure className="figure">
                          <img height="85" src={shellSortImg0} width="375" />
                          <figcaption className="figcaption">
                            <font>
                              <font>Սկզբնական զանգված</font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <p>
                          <strong>
                            Մենք օգտագործում ենք կեղևի սկզբնական
                            հաջորդականությունը (N/2, N/4, ...1) որպես միջակայք
                            մեր ալգորիթմում:
                          </strong>
                        </p>
                        <p>
                          Առաջին հանգույցում, եթե զանգվածի չափն N = 8 այն է, ապա
                          այն տարրերը, որոնք ընկած են միջակայքում, N/2 = 4
                          համեմատվում և փոխանակվում են, եթե դրանք կարգին չեն:
                        </p>
                        <ol type="a">
                          <li>0-րդ տարրը համեմատվում է 4-րդ տարրի հետ:</li>
                          <li>
                            Եթե 0-րդ տարրը մեծ է 4-րդ տարրից, ապա 4-րդ տարրը
                            սկզբում պահվում է <code>temp</code> փոփոխականում,
                            իսկ 0-րդ տարրը (այսինքն՝ ավելի մեծ տարրը) պահվում է
                            դիրքում 4-րդ, իսկ <code>temp</code>-ում պահվող տարրը
                            պահվում է դիրքում 0-րդ:
                          </li>
                        </ol>
                        <figure className="figure">
                          <img
                            alt=""
                            height="262"
                            src={shellSortImg1}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Վերադասավորեք տարրերը n/2 ընդմիջումով</font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>
                          Այս գործընթացը շարունակվում է մնացած բոլոր տարրերի
                          համար:
                        </p>

                        <figure className="figure">
                          <img
                            alt=""
                            height="280"
                            src={shellSortImg2}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Վերադասավորեք բոլոր տարրերը n/2 ընդմիջումով
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <p>
                          <strong>
                            Երկրորդ օղակում վերցվում է միջակայքը N/4 = 8/4 = 2 և
                            կրկին դասակարգվում են այս միջակայքերում ընկած
                            տարրերը:
                          </strong>
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="150"
                            src={shellSortImg3}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Վերադասավորեք տարրերը n/4 ընդմիջումով</font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>Դուք կարող եք շփոթվել այս պահին:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="150"
                            src={shellSortImg4}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Ընթացիկ միջակայքում ընկած զանգվածի բոլոր տարրերը
                                համեմատվում են:
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>
                          Տարրերը ժամը 4-րդ և 2-րդ դիրքերը համեմատվում են:
                          Տարրերը ժամը 2-րդ և 0-րդ դիրքերը նույնպես համեմատվում
                          են: Ընթացիկ միջակայքում ընկած զանգվածի բոլոր տարրերը
                          համեմատվում են:
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>
                            Նույն գործընթացը շարունակվում է մնացած տարրերի
                            համար:
                          </strong>
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="344"
                            src={shellSortImg5}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Վերադասավորեք բոլոր տարրերը n/4 ընդմիջումով
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <p>
                          <strong>
                            Վերջապես, երբ ինտերվալն է, N/8 = 8/8 = 1 ապա
                            դասավորվում են 1-ի միջակայքում ընկած զանգվածի
                            տարրերը: Զանգվածն այժմ ամբողջությամբ տեսակավորված է:
                          </strong>
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="603"
                            src={shellSortImg6}
                            title=""
                            width="375"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Վերադասավորեք տարրերը n/8 ընդմիջումով</font>
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
                            &nbsp;&nbsp;function shellSort(arr) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;let n = arr.length; {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;// Start with a big gap,
                            then reduce the gap {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;for (let gap = Math.floor(n
                            / 2); gap &gt; 0; gap = Math.floor(gap / 2)) {
                              "{"
                            }{" "}
                            {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Perform a
                            gapped insertion sort for this gap size. {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (let i =
                            gap; i &lt; n; i++) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let
                            temp = arr[i]; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let
                            j; {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//
                            Shift earlier gap-sorted elements up until the
                            correct location {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//
                            for arr[i] is found {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for
                            (j = i; j &gt;= gap && arr[j - gap] &gt; temp; j -=
                            gap) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j]
                            = arr[j - gap]; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//
                            Put temp (the original arr[i]) in its correct
                            location {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j]
                            = temp; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;return arr; {"\n"}
                            &nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;// Example usage: {"\n"}
                            &nbsp;&nbsp;let array = [12, 34, 54, 2, 3]; {"\n"}
                            &nbsp;&nbsp;console.log("Sorted array:",
                            shellSort(array)); {"\n"}
                          </code>
                        </pre>
                      </div>
                    </ol>
                  </div>
                </div>
              </div>
              <ShellSortVisualization></ShellSortVisualization>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default ShellSort;
