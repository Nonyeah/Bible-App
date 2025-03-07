import "./App.css";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

const genesis = [
  {
    name: "genesis",
    id: 0,
    chapter: 1,
    text: "1 In the beginning God created the heaven and the earth. 2 And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. 3 And God said, Let there be light: and there was light. 4 And God saw the light, that it was good: and God divided the light from the darkness. 5 And God called the light Day, and the darkness he called Night. 6 And the evening and the morning were the first day.And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters. 7 And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so. 8 And God called the firmament Heaven. And the evening and the morning were the second day. 9 And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.",
  },
  {
    name: "genesis",
    id: 1,
    chapter: 2,
    text: "Thus the heavens and the earth were finished, and all the host of them.And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.These are the generations of the heavens and of the earth when they were created, in the day that the Lord God made the earth and the heavens, And every plant of the field before it was in the earth, and every herb of the field before it grew: for the Lord God had not caused it to rain upon the earth, and there was not a man to till the ground. But there went up a mist from the earth, and watered the whole face of the ground. And the Lord God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
  },

  {
    name: "genesis",
    id: 2,
    chapter: 3,
    text: "Now the serpent was more subtil than any beast of the field which the Lord God had made. And he said unto the woman, Yea, hath God said, Ye shall not eat of every tree of the garden? And the woman said unto the serpent, We may eat of the fruit of the trees of the garden: But of the fruit of the tree which is in the midst of the garden, God hath said, Ye shall not eat of it, neither shall ye touch it, lest ye die. And the serpent said unto the woman, Ye shall not surely die: For God doth know that in the day ye eat thereof, then your eyes shall be opened, and ye shall be as gods, knowing good and evil. And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat. And the eyes of them both were opened, and they knew that they were naked; and they sewed fig leaves together, and made themselves aprons.",
  },

  {
    name: "genesis",
    id: 3,
    chapter: 4,
    text: "And Adam knew Eve his wife; and she conceived, and bare Cain, and said, I have gotten a man from the Lord. And she again bare his brother Abel. And Abel was a keeper of sheep, but Cain was a tiller of the ground. And in process of time it came to pass, that Cain brought of the fruit of the ground an offering unto the Lord. And Abel, he also brought of the firstlings of his flock and of the fat thereof. And the Lord had respect unto Abel and to his offering. But unto Cain and to his offering he had not respect. And Cain was very wroth, and his countenance fell. And the Lord said unto Cain, Why art thou wroth? and why is thy countenance fallen. If thou doest well, shalt thou not be accepted? and if thou doest not well, sin lieth at the door. And unto thee shall be his desire, and thou shalt rule over him.",
  },

  {
    name: "genesis",
    id: 4,
    chapter: 5,
    text: "This is the book of the generations of Adam. In the day that God created man, in the likeness of God made he him; Male and female created he them; and blessed them, and called their name Adam, in the day when they were created. And Adam lived an hundred and thirty years, and begat a son in his own likeness, and after his image; and called his name Seth: And the days of Adam after he had begotten Seth were eight hundred years: and he begat sons and daughters: And all the days that Adam lived were nine hundred and thirty years: and he died.And Seth lived an hundred and five years, and begat Enos:And Seth lived after he begat Enos eight hundred and seven years, and begat sons and daughters:",
  },

  {
    name: "genesis",
    id: 5,
    chapter: 6,
    text: "And it came to pass, when men began to multiply on the face of the earth, and daughters were born unto them, That the sons of God saw the daughters of men that they were fair; and they took them wives of all which they chose. And the Lord said, My spirit shall not always strive with man, for that he also is flesh: yet his days shall be an hundred and twenty years. There were giants in the earth in those days; and also after that, when the sons of God came in unto the daughters of men, and they bare children to them, the same became mighty men which were of old, men of renown. And God saw that the wickedness of man was great in the earth, and that every imagination of the thoughts of his heart was only evil continually. And it repented the Lord that he had made man on the earth, and it grieved him at his heart. And the Lord said, I will destroy man whom I have created from the face of the earth; both man, and beast, and the creeping thing, and the fowls of the air; for it repenteth me that I have made them.",
  },
];

export function HomePage({ pageselection }) {
  if (pageselection == "home") {
    return (
      <div className="pagecontents">
        <h1>Welcome to the Bible App!</h1>
        <p>
          We temptation you find encouragement and inspiration whilst reading
          scripture each day
        </p>
        <p>
          We encourage you to meditate on the word of God daily and apply the
          promises of God to your life
        </p>
        <div className="bibleimage">
          <img src="https://www.thefashionconnector.com/react_images/bible.jpg" />
        </div>
        <p>
          {" "}
          <b>John 3:16</b>
        </p>
        <p>
          For God so loved the world that he gave his only begotten Son so that
          whomsoever shall believe in him shall have eternal life.
        </p>
        <p class="prayer">&#128591;</p>
      </div>
    );
  }
}

export function Plans({ pageselection }) {
  if (pageselection == "plans") {
    return (
      <div className="pagecontents">
        <h1>Plans</h1>
        <p>
          Reading plans help you to read a little of the Bible each day, marking
          off passages for you when you complete them. We have plans about all
          kinds of things and for different lengths, from just a few days to a
          whole year. Try it and see you may find that your life improves
          drastically when you set aside time to organise your spiritual life.
        </p>
        <div className="bibleimage">
          <img src="https://www.thefashionconnector.com/react_images/notebook.jpg" />
        </div>
      </div>
    );
  }
}

export function Discover({ pageselection }) {

  const [transition, settransition] = useState("");

  if (pageselection == "discover") {
    return (
      <div className="pagecontents">
        <h1>Discovery </h1>

        <div className="outer-discovery-container">
        
        <div className="discovery-container">
        <div className={`${transition}` === 'loveTurn' ? 'loveTurn love'  : 'love'} onClick={() => settransition("loveTurn") }>
        <p>love</p>
        </div>
        <div className={`${transition}` === 'anxietyTurn' ? 'anxietyTurn anxiety'  : 'anxiety'} onClick={() => {
          settransition("anxietyTurn");
        }}>
          <p>anxiety</p>
        </div>
        </div>

        <div className="discovery-container">
        <div className={`${transition}` === 'depressionTurn' ? 'depressionTurn depression' : 'depression'}
        onClick={() => {
          settransition("depressionTurn");
        }}>
        <p>depression</p>
        </div>
        <div className={`${transition}` === 'fearTurn' ? 'fearTurn fear' : 'fear'}
        onClick={() => { 
        settransition("fearTurn");
        }}>
          <p>fear</p>
        </div>
        </div>


        <div className="discovery-container">
        <div className={`${transition}` === 'hopeTurn' ? 'hopeTurn hope' : 'hope'}
        onClick={() => {
          settransition("hopeTurn");
        }}>
        <p>hope</p>
        </div>
        <div className={`${transition}` === 'temptationTurn' ? 'temptationTurn temptation' : 'temptation'}
        onClick={() => { 
        settransition("temptationTurn");
        }}>
          <p>temptation</p>
        </div>
        </div>


<div className="discovery-container">
        <div className={`${transition}` === 'doubtTurn' ? 'doubtTurn doubt' : 'doubt'}
        onClick={() => {
          settransition("doubtTurn");
        }}>
        <p>Doubt</p>
        </div>
        <div className={`${transition}` === 'joyTurn' ? 'joyTurn joy' : 'joy'}
        onClick={() => { 
        settransition("joyTurn");
        }}>
          <p>joy</p>
        </div>
        </div>

        </div>
      </div>
    );
  }
}

export function More({ pageselection }) {
  if (pageselection == "more") {
    return (
      <div className="pagecontents">
        <h1>More</h1>
        <ul>
          <li>
            <span class="entity">&#9919;</span> sign in
          </li>
          <li>
            {" "}
            <span class="entity">&#128276;</span>notification
          </li>
          <li>
            {" "}
            <span class="entity">&#9745;</span>following
          </li>
          <li>
            {" "}
            <span class="entity">&#9728;</span>verse of the day
          </li>
          <li>
            <span class="entity">&#128591;</span> prayer{" "}
          </li>
          <li>
            <span class="entity">&#9197;</span>videos
          </li>
          <li>
            <span class="entity">&#127760;</span>languages
          </li>
          <li>
            <span class="entity">&#9096;</span> settings
          </li>
          <li>
            <span class="entity">&#9689;</span> images
          </li>
          <li>
            <span class="entity">&#9825;</span> giving
          </li>
        </ul>
      </div>
    );
  }
}

function BottomBar({ displaycategories, hidepage }) {
  return (
    <ul className="bottommenu">
      <li
        onClick={() => {
          hidepage(false);
          displaycategories("home");
        }}
      >
        <span className="icons">&#9750;</span>
        <span className="icons">Home</span>
      </li>
      <li
        onClick={() => {
          hidepage(true);
          displaycategories("");
        }}
      >
        <span className="icons">&#9634;</span>
        <span className="icons">Bible</span>
      </li>
      <li
        onClick={() => {
          hidepage(false);
          displaycategories("plans");
        }}
      >
        <span className="icons">&#9745;</span>
        <span className="icons">Plans</span>
      </li>
      <li
        onClick={() => {
          hidepage(false);
          displaycategories("discover");
        }}
      >
        <span className="icons">&#8981;</span>
        <span className="icons">Discover</span>
      </li>
      <li
        onClick={() => {
          hidepage(false);
          displaycategories("more");
        }}
      >
        <span className="icons">&#9776;</span>
        <span className="icons">More</span>
      </li>
    </ul>
  );
}

function ShowChapters({ isshowing, bible, setvisible, selection, showpages }) {
  return (
    <>
      {isshowing || showpages ? (
        ""
      ) : (
        <div className="selectchapter">
          <span onClick={() => setvisible(true)}>&#8592;</span>
          <p className="bibletitle">{bible[0].name}</p>
          <ul>
            {genesis.map((number, i) => (
              <li key={number.id}>
                <button onClick={() => selection(i)}>{i + 1}</button>
              </li>
            ))}
          </ul>
          <ul className="biblebooks bchapters oldtest">
            <li>exodus</li>
            <li>leviticus</li>
            <li>numbers</li>
            <li>deuteronomy</li>
            <li>joshua</li>
            <li>judges</li>
            <li>ruth</li>
            <li>1 smauel</li>
            <li>2 Samuel</li>
            <li>1 Kings</li>
            <li>2 kings</li>
            <li>1 chronicles</li>
            <li>2 chronicles</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default function BiblePages() {
  const [bible, setbible] = useState(genesis);
  const [chapter, setchapter] = useState(1);
  const [isvisible, setisvisible] = useState(true);
  const [showpages, setshowpages] = useState("");

  function choosechapter(objkey) {
    setisvisible(true);
    setchapter(objkey + 1);
    setbible[genesis.find((page) => page["chapter"] == objkey + 1)];
  }

  function lastpage() {
    let changepage = chapter - 1;
    if (changepage < 1) return;
    let chaptermatch = genesis.find((page) => page["chapter"] == changepage);
    setchapter(changepage);
    setbible([chaptermatch]);
  }

  function nextpage() {
    let changepage = chapter + 1;
    if (changepage > genesis.length) return;
    let chaptermatch = genesis.find((page) => page["chapter"] == changepage);
    setbible([chaptermatch]);
    setchapter(changepage);
  }

  return (
    <>
      {isvisible ? (
        <div className="biblepage">
          <p className="bibletitle">{bible[0].name}</p>
          <p className="biblechapter">{chapter}</p>
          <p className="bibletext">{bible[0].text}</p>

          <div className="biblenavigation">
            <button onClick={() => lastpage()} className="leftbutton">
              &lt;
            </button>

            <button
              onClick={() => setisvisible(false)}
              className="bibletitle"
            >{`${bible[0].name} ${chapter}`}</button>

            <button onClick={() => nextpage()} className="rightbutton">
              &gt;
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <ShowChapters
        isshowing={isvisible}
        bible={bible}
        setvisible={setisvisible}
        selection={choosechapter}
        showpages={showpages}
      />

      <More pageselection={showpages} />
      <HomePage pageselection={showpages} />
      <Plans pageselection={showpages} />
      <Discover pageselection={showpages} />

      <BottomBar displaycategories={setshowpages} hidepage={setisvisible} />
    </>
  );
}
