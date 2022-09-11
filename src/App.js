import './App.css';
import Data from './codetestjson.json';
import logo from './assets/plus.svg'
import images from './assets/imgg.jpeg'
function App() {
  return (
   <div className='container p-2' >
    <div className='container'>
      <h1>{Data.headline}</h1>
        <div className='col-12'>
            <span className='p-0 m-0 name'>{Data.byline}, </span>
            <span>{Data.source}</span>
            <br/>
            <span>{Data.publicationDate}</span>
            <img className='pb-1' width="20" height="20" src={logo} alt=""/>
        </div>
    </div>
    <div className='hr'></div>
    <div className='' >
        <p>{Data.blocks[0].text}</p>
        <br/>
        <p>{Data.blocks[1].text}</p>  
        <br/>
        <img className='imgs' src={Data.blocks[2].url}/>
        <span className='imgs' ><p>{Data.blocks[2].captionText}</p></span>
        <br/>
        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, <span className='name' >as opposed to using 'Content here, content here', </span> making it look like readable English. Many desktop publishing packages and<a href='#'> web page editors now use Lorem Ipsum  </a> as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>    
        <p className='' >{Data.blocks[3].text}</p>
        <br/>
        <p className='' >{Data.blocks[4].text}</p>
        <br/>
        <div class="vl imgs2 ">
        <span className='p-1' >{Data.blocks[5].text}</span>
        <p className='py-0 m-1 name2 d-flex'> {Data.byline}</p>
        </div>
        <br/>
        <p className='' >{Data.blocks[6].text}</p><br/>
        <p className='' >{Data.blocks[7].text}</p><br/>
        <ol className='imgs p-2'>
            <li className='p-2'>{Data.blocks[6].text}</li>
            <li className='p-2'>{Data.blocks[3].text}</li>
            <li className='p-2'>{Data.blocks[4].text}</li>
            <li className='p-2'>{Data.blocks[1].text}</li>
        </ol> <br/>
        <p className=''>{Data.blocks[7].text}</p>

    </div>
   </div>
  );
}
console.log(Data);

export default App;
