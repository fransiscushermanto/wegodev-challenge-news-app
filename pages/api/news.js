// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { page } = req.query;

  switch (req.method) {
    case "GET":
      const result =
        !page || parseInt(page) <= 2
          ? {
              articles: [
                {
                  source: {
                    id: "engadget",
                    name: "Engadget",
                  },
                  author: "https://www.engadget.com/about/editors/mat-smith",
                  title:
                    "Fantasian, a new RPG from the creator of Final Fantasy, launches on Apple Arcade - Engadget",
                  description:
                    "'Fantasian' draws together RPG tropes like airships, mysteries and magic with, er, handcrafted dioramas.",
                  url:
                    "https://www.engadget.com/fantasian-rpg-final-fantasy-creator-apple-arcade-120524518.html",
                  urlToImage:
                    "https://s.yimg.com/uu/api/res/1.2/_Hp1l2SHIos5MM1_26Ho4A--~B/aD05Njg7dz0xNzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2021-03/a703db10-7c14-11eb-9e73-6fccb2f99a1c.cf.jpg",
                  publishedAt: "2021-03-03T12:06:23Z",
                  content:
                    "Its dioramas meet Final Fantasy. Thats the first takeaway from Fantasian, a new game from Mistwalker, the studio responsible for the Blue Dragon series and The Last One.\r\nAccording to the early tease… [+1777 chars]",
                },
                {
                  source: {
                    id: null,
                    name: "MacRumors",
                  },
                  author: "Tim Hardwick",
                  title:
                    "Sketchy Rumor Claims 'iPad Mini Pro' Launching in Second Half of 2021 - MacRumors",
                  description:
                    "Apple is expected to launch a sixth-generation iPad mini in the first half of 2021, possibly as soon as this March, based on long-standing rumors....",
                  url:
                    "https://www.macrumors.com/2021/03/03/sketchy-rumor-ipad-mini-pro-2h-2021/",
                  urlToImage:
                    "https://images.macrumors.com/t/fR8flZi3bxurdg6_T68VRNhJT9g=/1600x/http://images.macrumors.com/article-new/2013/09/ipadminitruetone.jpg",
                  publishedAt: "2021-03-03T11:04:41Z",
                  content:
                    "Apple is expected to launch a sixth-generation iPad mini in the first half of 2021, possibly as soon as this March, based on long-standing rumors. However, a new rumor out of Asia that has gainedtrac… [+3334 chars]",
                },
                {
                  source: {
                    id: null,
                    name: "9to5Mac",
                  },
                  author: null,
                  title:
                    "Apple re-enables the option to change default music player for Siri requests with iOS 14.5 beta 3 - 9to5Mac",
                  description:
                    "One of the new features introduced with the iOS 14.5 beta was the ability to change the default music player used for Siri commands, similar to what’s already available to HomePod users. For some unknown reason, this option was removed from iOS 14.5 beta 2, b…",
                  url:
                    "https://9to5mac.com/2021/03/02/apple-re-enables-the-option-to-change-default-music-player-for-siri-requests-with-ios-14-5-beta-3/",
                  urlToImage:
                    "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/02/how-to-make-spotify-iphone-default-music-player-with-siri.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                  publishedAt: "2021-03-03T02:21:00Z",
                  content:
                    "One of the new features introduced with the iOS 14.5 beta was the ability to change the default music player used for Siri commands, similar to what’s already available to HomePod users. For some unk… [+1085 chars]",
                },
                {
                  source: {
                    id: "the-verge",
                    name: "The Verge",
                  },
                  author: "Taylor Lyles",
                  title:
                    "The best deals on true wireless earbuds March 2021 - The Verge",
                  description:
                    "If you’re looking for a new set of earbuds, it’s not hard to find a good pair, especially at a discounted price. From Apple’s AirPods Pro to the Jabra Elite 75t, Amazon Echo Buds, and more, these are the best deals.",
                  url:
                    "https://www.theverge.com/22307388/wireless-earbuds-deals-airpods-galaxy-buds-powerbeats",
                  urlToImage:
                    "https://cdn.vox-cdn.com/thumbor/lio5WdlU7vp2NibrG1UaQiBK5Gc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22141600/bfarsace_201130_4322_0001.0.jpg",
                  publishedAt: "2021-03-02T17:12:02Z",
                  content:
                    "Youve got plenty of options\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nPhoto by Becca Farsace / The Verge\r\nWhen it comes to truly wireless ea… [+6142 chars]",
                },
                {
                  source: {
                    id: null,
                    name: "Gizmodo.com",
                  },
                  author: "Victoria Song",
                  title:
                    "Apple Hearing Study Finds 1 in 5 Participants Experienced Hearing Loss - Gizmodo",
                  description:
                    "Apple enrolled thousands of participants in the study, which used Apple Watch data to look at hearing health.",
                  url:
                    "https://gizmodo.com/apple-hearing-study-finds-1-in-5-participants-experienc-1846366254",
                  urlToImage:
                    "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/olqpanvgu5dwqsh12xlu.jpg",
                  publishedAt: "2021-03-02T16:00:00Z",
                  content:
                    "Apple introduced the ability to track your noise level exposure on the Apple Watch back in 2019. The company also launched three clinical research studies alongside that feature, including one to exa… [+3429 chars]",
                },
                {
                  source: {
                    id: "the-verge",
                    name: "The Verge",
                  },
                  author: "Taylor Lyles",
                  title:
                    "Apple’s most affordable iPad is down to $299 at select retailers - The Verge",
                  description:
                    "The eighth-generation iPad is the most affordable tablet available from Apple. You can buy a 32GB with Wi-Fi support for only $299 in select colors at Amazon and Best Buy right now.",
                  url:
                    "https://www.theverge.com/2021/3/2/22308968/apple-ipad-2020-playstation-plus-one-year-crucial-p5-ssd-deal-sale",
                  urlToImage:
                    "https://cdn.vox-cdn.com/thumbor/S9yAxSWgDLuDcHxzllhx9XVdVd8=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21904342/DSC01911.jpg",
                  publishedAt: "2021-03-02T15:03:19Z",
                  content:
                    "Plus, grab one year of PS Plus for less than $30\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nAt $329, Apples eighth-generation iPad is the mos… [+1842 chars]",
                },
                {
                  source: {
                    id: null,
                    name: "Gizchina.com",
                  },
                  author: null,
                  title:
                    "Apple will ditch the iPhone’s Lightning connector, but not for a USB-C - Gizchina.com",
                  description:
                    "Apple will ditch the iPhone's Lightning connector, but not for a USB-C. iPhones have long used the proprietary Lightning connector",
                  url:
                    "https://www.gizchina.com/2021/03/02/apple-will-ditch-the-iphones-lightning-connector-but-not-for-a-usb-c/",
                  urlToImage:
                    "https://www.gizchina.com/wp-content/uploads/images/2021/03/lightningport-1024x689.jpg",
                  publishedAt: "2021-03-02T10:18:54Z",
                  content:
                    "Tianfeng International analyst Ming-Chi Kuo said in his forecast for future iPhones that rumors of a USB-C connector in Apple phones are not destined to come true.\r\nOver the past few years, most Andr… [+2632 chars]",
                },
                {
                  source: {
                    id: "techcrunch",
                    name: "TechCrunch",
                  },
                  author: "Sarah Perez",
                  title:
                    "Google restarts updates for some iOS apps after long pause triggered by lack of privacy labels - TechCrunch",
                  description:
                    "Google over the weekend began to update many of its flagship iOS apps after a lengthy delay caused by the company’s failure to add Apple’s newly required privacy labels in a timely fashion. Though Google earlier this year said it would “soon” begin to add the…",
                  url:
                    "http://techcrunch.com/2021/03/01/google-restarts-updates-for-some-ios-apps-after-long-pause-triggered-by-lack-of-privacy-labels/",
                  urlToImage:
                    "https://techcrunch.com/wp-content/uploads/2020/10/apple-fighting-google.jpg?w=711",
                  publishedAt: "2021-03-01T23:00:57Z",
                  content:
                    "Google over the weekend began to update many of its flagship iOS apps after a lengthy delay caused by the company’s failure to add Apple’s newly required privacy labels in a timely fashion. Though Go… [+3525 chars]",
                },
                {
                  source: {
                    id: "ign",
                    name: "IGN",
                  },
                  author: "Eric Song",
                  title:
                    "Daily Deals: Apple AirPods Pro for $190, RTX 3070 Laptop for $1240, God of War or Horizon Zero Dawn for $10 Each, and More - IGN - IGN",
                  description:
                    "There are some good deals out today. Score one of the best prices we've…",
                  url:
                    "https://www.ign.com/articles/daily-deals-apple-airpods-pro-for-190-rtx-3070-laptop-for-1240-god-of-war-or-horizon-zero-dawn-for-10-each-and-more",
                  urlToImage:
                    "https://assets1.ignimgs.com/2021/03/01/03012-1614618819110.jpg?width=1280",
                  publishedAt: "2021-03-01T17:23:37Z",
                  content: "Was this article informative?",
                },
              ],
              page: page,
            }
          : { articles: [], page: page };
      res.status(200).json(result);
      // res.status(400).json({message: 'An Error Occured'});
      break;

    default:
      res.status(200).json({ name: "John Doe" });
      break;
  }
};
