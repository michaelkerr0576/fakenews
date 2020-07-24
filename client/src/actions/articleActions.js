import {
  GET_ARTICLES,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  ARTICLES_LOADING,
  RESET_ARTICLES,
  RESET_HEADLINES,
} from "./actionTypes";
import { instance } from "../http-common";

// Hardcoded reset state for DEMO purposes
const resetState = {
  articles: [
    {
      title:
        "“You Can Take Our Fish, Gas & Trees, But You’ll Never Take Our Tax Haven Status” Ireland Tells Europe",
      subtitle:
        "FOLLOWING decades of subservient behaviour towards the EU and agreeing to share its most lucrative of resources, the Republic of Ireland has this week taken a stand, telling its European partners that “no, you will never take our tax haven status”.",
      body:
        "Despite allowing some of the most aggressive fishing in its waters the world has ever seen, along with the depletion of its forestry and corporate rape of its vast oil and gas fields West of the island, forcing American multinational company Apple into paying €14 billion in unpaid taxes was the final straw for the proud nation.\n“You can feck off now with that auld shite,” Ireland told Europe, who have been threatening to clamp down on the country’s generous tax incentives which undercut most other nations in the union, “ye can send super trawlers over all ye want and steal all our fish and livelihood, but don’t even think for a second you can make us take money that’s owed, no way. What you think we are, bloody idiots?”\nIreland was responding to a recent court ruling in which Brussels suffered a major legal defeat against Apple, with the EU’s top competition official vowing to make the tech company, and others, pay more tax.\n“But they give us loads of jobs and they look really cool and modern scattered around the island,” Ireland pointed out, trying to hide some homeless people in the process, “sure what would we need all that money for? We wouldn’t know what to do with it”.",
      author: "Renee Zellweger",
      section: "Business",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title: "“2020’s Been A Bit Of Craic All The Same”",
      subtitle:
        "AS PART of WWN’s Opinion series, we give a platform to people we really shouldn’t. This week, it’s the turn of Kev Fenton, who thinks all things considered 2020 has been a massive amount of craic so far.",
      body:
        "“AH C’MON now, admit it, you’ve stories for life with all this mad shit.\nThink about your grandparents – they had boring stories like being so poor they had to eat the dust off the curtains for breakfast. What’ll you tell the grandkids? Bleedin’ pandemic and you going nuts about the gaff ‘cus you had sit in and watch Netflix. Head on ya like Rapunzel ‘cus the barbers were closed.\nSure, you’d be in bits over all the death and misery but c’mon, some craic all the same. The funny selfies you be taking, all ‘looking like a ninja on me way to judo chop Coronavirus in the balls’.\nMy mate John did this thing, I’m breaking my shit again thinking about this, he was all taking a picture with some tomato soup and pretending it was bat soup; he’s fucking mental is John. Seriously though, the size of the fucking waiting lists to get seen now by mental health services in this country ‘cus of all this could cost lives.\nAnd the jokes you do be sharing and telling, and the videos people be making. Gas stuff, like okay 500,000 dead but like, c’mon it’s been a bit of craic all the same. I know you’re laughing to yourself, don’t be lying; people buying toilet roll like it was the sweat out of some Hemsworth brother’s arse crack or a jar of Jennifer Aniston’s farts.\nMeeting up with the lads and having pretend coughing fits on them, ye can’t beat this yoke for the craic honestly. And the sneaky pints, like you’re doing something illegal or something. Ah yeah, sure half of us are ruined like, haven’t a job or anything and we can write off the next 5 years but you’d be watching the news and some kid bursts in on a news reader at home, and to think we’ve another 6 months of this banter and then all the second wave based craic.\nThe Americans still on their first wave, chugging down on stupid decisions like it was your first pint of Guinness in your local in 5 months; the fucking hilarious eejits. Ahh, stop. Honestly.”",
      author: "Renee Zellweger",
      section: "Lifestyle",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title:
        "Choosing Liverpool As ‘His Club’ At Age 7 Finally Pays Off For Local Man",
      subtitle:
        "WATERFORD man Eric Wilson is congratulating himself for ‘playing the long game’ when it comes to choosing a football team to support, after his wise decision to pick Liverpool FC over Leeds as ‘his team’ finally paid dividends with a Premier League title victory over 30 years later.",
      body:
        "Like the vast majority of Irish people who support English football without any ties to the hometowns of their favourite clubs, Wilson was forced to choose a team to support at random after being put on the spot in the playground by a group of kids who, Wilson recalls, were mostly Liverpool supporters to begin with.\n“I had nothing to base my decision on other than I thought they’d beat me up if I said Nottingham Forest, and I liked red so Liverpool it was” explained Wilson, who was delighted to learn his club clinched their first Premier League title last night via text from a lad he works with.\n“I wasn’t a football fan back then and to be honest, I’m not a fan now but you have to have a team, don’t you? So I went with Liverpool. My brother was a Man United supporter so that helped us build a bit of brotherly tension, slag each other off over the years as we drifted apart.\n“Now when we do see each other, we can still have a polite conversation about ‘how Liverpool are doing decent’ or ‘you’re not having much luck this season’, that kind of thing. It really helped break the tension when we were sitting around the bed with Mum before she passed”.\n“And then later on, when we went to the reading of the will, we always could strike up a conversation about how ‘Solskjaer started well but petered out’ and ‘Klopp is going to do it this year’. Of course, since we got the will, we haven’t spoken. I sort of expected a text from him last night to say ‘well done’ or something, but no, nothing. The kids are wondering why they don’t see their cousins any more”.\n“At this stage, I just don’t know what to tell them”.",
      author: "Brad Pitt",
      section: "Sport",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title: "De Gea Regrets Experimental Hand Swap Surgery",
      subtitle:
        "IN THE WAKE of his latest high profile blunders in the FA Cup semi-final against Chelsea, Manchester United goalkeeper David De Gea has finally admitted regret over his experimental hand surgery, WWN Sport can reveal.",
      body:
        "“I’ve got to put my hands up and say it’s not good enough,” confirmed De Gea while wildly waving his hands down by his ankles for some reason.\nDe Gea, once lauded as the world’s best keeper, now more closely resembles an octopus in a straitjacket trying to learn to juggle while being electrocuted such has been the drastic change in fortunes and form.\n“You name it, I tried everything to improve – I would take a bath in grease before games, coat my gloves in butter, I wore roller skates instead of boots, replaced my goalkeeping coach with a startled deer and put in an oil slick at my 6-yard box. I wanted to gain an edge anyway I could.”\n“When that failed, I enlisted the help of a surgeon in LA but it hasn’t gone as planned,” added a downtrodden De Gea who was now considering putting his ever reliable feet on the end of his arms.\nAsked if knowing what he knows now would he have gone ahead with the controversial surgery, De Gea stated “swapping my hands and replacing my fingers with ten arthritic thumbs turned the wrong way round which belonged to pensioners was, in hindsight, nearly as bad as my performances this season”.\nIn response to his disastrous drop in form, senior figures at the Manchester club are considering paying £80 million for Harry Maguire again.",
      author: "Tom Cruise",
      section: "Sport",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title:
        "Martin To Reintroduce Celtic Tigers To Ireland After Securing EU Recovery Money",
      subtitle:
        "TAKING the €750 billion EU recovery fund as his ‘green light’ Taoiseach Micheál Martin has announced the first initiative which could truly stimulate the Irish economy; the reintroduction of the once extinct native Celtic Tigers back into Ireland.",
      body:
        "Taking a leaf from Eamon Ryan’s book Fianna Fáil leader Martin feels Ireland’s ecology could still benefit from majestic Celtic Tigers freely roaming around urban areas again in the same nonchalant fashion as city-dwelling foxes.\nDNA garnered from the remains of the last known Celtic Tiger have already been ‘genetically fused’ with the hair of Johnny Ronan, an old 100% mortgage application leaflet and the scrapings from a brick on the site of the old Anglo Irish Bank HQ.\n“Go forth my pretties, and use ‘saving the economy’ as your pretext for carving up all before you, grease whatever wheels you feel you need to in order to get a deal ‘over the line'” said one government appointed mad scientist as he opened the locks on Celtic Tiger cages.\n“God, that intoxicating scent the fur gives out is unmistakable – , you’ll all be buying apartments in Bulgaria again in no time,” confirmed the Taoiseach.\nReacting to the criticism that Ireland’s tax haven status, ludicrous claim of having ‘full employment’ for several years and the presence of multinationals bloating Ireland’s GDP figures will combine to make it much harder for Ireland to qualify for any of the €390 billion in EU grants on offer, a Fianna Fáil spokesperson stated that “when my party sees a loop it never fails to sniff out a hole, we’ll make it work one way or another…for our lot at least”.",
      author: "Peter Griffin",
      section: "Politics",
      isHeadline1: true,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title:
        "How I Spend My Money: Man Raking It In On Emergency Covid Payment",
      subtitle:
        "WELCOME to How I Spend My Money, a totally original series on WWN that looks at what people in Ireland really do with their hard earned cash.",
      body:
        "This week we chat to Eoin Clangen, a recipient of a Covid-19 emergency welfare payment, who details the extravagant lifestyle the temporary payment of €350-a-week affords him while he navigates life during a global pandemic.\nOccupation: I wish. Age: 31. Location: Modest 16th Century castle with private cinema, gym and swimming pool. Monthly pay: €14 million a day according to some Welfare Cheats Us All campaigns. Transport: fleet of cars replaced every week with new ones. Household bills: have only two Bills on household staff, but one insists on being called William. Phone bill: GoMo €9.99 per month, I try to make savings where I can. Health insurance: does the private hospital on castle grounds count? Groceries: I’ll ask the private chef when I see him. Subscriptions: €7.99 Netflix, €44 million for annual Bilderberg membership.\nSpending:9AM: Dead handy, €350 into my account without even getting out of bed. I use this to do some online shopping. I give my wife a few million to keep her occupied for the day. I buy a gazebo, I buy enough alcohol to keep a 30-man strong stag going for the year, replace the fleet of cars and buy a lovely extravagant fire pit for the garden.\nI burn my CVs in that because this emergency payment comes with exactly zero strings attached, I will never have to work again. This is a fact.\n10AM: Pay off the mortgage on the castle, buy a house in each of the 15 ‘green list’ countries listed by the government. Fuck it, grab another one in France just for the craic. Check my Euromillions ticket – I’ve only gone and won the fucking thing. Burn that ticket in the fire pit too, sure I wouldn’t get out of bed for less than €80 million these days. Then I head out.\nFirst things first – before I leave the house I pop on my face mask; don’t be an arsehole, wear one. I got mine online for €40,000. It’s made of solid gold, has diamonds on it and comes pre-farted in by a famous celebrity of your choosing. Irina Shayk’s one is a bit eggyer than I’d like but sure.\n74.0016PM: I’m so rich that I no longer experience time in a linear fashion like you plebs not on the Covid-19 Free Money Special, nevertheless watch out for that new tap limit on Debit Cards, gone up to €50, you’d be tearing through the spending and before you know it you’re down to your last €500,000 from the weekly payment.\nChef cooks me up something nice for what I’m guessing is lunchtime? But I replace him with Gordan Ramsey and I get great craic out of paying him to call me an idiot sandwich. I’m generally not a tipper so Gordan has to make do with picking up €100 notes I dropped on the floor and lost interest in or taking down a Banksy original off the wall and bringing it home with him.\nIt’s not all spend spend spend – I’ve actually switched to a high end Tesla car so it’s electricity all the way which saves a bit. The helicopter on the other hand is a fucking killer, gobbles up the QAV-1.\nSort of bored now and have bought everything I need for the day, so for shits and giggles I hire a private militia to stir shit up in Ukraine or Belarus or somewhere. I’m not ideologically driven in any way, but it’s fucking gas watching it come up on the news later. I’m all like “I did that, that’s me” but Irina Shayk, who I’ve paid to replace my wife, isn’t all that impressed. Gordan Ramsey comes in with an omelette for dinner but I don’t let Irina near the thing, not with her IBS.\nWhat I’ve learned: Nice one taxpayer, keep the millions flowing into my bank account, I’m just happy to provide an accurate account of how the system works. And boy does it work.",
      author: "Peter Griffin",
      section: "Lifestyle",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title:
        "Federal Police Urge Trump Supporters To Raise Right Hand So They Know Who Not To Beat",
      subtitle:
        "FEDERAL POLICE deployed by US President Donald Trump are urging his supporters to raise their right hands high into the air when approached in a bid to differentiate them from the rest of ‘those people’, WWN has learned.",
      body:
        "The new signal comes after federal law enforcement officers from the Department of Homeland Security arrived in Portland earlier this week and presently in Chicago to violently quell peaceful protests, and on occasion mistakenly batoning Trump supporters.\n“Skin colour is a great initial guide but if all Mr. Trump’s supporters could raise their right hand and say ‘victory to the president’, that would be great,” a source overseeing the deployment of America’s latest team of heavily armoured and unidentified law enforcers, “we don’t want to mix you up with protesters, much like the way everyone mixes our team up with right wing militias”.\nQuestioned over the illegal arrests and the kidnapping of US citizens, the military looking outfit insisted that everything will be okay, as long as you don’t take sides against the president.\n“All you have to do is just give us the salute and you won’t be bundled into an awaiting unmarked van and taken into the night,” our source confirmed, before sticking a gun to this reporter’s face for good measure.\nIn further moves to see quell the peace, all protesters opposed to racist behavior who promoting the Black Lives Matter movement will have to wear a black armbands when out in public.\n“It’s a simple ask, and if these people insist on rubbing us up the wrong way we have dozens of trains waiting to bring them off to federal prison”.",
      author: "John Doe",
      section: "Politics",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title: "Local Woman Designates Herself As Covid-19 Town Prefect",
      subtitle:
        "A COUNTY Waterford woman has taken it upon herself to enforce Covid-19 guidelines by designating herself as town prefect, much to the absolute disdain of everyone that knows her.",
      body:
        "Speaking from the comfort of her own home while wearing a high visibility vest she ordered online, Dana Woods began rattling off a string of rule breakers from a longlist she has written into her clipboard.\n“Tony Phelan from number 12 has gone to France this week with the family, I’ll be making sure they are all self isolating when they get back, that’s for sure,” the daughter-of-two exclaimed, “I saw Maggie Roche in Tesco without a mask this morning, so I’ll be calling her out on Facebook later on this evening when I get a glass or two of wine in me, let me tell you”.\nSeemingly unaware the country is slowly but surely coming out of lockdown, with restrictions lifting every few weeks, Woods said she’s determined to continue her painful tirade until the very last second.\n“I am the law,” Woods insisted, almost happy with her role in calling out people and coming across as a bit of fucking dose to most, “it’s people like me who keep this society in check and I don’t care what other people think of me, as long as I think I’m right”.\nDespite not being paid for her role, not everyone is happy with Woods’ sudden self designation.\n“Some people just love hearing the sound of their own voice, or reading back on their own words, and Dana is one of those people who chimes in to everyone else’s business,” husband and homeworker Mark Woods explains, before concluding “I suppose it keeps her off my back, and the poor kids  – I can’t wait for her to piss off back to work and give us and the whole fucking town a break”.",
      author: "Jane Doe",
      section: "Culture",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title:
        "Government Announce That Up To Six People Can Meet Indoors, But Sure You Know Yourself",
      subtitle:
        "FOLLOWING revised advice from NPHET, the HSE, a ‘few of the lads’ and a quick Google to double-check if that 5G stuff was in fact bollocks, the government have ramped up the re-opening of the country with a few new additions to the phased roadmap laid out a month ago.",
      body:
        "If you’re feeling confused as to what this means for you now, fear not; Taoiseach Leo Varadkar took to the airwaves yesterday to inform the nation that the new Phase 2 will invoke the ‘ah sure you know yourself’ rule, which should clear up any uncertainty.\nFrom today:\nYou’re allowed to travel up to 20km from your home, or within the limits of your county borders. But, y’know, if you want to go somewhere that’s 25kms away, or just go three counties over, that’s up to you. You might be unknowingly taking Coivd-19 with you, but really, if you were going to have it, you’d have had it by now, right? Be grand.\nYou can meet up to 6 people inside your home, without getting dirty looks from your neighbours. These gatherings should be short, but again; you know yourself how these things go. If three more lads show up to your gaff party at 2 in the morning, what are you going to do, turn them away? Don’t be a dry shite.\nAll retail is re-opening, and all trips to the shops are deemed necessary. No longer do you have to worry about this ‘essentials only’ craic. Head up and unleash the dogs of war in Penneys! With restrictions still in place for how many people can enter a shop at any given time, the public are also advised to browse as much as possible while in store, to ‘get the benefit’ of having waited an hour outside. Also if you could try and touch every single thing in the shop, that’s probably alright.\nIf you can work from home, then continue to do so. Ha ha! Like you needed to be told this. No trousers this month!\nWear masks, maybe? If you feel like it. Sure you know yourself.\nPlaygrounds are open if they’re supervised, so if you see a playground, go ahead and lift your kid over the railings. You’re there, so you’re a supervisor, technically. Even if you’re just going to be on your phone the whole time. \nUp to 15 people may partake in outdoor sporting activity. Ha ha! Yeah get the lads round for 7 and a half-a-side. 11 on 11, get it done. You’ll be grand. Sure Seamus will never get near the fucking ball.\nPubs will be allowed re-open if they serve food, so get ready for some delicious pints and a pot noodle.\nPhase 3 of the re-opening is set to take place on June 29th, although it’s unclear what will be left to do by then.",
      author: "Peter Griffin",
      section: "Politics",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title:
        "Trump & Obama Head Towards Inevitable, Rain-Lashed Knife Fight On White House Lawn",
      subtitle:
        "IT’S 3:30AM in Washington DC and former President Barack Obama is still wide awake, pacing his Kalorama home, pausing only to bury his ebony-handled switchblade into a dartboard across the room in a single, powerful movement. With an emotionless face, the 44th president walks over to his target, removes his knife and repeats the action.",
      body:
        "Across town in the east wing of the White House, his successor Donald Trump is also awake, performing a complex series of drills with a pair of stainless-steel butterfly knives, the clack-click of metal the only sound echoing in the halls of the historic building.\nUpstairs in each respective bedroom, the men’s wives lie awake. Both know that their husbands aren’t practising.\nThey’re training.\n“There’s only one way this was ever going to end, and that’s in a knife fight to the death under a lightning-streaked sky, blood indistinguishable from blood in the darkness of the unlit White House lawn” said Michelle Obama, pouring herself a 4AM coffee.\n“Da, yes” agreed Melania Trump, sitting for her daily ritual of combing her hair in from of a mirror while weeping silently for 13 hours.\nThe mens’ resolve to sort their differences with a blade-based donnybrook is well known within political circles in DC, following nearly ten years of bitter conflict between them, starting with Trump’s exacerbation of the racist ‘birther’ conspiracy surrounding Obama, and Obama’s open mocking of the then-Apprentice host at the White House correspondents dinner in 2011.\nFrom Russiagate to Peetapegate to Obamagate, the pair have done everything in their power to sully the name of the other, and with political tensions at their worse stage in decades leading up to the 2020 election, even top-level members of the Secret Service are aware of the brewing blood feud; and they’ve been given strict instructions to let whatever happens, happen.\n“President Trump has warned us not to apprehend Mr. Obama should he approach the grounds brandishing a knife. His exact words were ‘let him fucking come'” said Dirk Henderson, chief of staff for the Secret Service.\n“Agents are to form a ring around the two guys, and not get involved. Trump was adamant about that. He said if he can’t beat him, so be it. He’s not having the disgrace of having to be saved on his name. President Trump has his failings in this life, but he doesn’t fuck around when it comes to the honorable art of bladed combat”.\nHenderson went on to tell Obama followers to not sneer at the current president’s chances; although Obama is the younger and fitter of the two, that ‘only counts for so much’ when the shivs come out.\n“Trump is bigger and slower, but he’s got a mean streak in him that counts for so, so much in a knife fight” said Henderson, scratching the bottom of an ear that is no longer there.\n“Obama’s natural compassion and soy-boy tendencies will be his undoing if he doesn’t finish what he starts, and quickly. Trump isn’t the kind of guy to cut you. He’ll fucking quarter you. You come at him, you make your first shot count because you might not get another”.\nStaring out of their windows as morning breaks and storm clouds gather, 44 and 45 whet their steel and wonder if tonight will be the night that one stands and one falls.\nElsewhere, Pence smiles. Biden wonders where the actress who used to play Miss Ellie on Dallas is, or if she’s even still alive.",
      author: "Ian Griffin",
      section: "Opinion",
      isHeadline1: false,
      isHeadline2: true,
      isHeadline3: false,
    },
    {
      title: "“Fuck It, Let’s Go To Phase 5 Now” Insists Nation",
      subtitle:
        "THE Irish public have overwhelmingly agreed that the Coronavirus outbreak that crippled the country a mere 10 weeks ago is ‘done and dusted’, and that Monday’s proposed move to phase 2 of re-opening should be ‘cranked up ta fuck’ all the way to phase 5.",
      body:
        "The second phase of reopening, set to kick in on Monday if okayed by the government and health officials, will see people able to travel 20km from their home instead of 5km, prompting a difficult period for people who were going that distance anyways.\n“Look, we can lie to you all if that makes you feel better” said one campaigner for ‘Phase Five Now’, a new group who are demanding ‘quit being bitches’.\n“But you all know that half the country are in Phase Five in their minds at the minute. We’ve had a decent few days of low Covid figures, and that’s all we need to kick off gaff parties and BBQs. It’s Phase 5 except Penneys is still shut. ‘Mon ta fuck”.\nShould the government timeline be maintained, the country is scheduled to reopen fully in early August; something which PFN are claiming is ‘pure madness’, adding that such actions would mean they’ll miss an entire summer of acting the bollocks.\n“We need restrictions lifted so that our rat neighbours will stop reporting us to the cops” said a spokesperson for the group, maintaining a safe social distance of right up against our faces.\n“If we keep to the governments guide, we’ll have Phase 2 and then what? Phase 3, I suppose. And then Phase 4. Pure codology. We’re ready for Phase 5 now. We appreciate that Covid-19 was a once-in-a-generation pandemic that required us all to come together and help the health service not get overwhelmed, but we’re bored shitless now. Phase 5, you chickenshits”.",
      author: "Graf Griffin",
      section: "Culture",
      isHeadline1: false,
      isHeadline2: false,
      isHeadline3: true,
    },
  ],
};

export const getArticles = () => (dispatch) => {
  dispatch(setArticlesLoading());
  instance.get("/articles").then((res) => {
    console.log("getArticles", res);
    dispatch({
      type: GET_ARTICLES,
      payload: res.data,
    });
  });
};

export const addArticle = (article) => (dispatch) => {
  instance.post("/articles", article).then((res) => {
    console.log("addArticle", res);
    dispatch({
      type: ADD_ARTICLE,
      payload: res.data,
    });
  });
};

export const updateArticle = (index, article) => (dispatch) => {
  const id = article._id;
  const formData = [
    {
      prop: "title",
      value: article.title,
    },
    {
      prop: "subtitle",
      value: article.subtitle,
    },
    {
      prop: "body",
      value: article.body,
    },
    {
      prop: "author",
      value: article.author,
    },
    {
      prop: "section",
      value: article.section,
    },
    {
      prop: "datetime",
      value: article.datetime,
    },
    {
      prop: "isHeadline1",
      value: article.isHeadline1,
    },
    {
      prop: "isHeadline2",
      value: article.isHeadline2,
    },
    {
      prop: "isHeadline3",
      value: article.isHeadline3,
    },
  ];
  instance.patch("/articles/" + id, formData).then((res) => {
    console.log("updateArticle", res);
    dispatch({
      type: UPDATE_ARTICLE,
      payload: { index, article },
    });
  });
};

export const deleteArticle = (id) => (dispatch) => {
  instance.delete("/articles/" + id).then((res) => {
    console.log("deleteArticle", res);
    dispatch({
      type: DELETE_ARTICLE,
      payload: id,
    });
  });
};

export const resetArticles = () => (dispatch) => {
  dispatch(setArticlesLoading());
  instance.post("/articles/reset", resetState).then((res) => {
    console.log("resetArticles", res);
    dispatch({
      type: RESET_ARTICLES,
      payload: res.data,
    });
  });
};

export const resetHeadlines = (type) => {
  return {
    type: RESET_HEADLINES,
    payload: type,
  };
};

export const setArticlesLoading = () => {
  return {
    type: ARTICLES_LOADING,
  };
};
