// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json({
        articles: [
          {
            author: "Marianne LeVine, Laura Barrón-López, Sarah Ferris",
            title:
              "Progressives push to squash Senate filibuster after minimum wage defeat - POLITICO",
            description:
              "The left is channeling its frustration after a setback in their push for a $15 hourly wage.",
            url:
              "https://www.politico.com/news/2021/02/26/progressives-minimum-wage-defeat-471772",
            urlToImage:
              "https://static.politico.com/dd/07/ec86a1184d0498b85e17c1dff4ad/210113-pramila-jayapal-gty-773.jpg",
            publishedAt: "2021-02-26T22:45:40Z",
            content:
              "Democrats pushed hard to raise the minimum wage as part of the pandemic relief measure, which the Senate can pass with just 51 votes thanks to the protections of the arcane budget reconciliation proc… [+6549 chars]",
          },
          {
            author: "n-decosta-klipa",
            title:
              "Why one Massachusetts lawmaker says the state’s vaccine rollout is a ‘textbook case study of structural racism’ - Boston.com",
            description:
              '"This was an entirely predictable — and, indeed, predicted —problem."',
            url:
              "https://www.boston.com/news/coronavirus/2021/02/26/sonia-chang-diaz-ma-vaccine-rollout-structural-racism",
            urlToImage:
              "https://www.boston.com/wp-content/uploads/2021/02/s3___bgmp-arc_arc-feeds_generic-photos_to-arc_01-07_pr_Chang-Diaz-60396b6f31618-850x478.jpg",
            publishedAt: "2021-02-26T22:40:49Z",
            content:
              "To some Massachusetts residents, the scramble to score one of the states limited number of COVID-19 vaccine appointments may feel like a lottery. And with around a million Bay Staters eligible to be … [+5803 chars]",
          },
          {
            author: "Zach Braziller",
            title:
              "Deshaun Watson is willing to lose millions sitting out for Texans - New York Post ",
            description:
              "The Texans won’t answer the phone to hear trade proposals for Deshaun Watson and the star quarterback is willing to miss regular season games if he’s not dealt. In other words, the stan…",
            url:
              "https://nypost.com/2021/02/26/deshaun-watson-rumors-qb-ok-losing-millions-by-sitting-out/",
            urlToImage:
              "https://nypost.com/wp-content/uploads/sites/2/2021/02/deshaun_sit.jpg?quality=90&strip=all&w=1200",
            publishedAt: "2021-02-26T22:31:00Z",
            content:
              "The Texans won’t answer the phone to hear trade proposals for Deshaun Watson and the star quarterback is willing to miss regular season games if he’s not dealt.\r\nIn other words, the standoff between … [+1108 chars]",
          },
          {
            author: "Carolyn L. Todd",
            title:
              "COVID-19 at the Gym: Every Single Participant in This Maskless Cycling Class Got Coronavirus - Self",
            description:
              "New CDC research on COVID-19 and gyms reminds us that heavy breathing inside with unmasked strangers is a bad idea.",
            url:
              "https://www.self.com/story/indoor-fitness-classes-covid-19-outbreaks",
            urlToImage:
              "https://media.self.com/photos/60393e24c65ffd1bc852b86a/2:1/w_1280,c_limit/indoor-cycling.jpg",
            publishedAt: "2021-02-26T22:16:26Z",
            content:
              "This week, new research provides a stark reminder that COVID-19 and the gym don't mix particularly well. Indoor group fitness classes are actually a pretty effective way to transmit the coronavirus, … [+3646 chars]",
          },
          {
            author: null,
            title:
              "Russell Wilson's trade destinations don't make sense! - Mina Kimes | NFL Live - ESPN",
            description:
              "Dan Orlovsky, Mina Kimes and Dan Graziano join Field Yates on NFL Live to discuss Seattle Seahawks quarterback Russell Wilson listing the Chicago Bears, Dall...",
            url: "https://www.youtube.com/watch?v=rXabaBDD_UY",
            urlToImage: "https://i.ytimg.com/vi/rXabaBDD_UY/maxresdefault.jpg",
            publishedAt: "2021-02-26T22:21:28Z",
            content: null,
          },
        ],
      });
      break;

    default:
      res.status(200).json({ name: "John Doe" });
      break;
  }
};
