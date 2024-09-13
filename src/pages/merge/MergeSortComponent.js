import React, { Component } from "react";
import "./MergeSort.css";
import Header from "../../components/header/Header";
import { Fade } from "react-bootstrap";
import MergeSortingImg from "../../img/merge-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import mergeSortingImg0 from "../../img/Merge-sort-0.png";
import mergeSortingImg1 from "../../img/Merge-sort-1.png";
import mergeSortingImg2 from "../../img/Merge-sort-2.png";
import mergeSortingImg3 from "../../img/Merge-sort-3.png";
import mergeSortingImg4 from "../../img/Merge-sort-4.png";
import mergeSortingImg5 from "../../img/Merge-sort-5.png";
import mergeSortingImg6 from "../../img/Merge-sort-6.png";
import mergeSortingImg7 from "../../img/Merge-sort-7.png";
import mergeSortingImg8 from "../../img/Merge-sort-8.png";
import MergeSortVisualization from "./MargeSortVisualization";

class MergeSort extends Component {
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
                    src={MergeSortingImg}
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
                    Միաձուլման տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Միաձուլման տեսակավորում O(n log n), համեմատման վրա հիմնված
                    տեսակավորման ալգորիթմ է։ Կատարման մեծ մասն արտադրում է
                    ստաբիլ տեսակավորում, որը նշանակում է, որ կատարումը
                    պաշտպանում է մուտքի հրամանը տեսակավորված ելքի հավասար
                    էլեմենտներից։ Դա անջատ և նվաճված ալգորիթմ է։ Միաձուլումը
                    հայտնաբերվել է 1945 թ.- ին Ջոն վոն Նյումանի կողմից:
                  </p>
                </div>
              </div>
              <div className="algorithm-about-main">
                <div className="algorithm-explanation">
                  <h3
                    className="algorithm-heading-sub-text"
                    style={{ color: theme.text, marginBottom: "28px" }}
                  >
                    Merge տեսակավորման աշխատանք
                  </h3>
                  <div>
                    <div>
                      <strong>Merge sort-ը </strong>
                      տեսակավորման ամենատարածված ալգորիթմներից է , որը հիմնված է
                      Բաժանիր և տիրիր ալգորիթմի սկզբունքին :
                    </div>

                    <p>
                      Այստեղ խնդիրը բաժանված է բազմաթիվ ենթախնդիրների:
                      Յուրաքանչյուր ենթախնդիր լուծվում է առանձին։ Ի վերջո,
                      ենթախնդիրները համակցվում են վերջնական լուծումը ձևավորելու
                      համար:
                    </p>
                    <hr />
                    <ol>
                      <figure className="figure">
                        <img
                          alt=""
                          height="616"
                          src={mergeSortingImg0}
                          title=""
                          width="606"
                        />
                        <figcaption className="figcaption">
                          <font>
                            <font>Միաձուլման տեսակավորման օրինակ</font>
                          </font>
                        </figcaption>
                      </figure>
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
                        Բաժանիր և նվաճիր ռազմավարություն
                      </h4>
                      <p>
                        Օգտագործելով
                        <strong>«Բաժանիր և նվաճիր»</strong> տեխնիկան՝ մենք
                        խնդիրը բաժանում ենք ենթախնդիրների: Երբ յուրաքանչյուր
                        ենթախնդրի լուծումը պատրաստ է, մենք «համատեղում ենք»
                        ենթախնդիրների արդյունքները՝ լուծելու հիմնական խնդիրը:
                      </p>
                      <p>
                        Ենթադրենք, որ մենք պետք է տեսակավորեինք զանգվածԱ.
                        Ենթախնդիր կլինի այս զանգվածի ենթաբաժնի տեսակավորումը՝
                        սկսած ինդեքսիցէջև ավարտվում է ինդեքսով r, նշվում է որպես
                        A[p..r].
                      </p>
                      <p>
                        <strong>Բաժանել</strong>
                      </p>
                      <p>
                        Եթե q-ն p-ի և r-ի միջև ընկած հատվածն է, ապա մենք կարող
                        ենք բաժանել ենթաշարքը A[p..r] երկու զանգվածի մեջ A[p..q]
                        և A[q+1, r].
                      </p>
                      <p>
                        <strong>Նվաճել</strong>
                      </p>
                      <p>
                        Նվաճման քայլում մենք փորձում ենք տեսակավորել երկու
                        ենթասարքերն էլ A[p..q] և A[q+1, r]. Եթե մենք դեռ չենք
                        հասել բազային գործին, մենք նորից բաժանում ենք երկու
                        ենթաշարքներն ու փորձում տեսակավորել դրանք:
                      </p>
                      <p>
                        <strong>Միավորել</strong>
                      </p>
                      <p>
                        Երբ նվաճման քայլը հասնում է հիմնական քայլին, և մենք
                        ստանում ենք երկու տեսակավորված ենթաշարք A[p..q] և A[q+1,
                        r] զանգվածի համար A[p..r], մենք միավորում ենք
                        արդյունքները՝ ստեղծելով տեսակավորված զանգված A[p..r]
                        երկու տեսակավորված ենթաշարքներից A[p..q] և A[q+1, r].
                      </p>
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
                        MergeSort ալգորիթմ
                      </h4>
                      <p>
                        MergeSort ֆունկցիան բազմիցս զանգվածը բաժանում է երկու
                        կեսի, մինչև հասնենք այն փուլին, երբ մենք փորձում ենք
                        կատարել MergeSort 1 չափսի ենթազանգվածի վրա, այսինքն. p
                        == r.
                      </p>
                      <p>
                        Դրանից հետո միաձուլման ֆունկցիան մտնում է խաղի մեջ և
                        միավորում է տեսակավորված զանգվածները ավելի մեծ
                        զանգվածների մեջ, մինչև ամբողջ զանգվածը միաձուլվի։
                      </p>
                      <div style={{ padding: "0 40px" }}>
                        <pre
                          style={{
                            background: "rgb(0, 28, 85)",
                            borderRadius: "4px",
                            padding: "20px 0",
                          }}
                        >
                          <code style={{ color: "#fff" }}>
                            &nbsp;&nbsp;MergeSort(A, p, r): {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;if p &gt; r: {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;q = (p + r) / 2 {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;mergeSort(A, p, q) {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;mergeSort(A, q + 1, r){" "}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;merge(A, p, q, r) {"\n"}
                          </code>
                        </pre>
                      </div>
                      <p>
                        Ամբողջ զանգվածը տեսակավորելու համար մենք պետք է
                        զանգահարենք MergeSort(A, 0, length(A)-1):
                      </p>
                      <p>
                        Ինչպես ցույց է տրված ստորև նկարում, միաձուլման
                        տեսակավորման ալգորիթմը ռեկուրսիվորեն բաժանում է զանգվածը
                        կիսով չափ, մինչև հասնենք 1 տարր ունեցող զանգվածի բազային
                        դեպքին: Դրանից հետո միաձուլման ֆունկցիան վերցնում է
                        տեսակավորված ենթազանգվածները և միացնում դրանք՝
                        աստիճանաբար տեսակավորելու ամբողջ զանգվածը։
                      </p>
                      <figure className="figure">
                        <img
                          alt=""
                          height="385"
                          src={mergeSortingImg1}
                          title=""
                          width="623"
                        />
                        <figcaption className="figcaption">
                          <font>
                            <font>Համեմատեք հարակից տարրերը</font>
                          </font>
                        </figcaption>
                      </figure>
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
                        Միաձուլման աստիճանի միաձուլման քայլը
                      </h4>
                      <p>
                        Յուրաքանչյուր ռեկուրսիվ ալգորիթմ կախված է բազային դեպքից
                        և բազային դեպքերից ստացված արդյունքները համակցելու
                        կարողությունից: Միաձուլման տեսակավորումը տարբեր չէ:
                        Միաձուլման տեսակավորման ալգորիթմի ամենակարևոր մասը, դուք
                        կռահեցիք, <strong> միաձուլվել </strong> քայլ.
                      </p>
                      <p>
                        Միաձուլման քայլը երկու տեսակավորված ցուցակների
                        (զանգվածների) միաձուլման պարզ խնդրի լուծումն է՝ մեկ մեծ
                        տեսակավորված ցուցակ (զանգված) կառուցելու համար։
                      </p>
                      <p>
                        Ալգորիթմը պահպանում է երեք ցուցիչ՝ մեկը երկու
                        զանգվածներից յուրաքանչյուրի համար և մեկը՝ վերջնական
                        տեսակավորված զանգվածի ընթացիկ ցուցանիշը պահպանելու
                        համար։
                      </p>
                      <p>
                        Արդյո՞ք մենք հասել ենք զանգվածներից որևէ մեկի ավարտին:
                        <ul>
                          <li>
                            <p>
                              Ոչ. Համեմատեք երկու զանգվածների ընթացիկ տարրերը
                              Պատճենել ավելի փոքր տարրը տեսակավորված զանգվածի
                              մեջ Տեղափոխել փոքր տարր պարունակող տարրի ցուցիչը
                            </p>
                          </li>
                          <li>
                            <p>
                              Այո. Պատճենել ոչ դատարկ զանգվածի մնացած բոլոր
                              տարրերը
                            </p>
                          </li>
                        </ul>
                      </p>
                      <figure className="figure">
                        <img
                          alt=""
                          height="655"
                          src={mergeSortingImg2}
                          title=""
                          width="580"
                        />
                        <figcaption className="figcaption">
                          <font>
                            <font>Համեմատեք հարակից տարրերը</font>
                          </font>
                        </figcaption>
                      </figure>
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
                        Merge( ) գործառույթը բացատրվում է քայլ առ քայլ
                      </h4>
                      <p>
                        Այս ֆունկցիայի մեջ շատ բան է տեղի ունենում, ուստի եկեք
                        օրինակ վերցնենք՝ տեսնելու համար, թե ինչպես դա կաշխատի:
                      </p>
                      <p>Ինչպես միշտ, նկարը խոսում է հազարավոր բառերի մասին:</p>
                      <figure className="figure">
                        <img
                          alt=""
                          height="112"
                          src={mergeSortingImg3}
                          title=""
                          width="335"
                        />
                        <figcaption className="figcaption">
                          <font>
                            <font>
                              Զանգվածի երկու հաջորդական ենթաշարքների միաձուլում
                            </font>
                          </font>
                        </figcaption>
                      </figure>
                      <p>
                        Զանգվածը A[0..5]պարունակում է երկու տեսակավորված
                        ենթաշարք A[0..3] և A[4..5]. Տեսնենք, թե ինչպես
                        միաձուլման ֆունկցիան կմիավորի երկու զանգվածները:
                      </p>
                      <div style={{ padding: "0 40px" }}>
                        <pre
                          style={{
                            background: "rgb(0, 28, 85)",
                            borderRadius: "4px",
                            padding: "20px 0",
                          }}
                        >
                          <code style={{ color: "#fff" }}>
                            &nbsp;&nbsp;void merge(int arr[], int p, int q, int
                            r) {"{"} &nbsp;&nbsp;{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;// Here, p = 0, q = 4, r = 6
                            (size of &nbsp;&nbsp;array) {"\n"}
                            &nbsp;&nbsp;{"}"}
                          </code>
                        </pre>
                      </div>
                      <li>
                        <strong>
                          Ստեղծեք ենթազանգվածների կրկնօրինակ պատճեններ, որոնք
                          պետք է տեսակավորվեն
                        </strong>
                        <div style={{ padding: "0 40px" }}>
                          <pre
                            style={{
                              background: "rgb(0, 28, 85)",
                              borderRadius: "4px",
                              padding: "20px 0",
                            }}
                          >
                            <code style={{ color: "#fff" }}>
                              &nbsp;&nbsp;// Create L &larr; A[p..q] and M
                              &larr; A[q+1..r] {"\n"}
                              &nbsp;&nbsp;int n1 = q - p + 1 = 3 - 0 + 1 = 4;{" "}
                              {"\n"}
                              &nbsp;&nbsp;int n2 = r - q = 5 - 3 = 2; {"\n"}
                              &nbsp;&nbsp;{"\n"}
                              &nbsp;&nbsp;int L[4], M[2]; {"\n"}
                              &nbsp;&nbsp;{"\n"}
                              &nbsp;&nbsp;for (int i = 0; i &lt; 4; i++) {
                                "{"
                              }{" "}
                              {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;L[i] = arr[p + i]; {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;// L[0,1,2,3] = A[0,1,2,3]
                              = [1,5,10,12] {"\n"}
                              &nbsp;&nbsp;{"}"} {"\n"}
                              &nbsp;&nbsp;{"\n"}
                              &nbsp;&nbsp;for (int j = 0; j &lt; 2; j++) {
                                "{"
                              }{" "}
                              {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;M[j] = arr[q + 1 + j];{" "}
                              {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;// M[0,1] = A[4,5] = [6,9]{" "}
                              {"\n"}
                              &nbsp;&nbsp;{"}"}
                            </code>
                          </pre>
                        </div>
                        <figure className="figure">
                          <img
                            alt=""
                            height="202"
                            src={mergeSortingImg4}
                            title=""
                            width="311"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Ստեղծեք ենթազանգվածների պատճեններ միաձուլման
                                համար
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <strong>
                          Պահպանեք ենթազանգվածների և հիմնական զանգվածների
                          ընթացիկ ինդեքսը
                        </strong>
                        <div style={{ padding: "0 40px" }}>
                          <pre
                            style={{
                              background: "rgb(0, 28, 85)",
                              borderRadius: "4px",
                              padding: "20px 0",
                            }}
                          >
                            <code style={{ color: "#fff" }}>
                              &nbsp;&nbsp;int i, j, k; {"\n"}
                              &nbsp;&nbsp;i = 0; {"\n"}
                              &nbsp;&nbsp;j = 0; {"\n"}
                              &nbsp;&nbsp;k = p; {"\n"}
                            </code>
                          </pre>
                        </div>
                        <figure className="figure">
                          <img
                            alt=""
                            height="158"
                            src={mergeSortingImg5}
                            title=""
                            width="646"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Պահպանեք ենթազանգվածի և հիմնական զանգվածի
                                պատճենների ինդեքսները
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <strong>
                          Քանի դեռ չենք հասել L-ի կամ M-ի ավարտին, L և M
                          տարրերից ավելի մեծ ընտրեք և տեղադրեք դրանք ճիշտ
                          դիրքում A[p..r]-ում:
                        </strong>
                        <div style={{ padding: "0 40px" }}>
                          <pre
                            style={{
                              background: "rgb(0, 28, 85)",
                              borderRadius: "4px",
                              padding: "20px 0",
                            }}
                          >
                            <code style={{ color: "#fff" }}>
                              &nbsp;&nbsp; while (i &lt; n1 &amp;&amp; j &lt;
                              n2) {"{"} {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;if (L[i] &lt;= M[j]) {
                                "{"
                              }{" "}
                              {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[k] = L[i];
                              i++; {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;{"}"} else {"{"} {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[k] = M[j];{" "}
                              {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j++; {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;k++; {"\n"}
                              &nbsp;&nbsp;{"}"}
                            </code>
                          </pre>
                        </div>
                        <figure className="figure">
                          <img
                            alt=""
                            height="589"
                            src={mergeSortingImg6}
                            title=""
                            width="655"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Համեմատելով տեսակավորված ենթաշարքների առանձին
                                տարրերը մինչև հասնենք մեկի ավարտին
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <strong>
                          Երբ L-ի կամ M-ի տարրերը սպառվեն, վերցրեք մնացած
                          տարրերը և դրեք A[p..r]
                        </strong>
                        <div style={{ padding: "0 40px" }}>
                          <pre
                            style={{
                              background: "rgb(0, 28, 85)",
                              borderRadius: "4px",
                              padding: "20px 0",
                            }}
                          >
                            <code style={{ color: "#fff" }}>
                              &nbsp;&nbsp;// We exited the earlier loop because
                              j &lt; n2 doesn't hold {"\n"}
                              &nbsp;&nbsp;while (i &lt; n1) {"{"} {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;arr[k] = L[i]; {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;i++; {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;k++; {"\n"}
                              &nbsp;&nbsp;{"}"}
                            </code>
                          </pre>
                        </div>
                        <figure className="figure">
                          <img
                            alt=""
                            height="360"
                            src={mergeSortingImg7}
                            title=""
                            width="552"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Մնացած տարրերը պատճենեք առաջին զանգվածից
                                հիմնական ենթազանգված
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <div style={{ padding: "0 40px" }}>
                          <pre
                            style={{
                              background: "rgb(0, 28, 85)",
                              borderRadius: "4px",
                              padding: "20px 0",
                            }}
                          >
                            <code style={{ color: "#fff" }}>
                              &nbsp;&nbsp;// We exited the earlier loop because
                              i &lt; n1 doesn't hold {"\n"}
                              &nbsp;&nbsp;while (j &lt; n2) {"{"} {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;arr[k] = M[j]; {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;j++; {"\n"}
                              &nbsp;&nbsp;&nbsp;&nbsp;k++; {"\n"}
                              &nbsp;&nbsp;{"}"} {"\n"}
                            </code>
                          </pre>
                        </div>
                        <figure className="figure">
                          <img
                            alt=""
                            height="158"
                            src={mergeSortingImg8}
                            title=""
                            width="473"
                          />
                          <figcaption className="figcaption">
                            <font>
                              <font>
                                Երկրորդ զանգվածի մնացած տարրերը պատճենեք
                                հիմնական ենթազանգվածում
                              </font>
                            </font>
                          </figcaption>
                        </figure>
                        <p>
                          Այս քայլը անհրաժեշտ կլիներ, եթե M-ի չափը L-ից մեծ
                          լիներ:
                        </p>
                        <p>
                          Միաձուլման ֆունկցիայի վերջում՝ ենթազանգվածը A[p..r]
                          տեսակավորված է.
                        </p>
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
                            &nbsp;&nbsp;function quickSort(arr) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;if (arr.length &lt;= 1) {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return arr; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;// Select a pivot element {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;const pivot = arr[Math.floor(arr.length / 2)]; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;const left = []; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;const right = []; {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;const equal = []; {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;// Partition the array into left, right, and equal arrays {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; arr.length; i++) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] &lt; pivot) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left.push(arr[i]); {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else if (arr[i] &gt; pivot) {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right.push(arr[i]); {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else {"{"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;equal.push(arr[i]); {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;// Recursively apply quickSort to left and right arrays, then concatenate results {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;return [...quickSort(left), ...equal, ...quickSort(right)]; {"\n"}
                            &nbsp;&nbsp;{"}"} {"\n"}
                            {"\n"}
                            &nbsp;&nbsp;// Example usage: {"\n"}
                            &nbsp;&nbsp;let array = [3, 6, 8, 10, 1, 2, 1]; {"\n"}
                            &nbsp;&nbsp;console.log("Sorted array:", quickSort(array)); {"\n"}
                          </code>
                        </pre>
                      </div>
                    </ol>
                  </div>
                </div>
              </div>
              <MergeSortVisualization></MergeSortVisualization>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default MergeSort;
