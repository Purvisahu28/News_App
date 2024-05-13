import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinners from "./Spinners";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  //   articles = [
  //   {"source":{"id":"the-hill","name":"The Hill"},"author":"Tara Suter","title":"Cohen predicts Trump will be convicted ‘on all charges’ in hush money case - The Hill","description":"Michael Cohen, a former personal lawyer for former President Trump, said he thinks that Trump will be convicted “on all charges” in thisNew York hush money case. “I believe, based upon the information that I know, and based upon, not just the documentary evid…","url":"https://thehill.com/regulation/court-battles/4471672-cohen-predicts-trump-will-be-convicted-on-all-charges-in-hush-money-case/","urlToImage":"https://thehill.com/wp-content/uploads/sites/2/2023/06/AP23072595575438-e1686447045705.jpg?w=1280","publishedAt":"2024-02-16T04:06:00Z","content":"Skip to content\r\nMichael Cohen, a former personal lawyer for former President Trump, said he thinks that Trump will be convicted “on all charges” in thisNew York hush money case.\r\n“I believe, based u… [+1491 chars]"},

  //   {"source":{"id":"cnn","name":"CNN"},"author":"Hannah Rabinowitz, Evan Perez, Marshall Cohen","title":"Alexander Smirnov: Former FBI informant charged with lying about the Bidens’ role in Ukraine business - CNN","description":"Special counsel David Weiss charged a former FBI informant with lying about President Joe Biden and thisson Hunter Biden’s involvement in business dealings with Ukrainian energy company Burisma Holdings, undercutting a major aspect of Republicans’ impeachment…","url":"https://www.cnn.com/2024/02/15/politics/former-fbi-informant-charged-biden-burisma/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1915051396-20240125161205844.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2024-02-16T02:41:00Z","content":"Special counsel David Weiss charged a former FBI informant with lying about President Joe Biden and thisson Hunter Bidens involvement in business dealings with Ukrainian energy company Burisma Holdin… [+5190 chars]"},

  //   {"source":{"id":"usa-today","name":"USA Today"},"author":"Christopher Cann, Cybele Mayes-Osterman, Minnah Arshad, Krystal Nurse","title":"Kansas Chiefs parade shooting live updates: Personal dispute blamed - USA TODAY","description":"Nearly 1 million people were estimated to have been in downtown Kansas City when gunshots sent scores of people running for cover near Union Station.","url":"https://www.usatoday.com/story/news/nation/2024/02/15/kansas-city-chiefs-shooting/72610710007/","urlToImage":"https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/15/USAT/72611003007-afp-2003719690.jpg?crop=1023,576,x0,y106&width=1023&height=576&format=pjpg&auto=webp","publishedAt":"2024-02-16T02:26:15Z","content":"A personal dispute between several people erupted in gunfire at a packed celebration of the Kansas City Chiefs' Super Bowl victory, injuring over 20 people and killing a mother of two, authorities sa… [+11985 chars]"},
  //   {"source":{"id":"associated-press","name":"Associated Press"},"author":null,"title":"Prince Harry races head-first down a skeleton sled track and says 'everybody should do this' - The Associated Press","description":"Prince Harry has raced head-first on a tiny skeleton sled going 61.5 mph down a track at next year's Invictus Games site. He said with a smile afterward “everyone should do this.” Harry was in Whistler, British Columbia, with wife Meghan, the Duchess of Susse…","url":"https://apnews.com/article/prince-harry-meghan-canada-whistler-invictus-games-1296c5af6e25c66f3f0292dd543a9340","urlToImage":"https://dims.apnews.com/dims4/default/73466b3/2147483647/strip/true/crop/3000x1688+0+183/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd8%2F5e%2Ff5b3819c5c57e5b81ad2e56965e8%2F8c463437e0bc46c2b4f3baa750ba6275","publishedAt":"2024-02-16T02:06:26Z","content":"WHISTLER, British Columbia (AP) Prince Harry raced head-first on a tiny skeleton sled going 99 kph (61.5 mph) down a track at next years Invictus Games site Thursday, saying with a smile afterward th… [+1712 chars]"},
  //   {"source":{"id":"fox-news","name":"Fox News"},"author":"Ryan Morik","title":"Tiger Woods hits brutal shank in return to PGA Tour: 'Been a while' - Fox News","description":"Tiger Woods played thisfirst round of professional golf since July, and most of it was solid. But Woods shanked a shot on the 18th hole.","url":"https://www.foxnews.com/sports/tiger-woods-brutal-shank-return-pga-tour-been-a-while","urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2024/02/tiger-woods-shank.jpg","publishedAt":"2024-02-16T02:06:00Z","content":"Tiger Woods proved he's human with a shot we've all hit plenty of times on the golf course.\r\nWoods made yet another return to competitive golf Thursday, playing in the Genesis Invitational at Riviera… [+1464 chars]"},{"source":{"id":null,"name":"BBC News"},"author":null,"title":"Ukraine Russia war: US warns Avdiivka could fall - BBC.com","description":"The US and Ukraine admit Ukrainian troops are running out of ammunition in the eastern town of Avdiivka.","url":"https://www.bbc.com/news/world-europe-68313306","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/BDA2/production/_132664584_smokereuters.jpg","publishedAt":"2024-02-16T02:03:08Z","content":"By Jaroslav LukivBBC News\r\n\"I will die here\": Evacuation \"angels\" help front-line town's last residents flee\r\nThe US has warned that Russia could seize Ukraine's key eastern town of Avdiivka - the sc… [+4148 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Seven-time makes it in on last lap after intense Duel 1 at Daytona | Extended Highlights - NASCAR","description":"Relive all the action in in Duel No. 1 at Daytona International Speedway that saw a wild finish and Jimmie Johnson race thisway into the Daytona 500. #nascar...","url":"https://www.youtube.com/watch?v=RQLGdHX1yNE","urlToImage":"https://i.ytimg.com/vi/RQLGdHX1yNE/maxresdefault.jpg","publishedAt":"2024-02-16T01:38:48Z","content":null},
  //   {"source":{"id":null,"name":"GSMArena.com"},"author":"Prasad","title":"Bose announces Ultra Open Earbuds - GSMArena.com news - GSMArena.com","description":"Features an open ear design and Bose's proprietary spatial audio. Bose has announced the new Ultra Open Earbuds, a pair of Bluetooth wireless earbuds that...","url":"https://www.gsmarena.com/bose_announces_ultra_open_earbuds_with_an_open_ear_design-news-61618.php","urlToImage":"https://fdn.gsmarena.com/imgroot/news/24/02/bose-ultra-open/-952x498w6/gsmarena_000.jpg","publishedAt":"2024-02-15T23:47:01Z","content":"Bose has announced the new Ultra Open Earbuds, a pair of Bluetooth wireless earbuds that feature an open ear design. The goal here is to be able to listen to your content while being fully aware of y… [+1983 chars]"},
  //   {"source":{"id":"usa-today","name":"USA Today"},"author":"Mike Snider","title":"About that AMC Networks class action lawsuit settlement email. Here's what it means to you - USA TODAY","description":"Did you get an email about a class action settlement involving AMC Networks and its AMC+ and other streaming networks? Here's what it means.","url":"https://www.usatoday.com/story/money/2024/02/15/amc-class-action-lawsuit-settlement-email/72617976007/","urlToImage":"https://www.usatoday.com/gcdn/presto/2022/04/18/USAT/cb8346a9-5f75-4746-9765-cae95304b769-better_call_saul_3.jpg?crop=1911,1075,x0,y0&width=1911&height=1075&format=pjpg&auto=webp","publishedAt":"2024-02-15T23:43:22Z","content":"If you subscribed to and streamed AMC+ or any of its other video networks you may have an award coming your way.\r\nYou may have already gotten an email about the settlement in a class action suit file… [+2584 chars]"},
  //   {"source":{"id":null,"name":"YouTube"},"author":null,"title":"SpaceX launches Starlink batch on 3rd mission in less the 24 hours, nails landing - VideoFromSpace","description":"A SpaceX Falcon 9 rocket launched 22 Starlink satellites from Space Launch Complex 4 East (SLC-4E) at Vandenberg Space Force Base in California on Feb. 15, 2...","url":"https://www.youtube.com/watch?v=sbJXdX9VFQ0","urlToImage":"https://i.ytimg.com/vi/sbJXdX9VFQ0/maxresdefault.jpg","publishedAt":"2024-02-15T23:31:01Z","content":null},{"source":{"id":"associated-press","name":"Associated Press"},"author":"STEPHEN GROVES, ERIC TUCKER","title":"Special counsel who questioned Biden's memory to testify at House hearing - The Associated Press","description":"House Republicans will hold a public hearing next month with the special counsel who found evidence that President Joe Biden had mishandled classified information when he was out of office but also concluded that criminal charges were not warranted. The House…","url":"https://apnews.com/article/republican-hearing-biden-age-cf655fcb6d95592d42af81fe4b9feb1c","urlToImage":"https://dims.apnews.com/dims4/default/125da15/2147483647/strip/true/crop/4350x2447+0+340/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1e%2F6a%2Fb842e31be0e4054d1a5588f09283%2F3b517a12213442b1b2260936b056f9ef","publishedAt":"2024-02-15T23:16:00Z","content":"WASHINGTON (AP) Seeking to keep a spotlight on President Joe Bidens age, House Republicans will hold a public hearing next month with the Justice Department special counsel who found evidence that th… [+2799 chars]"
  // }
  // ]
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static defaultProps = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  //fuction to capitalizzze the input given
 capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
 }
  constructor(props) {
    super(props);
    console.log("hello i am a cnstructor from News component");
    this.state = {
      // articles:this.articles,//agr upr vala tha toh ab componentdid mount vali link se news aa rahi h that is why article ki need nahi hai
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=835b0b5d9b79456486459fb53651a6aa&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    //it waits for promisse to get resolved
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      // totalResults:parsedData.
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    //console.log("cdm");
    this.updateNews();
  }
  handlePrevClick = async () => {
    //console.log("previous");
    // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9c6574a8a0384e9e98ce51393d0135e4&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // //it waits for promisse to get resolved
    // let parsedData=await data.json();
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    // loading:false})
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    console.log("next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=835b0b5d9b79456486459fb53651a6aa&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      //it waits for promisse to get resolved
      let parsedData = await data.json();
      console.log(parsedData);
      //  this.setState({loading:false});
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=835b0b5d9b79456486459fb53651a6aa&page=${nextPage}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url); 
    let parsedData = await data.json();
  //used
    this.setState(prevState => ({
      articles: [...prevState.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      page: nextPage,
      loading: false
    }));
  };
  
  render() {
    console.log("render");
    return (
      <div className="container my-3" style={{ backgroundColor: "dark" }}>
          <h1
            className="text-center "
            style={{ color: "white", margin: "35px 0px" ,marginTop: "60px",textOverflow: 'ellipsis'}}
          >
            NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines
          </h1>
          {/* {this.state.loading && <Spinners />} */}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinners/>}
        >
         <div className="container">
        <div className="row">

          {/* {!this.state.loading && */}
        {
            this.state.articles.map((elements) => {
              return (
                <div className="col-md-4" key={elements.url}>
                  <Newsitems
                    title={elements.title ? elements.title.slice(0, 45) : " "}
                    description={
                      elements.description
                        ? elements.description.slice(0, 88)
                        : " "
                    }
                    imageUrl={elements.urlToImage}
                    newsUrl={elements.url}
                    author={elements.author}
                    date={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
                
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div class="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark mx-3 border border-white"
            onClick={this.handlePrevClick}
          >
            &lt;&lt; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            class="btn btn-dark mx-3 border border-white"
            onClick={this.handleNextClick}
          >
            Next &gt;&gt;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
