import React, { Component } from "react";
import "./CocktailSort.css";
import Header from "../../components/header/Header";
import CocktailSortingImg from "../../img/cocktail-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-bootstrap";
import bubbleSortImg1 from "../../img/Bubble-sort-0.png";
import bubbleSortImg2 from "../../img/Bubble-sort-1.png";
import bubbleSortImg3 from "../../img/Bubble-sort-2.png";
import bubbleSortImg4 from "../../img/Bubble-sort-3.png";
import cocktailSortImg1 from "../../img/cocktail-sort1.png";
import cocktailSortImg2 from "../../img/cocktail-sort2.png";
import cocktailSortImg3 from "../../img/cocktail-sort3.png";
import cocktailSortImg4 from "../../img/cocktail-sort4.png";
import cocktailSortImg5 from "../../img/cocktail-sort5.png";
import cocktailSortImg6 from "../../img/cocktail-sort6.png";
import cocktailSortImg7 from "../../img/cocktail-sort7.png";
import cocktailSortImg8 from "../../img/cocktail-sort8.png";
import cocktailSortImg9 from "../../img/cocktail-sort9.png";
import cocktailSortImg10 from "../../img/cocktail-sort10.png";
import cocktailSortImg11 from "../../img/cocktail-sort11.png";
import cocktailSortImg12 from "../../img/cocktail-sort12.png";
import cocktailSortImg13 from "../../img/cocktail-sort13.png";
import cocktailSortImg14 from "../../img/cocktail-sort14.png";
import cocktailSortImg15 from "../../img/cocktail-sort15.png";
import cocktailSortImg16 from "../../img/cocktail-sort16.png";
import cocktailSortImg17 from "../../img/cocktail-sort17.png";
import cocktailSortImg18 from "../../img/cocktail-sort18.png";
import cocktailSortImg19 from "../../img/cocktail-sort19.png";
import cocktailSortImg20 from "../../img/cocktail-sort20.png";
import cocktailSortImg21 from "../../img/cocktail-sort21.png";
import cocktailSortImg22 from "../../img/cocktail-sort22.png";
import cocktailSortImg23 from "../../img/cocktail-sort23.png";
import cocktailSortImg24 from "../../img/cocktail-sort24.png";
import cocktailSortImg25 from "../../img/cocktail-sort25.png";
import cocktailSortImg26 from "../../img/cocktail-sort26.png";
import cocktailSortImg27 from "../../img/cocktail-sort27.png";
import cocktailSortImg28 from "../../img/cocktail-sort28.png";
import cocktailSortImg29 from "../../img/cocktail-sort29.png";
import CocktailSortVisualization from "./CocktailSortVisualization";

class CocktailSort extends Component {
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
                    src={CocktailSortingImg}
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
                    Կոկտեյլային տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Կոկտեյլային տեսակավորումը հայտնի է որպես երկկողմանի
                    պղպջակների տեսակավորում, կոկտեյլային շեյկեի տեսակավորում,
                    շեյկեր տեսակավորում (որը կարող է նաև հանդիսանալ ընտրության
                    տեսակավորման տարբերակ) ripple sort, shuffle sort, shuttle
                    sort կամ happy hour sort, որոնք պղպջակային տեսակավորման
                    դասին են պատկանում և երկուսն էլ հանդիսանում են կայուն և
                    համեմատության տեսակավորման ալգորիթմներ։ Ալգորիթմը տարբերվում
                    է պղպջակային տեսակավորումից նրանով որ երկու
                    ուղղություններով, որոնցից յուրաքանչյուրը անցնում ցուցակը։
                    Այս տեսակավորման ալգորիթմը տեսականորեն ավելի դժվար է
                    իրականացնել, քան պղպջակային տեսակավորումը և լուծում է
                    պղպջակային տեսակավորման այսպես կոչված կրիաային խնդիրը։
                  </p>
                </div>
              </div>
              <div className="algorithm-about-main">
                <div className="algorithm-explanation">
                  <h3
                    className="algorithm-heading-sub-text"
                    style={{ color: theme.text, marginBottom: "28px" }}
                  >
                    Cocktail տեսակավորման աշխատանք
                  </h3>
                  <div>
                    <div>
                      <strong>Cocktail </strong>
                      տեսակավորումը Bubble Sort-ի տարբերակն է, որը
                      այլընտրանքային տարբերակով անցնում է ցանկը երկու
                      ուղղություններով: Այն տարբերվում է պղպջակային
                      տեսակավորումից այն առումով, որ փուչիկների տեսակավորումը
                      անցնում է ցուցակը միայն առաջ ուղղությամբ, մինչդեռ այս
                      ալգորիթմը անցնում է ինչպես առաջ, այնպես էլ հետընթաց
                      ուղղությամբ մեկ կրկնությամբ:
                    </div>
                    <p>
                      Կոկտեյլների տեսակավորումը կոչվում է նաև երկկողմանի
                      պղպջակների տեսակավորում: Բշտիկային տեսակավորման դեպքում
                      տարրերը անցնում են ձախից աջ, այսինքն՝ մեկ ուղղությամբ:
                      Առաջին կրկնության ժամանակ փուչիկների տեսակավորումը սկզբում
                      տեղափոխում է ամենամեծ տարրը դեպի իր ճիշտ դիրքը, այնուհետև
                      երկրորդ ամենամեծ տարրը իր ճշգրիտ դիրքում և այլն: Բայց
                      կոկտեյլների տեսակավորումը անցնում է երկու
                      ուղղություններով, որպես այլընտրանք:
                    </p>
                    <p>
                      Ինչպես պղպջակային տեսակավորմանը, կոկտեյլ տեսակավորման
                      դեպքերի ամենավատ և միջին բարդությունները O(n<sup>2</sup>)
                      են : Կոկտեյլների տեսակավորումն ավելի արագ է, քան
                      պղպջակների տեսակավորումը:
                    </p>
                    <p>
                      <strong>
                        Կոկտեյլների տեսակավորման երկու փուլ կա մեկ կրկնության
                        մեջ, որոնք թվարկված են հետևյալ կերպ.
                      </strong>
                    </p>
                    <ol>
                      <li>
                        Առաջին փուլում, ինչպես պղպջակների տեսակավորումը, անցեք
                        զանգվածի միջով ձախից աջ: Կից տարրերը համեմատվում են, և
                        եթե ձախ տարրը մեծ է աջից, մենք փոխանակում ենք այդ
                        տարրերը: Ցանկի ամենամեծ տարրը տեղադրված է զանգվածի
                        վերջում՝ առաջ անցումով։
                      </li>
                      <li>
                        Երկրորդ փուլում անցեք զանգվածի միջով ամենաաջ
                        չտեսակավորված տարրից դեպի ձախ: Հարակից տարրերը
                        համեմատվում են, և եթե աջ տարրը փոքր է ձախից, ապա մենք
                        փոխանակում ենք այդ տարրերը: Ցանկի ամենափոքր տարրը
                        տեղադրվում է զանգվածի սկզբում հետընթաց անցումով։
                      </li>
                    </ol>
                    <hr />
                    <p>
                      <strong>
                        Այժմ տեսնենք կոկտեյլների տեսակավորման ալգորիթմի
                        աշխատանքը:
                      </strong>
                    </p>
                    <ol>
                      <p>
                        Կոկտեյլների տեսակավորման ալգորիթմի աշխատանքը հասկանալու
                        համար եկեք վերցնենք չտեսակավորված զանգված: Մենք վերցնում
                        ենք կարճ և ճշգրիտ զանգված, քանի որ գիտենք, որ
                        կոկտեյլների տեսակավորման բարդությունը O(n<sup>2</sup>)
                        է:
                      </p>
                      <p>Զանգվածի տարրերն են.</p>
                      <p>
                        <strong>array = {"4, 0, 3, 1, 7, 1, 2"}</strong>
                      </p>
                      <li>
                        <p>
                          <strong>Առաջին առաջ փոխանցում.</strong>
                        </p>
                        <p>
                          Առաջին կրկնության մեջ առաջ անցումը նման է փուչիկների
                          տեսակավորմանը: Առաջին կրկնության մեջ առաջ անցնելու
                          համեմատությունները տրված են հետևյալ կերպ.
                        </p>
                        <p>
                          Տեսակավորումը կսկսվի սկզբնական երկու տարրերից։ Եկեք
                          համեմատենք դրանք՝ ստուգելու համար, թե որն է ավելի մեծ:
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="94"
                            src={cocktailSortImg1}
                            title=""
                            width="498"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="109"
                            src={cocktailSortImg2}
                            title=""
                            width="536"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Նոր զանգվածը փոխանակելուց հետո նման կլինի.
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>Հիմա համեմատեք 4-ը և 3-ը:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg3}
                            title=""
                            width="500"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg4}
                            title=""
                            width="500"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Նոր զանգվածը փոխանակելուց հետո նման կլինի.
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>Հիմա համեմատեք 4-ը և 1-ը:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg5}
                            title=""
                            width="500"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg6}
                            title=""
                            width="500"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Նոր զանգվածը փոխանակելուց հետո նման կլինի.
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>Հիմա համեմատեք 4-ը և 7-ը:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg7}
                            title=""
                            width="500"
                          />
                        </figure>
                        <p>Այժմ համեմատությունը կլինի 7-ի և 1-ի միջև:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="80"
                            src={cocktailSortImg8}
                            title=""
                            width="496"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg9}
                            title=""
                            width="500"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Նոր զանգվածը փոխանակելուց հետո նման կլինի.
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>Հիմա համեմատեք 7-ը և 2-ը:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg10}
                            title=""
                            width="500"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg11}
                            title=""
                            width="500"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Այժմ մենք հասնում ենք զանգվածի վերջում:
                                Փոխանակումից և առաջին առաջ անցնելուց հետո
                                զանգվածի տարրերը նման կլինեն.
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>
                          Առաջին առաջ անցնելուց հետո զանգվածի ամենամեծ տարրը
                          պահվում է զանգվածի վերջին դիրքում:
                        </p>
                        <p>
                          <strong>Առաջին հետընթաց փոխանցում.</strong>
                        </p>
                        <p>
                          Այժմ սկսվում է առաջին հետընթաց փոխանցումը։ Այն կսկսվի
                          զանգվածի վերջին ինդեքսից, բացառությամբ այն ինդեքսի,
                          որտեղ պահվում է ամենամեծ տարրը:
                        </p>
                        <p>
                          Այսպիսով, հետընթաց ուղղությամբ նախ կհամեմատվեն
                          զանգվածի 2 և 1 տարրերը:
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="83"
                            src={cocktailSortImg12}
                            title=""
                            width="525"
                          />
                        </figure>
                        <p>Հիմա համեմատեք 1-ը և 4-ը:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="87"
                            src={cocktailSortImg13}
                            title=""
                            width="493"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg14}
                            title=""
                            width="528"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Փոխանակումից հետո զանգվածը կլինի.</font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>Հիմա համեմատեք 1-ը և 1-ը:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg15}
                            title=""
                            width="500"
                          />
                        </figure>
                        <p>Հիմա համեմատեք 3-ը և 1-ը:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg16}
                            title=""
                            width="579"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg17}
                            title=""
                            width="500"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Փոխանակումից հետո զանգվածը կլինի.</font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>Հիմա համեմատեք 0-ը և 1-ը:</p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="90"
                            src={cocktailSortImg18}
                            title=""
                            width="610"
                          />
                        </figure>
                        <p>
                          Այսպիսով, առաջին հետընթաց անցումից հետո զանգվածի
                          ամենափոքր տարրը պահվում է զանգվածի առաջին ինդեքսում:
                          Այսպիսով, առաջին կրկնությունից հետո զանգվածի տարրերը
                          կլինեն.
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg19}
                            title=""
                            width="500"
                          />
                        </figure>
                      </li>
                      <li>
                        <p>
                          <strong>Առաջին առաջ փոխանցում.</strong>
                        </p>
                        <p>
                          Այժմ սկսվել է երկրորդ փոխանցումը։ Այն կսկսվի զանգվածի
                          առաջին ինդեքսից, բացառությամբ այն ինդեքսի, որտեղ
                          պահվում է ամենափոքր տարրը:
                        </p>
                        <p>
                          Այսպիսով, առջևի ուղղությամբ կհամեմատվեն առաջին
                          զանգվածի տարրերը 1 և 3 :
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="104"
                            src={cocktailSortImg20}
                            title=""
                            width="597"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="104"
                            src={cocktailSortImg21}
                            title=""
                            width="594"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="104"
                            src={cocktailSortImg22}
                            title=""
                            width="608"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="85"
                            src={cocktailSortImg23}
                            title=""
                            width="595"
                          />
                        </figure>
                        <p>
                          Այժմ մենք հասնում ենք զանգվածի վերջում: Երկրորդ առաջ
                          անցնելուց հետո զանգվածի երկրորդ ամենամեծ տարրը կպահվի
                          իր ճշգրիտ դիրքում: Փոխանակումից և երկրորդ առաջ
                          անցնելուց հետո զանգվածի տարրերը նման կլինեն.
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="104"
                            src={cocktailSortImg24}
                            title=""
                            width="504"
                          />
                        </figure>
                        <p>
                          <strong>Երկրորդ հետընթաց փոխանցում.</strong>
                        </p>
                        <p>Այժմ սկսվում է երկրորդ հետընթաց փոխանցումը։</p>
                        <p>
                          Այսպիսով, հետընթաց ուղղությամբ կհամեմատվեն զանգվածի
                          3-րդ և 2-րդ տարրերը:
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="104"
                            src={cocktailSortImg25}
                            title=""
                            width="611"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg26}
                            title=""
                            width="500"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Փոխանակումից հետո զանգվածը կլինի.</font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>
                          Այժմ զանգվածն ամբողջությամբ տեսակավորված է, բայց
                          ալգորիթմը պետք է ավարտի ամբողջ անցումը առանց որևէ
                          փոխանակման ՝ իմանալու, որ զանգվածը տեսակավորված է:
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="102"
                            src={cocktailSortImg27}
                            title=""
                            width="628"
                          />
                        </figure>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg28}
                            title=""
                            width="571"
                          />
                        </figure>
                        <p>
                          Այսպիսով, զանգվածի տարրերը տեսակավորելուց հետո կլինեն.
                        </p>
                        <figure className="figure">
                          <img
                            alt=""
                            height="100"
                            src={cocktailSortImg29}
                            title=""
                            width="515"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>Այժմ զանգվածն ամբողջությամբ դասավորված է:</font>
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
                           &nbsp;&nbsp;function cocktailSort(arr) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;let swapped = true; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;let start = 0; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;let end = arr.length; {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;while (swapped) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = false; {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Left to right {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (let i = start; i &lt; end - 1; ++i) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] &gt; arr[i + 1]) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = true; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!swapped) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = false; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end--; {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Right to left {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (let i = end - 1; i &gt;= start; --i) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] &gt; arr[i + 1]) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = true; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start++; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;return arr; {"\n"}
                            &nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;// Example usage: {"\n"}
                            &nbsp;&nbsp;let array = [5, 1, 4, 2, 8, 0, 2]; {"\n"}
                            &nbsp;&nbsp;console.log("Sorted array:", cocktailSort(array)); {"\n"}
                          </code>
                        </pre>
                      </div>
                    </ol>
                  </div>
                </div>
              </div>
              <CocktailSortVisualization></CocktailSortVisualization>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default CocktailSort;
