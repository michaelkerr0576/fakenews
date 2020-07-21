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
      title: "test",
      subtitle: "test",
      body: "test",
      author: "test",
      section: "Lifestyle",
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
        "If you’re feeling confused as to what this means for you now, fear not; Taoiseach Leo Varadkar took to the airwaves yesterday to inform the nation that the new Phase 2 will invoke the ‘ah sure you know yourself’ rule, which should clear up any uncertainty. \n From today: \n You’re allowed to travel up to 20km from your home, or within the limits of your county borders. But, y’know, if you want to go somewhere that’s 25kms away, or just go three counties over, that’s up to you. You might be unknowingly taking Coivd-19 with you, but really, if you were going to have it, you’d have had it by now, right? Be grand. \n You can meet up to 6 people inside your home, without getting dirty looks from your neighbours. These gatherings should be short, but again; you know yourself how these things go. If three more lads show up to your gaff party at 2 in the morning, what are you going to do, turn them away? Don’t be a dry shite. \n All retail is re-opening, and all trips to the shops are deemed necessary. No longer do you have to worry about this ‘essentials only’ craic. Head up and unleash the dogs of war in Penneys! With restrictions still in place for how many people can enter a shop at any given time, the public are also advised to browse as much as possible while in store, to ‘get the benefit’ of having waited an hour outside. Also if you could try and touch every single thing in the shop, that’s probably alright. \n If you can work from home, then continue to do so. Ha ha! Like you needed to be told this. No trousers this month! \n Wear masks, maybe? If you feel like it. Sure you know yourself. \n Playgrounds are open if they’re supervised, so if you see a playground, go ahead and lift your kid over the railings. You’re there, so you’re a supervisor, technically. Even if you’re just going to be on your phone the whole time.  \n Up to 15 people may partake in outdoor sporting activity. Ha ha! Yeah get the lads round for 7 and a half-a-side. 11 on 11, get it done. You’ll be grand. Sure Seamus will never get near the fucking ball. \n Pubs will be allowed re-open if they serve food, so get ready for some delicious pints and a pot noodle. \n Phase 3 of the re-opening is set to take place on June 29th, although it’s unclear what will be left to do by then.",
      author: "Peter Griffin",
      section: "Lifestyle",
      isHeadline1: true,
      isHeadline2: false,
      isHeadline3: false,
    },
    {
      title:
        "Trump & Obama Head Towards Inevitable, Rain-Lashed Knife Fight On White House Lawn",
      subtitle:
        "IT’S 3:30AM in Washington DC and former President Barack Obama is still wide awake, pacing his Kalorama home, pausing only to bury his ebony-handled switchblade into a dartboard across the room in a single, powerful movement. With an emotionless face, the 44th president walks over to his target, removes his knife and repeats the action.",
      body:
        "Across town in the east wing of the White House, his successor Donald Trump is also awake, performing a complex series of drills with a pair of stainless-steel butterfly knives, the clack-click of metal the only sound echoing in the halls of the historic building. \n Upstairs in each respective bedroom, the men’s wives lie awake. Both know that their husbands aren’t practising. \n They’re training. \n “There’s only one way this was ever going to end, and that’s in a knife fight to the death under a lightning-streaked sky, blood indistinguishable from blood in the darkness of the unlit White House lawn” said Michelle Obama, pouring herself a 4AM coffee. \n “Da, yes” agreed Melania Trump, sitting for her daily ritual of combing her hair in from of a mirror while weeping silently for 13 hours. \n The mens’ resolve to sort their differences with a blade-based donnybrook is well known within political circles in DC, following nearly ten years of bitter conflict between them, starting with Trump’s exacerbation of the racist ‘birther’ conspiracy surrounding Obama, and Obama’s open mocking of the then-Apprentice host at the White House correspondents dinner in 2011. \n From Russiagate to Peetapegate to Obamagate, the pair have done everything in their power to sully the name of the other, and with political tensions at their worse stage in decades leading up to the 2020 election, even top-level members of the Secret Service are aware of the brewing blood feud; and they’ve been given strict instructions to let whatever happens, happen. \n “President Trump has warned us not to apprehend Mr. Obama should he approach the grounds brandishing a knife. His exact words were ‘let him fucking come'” said Dirk Henderson, chief of staff for the Secret Service. \n “Agents are to form a ring around the two guys, and not get involved. Trump was adamant about that. He said if he can’t beat him, so be it. He’s not having the disgrace of having to be saved on his name. President Trump has his failings in this life, but he doesn’t fuck around when it comes to the honorable art of bladed combat”. \n Henderson went on to tell Obama followers to not sneer at the current president’s chances; although Obama is the younger and fitter of the two, that ‘only counts for so much’ when the shivs come out. \n “Trump is bigger and slower, but he’s got a mean streak in him that counts for so, so much in a knife fight” said Henderson, scratching the bottom of an ear that is no longer there. \n “Obama’s natural compassion and soy-boy tendencies will be his undoing if he doesn’t finish what he starts, and quickly. Trump isn’t the kind of guy to cut you. He’ll fucking quarter you. You come at him, you make your first shot count because you might not get another”. \n Staring out of their windows as morning breaks and storm clouds gather, 44 and 45 whet their steel and wonder if tonight will be the night that one stands and one falls. \n Elsewhere, Pence smiles. Biden wonders where the actress who used to play Miss Ellie on Dallas is, or if she’s even still alive.",
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
        "The second phase of reopening, set to kick in on Monday if okayed by the government and health officials, will see people able to travel 20km from their home instead of 5km, prompting a difficult period for people who were going that distance anyways. \n “Look, we can lie to you all if that makes you feel better” said one campaigner for ‘Phase Five Now’, a new group who are demanding ‘quit being bitches’. \n “But you all know that half the country are in Phase Five in their minds at the minute. We’ve had a decent few days of low Covid figures, and that’s all we need to kick off gaff parties and BBQs. It’s Phase 5 except Penneys is still shut. ‘Mon ta fuck”. \n Should the government timeline be maintained, the country is scheduled to reopen fully in early August; something which PFN are claiming is ‘pure madness’, adding that such actions would mean they’ll miss an entire summer of acting the bollocks. \n “We need restrictions lifted so that our rat neighbours will stop reporting us to the cops” said a spokesperson for the group, maintaining a safe social distance of right up against our faces. \n “If we keep to the governments guide, we’ll have Phase 2 and then what? Phase 3, I suppose. And then Phase 4. Pure codology. We’re ready for Phase 5 now. We appreciate that Covid-19 was a once-in-a-generation pandemic that required us all to come together and help the health service not get overwhelmed, but we’re bored shitless now. Phase 5, you chickenshits”.",
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
  instance
    .patch("/articles/" + id, formData)
    .then((res) => {
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
  instance
    .post("/articles/reset", resetState)
    .then((res) => {
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
